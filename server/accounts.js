// ENDLESS DRIFT — аккаунты, облачные сохранения, онлайн-рейтинг (Эло), история матчей и таблицы лидеров.
// HTTP API: см. server/README.md и шапку src/api.js (там точные форматы запросов/ответов).
//
// Доверие к данным:
//   • stats / records / save присылает клиент (одиночная игра считается в браузере) — это «client-trusted»:
//     сервер только проверяет типы и обрезает до разумных пределов; в профиле помечено trusted:false;
//   • rating / wins / matches / losses / online.history / онлайн-рекорды считает только сервер
//     по итогам комнатных заездов (с античитом из index.js).

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { recBetter, TIME_MODES } = require('./store');

// ---------- справочники ----------
const MODE_IDS = ['race', 'drift', 'free', 'time', 'elim', 'speed', 'clean', 'escape', 'field'];
const FALLBACK_MAPS = ['desert', 'snow', 'city', 'field_asphalt', 'field_beach', 'field_snow', 'taiga', 'riviera', 'magma', 'sakura', 'baikal'];
// порядок карт берём из src/maps.js (индекс карты в онлайне → её id); если файла нет — запасной список
function loadMapIds() {
  try {
    const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'maps.js'), 'utf8');
    const start = src.indexOf('MAPS = [');
    if (start < 0) return FALLBACK_MAPS;
    // id карт стоят на 4-м отступе внутри массива MAPS
    const ids = [...src.slice(start).matchAll(/^ {4}id: '([a-z0-9_]+)'/gm)].map((m) => m[1]);
    if (ids.length < 3) return FALLBACK_MAPS;
    // карты, известные запасному списку, но не найденные в файле, тоже разрешаем (на случай переименований)
    return [...ids, ...FALLBACK_MAPS.filter((x) => !ids.includes(x))];
  } catch { return FALLBACK_MAPS; }
}
const MAP_IDS = loadMapIds();
const mapIdOf = (idx) => MAP_IDS[idx] || `map${idx}`;
const START_RATING = 1000;
const HISTORY_MAX = 30;
const SAVE_MAX = 128 * 1024;
const BODY_MAX = 160 * 1024;

const clampNum = (v, a, b, d = 0) => (Number.isFinite(+v) && v !== null && v !== '' && typeof v !== 'object' ? Math.max(a, Math.min(b, +v)) : d);
const clampInt = (v, a, b, d = 0) => Math.round(clampNum(v, a, b, d));
const cleanName = (s) => String(s ?? '').replace(/[<>&"']/g, '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 16) || 'Игрок';
const cleanCar = (s) => String(s ?? '').replace(/[<>&"'\u0000-\u001f]/g, '').trim().slice(0, 32);
const sha256 = (t) => crypto.createHash('sha256').update(t).digest('hex');
// токен: 64 hex-символа; код восстановления — тот же токен группами по 4 (дефисы/пробелы/регистр игнорируются)
const normToken = (t) => { const h = String(t ?? '').toLowerCase().replace(/[^0-9a-f]/g, ''); return h.length === 64 ? h : null; };
const fmtRecovery = (t) => t.toUpperCase().match(/.{4}/g).join('-');
const byTimeMode = (mode, len) => len > 0 && TIME_MODES.includes(mode);
const fmtInt = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const fmtTime = (t) => { const m = Math.floor(t / 60), s = t - m * 60; return `${m}:${s < 10 ? '0' : ''}${s.toFixed(3)}`; };

// ---------- ограничение частоты по IP ----------
function limiter(max, windowMs) {
  const hits = new Map();
  setInterval(() => { const now = Date.now(); for (const [k, v] of hits) if (now - v.t > windowMs) hits.delete(k); }, windowMs).unref();
  return (ip) => {
    const now = Date.now();
    let h = hits.get(ip);
    if (!h || now - h.t > windowMs) { h = { t: now, n: 0 }; hits.set(ip, h); }
    return ++h.n <= max;
  };
}

function createAccounts(store, opts = {}) {
  const regLimit = limiter(opts.registerPerHour ?? 10, 3600e3);
  const postLimit = limiter(opts.postPerMin ?? 60, 60e3);
  const getLimit = limiter(opts.getPerMin ?? 600, 60e3);
  const carIdOf = opts.carIdOf || ((i) => `car${i}`);

  // ---------- игроки ----------
  // token — свой токен клиента (пересоздание аккаунта, который сервер потерял), иначе новый случайный
  function newPlayer(name, token = null) {
    let id;
    do { id = crypto.randomBytes(5).toString('hex'); } while (store.players.has(id));
    token = token || crypto.randomBytes(32).toString('hex');
    const p = {
      id, tokenHash: sha256(token), name: cleanName(name), rating: START_RATING, wins: 0, matches: 0, level: 1, updatedAt: Date.now(),
      data: { createdAt: Date.now(), stats: null, online: { losses: 0, modeStats: {}, history: [] } },
    };
    store.addPlayer(p);
    return { p, token };
  }
  const online = (p) => {
    if (!p.data) p.data = {};
    if (!p.data.online) p.data.online = { losses: 0, modeStats: {}, history: [] };
    return p.data.online;
  };
  function byToken(t) { const n = normToken(t); return n ? store.byTokenHash(sha256(n)) : null; }

  // ---------- проверка данных клиента ----------
  function cleanStats(s) {
    if (!s || typeof s !== 'object') return null;
    const I = (k, max) => clampInt(s[k], 0, max, 0);
    const out = {
      level: clampInt(s.level, 1, 999, 1), xp: I('xp', 1e12), money: I('money', 1e12),
      carsOwned: I('carsOwned', 999), carsTotal: I('carsTotal', 999),
      achievements: I('achievements', 9999), achievementsTotal: I('achievementsTotal', 9999),
      races: I('races', 1e7), wins: I('wins', 1e7), losses: I('losses', 1e7),
      bestScore: I('bestScore', 1e8), bestDrift: I('bestDrift', 1e8), maxSpeed: I('maxSpeed', 1000), distance: I('distance', 1e10),
      modeStats: {}, trusted: false,
    };
    if (s.modeStats && typeof s.modeStats === 'object') {
      for (const m of MODE_IDS) {
        const v = s.modeStats[m];
        if (v && typeof v === 'object') out.modeStats[m] = { races: clampInt(v.races, 0, 1e7), wins: clampInt(v.wins, 0, 1e7), best: clampInt(v.best, 0, 1e8) };
      }
    }
    return out;
  }
  function cleanRecord(r, pid) {
    if (!r || typeof r !== 'object' || !MODE_IDS.includes(r.mode) || !MAP_IDS.includes(r.map)) return null;
    const len = clampInt(r.len, 0, 50, 0);
    const score = clampInt(r.score, 0, 1e8, 0), time = Math.round(clampNum(r.time, 0, 36000, 0) * 1000) / 1000;
    if (!score && !time) return null;
    return { player_id: pid, mode: r.mode, map: r.map, len, score, time, car: cleanCar(r.car), at: clampInt(r.at, 0, Date.now() + 864e5, Date.now()) || Date.now(), online: false };
  }

  // ---------- таблицы лидеров (кэш до следующего изменения хранилища) ----------
  let cache = { v: -1, boards: new Map() };
  const BOARDS = {
    rating: { filter: (p) => p.matches > 0, val: (p) => p.rating, cmp: (a, b) => b.rating - a.rating || b.matches - a.matches, label: (v) => `${v}` },
    wins: { filter: (p) => p.matches > 0, val: (p) => p.wins, cmp: (a, b) => b.wins - a.wins || b.rating - a.rating, label: (v) => `${v} побед` },
    level: { filter: () => true, val: (p) => p.level, cmp: (a, b) => b.level - a.level || ((b.data.stats || {}).xp || 0) - ((a.data.stats || {}).xp || 0), label: (v) => `Ур. ${v}` },
    drift: { filter: (p) => st(p).bestDrift > 0, val: (p) => st(p).bestDrift, cmp: (a, b) => st(b).bestDrift - st(a).bestDrift, label: (v) => `${fmtInt(v)} очк.` },
    speed: { filter: (p) => st(p).maxSpeed > 0, val: (p) => st(p).maxSpeed, cmp: (a, b) => st(b).maxSpeed - st(a).maxSpeed, label: (v) => `${v} км/ч` },
    distance: { filter: (p) => st(p).distance > 0, val: (p) => st(p).distance, cmp: (a, b) => st(b).distance - st(a).distance, label: (v) => `${(v / 1000).toFixed(1)} км` },
  };
  function st(p) { return (p.data && p.data.stats) || {}; }
  function boardList(board, mode, map, len) {
    if (cache.v !== store.version) cache = { v: store.version, boards: new Map() };
    const key = `${board}|${mode}|${map}|${len}`;
    let list = cache.boards.get(key);
    if (list) return list;
    if (board === 'mode') {
      // лучший результат каждого игрока в режиме (с фильтром по карте и длине)
      const timed = len !== null && byTimeMode(mode, len);
      const best = new Map();
      for (const r of store.records.values()) {
        if (r.mode !== mode || (map && r.map !== map) || (len !== null && r.len !== len)) continue;
        if (timed ? !(r.time > 0) : !(r.score > 0)) continue;
        if (!store.players.has(r.player_id)) continue;
        const old = best.get(r.player_id);
        if (!old || (timed ? recBetter(r, old) : r.score > old.score)) best.set(r.player_id, r);
      }
      list = [...best.values()].sort(timed ? (a, b) => a.time - b.time || b.score - a.score : (a, b) => b.score - a.score || a.at - b.at).map((r) => {
        const p = store.players.get(r.player_id);
        return { id: p.id, p, best: timed ? r.time : r.score, bestLabel: timed ? fmtTime(r.time) : `${fmtInt(r.score)} очк.`,
          map: r.map, len: r.len, car: r.car, time: r.time, score: r.score, online: !!r.online, at: r.at };
      });
    } else {
      const b = BOARDS[board];
      list = [...store.players.values()].filter(b.filter).sort((x, y) => b.cmp(x, y) || x.id.localeCompare(y.id))
        .map((p) => { const v = b.val(p); return { id: p.id, p, best: v, bestLabel: b.label(v) }; });
    }
    cache.boards.set(key, list);
    return list;
  }
  const rowOut = (e, i) => {
    const { p, ...rest } = e;
    return { rank: i + 1, id: p.id, name: p.name, level: p.level, rating: p.rating, wins: p.wins, matches: p.matches, ...rest };
  };
  function ratingRank(p) {
    if (!p.matches) return null;
    const i = boardList('rating', null, null, null).findIndex((e) => e.id === p.id);
    return i < 0 ? null : i + 1;
  }

  // ---------- профиль ----------
  function publicProfile(p) {
    const o = online(p), s = p.data.stats;
    const recs = [...store.records.values()].filter((r) => r.player_id === p.id)
      .sort((a, b) => b.score - a.score).slice(0, 20)
      .map((r) => ({ mode: r.mode, map: r.map, len: r.len, score: r.score, time: r.time, car: r.car, at: r.at, online: !!r.online }));
    return {
      id: p.id, name: p.name, level: p.level, xp: s ? s.xp : 0, rating: p.rating, ratingRank: ratingRank(p),
      wins: p.wins, matches: p.matches, losses: o.losses || 0, winRate: p.matches ? Math.round((p.wins / p.matches) * 1000) / 1000 : 0,
      best: { score: s ? s.bestScore : 0, drift: s ? s.bestDrift : 0, speed: s ? s.maxSpeed : 0, distance: s ? s.distance : 0 },
      stats: s || null,
      online: { modeStats: o.modeStats || {}, history: (o.history || []).slice(0, HISTORY_MAX) },
      records: recs, createdAt: p.data.createdAt || null, updatedAt: p.updatedAt || null,
    };
  }

  // ---------- онлайн-матч: места, Эло, статистика ----------
  // results: room.results [{id, name, finished, time, score, flagged?}], accOf: Map(connId → accountId)
  // → [{connId, accountId, rating, delta, place, of}]
  function finishMatch({ mode, map, len, field, results, accOf, carOf }) {
    if (!results || results.length < 2) return [];
    const byScore = mode === 'drift' || !len || field;
    const cmp = (a, b) => {
      if (!!a.flagged !== !!b.flagged) return a.flagged ? 1 : -1;
      if (a.flagged) return 0;
      if (byScore) return b.score - a.score;
      if (a.finished !== b.finished) return a.finished ? -1 : 1;
      return a.finished ? a.time - b.time : b.score - a.score;
    };
    const sorted = results.slice().sort(cmp);
    const placeOf = new Map();
    sorted.forEach((r, i) => { placeOf.set(r, i > 0 && cmp(sorted[i - 1], r) === 0 ? placeOf.get(sorted[i - 1]) : i + 1); });
    const of = results.length;
    // участники с аккаунтами (один аккаунт считается один раз — лучший его результат)
    const seen = new Set(), part = [];
    for (const r of sorted) {
      const accId = accOf.get(r.id);
      if (!accId || seen.has(accId)) continue;
      const p = store.players.get(accId);
      if (!p) continue;
      seen.add(accId);
      part.push({ r, p, place: placeOf.get(r), R: p.rating });
    }
    if (part.length < 2) return [];
    const n = part.length, K = 32 / (n - 1);
    const out = [];
    for (const a of part) {
      let d = 0;
      for (const b of part) {
        if (a === b) continue;
        const E = 1 / (1 + 10 ** ((b.R - a.R) / 400));
        const S = a.place < b.place ? 1 : a.place === b.place ? 0.5 : 0;
        d += K * (S - E);
      }
      if (a.r.flagged) d = Math.min(0, d);
      a.delta = Math.round(d);
    }
    const now = Date.now(), mapId = typeof map === 'number' ? mapIdOf(map) : String(map);
    for (const a of part) {
      const { p, r } = a, o = online(p);
      const before = p.rating;
      p.rating = Math.max(0, p.rating + a.delta);
      const delta = p.rating - before;
      const win = a.place === 1 && !r.flagged;
      p.matches++;
      if (win) p.wins++; else o.losses = (o.losses || 0) + 1; // поражение = любое место, кроме 1-го
      const ms = o.modeStats[mode] || (o.modeStats[mode] = { matches: 0, wins: 0, best: 0, bestTime: 0 });
      ms.matches++; if (win) ms.wins++;
      if (!r.flagged) {
        ms.best = Math.max(ms.best || 0, r.score || 0);
        if (r.finished && len > 0 && r.time > 0) ms.bestTime = ms.bestTime ? Math.min(ms.bestTime, r.time) : r.time;
      }
      o.history.unshift({ at: now, mode, map: mapId, len, place: a.place, of, finished: !!r.finished, time: r.time || 0, score: r.score || 0,
        ...(r.flagged ? { flagged: true } : {}), ratingDelta: delta, rating: p.rating });
      if (o.history.length > HISTORY_MAX) o.history.length = HISTORY_MAX;
      // проверенный сервером онлайн-результат идёт и в рекорды режима
      if (!r.flagged && (r.score > 0 || (r.finished && r.time > 0))) {
        store.putRecord({ player_id: p.id, mode, map: mapId, len, score: Math.min(1e8, Math.round(r.score || 0)), time: r.finished ? r.time : 0,
          car: carOf ? cleanCar(carOf(r.id)) : '', at: now, online: true });
      }
      store.touchPlayer(p);
      out.push({ connId: r.id, accountId: p.id, rating: p.rating, delta, place: a.place, of });
    }
    return out;
  }

  // ---------- HTTP ----------
  const CORS = {
    'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Max-Age': '86400',
  };
  function json(res, code, obj) {
    const body = JSON.stringify(obj);
    res.writeHead(code, { ...CORS, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(body);
  }
  const err = (res, code, text) => json(res, code, { error: text });
  const ipOf = (req) => String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || '?';
  function readBody(req) {
    return new Promise((resolve, reject) => {
      let size = 0; const chunks = [];
      const len = +req.headers['content-length'];
      if (len > BODY_MAX) { reject(Object.assign(new Error('Слишком большой запрос'), { code: 413 })); req.resume(); return; }
      req.on('data', (c) => {
        size += c.length;
        if (size > BODY_MAX) { reject(Object.assign(new Error('Слишком большой запрос'), { code: 413 })); req.destroy(); return; }
        chunks.push(c);
      });
      req.on('end', () => {
        const txt = Buffer.concat(chunks).toString('utf8');
        if (!txt.trim()) { resolve({}); return; }
        try {
          const v = JSON.parse(txt);
          if (!v || typeof v !== 'object' || Array.isArray(v)) throw new Error('bad');
          resolve(v);
        } catch { reject(Object.assign(new Error('Неверный JSON'), { code: 400 })); }
      });
      req.on('error', () => reject(Object.assign(new Error('Ошибка чтения запроса'), { code: 400 })));
    });
  }
  const tokenOf = (req, body, q) => {
    const h = String(req.headers.authorization || '');
    if (/^Bearer\s+/i.test(h)) return h.replace(/^Bearer\s+/i, '');
    return (body && body.token) || (q && q.get('token')) || null;
  };

  const routes = {
    'POST /api/register': async (req, res, body) => {
      if (!regLimit(ipOf(req))) return err(res, 429, 'Слишком много регистраций с этого адреса. Попробуй через час.');
      const { p, token } = newPlayer(body.name);
      await store.flush().catch((e) => console.error('[accounts] flush:', e.message));
      json(res, 200, { id: p.id, token, recovery: fmtRecovery(token), name: p.name, profile: publicProfile(p) });
    },
    'POST /api/sync': async (req, res, body) => {
      const tok = tokenOf(req, body);
      let p = byToken(tok), recreated = false;
      if (!p && body.recreate && normToken(tok) && body.save) {
        // сервер потерял аккаунт (базу пересоздали/очистили), а у клиента остался прогресс и код:
        // создаём аккаунт заново с тем же токеном — старый код восстановления снова работает.
        // Токен — 256 бит случайности, совпасть с чужим не может; лимит как у регистрации.
        if (!regLimit(ipOf(req))) return err(res, 429, 'Слишком много регистраций с этого адреса. Попробуй через час.');
        p = newPlayer(body.name, normToken(tok)).p;
        recreated = true;
      }
      if (!p) return err(res, 401, 'Аккаунт не найден: неверный токен или код восстановления.');
      let saveStr = null;
      if (body.save !== undefined && body.save !== null) {
        saveStr = JSON.stringify(body.save);
        if (Buffer.byteLength(saveStr) > SAVE_MAX) return err(res, 413, 'Сохранение слишком большое (больше 128 КБ).');
      }
      if (body.name !== undefined) p.name = cleanName(body.name);
      const statsBefore = p.data.stats;
      const stats = cleanStats(body.stats);
      if (stats) { p.data.stats = stats; p.level = stats.level; }
      let improved = 0;
      if (Array.isArray(body.records)) {
        for (const raw of body.records.slice(0, 500)) {
          const r = cleanRecord(raw, p.id);
          if (r && store.putRecord(r)) improved++;
        }
      }
      // защита от перезаписи: если в облаке прогресс с бОльшим опытом (опыт только растёт), а устройство
      // прислало более старый (например, ноутбук не открывали неделю, а играли на телефоне) — сохранение не трогаем
      const cloudXp = p.data.saveXp || 0, newXp = stats ? stats.xp : clampInt(body.save && body.save.profile && body.save.profile.xp, 0, 1e12, 0);
      const stale = saveStr !== null && !body.force && cloudXp > newXp;
      if (stats && stale && p.data.stats) { p.data.stats = statsBefore; p.level = statsBefore.level; }
      if (saveStr !== null && !stale) { p.data.saveSize = Buffer.byteLength(saveStr); p.data.saveAt = Date.now(); p.data.saveXp = newXp; }
      store.touchPlayer(p);
      if (saveStr !== null && !stale) await store.putSave(p.id, saveStr);
      json(res, 200, { ok: true, id: p.id, recreated, stale, saveAt: p.data.saveAt || null, cloudXp: p.data.saveXp || 0, improved, profile: publicProfile(p) });
    },
    'GET /api/save': async (req, res, body, q) => {
      const p = byToken(tokenOf(req, null, q));
      if (!p) return err(res, 401, 'Аккаунт не найден: неверный токен или код восстановления.');
      const s = await store.getSave(p.id);
      let save = null;
      if (s) try { save = JSON.parse(s); } catch { save = null; }
      json(res, 200, { id: p.id, name: p.name, save, saveAt: p.data.saveAt || null, saveXp: p.data.saveXp || 0 });
    },
    'GET /api/me': async (req, res, body, q) => {
      const p = byToken(tokenOf(req, null, q));
      if (!p) return err(res, 401, 'Аккаунт не найден: неверный токен или код восстановления.');
      json(res, 200, publicProfile(p));
    },
    'GET /api/leaderboard': async (req, res, body, q) => {
      const board = q.get('board') || 'rating';
      if (board !== 'mode' && !BOARDS[board]) return err(res, 400, 'Неизвестная таблица.');
      let mode = null, map = null, len = null;
      if (board === 'mode') {
        mode = q.get('mode');
        if (!MODE_IDS.includes(mode)) return err(res, 400, 'Неизвестный режим.');
        map = q.get('map') || null;
        if (map && !MAP_IDS.includes(map)) return err(res, 400, 'Неизвестная карта.');
        len = q.get('len') !== null && q.get('len') !== '' ? clampInt(q.get('len'), 0, 50, 0) : null;
      }
      const list = boardList(board, mode, map, len);
      const limit = clampInt(q.get('limit'), 1, 100, 50);
      let offset = clampInt(q.get('offset'), 0, 1e7, 0);
      const around = q.get('around');
      if (around) { const i = list.findIndex((e) => e.id === around); if (i >= 0) offset = Math.floor(i / limit) * limit; }
      const out = { board, mode, map, len, total: list.length, offset, limit, rows: list.slice(offset, offset + limit).map((e, i) => rowOut(e, offset + i)) };
      const tok = tokenOf(req, null, q);
      if (tok) {
        const me = byToken(tok);
        const i = me ? list.findIndex((e) => e.id === me.id) : -1;
        out.me = i >= 0 ? rowOut(list[i], i) : null;
      }
      json(res, 200, out);
    },
    'GET /api/players': async (req, res, body, q) => {
      const s = String(q.get('q') || '').trim().toLowerCase().slice(0, 32);
      const limit = clampInt(q.get('limit'), 1, 50, 20);
      const all = [...store.players.values()];
      const hits = (s ? all.filter((p) => p.id === s || p.name.toLowerCase().includes(s)) : all)
        .sort((a, b) => (b.id === s) - (a.id === s) || b.matches - a.matches || b.level - a.level || b.updatedAt - a.updatedAt)
        .slice(0, limit);
      json(res, 200, { q: s, rows: hits.map((p) => ({ id: p.id, name: p.name, level: p.level, rating: p.rating, wins: p.wins, matches: p.matches, ratingRank: ratingRank(p) })) });
    },
  };

  // → true, если запрос обработан здесь (путь /api/...)
  function handleHttp(req, res) {
    let u;
    try { u = new URL(req.url, 'http://x'); } catch { return false; }
    if (!u.pathname.startsWith('/api/')) return false;
    if (req.method === 'OPTIONS') { res.writeHead(204, CORS); res.end(); return true; }
    const ip = ipOf(req);
    if (req.method === 'POST' && !postLimit(ip)) { err(res, 429, 'Слишком много запросов. Подожди минуту.'); req.resume(); return true; }
    if (req.method === 'GET' && !getLimit(ip)) { err(res, 429, 'Слишком много запросов. Подожди минуту.'); return true; }
    const pathName = u.pathname.replace(/\/+$/, '');
    let fn = routes[`${req.method} ${pathName}`], arg = null;
    const m = pathName.match(/^\/api\/profile\/([A-Za-z0-9_-]{1,40})$/);
    if (!fn && m && req.method === 'GET') {
      fn = async (rq, rs) => { const p = store.players.get(m[1]); if (!p) return err(rs, 404, 'Игрок не найден.'); json(rs, 200, publicProfile(p)); };
    }
    if (!fn) { err(res, 404, 'Нет такого запроса.'); req.resume(); return true; }
    (async () => {
      const body = req.method === 'POST' ? await readBody(req) : null;
      await fn(req, res, body, u.searchParams, arg);
    })().catch((e) => {
      if (!e.code || typeof e.code !== 'number') console.error('[accounts]', e);
      if (!res.headersSent) err(res, typeof e.code === 'number' ? e.code : 500, typeof e.code === 'number' ? e.message : 'Ошибка сервера.');
    });
    return true;
  }

  return { handleHttp, byToken, finishMatch, publicProfile, ratingRank, cleanName, mapIdOf, MAP_IDS, MODE_IDS, carIdOf };
}

module.exports = { createAccounts, START_RATING };
