// Прогресс игрока: деньги, уровень, купленные машины и тюнинг.
// Всё хранится в браузере (localStorage). Модуль не зависит от графики.

import { CARS, carClass } from './cars.js';
import { Vehicle } from './vehicle.js';

// с самого начала открыты 5 машин
export const STARTER_CARS = ['kaze', 'zhiga', 'kei', 'shiro', 'pixel'];
export const START_MONEY = 5000;

// базовая цена по классу; внутри класса дороже та, что быстрее
const CLASS_PRICE = { D: 4000, C: 12000, B: 30000, A: 65000, S: 140000 };
const CLASS_RANGE = { D: [130, 200], C: [200, 270], B: [270, 300], A: [300, 340], S: [340, 460] };

export function carPrice(spec) {
  if (STARTER_CARS.includes(spec.id)) return 0;
  const cls = carClass(spec);
  const [a, b] = CLASS_RANGE[cls];
  const k = Math.min(1, Math.max(0, ((spec.vmax || a) - a) / (b - a)));
  return Math.round(CLASS_PRICE[cls] * (1 + k * 0.8) / 500) * 500;
}
// сколько стоит деталь (зависит от класса машины, а не от её цены — стартовые машины тоже тюнингуются)
const partBase = (spec) => CLASS_PRICE[carClass(spec)];

// ---------- тюнинг: технические детали (3 ступени: Улица / Спорт / Гонка) ----------
// apply(s, k) меняет копию параметров машины; k = 1..3
export const STAGES = ['Стандарт', 'Улица', 'Спорт', 'Гонка'];
export const PERF_PARTS = [
  { id: 'engine', name: 'Двигатель', desc: 'Распредвалы, поршни, расточка. Больше мощности на всех оборотах.', price: 0.16,
    apply: (s, k) => { s.torque *= 1 + [0, 0.05, 0.1, 0.16][k]; s.hp = Math.round(s.hp * (1 + [0, 0.05, 0.1, 0.16][k])); } },
  { id: 'turbo', name: 'Турбонаддув', desc: 'Турбина побольше и интеркулер. Мощный подхват на средних оборотах.', price: 0.18,
    apply: (s, k) => { s.torque *= 1 + [0, 0.04, 0.08, 0.13][k]; s.peakAt = Math.min(0.85, (s.peakAt ?? 0.7) + 0.02 * k); s.hp = Math.round(s.hp * (1 + [0, 0.04, 0.08, 0.13][k])); } },
  { id: 'ecu', name: 'Чип-тюнинг', desc: 'Прошивка блока управления: выше отсечка, больше момента.', price: 0.08,
    apply: (s, k) => { s.redline += [0, 200, 400, 700][k]; s.torque *= 1 + 0.02 * k; } },
  { id: 'intake', name: 'Впуск', desc: 'Фильтр нулевого сопротивления и ресивер.', price: 0.05,
    apply: (s, k) => { s.torque *= 1 + 0.015 * k; } },
  { id: 'exhaust', name: 'Выхлоп', desc: 'Прямоточный выхлоп: +мощность и громкий звук.', price: 0.06,
    apply: (s, k) => { s.torque *= 1 + 0.02 * k; } },
  { id: 'gearbox', name: 'Коробка передач', desc: 'Короче главная пара — резвее разгон (максималка почти не меняется).', price: 0.1,
    apply: (s, k) => { s.finalDrive *= 1 + 0.035 * k; s.redline += 100 * k; } },
  { id: 'tires', name: 'Шины', desc: 'Мягкая резина: больше сцепления в поворотах и на старте.', price: 0.09,
    apply: (s, k) => { s.muFront *= 1 + 0.03 * k; s.muRear *= 1 + 0.03 * k; } },
  { id: 'suspension', name: 'Подвеска', desc: 'Койловеры и стабилизаторы: ниже центр тяжести, меньше крен.', price: 0.09,
    apply: (s, k) => { s.cgHeight *= 1 - 0.05 * k; s.yawDamp = (s.yawDamp ?? 0.5) * (1 + 0.06 * k); } },
  { id: 'brakes', name: 'Тормоза', desc: 'Большие диски и многопоршневые суппорты.', price: 0.07,
    apply: (s, k) => { s.brakeForce *= 1 + [0, 0.12, 0.25, 0.4][k]; } },
  { id: 'weight', name: 'Облегчение', desc: 'Карбоновый капот, ковши, без лишнего салона.', price: 0.14,
    apply: (s, k) => { s.mass = Math.round(s.mass * (1 - [0, 0.04, 0.08, 0.12][k])); } },
  { id: 'aero', name: 'Аэродинамика', desc: 'Сплиттер, диффузор, днище: меньше сопротивление, больше прижим.', price: 0.11,
    apply: (s, k) => { s.drag *= 1 - 0.04 * k; s.downforce = (s.downforce ?? 0) + [0, 0.1, 0.2, 0.35][k]; } },
  { id: 'steer', name: 'Угол руля', desc: 'Дрифт-кит: больше угол поворота колёс — держишь занос под большим углом.', price: 0.07,
    apply: (s, k) => { s.steerMax *= 1 + 0.06 * k; } },
  { id: 'diff', name: 'Дифференциал', desc: 'Блокировка: задок срывается охотнее, занос ровнее.', price: 0.08,
    apply: (s, k) => { s.muRear *= 1 - 0.015 * k; s.yawDamp = (s.yawDamp ?? 0.5) * (1 - 0.03 * k); } },
];
export const perfPartPrice = (spec, part, stage) => Math.round(partBase(spec) * part.price * [0, 0.5, 1, 1.8][stage] / 100) * 100 + 300 * stage;

// ---------- тюнинг: внешний вид ----------
// у каждой категории список вариантов; 0 — заводской
export const PAINTS = ['#ffffff', '#111111', '#c0c0c0', '#d7263d', '#ff7f11', '#ffd60a', '#80ed99', '#06d6a0', '#118ab2', '#3a0ca3',
  '#7209b7', '#f72585', '#ff99c8', '#8d6e63', '#2b9348', '#00b4d8', '#ffb703', '#264653'];
export const RIM_COLORS = [null, 0x111114, 0xe6e8ec, 0xd4af37, 0x9c6b30, 0xd62828, 0x1f6fe0, 0x39ff14, 0xf72585, 0xffffff];
export const LIGHT_COLORS = [0xfff2c0, 0xcfe4ff, 0xffd43b, 0x9be7ff, 0xff8fd8, 0xb388ff];
export const SMOKE_COLORS = [null, 0xffffff, 0x222222, 0xff4d6d, 0x3a86ff, 0x80ed99, 0xffd60a, 0xb388ff, 0xff7f11];
export const GLOW_COLORS = [null, 0x28e7ff, 0xff2ea6, 0x39ff14, 0xffd400, 0xb388ff, 0xff3b3b];

export const LOOK_PARTS = [
  { id: 'paint', name: 'Покраска', price: 0.02, kind: 'paint' },
  { id: 'wing', name: 'Антикрыло', price: 0.04, opts: ['Заводское', 'Без крыла', 'Утиный хвост', 'GT-крыло', 'Крыло на крыше', 'Тайм-атак'] },
  { id: 'bumper', name: 'Передний бампер', price: 0.04, opts: ['Заводской', 'Спорт-сплиттер', 'Агрессивная губа', 'Ралли-защита'] },
  { id: 'skirts', name: 'Пороги', price: 0.03, opts: ['Заводские', 'Спортивные', 'Широкие с расширителями'] },
  { id: 'hood', name: 'Капот', price: 0.035, opts: ['Заводской', 'Карбоновый', 'С воздухозаборником', 'С жабрами'] },
  { id: 'rear', name: 'Задний бампер', price: 0.03, opts: ['Заводской', 'Диффузор', 'Гоночный диффузор'] },
  { id: 'roof', name: 'Крыша', price: 0.025, opts: ['Заводская', 'Багажник', 'Воздухозаборник', 'Карбон'] },
  { id: 'rims', name: 'Диски', price: 0.04, opts: ['Заводские', '5 спиц', '6 спиц', 'Сетка', 'Глубокая полка', 'Турбина', '10 спиц'] },
  { id: 'rimc', name: 'Цвет дисков', price: 0.015, opts: ['Заводской', 'Чёрный', 'Хром', 'Золото', 'Бронза', 'Красный', 'Синий', 'Неон', 'Розовый', 'Белый'], colors: RIM_COLORS },
  { id: 'low', name: 'Занижение', price: 0.03, opts: ['Заводское', '−3 см', '−6 см', 'Стенс −9 см'] },
  { id: 'decal', name: 'Винил', price: 0.03, opts: ['Заводской', 'Гоночные полосы', 'Номер на капоте', 'Полоса по борту', 'Двухцветный верх', 'Полосы + номер'] },
  { id: 'exh', name: 'Насадки выхлопа', price: 0.02, opts: ['Заводские', 'Двойные', 'Квадро', 'Одна большая'] },
  { id: 'light', name: 'Цвет фар', price: 0.015, opts: ['Тёплый', 'Ксенон', 'Жёлтый', 'Ледяной', 'Розовый', 'Фиолетовый'], colors: LIGHT_COLORS },
  { id: 'tint', name: 'Тонировка', price: 0.015, opts: ['Заводская', 'Лёгкая', 'Тёмная', 'Лимо', 'Синяя'] },
  { id: 'glow', name: 'Подсветка днища', price: 0.03, opts: ['Нет', 'Голубая', 'Розовая', 'Зелёная', 'Жёлтая', 'Фиолетовая', 'Красная'], colors: GLOW_COLORS },
  { id: 'smoke', name: 'Цвет дыма', price: 0.02, opts: ['Заводской', 'Белый', 'Чёрный', 'Красный', 'Синий', 'Зелёный', 'Жёлтый', 'Фиолетовый', 'Оранжевый'], colors: SMOKE_COLORS },
];
export const lookPartPrice = (spec, part) => Math.max(200, Math.round(partBase(spec) * part.price / 100) * 100);

// ---------- уровни: 1…100 ----------
export const MAX_LEVEL = 100;
// опыт до следующего уровня растёт линейно: 1→2 — 520 XP, 99→100 — 12 280 XP (всего ~630 тыс. XP)
export const xpForLevel = (lv) => { const n = Math.max(0, Math.min(MAX_LEVEL, lv) - 1); return 400 * n + 60 * n * (n + 1); };
export function levelFromXp(xp) { let lv = 1; while (lv < MAX_LEVEL && xp >= xpForLevel(lv + 1)) lv++; return lv; }

// открытие машин по уровню: внутри класса — чем быстрее, тем позже
const CLASS_LEVELS = { D: [1, 4], C: [3, 10], B: [9, 20], A: [18, 32], S: [30, 50] };
export function carUnlockLevel(spec) {
  if (STARTER_CARS.includes(spec.id)) return 1;
  const cls = carClass(spec);
  const [a, b] = CLASS_RANGE[cls], [l0, l1] = CLASS_LEVELS[cls];
  const k = Math.min(1, Math.max(0, ((spec.vmax || a) - a) / (b - a)));
  return Math.round(l0 + (l1 - l0) * k);
}
// открытие карт по уровню (по индексу в MAPS: первые 6 — сразу, новые — постепенно)
const MAP_LEVELS = { 6: 4, 7: 8, 8: 12, 9: 16, 10: 22 };
export const mapUnlockLevel = (mapIdx) => MAP_LEVELS[mapIdx] || 1;

// класс машины зависит от характеристик и уровня улучшений:
// «индекс производительности» = максималка после тюнинга + 1.5 за каждую ступень деталей
export function perfIndex(spec) {
  const t = tunedSpec(spec);
  return (t.vmax || spec.vmax || 250) + tuneLevel(spec) * 1.5;
}
export const tunedClass = (spec) => carClass({ vmax: perfIndex(spec) });

// ---------- профиль (сохраняется в браузере + резервная копия + облако) ----------
const KEY = 'ed_profile', BAK = 'ed_profile_bak';
function load() {
  for (const k of [KEY, BAK]) {
    try { const v = JSON.parse(localStorage.getItem(k) || 'null'); if (v && typeof v === 'object' && typeof v.money === 'number') return v; } catch { /* битая запись — пробуем копию */ }
  }
  return null;
}
const blankStats = () => ({
  races: 0, wins: 0, losses: 0, podiums: 0, distance: 0, maxSpeed: 0, bestScore: 0, bestDrift: 0, driftCount: 0, driftTotal: 0,
  records: 0, modes: {}, carsWon: [], mapsDone: [], modesPlayed: [], elimWins: 0, bestCam: 0, cleanKm: 0, escapeKm: 0, purchases: 0, tuneParts: 0, online: 0, onlineWins: 0,
});
export const profile = Object.assign({ v: 2, money: START_MONEY, xp: 0, owned: [...STARTER_CARS], tune: {}, stats: blankStats(), ach: {}, daily: { last: '', streak: 0 }, created: Date.now(), cloud: null, rating: null }, load() || {});
profile.stats = Object.assign(blankStats(), profile.stats || {});
profile.ach ||= {}; profile.daily ||= { last: '', streak: 0 };
for (const id of STARTER_CARS) if (!profile.owned.includes(id)) profile.owned.push(id);
// миграция v1: раньше опыт = заработанные деньги — сохраняем, но не больше 10 уровня
if (profile.v === 1) { profile.v = 2; profile.xp = Math.min(profile.xp || 0, xpForLevel(10)); }

let onSave = null;
export const setOnSave = (fn) => { onSave = fn; };
export function saveProfile() {
  profile.savedAt = Date.now();
  const json = JSON.stringify(profile);
  try { localStorage.setItem(KEY, json); localStorage.setItem(BAK, json); } catch { /* приватный режим */ }
  if (onSave) onSave();
}

export const level = () => levelFromXp(profile.xp);
export const owns = (spec) => profile.owned.includes(spec.id);
export const carUnlocked = (spec) => level() >= carUnlockLevel(spec);
export const mapUnlocked = (i) => level() >= mapUnlockLevel(i);

export function buyCar(spec) {
  const p = carPrice(spec);
  if (owns(spec) || profile.money < p || !carUnlocked(spec)) return false;
  profile.money -= p; profile.owned.push(spec.id); profile.stats.purchases++; saveProfile();
  return true;
}

export function tuneOf(spec) {
  const t = profile.tune[spec.id] || (profile.tune[spec.id] = { perf: {}, look: {}, ownedLook: {} });
  t.perf ||= {}; t.look ||= {}; t.ownedLook ||= {};
  return t;
}

// купить ступень детали (можно сразу «перепрыгнуть» на старшую — платишь только за неё)
export function buyPerf(spec, partId, stage) {
  const part = PERF_PARTS.find((p) => p.id === partId); if (!part) return false;
  const t = tuneOf(spec);
  const owned = t.perfOwned || (t.perfOwned = {});
  if ((owned[partId] || 0) < stage) {
    const price = perfPartPrice(spec, part, stage);
    if (profile.money < price) return false;
    profile.money -= price; owned[partId] = stage; profile.stats.tuneParts++;
  }
  t.perf[partId] = stage; // ниже купленной ступени можно поставить бесплатно
  saveProfile();
  return true;
}

// вариант внешнего тюнинга: платишь один раз, потом переключаешь бесплатно
export function buyLook(spec, partId, value) {
  const part = LOOK_PARTS.find((p) => p.id === partId); if (!part) return false;
  const t = tuneOf(spec);
  const key = partId + ':' + value;
  const free = value === 0 || value === null || value === '' || t.ownedLook[key];
  if (!free) {
    const price = lookPartPrice(spec, part);
    if (profile.money < price) return false;
    profile.money -= price; t.ownedLook[key] = 1; profile.stats.tuneParts++;
  }
  if (value === 0 || value === null || value === '') delete t.look[partId]; else t.look[partId] = value;
  saveProfile();
  return true;
}
export const lookOwned = (spec, partId, value) => value === 0 || value === null || !!tuneOf(spec).ownedLook[partId + ':' + value];

// параметры машины с учётом технического тюнинга (копия, оригинал не меняется)
const tunedCache = new Map();
export function tunedSpec(spec) {
  const t = profile.tune[spec.id];
  const perf = (t && t.perf) || {};
  const key = spec.id + JSON.stringify(perf);
  if (tunedCache.has(key)) return tunedCache.get(key);
  if (!Object.values(perf).some((v) => v > 0)) { tunedCache.set(key, spec); return spec; }
  const s = { ...spec, base: spec };
  for (const part of PERF_PARTS) { const k = perf[part.id] || 0; if (k > 0) part.apply(s, k); }
  s.vmax = simVmax(s);
  tunedCache.set(key, s);
  return s;
}
export const lookOf = (spec) => ({ ...((profile.tune[spec.id] || {}).look || {}) });
export const tuneLevel = (spec) => { const p = (profile.tune[spec.id] || {}).perf || {}; return Object.values(p).reduce((a, b) => a + b, 0); };

// максималка физикой игры (как tools/vmax.mjs, но грубее — 60 Гц, хватает для гаража)
export function simVmax(s) {
  const v = new Vehicle(s);
  const inp = { throttle: 1, brake: 0, steer: 0, handbrake: 0 };
  let last = 0;
  for (let i = 0; i < 60 * 90; i++) {
    v.step(1 / 60, inp, { grip: 1.12, assist: 1.15, easy: true });
    if (i % 300 === 299) { if (Math.abs(v.kmh - last) < 0.3) break; last = v.kmh; }
  }
  return Math.round(v.kmh / 5) * 5;
}

// ---------- достижения ----------
// cond(st, p) → [текущее, цель]; награда — монеты и опыт
const A = (id, name, desc, cond, coins, xp) => ({ id, name, desc, cond, coins, xp });
const len = (a) => (a || []).length;
export const ACHIEVEMENTS = [
  A('first_race', 'Первый заезд', 'Проедь любой заезд', (s) => [s.races, 1], 500, 200),
  A('races_25', 'Завсегдатай', 'Проедь 25 заездов', (s) => [s.races, 25], 3000, 800),
  A('races_100', 'Ветеран трассы', 'Проедь 100 заездов', (s) => [s.races, 100], 10000, 3000),
  A('races_500', 'Живу за рулём', 'Проедь 500 заездов', (s) => [s.races, 500], 40000, 12000),
  A('first_win', 'Первая победа', 'Займи 1 место в гонке', (s) => [s.wins, 1], 1500, 500),
  A('wins_10', 'Победитель', '10 побед', (s) => [s.wins, 10], 6000, 1500),
  A('wins_50', 'Чемпион', '50 побед', (s) => [s.wins, 50], 25000, 6000),
  A('wins_200', 'Легенда', '200 побед', (s) => [s.wins, 200], 80000, 20000),
  A('podium_10', 'Пьедестал', '10 раз в тройке', (s) => [s.podiums, 10], 3000, 800),
  A('dist_50', 'Полтинник', 'Проедь 50 км', (s) => [Math.floor(s.distance / 1000), 50], 2000, 600),
  A('dist_500', 'Дальнобойщик', 'Проедь 500 км', (s) => [Math.floor(s.distance / 1000), 500], 12000, 3000),
  A('dist_5000', 'Вокруг света (почти)', 'Проедь 5000 км', (s) => [Math.floor(s.distance / 1000), 5000], 60000, 15000),
  A('speed_200', 'Двести!', 'Разгонись до 200 км/ч', (s) => [Math.floor(s.maxSpeed), 200], 1000, 300),
  A('speed_300', 'Триста!', 'Разгонись до 300 км/ч', (s) => [Math.floor(s.maxSpeed), 300], 5000, 1200),
  A('speed_400', 'Звуковой барьер', 'Разгонись до 400 км/ч', (s) => [Math.floor(s.maxSpeed), 400], 20000, 5000),
  A('drift_2k', 'Боком', 'Один дрифт на 2 000 очков', (s) => [s.bestDrift, 2000], 1000, 300),
  A('drift_10k', 'Король заноса', 'Один дрифт на 10 000 очков', (s) => [s.bestDrift, 10000], 6000, 1500),
  A('drift_50k', 'Дым до небес', 'Один дрифт на 50 000 очков', (s) => [s.bestDrift, 50000], 25000, 6000),
  A('drifts_100', 'Сотня заносов', '100 засчитанных дрифтов', (s) => [s.driftCount, 100], 3000, 800),
  A('drifts_1000', 'Шинный маньяк', '1000 засчитанных дрифтов', (s) => [s.driftCount, 1000], 20000, 5000),
  A('cars_win_5', 'Универсал', 'Побеждай на 5 разных машинах', (s) => [len(s.carsWon), 5], 8000, 2000),
  A('cars_win_15', 'Мастер всех машин', 'Побеждай на 15 разных машинах', (s) => [len(s.carsWon), 15], 30000, 8000),
  A('modes_all', 'Попробовал всё', 'Сыграй во всех режимах', (s) => [len(s.modesPlayed), 9], 5000, 1500),
  A('maps_5', 'Путешественник', 'Доедь до финиша на 5 разных картах', (s) => [len(s.mapsDone), 5], 5000, 1500),
  A('maps_all', 'Объехал всё', 'Доедь до финиша на всех трассах', (s) => [len(s.mapsDone), 8], 20000, 5000),
  A('elim_win', 'Последний герой', 'Победи в «Выбывании»', (s) => [s.elimWins, 1], 4000, 1000),
  A('cam_250', 'Вспышка', 'Пролети спидкамеру на 250 км/ч', (s) => [Math.floor(s.bestCam), 250], 4000, 1000),
  A('clean_10', 'Ни царапины', '10 км в «Без ошибок»', (s) => [Math.floor(s.cleanKm), 10], 5000, 1200),
  A('escape_10', 'Не догонишь', 'Уедь на 10 км в «Побеге»', (s) => [Math.floor(s.escapeKm), 10], 5000, 1200),
  A('cars_10', 'Коллекционер', 'Купи 10 машин (вместе со стартовыми)', (s, p) => [len(p.owned), 10], 8000, 2000),
  A('cars_30', 'Автопарк', '30 машин в гараже', (s, p) => [len(p.owned), 30], 40000, 10000),
  A('tune_20', 'Механик', 'Установи 20 деталей тюнинга', (s) => [s.tuneParts, 20], 5000, 1200),
  A('records_10', 'Рекордсмен', 'Поставь 10 рекордов', (s) => [s.records, 10], 4000, 1000),
  A('online_1', 'Не один', 'Сыграй онлайн-заезд', (s) => [s.online, 1], 1500, 500),
  A('online_win_10', 'Гроза онлайна', '10 побед онлайн', (s) => [s.onlineWins, 10], 15000, 4000),
  A('level_10', 'Опытный', 'Достигни 10 уровня', (s, p) => [levelFromXp(p.xp), 10], 5000, 0),
  A('level_50', 'Профи', 'Достигни 50 уровня', (s, p) => [levelFromXp(p.xp), 50], 50000, 0),
  A('level_100', 'Абсолют', 'Достигни 100 уровня', (s, p) => [levelFromXp(p.xp), 100], 200000, 0),
];
export const achProgress = (a) => { const [cur, goal] = a.cond(profile.stats, profile); return { cur: Math.min(cur, goal), goal, done: !!profile.ach[a.id] }; };
// проверяем и выдаём новые достижения; возвращает список полученных
export function checkAchievements() {
  const got = [];
  for (let pass = 0; pass < 3; pass++) { // награда опытом может открыть достижение за уровень
    let any = false;
    for (const a of ACHIEVEMENTS) {
      if (profile.ach[a.id]) continue;
      const [cur, goal] = a.cond(profile.stats, profile);
      if (cur >= goal) { profile.ach[a.id] = Date.now(); profile.money += a.coins; profile.xp += a.xp; got.push(a); any = true; }
    }
    if (!any) break;
  }
  if (got.length) saveProfile();
  return got;
}

// ---------- ежедневная награда (серия до 7 дней) ----------
export const DAILY = [[500, 150], [800, 200], [1200, 250], [1600, 300], [2200, 400], [3000, 500], [5000, 1000]];
const today = () => new Date().toISOString().slice(0, 10);
export const dailyAvailable = () => profile.daily.last !== today();
export function claimDaily() {
  if (!dailyAvailable()) return null;
  const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  profile.daily.streak = profile.daily.last === y ? (profile.daily.streak % 7) + 1 : 1;
  profile.daily.last = today();
  const [coins, xp] = DAILY[profile.daily.streak - 1];
  const before = level();
  profile.money += coins; profile.xp += xp;
  saveProfile();
  return { day: profile.daily.streak, coins, xp, levelUp: level() > before };
}

// ---------- награда за заезд ----------
const MODE_MULT = { race: 1, drift: 1, free: 0.5, field: 0.5, time: 1, speed: 1, clean: 1.25, escape: 1.1, elim: 1.3, drag: 1.2, zones: 1.15, slalom: 1.15, hill: 1.15, attack: 1.1 };
// g — состояние заезда; extra: { isRecord, carId, mapIdx, mapId, win }
export function raceReward(g, extra = {}) {
  const km = g.dist / 1000, mult = (MODE_MULT[g.mode.id] ?? 1) * (g.online ? 1.5 : 1);
  const lines = []; // [название, монеты, опыт]
  const add = (name, coins, xp) => { coins = Math.round(coins * mult / 10) * 10; xp = Math.round(xp * mult); if (coins > 0 || xp > 0) lines.push([name, coins, xp]); };
  add('Дистанция', km * 90, km * 60);
  add('Дрифт', g.driftTotal / 35, g.driftTotal / 45);
  // комбо: длинная серия заноса с большим множителем
  if (g.bestDrift >= 2000) add('Комбо-дрифт', Math.min(4000, g.bestDrift / 12), Math.min(1500, g.bestDrift / 30));
  if (g.overtakes) add('Обгоны', g.overtakes * 60, g.overtakes * 25);
  if (g.speedPts) add('Спидкамеры', g.speedPts / 20, g.speedPts / 40);
  if (g.dg && g.dg.perfect) add('Идеальные переключения', g.dg.perfect * 120, g.dg.perfect * 40);
  if (g.sl && g.sl.pts) add('Слалом', g.sl.pts / 20, g.sl.pts / 40);
  if (g.zn && g.zn.total) add('Дрифт-зоны', g.zn.total / 40, g.zn.total / 60);
  if (g.finished && g.lenKm) add('Финиш', g.lenKm * 120, g.lenKm * 50);
  if (extra.win) add('Победа', 1800, 500);
  else if (g.place && g.place <= 3 && g.finished) add(`${g.place} место`, [0, 0, 1100, 650][g.place], [0, 0, 250, 150][g.place]);
  if (g.elimWin) add('Последний на трассе', 2500, 600);
  if (extra.isRecord) add('Новый рекорд', 800, 300);
  // первое прохождение карты (финиш на трассе с финишем или 3 км на бесконечной/полигоне)
  const doneKey = extra.mapId;
  if (doneKey && !profile.stats.mapsDone.includes(doneKey) && ((g.finished && g.lenKm) || km >= 3)) { lines.push(['Первое прохождение карты', 2000, 400]); extra.firstMap = true; }
  const coins = Math.min(80000, lines.reduce((a, l) => a + l[1], 0));
  const xp = Math.min(30000, lines.reduce((a, l) => a + l[2], 0));
  return { coins, xp, lines };
}

// записываем результат заезда в статистику и выдаём награду
export function finishRaceProgress(g, extra = {}) {
  const rw = raceReward(g, extra);
  const st = profile.stats, id = g.mode.id;
  const before = level();
  st.races++;
  st.distance += g.dist; st.maxSpeed = Math.max(st.maxSpeed, g.maxSpeed); st.bestScore = Math.max(st.bestScore, g.score);
  st.bestDrift = Math.max(st.bestDrift, g.bestDrift); st.driftCount += g.driftCount || 0; st.driftTotal += g.driftTotal;
  if (!st.modesPlayed.includes(id)) st.modesPlayed.push(id);
  const ms = st.modes[id] || (st.modes[id] = { races: 0, wins: 0, best: 0, dist: 0 });
  ms.races++; ms.best = Math.max(ms.best, g.score); ms.dist += g.dist;
  const placeMode = g.place > 0;
  if (extra.win) { st.wins++; ms.wins++; if (!st.carsWon.includes(extra.carId)) st.carsWon.push(extra.carId); }
  else if (placeMode && !g.online && (g.finished || g.elimOut)) st.losses++; // онлайн — по ответу сервера
  if (!g.online && g.place && g.place <= 3 && (g.finished || g.elimWin)) st.podiums++;
  if (g.elimWin) st.elimWins++;
  if (g.bestCam) st.bestCam = Math.max(st.bestCam, g.bestCam);
  if (id === 'clean') st.cleanKm = Math.max(st.cleanKm, g.dist / 1000);
  if (id === 'escape') st.escapeKm = Math.max(st.escapeKm, g.dist / 1000);
  if (extra.isRecord) st.records++;
  if (g.online) { st.online++; if (extra.win) st.onlineWins++; }
  if (extra.firstMap && extra.mapId && !st.mapsDone.includes(extra.mapId)) st.mapsDone.push(extra.mapId);
  profile.money += rw.coins; profile.xp += rw.xp;
  const ach = checkAchievements();
  const after = level();
  // бонус за каждый новый уровень
  let lvBonus = 0;
  for (let lv = before + 1; lv <= after; lv++) lvBonus += 500 + lv * 100;
  profile.money += lvBonus;
  saveProfile();
  return { ...rw, ach, level: after, levelUp: after > before, lvBonus, newCars: CARS.filter((c) => { const u = carUnlockLevel(c); return u > before && u <= after; }) };
}

// итог онлайн-заезда от сервера: победа/поражение в статистику профиля
export function onlineResult(place, of, modeId, carId) {
  const st = profile.stats;
  if (of < 2) return [];
  const ms = st.modes[modeId] || (st.modes[modeId] = { races: 0, wins: 0, best: 0, dist: 0 });
  if (place === 1) { st.wins++; st.onlineWins++; ms.wins++; if (carId && !st.carsWon.includes(carId)) st.carsWon.push(carId); }
  else st.losses++;
  if (place <= 3) st.podiums++;
  const got = checkAchievements();
  saveProfile();
  return got;
}

// ---------- перенос прогресса: код сохранения ----------
export function exportSave(extra) {
  const data = JSON.stringify({ v: 2, profile, extra });
  return btoa(unescape(encodeURIComponent(data)));
}
export function importSave(code) {
  const data = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
  if (!data || !data.profile || typeof data.profile.money !== 'number') throw new Error('Неверный код сохранения');
  localStorage.setItem(KEY, JSON.stringify(data.profile)); localStorage.setItem(BAK, JSON.stringify(data.profile));
  return data;
}
// краткая публичная сводка для онлайн-профиля
export function publicStats() {
  const st = profile.stats;
  const modeStats = {}; for (const [k, v] of Object.entries(st.modes)) modeStats[k] = { races: v.races, wins: v.wins, best: v.best };
  return { level: level(), xp: profile.xp, money: profile.money, carsOwned: profile.owned.length, carsTotal: CARS.length,
    achievements: Object.keys(profile.ach).length, achievementsTotal: ACHIEVEMENTS.length, races: st.races, wins: st.wins, losses: st.losses,
    bestScore: st.bestScore, bestDrift: st.bestDrift, maxSpeed: Math.round(st.maxSpeed), distance: Math.round(st.distance), modeStats };
}

export { CARS };
