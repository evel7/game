// ENDLESS DRIFT — HTTP API онлайн-сервера: аккаунты, облачное сохранение, рейтинг, таблицы лидеров.
// ES-модуль без зависимостей. Адрес берётся из адреса WebSocket-сервера: api.setBase(apiBase(serverUrl())).
//
// ===== Форматы (точные) =====
// Токен: 64 hex-символа. Код восстановления (recovery) — тот же токен группами по 4 через дефис
// (XXXX-XXXX-…, 16 групп). Сервер принимает любой из вариантов (регистр, дефисы и пробелы игнорируются).
// Токен можно передавать в теле ({token}), в query (?token=) или заголовком Authorization: Bearer <token>.
// Ошибки: HTTP 4xx/5xx с телом { error: 'текст по-русски' } (400 неверный JSON/параметр, 401 неверный токен,
// 404 нет игрока, 413 слишком большой запрос/сохранение, 429 слишком часто, 503 сервер запускается).
//
// POST /api/register {name} →
//   { id, token, recovery, name, profile }
// POST /api/sync {token, name?, save?, stats?, records?, recreate?, force?} → { ok: true, id, recreated, stale, saveAt, cloudXp, improved, profile }
//   recreate — если сервер не знает токен (базу пересоздали), создать аккаунт заново с этим токеном (нужен save)
//   stale    — в облаке сохранение с бОльшим опытом: save НЕ записан (force: true — записать всё равно)
//   save    — любой JSON прогресса (≤128 КБ), хранится как есть («не потерять прогресс»)
//   stats   — { level, xp, money, carsOwned, carsTotal, achievements, achievementsTotal, races, wins, losses,
//               bestScore, bestDrift, maxSpeed (км/ч), distance (метры), modeStats: { [modeId]: { races, wins, best } } }
//             (считает клиент; сервер только обрезает до пределов; в профиле stats.trusted = false)
//   records — до 500 шт. [{ mode, map (id карты, напр. 'desert'), len (км, 0 = бесконечная), score, time (с, 0 = не финишировал), car }]
//             сервер хранит лучший на (игрок, режим, карта, длина); improved = сколько рекордов улучшилось
//   modeId: race | drift | free | time | elim | speed | clean | escape | field
// GET /api/save?token=… → { id, name, save, saveAt }          (восстановление на новом устройстве)
// GET /api/me?token=…   → профиль (как /api/profile/:id)
// GET /api/leaderboard?board=rating|wins|level|drift|speed|distance|mode[&mode=&map=&len=][&limit=50&offset=0][&around=<id>][&token=] →
//   { board, mode, map, len, total, offset, limit,
//     rows: [{ rank, id, name, level, rating, wins, matches, best, bestLabel,
//              (только board=mode:) map, len, car, time, score, online, at }],
//     me?: строка таблицы для владельца token или null }
//   board=mode: лучший результат игрока в режиме; по времени (возр.), если mode ∈ race/free/time/clean и задан len>0,
//   иначе по очкам (убыв.). Онлайн-результаты (проверенные сервером) тоже попадают сюда (online: true).
// GET /api/profile/:id →
//   { id, name, level, xp, rating, ratingRank, wins, matches, losses, winRate (0..1),
//     best: { score, drift, speed, distance }, stats (как выше или null),
//     online: { modeStats: { [modeId]: { matches, wins, best, bestTime } },
//               history: [{ at, mode, map, len, place, of, finished, time, score, flagged?, ratingDelta, rating }] (новые первыми, до 30) },
//     records: [{ mode, map, len, score, time, car, at, online }] (топ-20 по очкам), createdAt, updatedAt }
// GET /api/players?q=<часть имени или id>&limit=20 → { q, rows: [{ id, name, level, rating, wins, matches, ratingRank }] }
//
// WebSocket (src/net.js): в {t:'join'} и {t:'profile'} можно добавить token и level — соединение привяжется к аккаунту.
// В информации об игроке (joined.players / player.p / start.players) появились level, rating (null у гостей), pid (id аккаунта).
// После онлайн-заезда (≥2 игроков с аккаунтами) сервер шлёт каждому: { t: 'rating', rating, delta, place, of }.

const DEF_TIMEOUT = 12000;
const SLOW_TIMEOUT = 65000; // бесплатный сервер может «просыпаться» до минуты

/** wss://host → https://host, ws://host → http://host (путь и хвостовой слэш отбрасываются) */
export function apiBase(wsUrl) {
  const s = String(wsUrl || '').trim();
  try {
    const u = new URL(s);
    const proto = u.protocol === 'wss:' ? 'https:' : u.protocol === 'ws:' ? 'http:' : u.protocol;
    return `${proto}//${u.host}`;
  } catch {
    return s.replace(/^wss:/i, 'https:').replace(/^ws:/i, 'http:').replace(/\/+$/, '');
  }
}

let base = '';

async function request(method, path, { body, query, token, timeout = DEF_TIMEOUT } = {}) {
  if (!base) throw new Error('Адрес сервера не задан');
  let url = base + path;
  if (query) {
    const q = new URLSearchParams();
    for (const [k, v] of Object.entries(query)) if (v !== undefined && v !== null && v !== '') q.set(k, String(v));
    const qs = q.toString();
    if (qs) url += '?' + qs;
  }
  const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = ctl ? setTimeout(() => ctl.abort(), timeout) : null;
  const headers = {};
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (token) headers.Authorization = `Bearer ${token}`;
  let res;
  try {
    res = await fetch(url, { method, headers, body: body !== undefined ? JSON.stringify(body) : undefined, signal: ctl ? ctl.signal : undefined });
  } catch (e) {
    if (e && e.name === 'AbortError') throw new Error('Сервер не отвечает. Бесплатный сервер может «просыпаться» до минуты — попробуй ещё раз.');
    throw new Error('Нет связи с сервером');
  } finally { if (timer) clearTimeout(timer); }
  let data = null;
  try { data = await res.json(); } catch { /* не JSON */ }
  if (!res.ok) {
    const err = new Error((data && data.error) || `Ошибка сервера (${res.status})`);
    err.status = res.status;
    throw err;
  }
  if (!data) throw new Error('Сервер прислал неверный ответ');
  return data;
}

export const api = {
  /** базовый http(s)-адрес сервера, напр. api.setBase(apiBase(DEFAULT_SERVER)) */
  setBase(url) { base = String(url || '').replace(/\/+$/, ''); },
  get base() { return base; },

  /** → { id, token, recovery, name, profile } */
  register(name, { timeout = SLOW_TIMEOUT } = {}) {
    return request('POST', '/api/register', { body: { name }, timeout });
  },
  /** → { ok, improved, profile } */
  sync({ token, name, save, stats, records, recreate, force } = {}, { timeout = SLOW_TIMEOUT } = {}) {
    return request('POST', '/api/sync', { body: { name, save, stats, records, recreate: recreate || undefined, force: force || undefined }, token, timeout });
  },
  /** по токену или коду восстановления → { id, name, save, saveAt } */
  restore(token, { timeout = SLOW_TIMEOUT } = {}) {
    return request('GET', '/api/save', { token: String(token || '').trim(), timeout });
  },
  /** свой профиль → как profile() */
  me(token, { timeout = DEF_TIMEOUT } = {}) {
    return request('GET', '/api/me', { token, timeout });
  },
  /** params: { board, mode, map, len, limit, offset, around, token } → { board, total, rows, me? } */
  leaderboard(params = {}, { timeout = DEF_TIMEOUT } = {}) {
    const { token, ...query } = params;
    return request('GET', '/api/leaderboard', { query, token, timeout });
  },
  /** публичный профиль → { id, name, level, rating, ratingRank, wins, matches, losses, winRate, best, stats, online, records } */
  profile(id, { timeout = DEF_TIMEOUT } = {}) {
    return request('GET', `/api/profile/${encodeURIComponent(id)}`, { timeout });
  },
  /** поиск по имени → { q, rows } */
  search(q, { limit = 20, timeout = DEF_TIMEOUT } = {}) {
    return request('GET', '/api/players', { query: { q, limit }, timeout });
  },
};
