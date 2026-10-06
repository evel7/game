// ENDLESS DRIFT — онлайн-сервер.
// Держит комнаты (до 10 игроков) и пересылает позиции машин между игроками.
// Быстрый матч: подбор игроков по требованиям (режим, длина трассы, 5 или 10 игроков, машина/класс машины);
// когда комната набралась — отсчёт 5…1 и старт.
// Физику не считает: каждый игрок считает свою машину сам, сервер только раздаёт данные остальным.
// Запуск: npm install && npm start   (порт берётся из PORT, по умолчанию 8080)

const http = require('http');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 8080;
const MAX_PLAYERS = 10;
const MM_COUNTDOWN = 5; // секунд до старта, когда быстрый матч набрался
const MM_SIZES = [5, 10];
const CAR_RULES = ['any', 'class', 'same'];
const CLASSES = ['D', 'C', 'B', 'A', 'S'];
const MAX_MSG_PER_SEC = 40;

const rooms = new Map(); // code -> room
let nextId = 1;

const MODES = ['race', 'drift', 'free'];
const clampInt = (v, a, b, d) => (Number.isFinite(+v) ? Math.max(a, Math.min(b, Math.round(+v))) : d);
const cleanName = (s) => String(s || '').replace(/[<>&"']/g, '').trim().slice(0, 16) || 'Игрок';

function makeCode() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let c;
  do { c = Array.from({ length: 4 }, () => A[Math.floor(Math.random() * A.length)]).join(''); } while (rooms.has(c));
  return c;
}

function cleanConfig(c = {}) {
  return {
    map: clampInt(c.map, 0, 20, 0),
    mode: MODES.includes(c.mode) ? c.mode : 'race',
    len: clampInt(c.len, 0, 50, 5) === 0 ? 0 : clampInt(c.len, 5, 50, 5),
    fieldMode: ['obst', 'clean', 'flat'].includes(c.fieldMode) ? c.fieldMode : 'obst',
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

const pub = (p) => ({ id: p.id, name: p.name, car: p.car, color: p.color, inRace: p.inRace, cls: p.cls });

// ---------- быстрый матч ----------
function cleanMM(m = {}) {
  const pool = Array.isArray(m.maps) ? m.maps.map((x) => clampInt(x, 0, 20, 0)).slice(0, 20) : [0];
  return {
    mode: m.mode === 'drift' ? 'drift' : 'race',
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
  room.seed = Math.floor(Math.random() * 1e6);
  room.racers = new Set(room.players.keys());
  room.done = new Set();
  room.results = [];
  for (const p of room.players.values()) p.inRace = true;
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
}

function leave(client) {
  const room = client.room;
  if (!room) return;
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
    if (!room) return send(client.ws, { t: 'error', text: 'Комната не найдена. Проверь код.' });
  } else if (msg.mm || msg.quick) {
    // быстрый матч: ищем комнату, где совпадают режим, длина, размер и все требования по машинам
    client.car = clampInt(msg.car, 0, 99, 0);
    client.cls = CLASSES.includes(msg.cls) ? msg.cls : 'C';
    client.mmReq = cleanMM(msg.mm || {});
    let best = null;
    for (const r of rooms.values()) if (mmFits(r, client) && (!best || r.players.size > best.players.size)) best = r;
    room = best || createRoom(true, { mode: client.mmReq.mode, len: client.mmReq.len, size: client.mmReq.size, maps: client.mmReq.maps });
  } else room = createRoom(false);
  if (room.players.size >= (room.mm ? room.mm.size : MAX_PLAYERS)) return send(client.ws, { t: 'error', text: `Комната заполнена (максимум ${MAX_PLAYERS} игроков).` });
  if (room.state !== 'lobby' && room.mm) return send(client.ws, { t: 'error', text: 'Матч уже начался.' });

  client.name = cleanName(msg.name);
  client.car = clampInt(msg.car, 0, 99, 0);
  client.cls = CLASSES.includes(msg.cls) ? msg.cls : 'C';
  client.color = clampInt(msg.color, 0, 9, 0);
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

const server = http.createServer((req, res) => {
  // простая страница: Render проверяет, что сервер жив, и «будит» его
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
  let players = 0, searching = 0; for (const r of rooms.values()) { players += r.players.size; if (r.mm && r.state === 'lobby') searching += r.players.size; }
  res.end(`ENDLESS DRIFT server OK. Комнат: ${rooms.size}, игроков: ${players}, ищут матч: ${searching}\n`);
});

const wss = new WebSocketServer({ server, maxPayload: 8 * 1024 });

wss.on('connection', (ws) => {
  const client = { id: nextId++, ws, room: null, msgCount: 0, msgT: Date.now() };
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
        if (msg.car !== undefined && !room.mm) { client.car = clampInt(msg.car, 0, 99, 0); if (CLASSES.includes(msg.cls)) client.cls = msg.cls; }
        if (msg.color !== undefined) client.color = clampInt(msg.color, 0, 9, 0);
        broadcast(room, { t: 'player', p: pub(client) });
        break;
      case 'config':
        if (!room || room.mm || room.host !== client.id || room.state !== 'lobby') break;
        room.config = cleanConfig(msg.config);
        broadcast(room, { t: 'config', config: room.config });
        break;
      case 'start':
        if (!room || room.mm || room.host !== client.id || room.state !== 'lobby') break;
        startRoomRace(room);
        break;
      case 's': // состояние машины → всем остальным в комнате
        if (!room || room.state !== 'racing' || !Array.isArray(msg.d) || msg.d.length > 12) break;
        broadcast(room, { t: 's', id: client.id, d: msg.d.map((v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : 0)) }, client.id);
        break;
      case 'fin': // финиш или выход из заезда
        if (!room || room.state !== 'racing' || !room.racers.has(client.id) || room.done.has(client.id)) break;
        room.done.add(client.id);
        client.inRace = false;
        {
          const r = { id: client.id, name: client.name, finished: !!msg.finished, time: +msg.time || 0, score: clampInt(msg.score, 0, 1e9, 0) };
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

server.listen(PORT, () => console.log(`ENDLESS DRIFT server: порт ${PORT}`));
