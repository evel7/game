// Смоук-тест сервера: аккаунты, синхронизация, онлайн-заезд с рейтингом Эло, таблицы лидеров, перезапуск.
// Запуск: cd server && npm install && node test/smoke.mjs
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import net from 'node:net';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const WebSocket = require('ws');
const SERVER_DIR = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = mkdtempSync(join(tmpdir(), 'ed-smoke-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let passed = 0;
const ok = (cond, msg) => { assert.ok(cond, msg); passed++; console.log('  ✓', msg); };

const freePort = () => new Promise((res) => { const s = net.createServer(); s.listen(0, () => { const p = s.address().port; s.close(() => res(p)); }); });
const PORT = await freePort();
const BASE = `http://127.0.0.1:${PORT}`;

let proc = null;
async function startServer() {
  proc = spawn(process.execPath, ['index.js'], { cwd: SERVER_DIR, env: { ...process.env, PORT: String(PORT), DATA_DIR, DATABASE_URL: '', REGISTER_PER_HOUR: '100' }, stdio: ['ignore', 'pipe', 'pipe'] });
  proc.stdout.on('data', (d) => process.env.VERBOSE && process.stdout.write('[srv] ' + d));
  proc.stderr.on('data', (d) => process.env.VERBOSE && process.stdout.write('[srv!] ' + d));
  for (let i = 0; i < 100; i++) {
    try { const r = await fetch(`${BASE}/api/leaderboard`); if (r.status === 200) return; } catch { /* ещё не слушает */ }
    await sleep(100);
  }
  throw new Error('server did not start');
}
async function stopServer() {
  const done = new Promise((r) => proc.once('exit', r));
  proc.kill('SIGTERM');
  await done;
}
async function api(method, path, body, headers = {}) {
  const r = await fetch(BASE + path, { method, headers: { 'Content-Type': 'application/json', ...headers }, body: body === undefined ? undefined : typeof body === 'string' ? body : JSON.stringify(body) });
  let j = null; try { j = await r.json(); } catch { /* not json */ }
  return { status: r.status, j };
}

function wsClient() {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(`ws://127.0.0.1:${PORT}`);
    const c = { ws, msgs: [], waiters: [] };
    ws.on('message', (d) => {
      const m = JSON.parse(d);
      c.msgs.push(m);
      c.waiters = c.waiters.filter((w) => { if (w.pred(m)) { w.res(m); return false; } return true; });
    });
    c.send = (m) => ws.send(JSON.stringify(m));
    c.wait = (pred, ms = 4000) => {
      const found = c.msgs.find(pred);
      if (found) { c.msgs.splice(c.msgs.indexOf(found), 1); return Promise.resolve(found); }
      return new Promise((res, rej) => {
        const w = { pred, res: (m) => { clearTimeout(t); c.msgs.splice(c.msgs.indexOf(m), 1); res(m); } };
        const t = setTimeout(() => { c.waiters = c.waiters.filter((x) => x !== w); rej(new Error('timeout waiting ' + pred)); }, ms);
        c.waiters.push(w);
      });
    };
    ws.on('open', () => resolve(c));
    ws.on('error', reject);
  });
}
async function drive(clients, scores) {
  // каждый игрок едет (позиции правдоподобные), затем сообщает результат (дрифт на бесконечной трассе → по очкам)
  for (let k = 0; k < 8; k++) {
    clients.forEach((c, i) => c.send({ t: 's', d: [0, 0, k, 0, 15, 6 + k * 2, 0, 0] }));
    await sleep(60);
  }
  await sleep(200);
  for (let i = 0; i < clients.length; i++) { clients[i].send({ t: 'fin', finished: false, time: 1.5, score: scores[i] }); await sleep(30); }
}

try {
  await startServer();
  console.log(`server on ${BASE}, DATA_DIR=${DATA_DIR}`);

  // ---- health ----
  {
    const r = await fetch(BASE + '/'); const t = await r.text();
    ok(r.status === 200 && t.startsWith('ENDLESS DRIFT server OK'), 'GET / health text');
    const o = await fetch(BASE + '/api/sync', { method: 'OPTIONS' });
    ok(o.status === 204 && o.headers.get('access-control-allow-origin') === '*', 'OPTIONS preflight with CORS');
  }

  // ---- регистрация ----
  const acc = [];
  for (const name of ['Alice<script>', 'Bob', 'Carl']) {
    const r = await api('POST', '/api/register', { name });
    assert.equal(r.status, 200);
    acc.push(r.j);
  }
  ok(/^[0-9a-f]{64}$/.test(acc[0].token) && acc[0].recovery.split('-').length === 16, 'register returns token + recovery code');
  ok(acc[0].name === 'Alicescript', 'name sanitized');

  // ---- плохие запросы ----
  ok((await api('POST', '/api/sync', '{bad json')).status === 400, 'bad JSON → 400');
  ok((await api('POST', '/api/sync', { token: 'nope' })).status === 401, 'bad token → 401');
  ok((await api('POST', '/api/sync', { token: acc[0].token, save: { blob: 'x'.repeat(130 * 1024) } })).status === 413, 'save > 128 KB → 413');
  ok((await api('POST', '/api/sync', 'x'.repeat(200 * 1024))).status === 413, 'body > 160 KB → 413');
  ok((await api('GET', '/api/nothing')).status === 404, 'unknown endpoint → 404');

  // ---- синхронизация ----
  const save = { v: 3, money: 12345, cars: ['kaze', 'zhiga'], nested: { a: [1, 2, 3] } };
  const statsOf = (lv, drift, spd) => ({ level: lv, xp: lv * 1000, money: 5000, carsOwned: 3, carsTotal: 40, achievements: 2, achievementsTotal: 30, races: 10, wins: 3, losses: 7,
    bestScore: 99999, bestDrift: drift, maxSpeed: spd, distance: 123456, modeStats: { race: { races: 5, wins: 2, best: 1000 }, hacker: { races: 1 } } });
  const recs = [
    { mode: 'race', map: 'desert', len: 5, score: 5000, time: 150.5, car: 'Kaze' },
    { mode: 'race', map: 'desert', len: 5, score: 4000, time: 170, car: 'Kaze' }, // хуже — не заменит
    { mode: 'drift', map: 'city', len: 0, score: 77777, time: 0, car: 'Kaze' },
    { mode: 'bogus', map: 'desert', len: 5, score: 1 }, { mode: 'race', map: 'moon', len: 5, score: 1 }, null, 'x',
  ];
  let r = await api('POST', '/api/sync', { token: acc[0].token, name: 'Alice', save, stats: statsOf(12, 50000, 9999), records: recs });
  ok(r.status === 200 && r.j.ok && r.j.improved === 2, `sync A ok, improved=${r.j && r.j.improved}`);
  ok(r.j.profile.stats.maxSpeed === 1000 && !r.j.profile.stats.modeStats.hacker && r.j.profile.level === 12, 'stats clamped & whitelisted');
  r = await api('POST', '/api/sync', { stats: statsOf(20, 60000, 300), records: [{ mode: 'race', map: 'desert', len: 5, score: 3000, time: 140.25, car: 'Ronin' }] }, { Authorization: `Bearer ${acc[1].token}` });
  ok(r.status === 200, 'sync B via Authorization header');
  r = await api('POST', '/api/sync', { token: acc[2].token, stats: statsOf(3, 100, 200), records: [{ mode: 'race', map: 'desert', len: 5, score: 9000, time: 0 }] });
  ok(r.status === 200, 'sync C');

  // ---- онлайн-заезд ----
  const [A, B, C] = await Promise.all([wsClient(), wsClient(), wsClient()]);
  A.send({ t: 'join', name: 'Alice', car: 0, token: acc[0].token, level: 12 });
  const jA = await A.wait((m) => m.t === 'joined');
  ok(jA.players[0].rating === 1000 && jA.players[0].level === 12 && jA.players[0].pid === acc[0].id, 'pub() has rating/level/pid');
  A.send({ t: 'config', config: { map: 0, mode: 'drift', len: 0 } });
  await A.wait((m) => m.t === 'config');
  B.send({ t: 'join', code: jA.code, name: 'Bob', car: 1, token: acc[1].recovery, level: 20 }); // код восстановления тоже годится как токен
  await B.wait((m) => m.t === 'joined');
  C.send({ t: 'join', code: jA.code, name: 'Carl', car: 2, token: acc[2].token });
  const jC = await C.wait((m) => m.t === 'joined');
  ok(jC.players.length === 3 && jC.players.every((p) => p.rating === 1000), 'all 3 linked in room');
  ok(jC.players.find((p) => p.name === 'Carl').level === 3, 'level falls back to account level');

  A.send({ t: 'start' });
  await Promise.all([A, B, C].map((c) => c.wait((m) => m.t === 'start')));
  await drive([A, B, C], [5000, 3000, 1000]);
  const lob = await A.wait((m) => m.t === 'lobby');
  ok(lob.results.length === 3 && !lob.results.some((x) => x.flagged), 'race 1 results, nobody flagged');
  const [rA, rB, rC] = await Promise.all([A, B, C].map((c) => c.wait((m) => m.t === 'rating')));
  console.log('    race1 deltas', rA.delta, rB.delta, rC.delta, 'places', rA.place, rB.place, rC.place);
  ok(rA.place === 1 && rB.place === 2 && rC.place === 3 && rA.of === 3, 'placements by score');
  ok(rA.delta > 0 && rC.delta < 0 && Math.abs(rA.delta + rB.delta + rC.delta) <= 2, 'Elo deltas sum ≈ 0');
  ok(rA.rating === 1000 + rA.delta, 'rating = 1000 + delta');

  // ---- заезд 2: A читерит (очки быстрее возможного) → флаг, последнее место, delta ≤ 0 ----
  A.send({ t: 'start' });
  await Promise.all([A, B, C].map((c) => c.wait((m) => m.t === 'start')));
  await drive([A, B, C], [1e8, 2000, 4000]);
  const lob2 = await A.wait((m) => m.t === 'lobby');
  ok(lob2.results.find((x) => x.name === 'Alice').flagged === true, 'cheater flagged');
  const [sA, sB, sC] = await Promise.all([A, B, C].map((c) => c.wait((m) => m.t === 'rating')));
  console.log('    race2 deltas', sA.delta, sB.delta, sC.delta, 'places', sA.place, sB.place, sC.place);
  ok(sA.place === 3 && sA.delta <= 0 && sC.place === 1, 'flagged → last, delta ≤ 0');

  // ---- заезд 3: B выходит посреди заезда → записан сошедшим, рейтинг считается ----
  A.send({ t: 'start' });
  await Promise.all([A, B, C].map((c) => c.wait((m) => m.t === 'start')));
  B.ws.close();
  await sleep(150);
  await drive([A, C], [3000, 2500]);
  const lob3 = await A.wait((m) => m.t === 'lobby');
  ok(lob3.results.length === 3 && lob3.results.find((x) => x.name === 'Bob').left === true, 'leaver recorded as DNF');
  const tA = await A.wait((m) => m.t === 'rating');
  ok(tA.place === 1 && tA.of === 3, 'race 3 rated with leaver');

  // ---- профили и таблицы ----
  const pA = (await api('GET', `/api/profile/${acc[0].id}`)).j;
  ok(pA.matches === 3 && pA.wins === 2 && pA.losses === 1 && pA.online.history.length === 3, `profile A: matches=${pA.matches} wins=${pA.wins}`);
  ok(pA.online.history[0].place === 1 && pA.online.history[1].flagged && typeof pA.online.history[0].ratingDelta === 'number', 'history entries (newest first)');
  ok(pA.online.modeStats.drift.matches === 3 && pA.online.modeStats.drift.wins === 2, 'online modeStats');
  ok(!('token' in pA) && !('tokenHash' in pA) && !('save' in pA) && !JSON.stringify(pA).includes(acc[0].token), 'profile hides token/save');
  ok(pA.records.length >= 2 && pA.ratingRank >= 1, 'profile has records + ratingRank');
  ok((await api('GET', '/api/profile/zzzz')).status === 404, 'unknown profile → 404');

  const lb = (await api('GET', '/api/leaderboard?board=rating')).j;
  ok(lb.total === 3 && lb.rows.every((x, i) => i === 0 || lb.rows[i - 1].rating >= x.rating) && lb.rows[0].rank === 1, 'rating board ordered');
  console.log('    rating board', lb.rows.map((x) => `${x.rank}.${x.name}=${x.rating}`).join(' '));
  const lbW = (await api('GET', `/api/leaderboard?board=wins&token=${acc[2].token}`)).j;
  ok(lbW.rows[0].wins >= lbW.rows[1].wins && lbW.me && lbW.me.id === acc[2].id, 'wins board + me');
  const lbM = (await api('GET', '/api/leaderboard?board=mode&mode=race&map=desert&len=5')).j;
  ok(lbM.rows.length === 2 && lbM.rows[0].name === 'Bob' && lbM.rows[0].best === 140.25 && lbM.rows[0].bestLabel === '2:20.250', 'mode board by time asc (unfinished excluded)');
  const lbS = (await api('GET', '/api/leaderboard?board=mode&mode=race')).j;
  ok(lbS.rows[0].name === 'Carl' && lbS.rows[0].best === 9000, 'mode board without len → by score');
  const lbD = (await api('GET', '/api/leaderboard?board=drift&limit=1&around=' + acc[0].id)).j;
  ok(lbD.rows.length === 1 && lbD.rows[0].id === acc[0].id && lbD.offset === 1, 'drift board around= paging');
  const lbO = (await api('GET', '/api/leaderboard?board=mode&mode=drift&map=desert&len=0')).j;
  ok(lbO.rows.length >= 1 && lbO.rows.every((x) => x.online), 'online results feed mode board');
  ok((await api('GET', '/api/leaderboard?board=xx')).status === 400, 'bad board → 400');
  const s = (await api('GET', '/api/players?q=bo')).j;
  ok(s.rows.length === 1 && s.rows[0].name === 'Bob', 'player search');

  // ---- восстановление ----
  const sv = (await api('GET', `/api/save?token=${encodeURIComponent(acc[0].recovery)}`)).j;
  ok(JSON.stringify(sv.save) === JSON.stringify(save) && sv.id === acc[0].id, 'restore via recovery code returns save');

  // ---- клиентский модуль src/api.js (если есть в репозитории) ----
  {
    let mod = null;
    try { mod = await import(new URL('../../src/api.js', import.meta.url)); } catch { /* сервер развёрнут без клиента */ }
    if (mod) {
      const { api, apiBase } = mod;
      ok(apiBase(`ws://127.0.0.1:${PORT}`) === BASE && apiBase('wss://x.onrender.com') === 'https://x.onrender.com', 'api.js apiBase');
      api.setBase(BASE);
      const reg = await api.register('Dana');
      await api.sync({ token: reg.token, save: { a: 1 }, stats: { level: 7 }, records: [{ mode: 'drift', map: 'snow', len: 0, score: 500 }] });
      ok((await api.restore(reg.recovery)).save.a === 1, 'api.js register/sync/restore');
      const lbx = await api.leaderboard({ board: 'level', token: reg.token });
      ok(lbx.me && lbx.me.id === reg.id && (await api.profile(reg.id)).level === 7 && (await api.search('dan')).rows.length === 1, 'api.js leaderboard/profile/search');
      let msg = '';
      try { await api.restore('bad'); } catch (e) { msg = e.message; }
      ok(/Аккаунт не найден/.test(msg), 'api.js throws Russian error');
    }
  }

  // ---- перезапуск: данные на месте ----
  const ratingsBefore = lb.rows.map((x) => `${x.id}:${x.rating}`).join();
  A.ws.close(); C.ws.close();
  await stopServer();
  await startServer();
  const lb2 = (await api('GET', '/api/leaderboard?board=rating')).j;
  ok(lb2.rows.map((x) => `${x.id}:${x.rating}`).join() === ratingsBefore, 'ratings survived restart');
  const pA2 = (await api('GET', `/api/profile/${acc[0].id}`)).j;
  ok(pA2.online.history.length === 3 && pA2.stats.level === 12 && pA2.records.length === pA.records.length, 'profile/history/records survived restart');
  const sv2 = (await api('GET', '/api/save', undefined, { Authorization: `Bearer ${acc[0].token}` })).j;
  ok(JSON.stringify(sv2.save) === JSON.stringify(save), 'save survived restart');
  // старый токен всё ещё привязывается к WS
  const D = await wsClient();
  D.send({ t: 'join', name: 'Alice', token: acc[0].token });
  const jD = await D.wait((m) => m.t === 'joined');
  ok(jD.players[0].rating === pA2.rating, 'WS link after restart');
  D.ws.close();

  // ---- /api/health ----
  const h = (await api('GET', '/api/health')).j;
  ok(h.ok === true && h.store === 'file' && h.players >= 3 && h.dbConfigured === false, 'health: store + players');

  // ---- защита от перезаписи старым прогрессом (stale) ----
  const tokS = (await api('POST', '/api/register', { name: 'Stale' })).j.token;
  await api('POST', '/api/sync', { token: tokS, save: { v: 2, profile: { xp: 500 } }, stats: { level: 5, xp: 500 } });
  const st1 = (await api('POST', '/api/sync', { token: tokS, save: { v: 2, profile: { xp: 100 } }, stats: { level: 2, xp: 100 } })).j;
  const sv3 = (await api('GET', `/api/save?token=${tokS}`)).j;
  ok(st1.stale === true && sv3.save.profile.xp === 500 && st1.profile.level === 5, 'older save does not overwrite newer cloud save');
  const st2 = (await api('POST', '/api/sync', { token: tokS, save: { v: 2, profile: { xp: 100 } }, stats: { level: 2, xp: 100 }, force: true })).j;
  ok(st2.stale === false && (await api('GET', `/api/save?token=${tokS}`)).j.save.profile.xp === 100, 'force overwrites');

  // ---- пересоздание потерянного аккаунта тем же токеном ----
  const lost = 'ab'.repeat(32);
  const r401 = await api('POST', '/api/sync', { token: lost, save: { v: 2, profile: { xp: 7 } } });
  ok(r401.status === 401, 'unknown token without recreate → 401');
  const rc = await api('POST', '/api/sync', { token: lost, name: 'Lost', recreate: true, save: { v: 2, profile: { xp: 7 } }, stats: { level: 1, xp: 7 } });
  ok(rc.status === 200 && rc.j.recreated === true && rc.j.id, 'recreate with same token');
  const rcode = lost.toUpperCase().match(/.{4}/g).join('-');
  const rr = (await api('GET', `/api/save?token=${rcode}`)).j;
  ok(rr.id === rc.j.id && rr.save.profile.xp === 7, 'old recovery code works after recreate');
  const rc2 = (await api('POST', '/api/sync', { token: lost, recreate: true, save: { v: 2, profile: { xp: 9 } } })).j;
  ok(rc2.recreated === false && rc2.id === rc.j.id, 'recreate does not duplicate existing account');
  ok((await api('POST', '/api/sync', { token: 'zz', recreate: true, save: {} })).status === 401, 'bad token cannot recreate');

  console.log(`\nALL OK: ${passed} checks`);
} catch (e) {
  console.error('\nFAILED:', e);
  process.exitCode = 1;
} finally {
  if (proc && proc.exitCode === null) await stopServer().catch(() => {});
  rmSync(DATA_DIR, { recursive: true, force: true });
}
