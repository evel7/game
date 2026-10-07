// ENDLESS DRIFT — хранилище аккаунтов, статистики и рекордов.
// Два варианта с одинаковым интерфейсом:
//   • DATABASE_URL задан  → Postgres (пакет `pg`), данные переживают перезапуски сервера;
//   • иначе               → JSON-файлы в DATA_DIR (по умолчанию ./data). На бесплатном Render диск
//                           эфемерный: при каждом перезапуске/деплое данные ПРОПАДАЮТ.
// Все игроки и рекорды держатся в памяти (тысячи игроков — это мегабайты), рейтинги считаются из памяти.
// Сохранения прогресса (save, до 128 КБ) в памяти НЕ держатся: читаются/пишутся по запросу.
//
// Интерфейс (оба адаптера):
//   await store.init()
//   store.kind                          'pg' | 'file'
//   store.players                       Map<id, player>
//   store.records                       Map<key, record>    key = `${player_id}|${mode}|${map}|${len}`
//   store.byTokenHash(hash)             player | null
//   store.addPlayer(p)                  добавить нового игрока (и сохранить)
//   store.touchPlayer(p)                пометить игрока изменённым (запись отложенная)
//   store.putRecord(rec)                → true, если рекорд стал лучше (запись отложенная)
//   await store.putSave(id, jsonString) / await store.getSave(id) → string | null
//   await store.flush()                 записать всё немедленно (вызывается на SIGTERM)
//   store.version                       растёт при каждом изменении (для кэша рейтингов)
//
// player = { id, tokenHash, name, rating, wins, matches, level, updatedAt, data: { createdAt, stats, online, saveSize, saveAt } }
// record = { player_id, mode, map, len, score, time, car, at, online }

const fs = require('fs');
const path = require('path');

const TIME_MODES = ['race', 'free', 'time', 'clean'];
const recKey = (r) => `${r.player_id}|${r.mode}|${r.map}|${r.len}`;
// лучше ли результат a, чем b (по времени — для режимов «на время» с финишем, иначе по очкам)
function recBetter(a, b) {
  if (!b) return true;
  if (a.len > 0 && TIME_MODES.includes(a.mode)) {
    const ta = a.time > 0 ? a.time : Infinity, tb = b.time > 0 ? b.time : Infinity;
    if (ta !== tb) return ta < tb;
    return a.score > b.score;
  }
  return a.score > b.score;
}

function baseStore() {
  return {
    players: new Map(),
    records: new Map(),
    tokenIndex: new Map(),
    version: 0,
    byTokenHash(h) { const id = this.tokenIndex.get(h); return id ? this.players.get(id) || null : null; },
    _index(p) { if (p.tokenHash) this.tokenIndex.set(p.tokenHash, p.id); },
  };
}

// ---------------- JSON-файлы ----------------
function fileStore(dir) {
  const s = baseStore();
  const file = path.join(dir, 'db.json');
  const savesDir = path.join(dir, 'saves');
  let timer = null;
  s.kind = 'file';

  function atomicWrite(f, data) {
    const tmp = `${f}.${process.pid}.${Date.now()}.tmp`;
    fs.writeFileSync(tmp, data);
    fs.renameSync(tmp, f);
  }
  function writeNow() {
    if (timer) { clearTimeout(timer); timer = null; }
    const data = JSON.stringify({ v: 1, players: [...s.players.values()], records: [...s.records.values()] });
    try { atomicWrite(file, data); } catch (e) { console.error('[store] не удалось записать', file, e.message); }
  }
  function schedule() {
    s.version++;
    if (!timer) timer = setTimeout(writeNow, 2000);
  }

  s.init = async () => {
    fs.mkdirSync(savesDir, { recursive: true });
    if (fs.existsSync(file)) {
      try {
        const db = JSON.parse(fs.readFileSync(file, 'utf8'));
        for (const p of db.players || []) { s.players.set(p.id, p); s._index(p); }
        for (const r of db.records || []) s.records.set(recKey(r), r);
      } catch (e) {
        console.error('[store] файл повреждён, начинаю с пустой базы:', e.message);
        try { fs.renameSync(file, `${file}.broken-${Date.now()}`); } catch { /* ignore */ }
      }
    }
    console.warn(`[store] ВНИМАНИЕ: DATABASE_URL не задан — аккаунты хранятся в файлах (${path.resolve(dir)}). ` +
      'На бесплатном Render диск стирается при каждом перезапуске/деплое — данные игроков будут потеряны. ' +
      'Подключи Postgres (см. server/README.md).');
    console.log(`[store] файл: игроков ${s.players.size}, рекордов ${s.records.size}`);
  };
  s.addPlayer = (p) => { s.players.set(p.id, p); s._index(p); schedule(); };
  s.touchPlayer = (p) => { p.updatedAt = Date.now(); schedule(); };
  s.putRecord = (r) => {
    const k = recKey(r), old = s.records.get(k);
    if (!recBetter(r, old)) return false;
    s.records.set(k, r); schedule(); return true;
  };
  const saveFile = (id) => path.join(savesDir, `${String(id).replace(/[^a-zA-Z0-9_-]/g, '')}.json`);
  s.putSave = async (id, str) => {
    const f = saveFile(id), tmp = `${f}.${process.pid}.${Date.now()}.${Math.random().toString(36).slice(2)}.tmp`;
    await fs.promises.writeFile(tmp, str);
    await fs.promises.rename(tmp, f);
  };
  s.getSave = async (id) => { try { return await fs.promises.readFile(saveFile(id), 'utf8'); } catch { return null; } };
  s.flush = async () => { writeNow(); };
  return s;
}

// ---------------- Postgres ----------------
function pgStore(url) {
  const { Pool } = require('pg');
  let host = '';
  try { host = new URL(url).hostname; } catch { /* ignore */ }
  const local = ['localhost', '127.0.0.1', '::1', ''].includes(host);
  const ssl = /sslmode=require/.test(url) || !local ? { rejectUnauthorized: false } : false;
  // pg сам разбирает sslmode из строки и может перекрыть наш объект ssl — убираем параметр из URL
  const cleanUrl = url.replace(/([?&])sslmode=[^&]*&?/, '$1').replace(/[?&]$/, '');
  const pool = new Pool({ connectionString: cleanUrl, ssl, max: 5, idleTimeoutMillis: 30000 });
  pool.on('error', (e) => console.error('[store] pg:', e.message));
  const s = baseStore();
  s.kind = 'pg';
  s.pool = pool;
  const dirtyP = new Set(), dirtyR = new Set();
  let timer = null, flushing = null;

  function schedule() {
    s.version++;
    if (!timer) timer = setTimeout(() => { timer = null; s.flush().catch((e) => console.error('[store] pg flush:', e.message)); }, 1500);
  }

  s.init = async () => {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS players (
        id text PRIMARY KEY,
        token_hash text UNIQUE NOT NULL,
        name text NOT NULL,
        data jsonb NOT NULL DEFAULT '{}'::jsonb,
        rating integer NOT NULL DEFAULT 1000,
        wins integer NOT NULL DEFAULT 0,
        matches integer NOT NULL DEFAULT 0,
        level integer NOT NULL DEFAULT 1,
        updated_at timestamptz NOT NULL DEFAULT now()
      );
      CREATE TABLE IF NOT EXISTS records (
        player_id text NOT NULL REFERENCES players(id) ON DELETE CASCADE,
        mode text NOT NULL,
        map text NOT NULL,
        len integer NOT NULL,
        score bigint NOT NULL DEFAULT 0,
        time double precision NOT NULL DEFAULT 0,
        car text,
        at timestamptz NOT NULL DEFAULT now(),
        online boolean NOT NULL DEFAULT false,
        UNIQUE (player_id, mode, map, len)
      );
      CREATE TABLE IF NOT EXISTS saves (
        player_id text PRIMARY KEY REFERENCES players(id) ON DELETE CASCADE,
        save text NOT NULL,
        updated_at timestamptz NOT NULL DEFAULT now()
      );`);
    const pr = await pool.query('SELECT id, token_hash, name, data, rating, wins, matches, level, updated_at FROM players');
    for (const row of pr.rows) {
      const p = { id: row.id, tokenHash: row.token_hash, name: row.name, data: row.data || {}, rating: row.rating, wins: row.wins,
        matches: row.matches, level: row.level, updatedAt: new Date(row.updated_at).getTime() };
      s.players.set(p.id, p); s._index(p);
    }
    const rr = await pool.query('SELECT player_id, mode, map, len, score, time, car, at, online FROM records');
    for (const row of rr.rows) {
      const r = { player_id: row.player_id, mode: row.mode, map: row.map, len: row.len, score: Number(row.score), time: row.time,
        car: row.car, at: new Date(row.at).getTime(), online: row.online };
      s.records.set(recKey(r), r);
    }
    console.log(`[store] Postgres: игроков ${s.players.size}, рекордов ${s.records.size}`);
  };
  s.addPlayer = (p) => { s.players.set(p.id, p); s._index(p); dirtyP.add(p.id); schedule(); };
  s.touchPlayer = (p) => { p.updatedAt = Date.now(); dirtyP.add(p.id); schedule(); };
  s.putRecord = (r) => {
    const k = recKey(r), old = s.records.get(k);
    if (!recBetter(r, old)) return false;
    s.records.set(k, r); dirtyR.add(k); schedule(); return true;
  };
  s.putSave = async (id, str) => {
    await s.flush(); // игрок должен существовать в БД раньше сохранения (внешний ключ)
    await pool.query(`INSERT INTO saves (player_id, save, updated_at) VALUES ($1, $2, now())
      ON CONFLICT (player_id) DO UPDATE SET save = EXCLUDED.save, updated_at = now()`, [id, str]);
  };
  s.getSave = async (id) => {
    const r = await pool.query('SELECT save FROM saves WHERE player_id = $1', [id]);
    return r.rows.length ? r.rows[0].save : null;
  };
  s.flush = async () => {
    if (flushing) await flushing.catch(() => {});
    if (timer) { clearTimeout(timer); timer = null; }
    const ps = [...dirtyP], rs = [...dirtyR];
    dirtyP.clear(); dirtyR.clear();
    if (!ps.length && !rs.length) return;
    flushing = (async () => {
      const c = await pool.connect();
      try {
        await c.query('BEGIN');
        for (const id of ps) {
          const p = s.players.get(id); if (!p) continue;
          await c.query(`INSERT INTO players (id, token_hash, name, data, rating, wins, matches, level, updated_at)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8, $9)
            ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, data = EXCLUDED.data, rating = EXCLUDED.rating, wins = EXCLUDED.wins,
              matches = EXCLUDED.matches, level = EXCLUDED.level, updated_at = EXCLUDED.updated_at`,
          [p.id, p.tokenHash, p.name, JSON.stringify(p.data || {}), p.rating, p.wins, p.matches, p.level, new Date(p.updatedAt || Date.now())]);
        }
        for (const k of rs) {
          const r = s.records.get(k); if (!r) continue;
          await c.query(`INSERT INTO records (player_id, mode, map, len, score, time, car, at, online)
            VALUES ($1,$2,$3,$4,$5,$6,$7, $8, $9)
            ON CONFLICT (player_id, mode, map, len) DO UPDATE SET score = EXCLUDED.score, time = EXCLUDED.time, car = EXCLUDED.car,
              at = EXCLUDED.at, online = EXCLUDED.online`,
          [r.player_id, r.mode, r.map, r.len, Math.round(r.score), r.time, r.car || null, new Date(r.at || Date.now()), !!r.online]);
        }
        await c.query('COMMIT');
      } catch (e) {
        await c.query('ROLLBACK').catch(() => {});
        for (const id of ps) dirtyP.add(id);
        for (const k of rs) dirtyR.add(k);
        throw e;
      } finally { c.release(); }
    })();
    try { await flushing; } finally { flushing = null; }
  };
  s.close = () => pool.end();
  return s;
}

function createStore() {
  const url = process.env.DATABASE_URL;
  return url ? pgStore(url) : fileStore(process.env.DATA_DIR || path.join(__dirname, 'data'));
}

module.exports = { createStore, recBetter, recKey, TIME_MODES };
