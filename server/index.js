// ENDLESS DRIFT — онлайн-сервер.
// Держит комнаты (до 10 игроков) и пересылает позиции машин между игроками.
// Быстрый матч: подбор игроков по требованиям (режим, длина трассы, 5 или 10 игроков, машина/класс машины);
// когда комната набралась — отсчёт 5…1 и старт.
// Физику не считает: каждый игрок считает свою машину сам, сервер только раздаёт данные остальным.
// Запуск: npm install && npm start   (порт берётся из PORT, по умолчанию 8080)

const http = require('http');
const { WebSocketServer } = require('ws');
const { createStore } = require('./store');
const { createAccounts } = require('./accounts');

const PORT = process.env.PORT || 8080;
const MAX_PLAYERS = 10;
const MM_COUNTDOWN = 5; // секунд до старта, когда быстрый матч набрался
const MM_SIZES = [5, 10];
const CAR_RULES = ['any', 'class', 'same'];
const CLASSES = ['D', 'C', 'B', 'A', 'S'];
const MAX_MSG_PER_SEC = 120; // клиент шлёт позицию 60 раз/с + служебные сообщения
const TICK_HZ = 60;          // сервер раздаёт позиции всех игроков пачкой 60 раз в секунду
// античит: предельная скорость по классу машины (км/ч) с запасом на тюнинг и спуски
const CLASS_VMAX = { D: 200, C: 270, B: 300, A: 340, S: 460 };
const SPEED_SLACK = 1.3;
const SP = 2;                // шаг точек трассы, м (как в src/track.js)

const rooms = new Map(); // code -> room
let nextId = 1;

// режимы трассы, доступные онлайн (Выбывание — только против ботов)
const MODES = ['race', 'drift', 'free', 'time', 'speed', 'clean', 'escape'];
const MM_MODES = ['race', 'drift', 'time', 'speed', 'clean', 'escape'];
const clampInt = (v, a, b, d) => (Number.isFinite(+v) ? Math.max(a, Math.min(b, Math.round(+v))) : d);
const cleanName = (s) => String(s || '').replace(/[<>&"']/g, '').trim().slice(0, 16) || 'Игрок';

function makeCode() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let c;
  // 6 символов, обязательно есть буквы и цифры — угадать случайно практически невозможно
  do { c = Array.from({ length: 6 }, () => A[Math.floor(Math.random() * A.length)]).join(''); } while (rooms.has(c) || !/\d/.test(c) || !/[A-Z]/.test(c));
  return c;
}

function cleanConfig(c = {}) {
  return {
    map: clampInt(c.map, 0, 20, 0),
    mode: MODES.includes(c.mode) ? c.mode : 'race',
    len: clampInt(c.len, 0, 50, 5) === 0 ? 0 : clampInt(c.len, 5, 50, 5),
    fieldMode: ['obst', 'clean', 'flat'].includes(c.fieldMode) ? c.fieldMode : 'obst',
    car: clampInt(c.car, -1, 99, -1), // -1 = любые машины, иначе только эта
  };
}

function createRoom(isPublic, mm = null) {
  const room = {
    code: makeCode(), isPublic, mm, cdTimer: null, cdLeft: 0, host: null, players: new Map(),
    config: cleanConfig({ map: 0, mode: 'race', len: 5 }), state: 'lobby', seed: 0, racers: new Set(), done: new Set(), results: [],
  };
  rooms.set(room.code, room);
  return room;
}

// level — уровень из одиночной игры (присылает клиент), rating и pid — из аккаунта (null у гостей)
const pub = (p) => ({ id: p.id, name: p.name, car: p.car, color: p.color, inRace: p.inRace, cls: p.cls, look: p.look,
  level: p.level || 1, rating: p.acc ? p.acc.rating : null, pid: p.acc ? p.acc.id : null });
// привязка соединения к аккаунту по токену (сообщения join/profile с полем token)
function linkAccount(client, msg) {
  if (msg.token === undefined || !accounts) return;
  const acc = msg.token ? accounts.byToken(msg.token) : null;
  client.acc = acc || null;
  if (acc && msg.level === undefined) client.level = acc.level || 1;
}
// внешний тюнинг (антикрыло, диски, наклейки…) — только известные ключи и маленькие числа
const LOOK_KEYS = ['wing', 'rims', 'rimc', 'decal', 'low', 'bumper', 'skirts', 'hood', 'rear', 'roof', 'light', 'smoke', 'tint', 'exh', 'glow'];
function cleanLook(l) {
  const out = {};
  if (!l || typeof l !== 'object') return out;
  for (const k of LOOK_KEYS) if (l[k] !== undefined) out[k] = clampInt(l[k], 0, 31, 0);
  if (typeof l.paint === 'string' && /^#[0-9a-fA-F]{6}$/.test(l.paint)) out.paint = l.paint;
  return out;
}

// ---------- быстрый матч ----------
function cleanMM(m = {}) {
  const pool = Array.isArray(m.maps) ? m.maps.map((x) => clampInt(x, 0, 20, 0)).slice(0, 20) : [0];
  return {
    mode: MM_MODES.includes(m.mode) ? m.mode : 'race',
    len: clampInt(m.len, 0, 50, 10) === 0 ? 0 : clampInt(m.len, 5, 50, 10),
    size: MM_SIZES.includes(+m.size) ? +m.size : 5,
    carRule: CAR_RULES.includes(m.carRule) ? m.carRule : 'any',
    maps: pool.length ? pool : [0],
  };
}
// подходит ли машина игрока b под требование игрока a
const carOk = (a, b) => a.mmReq.carRule === 'any' || (a.mmReq.carRule === 'class' ? a.cls === b.cls : a.car === b.car);
function mmFits(room, client) {
  const m = room.mm, q = client.mmReq;
  if (!m || room.state !== 'lobby' || room.players.size >= m.size) return false;
  if (m.mode !== q.mode || m.len !== q.len || m.size !== q.size) return false;
  for (const p of room.players.values()) if (!carOk(p, client) || !carOk(client, p)) return false;
  return true;
}
function mmStatus(room) {
  broadcast(room, { t: 'mm', count: room.players.size, size: room.mm.size, state: room.cdTimer ? 'countdown' : room.state === 'lobby' ? 'search' : room.state, left: room.cdLeft });
}
function mmCheck(room) {
  if (!room.mm || room.state !== 'lobby') return;
  if (room.players.size >= room.mm.size && !room.cdTimer) {
    room.cdLeft = MM_COUNTDOWN;
    room.cdTimer = setInterval(() => {
      room.cdLeft--;
      if (room.cdLeft <= 0) {
        clearInterval(room.cdTimer); room.cdTimer = null;
        const pool = room.mm.maps;
        room.config = cleanConfig({ map: pool[Math.floor(Math.random() * pool.length)], mode: room.mm.mode, len: room.mm.len });
        startRoomRace(room);
        return;
      }
      mmStatus(room);
    }, 1000);
  } else if (room.players.size < room.mm.size && room.cdTimer) {
    // кто-то вышел во время отсчёта — ждём дальше
    clearInterval(room.cdTimer); room.cdTimer = null; room.cdLeft = 0;
  }
  mmStatus(room);
}

function startRoomRace(room) {
  room.state = 'racing';
  room.startAt = Date.now();
  room.seed = Math.floor(Math.random() * 1e6);
  // если хост выбрал определённую машину — едут только игроки на ней
  room.racers = new Set([...room.players.values()].filter((p) => room.config.car < 0 || p.car === room.config.car).map((p) => p.id));
  room.done = new Set();
  room.results = [];
  room.rated = false;
  // аккаунты участников фиксируем на старте: рейтинг посчитается, даже если игрок выйдет до финиша
  room.accOf = new Map();
  room.carOf = new Map();
  for (const id of room.racers) { const p = room.players.get(id); if (p.acc) room.accOf.set(id, p.acc.id); room.carOf.set(id, p.car); }
  for (const p of room.players.values()) { p.inRace = room.racers.has(p.id); resetAC(p); }
  broadcast(room, { t: 'start', seed: room.seed, config: room.config, racers: [...room.racers], players: [...room.players.values()].map(pub) });
}
function send(ws, msg) { if (ws.readyState === 1) ws.send(JSON.stringify(msg)); }
function broadcast(room, msg, exceptId) {
  const s = JSON.stringify(msg);
  for (const p of room.players.values()) if (p.id !== exceptId && p.ws.readyState === 1) p.ws.send(s);
}

function checkRaceEnd(room) {
  if (room.state !== 'racing') return;
  for (const id of room.racers) if (room.players.has(id) && !room.done.has(id)) return;
  // быстрый матч после заезда закрывается для новых игроков: каждый может сразу искать следующий
  room.state = room.mm ? 'done' : 'lobby';
  for (const p of room.players.values()) p.inRace = false;
  broadcast(room, { t: 'lobby', results: room.results, state: room.state });
  rateRoom(room);
}

// итоги заезда → рейтинг Эло, статистика и история аккаунтов (только если в заезде ≥2 игроков с аккаунтами)
function rateRoom(room) {
  if (room.rated || !accounts || !room.accOf) return;
  room.rated = true;
  const c = room.config, field = c.map >= 3 && c.map <= 5;
  let out = [];
  try {
    out = accounts.finishMatch({
      mode: field ? 'field' : c.mode, map: c.map, len: field ? 0 : c.len, field, results: room.results, accOf: room.accOf,
      carOf: (id) => { const car = room.carOf.get(id); return CAR_TABLE[car] ? CAR_TABLE[car].id : `car${car}`; },
    });
  } catch (e) { console.error('[rating]', e); return; }
  for (const r of out) {
    const p = room.players.get(r.connId);
    if (!p) continue;
    send(p.ws, { t: 'rating', rating: r.rating, delta: r.delta, place: r.place, of: r.of });
    if (p.acc && p.acc.id === r.accountId) broadcast(room, { t: 'player', p: pub(p) });
  }
}

function leave(client) {
  const room = client.room;
  if (!room) return;
  // вышел посреди заезда — записываем как сошедшего (иначе выходом можно было бы избежать поражения в рейтинге)
  if (room.state === 'racing' && room.racers.has(client.id) && !room.done.has(client.id)) {
    room.done.add(client.id);
    room.results.push({ id: client.id, name: client.name, finished: false, time: 0, score: 0, left: true });
  }
  room.players.delete(client.id);
  client.room = null;
  if (!room.players.size) { if (room.cdTimer) clearInterval(room.cdTimer); rooms.delete(room.code); return; }
  if (room.host === client.id) room.host = room.players.keys().next().value;
  broadcast(room, { t: 'left', id: client.id, host: room.host });
  checkRaceEnd(room);
  mmCheck(room);
}

function join(client, msg) {
  if (client.room) leave(client);
  let room = null;
  if (msg.code) {
    room = rooms.get(String(msg.code).toUpperCase().trim());
    if (!room || room.mm) return send(client.ws, { t: 'error', text: 'Комната не найдена. Проверь код.' });
  } else if (msg.mm || msg.quick) {
    // быстрый матч: ищем комнату, где совпадают режим, длина, размер и все требования по машинам
    client.car = clampInt(msg.car, 0, 99, 0);
    client.cls = carCls(client.car, msg.cls);
    client.mmReq = cleanMM(msg.mm || {});
    let best = null;
    for (const r of rooms.values()) if (mmFits(r, client) && (!best || r.players.size > best.players.size)) best = r;
    room = best || createRoom(true, { mode: client.mmReq.mode, len: client.mmReq.len, size: client.mmReq.size, maps: client.mmReq.maps });
  } else room = createRoom(false);
  const cap = room.mm ? room.mm.size : MAX_PLAYERS;
  if (room.players.size >= cap) return send(client.ws, { t: 'error', text: `Комната заполнена (максимум ${cap} игроков).` });
  if (room.state !== 'lobby' && room.mm) return send(client.ws, { t: 'error', text: 'Матч уже начался.' });

  client.name = cleanName(msg.name);
  client.car = clampInt(msg.car, 0, 99, 0);
  client.cls = carCls(client.car, msg.cls);
  client.color = clampInt(msg.color, 0, 9, 0);
  client.look = cleanLook(msg.look);
  if (msg.level !== undefined) client.level = clampInt(msg.level, 1, 999, 1);
  linkAccount(client, msg);
  client.inRace = false;
  client.room = room;
  room.players.set(client.id, client);
  if (!room.host) room.host = client.id;
  send(client.ws, {
    t: 'joined', id: client.id, code: room.code, host: room.host, config: room.config, state: room.state,
    isPublic: room.isPublic, players: [...room.players.values()].map(pub), mm: room.mm ? { mode: room.mm.mode, len: room.mm.len, size: room.mm.size, carRule: client.mmReq.carRule } : null,
  });
  broadcast(room, { t: 'player', p: pub(client) }, client.id);
  mmCheck(room);
}

// ---------- античит ----------
// Физику считает клиент, поэтому сервер проверяет правдоподобие: скорость не выше предела класса,
// позиция на трассе не «телепортируется», время финиша не меньше того, что видел сервер,
// игрок действительно доехал до финиша, очки не растут быстрее возможного.
function resetAC(p) { p.ac = { lastIdx: null, lastT: 0, moveAt: 0, maxIdx: 0, strikes: 0, flagged: false }; p.state = null; p.dirty = false; }
// таблица машин (генерируется из src/cars.js: node tools/server-cars.mjs) — класс и максималка по индексу машины,
// чтобы нельзя было выдать медленную машину за быструю
let CAR_TABLE = [];
try { CAR_TABLE = require('./cars.json'); } catch { /* нет таблицы — работаем по классам */ }
// класс растёт от тюнинга: принимаем заявленный клиентом класс, но не ниже заводского класса машины
const carCls = (car, cls) => {
  const base = CAR_TABLE[car] ? CAR_TABLE[car].cls : 'C';
  return CLASSES.includes(cls) && CLASSES.indexOf(cls) > CLASSES.indexOf(base) ? cls : base;
};
function vmaxMs(p) {
  const t = CAR_TABLE[p.car];
  return (t ? t.vmax * 1.2 : (CLASS_VMAX[p.cls] || 460)) * SPEED_SLACK / 3.6;
}
function checkMove(p, room, d) {
  if (!p.ac) resetAC(p);
  const ac = p.ac, now = Date.now();
  const spd = Math.abs(d[4]), idx = d[5];
  if (spd > vmaxMs(p)) ac.strikes += 2;
  if (!ac.moveAt && spd > 1) ac.moveAt = now;
  if (ac.lastIdx !== null) {
    const dt = Math.max(0.016, (now - ac.lastT) / 1000);
    const dIdx = idx - ac.lastIdx;
    // за dt нельзя проехать больше, чем позволяет предельная скорость (+ запас на неровную доставку пакетов)
    if (dIdx * SP > vmaxMs(p) * dt + 25) ac.strikes += 3;
  }
  ac.lastIdx = idx; ac.lastT = now; ac.maxIdx = Math.max(ac.maxIdx, idx);
  if (ac.strikes > 30) ac.flagged = true;
  // штрафы постепенно «остывают»: одиночный рывок из-за лага не приводит к бану
  if (ac.strikes > 0 && Math.random() < 0.05) ac.strikes--;
}
function verifyFinish(p, room, msg) {
  const ac = p.ac || {};
  const c = room.config, now = Date.now();
  let finished = !!msg.finished;
  let time = Number.isFinite(+msg.time) ? Math.max(0, +msg.time) : 0;
  let score = clampInt(msg.score, 0, 1e9, 0);
  const lenM = c.len * 1000;
  const field = c.map >= 3 && c.map <= 5; // полигоны: без финиша
  const serverTime = ac.moveAt ? (now - ac.moveAt) / 1000 : 0;
  let cheat = !!ac.flagged;
  if (finished) {
    if (!c.len || field) finished = false; // на бесконечной трассе финиша нет
    else {
      const finishIdx = 6 + Math.round(lenM / SP);
      const minTime = lenM / vmaxMs(p);
      if (time < minTime) cheat = true;                     // быстрее, чем физически возможно
      if (ac.maxIdx < finishIdx - 60) cheat = true;          // не доехал до финиша по данным сервера
      if (serverTime && time < serverTime - 2.5) time = Math.round(serverTime * 1000) / 1000; // время не меньше серверного
    }
  }
  const elapsed = Math.max(serverTime, 1);
  if (score > elapsed * 30000 + 25000) cheat = true;
  if (cheat) { finished = false; score = 0; time = 0; }
  return { id: p.id, name: p.name, finished, time, score, ...(cheat ? { flagged: true } : {}) };
}

// ---------- тик: позиции всех игроков одним сообщением ----------
setInterval(() => {
  for (const room of rooms.values()) {
    if (room.state !== 'racing') continue;
    // только свежие состояния: повтор старого пакета сбил бы интерполяцию у клиентов
    const list = [];
    for (const p of room.players.values()) if (p.dirty && p.state) { list.push([p.id, ...p.state]); p.dirty = false; }
    if (!list.length) continue;
    for (const p of room.players.values()) {
      if (p.ws.readyState !== 1) continue;
      const others = list.filter((e) => e[0] !== p.id);
      if (others.length) p.ws.send(JSON.stringify({ t: 'S', p: others }));
    }
  }
}, 1000 / TICK_HZ);

const server = http.createServer((req, res) => {
  // HTTP API аккаунтов и таблиц лидеров (/api/...)
  if (accounts && accounts.handleHttp(req, res)) return;
  if (req.url.startsWith('/api/')) { res.writeHead(503, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' }); res.end('{"error":"Сервер запускается, попробуй через минуту."}'); return; }
  // простая страница: Render проверяет, что сервер жив, и «будит» его
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
  let players = 0, searching = 0; for (const r of rooms.values()) { players += r.players.size; if (r.mm && r.state === 'lobby') searching += r.players.size; }
  res.end(`ENDLESS DRIFT server OK. Комнат: ${rooms.size}, игроков: ${players}, ищут матч: ${searching}\n`);
});

const wss = new WebSocketServer({ server, maxPayload: 8 * 1024 });

wss.on('connection', (ws) => {
  const client = { id: nextId++, ws, room: null, msgCount: 0, msgT: Date.now(), acc: null, level: 1 };
  resetAC(client);
  ws.on('pong', () => { ws._edDead = false; });
  ws.on('message', (data) => {
    // защита от спама
    const now = Date.now();
    if (now - client.msgT > 1000) { client.msgT = now; client.msgCount = 0; }
    if (++client.msgCount > MAX_MSG_PER_SEC) return;
    let msg;
    try { msg = JSON.parse(data); } catch { return; }
    if (!msg || typeof msg.t !== 'string') return;
    const room = client.room;

    switch (msg.t) {
      case 'join': join(client, msg); break;
      case 'leave': leave(client); break;
      case 'profile': // смена машины / имени в лобби
        if (!room) break;
        if (msg.name !== undefined) client.name = cleanName(msg.name);
        // в быстром матче машину не меняют: по ней подбирали соперников
        if (msg.car !== undefined && !room.mm) { client.car = clampInt(msg.car, 0, 99, 0); client.cls = carCls(client.car, msg.cls); }
        if (msg.color !== undefined) client.color = clampInt(msg.color, 0, 9, 0);
        if (msg.look !== undefined) client.look = cleanLook(msg.look);
        if (msg.level !== undefined) client.level = clampInt(msg.level, 1, 999, 1);
        linkAccount(client, msg);
        broadcast(room, { t: 'player', p: pub(client) });
        break;
      case 'config':
        if (!room || room.mm || room.host !== client.id || room.state !== 'lobby') break;
        room.config = cleanConfig(msg.config);
        broadcast(room, { t: 'config', config: room.config });
        break;
      case 'start':
        if (!room || room.mm || room.host !== client.id) break;
        // если прошлый заезд ещё не закончен (кто-то не доехал / бесконечная трасса / свернул вкладку),
        // хост может начать новый: недоехавшие записываются как сошедшие
        // (раньше эти записи тут же стирались новым стартом — теперь итоги прошлого заезда рассылаются всем)
        if (room.state === 'racing') {
          for (const id of room.racers) if (room.players.has(id) && !room.done.has(id)) {
            const p = room.players.get(id); room.done.add(id);
            room.results.push({ id, name: p.name, finished: false, time: 0, score: 0 });
          }
          broadcast(room, { t: 'lobby', results: room.results, state: 'lobby' });
          rateRoom(room);
        }
        startRoomRace(room);
        break;
      case 's': // состояние машины: сохраняем, раздаём пачкой в тике сервера
        if (!room || room.state !== 'racing' || !room.racers.has(client.id) || room.done.has(client.id) || !Array.isArray(msg.d) || msg.d.length < 6 || msg.d.length > 12) break;
        {
          const d = msg.d.map((v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : 0));
          checkMove(client, room, d);
          client.state = d; client.dirty = true;
        }
        break;
      case 'fin': // финиш или выход из заезда
        if (!room || room.state !== 'racing' || !room.racers.has(client.id) || room.done.has(client.id)) break;
        room.done.add(client.id);
        client.inRace = false;
        {
          const r = verifyFinish(client, room, msg);
          room.results.push(r);
          broadcast(room, { t: 'fin', r });
        }
        checkRaceEnd(room);
        break;
      default: break;
    }
  });
  ws.on('close', () => leave(client));
  ws.on('error', () => {});
});

// отключаем «мёртвые» соединения
setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws._edDead) { ws.terminate(); return; }
    ws._edDead = true;
    ws.ping();
  });
}, 20000);

// ---------- хранилище аккаунтов ----------
let store = null, accounts = null;
async function boot() {
  // база может «просыпаться» (Neon free засыпает) — несколько попыток, затем запасной вариант на файлах
  for (let attempt = 1; ; attempt++) {
    store = createStore();
    try { await store.init(); break; } catch (e) {
      console.error(`[store] не удалось подключиться к базе (попытка ${attempt}):`, e.message);
      if (store.close) store.close().catch(() => {});
      if (attempt >= 5) {
        console.error('[store] ВНИМАНИЕ: работаю на файлах — аккаунты, созданные сейчас, НЕ попадут в базу. Проверь DATABASE_URL.');
        const prev = process.env.DATABASE_URL; delete process.env.DATABASE_URL;
        store = createStore(); await store.init(); process.env.DATABASE_URL = prev;
        break;
      }
      await new Promise((r) => setTimeout(r, 3000 * attempt));
    }
  }
  accounts = createAccounts(store, {
    registerPerHour: +process.env.REGISTER_PER_HOUR || 10, postPerMin: +process.env.POST_PER_MIN || 60,
  });
  console.log(`[server] аккаунты готовы (хранилище: ${store.kind})`);
}
// порт открываем сразу (Render проверяет здоровье по GET /), API отвечает 503, пока база не загрузилась
server.listen(PORT, () => console.log(`ENDLESS DRIFT server: порт ${PORT}`));
let stopping = false;
async function shutdown(sig) {
  if (stopping) return;
  stopping = true;
  console.log(`[server] ${sig}: сохраняю данные…`);
  try { if (store) await store.flush(); } catch (e) { console.error('[store] flush:', e.message); }
  process.exit(0);
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
boot().catch((e) => { console.error('[server] запуск не удался:', e); process.exit(1); });
