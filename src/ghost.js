// ENDLESS DRIFT — запись заездов (Replay) и «призрак» лучшего результата (Ghost).
// Модуль без графики: запись, сжатие, хранение в браузере и интерполяция позиции по времени.
//
// Трасса строится из seed, поэтому заезд с призраком запускается на ТОЙ ЖЕ трассе (тот же seed),
// иначе соревноваться с прошлым результатом было бы нечестно.
//
// Формат записи: { v, key, seed, map, mode, len, car, color, look, time, score, dist, at, hz, s: [...] }
// s — плоский массив по SF чисел на кадр: t, x, z, y, h, d, steer, slope, roll, idx (округлены, чтобы занимать меньше места).

const SF = 10;
const HZ = 10;                  // кадров записи в секунду
const MAX_SAMPLES = 12000;      // ~20 минут при 10 Гц; дальше прореживаем в 2 раза
const STORE_KEY = 'ed_ghosts';  // индекс { key: { at, size } }
const PREFIX = 'ed_ghost_';
const MAX_GHOSTS = 24;          // самые старые призраки удаляются, чтобы не забить память браузера

const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;

export class Recorder {
  constructor(meta) { this.meta = meta; this.s = []; this.next = 0; this.step = 1 / HZ; }
  /** veh — физика машины игрока, t — время заезда (с), d — пройденная дистанция (м) */
  push(t, veh, d) {
    if (t < this.next) return;
    this.next = t + this.step;
    this.s.push(r3(t), r2(veh.x), r2(veh.z), r2(veh.roadY || 0), r3(veh.h), r2(d), r3(veh.steer || 0), r3(veh.slope || 0), r3(veh.roll || 0), Math.round(veh.idx || 0));
    if (this.s.length / SF > MAX_SAMPLES) this.thin();
  }
  thin() { // прореживаем: оставляем каждый второй кадр
    const out = [];
    for (let i = 0; i < this.s.length; i += SF * 2) for (let k = 0; k < SF; k++) out.push(this.s[i + k]);
    this.s = out; this.step *= 2;
  }
  /** финальная запись (последний кадр добавляем всегда, чтобы призрак доезжал до финиша) */
  finish(t, veh, d, extra = {}) {
    this.next = 0; this.push(t, veh, d);
    return { v: 1, ...this.meta, ...extra, hz: 1 / this.step, s: this.s };
  }
}

// ---------- хранение ----------
function index() { try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; } catch { return {}; } }
function saveIndex(ix) { try { localStorage.setItem(STORE_KEY, JSON.stringify(ix)); } catch { /* память переполнена */ } }

export function loadGhost(key) {
  try { const g = JSON.parse(localStorage.getItem(PREFIX + key) || 'null'); return g && Array.isArray(g.s) && g.s.length >= SF * 2 ? g : null; } catch { return null; }
}
export function hasGhost(key) { return !!index()[key]; }
export function saveGhost(key, g) {
  const ix = index();
  const json = JSON.stringify(g);
  // освобождаем место: сначала лишние по количеству, потом — пока не влезет
  const order = () => Object.entries(ix).filter(([k]) => k !== key).sort((a, b) => a[1].at - b[1].at);
  for (const [k] of order().slice(0, Math.max(0, Object.keys(ix).length - MAX_GHOSTS + 1))) { localStorage.removeItem(PREFIX + k); delete ix[k]; }
  for (let tries = 0; tries < MAX_GHOSTS; tries++) {
    try { localStorage.setItem(PREFIX + key, json); ix[key] = { at: Date.now(), size: json.length }; saveIndex(ix); return true; } catch {
      const old = order()[0]; if (!old) return false;
      localStorage.removeItem(PREFIX + old[0]); delete ix[old[0]];
    }
  }
  return false;
}
export function deleteGhost(key) { const ix = index(); localStorage.removeItem(PREFIX + key); delete ix[key]; saveIndex(ix); }

// ---------- воспроизведение ----------
const lerp = (a, b, k) => a + (b - a) * k;
const lerpAng = (a, b, k) => { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return a + d * k; };
// Катмулл-Ром: плавная траектория между редкими кадрами (на скорости 200 км/ч кадры через 5–6 м)
const cr = (p0, p1, p2, p3, k) => { const k2 = k * k, k3 = k2 * k; return 0.5 * (2 * p1 + (-p0 + p2) * k + (2 * p0 - 5 * p1 + 4 * p2 - p3) * k2 + (-p0 + 3 * p1 - 3 * p2 + p3) * k3); };

export class Player {
  constructor(g) {
    this.g = g; this.s = g.s; this.n = Math.floor(g.s.length / SF); this.i = 0;
    this.duration = this.s[(this.n - 1) * SF];
    this.pose = { idx: 0, x: 0, z: 0, roadY: 0, h: 0, d: 0, steer: 0, slope: 0, roll: 0, speed: 0, ax: 0, ay: 0, wheelSpin: 0, done: false };
  }
  v(i, k) { i = Math.max(0, Math.min(this.n - 1, i)); return this.s[i * SF + k]; }
  /** поза на момент t (с начала заезда) */
  at(t) {
    const { n } = this, p = this.pose;
    if (t <= this.v(0, 0)) this.i = 0;
    while (this.i < n - 2 && this.v(this.i + 1, 0) <= t) this.i++;
    while (this.i > 0 && this.v(this.i, 0) > t) this.i--;
    const i = this.i, t0 = this.v(i, 0), t1 = this.v(i + 1, 0);
    const k = Math.max(0, Math.min(1, t1 > t0 ? (t - t0) / (t1 - t0) : 1));
    const prevX = p.x, prevZ = p.z;
    p.x = cr(this.v(i - 1, 1), this.v(i, 1), this.v(i + 1, 1), this.v(i + 2, 1), k);
    p.z = cr(this.v(i - 1, 2), this.v(i, 2), this.v(i + 1, 2), this.v(i + 2, 2), k);
    p.roadY = lerp(this.v(i, 3), this.v(i + 1, 3), k);
    p.h = lerpAng(this.v(i, 4), this.v(i + 1, 4), k);
    p.d = lerp(this.v(i, 5), this.v(i + 1, 5), k);
    p.steer = lerp(this.v(i, 6), this.v(i + 1, 6), k);
    p.slope = lerp(this.v(i, 7), this.v(i + 1, 7), k);
    p.roll = lerp(this.v(i, 8), this.v(i + 1, 8), k);
    p.idx = Math.round(lerp(this.v(i, 9), this.v(i + 1, 9), k));
    const dd = (this.v(i + 1, 5) - this.v(i, 5));
    p.speed = t1 > t0 ? Math.max(0, dd / (t1 - t0)) : 0;
    p.moved = Math.hypot(p.x - prevX, p.z - prevZ);
    p.done = t >= this.duration;
    return p;
  }
  /** когда призрак проехал дистанцию d (м) → время (с) или null, если ещё не доехал */
  timeAtDist(d) {
    const { n } = this;
    if (d > this.v(n - 1, 5)) return null;
    let lo = 0, hi = n - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (this.v(m, 5) < d) lo = m; else hi = m; }
    const d0 = this.v(lo, 5), d1 = this.v(hi, 5);
    const k = d1 > d0 ? (d - d0) / (d1 - d0) : 0;
    return lerp(this.v(lo, 0), this.v(hi, 0), k);
  }
}
