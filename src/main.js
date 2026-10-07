import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Vehicle } from './vehicle.js';
import { CARS, carStats, carClass, CLASSES } from './cars.js';
import { MAPS } from './maps.js';
import { Track, SP, CP_EVERY } from './track.js';
import { Field } from './field.js';
import { buildCarModel, animateCar, setCarLod, seatCar } from './carmodel.js';
import { Rival } from './ai.js';
import { GameAudio } from './audio.js';
import { Input } from './input.js';
import { makeSky, Smoke, Skids, Snowfall, makeEnvScene, makeHorizon, makeClouds } from './fx.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { clamp, lerp, fmtTime } from './utils.js';
import { net, DEFAULT_SERVER } from './net.js';
import * as PG from './progress.js';
import { api, apiBase } from './api.js';
import * as GH from './ghost.js';

// ======================= режимы =======================
const MODES = [
  { id: 'race', name: 'Гонка', desc: 'Соперники, чекпоинты и таймер. Очки за дистанцию, обгоны и дрифт.', timer: 50, rivals: 5,
    bonus: (n) => Math.max(22, 40 - n * 2) },
  { id: 'drift', name: 'Дрифт', desc: 'Очки за занос. На трассе с финишем итог = очки дрифта + бонус за быстрое время (в онлайне ещё и за место на финише).', timer: 60, rivals: 0,
    bonus: (n) => Math.max(26, 42 - n * 1.5) },
  { id: 'free', name: 'Свободная езда', desc: 'Без таймера и давления. Катайся и тренируй дрифт.', timer: 0, rivals: 3,
    bonus: () => 0 },
  { id: 'time', name: 'На время', desc: 'Один на трассе, без соперников: только ты и секундомер. Успей к следующему чекпоинту.', timer: 45, rivals: 0,
    bonus: (n) => Math.max(20, 36 - n * 1.5) },
  { id: 'elim', name: 'Выбывание', desc: '6 соперников. Каждые 30 секунд последний выбывает. Останься один на трассе!', timer: 0, rivals: 6, offline: true, place: true,
    bonus: () => 0 },
  { id: 'speed', name: 'Спидкамеры', desc: 'На каждом чекпоинте камера ловит скорость: чем быстрее пролетишь, тем больше очков.', timer: 50, rivals: 3,
    bonus: (n) => Math.max(22, 38 - n * 2) },
  { id: 'clean', name: 'Без ошибок', desc: 'Одно касание отбойника — и заезд окончен. Каждый чистый километр увеличивает множитель очков.', timer: 0, rivals: 0,
    bonus: () => 0 },
  { id: 'escape', name: 'Побег', desc: 'Сзади едет стена и всё время ускоряется. Догонит — конец. Как далеко уедешь?', timer: 0, rivals: 0,
    bonus: () => 0 },
  // ----- новые режимы (только офлайн) -----
  { id: 'drag', name: 'Драг', desc: 'Прямая 402 / 804 / 1609 м один на один. Старт по светофору, передачи переключаешь сам: лови зелёную зону тахометра. Только с ручной коробкой.', timer: 0, rivals: 1, offline: true, place: true, drag: true,
    bonus: () => 0 },
  { id: 'zones', name: 'Дрифт-зоны', desc: 'Очки дают только в размеченных зонах — там дрифт стоит ×2. Хорошая зона добавляет время. Вне зон занос не считается.', timer: 45, rivals: 0, offline: true,
    bonus: () => 0 },
  { id: 'slalom', name: 'Слалом', desc: 'Проезжай через ворота из конусов. Чисто — очки, серия и +время; пропустил ворота или сбил конус — штраф.', timer: 40, rivals: 0, offline: true,
    bonus: (n) => Math.max(12, 22 - n) },
  { id: 'hill', name: 'Король горы', desc: 'Скоростной спуск с горы по серпантину: машина сама разгоняется под уклон. Доберись до финиша первым.', timer: 0, rivals: 3, offline: true, place: true, hill: true,
    bonus: () => 0 },
  { id: 'attack', name: 'Тайм-атак', desc: '30 секунд на старте. Каждый чекпоинт добавляет время — чем быстрее до него долетел, тем больше. Сплиты сравниваются с рекордом. Бесконечная трасса.', timer: 30, rivals: 0, offline: true,
    bonus: () => 0 },
];
MODES[0].place = true;
const DRAG_M = { 1: 402, 2: 804, 3: 1609 }; // драг: код длины → метры (402 м = ¼ мили)
const lenLabel = (modeId, len) => (modeId === 'drag' ? `${DRAG_M[len] || 402} м` : len ? `${len} км` : '∞');
// длина трассы для режима: драг — свой код, король горы — всегда с финишем, тайм-атак — всегда бесконечная
function modeLen(mode, len) {
  if (mode.drag) return DRAG_M[sel.dragLen] ? sel.dragLen : 1;
  if (mode.id === 'attack') return 0;
  if (mode.hill) return len || 5;
  return len;
}
const ELIM_INT = 30;   // с: интервал выбывания
const isPlaceMode = (m) => !!m.place;
// на картах-«Полигонах» трассы нет: свободная езда, очки за дрифт, без таймера и соперников
const FIELD_MODE = { id: 'field', name: 'Полигон', desc: '', timer: 0, rivals: 0, bonus: () => 0 };
const STEP = 1 / 240; // физика 240 шагов/с — плавно даже на мониторах 144–240 Гц
const CP_FIRST_IDX = 400;
const BACK_WALL = 5; // м: стена позади игрока (во всех режимах на трассе — назад ехать нельзя)

// ======================= сохранения =======================
const store = {
  get(k, d) { try { const v = localStorage.getItem('ed_' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('ed_' + k, JSON.stringify(v)); } catch { /* приватный режим */ } },
};
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (isTouch) document.body.classList.add('touch');
const settings = Object.assign({ vol: 0.8, music: true, assist: true, manual: false, quality: isTouch ? 0 : 1, camera: 0, units: 'kmh', fps: 0, showFps: false, sfxVol: 0.8, musicVol: 0.3, easy: true, smoke: true, outline: true, autoRes: false, assistMode: 'all', draw: 1, ghost: true, photoFilter: 'none' }, store.get('settings', {}));
// миграция: старая галочка «помощь» → режим помощи; авто-разрешение по умолчанию выключено (картинка мылилась)
if (!settings.v3) { settings.v3 = 1; settings.autoRes = false; if (settings.assist === false) settings.assistMode = 'off'; }
if (!settings.handling) settings.handling = settings.easy === false ? 'real' : 'easy';
settings.easy = settings.handling === 'easy';
// len — длина трассы в км (0 = бесконечная); fieldMode — полигон: obst (с препятствиями), clean (чистое поле), flat (чистое и ровное)
const sel = Object.assign({ car: 0, colors: {}, mode: 0, map: 0, len: 10, fieldMode: 'obst', dragLen: 1 }, store.get('sel', {}));
sel.mm = Object.assign({ mode: 'race', len: 10, size: 5, carRule: 'any', bots: 1 }, sel.mm || {}); // фильтры быстрого матча
if (sel.car >= CARS.length) sel.car = 0;
if (sel.mode >= MODES.length) sel.mode = 0;
// прогресс: ездить можно только на купленных машинах (в гараже можно смотреть любые)
const ownedIdx = () => CARS.findIndex((c) => c.id === 'kaze');
if (!PG.owns(CARS[sel.car])) sel.car = Number.isInteger(sel.ownedCar) && CARS[sel.ownedCar] && PG.owns(CARS[sel.ownedCar]) ? sel.ownedCar : ownedIdx();
sel.ownedCar = sel.car;
// вернуть игрока на его машину, если в гараже он смотрел некупленную
function ensureOwnedCar() {
  if (PG.owns(CARS[sel.car])) { sel.ownedCar = sel.car; return; }
  sel.car = PG.owns(CARS[sel.ownedCar] || CARS[0]) ? sel.ownedCar : ownedIdx(); saveSel();
  if (W && state === 'menu') spawnPlayer(6, -2.8);
}
const LEN_MIN = 5, LEN_MAX = 50;
let records = store.get('records', {});
// рекорды по каждой машине: ключ «режим_карта[_км]|id машины». Старые общие рекорды переносим к их машине
for (const k of Object.keys(records)) {
  if (k.includes('|')) continue;
  const r = records[k]; const c = CARS.find((x) => x.name === r.car);
  if (c && !records[k + '|' + c.id]) records[k + '|' + c.id] = { ...r };
}
const saveSettings = () => store.set('settings', settings);
const saveSel = () => store.set('sel', sel);

// ======================= рендер =======================
const $ = (id) => document.getElementById(id);
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // мягкие тени, как было изначально
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 1600);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

// Динамическое разрешение: если FPS проседает, картинка рендерится чуть в меньшем разрешении (незаметно на ходу),
// когда запас появляется — разрешение возвращается. Так игра держит плавность на слабых ноутбуках.
const dynRes = { scale: 1, t: 0, frames: 0, good: 0 };
const basePixelRatio = () => [1, Math.min(devicePixelRatio, 1.5), Math.min(devicePixelRatio, 2)][+settings.quality] || 1;
function applyPixelRatio() {
  const pr = Math.max(0.5, basePixelRatio() * (settings.autoRes ? dynRes.scale : 1));
  if (Math.abs(renderer.getPixelRatio() - pr) < 0.01) return;
  renderer.setPixelRatio(pr);
  resize();
}
function updateDynRes(dt) {
  if (!settings.autoRes || state !== 'race') { dynRes.t = 0; dynRes.frames = 0; return; }
  dynRes.t += dt; dynRes.frames++;
  if (dynRes.t < 1.5) return;
  const fps = dynRes.frames / dynRes.t;
  dynRes.t = 0; dynRes.frames = 0;
  const target = settings.fps > 0 ? Math.min(settings.fps, 60) : 60;
  if (fps < target * 0.82 && dynRes.scale > 0.6) { dynRes.scale = Math.max(0.6, dynRes.scale - 0.12); dynRes.good = 0; applyPixelRatio(); }
  else if (fps > target * 0.95) { if (++dynRes.good >= 3 && dynRes.scale < 1) { dynRes.scale = Math.min(1, dynRes.scale + 0.08); dynRes.good = 0; applyPixelRatio(); } }
  else dynRes.good = 0;
}
function applyQuality() {
  const q = +settings.quality;
  renderer.setPixelRatio(Math.max(0.5, basePixelRatio() * (settings.autoRes ? dynRes.scale : 1)));
  renderer.shadowMap.enabled = q > 0;
  if (W && W.sun) {
    W.sun.castShadow = q > 0;
    const size = q === 2 ? 2048 : 1024;
    if (W.sun.shadow.mapSize.x !== size) { W.sun.shadow.mapSize.set(size, size); W.sun.shadow.map?.dispose(); W.sun.shadow.map = null; }
  }
  resize();
}
let composer = null, bloom = null;
function setupComposer() {
  if (+settings.quality === 2) {
    if (!composer) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.5, 0.45, 0.85);
      composer.addPass(bloom);
      composer.addPass(new OutputPass());
    }
    // постобработка в разрешении не выше 1x — свечение мягкое, а нагрузка на видеокарту в 2–4 раза меньше на Retina/4K
    composer.setPixelRatio(Math.min(1, renderer.getPixelRatio()));
    composer.setSize(innerWidth, innerHeight);
    if (W) { bloom.strength = W.map.night ? 0.55 : 0.18; bloom.threshold = W.map.night ? 0.72 : 0.96; bloom.radius = 0.35; }
  } else if (composer) { composer.dispose(); composer = null; bloom = null; }
}
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  setupComposer();
  camera.aspect = w / h;
  updateViewOffset();
  camera.updateProjectionMatrix();
}
let viewShift = { x: 0, y: 0 };
function updateViewOffset() {
  const w = innerWidth, h = innerHeight;
  if (viewShift.x || viewShift.y) camera.setViewOffset(w, h, -w * viewShift.x, h * viewShift.y, w, h);
  else camera.clearViewOffset();
}
addEventListener('resize', resize);

const audio = new GameAudio();
audio.setVolume(settings.vol); audio.musicOn = settings.music; audio.sfxVol = settings.sfxVol; audio.musicVol = settings.musicVol;
const input = new Input();
input.bindTouch($('touch'));
addEventListener('pointerdown', () => audio.init(), { once: false });
addEventListener('keydown', () => audio.init());
// звук пропадал после перезахода: браузер приостанавливает AudioContext, когда вкладка скрыта
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') audio.resume(); else audio.silence(); });
addEventListener('focus', () => audio.resume());
addEventListener('pageshow', () => audio.resume());

// ======================= мир =======================
let W_env = null;
let W = null;       // текущий мир (карта, трасса, свет, машины)
let G = null;       // состояние заезда
let state = 'loading';

function disposeWorld() {
  if (!W) return;
  scene.remove(W.group);
  W.group.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.map?.dispose(); m.dispose(); });
  });
  W = null;
}

function buildWorld(mapIdx, seed, opts = {}) {
  disposeWorld();
  const map = MAPS[mapIdx];
  const group = new THREE.Group();
  scene.add(group);
  const fogK = [0.8, 1, 1.35][+settings.draw] ?? 1; // дальность прорисовки
  scene.fog = new THREE.Fog(map.fog.color, map.fog.near * fogK, map.fog.far * fogK);
  scene.background = new THREE.Color(map.fog.color);
  if (W_env) W_env.dispose();
  W_env = pmrem.fromScene(makeEnvScene(map), 0.02).texture;
  scene.environment = W_env;
  scene.environmentIntensity = map.night ? 0.7 : 1.0;
  renderer.toneMappingExposure = map.night ? 1.15 : 1.0;

  const hemi = new THREE.HemisphereLight(map.hemi.sky, map.hemi.ground, map.hemi.intensity);
  group.add(hemi);
  const sun = new THREE.DirectionalLight(map.sun.color, map.sun.intensity);
  const sd = new THREE.Vector3(...map.sun.dir).normalize();
  sun.shadow.camera.left = -32; sun.shadow.camera.right = 32; sun.shadow.camera.top = 32; sun.shadow.camera.bottom = -32;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 220;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  group.add(sun); group.add(sun.target);

  const sky = makeSky(map); group.add(sky);
  const horizon = makeHorizon(map); horizon.position.y = horizon.userData.h / 2 - 45; sky.add(horizon);
  sky.add(makeClouds(map));
  const fm = opts.fieldMode ?? sel.fieldMode;
  const track = map.field
    ? new Field(group, map, seed, +settings.quality, { props: fm === 'obst', flat: fm === 'flat' })
    : new Track(group, map, seed, +settings.quality, { finishIdx: opts.finishIdx ?? Infinity, draw: +settings.draw, profile: opts.profile });
  const farPlane = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), new THREE.MeshLambertMaterial({ color: map.ground.far }));
  farPlane.rotation.x = -Math.PI / 2; group.add(farPlane);

  const tunedSmoke = PG.SMOKE_COLORS[PG.lookOf(CARS[sel.car]).smoke || 0];
  const smokeColor = tunedSmoke ?? map.smoke ?? { desert: 0xe6ddd0, snow: 0xffffff, city: 0xb8b8c8 }[map.id];
  const smoke = new Smoke(group, smokeColor, settings.quality > 0 ? 90 : 50);
  const dust = new Smoke(group, map.dust ?? { desert: 0xcf9f6c, snow: 0xf4f8ff, city: 0x77777f }[map.id], 40);
  const skidCol = map.skid ?? (map.id === 'snow' ? 0x7d8898 : 0x0c0c0c);
  const skids = new Skids(group, settings.quality > 0 ? 3000 : 1200, skidCol, skidCol === 0x0c0c0c ? 0.6 : 0.4);
  const snow = map.weather === 'snow' ? new Snowfall(group, settings.quality > 0 ? 2600 : 900) : null;

  W = { map, mapIdx, group, hemi, sun, sunDir: sd, sky, track, farPlane, smoke, dust, skids, snow, rivals: [], player: null };
  applyQuality();
  spawnPlayer(6, -2.8);
}

function carColor(spec) { const p = PG.lookOf(spec).paint; return p || spec.colors[sel.colors[spec.id] ?? 0]; }

function spawnPlayer(idx, lat) {
  const base = CARS[sel.car];
  const spec = PG.tunedSpec(base); // техтюнинг меняет параметры физики
  if (W.player) { W.group.remove(W.player.model.root); disposeModel(W.player.model); }
  const model = buildCarModel(base, carColor(base), { night: W.map.night, outline: true, look: PG.lookOf(base) });
  model._tailBase = W.map.night ? 1.2 : 0.35;
    W.group.add(model.root);
  const veh = new Vehicle(spec);
  const p = W.track.P(idx);
  veh.reset(p.x + p.lx * lat, p.z + p.lz * lat, p.h);
  veh.idx = idx; veh.lat = lat; veh.roadY = p.y; veh.slope = 0; veh.roll = 0;
  if (W.track.isField) { W.track.target = veh; veh.odo = 0; }
  if (W.map.night) {
    const hl = new THREE.SpotLight(0xfff1d6, 65, 130, 0.55, 0.55, 1.3);
    hl.position.set(0, 0.8, 2.0); hl.target.position.set(0, 0, 25);
    model.root.add(hl); model.root.add(hl.target);
  }
  W.player = { veh, model };
  placePlayerModel(0);
}

// освобождаем геометрии старой модели (раньше при каждой смене машины в гараже копилась видеопамять)
function disposeModel(model) {
  if (!model) return;
  model.root.traverse((o) => { if (o.isMesh && o.geometry && !o.userData.sharedGeo) o.geometry.dispose(); });
}

// Интерполяция между шагами физики: картинка плавная при любом FPS, без рывков «вперёд-назад»
function interp() {
  const { veh } = W.player;
  const a = G && veh.px !== undefined ? clamp(G.acc / STEP, 0, 1) : 1;
  const L = (p, c) => (p === undefined ? c : p + (c - p) * a);
  let dh = veh.h - (veh.ph ?? veh.h);
  return { x: L(veh.px, veh.x), z: L(veh.pz, veh.z), h: (veh.ph ?? veh.h) + dh * a, y: L(veh.pY, veh.roadY) };
}
// высота поверхности под точкой (для посадки колёс): дорога на 0.02 выше оси трассы, на «Полигоне» — рельеф
function groundFn(model, hint) {
  const t = W.track;
  if (t.isField) return (x, z) => t.heightAt(x, z);
  // hint — индекс точки трассы рядом с машиной; если его нет (чужие машины онлайн) — берём прошлый найденный
  return (x, z) => { const r = t.project(x, z, hint ?? model._gi ?? W.player.veh.idx); model._gi = r.idx; return r.y + 0.02; };
}
function placePlayerModel(dt) {
  const { veh, model } = W.player;
  const ip = interp();
  seatCar(model, ip.x, ip.z, ip.h, groundFn(model, veh.idx));
  animateCar(model, veh, dt || 0.016, G && G.braking);
}

// свои копии материалов, чтобы делать машину полупрозрачным «призраком» вблизи
function makeGhost(r, model) {
  r.ghostMats = []; r.outlines = [];
  const cache = new Map();
  model.root.traverse((o) => {
    if (!o.isMesh || o.isSprite) return;
    if (o.material.isShaderMaterial) { r.outlines.push(o); return; }
    if (!cache.has(o.material)) {
      const m = o.material.clone(); m.userData.baseOp = o.material.transparent ? o.material.opacity : 1; m.transparent = true;
      cache.set(o.material, m); r.ghostMats.push(m);
    }
    o.material = cache.get(o.material);
  });
}
const LOD_FAR = 65, LOD_NEAR = 55; // работает только на низкой графике // м: дальше — упрощённая модель (с запасом, чтобы не мигало на границе)
function setGhostOpacity(r, d) {
  const op = clamp((d - 4) / 14, 0.3, 1);
  const model = r.model;
  const far = model && +settings.quality === 0 ? (model.far ? d > LOD_NEAR : d > LOD_FAR) : false;
  const lodChanged = model && far !== model.far;
  if (lodChanged) setCarLod(model, far);
  if (Math.abs(op - (r.op ?? 1)) < 0.02 && !lodChanged) return;
  r.op = op;
  // полностью видимая машина рисуется как обычная (непрозрачная) — это заметно дешевле для видеокарты
  for (const m of r.ghostMats) { const o = op * (m.userData.baseOp ?? 1); m.opacity = o; m.transparent = o < 0.999; }
  for (const o of r.outlines) o.visible = op > 0.95 && !(far && o.userData.outlineOf && o.userData.outlineOf.userData.detail);
}

// ======================= онлайн: машины других игроков =======================
function nameSprite(text) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(0,0,0,0.55)'; g.beginPath(); g.roundRect(8, 8, 240, 48, 14); g.fill();
  g.fillStyle = '#7cff4f'; g.font = 'bold 30px Segoe UI, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 128, 33);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  sp.scale.set(2.6, 0.65, 1); sp.position.y = 2.1; sp.renderOrder = 10;
  return sp;
}
function spawnRemoteCar(p) {
  if (p.model || !W) return;
  const spec = CARS[p.car] || CARS[0];
  const model = buildCarModel(spec, (p.look && p.look.paint) || spec.colors[p.color % spec.colors.length], { night: W.map.night, outline: true, look: p.look || {} });
  model._tailBase = W.map.night ? 1.2 : 0.35;
  makeGhost(p, model);
  p.label = nameSprite(p.name);
  model.root.add(p.label);
  model.root.visible = false;
  W.group.add(model.root);
  p.model = model; p.wheelSpin = 0;
}
function removeRemoteCar(p) {
  if (!p || !p.model) return;
  if (W) W.group.remove(p.model.root);
  p.model = null;
}
function updateRemote(dt) {
  if (!G || !G.online) return;
  const { veh } = W.player;
  for (const p of net.players.values()) {
    if (!net.racers.includes(p.id)) continue;
    if (!p.model) spawnRemoteCar(p);
    const v = net.sample(p);
    if (!v) continue;
    p.vis = v;
    const m = p.model;
    m.root.visible = true;
    seatCar(m, v.x, v.z, v.h, groundFn(m));
    p.wheelSpin += v.spd / m.spec.wheelRadius * dt;
    for (const w of m.wheels) { w.wheel.rotation.x = p.wheelSpin; if (w.front) w.pivot.rotation.y = v.steer; }
    setGhostOpacity(p, Math.hypot(v.x - veh.x, v.z - veh.z));
  }
}

function spawnRivals(n) {
  const grid = [[6, 2.8], [14, -2.8], [14, 2.8], [22, -2.8], [22, 2.8], [30, 0]];
  for (let i = 0; i < n; i++) {
    const spec = CARS[(sel.car + 1 + i) % CARS.length];
    const color = spec.colors[(i * 2 + 1) % spec.colors.length];
    const model = buildCarModel(spec, color, { night: W.map.night, outline: true });
    model._tailBase = W.map.night ? 1.2 : 0.35;
    W.group.add(model.root);
    const r = new Rival(spec, model, grid[i][0], grid[i][1], 0.97 + Math.random() * 0.1, W.map.grip);
    makeGhost(r, model);
    r.name = `Бот ${i + 1}`;
    r.label = nameSprite(r.name);
    model.root.add(r.label);
    r.ahead = grid[i][0] > 6 || (grid[i][0] === 6 && false);
    r.place(W.track, 0);
    W.rivals.push(r);
  }
}

// ======================= камера =======================
const cam = { mode: +settings.camera, h: 0, pos: new THREE.Vector3(), look: new THREE.Vector3(), shake: 0, fov: 62, cineT: 0, cineA: 0, orbit: 0 };
const CAM_NAMES = ['Камера: сзади', 'Камера: сзади, дальняя', 'Камера: с капота', 'Камера: кино'];
const angDiff = (a, b) => { let d = a - b; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return d; };

function updateCamera(dt, instant = false) {
  const { veh: real } = W.player;
  const ip = interp();
  const veh = { x: ip.x, z: ip.z, h: ip.h, roadY: ip.y, speed: real.speed, u: real.u, vx: real.vx, vz: real.vz, spec: real.spec, slope: real.slope };
  const spd = veh.speed;
  const fwdX = Math.sin(veh.h), fwdZ = Math.cos(veh.h);
  const cy = veh.roadY;
  // камера частично смотрит по направлению скорости (красиво в дрифте), но вес меняется плавно
  // и угол ограничен — при ударах и откатах назад камеру не дёргает
  const w = clamp((veh.u - 3) / 8, 0, 1) * 0.45;
  const target = veh.h + clamp(angDiff(Math.atan2(veh.vx, veh.vz), veh.h), -0.7, 0.7) * w;
  if (instant) cam.h = target;
  cam.h += angDiff(target, cam.h) * Math.min(1, dt * 6);
  const k = instant ? 1 : 1 - Math.exp(-dt * 7);
  let fov = 60 + Math.min(9, spd * 0.12);
  const des = new THREE.Vector3(), look = new THREE.Vector3();
  if (cam.mode === 0 || cam.mode === 1) {
    const dist = cam.mode === 0 ? 5.4 : 8.2, hgt = cam.mode === 0 ? 1.9 : 3.0;
    // камера жёстко привязана к машине на постоянном расстоянии (на скорости не «отстаёт»);
    // сглаживается только поворот камеры и высота — поэтому картинка плавная, но машина всегда рядом
    if (instant || cam.y === undefined) cam.y = cy + hgt;
    cam.y += (cy + hgt - cam.y) * Math.min(1, dt * 6);
    des.set(veh.x - Math.sin(cam.h) * dist, Math.max(cam.y, cy + 1.0), veh.z - Math.cos(cam.h) * dist);
    if (W.track.isField) des.y = Math.max(des.y, W.track.heightAt(des.x, des.z) + 0.9);
    look.set(veh.x + Math.sin(cam.h) * 2.5, cy + 1.05, veh.z + Math.cos(cam.h) * 2.5);
    cam.pos.copy(des);
    cam.look.copy(look);
  } else if (cam.mode === 2) {
    const b = veh.spec.body;
    des.set(veh.x + fwdX * (b.cabin[0][0] + 0.25), cy + b.cabin[0][1] + 0.55, veh.z + fwdZ * (b.cabin[0][0] + 0.25));
    look.set(veh.x + fwdX * 30, cy + 1.3 + (veh.slope || 0) * 30, veh.z + fwdZ * 30);
    cam.pos.copy(des); cam.look.copy(look);
    fov += 6;
  } else {
    cam.cineT -= dt;
    if (cam.cineT <= 0 || instant) { cam.cineT = 4 + Math.random() * 3; cam.cineA = (Math.random() * 2 - 1) * 2.4; cam.cineD = 6 + Math.random() * 6; cam.cineH = 0.8 + Math.random() * 3; }
    const a = veh.h + Math.PI + cam.cineA;
    des.set(veh.x + Math.sin(a) * cam.cineD, cy + cam.cineH, veh.z + Math.cos(a) * cam.cineD);
    cam.pos.lerp(des, 1 - Math.exp(-dt * 2));
    look.set(veh.x, cy + 0.8, veh.z);
    cam.look.lerp(look, 1 - Math.exp(-dt * 12));
    fov = 55;
  }
  cam.fov += (fov - cam.fov) * Math.min(1, dt * 1.5);
  camera.fov = cam.fov; camera.updateProjectionMatrix();
  camera.position.copy(cam.pos);
  if (cam.shake > 0.001) {
    camera.position.x += (Math.random() - 0.5) * cam.shake * 0.5;
    camera.position.y += (Math.random() - 0.5) * cam.shake * 0.5;
    cam.shake *= Math.exp(-dt * 6);
  }
  camera.lookAt(cam.look);
}

// осмотр машины в гараже/тюнинге: тянешь мышью или пальцем — крутишь, колесо/щипок — приближение, двойной клик — сброс
const insp = { yaw: 0.75, pitch: 0.2, r: 6.2, ty: 0.75, tp: 0.2, tr: 6.2, user: false, on: false };
function menuCamera(dt, garage) {
  const { veh } = W.player;
  cam.orbit += dt * 0.18;
  let a, r, y;
  if (garage && insp.user) {
    const k = 1 - Math.exp(-dt * 12); // плавно догоняем цель
    insp.yaw += (insp.ty - insp.yaw) * k; insp.pitch += (insp.tp - insp.pitch) * k; insp.r += (insp.tr - insp.r) * k;
    a = veh.h + insp.yaw; r = insp.r * Math.cos(insp.pitch); y = 0.7 + insp.r * Math.sin(insp.pitch);
  } else {
    r = garage ? 6.2 : 7.5;
    a = veh.h + (garage ? 0.75 : Math.PI * 0.75) + Math.sin(cam.orbit) * (garage ? 0.6 : 0.9);
    y = garage ? 1.6 : 2.2;
  }
  camera.position.set(veh.x + Math.sin(a) * r, veh.roadY + y, veh.z + Math.cos(a) * r);
  camera.fov = 50; camera.updateProjectionMatrix();
  camera.lookAt(veh.x, veh.roadY + (garage && insp.user ? 0.55 : 0.7), veh.z);
}
const inspOK = () => W && state === 'menu' && (menuScreen === 'garage' || menuScreen === 'tune');
function inspTake() { // переходим с автопролёта на ручной осмотр без рывка
  if (insp.user) return;
  const { veh } = W.player;
  const dx = camera.position.x - veh.x, dz = camera.position.z - veh.z, dy = camera.position.y - veh.roadY - 0.7;
  const yaw = Math.atan2(dx, dz) - veh.h, r = Math.hypot(dx, dz, dy);
  insp.yaw = insp.ty = yaw; insp.r = insp.tr = r; insp.pitch = insp.tp = Math.asin(Math.max(-1, Math.min(1, dy / r)));
  insp.user = true;
}
function inspView(yaw, pitch, r) { inspTake(); const d = ((yaw - insp.ty) % (Math.PI * 2) + Math.PI * 3) % (Math.PI * 2) - Math.PI; insp.ty += d; insp.tp = pitch; insp.tr = r; }
{
  const pts = new Map(); let pinch = 0;
  canvas.addEventListener('pointerdown', (e) => { if (!inspOK()) return; pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); canvas.setPointerCapture(e.pointerId); inspTake(); canvas.style.cursor = 'grabbing'; });
  canvas.addEventListener('pointermove', (e) => {
    const p = pts.get(e.pointerId); if (!p || !inspOK()) return;
    if (pts.size === 1) {
      insp.ty -= (e.clientX - p.x) * 0.009;
      insp.tp = Math.max(0.02, Math.min(1.35, insp.tp + (e.clientY - p.y) * 0.006));
    }
    p.x = e.clientX; p.y = e.clientY;
    if (pts.size === 2) {
      const [a, b] = [...pts.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch) insp.tr = Math.max(3, Math.min(12, insp.tr * pinch / d));
      pinch = d;
    }
  });
  const up = (e) => { pts.delete(e.pointerId); if (pts.size < 2) pinch = 0; if (!pts.size) canvas.style.cursor = ''; };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', (e) => { if (!inspOK()) return; e.preventDefault(); inspTake(); insp.tr = Math.max(3, Math.min(12, insp.tr * Math.exp(e.deltaY * 0.0012))); }, { passive: false });
  canvas.addEventListener('dblclick', () => { if (inspOK()) insp.user = false; });
}
function setInspect(on) {
  insp.on = on; document.body.classList.toggle('inspect', on);
  viewShift = on ? { x: 0, y: 0 } : { x: innerWidth > 800 ? 0.16 : 0, y: innerWidth > 800 ? 0 : 0.2 };
  updateViewOffset(); camera.updateProjectionMatrix();
  if (on) inspView(0.75, 0.22, 6);
}
document.querySelectorAll('[data-insp]').forEach((b) => b.addEventListener('click', () => {
  audio.click(); const v = b.dataset.insp;
  if (v === 'on') return setInspect(true);
  if (v === 'off') return setInspect(false);
  if (v === 'auto') { insp.user = false; return; }
  const [yaw, pitch, r] = { front: [0, 0.12, 5.6], side: [Math.PI / 2, 0.1, 6.2], back: [Math.PI, 0.14, 5.6], q34: [0.75, 0.22, 6], top: [0.4, 1.3, 7], wheel: [1.2, 0.03, 3.4], low: [2.4, 0.02, 4.4] }[v];
  inspView(yaw, pitch, r);
}));
addEventListener('keydown', (e) => { if (e.code === 'Escape' && insp.on) { e.stopPropagation(); setInspect(false); } }, true);

// ======================= заезд =======================
function curMode() { return MAPS[sel.map].field ? FIELD_MODE : MODES[sel.mode]; }
function newGame(lenKm) {
  const mode = curMode();
  const finite = !W.track.isField && lenKm > 0;
  G = {
    mode, finite, lenKm: finite ? lenKm : 0, finishIdx: finite ? W.track.finishIdx : Infinity,
    maxIdx: 6, finished: false, place: 0, rivalFin: 0,
    // на трассе заданной длины таймер не убывает: считаем время заезда, цель — доехать до финиша
    time: finite ? 0 : mode.timer, score: 0, dist: 0, startS: W.track.P(6).s, driftTotal: 0, overtakes: 0, cpCount: 0,
    nextCp: CP_FIRST_IDX, maxSpeed: 0, bestDrift: 0, hits: 0, cd: 3.6, cdShown: 4, started: false, over: false, braking: false,
    drift: { active: false, pts: 0, mult: 1, time: 0, idle: 0, angle: 0 }, driftShowT: 0, elapsed: 0, acc: 0,
    // новые режимы
    speedPts: 0, cams: 0, bestCam: 0,                // Спидкамеры
    elimT: ELIM_INT, elimCount: 0, elimWin: false,   // Выбывание
    crashed: false,                                  // Без ошибок
    wallIdx: 6 - 45 / SP, wallV: 0,                  // Побег: стена стартует в 45 м позади
  };
}

// ======================= особые режимы: драг, дрифт-зоны, слалом, король горы, тайм-атак =======================
function initModeState() {
  const id = G.mode.id;
  if (id === 'drag') G.dg = { react: null, perfect: 0, early: 0, late: 0, t100: 0 };
  if (id === 'slalom') G.sl = { gates: [], next: 110, side: Math.random() < 0.5 ? 1 : -1, combo: 0, bestCombo: 0, clean: 0, miss: 0, cones: 0, pts: 0, flying: [] };
  if (id === 'zones') G.zn = { list: [], next: 150, total: 0, done: 0, best: 0, perfect: 0 };
  if (id === 'attack') G.at = { lastT: 0, splits: [], rec: (records[recKey('attack', W.map.id, 0)] || {}).splits || null };
}
const isDriftingNow = (veh) => { const ang = Math.abs(veh.beta) * 57.3; return veh.speed > 8.5 && ang > 11 && ang < 110 && veh.u > 2 && !veh.offroad; };
const lanePos = (i, lat) => { const p = W.track.P(i); return { x: p.x + p.lx * lat, y: p.y, z: p.z + p.lz * lat, h: p.h }; };

// ---------- слалом: ворота из двух конусов ----------
let coneGeo = null;
const coneMats = {};
function makeCone(color) {
  coneGeo ||= new THREE.ConeGeometry(0.26, 0.72, 10).translate(0, 0.36, 0);
  coneGeo.userData = { shared: true };
  const m = coneMats[color] ||= new THREE.MeshStandardMaterial({ color, roughness: 0.55, emissive: color, emissiveIntensity: W.map.night ? 0.6 : 0.12 });
  const mesh = new THREE.Mesh(coneGeo, m); mesh.userData.sharedGeo = true; mesh.castShadow = false;
  return mesh;
}
const GATE_W = 5.2; // м: ширина ворот
function spawnGate(sl) {
  const tr = W.track; tr.ensure(sl.next + 2);
  const c = sl.side * Math.min(tr.hw - GATE_W / 2 - 0.3, tr.hw * 0.42);
  const g = { idx: sl.next, c, side: sl.side, cones: [] };
  const color = sl.side > 0 ? 0x2f7bff : 0xff3b30; // синие ворота слева, красные справа
  for (const off of [-GATE_W / 2, GATE_W / 2]) {
    const p = lanePos(g.idx, c + off), m = makeCone(color);
    m.position.set(p.x, p.y, p.z); W.group.add(m);
    g.cones.push({ m, lat: c + off });
  }
  sl.gates.push(g);
  sl.side = -sl.side;
  sl.next += Math.round((26 + Math.random() * 12) / SP);
}
function slalomPenalty(sec, text) {
  if (G.finite) G.elapsed += sec; else G.time = Math.max(0, G.time - sec * 1.5);
  showMsg(`${text}  ${G.finite ? '+' : '−'}${G.finite ? sec : sec * 1.5} с`, 1.3, '#ff6b6b');
}
function updateSlalom(dt, veh) {
  const sl = G.sl;
  while (sl.next < veh.idx + 260 && sl.next < G.finishIdx - 30) spawnGate(sl);
  while (sl.gates.length && veh.idx >= sl.gates[0].idx) {
    const g = sl.gates.shift();
    const d = Math.abs(veh.lat - g.c);
    const halfCar = (veh.spec.body.W || 1.8) / 2;
    if (d <= GATE_W / 2 - halfCar * 0.7) {
      sl.combo++; sl.clean++; sl.bestCombo = Math.max(sl.bestCombo, sl.combo);
      const pts = 100 + 25 * Math.min(sl.combo, 20); sl.pts += pts;
      if (!G.finite) G.time += 1.2;
      showMsg(`ВОРОТА ×${sl.combo}  +${pts}${G.finite ? '' : '  +1.2 с'}`, 0.9, '#7cff4f'); audio.score();
    } else if (d <= GATE_W / 2 + halfCar) {
      // зацепил конус: он улетает
      const cone = g.cones.reduce((a, b) => (Math.abs(b.lat - veh.lat) < Math.abs(a.lat - veh.lat) ? b : a));
      sl.flying.push({ m: cone.m, vx: veh.vx * 0.6 + (Math.random() - 0.5) * 3, vy: 4 + Math.random() * 3, vz: veh.vz * 0.6 + (Math.random() - 0.5) * 3, t: 0 });
      sl.cones++; sl.combo = 0; G.hits++;
      slalomPenalty(1, 'СБИЛ КОНУС');
    } else {
      sl.miss++; sl.combo = 0;
      slalomPenalty(2, 'ПРОПУСК ВОРОТ');
    }
    g.passed = true;
    setTimeout(() => { for (const c of g.cones) if (!sl.flying.some((f) => f.m === c.m)) W && W.group.remove(c.m); }, 2500);
  }
  for (const f of sl.flying) {
    f.t += dt; f.vy -= 9.8 * dt;
    f.m.position.x += f.vx * dt; f.m.position.y += f.vy * dt; f.m.position.z += f.vz * dt;
    f.m.rotation.x += dt * 7; f.m.rotation.z += dt * 5;
  }
  sl.flying = sl.flying.filter((f) => { if (f.t > 2.5) { W.group.remove(f.m); return false; } return true; });
}

// ---------- дрифт-зоны: размеченные участки, где дрифт стоит ×2 ----------
let zoneTex = null;
function zoneTexture() {
  if (zoneTex) return zoneTex;
  const c = document.createElement('canvas'); c.width = 64; c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = 'rgba(255,40,200,0.35)'; x.fillRect(0, 0, 64, 128);
  x.fillStyle = 'rgba(255,255,255,0.55)';
  x.beginPath(); x.moveTo(0, 64); x.lineTo(32, 20); x.lineTo(64, 64); x.lineTo(64, 84); x.lineTo(32, 40); x.lineTo(0, 84); x.closePath(); x.fill(); // шеврон
  x.fillStyle = 'rgba(255,230,0,0.9)'; x.fillRect(0, 0, 5, 128); x.fillRect(59, 0, 5, 128);
  zoneTex = new THREE.CanvasTexture(c); zoneTex.wrapS = zoneTex.wrapT = THREE.RepeatWrapping; zoneTex.colorSpace = THREE.SRGBColorSpace;
  return zoneTex;
}
function spawnZone(zn) {
  const tr = W.track, i0 = zn.next, i1 = i0 + Math.round((120 + Math.random() * 80) / SP);
  tr.ensure(i1 + 2);
  const n = i1 - i0 + 1, pos = new Float32Array(n * 2 * 3), uv = new Float32Array(n * 2 * 2), idx = [];
  for (let k = 0; k < n; k++) {
    const p = tr.P(i0 + k), w = tr.hw;
    pos.set([p.x + p.lx * w, p.y + 0.045, p.z + p.lz * w, p.x - p.lx * w, p.y + 0.045, p.z - p.lz * w], k * 6);
    uv.set([0, k * SP / 6, 1, k * SP / 6], k * 4);
    if (k) { const a = (k - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); geo.setIndex(idx);
  const mat = new THREE.MeshBasicMaterial({ map: zoneTexture(), transparent: true, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
  const mesh = new THREE.Mesh(geo, mat); W.group.add(mesh);
  zn.list.push({ i0, i1, mesh, pts: 0 });
  zn.next = i1 + Math.round((180 + Math.random() * 160) / SP);
}
function updateZones(dt, veh) {
  const zn = G.zn;
  while (zn.next < veh.idx + 320 && zn.next < G.finishIdx - 80) spawnZone(zn);
  const z = zn.list[0];
  if (!z) return;
  if (veh.idx >= z.i0 && veh.idx <= z.i1) {
    if (isDriftingNow(veh)) z.pts += Math.abs(veh.beta) * 57.3 * veh.speed * dt * 0.7 * G.drift.mult;
  } else if (veh.idx > z.i1) {
    zn.list.shift();
    const pts = Math.floor(z.pts);
    zn.total += pts; zn.done++; zn.best = Math.max(zn.best, pts);
    const grade = pts < 400 ? ['ЗОНА ПРОВАЛЕНА', '#ff6b6b'] : pts < 3000 ? ['ЗОНА: ХОРОШО', '#ffcc00'] : pts < 7000 ? ['ЗОНА: ОТЛИЧНО', '#7cff4f'] : ['ЗОНА: ИДЕАЛЬНО!', '#ff4fd8'];
    if (pts >= 7000) zn.perfect++;
    let bonus = 0;
    if (!G.finite && pts >= 400) { bonus = Math.min(12, Math.round(pts / 600 * 10) / 10); G.time += bonus; }
    showMsg(`${grade[0]}  +${pts.toLocaleString('ru-RU')}${bonus ? `  +${bonus} с` : ''}`, 1.8, grade[1]);
    if (pts >= 400) audio.score();
    setTimeout(() => { if (W) { W.group.remove(z.mesh); z.mesh.geometry.dispose(); } }, 3000);
  }
}
function zoneHint(veh) {
  const z = G.zn.list[0];
  if (!z) return 'дрифт-зон больше нет';
  if (veh.idx >= z.i0) return `🔥 В ЗОНЕ: ${Math.floor(z.pts).toLocaleString('ru-RU')} · осталось ${Math.max(0, Math.round((z.i1 - veh.idx) * SP))} м`;
  return `до дрифт-зоны ${Math.round((z.i0 - veh.idx) * SP)} м`;
}

// ---------- драг: светофор, реакция, оценка переключений ----------
const SHIFT_OK = 0.86, SHIFT_LATE = 0.975;
function dragShift(veh) {
  if (!G.dg || state !== 'race' || !settings.manual || veh.gear <= 0 || veh.gear >= veh.spec.gears.length) return;
  const r = veh.rpm / veh.spec.redline;
  if (r >= SHIFT_OK && r < SHIFT_LATE) {
    G.dg.perfect++;
    veh.vx += Math.sin(veh.h) * 0.5; veh.vz += Math.cos(veh.h) * 0.5; // идеальное переключение — маленький «пинок»
    showMsg('ИДЕАЛЬНОЕ ПЕРЕКЛЮЧЕНИЕ!', 0.8, '#7cff4f'); audio.score();
  } else if (r < SHIFT_OK) { G.dg.early++; showMsg('РАНО', 0.6, '#ffcc00'); }
  else { G.dg.late++; showMsg('ПОЗДНО — ОТСЕЧКА', 0.6, '#ff6b6b'); }
}
function updateDrag(veh, inp) {
  const dg = G.dg;
  if (dg.react === null && inp.throttle > 0.5) { dg.react = G.elapsed; showMsg(`РЕАКЦИЯ ${dg.react.toFixed(3)} с`, 1.2, dg.react < 0.3 ? '#7cff4f' : '#ffcc00'); }
  if (!dg.t100 && veh.speed * 3.6 >= 100) dg.t100 = G.elapsed;
}

// ---------- король горы: машину тянет вниз по уклону ----------
function hillGravity(veh, slope, h) {
  const a = -9.81 * slope / Math.sqrt(1 + slope * slope) * STEP;
  veh.vx += Math.sin(h) * a; veh.vz += Math.cos(h) * a;
}

// ---------- тайм-атак: время за чекпоинт зависит от скорости ----------
function attackCheckpoint(kmhNow) {
  const at = G.at, seg = Math.max(0.5, G.elapsed - at.lastT), avg = CP_EVERY * SP / seg * 3.6;
  at.lastT = G.elapsed; at.splits.push(Math.round(G.elapsed * 1000) / 1000);
  const bonus = Math.round(clamp(5 + avg / 10, 5, 30) * 10) / 10;
  G.time += bonus;
  const k = at.splits.length - 1, ref = at.rec && at.rec[k];
  const split = ref ? `  ·  ${fmtDelta(G.elapsed - ref)}` : '';
  showMsg(`ЧЕКПОИНТ  +${bonus} с  ·  ${Math.round(avg)} км/ч${split}`, 2, ref && G.elapsed > ref ? '#ff9f1c' : '#7cff4f');
  return bonus;
}

// ======================= призрак и повтор =======================
const ghostKeyFor = (modeId, mapId, lenKm) => recKey(modeId, mapId, lenKm);
// полупрозрачная копия машины из записи (свои материалы, без контуров и света фар)
function buildGhostCar(g, opacity) {
  const spec = CARS.find((c) => c.id === g.car) || CARS[0];
  const model = buildCarModel(spec, g.color || spec.colors[0], { night: W.map.night, outline: opacity >= 1, look: g.look || {} });
  model._tailBase = W.map.night ? 1.2 : 0.35;
  if (opacity < 1) {
    const cache = new Map();
    model.root.traverse((o) => {
      if (o.isLight) { o.visible = false; return; }
      if (!o.isMesh || !o.material || o.material.isShaderMaterial) return;
      if (!cache.has(o.material)) { const m = o.material.clone(); m.transparent = true; m.opacity = opacity * (o.material.transparent ? o.material.opacity : 1); m.depthWrite = false; cache.set(o.material, m); }
      o.material = cache.get(o.material);
    });
    model.ghostMats = [...cache.values()];
  }
  W.group.add(model.root);
  return model;
}
function placePoseModel(model, pose, dt) {
  if (W.track) seatCar(model, pose.x, pose.z, pose.h, groundFn(model, pose.idx));
  else { model.root.position.set(pose.x, pose.roadY + 0.03, pose.z); model.root.rotation.set(-Math.atan(pose.slope || 0), pose.h, Math.atan(pose.roll || 0), 'YXZ'); }
  pose.wheelSpin = (pose.wheelSpin || 0) + (pose.speed || 0) * dt / 0.33;
  animateCar(model, pose, dt || 0.016, false);
}
function removeGhost() {
  if (!W || !W.ghost) return;
  W.group.remove(W.ghost.model.root); disposeModel(W.ghost.model); W.ghost = null;
}
function updateGhostCar(dt) {
  const gh = W.ghost; if (!gh) return;
  const pose = gh.pl.at(G.started ? G.elapsed : 0);
  placePoseModel(gh.model, pose, dt);
  // вблизи призрак почти прозрачный (не закрывает обзор), вдали — заметнее
  const { veh } = W.player;
  const d = Math.hypot(pose.x - veh.x, pose.z - veh.z);
  const op = clamp((d - 2) / 18, 0.12, 0.45);
  if (Math.abs(op - (gh.op ?? 0)) > 0.02) { gh.op = op; for (const m of gh.model.ghostMats || []) m.opacity = op; }
  gh.model.root.visible = !(pose.done && d > 60);
}
// разница с призраком по времени на той же дистанции: < 0 — ты впереди
function ghostDelta() {
  if (!W.ghost || !G || !G.started) return null;
  const tg = W.ghost.pl.timeAtDist(G.dist);
  return tg === null ? null : G.elapsed - tg;
}
const fmtDelta = (d) => `${d <= 0 ? '−' : '+'}${Math.abs(d).toFixed(2)} с`;

const finishIdxFor = (lenKm, modeId) => (lenKm > 0 ? 6 + Math.round((modeId === 'drag' ? DRAG_M[lenKm] || 402 : lenKm * 1000) / SP) : Infinity);
function startRace(opts = {}) {
  audio.init();
  if (!opts.online) ensureOwnedCar();
  const mode0 = curMode();
  if (!opts.online && mode0.drag && !settings.manual) { showScreen('setup'); return; }
  const lenKm = opts.len ?? (MAPS[sel.map].field ? 0 : modeLen(mode0, sel.len));
  const profile = mode0.drag ? 'drag' : mode0.hill ? 'hill' : '';
  // призрак лучшего заезда: едем по ТОЙ ЖЕ трассе (тот же seed), иначе сравнение нечестное
  const gKey = ghostKeyFor(curMode().id, MAPS[sel.map].id, MAPS[sel.map].field ? 0 : lenKm);
  const ghost = !opts.online && !MAPS[sel.map].field && settings.ghost && !opts.newTrack ? GH.loadGhost(gKey) : null;
  const seed = opts.seed ?? (ghost ? ghost.seed : (Math.random() * 1e6) | 0);
  buildWorld(sel.map, seed, { finishIdx: finishIdxFor(lenKm, mode0.id), fieldMode: opts.fieldMode, profile });
  newGame(lenKm);
  initModeState();
  G.online = !!opts.online;
  G.seed = seed; G.gKey = gKey;
  // запись заезда (для повтора и нового призрака); в онлайне и на полигоне не пишем
  G.rec = !G.online && !W.track.isField ? new GH.Recorder({ key: gKey, seed, map: W.map.id, mode: G.mode.id, len: G.lenKm, car: CARS[sel.car].id, color: carColor(CARS[sel.car]), look: PG.lookOf(CARS[sel.car]), at: Date.now() }) : null;
  if (ghost) { W.ghost = { pl: new GH.Player(ghost), model: buildGhostCar(ghost, 0.42), g: ghost }; }
  makeBackWall();
  // онлайн «с ботами»: свободные места занимают боты-призраки (у каждого игрока свои, на рейтинг не влияют)
  spawnRivals(G.online ? Math.min(opts.bots || 0, G.mode.rivals) : G.mode.rivals);
  if (opts.onStart) opts.onStart();
  cam.mode = +settings.camera;
  state = 'countdown';
  showScreen(null);
  $('hud').classList.remove('hidden');
  if (isTouch) $('touch').classList.remove('hidden');
  $('hud-mode').textContent = `${G.online ? 'Онлайн · ' : ''}${G.mode.name} · ${W.map.name}${G.finite ? ` · ${lenLabel(G.mode.id, G.lenKm)}` : ''}`;
  viewShift = { x: 0, y: 0 }; updateViewOffset();
  updateCamera(0.016, true);
  // заранее компилируем шейдеры всех объектов сцены, чтобы не было подвисаний в первые секунды заезда
  try { renderer.compile(scene, camera); } catch (e) { /* не критично */ }
}

// видимая стена позади игрока (Гонка и Дрифт). Видна только спереди — камере сзади машины не мешает
let backWallTex = null;
function makeBackWall() {
  if (W.track.isField) return;
  if (!backWallTex) {
    const c = document.createElement('canvas'); c.width = 512; c.height = 128;
    const g = c.getContext('2d');
    for (let x = -128; x < 640; x += 64) { g.fillStyle = (x / 64) % 2 ? '#f4f4f4' : '#d62828'; g.beginPath(); g.moveTo(x, 0); g.lineTo(x + 64, 0); g.lineTo(x + 128, 128); g.lineTo(x + 64, 128); g.fill(); }
    g.fillStyle = 'rgba(0,0,0,0.75)'; g.fillRect(96, 36, 320, 56);
    g.fillStyle = '#fff'; g.font = 'bold 40px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('НАЗАД НЕЛЬЗЯ', 256, 66);
    backWallTex = new THREE.CanvasTexture(c); backWallTex.colorSpace = THREE.SRGBColorSpace;
  }
  const w = W.track.wall * 2;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 4), new THREE.MeshBasicMaterial({ map: backWallTex, transparent: true, opacity: 0.9 }));
  W.group.add(mesh);
  W.backWall = mesh;
  updateBackWall();
}
function updateBackWall() {
  if (!W.backWall) return;
  let wi = G.maxIdx - BACK_WALL / SP;
  if (G.mode.id === 'escape') wi = G.wallIdx; // Побег: стена — та, что догоняет
  const p = W.track.sample(Math.max(W.track.base + 4, 3, wi));
  W.backWall.position.set(p.x, p.y + W.track.wall / 4, p.z);
  W.backWall.rotation.set(0, p.h, 0);
}

function showMsg(text, dur = 1.6, color = '#fff') {
  const m = $('hud-msg');
  m.textContent = text; m.style.color = color; m.classList.add('show');
  clearTimeout(showMsg._t); showMsg._t = setTimeout(() => m.classList.remove('show'), dur * 1000);
}

let lastCrash = 0;
function crashFx(impact) {
  // звук и тряска не чаще 3 раз в секунду (раньше звук создавался на каждом шаге физики — лагало)
  const now = performance.now();
  if (now - lastCrash < 330) return false;
  lastCrash = now;
  audio.crash(Math.min(impact, 25));
  cam.shake = impact > 8 ? Math.min(0.25, impact / 60) : 0;
  return true;
}
function onHit(impact) {
  if (G && G.mode.id === 'clean' && state === 'race' && impact > 2.5) G.crashed = true; // касание — конец заезда
  if (!crashFx(impact)) return;
  G.hits++;
  if (G.drift.active && G.drift.pts > 0 && impact > 3) {
    const el = $('drift-pts');
    el.textContent = Math.floor(G.drift.pts); el.className = 'drift-pts lost';
    $('drift-info').textContent = 'УДАР — серия сгорела';
    G.driftShowT = 1.3;
    G.drift = { active: false, pts: 0, mult: 1, time: 0, idle: 0, angle: 0 };
  }
}

function physicsStep(inp) {
  const { veh } = W.player;
  veh.px = veh.x; veh.pz = veh.z; veh.ph = veh.h; veh.pY = veh.roadY;
  const track = W.track;
  const easy = settings.handling === 'easy' || settings.handling === 'grip', normal = settings.handling === 'grip' && !(G && (G.mode.id === 'drift' || G.mode.id === 'field')); // в режиме «Дрифт» обычный режим не мешает дрифтить
  // помощь руля: везде / только в режиме «Дрифт» (и на полигоне) / выключена
  const am = settings.assistMode;
  const asOn = am === 'all' || (am === 'drift' && (G.mode.id === 'drift' || G.mode.id === 'field'));
  const sim = settings.handling === 'sim';
  const res = veh.step(STEP, inp, sim
    ? { grip: W.map.grip * 1.12, assist: 0, manual: settings.manual, easy: false, sim: true }
    : normal
    ? { grip: W.map.grip * 1.35, assist: 0, manual: settings.manual, easy: true, nodrift: true }
    : easy
    ? { grip: W.map.grip * 1.2, assist: asOn ? 1.15 : 0, manual: settings.manual, easy: true }
    : { grip: W.map.grip * 1.08, assist: asOn ? 0.45 : 0, manual: settings.manual, easy: false, real: true });
  if (res.shifted) { audio.shift(); if (res.shifted > 0 && inp.throttle > 0.5 && Math.random() < 0.35) audio.backfire(); }
  inp.shiftUp = inp.shiftDown = false;
  if (track.isField) { fieldStep(veh, track); return; }
  const pr = track.project(veh.x, veh.z, veh.idx);
  veh.idx = pr.idx; veh.lat = pr.lat; veh.roadY = pr.y; veh.slope = pr.slope;
  veh.offroad = Math.abs(pr.lat) > track.hw + 0.3 && Math.abs(pr.k) < 1 / 170;
  veh.trackH = pr.h;
  if (G && G.mode.hill && state === 'race') hillGravity(veh, pr.slope || 0, pr.h);
  // «стена позади»: во всех режимах на трассе (Гонка, Дрифт, Свободная езда) стена едет в 5 м позади
  // самой дальней точки, до которой доехал игрок, — назад ехать нельзя.
  // Онлайн: у каждого игрока стена своя (считается на его компьютере по его же машине) — лидер никого не «тянет»,
  // отставшие едут как обычно, а чужие машины-призраки сквозь стены проезжают.
  if (G) {
    if (state === 'race') G.maxIdx = Math.max(G.maxIdx, veh.idx);
    const back = BACK_WALL / SP;
    const limit = Math.max(track.base + 4, 3, G.maxIdx - back);
    if (veh.idx < limit) {
      const imp = veh.collideWall(Math.sin(pr.h), Math.cos(pr.h), (limit - veh.idx) * SP, 0.05);
      veh.idx = limit;
      if (imp > 4) onHit(imp);
    }
  }
  // стены: учитываем габарит машины поперёк трассы
  const b = veh.spec.body;
  const rel = veh.h - pr.h;
  const ext = Math.abs(Math.cos(rel)) * b.W / 2 + Math.abs(Math.sin(rel)) * b.L / 2;
  const limit = track.wall - 0.1 - ext;
  const s = Math.sign(pr.lat);
  // лёгкий режим: «мягкий отбойник» — у края дороги машину плавно отводит к центру
  // и доворачивает вдоль трассы, поэтому в ограждение почти не прилетаешь
  if (easy && veh.speed > 3) {
    const zone = limit - 2.2;
    const over = Math.abs(pr.lat) - zone;
    if (over > 0) {
      const k = clamp(over / 2.2, 0, 1);
      const vLat = veh.vx * pr.lx + veh.vz * pr.lz;            // скорость поперёк трассы (+ влево)
      if (vLat * s > 0) { const dv = vLat * Math.min(1, k * k * 9 * STEP); veh.vx -= pr.lx * dv; veh.vz -= pr.lz * dv; }
      const dh = angDiff(pr.h, veh.h);
      const fwd = Math.cos(dh) > 0 ? dh : angDiff(pr.h + Math.PI, veh.h);
      if (Math.abs(veh.beta) < 0.7) veh.r += fwd * k * 5 * STEP * Math.min(1, veh.speed / 15);
    }
  }
  if (Math.abs(pr.lat) > limit) {
    // удар мягкий: почти без отскока, скорость вдоль отбойника сохраняется
    const imp = veh.collideWall(-s * pr.lx, -s * pr.lz, Math.abs(pr.lat) - limit, easy ? 0.08 : 0.25);
    if (easy) { const dh = angDiff(pr.h, veh.h); const fwd = Math.cos(dh) > 0 ? dh : angDiff(pr.h + Math.PI, veh.h); veh.h += fwd * 0.08; veh.r *= 0.6; }
    if (imp > (easy ? 3.5 : 1.5) && G) onHit(imp);
  }
}

// физика на «Полигоне»: высота и наклон рельефа, гравитация на склонах, препятствия, берег
function fieldStep(veh, f) {
  veh.idx = 6; veh.lat = 0; veh.offroad = false;
  const sh = Math.sin(veh.h), ch = Math.cos(veh.h);
  veh.roadY = f.heightAt(veh.x, veh.z);
  const [gx, gz] = f.grad(veh.x, veh.z);
  veh.slope = gx * sh + gz * ch;          // уклон вперёд
  veh.roll = (gx * ch - gz * sh) * 0.8;  // крен
  // машина скатывается со склонов
  veh.vx -= 9.81 * gx * 0.85 * STEP; veh.vz -= 9.81 * gz * 0.85 * STEP;
  if (G) veh.odo = (veh.odo || 0) + veh.speed * STEP;
  const b = veh.spec.body;
  for (const o of f.collidersNear(veh.x, veh.z)) {
    const dx = veh.x - o.x, dz = veh.z - o.z, d = Math.hypot(dx, dz), R = o.r + b.W * 0.55;
    if (d < R && d > 1e-4) {
      const imp = veh.collideWall(dx / d, dz / d, R - d, 0.15);
      if (imp > 3 && G) onHit(imp);
    }
  }
  // пляж: у воды — мягкая граница
  if (f.f.shore !== undefined && veh.x < f.f.shore - 18) {
    const imp = veh.collideWall(1, 0, f.f.shore - 18 - veh.x, 0.1);
    if (imp > 4 && G) onHit(imp);
  }
}

function updateGhosts() {
  const { veh } = W.player;
  for (const r of W.rivals) setGhostOpacity(r, Math.hypot(r.x - veh.x, r.z - veh.z));
}
function collideRivals() {
  const { veh } = W.player;
  const pc = (x, z, h, k) => [x + Math.sin(h) * k, z + Math.cos(h) * k];
  for (const r of W.rivals) {
    const dx = r.x - veh.x, dz = r.z - veh.z;
    if (dx * dx + dz * dz > 36) continue;
    // каждая машина — два круга (перед и зад)
    let hit = null;
    for (const a of [1.15, -1.15]) for (const bb of [1.15, -1.15]) {
      const [ax, az] = pc(veh.x, veh.z, veh.h, a);
      const [bx, bz] = pc(r.x, r.z, r.h, bb);
      const ddx = bx - ax, ddz = bz - az, d = Math.hypot(ddx, ddz);
      const R = 1.0 + 1.0;
      if (d < R && d > 1e-4 && (!hit || R - d > hit.pen)) hit = { nx: ddx / d, nz: ddz / d, pen: R - d, ax, az, a };
    }
    if (!hit) continue;
    // раздвигаем
    veh.x -= hit.nx * hit.pen * 0.6; veh.z -= hit.nz * hit.pen * 0.6;
    const lx = r.pose.lx, lz = r.pose.lz;
    r.d += (hit.nx * lx + hit.nz * lz) * hit.pen * 0.4;
    // импульс
    const rvx = r.vx, rvz = r.vz;
    const vn = (veh.vx - rvx) * hit.nx + (veh.vz - rvz) * hit.nz;
    if (vn > 0) {
      const m1 = veh.m, m2 = r.spec.mass;
      const j = (1.3 * vn) / (1 / m1 + 1 / m2);
      veh.vx -= (j / m1) * hit.nx; veh.vz -= (j / m1) * hit.nz;
      const nvx = rvx + (j / m2) * hit.nx, nvz = rvz + (j / m2) * hit.nz;
      const fx = Math.sin(r.pose.h), fz = Math.cos(r.pose.h);
      r.v = Math.max(0, nvx * fx + nvz * fz);
      r.dv += nvx * lx + nvz * lz;
      r.bump = 0.8;
      // закрутка от удара в перед/зад
      const cross = hit.a * (Math.sin(veh.h) * hit.nz - Math.cos(veh.h) * hit.nx);
      veh.r += cross * j / veh.I * 0.6;
      if (vn > 2 && crashFx(vn * 1.5) && G) G.hits++;
    }
  }
}

function updateRace(dt) {
  const { veh, model } = W.player;
  const track = W.track;
  const evs = G._events || [];
  const racing = state === 'race';
  let inp = racing ? input.read(dt, veh.speed) : { throttle: 0, brake: 0, steer: 0, handbrake: 0 };
  if (state === 'over') inp = { throttle: 0, brake: 0.35, steer: 0, handbrake: 0, noReverse: true }; // после финиша плавно тормозим, без заднего хода
  if (state === 'countdown') {
    const raw = input.read(dt, 0);
    G.cd -= dt;
    const n = Math.ceil(G.cd - 0.6);
    if (n !== G.cdShown) {
      G.cdShown = n;
      $('countdown').textContent = G.mode.drag ? (n > 0 ? '🟡'.repeat(4 - n) : '🟢 GO!') : n > 0 ? n : 'СТАРТ!';
      audio.countdown(n <= 0);
    }
    // можно погазовать на старте
    veh.rpm += ((veh.spec.idle + raw.throttle * veh.spec.redline * 0.75) - veh.rpm) * Math.min(1, dt * 6);
    if (G.cd <= 0.6) { state = 'race'; G.started = true; setTimeout(() => { $('countdown').textContent = ''; }, 700); }
  } else {
    for (const e of evs) { if (e === 'shiftUp') { inp.shiftUp = true; dragShift(veh); } if (e === 'shiftDown') inp.shiftDown = true; }
    if (G.dg && state === 'race') updateDrag(veh, inp);
    G.acc += dt;
    let n = 0;
    while (G.acc >= STEP && n < 24) { G.acc -= STEP; physicsStep(inp); n++; }
    if (n === 24) G.acc = 0;
  }
  G.braking = inp.brake > 0.1 && veh.u > 0.5;
  if (state === 'race' && G.rec) G.rec.push(G.elapsed, veh, G.dist);
  updateGhostCar(dt);

  // соперники
  for (const r of W.rivals) if (!r.out) r.update(dt, track, { idx: veh.idx, lat: veh.lat, t: G.elapsed }, G.started);
  // соперники — «призраки»: сквозь них можно проезжать, столкновений нет
  updateGhosts();
  updateRemote(dt);
  updateBackWall();
  if (G.online && state !== 'countdown') net.sendState(veh);
  track.update(veh.idx);

  // респаун отставших соперников впереди + обгоны
  for (const r of W.rivals) {
    if (r.out) continue;
    if (G.finite) r.stopAt = G.finishIdx + 40;
    // финиш соперника фиксируем по порядку
    if (G.finite && r.finOrder === undefined && r.fi >= G.finishIdx) r.finOrder = ++G.rivalFin;
    const isAhead = r.fi > veh.idx;
    if (racing && r.ahead && !isAhead && isPlaceMode(G.mode)) {
      G.overtakes++; showMsg('ОБГОН!  +300', 1.2, '#7cff4f'); audio.score();
    }
    r.ahead = isAhead;
    if ((G.finite || G.mode.id === 'elim') && veh.idx - r.fi > 170) {
      // на трассе с финишем соперник, отставший больше чем на 340 м, сходит с дистанции (считается позади)
      r.out = true; r.model.root.visible = false;
      if (G.mode.id === 'elim' && state === 'race') { G.elimCount++; showMsg(`ВЫБЫЛ: ${r.name}`, 1.4, '#ff9f1c'); }
      continue;
    }
    if (veh.idx - r.fi > 170) {
      r.fi = veh.idx + 180 + Math.random() * 140;
      r.v = r.top * 0.6; r.d = (Math.random() * 2 - 1) * (track.hw - 2); r.targetD = r.d; r.ahead = true;
      track.ensure(Math.ceil(r.fi) + 80);
    }
  }

  placePlayerModel(dt);
  updateFx(dt, inp);

  if (state === 'race') updateScoring(dt, veh);
  audio.update(veh, veh.spec, state === 'countdown' ? Math.max(0, (veh.rpm - veh.spec.idle) / veh.spec.redline) : inp.throttle,
    // визг шин только в настоящем скольжении (занос/блокировка), а не от обычного поворота с газом
    Math.max(clamp((Math.abs(veh.beta) - 0.15) * 2.2, 0, 1), veh.lockR > 0.5 && veh.speed > 8 ? 0.6 : 0),
    veh.offroad, veh.speed, state !== 'paused');
  updateCamera(dt);
  updateHUD(dt);
}

function updateScoring(dt, veh) {
  G.elapsed += dt;
  const spd = veh.speed, kmh = spd * 3.6;
  G.maxSpeed = Math.max(G.maxSpeed, kmh);
  G.dist = W.track.isField ? veh.odo || 0 : Math.max(G.dist, W.track.P(veh.idx).s - G.startS);

  // --- дрифт ---
  const ang = Math.abs(veh.beta) * 57.3;
  const d = G.drift;
  const drifting = spd > 8.5 && ang > 11 && ang < 110 && veh.u > 2 && !veh.offroad;
  if (drifting) {
    d.active = true; d.idle = 0; d.time += dt;
    d.mult = Math.min(5, 1 + Math.floor(d.time / 2.5));
    d.pts += ang * spd * dt * 0.35 * d.mult;
    d.angle = ang;
  } else if (d.active) {
    d.idle += dt;
    if (d.idle > (veh.offroad ? 0.3 : 1.1)) {
      const pts = Math.floor(d.pts);
      if (pts > 30) {
        G.driftTotal += pts; G.bestDrift = Math.max(G.bestDrift, pts); G.driftCount = (G.driftCount || 0) + 1;
        if (G.mode.id === 'drift' && !G.finite) G.time += Math.min(8, pts / 1200);
        const el = $('drift-pts'); el.textContent = '+' + pts; el.className = 'drift-pts banked';
        $('drift-info').textContent = pts > 5000 ? 'ЛЕГЕНДАРНЫЙ ДРИФТ!' : pts > 2000 ? 'ОТЛИЧНЫЙ ДРИФТ!' : 'ДРИФТ ЗАСЧИТАН';
        G.driftShowT = 1.3;
        audio.score();
      }
      G.drift = { active: false, pts: 0, mult: 1, time: 0, idle: 0, angle: 0 };
    }
  }

  if (G.sl) updateSlalom(dt, veh);
  if (G.zn) updateZones(dt, veh);
  // --- финиш ---
  if (G.finite && veh.idx >= G.finishIdx) {
    // точное время пересечения линии внутри кадра (интерполяция), а не «кадр, в котором заметили» —
    // важно, когда игроки финишируют почти одновременно
    const li = G.lastIdx ?? veh.idx;
    if (veh.idx > li && li < G.finishIdx) G.elapsed -= dt * (1 - Math.min(1, Math.max(0, (G.finishIdx - li) / (veh.idx - li))));
    G.elapsed = Math.round(G.elapsed * 1000) / 1000;
    finishRace(true); return;
  }
  G.lastIdx = veh.idx;

  // --- чекпоинты ---
  if (veh.idx >= G.nextCp && veh.idx < G.finishIdx - 100) {
    G.cpCount++;
    G.nextCp += CP_EVERY;
    let cam = '';
    if (G.mode.id === 'speed') {
      // спидкамера: очки за скорость, выше 200 км/ч — x1.5
      const pts = Math.round(kmh * 10 * (kmh > 200 ? 1.5 : 1));
      G.speedPts += pts; G.cams++; G.bestCam = Math.max(G.bestCam, kmh);
      cam = `📸 ${speedStr(kmh)}  +${pts}  ·  `;
    }
    if (G.at) attackCheckpoint(kmh);
    else if (G.mode.timer && !G.finite) {
      const bonus = Math.round(G.mode.bonus(G.cpCount - 1));
      G.time += bonus;
      showMsg(`${cam}ЧЕКПОИНТ  +${bonus} с`, 1.8, '#ffcc00');
    } else showMsg(`${cam}ЧЕКПОИНТ ${G.cpCount}`, 1.5, '#ffcc00');
    audio.checkpoint();
  }

  // --- Без ошибок: касание отбойника ---
  if (G.crashed) { showMsg('КАСАНИЕ! ЗАЕЗД ОКОНЧЕН', 2.2, '#ff6b6b'); finishRace(false); return; }
  // --- Побег: стена позади всё время ускоряется ---
  if (G.mode.id === 'escape') {
    G.wallV = Math.min(95, 16 + G.elapsed * 0.42);           // м/с: от ~58 км/ч до ~340 км/ч
    G.wallIdx = Math.max(G.wallIdx + G.wallV * dt / SP, veh.idx - 400 / SP); // далеко не отстаёт
    if (G.wallIdx >= veh.idx - 2.2 / SP) { showMsg('СТЕНА ДОГНАЛА!', 2.2, '#ff6b6b'); finishRace(false); return; }
  }
  // --- Выбывание: каждые ELIM_INT секунд последний выбывает ---
  if (G.mode.id === 'elim') {
    G.elimT -= dt;
    const alive = W.rivals.filter((r) => !r.out);
    if (!alive.length) { G.elimWin = true; G.place = 1; finishRace(true); return; }
    if (G.elimT <= 0) {
      G.elimT = ELIM_INT;
      let worst = alive[0];
      for (const r of alive) if (r.fi < worst.fi) worst = r;
      if (veh.idx < worst.fi) { G.place = alive.length + 1; G.elimOut = true; showMsg('ТЫ ВЫБЫЛ!', 2.4, '#ff6b6b'); finishRace(false); return; }
      worst.out = true; worst.model.root.visible = false; G.elimCount++;
      showMsg(`ВЫБЫЛ: ${worst.name}`, 1.6, '#ff9f1c'); audio.score();
      if (alive.length === 1) { G.elimWin = true; G.place = 1; finishRace(true); return; }
    }
  }

  // --- счёт и время ---
  G.score = calcScore();
  if (G.mode.timer && !G.finite) {
    G.time -= dt;
    if (G.time <= 0) { G.time = 0; finishRace(); }
  }
  // место в гонке (против ботов или онлайн)
  if (isPlaceMode(G.mode) && W.rivals.length) G.place = 1 + W.rivals.filter((r) => !r.out && (r.finOrder !== undefined || r.fi > veh.idx)).length;
  if (G.mode.id === 'race' && G.online) {
    let ahead = 0;
    for (const p of net.players.values()) {
      if (!net.racers.includes(p.id)) continue;
      // для места берём самое свежее полученное положение, а не сглаженное (оно отстаёт на ~50 мс)
      const last = p.buf && p.buf.length ? p.buf[p.buf.length - 1].idx : (p.vis ? p.vis.idx : 0);
      if ((p.fin && p.fin.finished) || (!p.fin && last > veh.idx)) ahead++;
    }
    G.place = 1 + ahead;
  }
}

function calcScore() {
  const id = G.mode.id, d = Math.floor(G.dist);
  if (id === 'race') return d + G.overtakes * 300 + Math.floor(G.driftTotal / 4);
  if (id === 'drift' || id === 'field') return G.driftTotal;
  if (id === 'time') return d + Math.floor(G.driftTotal / 8);
  if (id === 'speed') return G.speedPts + Math.floor(d / 2);
  if (id === 'clean') return Math.floor((d + G.driftTotal / 4) * (1 + Math.floor(G.dist / 1000) * 0.1)); // +10% за каждый чистый км
  if (id === 'escape') return d + Math.floor(G.driftTotal / 10);
  if (id === 'drag') return d;
  if (id === 'zones') return G.zn ? G.zn.total : 0;
  if (id === 'slalom') return (G.sl ? G.sl.pts : 0) + Math.floor(d / 4);
  if (id === 'hill') return d + G.overtakes * 300 + Math.floor(G.driftTotal / 6);
  if (id === 'attack') return d + G.cpCount * 250;
  if (id === 'elim') return d + G.overtakes * 300 + G.elimCount * 1000 + (G.elimWin ? 5000 : 0);
  return d;
}

// ключ рекорда: режим + карта (+ длина трассы, если она задана)
const recKey = (modeId, mapId, lenKm) => `${modeId}_${mapId}${lenKm ? '_' + lenKm : ''}`;
// на трассе с финишем в Гонке и Свободной езде рекорд — лучшее время, в Дрифте — очки
const onlinePlace = (t) => 1 + net.results.filter((r) => r.finished && r.id !== net.id && r.time < t).length;
const byTime = (modeId, lenKm) => lenKm > 0 && ['race', 'free', 'time', 'clean', 'drag', 'hill', 'slalom'].includes(modeId);
function finishRace(finished = false) {
  if (state === 'over') return;
  if (G.drift.active && G.drift.pts > 30) { G.driftTotal += Math.floor(G.drift.pts); G.bestDrift = Math.max(G.bestDrift, Math.floor(G.drift.pts)); }
  G.score = calcScore();
  G.finished = finished;
  if (finished && G.dg) G.score = Math.round(100000 / Math.max(1, G.elapsed)) + G.dg.perfect * 500;
  if (finished && (G.mode.id === 'race' || G.mode.drag || G.mode.hill) && W.rivals.length && !G.elimWin) G.place = 1 + W.rivals.filter((r) => !r.out && r.finOrder !== undefined).length;
  // онлайн: место по точному времени финиша, а не по тому, чьё сообщение раньше дошло до сервера
  if (finished && G.mode.id === 'race' && G.online) G.place = onlinePlace(G.elapsed);
  // Дрифт на трассе с финишем: итог = очки дрифта + бонус за время (быстрее 60 км/ч в среднем) + онлайн бонус за место на финише
  if (G.mode.id === 'drift' && G.finite) {
    G.timeBonus = finished ? Math.max(0, Math.round((G.lenKm * 60 - G.elapsed) * 50)) : 0;
    G.finPlace = finished && G.online ? onlinePlace(G.elapsed) : 0;
    G.placeBonus = [0, 5000, 3000, 1500][G.finPlace] || 0;
    G.score = G.driftTotal + G.timeBonus + G.placeBonus;
  }
  state = 'over';
  audio.gameOver();
  const key = recKey(G.mode.id, W.map.id, G.lenKm);
  const old = records[key];
  const timeRec = byTime(G.mode.id, G.lenKm);
  const isRec = !G.online && (timeRec ? finished && (!old || !old.time || G.elapsed < old.time) : G.score > 0 && (!old || G.score > old.score));
  const entry = { score: G.score, time: finished ? G.elapsed : 0, dist: Math.floor(G.dist), drift: G.bestDrift, car: CARS[sel.car].name, date: new Date().toLocaleDateString('ru-RU'), ts: Date.now(), maxSpeed: Math.round(G.maxSpeed), ...(G.at ? { splits: G.at.splits } : {}) };
  if (isRec) records[key] = entry;
  // личный рекорд этой машины на этой карте/режиме/длине
  const carKey = key + '|' + CARS[sel.car].id, oldCar = records[carKey];
  const isCarRec = !G.online && (timeRec ? finished && (!oldCar || !oldCar.time || G.elapsed < oldCar.time) : G.score > 0 && (!oldCar || G.score > oldCar.score));
  if (isCarRec) records[carKey] = entry;
  if (isRec || isCarRec) store.set('records', records);
  // запись заезда: последний — для повтора, рекордный — новый призрак этой карты/режима/длины
  const gdFin = ghostDelta();
  G.lastRec = G.rec && G.rec.s.length ? G.rec.finish(G.elapsed, W.player.veh, G.dist, { time: finished ? G.elapsed : 0, score: G.score, dist: Math.floor(G.dist), finished }) : null;
  if (G.lastRec && isRec) G.ghostSaved = GH.saveGhost(G.gKey, G.lastRec);
  let title = G.mode.timer && !G.finite ? 'Время вышло!' : 'Заезд окончен';
  if (finished) title = G.place ? `ФИНИШ! ${G.place} место` : 'ФИНИШ!';
  if (G.elimWin) title = 'ПОБЕДА! Ты остался один';
  else if (G.elimOut) title = `Выбыл · ${G.place} место`;
  if (G.crashed) title = 'Касание — заезд окончен';
  if (G.mode.id === 'escape' && !finished) title = 'Стена догнала!';
  // награда: монеты и опыт (онлайн — x1.5), статистика профиля, достижения
  // онлайн-победы засчитывает сервер (сообщение rating), здесь — только заезды против ботов
  const win = !G.online && !!(G.elimWin || (finished && isPlaceMode(G.mode) && G.place === 1 && W.rivals.length));
  const rw = PG.finishRaceProgress(G, { isRecord: (isRec || isCarRec) && (G.dist >= 1000 || finished), carId: CARS[sel.car].id, mapId: W.map.id, win });
  G.reward = rw;
  $('over-title').textContent = title;
  $('over-record').classList.toggle('show', isRec);
  const rows = [];
  if (finished) rows.push(['Время', fmtTime(G.elapsed)]);
  if (G.place && !G.online) rows.push(['Место', `${G.place} из ${W.rivals.length + 1}`]);
  rows.push(['Очки', G.score.toLocaleString('ru-RU')], ['Дистанция', `${(G.dist / 1000).toFixed(2)} км`],
    ['Макс. скорость', speedStr(G.maxSpeed)], ['Лучший дрифт', G.bestDrift.toLocaleString('ru-RU')],
    ['Все очки дрифта', G.driftTotal.toLocaleString('ru-RU')], ['Чекпоинты', G.cpCount]);
  if (G.mode.id === 'race' && !G.online) rows.push(['Обгоны', G.overtakes]);
  if (G.mode.id === 'drift' && G.finite) { rows.push(['Бонус за время', '+' + G.timeBonus.toLocaleString('ru-RU')]); if (G.online) rows.push(['Бонус за место на финише', G.finPlace ? `${G.finPlace}-й · +${G.placeBonus.toLocaleString('ru-RU')}` : '—']); }
  if (G.mode.id === 'speed') rows.push(['Спидкамеры', `${G.cams} · лучшая ${speedStr(G.bestCam)} · ${G.speedPts.toLocaleString('ru-RU')} очк.`]);
  if (G.mode.id === 'elim') rows.push(['Выбыло соперников', G.elimCount]);
  if (G.dg) rows.push(['Реакция на старте', G.dg.react !== null ? `${G.dg.react.toFixed(3)} с` : '—'], ['0–100 км/ч', G.dg.t100 ? `${G.dg.t100.toFixed(2)} с` : '—'],
    ['Переключения', `идеальных ${G.dg.perfect} · ранних ${G.dg.early} · поздних ${G.dg.late}`]);
  if (G.sl) rows.push(['Ворота', `чисто ${G.sl.clean} · пропущено ${G.sl.miss} · сбито конусов ${G.sl.cones}`], ['Лучшая серия', `×${G.sl.bestCombo}`]);
  if (G.zn) rows.push(['Дрифт-зоны', `${G.zn.done} · идеальных ${G.zn.perfect} · лучшая ${G.zn.best.toLocaleString('ru-RU')}`]);
  if (G.at) rows.push(['Чекпоинты (тайм-атак)', G.at.splits.length]);
  if (G.mode.id === 'escape') rows.push(['Скорость стены', speedStr(G.wallV * 3.6)]);
  rows.push(['Удары', G.hits]);
  if (W.ghost && gdFin !== null) rows.push(['👻 Против призрака', gdFin <= 0 ? `<span class="rw">быстрее на ${Math.abs(gdFin).toFixed(2)} с</span>` : `медленнее на ${gdFin.toFixed(2)} с`]);
  if (G.ghostSaved) rows.push(['👻 Призрак', 'этот заезд — новый призрак рекорда']);
  const fmtN = (n) => n.toLocaleString('ru-RU');
  rows.push(['Награда', `<span class="rw">+${fmtN(rw.coins)} 💰 · +${fmtN(rw.xp)} XP</span>`]);
  for (const [n, c, x] of rw.lines) rows.push([`<small>${n}</small>`, `<small>+${fmtN(c)} 💰 · +${fmtN(x)} XP</small>`]);
  if (rw.levelUp) rows.push(['🎉 Новый уровень', `${rw.level}! +${fmtN(rw.lvBonus)} 💰`]);
  if (rw.newCars.length) rows.push(['🔓 Открыты машины', rw.newCars.map((c) => c.name).join(', ')]);
  for (const a of rw.ach) rows.push([`🏅 ${a.name}`, `+${fmtN(a.coins)} 💰 · +${fmtN(a.xp)} XP`]);
  if (rw.ach.length) setTimeout(() => showMsg(`🏅 ДОСТИЖЕНИЕ: ${rw.ach[0].name}`, 2.5, '#ffcc00'), 400);
  cloudSync();
  if (!finished) rows.push(['Время в заезде', fmtTime(G.elapsed)]);
  if (old && !isRec) rows.push(['Рекорд', timeRec ? (old.time ? fmtTime(old.time) : '—') : old.score.toLocaleString('ru-RU')]);
  $('over-stats').innerHTML = rows.map(([a, b]) => `<span>${a}</span><b>${b}</b>`).join('');
  if (G.online) net.finish(finished, G.elapsed, G.score);
  renderOnlineResults();
  $('touch').classList.add('hidden');
  $('btn-replay').classList.toggle('hidden', !G.lastRec);
  setTimeout(() => { if (state === 'over') showScreen('over'); }, 900);
  cam.mode = 3; cam.cineT = 0;
}

const speedStr = (kmh) => settings.units === 'mph' ? `${Math.round(kmh / 1.609)} mph` : `${Math.round(kmh)} км/ч`;

// ======================= эффекты =======================
function updateFx(dt, inp) {
  const { veh } = W.player;
  const b = veh.spec.body;
  const spd = veh.speed;
  const sh = Math.sin(veh.h), ch = Math.cos(veh.h);
  const lx = ch, lz = -sh;
  const slip = Math.max(veh.rearSlide * (Math.abs(veh.beta) > 0.1 || veh.lockR > 0 ? 1 : 0.4), veh.spinR);
  const wheelPos = (zl, xl) => [veh.x + sh * zl + lx * xl, veh.z + ch * zl + lz * xl];
  const q = +settings.quality;
  for (const side of [1, -1]) {
    const [x, z] = wheelPos(b.wheelR, side * b.track / 2);
    // дым только в настоящем заносе (большой угол), а не от простого газа в повороте
    if (settings.smoke && slip > 0.55 && spd > 8 && !veh.offroad && Math.abs(veh.beta) > 0.35) {
      if (Math.random() < (q > 0 ? 2 : 1) * dt * Math.min(1, (Math.abs(veh.beta) - 0.3) * 3)) W.smoke.emit(x, veh.roadY, z, veh.vx, veh.vz, slip, W.map.night ? 0.1 : 0.15);
    }
    if (settings.smoke && veh.offroad && spd > 4 && Math.random() < 5 * dt) W.dust.emit(x, veh.roadY, z, veh.vx, veh.vz, 1, 0.55);
    const fld = W.track.isField;
    W.skids.add(side > 0 ? 0 : 1, x, fld ? W.track.heightAt(x, z) : veh.roadY, z, lx, lz, !veh.offroad && slip > 0.42 ? Math.min(1, (slip - 0.3) * 1.6) : 0);
    const [fx, fz] = wheelPos(b.wheelF, side * b.track / 2);
    W.skids.add(side > 0 ? 2 : 3, fx, fld ? W.track.heightAt(fx, fz) : veh.roadY, fz, lx, lz, !veh.offroad && (veh.frontSlide > 0.85 || (inp.brake > 0.5 && spd > 15 && veh.u > 0 && veh.lockR > 0)) ? 0.6 : 0);
  }
  // соперники тоже дымят в поворотах
  for (const r of W.rivals) {
  }
  W.smoke.update(dt); W.dust.update(dt);
  if (W.snow) W.snow.update(dt, camera);
  // свет и небо следуют за игроком
  const d = W.sunDir;
  W.sun.position.set(veh.x + d.x * 90, veh.roadY + d.y * 90, veh.z + d.z * 90);
  W.sun.target.position.set(veh.x, veh.roadY, veh.z);
  W.sky.position.copy(camera.position);
  W.farPlane.position.set(veh.x, veh.roadY - 14, veh.z);
}

// ======================= HUD =======================
const gctx = $('gauge').getContext('2d');
const mctx = $('minimap').getContext('2d');
const hudCache = {};
function setText(id, t) { if (hudCache[id] !== t) { hudCache[id] = t; $(id).textContent = t; } }

function drawGauge(veh) {
  const c = gctx, W2 = 220, cx = 110, cy = 118, R = 92;
  c.clearRect(0, 0, W2, W2);
  const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
  c.lineCap = 'round';
  c.beginPath(); c.arc(cx, cy, R, a0, a1); c.strokeStyle = 'rgba(0,0,0,0.45)'; c.lineWidth = 16; c.stroke();
  // обороты
  const rf = clamp(veh.rpm / veh.spec.redline, 0, 1);
  c.beginPath(); c.arc(cx, cy, R, a0, a0 + (a1 - a0) * rf);
  c.strokeStyle = rf > 0.95 ? '#ff3b3b' : rf > 0.85 ? '#ffb300' : '#ffcc00'; c.lineWidth = 10; c.stroke();
  // отметки
  for (let i = 0; i <= 10; i++) {
    const a = a0 + (a1 - a0) * i / 10;
    c.beginPath(); c.moveTo(cx + Math.cos(a) * (R - 16), cy + Math.sin(a) * (R - 16)); c.lineTo(cx + Math.cos(a) * (R - 24), cy + Math.sin(a) * (R - 24));
    c.strokeStyle = i >= 9 ? '#ff5050' : 'rgba(255,255,255,0.7)'; c.lineWidth = 2; c.stroke();
  }
  const kmh = veh.kmh;
  const spd = settings.units === 'mph' ? kmh / 1.609 : kmh;
  c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.font = 'italic 900 50px Segoe UI, Arial'; c.fillText(Math.round(spd), cx, cy - 4);
  c.font = '600 13px Segoe UI, Arial'; c.fillStyle = 'rgba(255,255,255,0.75)'; c.fillText(settings.units === 'mph' ? 'MPH' : 'КМ/Ч', cx, cy + 26);
  c.font = '900 26px Segoe UI, Arial'; c.fillStyle = '#ffcc00';
  c.fillText(veh.gear === -1 ? 'R' : (veh.speed < 0.5 && veh.gear === 1 ? 'N' : String(veh.gear)), cx, cy + 58);
}

function drawMinimap(veh) {
  const c = mctx, S = 170, cx = 85, cy = 112;
  c.clearRect(0, 0, S, S);
  c.save();
  c.beginPath(); c.arc(85, 85, 84, 0, Math.PI * 2); c.clip();
  const scale = 0.2;
  const sh = Math.sin(veh.h), ch = Math.cos(veh.h);
  const toMap = (x, z) => {
    const dx = x - veh.x, dz = z - veh.z;
    const f = dx * sh + dz * ch, l = dx * ch - dz * sh;
    return [cx - l * scale, cy - f * scale];
  };
  const tr = W.track;
  if (tr.isField) {
    // сетка поля и препятствия рядом
    c.strokeStyle = 'rgba(255,255,255,0.18)'; c.lineWidth = 1;
    const g0x = Math.floor((veh.x - 450) / 32) * 32, g0z = Math.floor((veh.z - 450) / 32) * 32;
    for (let k = 0; k < 30; k++) {
      let [x1, y1] = toMap(g0x + k * 32, veh.z - 450), [x2, y2] = toMap(g0x + k * 32, veh.z + 450);
      c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
      [x1, y1] = toMap(veh.x - 450, g0z + k * 32); [x2, y2] = toMap(veh.x + 450, g0z + k * 32);
      c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
    }
    c.fillStyle = 'rgba(255,255,255,0.8)';
    for (const o of tr.collidersNear(veh.x, veh.z)) { const [x, y] = toMap(o.x, o.z); c.beginPath(); c.arc(x, y, 2.5, 0, Math.PI * 2); c.fill(); }
    if (tr.f.shore !== undefined) { const [x1, y1] = toMap(tr.f.shore - 18, veh.z - 600), [x2, y2] = toMap(tr.f.shore - 18, veh.z + 600); c.strokeStyle = '#4bb8ff'; c.lineWidth = 4; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); }
    c.restore();
    c.fillStyle = '#4bd2ff';
    c.beginPath(); c.moveTo(cx, cy - 8); c.lineTo(cx - 6, cy + 6); c.lineTo(cx + 6, cy + 6); c.closePath(); c.fill();
    return;
  }
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath();
  for (let i = Math.max(tr.base, Math.floor(veh.idx) - 60); i < Math.min(tr.lastIdx, veh.idx + 320); i += 3) {
    const p = tr.P(i); const [x, y] = toMap(p.x, p.z);
    if (i === Math.max(tr.base, Math.floor(veh.idx) - 60)) c.moveTo(x, y); else c.lineTo(x, y);
  }
  c.strokeStyle = 'rgba(255,255,255,0.85)'; c.lineWidth = 6; c.stroke();
  // чекпоинт
  if (G && G.nextCp < tr.lastIdx && G.nextCp < G.finishIdx - 100) {
    const p = tr.P(G.nextCp); const [x, y] = toMap(p.x, p.z);
    c.fillStyle = '#ffcc00'; c.beginPath(); c.arc(x, y, 5, 0, Math.PI * 2); c.fill();
  }
  if (G && G.finishIdx <= tr.lastIdx && G.finishIdx >= tr.base) {
    const p = tr.P(G.finishIdx); const [x, y] = toMap(p.x, p.z);
    c.fillStyle = '#fff'; c.fillRect(x - 6, y - 6, 12, 12); c.fillStyle = '#111'; c.fillRect(x - 6, y - 6, 6, 6); c.fillRect(x, y, 6, 6);
  }
  for (const p of net.players.values()) {
    if (!p.vis) continue;
    const [x, y] = toMap(p.vis.x, p.vis.z);
    c.fillStyle = '#7cff4f'; c.beginPath(); c.arc(x, y, 4.5, 0, Math.PI * 2); c.fill();
  }
  for (const r of W.rivals) {
    if (r.out) continue;
    const [x, y] = toMap(r.x, r.z);
    c.fillStyle = '#ff4b4b'; c.beginPath(); c.arc(x, y, 4, 0, Math.PI * 2); c.fill();
  }
  c.restore();
  c.fillStyle = '#4bd2ff';
  c.beginPath(); c.moveTo(cx, cy - 8); c.lineTo(cx - 6, cy + 6); c.lineTo(cx + 6, cy + 6); c.closePath(); c.fill();
}

function updateHUD(dt) {
  const { veh } = W.player;
  drawGauge(veh);
  drawMinimap(veh);
  if (!G) return;
  if (G.mode.timer && !G.finite) {
    setText('hud-timer', fmtTime(G.time));
    $('hud-timer').classList.toggle('warn', G.time < 10);
  } else { setText('hud-timer', fmtTime(G.elapsed)); $('hud-timer').classList.remove('warn'); }
  const toCp = Math.max(0, (G.nextCp - veh.idx) * SP);
  const toFin = Math.max(0, (G.finishIdx - veh.idx) * SP);
  let next = W.track.isField ? 'свободная езда · дрифт' : `до чекпоинта ${Math.round(toCp)} м`;
  if (G.finite) next = `до финиша ${toFin >= 1000 ? (toFin / 1000).toFixed(2) + ' км' : Math.round(toFin) + ' м'}`;
  if (G.mode.id === 'elim') next = `выбывание через ${Math.max(0, Math.ceil(G.elimT))} с · осталось ${W.rivals.filter((r) => !r.out).length + 1}`;
  if (G.mode.id === 'escape') next = `стена в ${Math.max(0, Math.round((veh.idx - G.wallIdx) * SP))} м · ${speedStr(G.wallV * 3.6)}`;
  if (G.zn) next = zoneHint(veh) + (G.finite ? ` · до финиша ${Math.round(toFin)} м` : '');
  if (G.sl) next = `${G.finite ? `до финиша ${toFin >= 1000 ? (toFin / 1000).toFixed(2) + ' км' : Math.round(toFin) + ' м'} · ` : ''}серия ×${G.sl.combo} · ворот ${G.sl.clean}`;
  if (G.mode.drag) next = `до финиша ${Math.round(toFin)} м`;
  if (G.mode.id === 'clean') next += ` · множитель x${(1 + Math.floor(G.dist / 1000) * 0.1).toFixed(1)}`;
  setText('hud-next', next);
  setText('hud-score', G.score.toLocaleString('ru-RU'));
  // драг: лампа переключения передач
  const sh = $('hud-shift');
  if (G.mode.drag && state === 'race') {
    const r = veh.rpm / veh.spec.redline, top = veh.gear >= veh.spec.gears.length;
    sh.className = 'hud-shift' + (top ? '' : r >= SHIFT_LATE ? ' late' : r >= SHIFT_OK ? ' ok' : '');
    setText('hud-shift', top ? 'высшая передача' : r >= SHIFT_LATE ? 'ОТСЕЧКА!' : r >= SHIFT_OK ? '▲ ПЕРЕКЛЮЧАЙ (E)' : `передача ${veh.gear}`);
  } else sh.className = 'hud-shift hidden';
  const total = (G.online ? net.players.size : W.rivals.length) + 1;
  const placeStr = G.place && isPlaceMode(G.mode) ? ` · место ${G.place}/${total}` : '';
  setText('hud-dist', `${G.mode.drag ? `${Math.round(G.dist)} м из ${DRAG_M[G.lenKm]}` : `${(G.dist / 1000).toFixed(2)} км${G.finite ? ` из ${G.lenKm}` : ''}`}${isPlaceMode(G.mode) && !G.online ? ` · обгонов: ${G.overtakes}` : ''}${placeStr}`);
  const rec = records[recKey(G.mode.id, W.map.id, G.lenKm)];
  const timeRec = byTime(G.mode.id, G.lenKm);
  const gd = ghostDelta(), gEl = $('hud-ghost');
  gEl.classList.toggle('hidden', !W.ghost);
  if (W.ghost) { setText('hud-ghost', gd === null ? (G.started ? '👻 призрак позади' : '👻 призрак рекорда') : `👻 ${fmtDelta(gd)}`); gEl.classList.toggle('ahead', gd !== null && gd <= 0); gEl.classList.toggle('behind', gd !== null && gd > 0); }
  setText('hud-sub', rec ? (timeRec ? `рекорд: ${rec.time ? fmtTime(rec.time) : '—'}` : `рекорд: ${rec.score.toLocaleString('ru-RU')}`) : 'рекорда пока нет');
  // дрифт
  const dEl = $('hud-drift');
  if (G.drift.active && G.drift.pts > 5) {
    dEl.classList.add('show');
    const el = $('drift-pts'); el.className = 'drift-pts'; el.textContent = Math.floor(G.drift.pts).toLocaleString('ru-RU');
    $('drift-info').textContent = `x${G.drift.mult}  ·  угол ${Math.round(G.drift.angle)}°`;
  } else if (G.driftShowT > 0) {
    G.driftShowT -= dt; dEl.classList.add('show');
  } else dEl.classList.remove('show');
}

// ======================= меню =======================
const SCREENS = ['main', 'setup', 'garage', 'tune', 'profile', 'ach', 'leader', 'records', 'settings', 'controls', 'pause', 'over', 'online', 'lobby'];
const MENU_SCREENS = ['main', 'setup', 'garage', 'tune', 'profile', 'ach', 'leader', 'records', 'settings', 'controls', 'online', 'lobby'];
function showScreen(name) {
  // из гаража уходим только на своей машине (в лобби — можно на «прокатной», если её требует хост)
  if (['main', 'setup', 'online', 'records', 'settings', 'controls', 'profile', 'ach', 'leader'].includes(name)) ensureOwnedCar();
  renderWallet();
  if (insp.on && name !== 'garage' && name !== 'tune') setInspect(false);
  menuScreen = name; // до отрисовки: renderGarage смотрит на текущий экран (иначе пропадала кнопка «Тюнинг»)
  for (const s of SCREENS) $('menu-' + s).classList.toggle('show', s === name);
  $('loading').classList.remove('show');
  if (MENU_SCREENS.includes(name)) {
    if (state !== 'menu') enterMenuWorld();
    state = 'menu';
    $('hud').classList.add('hidden'); $('touch').classList.add('hidden');
    viewShift = name === 'setup' ? { x: 0, y: 0.18 } : name === 'lobby' || name === 'online' ? { x: innerWidth > 800 ? -0.16 : 0, y: innerWidth > 800 ? 0 : 0.2 } : { x: innerWidth > 800 ? 0.16 : 0, y: innerWidth > 800 ? 0 : 0.2 };
    updateViewOffset(); camera.updateProjectionMatrix();
  }
  if (name === 'setup') renderSetup();
  $('garage-info').classList.toggle('hidden', name !== 'garage' && name !== 'tune');
  if (name === 'garage') { renderGarageGrid(); renderGarage(); }
  if (name === 'tune') { renderTune(); renderGarage(); }
  if (name === 'profile') { renderProfile(); loadRemoteProfile(); }
  if (name === 'ach') renderAch();
  if (name === 'leader') renderLeader();
  if (name === 'main') setTimeout(showDaily, 300);
  if (name === 'records') renderRecords();
  if (name === 'settings') renderSettings();
  if (name === 'online') renderOnline();
  if (name === 'lobby') renderLobby();
  // в онлайне на экране паузы и итогов другие кнопки
  const on = !!(G && G.online);
  $('btn-restart').classList.toggle('hidden', on); $('btn-again').classList.toggle('hidden', on);
  $('btn-tomenu').textContent = on ? 'Выйти в лобби' : 'В главное меню';
  $('btn-over-menu').textContent = on ? 'В лобби' : 'В меню';
  menuScreen = name;
}
let menuScreen = 'main';

function enterMenuWorld() {
  G = null;
  $('countdown').textContent = '';
  buildWorld(sel.map, 7);
}

document.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => { audio.init(); audio.click(); showScreen(b.dataset.go); }));

function renderSetup() {
  if (!PG.mapUnlocked(sel.map)) { sel.map = 0; saveSel(); buildWorld(sel.map, 7); }
  const fieldSel = !!MAPS[sel.map].field;
  $('mode-cards').innerHTML = (fieldSel ? `<div class="card sel"><b>Полигон</b><small>На полигоне нет трассы: свободная езда без таймера, очки за дрифт.</small></div>` : '') + MODES.map((m, i) => `<div class="card ${i === sel.mode && !fieldSel ? 'sel' : ''}" ${fieldSel ? 'style="opacity:.4"' : ''} data-mode="${i}"><b>${m.name}</b><small>${m.desc}</small></div>`).join('');
  $('map-cards').innerHTML = MAPS.map((m, i) => {
    const len = m.field ? 0 : modeLen(MODES[sel.mode], sel.len);
    const mid = m.field ? 'field' : MODES[sel.mode].id;
    const rec = records[recKey(mid, m.id, len)];
    const recTxt = rec ? (byTime(mid, len) ? (rec.time ? fmtTime(rec.time) : '') : rec.score.toLocaleString('ru-RU')) : '';
    if (!PG.mapUnlocked(i)) return `<div class="card locked"><span class="tag">${m.tag}</span><b>🔒 ${m.name}</b><small>Откроется на ${PG.mapUnlockLevel(i)} уровне</small></div>`;
    return `<div class="card ${i === sel.map ? 'sel' : ''}" data-map="${i}"><span class="tag">${m.tag}</span><b>${m.name}</b><small>${m.desc}</small>${recTxt ? `<span class="rec">рекорд: ${recTxt}</span>` : ''}</div>`;
  }).join('');
  renderSetupOpts(fieldSel);
  $('setup-car-name').textContent = CARS[sel.car].name;
  renderSetupGhost(fieldSel);
  document.querySelectorAll('[data-mode]').forEach((el) => el.addEventListener('click', () => { sel.mode = +el.dataset.mode; saveSel(); audio.click(); renderSetup(); }));
  document.querySelectorAll('[data-map]').forEach((el) => el.addEventListener('click', () => {
    const m = +el.dataset.map; audio.click();
    if (m !== sel.map) { sel.map = m; saveSel(); buildWorld(sel.map, 7); }
    renderSetup();
  }));
}
// призрак рекорда для выбранных режима/карты/длины: повтор, заезд по новой трассе, удаление
function renderSetupGhost(fieldSel) {
  const box = $('setup-ghost');
  if (fieldSel) { box.innerHTML = ''; return; }
  const key = ghostKeyFor(MODES[sel.mode].id, MAPS[sel.map].id, modeLen(MODES[sel.mode], sel.len));
  const g = GH.hasGhost(key) ? GH.loadGhost(key) : null;
  if (!g) { box.innerHTML = '<span>👻 Поставь рекорд здесь — появится призрак твоего лучшего заезда.</span>'; return; }
  const res = g.finished && g.time && byTime(g.mode, g.len) ? fmtTime(g.time) : `${(g.score || 0).toLocaleString('ru-RU')} очк.`;
  const car = (CARS.find((c) => c.id === g.car) || { name: g.car }).name;
  box.innerHTML = `<span>👻 Призрак рекорда: <b>${res}</b> · ${escapeHtml(car)}${settings.ghost ? ' — заезд по той же трассе' : ' (выключен в настройках)'}</span>
    <button class="btn small" id="sg-replay">🎬 Повтор</button>
    ${settings.ghost ? '<button class="btn small" id="sg-new">🔀 Новая трасса без призрака</button>' : ''}
    <button class="btn small" id="sg-del">🗑</button>`;
  $('sg-replay').addEventListener('click', () => { audio.click(); startReplay(g, 'setup'); });
  if ($('sg-new')) $('sg-new').addEventListener('click', () => { audio.click(); startRace({ newTrack: true }); });
  $('sg-del').addEventListener('click', () => { audio.click(); if (confirm('Удалить призрака этого рекорда?')) { GH.deleteGhost(key); renderSetupGhost(false); } });
}
// длина трассы (для трасс) или вид полигона (для полигонов)
function renderSetupOpts(fieldSel) {
  const box = $('setup-opts');
  if (fieldSel) {
    $('opts-title').textContent = 'Полигон';
    const FM = [['obst', 'С препятствиями', 'Шины, конусы, блоки, деревья, камни — объезжай и дрифтуй вокруг.'],
      ['clean', 'Чистое поле', 'Все объекты убраны — только поле с холмами.'],
      ['flat', 'Чистое и ровное', 'Без объектов и без холмов — идеально ровная площадка для тренировки.']];
    box.innerHTML = `<div class="cards">${FM.map(([id, n, d]) => `<div class="card ${sel.fieldMode === id ? 'sel' : ''}" data-fm="${id}"><b>${n}</b><small>${d}</small></div>`).join('')}</div>`;
    box.querySelectorAll('[data-fm]').forEach((el) => el.addEventListener('click', () => {
      if (sel.fieldMode === el.dataset.fm) return;
      sel.fieldMode = el.dataset.fm; saveSel(); audio.click(); buildWorld(sel.map, 7); renderSetup();
    }));
  } else if (MODES[sel.mode].drag) {
    // драг: дистанция и обязательная ручная коробка
    $('opts-title').textContent = 'Дистанция драга';
    const cur = DRAG_M[sel.dragLen] ? sel.dragLen : 1;
    box.innerHTML = `<div class="row wrap">${Object.entries(DRAG_M).map(([k, m]) => `<button class="btn small ${+k === cur ? 'accent' : ''}" data-drag="${k}">${m} м${+k === 1 ? ' (¼ мили)' : +k === 2 ? ' (½ мили)' : ' (миля)'}</button>`).join('')}</div>
      <small class="len-hint">Прямая один на один. Старт по светофору: жми газ на 🟢. Переключай передачи сам (E / ▲), когда лампа станет зелёной.</small>
      ${settings.manual ? '<small class="len-hint">✓ Ручная коробка включена.</small>' : '<div class="drag-need">🔒 Драг доступен только с <b>ручной коробкой передач</b>. <button class="btn small accent" id="drag-manual">Включить ручную коробку</button></div>'}`;
    box.querySelectorAll('[data-drag]').forEach((b) => b.addEventListener('click', () => { audio.click(); sel.dragLen = +b.dataset.drag; saveSel(); renderSetup(); }));
    if ($('drag-manual')) $('drag-manual').addEventListener('click', () => { audio.click(); settings.manual = true; saveSettings(); applyManualClass(); renderSetup(); });
  } else if (MODES[sel.mode].id === 'attack') {
    $('opts-title').textContent = 'Длина трассы';
    box.innerHTML = '<small class="len-hint">Тайм-атак идёт на бесконечной трассе: держись, пока хватает времени. Чем быстрее едешь между чекпоинтами, тем больше секунд получаешь.</small>';
  } else {
    $('opts-title').textContent = 'Длина трассы';
    const inf = !sel.len;
    const v = sel.len || 10;
    box.innerHTML = `<div class="len-row">
      <input type="range" id="len-range" min="${LEN_MIN}" max="${LEN_MAX}" step="1" value="${v}" ${inf ? 'class="off"' : ''} />
      <div class="len-val" id="len-val">${inf ? '∞' : v + ' км'}</div>
      <button class="btn small ${inf ? 'accent' : ''}" id="len-inf">∞ Бесконечная</button>
    </div>
    ${MODES[sel.mode].hill && inf ? '<small class="len-hint">⛰ Король горы всегда с финишем: при «бесконечной» длине спуск будет 5 км.</small>' : ''}
    <small class="len-hint">${inf ? 'Бесконечная трасса: едешь, пока не выйдет время (в Гонке и Дрифте) или сколько хочешь (Свободная езда).' : 'В конце трассы — финиш. Таймер считает время заезда, в Гонке важно место среди соперников.'}</small>`;
    const rng = $('len-range');
    rng.addEventListener('input', () => { sel.len = +rng.value; $('len-val').textContent = sel.len + ' км'; rng.classList.remove('off'); $('len-inf').classList.remove('accent'); });
    rng.addEventListener('change', () => { saveSel(); renderSetup(); });
    $('len-inf').addEventListener('click', () => { audio.click(); sel.len = sel.len ? 0 : +rng.value; saveSel(); renderSetup(); });
  }
}
$('btn-start').addEventListener('click', () => { audio.click(); startRace(); });

// ---------- гараж: сетка машин с картинками (модели рендерятся в маленькие превью один раз) ----------
const thumbs = {}; // `${id}:${color}` -> dataURL
let thumbR = null, thumbScene = null, thumbCam = null, thumbQueue = [], thumbBusy = false, thumbIdle = 0;
function thumbKey(spec) { return `${spec.id}:${sel.colors[spec.id] ?? 0}:${JSON.stringify(PG.lookOf(spec))}`; }
function renderThumb(spec) {
  if (!thumbR) {
    const cv = document.createElement('canvas'); cv.width = 320; cv.height = 180;
    thumbR = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true, preserveDrawingBuffer: true });
    thumbR.outputColorSpace = THREE.SRGBColorSpace; thumbR.toneMapping = THREE.ACESFilmicToneMapping;
    thumbR.setPixelRatio(1); thumbR.setSize(320, 180, false); thumbR.setClearColor(0x000000, 0);
    thumbScene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(thumbR);
    thumbScene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose();
    thumbScene.add(new THREE.HemisphereLight(0xffffff, 0x445566, 1.6));
    const sun = new THREE.DirectionalLight(0xffffff, 2.2); sun.position.set(-4, 8, 6); thumbScene.add(sun);
    thumbCam = new THREE.PerspectiveCamera(26, 16 / 9, 0.1, 100);
  }
  const model = buildCarModel(spec, carColor(spec), { outline: true, look: PG.lookOf(spec) });
  thumbScene.add(model.root);
  const box = new THREE.Box3().setFromObject(model.root);
  const size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
  const dist = Math.max(size.z * 0.95, size.x * 1.6, size.y * 2.2) / Math.tan(THREE.MathUtils.degToRad(13)) * 0.36;
  const dir = new THREE.Vector3(-0.62, 0.36, 0.7).normalize();
  thumbCam.position.copy(ctr).addScaledVector(dir, dist);
  thumbCam.lookAt(ctr.x, ctr.y - size.y * 0.05, ctr.z);
  thumbR.render(thumbScene, thumbCam);
  const url = thumbR.domElement.toDataURL('image/png');
  thumbScene.remove(model.root);
  model.root.traverse((o) => { if (o.geometry && !o.userData.sharedGeo) o.geometry.dispose(); });
  return url;
}
// превью строятся по одному за кадр, чтобы меню не подвисало
function pumpThumbs() {
  if (thumbBusy) return;
  thumbBusy = true;
  const step = () => {
    const spec = thumbQueue.shift();
    if (!spec) {
      thumbBusy = false;
      // контекст превью больше не нужен — освобождаем видеопамять через пару секунд простоя
      clearTimeout(thumbIdle);
      thumbIdle = setTimeout(() => { if (!thumbQueue.length && thumbR) { thumbR.dispose(); thumbR.forceContextLoss(); thumbR = null; } }, 3000);
      return;
    }
    const k = thumbKey(spec);
    if (!thumbs[k]) {
      try { thumbs[k] = renderThumb(spec); } catch (e) { thumbs[k] = ''; }
      if (thumbs[k]) document.querySelectorAll(`.car-card[data-car="${CARS.indexOf(spec)}"] img`).forEach((img) => { img.src = thumbs[k]; });
    }
    setTimeout(step, 0);
  };
  step();
}
function renderGarageGrid() {
  $('garage-count').textContent = `${PG.profile.owned.length} / ${CARS.length} машин`;
  // машины сгруппированы по классам D → S, внутри класса — от медленной к быстрой
  const order = CARS.map((c, i) => i).sort((a, b) => (CARS[a].vmax || 0) - (CARS[b].vmax || 0));
  const CLS_NAME = { D: 'городские и приколы', C: 'стритовые', B: 'спорткары', A: 'суперкупе', S: 'гиперкары' };
  $('car-grid').innerHTML = CLASSES.map((cl) => {
    const list = order.filter((i) => carClass(CARS[i]) === cl);
    const own = list.filter((i) => PG.owns(CARS[i])).length;
    return `<div class="cls-head"><span class="cls cls-${cl}">${cl}</span> Класс ${cl} · ${CLS_NAME[cl]}<small>${own}/${list.length}</small></div>` + list.map((i) => {
      const c = CARS[i], t = thumbs[thumbKey(c)], owned = PG.owns(c);
      const tl = owned ? PG.tuneLevel(c) : 0;
      return `<div class="car-card ${i === sel.car ? 'sel' : ''} ${owned ? '' : 'locked'}" data-car="${i}"><img class="thumb" alt="" ${t ? `src="${t}"` : ''}/><b>${c.name}</b>${owned ? (tl ? `<i class="tl">⚙${tl}</i>` : '') : PG.carUnlocked(c) ? `<i class="price">🔒 ${PG.carPrice(c).toLocaleString('ru-RU')}</i>` : `<i class="price lv">ур. ${PG.carUnlockLevel(c)}</i>`}</div>`;
    }).join('');
  }).join('');
  document.querySelectorAll('.car-card').forEach((el) => el.addEventListener('click', () => selectCar(+el.dataset.car)));
  const missing = CARS.filter((c) => !thumbs[thumbKey(c)]);
  // сначала выбранная и соседние
  missing.sort((a, b) => Math.abs(CARS.indexOf(a) - sel.car) - Math.abs(CARS.indexOf(b) - sel.car));
  thumbQueue = missing; pumpThumbs();
  const cur = document.querySelector('.car-card.sel'); if (cur) cur.scrollIntoView({ block: 'nearest' });
}
function renderGarage() {
  const base = CARS[sel.car], owned = PG.owns(base);
  const c = owned ? PG.tunedSpec(base) : base;
  $('car-name').textContent = c.name;
  const tc = owned ? PG.tunedClass(base) : carClass(base);
  $('car-tag').innerHTML = `${escapeHtml(c.tag)}<span class="cls cls-${tc}">${tc}</span>${tc !== carClass(base) ? `<small class="clsup">было ${carClass(base)} · PI ${Math.round(PG.perfIndex(base))}</small>` : ''}`;
  $('car-desc').textContent = c.desc;
  const st = carStats(c), st0 = carStats(base);
  // серая часть полоски — заводское значение, жёлтая прибавка — тюнинг
  $('car-stats').innerHTML = [['Скорость', 'top'], ['Разгон', 'accel'], ['Управляемость', 'handling'], ['Дрифт', 'drift']]
    .map(([n, k]) => `<div class="stat"><span>${n}</span><div class="bar"><i style="width:${Math.round(Math.min(st[k], st0[k]) * 100)}%"></i>${st[k] > st0[k] + 0.005 ? `<em style="left:${Math.round(st0[k] * 100)}%;width:${Math.round((Math.min(1, st[k]) - st0[k]) * 100)}%"></em>` : ''}</div></div>`).join('');
  const price = PG.carPrice(base), money = PG.profile.money;
  $('car-buy').innerHTML = owned
    ? `<span class="own">✓ В гараже${PG.tuneLevel(base) ? ` · тюнинг ${PG.tuneLevel(base)}/${PG.PERF_PARTS.length * 3}` : ''}</span>${menuScreen === 'tune' ? '' : '<button class="btn small accent" id="btn-tune">🔧 Тюнинг</button>'}`
    : !PG.carUnlocked(base) ? `<span class="price">🔒 откроется на ${PG.carUnlockLevel(base)} уровне · ${price.toLocaleString('ru-RU')} 💰</span>`
    : `<span class="price">🔒 ${price.toLocaleString('ru-RU')} 💰</span><button class="btn small accent" id="btn-buy" ${money < price ? 'disabled' : ''}>${money < price ? `не хватает ${(price - money).toLocaleString('ru-RU')}` : 'Купить'}</button>`;
  const bb = $('btn-buy'); if (bb) bb.addEventListener('click', () => {
    if (!confirm(`Купить ${base.name} за ${price.toLocaleString('ru-RU')} 💰?`)) return;
    if (PG.buyCar(base)) { audio.score(); sel.ownedCar = sel.car; saveSel(); renderWallet(); renderGarage(); renderGarageGrid(); }
  });
  const bt = $('btn-tune'); if (bt) bt.addEventListener('click', () => { audio.click(); showScreen('tune'); });
  $('car-spec').textContent = `${c.hp} л.с. · ${Math.round(c.torque)} Н·м · ${c.mass} кг · до ${speedStr(c.vmax || 250)} · привод ${c.drive === 'RWD' ? 'задний' : c.drive === 'AWD' ? 'полный' : 'передний'} · ${c.gears.length} ${c.gears.length < 5 ? 'передачи' : 'передач'}`;
  const ci = sel.colors[c.id] ?? 0;
  $('car-colors').innerHTML = c.colors.map((col, i) => `<div class="swatch ${i === ci ? 'sel' : ''}" style="background:${col}" data-col="${i}"></div>`).join('');
  document.querySelectorAll('[data-col]').forEach((el) => el.addEventListener('click', () => {
    sel.colors[c.id] = +el.dataset.col; saveSel(); audio.click();
    if (PG.lookOf(base).paint) PG.buyLook(base, 'paint', ''); // заводской цвет снимает покраску
    W.player.model.bodyMat.color.set(c.colors[+el.dataset.col]); renderGarage(); renderGarageGrid();
  }));
  document.querySelectorAll('.car-card').forEach((el) => el.classList.toggle('sel', +el.dataset.car === sel.car));
}
function selectCar(i) {
  if (i === sel.car) return;
  sel.car = (i + CARS.length) % CARS.length; if (PG.owns(CARS[sel.car])) sel.ownedCar = sel.car; saveSel(); audio.click();
  spawnPlayer(6, -2.8);
  renderGarage();
  const cur = document.querySelector('.car-card.sel'); if (cur) cur.scrollIntoView({ block: 'nearest' });
}
function switchCar(d) { selectCar((sel.car + d + CARS.length) % CARS.length); }
$('car-prev').addEventListener('click', () => switchCar(-1));
$('car-next').addEventListener('click', () => switchCar(1));

// ---------- кошелёк и уровень ----------
function renderWallet() {
  const lv = PG.level(), xp = PG.profile.xp, a = PG.xpForLevel(lv), b = PG.xpForLevel(lv + 1);
  const html = `<b>💰 ${PG.profile.money.toLocaleString('ru-RU')}</b><span class="lv">Ур. ${lv}</span><span class="xpbar"><i style="width:${Math.round((xp - a) / (b - a) * 100)}%"></i></span>`;
  document.querySelectorAll('.wallet').forEach((el) => { el.innerHTML = html; });
}

// ---------- тюнинг ----------
let tuneTab = 'perf';
function renderTune() {
  const base = CARS[sel.car];
  if (!PG.owns(base)) { showScreen('garage'); return; }
  $('tune-car').textContent = base.name;
  document.querySelectorAll('#tune-tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === tuneTab));
  const t = PG.tuneOf(base), money = PG.profile.money;
  const fmt = (n) => n.toLocaleString('ru-RU');
  let html = '';
  if (tuneTab === 'perf') {
    html = PG.PERF_PARTS.map((part) => {
      const cur = t.perf[part.id] || 0, got = (t.perfOwned || {})[part.id] || 0;
      const btns = PG.STAGES.map((nm, k) => {
        const have = k <= got, price = PG.perfPartPrice(base, part, k);
        const lbl = k === 0 ? nm : have ? `${nm} ✓` : `${nm}<small>${fmt(price)}</small>`;
        return `<button class="btn small ${cur === k ? 'on' : ''} ${!have && money < price ? 'poor' : ''}" data-perf="${part.id}" data-k="${k}">${lbl}</button>`;
      }).join('');
      return `<div class="tune-row"><div class="tn"><b>${part.name}</b><small>${part.desc}</small></div><div class="seg">${btns}</div></div>`;
    }).join('');
  } else {
    const look = t.look;
    html = PG.LOOK_PARTS.map((part) => {
      const cur = look[part.id] ?? 0, price = PG.lookPartPrice(base, part);
      let opts;
      if (part.kind === 'paint') {
        opts = `<div class="swatch ${!look.paint ? 'sel' : ''}" data-look="paint" data-v="" title="Заводской цвет" style="background:${base.colors[sel.colors[base.id] ?? 0]}">↺</div>` +
          PG.PAINTS.map((col) => `<div class="swatch ${look.paint === col ? 'sel' : ''} ${PG.lookOwned(base, 'paint', col) ? '' : 'buy'}" data-look="paint" data-v="${col}" style="background:${col}"></div>`).join('');
        return `<div class="tune-row"><div class="tn"><b>${part.name}</b><small>вариант — ${fmt(price)} 💰, купленный цвет переключается бесплатно</small></div><div class="swatches">${opts}</div></div>`;
      }
      opts = part.opts.map((nm, v) => {
        const have = PG.lookOwned(base, part.id, v);
        const dot = part.colors && part.colors[v] != null ? `<i class="dot" style="background:#${part.colors[v].toString(16).padStart(6, '0')}"></i>` : '';
        return `<button class="btn small ${cur === v ? 'on' : ''} ${!have && money < price ? 'poor' : ''}" data-look="${part.id}" data-v="${v}">${dot}${nm}${have || v === 0 ? '' : `<small>${fmt(price)}</small>`}</button>`;
      }).join('');
      return `<div class="tune-row"><div class="tn"><b>${part.name}</b></div><div class="seg wrap">${opts}</div></div>`;
    }).join('');
  }
  $('tune-list').innerHTML = html;
  $('tune-list').querySelectorAll('[data-perf]').forEach((el) => el.addEventListener('click', () => {
    if (!PG.buyPerf(base, el.dataset.perf, +el.dataset.k)) { showMsg('Не хватает денег', 1.2, '#ff6b6b'); audio.click(); return; }
    audio.shift(); afterTune();
  }));
  $('tune-list').querySelectorAll('[data-look]').forEach((el) => el.addEventListener('click', () => {
    const id = el.dataset.look, v = id === 'paint' ? el.dataset.v : +el.dataset.v;
    if (!PG.buyLook(base, id, v)) { showMsg('Не хватает денег', 1.2, '#ff6b6b'); audio.click(); return; }
    audio.click(); afterTune(true);
  }));
}
function afterTune(look) {
  if (look && W && state === 'menu') spawnPlayer(6, -2.8);
  const k = thumbKey(CARS[sel.car]); delete thumbs[k];
  renderWallet(); renderTune(); renderGarage();
}
document.querySelectorAll('#tune-tabs button').forEach((b) => b.addEventListener('click', () => { audio.click(); tuneTab = b.dataset.tab; renderTune(); }));

// ---------- рекорды: фильтры по карте, режиму, машине и длине + группировка и сортировка ----------
const recView = { map: 'all', mode: 'all', car: 'all', len: 'all', group: 'map', sort: 'best' };
function allRecordEntries() {
  const out = [];
  for (const m of [...MODES, FIELD_MODE]) for (const mp of MAPS) {
    if (!!mp.field !== (m.id === 'field')) continue;
    for (let len = 0; len <= LEN_MAX; len++) for (const c of CARS) {
      const r = records[recKey(m.id, mp.id, len) + '|' + c.id];
      if (r) out.push({ r, mode: m, map: mp, len, car: c, timeRec: byTime(m.id, len) });
    }
  }
  return out;
}
function renderRecords() {
  const all = allRecordEntries();
  const opt = (v, t, cur) => `<option value="${v}" ${String(v) === String(cur) ? 'selected' : ''}>${t}</option>`;
  const usedCars = CARS.filter((c) => all.some((e) => e.car === c));
  const usedLens = [...new Set(all.map((e) => e.len))].sort((a, b) => a - b);
  $('rec-filters').innerHTML = `
    <label>Карта<select data-rf="map">${opt('all', 'Все карты', recView.map)}${MAPS.map((m) => opt(m.id, m.name, recView.map)).join('')}</select></label>
    <label>Режим<select data-rf="mode">${opt('all', 'Все режимы', recView.mode)}${[...MODES, FIELD_MODE].map((m) => opt(m.id, m.name, recView.mode)).join('')}</select></label>
    <label>Машина<select data-rf="car">${opt('all', 'Все машины', recView.car)}${usedCars.map((c) => opt(c.id, c.name, recView.car)).join('')}</select></label>
    <label>Длина<select data-rf="len">${opt('all', 'Любая', recView.len)}${usedLens.map((l) => opt(l, l ? l + ' км' : '∞ / полигон', recView.len)).join('')}</select></label>
    <label>Группировать<select data-rf="group">${opt('map', 'По картам', recView.group)}${opt('car', 'По машинам', recView.group)}${opt('mode', 'По режимам', recView.group)}</select></label>
    <label>Сортировка<select data-rf="sort">${opt('best', 'Лучший результат', recView.sort)}${opt('date', 'Сначала новые', recView.sort)}${opt('speed', 'Макс. скорость', recView.sort)}${opt('dist', 'Дистанция', recView.sort)}</select></label>`;
  document.querySelectorAll('[data-rf]').forEach((el) => el.addEventListener('change', () => { recView[el.dataset.rf] = el.value; renderRecords(); }));
  const list = all.filter((e) => (recView.map === 'all' || e.map.id === recView.map) && (recView.mode === 'all' || e.mode.id === recView.mode) &&
    (recView.car === 'all' || e.car.id === recView.car) && (recView.len === 'all' || e.len === +recView.len));
  if (!all.length) { $('records-table').innerHTML = '<p class="hint">Рекордов пока нет — самое время поставить первый!</p>'; return; }
  if (!list.length) { $('records-table').innerHTML = '<p class="hint">По этим фильтрам рекордов нет.</p>'; return; }
  // группы: внутри группы — сначала по режиму и длине (сравнивать можно только одинаковые заезды), потом по выбранной сортировке
  const gKey = (e) => recView.group === 'car' ? e.car.name : recView.group === 'mode' ? e.mode.name : e.map.name;
  const cmp = (a, b) => {
    if (recView.sort === 'date') return (b.r.ts || 0) - (a.r.ts || 0);
    if (recView.sort === 'speed') return (b.r.maxSpeed || 0) - (a.r.maxSpeed || 0);
    if (recView.sort === 'dist') return (b.r.dist || 0) - (a.r.dist || 0);
    if (a.mode.id !== b.mode.id) return MODES.indexOf(a.mode) - MODES.indexOf(b.mode);
    if (a.len !== b.len) return a.len - b.len;
    return a.timeRec ? (a.r.time || 1e9) - (b.r.time || 1e9) : b.r.score - a.r.score;
  };
  const groups = new Map();
  for (const e of list) { const k = gKey(e); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); }
  let html = '<table><tr><th>Карта · режим</th><th>Длина</th><th>Машина</th><th>Результат</th><th>Дата</th></tr>';
  for (const [g, items] of groups) {
    html += `<tr><td colspan="5" class="rec-group">${escapeHtml(g)}</td></tr>`;
    for (const e of items.sort(cmp)) {
      const val = e.timeRec ? (e.r.time ? fmtTime(e.r.time) : '—') : `${e.r.score.toLocaleString('ru-RU')} очк.`;
      const sub = [e.r.dist ? `${(e.r.dist / 1000).toFixed(1)} км` : '', e.r.maxSpeed ? speedStr(e.r.maxSpeed) : ''].filter(Boolean).join(' · ');
      html += `<tr><td>${e.map.name}<small>${e.mode.name}</small></td><td>${e.map.field ? '—' : lenLabel(e.mode.id, e.len)}</td><td>${e.car.name}<span class="cls cls-${carClass(e.car)}">${carClass(e.car)}</span></td><td><b>${val}</b>${sub ? `<small>${sub}</small>` : ''}</td><td><small>${e.r.date || ''}</small></td></tr>`;
    }
  }
  $('records-table').innerHTML = html + '</table>';
}
$('btn-reset-rec').addEventListener('click', () => { if (confirm('Удалить все рекорды?')) { records = {}; store.set('records', records); renderRecords(); } });

function renderSettings() {
  $('set-vol').value = settings.vol; $('set-music').checked = settings.music; $('set-assist').value = settings.assistMode; $('set-draw').value = settings.draw;
  $('set-manual').checked = settings.manual; $('set-quality').value = settings.quality; $('set-camera').value = settings.camera; $('set-units').value = settings.units;
  $('set-sfx').value = settings.sfxVol; $('set-musicvol').value = settings.musicVol;
  $('set-handling').value = settings.handling; $('set-smoke').checked = settings.smoke;
  $('set-fps').value = settings.fps; $('set-showfps').checked = settings.showFps; $('set-autores').checked = settings.autoRes;
  $('set-ghost').checked = !!settings.ghost;
}
$('set-vol').addEventListener('input', (e) => { settings.vol = +e.target.value; audio.setVolume(settings.vol); saveSettings(); });
$('set-sfx').addEventListener('input', (e) => { settings.sfxVol = +e.target.value; audio.setSfxVol(settings.sfxVol); saveSettings(); });
$('set-musicvol').addEventListener('input', (e) => { settings.musicVol = +e.target.value; audio.setMusicVol(settings.musicVol); saveSettings(); });
$('set-handling').addEventListener('change', (e) => { settings.handling = e.target.value; settings.easy = settings.handling === 'easy'; saveSettings(); });
$('set-smoke').addEventListener('change', (e) => { settings.smoke = e.target.checked; saveSettings(); if (W) W.smoke.clear(); });
$('set-music').addEventListener('change', (e) => { settings.music = e.target.checked; audio.setMusic(settings.music); saveSettings(); });
$('set-assist').addEventListener('change', (e) => { settings.assistMode = e.target.value; saveSettings(); });
$('set-draw').addEventListener('change', (e) => { settings.draw = +e.target.value; saveSettings(); if (state !== 'race') buildWorld(sel.map, 7); });
// полный экран (на телефонах особенно полезно)
function toggleFullscreen() {
  const d = document, el = d.documentElement;
  const fs = d.fullscreenElement || d.webkitFullscreenElement;
  try {
    if (fs) (d.exitFullscreen || d.webkitExitFullscreen).call(d);
    else { const req = el.requestFullscreen || el.webkitRequestFullscreen; if (req) { const pr = req.call(el, { navigationUI: 'hide' }); if (pr && pr.then) pr.then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {}); } }
  } catch (e) { /* браузер не поддерживает */ }
}
for (const b of document.querySelectorAll('.btn-fs')) b.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggleFullscreen(); });
$('set-manual').addEventListener('change', (e) => { settings.manual = e.target.checked; saveSettings(); applyManualClass(); });
// кнопки передач на телефоне видны только с ручной коробкой
function applyManualClass() { document.body.classList.toggle('manual', !!settings.manual); }
applyManualClass();
$('set-quality').addEventListener('change', (e) => { settings.quality = +e.target.value; saveSettings(); buildWorld(sel.map, 7); });
$('set-camera').addEventListener('change', (e) => { settings.camera = +e.target.value; saveSettings(); });
$('set-units').addEventListener('change', (e) => { settings.units = e.target.value; saveSettings(); });
$('set-fps').addEventListener('change', (e) => { settings.fps = +e.target.value; saveSettings(); });
$('set-showfps').addEventListener('change', (e) => { settings.showFps = e.target.checked; saveSettings(); });
$('set-ghost').addEventListener('change', (e) => { settings.ghost = e.target.checked; saveSettings(); });
$('set-autores').addEventListener('change', (e) => { settings.autoRes = e.target.checked; saveSettings(); dynRes.scale = 1; applyPixelRatio(); });

// ======================= онлайн: подключение и лобби =======================
const serverUrl = () => (settings.server || '').trim() || (/^(localhost|127\.)/.test(location.hostname) ? 'ws://localhost:8080' : DEFAULT_SERVER);
function setOnlineStatus(text, err) { const el = $('online-status'); el.textContent = text; el.classList.toggle('err', !!err); }
const MM_LENS = [5, 10, 15, 20, 25, 30, 40, 50, 0];
function renderOnline() {
  const c = CARS[sel.car], cls = PG.owns(c) ? PG.tunedClass(c) : carClass(c);
  $('mm-car').innerHTML = `${c.name}<span class="cls cls-${cls}">${cls}</span>`;
  const seg = (id, items, key) => {
    $(id).innerHTML = items.map(([v, t]) => `<button class="btn small ${sel.mm[key] === v ? 'on' : ''}" data-v="${v}">${t}</button>`).join('');
    $(id).querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
      audio.click(); const v = b.dataset.v; sel.mm[key] = /^\d+$/.test(v) ? +v : v; saveSel(); renderOnline();
    }));
  };
  seg('mm-mode', [['race', 'Гонка'], ['drift', 'Дрифт'], ['time', 'На время'], ['speed', 'Спидкамеры'], ['clean', 'Без ошибок'], ['escape', 'Побег']], 'mode');
  seg('mm-size', [[5, '5'], [10, '10']], 'size');
  seg('mm-bots', [[1, '🤖 С ботами'], [0, 'Только игроки']], 'bots');
  seg('mm-car-rule', [['any', 'Любые'], ['class', `Класс ${cls}`], ['same', 'Та же машина']], 'carRule');
  if (!MM_LENS.includes(sel.mm.len)) sel.mm.len = 10;
  $('mm-len').innerHTML = MM_LENS.map((l) => `<option value="${l}" ${l === sel.mm.len ? 'selected' : ''}>${l ? l + ' км' : '∞ бесконечная'}</option>`).join('');
  $('on-name').value = settings.name || '';
  $('on-server').value = settings.server || '';
  $('on-server').placeholder = serverUrl();
  setOnlineStatus(net.connected ? 'Подключено' : '');
}
function myProfile() {
  const spec = CARS[sel.car];
  return { name: settings.name || 'Игрок', car: sel.car, cls: PG.owns(spec) ? PG.tunedClass(spec) : carClass(spec), color: sel.colors[spec.id] ?? 0, look: PG.lookOf(spec), level: PG.level(), token: PG.profile.cloud ? PG.profile.cloud.token : undefined };
}
async function goOnline(joinMsg) {
  audio.click();
  settings.name = $('on-name').value.trim().slice(0, 16); settings.server = $('on-server').value.trim(); saveSettings();
  setOnlineStatus('Подключение… (бесплатный сервер может просыпаться до минуты)');
  document.querySelectorAll('#menu-online .btn').forEach((b) => (b.disabled = true));
  try {
    await net.connect(serverUrl(), { ...joinMsg, ...myProfile() });
    showScreen('lobby');
  } catch (e) { setOnlineStatus(e.message, true); }
  document.querySelectorAll('#menu-online .btn').forEach((b) => (b.disabled = false));
}
const mmJoin = () => ({ mm: { ...sel.mm, maps: MAPS.map((m, i) => (m.field || !PG.mapUnlocked(i) ? -1 : i)).filter((i) => i >= 0) } });
$('on-quick').addEventListener('click', () => goOnline(mmJoin()));
$('mm-len').addEventListener('change', (e) => { sel.mm.len = +e.target.value; saveSel(); });
// следующая купленная машина в направлении d
function nextOwned(from, d) { let i = from; for (let n = 0; n < CARS.length; n++) { i = (i + d + CARS.length) % CARS.length; if (PG.owns(CARS[i])) return i; } return from; }
function mmCar(d) { sel.car = nextOwned(sel.car, d); sel.ownedCar = sel.car; saveSel(); audio.click(); if (W && state === 'menu') spawnPlayer(6, -2.8); renderOnline(); }
// ---------- выбор машины списком (быстрый матч и лобби) ----------
let pickFor = 'mm', pickCls = 'all';
function openPicker(forWhat) { pickFor = forWhat; $('cp-search').value = ''; renderPicker(); $('car-picker').classList.remove('hidden'); }
function closePicker() { $('car-picker').classList.add('hidden'); }
function renderPicker() {
  const q = $('cp-search').value.trim().toLowerCase();
  $('cp-cls').innerHTML = [['all', 'Все'], ...CLASSES.map((c) => [c, c])].map(([v, n]) => `<button class="btn small ${pickCls === v ? 'on' : ''}" data-v="${v}">${n}</button>`).join('');
  $('cp-cls').querySelectorAll('button').forEach((b) => b.addEventListener('click', () => { audio.click(); pickCls = b.dataset.v; renderPicker(); }));
  const list = CARS.map((c, i) => i).filter((i) => PG.owns(CARS[i]))
    .map((i) => ({ i, cls: PG.tunedClass(CARS[i]), pi: PG.perfIndex(CARS[i]) }))
    .filter((o) => (pickCls === 'all' || o.cls === pickCls) && (!q || CARS[o.i].name.toLowerCase().includes(q)))
    .sort((a, b) => CLASSES.indexOf(a.cls) - CLASSES.indexOf(b.cls) || a.pi - b.pi);
  $('cp-grid').innerHTML = list.length ? list.map(({ i, cls }) => {
    const c = CARS[i], t = thumbs[thumbKey(c)], tl = PG.tuneLevel(c);
    return `<div class="car-card ${i === sel.car ? 'sel' : ''}" data-car="${i}"><span class="cls cls-${cls}">${cls}</span><img class="thumb" alt="" ${t ? `src="${t}"` : ''}/><b>${c.name}</b><small>${c.hp} л.с.${tl ? ` · ⚙${tl}` : ''}</small></div>`;
  }).join('') : '<p class="hint">Нет машин по этому фильтру.</p>';
  $('cp-grid').querySelectorAll('.car-card').forEach((el) => el.addEventListener('click', () => {
    sel.car = +el.dataset.car; sel.ownedCar = sel.car; saveSel(); audio.click();
    if (W && state === 'menu') spawnPlayer(6, -2.8);
    if (pickFor === 'lobby') { net.send({ t: 'profile', ...myProfile() }); renderLobby(); } else renderOnline();
    closePicker();
  }));
  thumbQueue = list.map((o) => CARS[o.i]).filter((c) => !thumbs[thumbKey(c)]); pumpThumbs();
}
document.querySelectorAll('[data-pick]').forEach((b) => b.addEventListener('click', () => { audio.click(); openPicker(b.dataset.pick); }));
$('cp-close').addEventListener('click', () => { audio.click(); closePicker(); });
$('car-picker').addEventListener('click', (e) => { if (e.target.id === 'car-picker') closePicker(); });
$('cp-search').addEventListener('input', renderPicker);
addEventListener('keydown', (e) => { if (e.code === 'Escape' && !$('car-picker').classList.contains('hidden')) { e.stopPropagation(); closePicker(); } }, true);
$('mm-prev').addEventListener('click', () => mmCar(-1));
$('mm-next').addEventListener('click', () => mmCar(1));
$('mm-again').addEventListener('click', () => { showScreen('online'); goOnline(mmJoin()); });
$('on-create').addEventListener('click', () => goOnline({}));
$('on-join').addEventListener('click', () => {
  const code = $('on-code').value.trim().toUpperCase();
  if (code.length !== 6) { setOnlineStatus('Введи код комнаты из 6 символов', true); return; }
  goOnline({ code });
});
$('on-back').addEventListener('click', () => { audio.click(); net.disconnect(true); showScreen('main'); });

function lobbyConfigText(c) {
  const map = MAPS[c.map] || MAPS[0];
  const mode = map.field ? 'Полигон' : (MODES.find((m) => m.id === c.mode) || MODES[0]).name;
  const extra = map.field ? { obst: 'с препятствиями', clean: 'чистое поле', flat: 'чистое и ровное' }[c.fieldMode] : c.len ? `${c.len} км` : 'бесконечная';
  return `${mode} · ${map.name} · ${extra} · ${c.car >= 0 && CARS[c.car] ? 'только ' + CARS[c.car].name : 'любые машины'}`;
}
function renderLobby() {
  if (!net.connected) { showScreen('online'); return; }
  const mm = net.mm;
  $('lobby-code').textContent = mm ? '' : net.code;
  $('lobby-code2').textContent = net.code;
  $('lobby-codebox').classList.toggle('hidden', !!mm);
  $('menu-lobby').querySelector('h2').firstChild.textContent = mm ? 'Быстрый матч ' : 'Комната ';
  $('lobby-type').textContent = mm
    ? `${mm.mode === 'drift' ? 'Дрифт' : 'Гонка'} · ${mm.len ? mm.len + ' км' : 'бесконечная'} · ${mm.size} игроков · соперники: ${{ any: 'любые машины', class: 'класс ' + carClass(CARS[sel.car]), same: CARS[sel.car].name }[mm.carRule]}`
    : 'Закрытая комната — отправь код друзьям';
  const me = myProfile();
  const list = [{ id: net.id, ...me, me: true }, ...[...net.players.values()]];
  $('lobby-players').innerHTML = list.map((p) => {
    const spec = CARS[p.car] || CARS[0];
    const col = spec.colors[p.color % spec.colors.length];
    const bad = !mm && net.config && net.config.car >= 0 && (p.me ? sel.car : p.car) !== net.config.car;
    return `<div class="lp"><i style="background:${col}"></i><b>${p.id === net.host && !net.mm ? '👑 ' : ''}${escapeHtml(p.name)}${p.me ? ' (ты)' : ''}</b><span>${p.me ? `ур. ${PG.level()}${PG.profile.rating != null ? ` · ★${PG.profile.rating}` : ''} · ` : p.level ? `ур. ${p.level}${p.rating != null ? ` · ★${p.rating}` : ''} · ` : ''}${spec.name}${bad ? ' · ⚠ не та машина' : ''}${p.inRace ? ' · в заезде' : ''}</span></div>`;
  }).join('');
  $('lobby-count').textContent = `Игроки: ${list.length} / ${mm ? mm.size : 10}`;
  $('lobby-car').textContent = CARS[sel.car].name;
  const c = net.config;
  const host = net.isHost && !mm;
  $('lobby-host').classList.toggle('hidden', !host);
  $('lobby-guest').classList.toggle('hidden', host || !!mm);
  $('lobby-start').classList.toggle('hidden', !host);
  const lockCar = !mm && c && c.car >= 0 && !!CARS[c.car];
  $('lobby-carsw').classList.toggle('hidden', !!mm || lockCar);
  $('lobby-pick').classList.toggle('hidden', !!mm || lockCar);
  // хост выбрал определённую машину: участник принимает (меняет машину) или выходит
  const needCar = lockCar && !host && sel.car !== c.car;
  $('lobby-carreq').classList.toggle('hidden', !needCar);
  if (needCar) $('carreq-text').innerHTML = `Хост разрешил только машину <b>${CARS[c.car].name}</b>${PG.owns(CARS[c.car]) ? '' : ' (у тебя её нет — дадим на прокат на этот заезд)'}. Смени машину или выйди из комнаты — с другой машиной в заезд не пустит.`;
  const done = net.state === 'done';
  $('mm-again').classList.toggle('hidden', !(mm && done));
  $('lobby-leave').textContent = mm && !done ? '✕ Отмена' : '← Выйти';
  const ms = net.mmStatus;
  $('mm-search').classList.toggle('hidden', !mm);
  if (mm) {
    $('mm-search').innerHTML = done ? '<div class="hud-small">Матч завершён</div>'
      : ms && ms.state === 'countdown' ? `<div class="hud-small">Все в сборе! Старт через</div><div class="mm-cd">${ms.left}</div>`
      : net.state === 'racing' ? '<div class="hud-small">Идёт заезд…</div>'
      : `<div class="hud-small">Ищем соперников…</div><div class="mm-count">${ms ? ms.count : list.length} / ${mm.size}</div><div class="hud-small" id="mm-wait-t"></div>`;
  }
  $('lobby-conf-text').textContent = lobbyConfigText(c);
  const racing = net.state === 'racing';
  $('lobby-wait').textContent = mm ? (done ? 'Нажми «Искать снова», чтобы найти новый матч с теми же настройками.' : 'Матч начнётся сам, как только наберётся нужное число игроков с подходящими машинами.') : racing ? (host ? 'Кто-то ещё в прошлом заезде. Можно подождать или нажать «Старт» — начнётся новый заезд для всех.' : 'Сейчас идёт заезд — подожди, пока он закончится.') : host ? (list.length < 2 ? 'Можно стартовать одному или подождать друзей.' : '') : 'Ждём, когда хост нажмёт «Старт».';
  if (host) {
    $('lc-map').innerHTML = MAPS.map((m, i) => `<option value="${i}" ${i === c.map ? 'selected' : ''}>${m.name}</option>`).join('');
    const field = !!(MAPS[c.map] || {}).field;
    $('lc-mode').innerHTML = MODES.filter((m) => !m.offline).map((m) => `<option value="${m.id}" ${m.id === c.mode ? 'selected' : ''}>${m.name}</option>`).join('');
    $('lc-mode-row').classList.toggle('hidden', field);
    $('lc-len-row').classList.toggle('hidden', field);
    $('lc-fm-row').classList.toggle('hidden', !field);
    const lens = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 0];
    $('lc-len').innerHTML = lens.map((l) => `<option value="${l}" ${l === c.len ? 'selected' : ''}>${l ? l + ' км' : '∞ бесконечная'}</option>`).join('');
    $('lc-fm').value = c.fieldMode;
    $('lc-car').innerHTML = `<option value="-1" ${c.car < 0 ? 'selected' : ''}>Любые</option>` + CARS.map((s, i) => `<option value="${i}" ${i === c.car ? 'selected' : ''}>Только ${s.name}</option>`).join('');
  }
  renderOnlineResults();
}
const escapeHtml = (t) => String(t).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
function sendConfig() {
  net.send({ t: 'config', config: { map: +$('lc-map').value, mode: $('lc-mode').value, len: +$('lc-len').value, fieldMode: $('lc-fm').value, car: +$('lc-car').value } });
}
function setLobbyCar(i) {
  sel.car = i; saveSel();
  if (W && state === 'menu') spawnPlayer(6, -2.8);
  net.send({ t: 'profile', ...myProfile() });
}
// хост выбрал машину для всех — сам тоже пересаживается на неё
$('lc-car').addEventListener('change', () => { const v = +$('lc-car').value; if (v >= 0 && sel.car !== v) setLobbyCar(v); });
$('carreq-ok').addEventListener('click', () => { audio.click(); const c = net.config; if (c && c.car >= 0) setLobbyCar(c.car); renderLobby(); });
$('carreq-leave').addEventListener('click', () => { audio.click(); net.disconnect(true); showScreen('online'); });
['lc-map', 'lc-mode', 'lc-len', 'lc-fm', 'lc-car'].forEach((id) => $(id).addEventListener('change', () => { audio.click(); sendConfig(); }));
$('lobby-start').addEventListener('click', () => {
  audio.click();
  if (net.state === 'racing' && !confirm('Кто-то ещё в прошлом заезде. Начать новый заезд для всех?')) return;
  const c = net.config;
  if (c && c.car >= 0) {
    const bad = [...net.players.values()].filter((p) => p.car !== c.car).length;
    if (bad && !confirm(`${bad} игрок(а) не на ${CARS[c.car].name} — они не поедут. Стартовать?`)) return;
  }
  net.send({ t: 'start' });
});
$('lobby-leave').addEventListener('click', () => { audio.click(); net.disconnect(true); showScreen('online'); });
function lobbyCar(d) {
  sel.car = nextOwned(sel.car, d); sel.ownedCar = sel.car; saveSel(); audio.click();
  if (W && state === 'menu') spawnPlayer(6, -2.8);
  net.send({ t: 'profile', ...myProfile() });
  renderLobby();
}
$('lobby-prev').addEventListener('click', () => lobbyCar(-1));
$('lobby-next').addEventListener('click', () => lobbyCar(1));

// результаты онлайн-заезда (на экране итогов и в лобби)
function renderOnlineResults() {
  const box = $('online-results'), lb = $('lobby-results');
  const res = net.results.slice();
  const c = net.config || {};
  // Дрифт и бесконечная трасса — по очкам; трасса с финишем — по времени (сошедшие внизу)
  const byScore = c.mode === 'drift' || !c.len || (MAPS[c.map] || {}).field;
  const nm = (r) => `${escapeHtml(r.name)}${r.id === net.id ? ' (ты)' : ''}${r.flagged ? ' <span class="flag" title="Сервер не принял результат: подозрение на читы">⚠</span>' : ''}`;
  let rows;
  if (byScore) rows = res.sort((a, b) => b.score - a.score).map((r, i) => `<tr><td>${i + 1}</td><td>${nm(r)}</td><td>${r.score.toLocaleString('ru-RU')} очк.</td></tr>`);
  else {
    const fin = res.filter((r) => r.finished).sort((a, b) => a.time - b.time), dnf = res.filter((r) => !r.finished);
    rows = [...fin.map((r, i) => `<tr><td>${i + 1}</td><td>${nm(r)}</td><td>${fmtTime(r.time)}</td></tr>`), ...dnf.map((r) => `<tr class="dnf"><td>—</td><td>${nm(r)}</td><td>сошёл</td></tr>`)];
  }
  const html = res.length ? `<table>${rows.join('')}</table>` : '';
  const online = G && G.online;
  box.innerHTML = online && html ? `<h3>Онлайн-заезд</h3>${html}${net.state === 'racing' ? '<small>Ждём остальных игроков…</small>' : ''}` : '';
  box.classList.toggle('hidden', !(online && html));
  lb.innerHTML = html ? `<h3>Последний заезд</h3>${html}` : '';
}

net.on.joined = () => { net.mmSince = Date.now(); if (menuScreen === 'lobby') renderLobby(); };
net.on.player = () => { if (menuScreen === 'lobby') renderLobby(); };
net.on.config = () => { if (menuScreen === 'lobby') renderLobby(); };
net.on.left = (p) => { removeRemoteCar(p); if (menuScreen === 'lobby') renderLobby(); };
net.on.fin = (r) => {
  // кто-то финишировал с лучшим временем, но его сообщение пришло позже — пересчитываем место
  if (G && G.online && state === 'over' && G.finished && G.mode.id === 'race' && r && r.id !== net.id) {
    G.place = onlinePlace(G.elapsed); $('over-title').textContent = `ФИНИШ! ${G.place} место`;
  }
  renderOnlineResults();
};
setInterval(() => {
  const el = document.getElementById('mm-wait-t');
  if (el && net.mmSince) { const t = Math.floor((Date.now() - net.mmSince) / 1000); el.textContent = `ожидание ${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; }
}, 1000);
net.on.rating = (m) => {
  PG.profile.rating = m.rating;
  PG.onlineResult(m.place, m.of, G ? G.mode.id : 'race', G ? CARS[sel.car].id : '');
  showMsg(`РЕЙТИНГ ${m.rating}  (${m.delta >= 0 ? '+' : ''}${m.delta})`, 2.5, m.delta >= 0 ? '#7cff4f' : '#ff6b6b');
  const el = $('over-stats'); if (el && state === 'over') el.insertAdjacentHTML('beforeend', `<span>Рейтинг</span><b>${m.rating} (${m.delta >= 0 ? '+' : ''}${m.delta}) · ${m.place}/${m.of}</b>`);
  cloudSync();
};
net.on.mm = (m) => { if (m.state === 'countdown') audio.countdown(false); if (menuScreen === 'lobby') renderLobby(); };
net.on.lobby = () => { renderOnlineResults(); if (menuScreen === 'lobby') renderLobby(); };
net.on.error = (t) => { if (menuScreen === 'online') setOnlineStatus(t, true); else showMsg(t, 2.5, '#ff6b6b'); };
net.on.close = () => {
  if (G && G.online && (state === 'race' || state === 'countdown')) showMsg('СВЯЗЬ С СЕРВЕРОМ ПОТЕРЯНА', 3, '#ff6b6b');
  if (menuScreen === 'lobby' && state === 'menu') { showScreen('online'); setOnlineStatus('Соединение с сервером потеряно', true); }
};
net.on.start = (m) => {
  // применяем настройки хоста и стартуем все одновременно, на одинаковой трассе (общий seed)
  const c = m.config;
  if (!m.racers.includes(net.id)) { if (menuScreen === 'lobby') renderLobby(); showMsg('Заезд начался без тебя: нужна машина, которую выбрал хост', 3, '#ff6b6b'); return; }
  sel.map = Math.min(c.map, MAPS.length - 1);
  const mi = MODES.findIndex((x) => x.id === c.mode); sel.mode = mi < 0 ? 0 : mi;
  const field = !!MAPS[sel.map].field;
  for (const p of net.players.values()) { p.model = null; p.vis = null; p.buf = []; }
  startRace({ seed: m.seed, len: field ? 0 : c.len, fieldMode: c.fieldMode, online: true, bots: c.bots || 0 });
};


// ======================= профиль, достижения, лидерборд, облако =======================
const fmtN = (n) => Math.round(n || 0).toLocaleString('ru-RU');
const MODE_NAME = (id) => (id === 'field' ? 'Полигон' : (MODES.find((m) => m.id === id) || { name: id }).name);
const MAP_NAME = (id) => (MAPS.find((m) => m.id === id) || { name: id }).name;

// ---------- облачное сохранение (на онлайн-сервере) ----------
api.setBase(apiBase(serverUrl()));
let syncTimer = 0, syncBusy = false;
function bestRecordsList() {
  const best = new Map();
  for (const e of allRecordEntries()) {
    const k = `${e.mode.id}|${e.map.id}|${e.len}`, o = best.get(k);
    const better = !o || (e.timeRec ? e.r.time && (!o.time || e.r.time < o.time) : e.r.score > o.score);
    if (better) best.set(k, { mode: e.mode.id, map: e.map.id, len: e.len, score: e.r.score || 0, time: e.r.time || 0, car: e.car.id });
  }
  return [...best.values()].slice(0, 500);
}
// статус облака для профиля: ok | saving | error | stale (в облаке прогресс новее)
const sync = { state: '', error: '', cloudXp: 0 };
const fmtCode = (t) => String(t || '').toUpperCase().replace(/[^0-9A-F]/g, '').match(/.{1,4}/g)?.join('-') || '';
const normCode = (t) => String(t || '').toLowerCase().replace(/[^0-9a-f]/g, '');
const savePayload = () => ({ v: 2, profile: PG.profile, records, sel });
async function cloudSyncNow({ force = false } = {}) {
  if (syncBusy || syncBlocked) return; syncBusy = true;
  syncDirty = false; // изменения во время запроса снова поставят флаг
  sync.state = 'saving'; refreshSyncInfo();
  try {
    api.setBase(apiBase(serverUrl()));
    const name = settings.name || 'Игрок';
    if (!PG.profile.cloud) { const r = await api.register(name); PG.profile.cloud = { id: r.id, token: r.token }; PG.saveProfile(); syncDirty = false; }
    const body = { token: PG.profile.cloud.token, name, save: savePayload(), stats: PG.publicStats(), records: bestRecordsList(), force };
    let r;
    try { r = await api.sync(body); } catch (e) {
      // сервер «забыл» аккаунт (базу пересоздали) — пересоздаём его с тем же кодом и заливаем локальный прогресс
      if (e.status !== 401) throw e;
      r = await api.sync({ ...body, recreate: true });
    }
    if (r && r.id && PG.profile.cloud.id !== r.id) PG.profile.cloud.id = r.id;
    if (r && r.profile && Number.isFinite(r.profile.rating)) PG.profile.rating = r.profile.rating;
    if (r && r.stale) { sync.state = 'stale'; sync.cloudXp = r.cloudXp || 0; }
    else { sync.state = 'ok'; PG.profile.cloudAt = Date.now(); }
    sync.error = '';
    try { localStorage.setItem('ed_profile', JSON.stringify(PG.profile)); localStorage.setItem('ed_profile_bak', JSON.stringify(PG.profile)); } catch { /* приватный режим */ }
  } catch (e) {
    // сервер спит или недоступен — повторим (каждые 20 с, пока не получится)
    syncDirty = true; sync.state = 'error'; sync.error = e.message || 'нет связи';
  }
  syncBusy = false;
  refreshSyncInfo();
}
let syncDirty = false, syncBlocked = false;
function cloudSync() { if (syncBlocked) return; syncDirty = true; clearTimeout(syncTimer); syncTimer = setTimeout(cloudSyncNow, 1500); }
// при закрытии/сворачивании вкладки — последняя попытка, которая переживает закрытие страницы (sendBeacon)
function beaconSync() {
  if (!syncDirty || syncBlocked || !PG.profile.cloud || !navigator.sendBeacon) return false;
  try {
    const body = JSON.stringify({ token: PG.profile.cloud.token, name: settings.name || 'Игрок', save: savePayload(), stats: PG.publicStats(), records: bestRecordsList() });
    if (body.length > 60000) return false; // лимит sendBeacon ~64 КБ — тогда обычный запрос
    return navigator.sendBeacon(apiBase(serverUrl()) + '/api/sync', new Blob([body], { type: 'text/plain' }));
  } catch { return false; }
}
// автосохранение в облако: через 1.5 с после любого изменения прогресса, повтор каждые 20 с, если не вышло,
// контрольное сохранение раз в 2 минуты, при сворачивании/закрытии вкладки и при появлении сети
PG.setOnSave(cloudSync);
setInterval(() => { if (syncDirty && !syncBusy) cloudSyncNow(); }, 20000);
setInterval(() => { if (PG.profile.cloud && !syncBusy && !syncBlocked) cloudSyncNow(); }, 120000);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && syncDirty) { if (!beaconSync()) cloudSyncNow(); } });
window.addEventListener('pagehide', () => { if (syncDirty) beaconSync(); });
window.addEventListener('online', () => { if (syncDirty || !PG.profile.cloudAt) cloudSyncNow(); });
// при запуске: сверяемся с облаком (и пересоздаём аккаунт, если сервер его потерял)
setTimeout(() => { if (PG.profile.cloud) cloudSyncNow(); }, 3000);
function refreshSyncInfo() { const el = document.getElementById('pf-sync'); if (el) el.innerHTML = syncInfoHtml(); }
function syncInfoHtml() {
  const at = PG.profile.cloudAt ? new Date(PG.profile.cloudAt).toLocaleString('ru-RU') : '';
  if (sync.state === 'saving') return '⏳ Сохраняем в облако…';
  if (sync.state === 'stale') return `⚠ В облаке прогресс новее, чем на этом устройстве (${fmtN(sync.cloudXp)} XP против ${fmtN(PG.profile.xp)}). Облако не перезаписано. <button class="btn small" id="pf-pull">↓ Загрузить из облака</button> <button class="btn small" id="pf-push">↑ Оставить этот</button>`;
  if (sync.state === 'error') return `⚠ Не удалось сохранить: ${escapeHtml(sync.error)}. Повторим автоматически${at ? ` · последнее сохранение: ${at}` : ''}.`;
  return at ? `✓ Сохранено в облако: ${at}` : 'Ещё не сохранялось — сервер может просыпаться до минуты.';
}
// загрузить сохранение из облака по коду и перезапустить игру
async function applyCloud(code, out) {
  const r = await api.restore(code);
  if (!r.save || !r.save.profile) throw new Error('В облаке нет сохранения для этого кода');
  syncBlocked = true; clearTimeout(syncTimer); // не перетираем облако старым прогрессом перед перезагрузкой
  const sv = r.save; sv.profile.cloud = { id: r.id, token: code }; sv.profile.cloudAt = Date.now();
  localStorage.setItem('ed_profile', JSON.stringify(sv.profile)); localStorage.setItem('ed_profile_bak', JSON.stringify(sv.profile));
  if (sv.records) store.set('records', sv.records);
  if (sv.sel) store.set('sel', sv.sel);
  if (r.name) { settings.name = r.name; saveSettings(); }
  if (out) out('✓ Прогресс восстановлен, перезапускаем…');
  location.reload();
}

// ---------- ежедневная награда ----------
function showDaily() {
  if (!PG.dailyAvailable()) return;
  const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  const day = PG.profile.daily.last === y ? (PG.profile.daily.streak % 7) + 1 : 1;
  $('daily-days').innerHTML = PG.DAILY.map(([c, x], i) => `<div class="dday ${i + 1 < day ? 'got' : i + 1 === day ? 'now' : ''}"><small>День ${i + 1}</small><b>${fmtN(c)} 💰</b><small>+${x} XP</small></div>`).join('');
  $('daily').classList.remove('hidden');
}
$('daily-claim').addEventListener('click', () => {
  const r = PG.claimDaily(); audio.init(); audio.score();
  $('daily').classList.add('hidden');
  if (r) showMsg(`+${fmtN(r.coins)} 💰  +${r.xp} XP  ·  день ${r.day}`, 2.2, '#ffcc00');
  PG.checkAchievements(); renderWallet(); cloudSync();
});

// ---------- профиль ----------
let remoteProfile = null;
function statGrid(items) { return `<div class="pgrid">${items.map(([n, v]) => `<div><small>${n}</small><b>${v}</b></div>`).join('')}</div>`; }
function renderProfile() {
  const st = PG.profile.stats, lv = PG.level(), xp = PG.profile.xp, a = PG.xpForLevel(lv), b = PG.xpForLevel(lv + 1);
  const winRate = st.wins + st.losses ? Math.round(st.wins / (st.wins + st.losses) * 100) + '%' : '—';
  const rating = remoteProfile && Number.isFinite(remoteProfile.rating) ? remoteProfile.rating : PG.profile.rating;
  const modes = Object.entries(st.modes).sort((x, y) => y[1].races - x[1].races);
  const hist = (remoteProfile && remoteProfile.online && remoteProfile.online.history) || [];
  $('profile-body').innerHTML = `
    <label class="opt">Никнейм <input type="text" id="pf-name" maxlength="16" value="${escapeHtml(settings.name || '')}" placeholder="Игрок" /></label>
    <div class="pf-level"><b>Уровень ${lv}</b>${lv < PG.MAX_LEVEL ? `<span>${fmtN(xp - a)} / ${fmtN(b - a)} XP</span>` : '<span>максимум!</span>'}<div class="xpbar big"><i style="width:${lv < PG.MAX_LEVEL ? Math.round((xp - a) / (b - a) * 100) : 100}%"></i></div></div>
    ${statGrid([['Монеты', fmtN(PG.profile.money) + ' 💰'], ['Рейтинг', rating != null ? fmtN(rating) + (remoteProfile && remoteProfile.ratingRank ? ` · #${remoteProfile.ratingRank}` : '') : '—'], ['Победы', fmtN(st.wins)], ['Заезды', fmtN(st.races)],
      ['Поражения', fmtN(st.losses)], ['Процент побед', winRate], ['Лучший результат', fmtN(st.bestScore)], ['Лучший дрифт', fmtN(st.bestDrift)],
      ['Макс. скорость', speedStr(st.maxSpeed)], ['Дистанция', (st.distance / 1000).toFixed(1) + ' км'], ['Машины', `${PG.profile.owned.length} / ${CARS.length}`], ['Достижения', `${Object.keys(PG.profile.ach).length} / ${PG.ACHIEVEMENTS.length}`],
      ['Онлайн-заезды', fmtN(remoteProfile ? remoteProfile.matches : st.online)], ['Онлайн-победы', fmtN(remoteProfile ? remoteProfile.wins : st.onlineWins)]])}
    <h3>По режимам</h3>
    ${modes.length ? `<table class="ptable"><tr><th>Режим</th><th>Заезды</th><th>Победы</th><th>Лучший</th><th>Км</th></tr>${modes.map(([id, m]) => `<tr><td>${MODE_NAME(id)}</td><td>${m.races}</td><td>${m.wins}</td><td>${fmtN(m.best)}</td><td>${((m.dist || 0) / 1000).toFixed(1)}</td></tr>`).join('')}</table>` : '<p class="hint">Пока нет заездов.</p>'}
    ${hist.length ? `<h3>История онлайн-заездов</h3><table class="ptable"><tr><th>Режим</th><th>Карта</th><th>Место</th><th>Рейтинг</th></tr>${hist.slice(0, 15).map((h) => `<tr><td>${MODE_NAME(h.mode)}</td><td>${escapeHtml(MAPS[h.map] ? MAPS[h.map].name : String(h.map))}</td><td>${h.place}/${h.of}</td><td>${h.ratingDelta >= 0 ? '+' : ''}${h.ratingDelta} → ${h.rating}</td></tr>`).join('')}</table>` : ''}
    <h3>Сохранение прогресса</h3>
    <p class="hint">Прогресс сохраняется в облако автоматически. Запиши код восстановления — по нему прогресс возвращается на любом устройстве.</p>
    <div class="hint" id="pf-sync">${syncInfoHtml()}</div>
    <div class="row wrap">
      <button class="btn small" id="pf-code">🔑 Код восстановления</button>
      <button class="btn small" id="pf-restore-open">↺ Восстановить по коду</button>
      <button class="btn small" id="pf-save">☁ Сохранить сейчас</button>
    </div>
    <div class="hidden" id="pf-restore-box">
      <label class="opt">Код с другого устройства <input type="text" id="pf-restore-code" placeholder="XXXX-XXXX-…" autocomplete="off" autocapitalize="characters" spellcheck="false" /></label>
      <div class="row wrap"><button class="btn small accent" id="pf-restore">↺ Восстановить</button></div>
    </div>
    <div class="pf-out" id="pf-out"></div>`;
  $('pf-name').addEventListener('change', (e) => { settings.name = e.target.value.trim().slice(0, 16); saveSettings(); cloudSync(); });
  const out = (html) => { $('pf-out').innerHTML = html; };
  $('pf-code').addEventListener('click', async () => {
    if (!PG.profile.cloud) { out('Создаём облачный профиль…'); await cloudSyncNow(); }
    out(PG.profile.cloud ? `Сохрани этот код — по нему прогресс восстанавливается на любом устройстве. Никому его не показывай:<textarea readonly rows="3">${fmtCode(PG.profile.cloud.token)}</textarea>` : `Сервер недоступен, попробуй позже${sync.error ? ` (${escapeHtml(sync.error)})` : ''}`);
  });
  $('pf-save').addEventListener('click', async () => { out(''); await cloudSyncNow(); });
  // «Восстановить по коду» — на любом устройстве: открывает поле для кода
  $('pf-restore-open').addEventListener('click', () => { $('pf-restore-box').classList.toggle('hidden'); out(''); const i = $('pf-restore-code'); if (!$('pf-restore-box').classList.contains('hidden')) i.focus(); });
  let pending = '';
  $('pf-restore').addEventListener('click', async () => {
    const code = normCode($('pf-restore-code').value);
    if (!code) { out('Вставь код восстановления в поле выше'); return; }
    if (code.length !== 64) { out(`⚠ Код неполный: в нём должно быть 64 символа (0–9, A–F), сейчас ${code.length}. Проверь, что скопировал целиком.`); return; }
    // второе нажатие — подтверждение (без confirm(), он плохо работает на телефоне и в полноэкранном режиме)
    if (pending !== code) { pending = code; out('Текущий прогресс на этом устройстве заменится сохранением из облака. Нажми «Восстановить» ещё раз, чтобы подтвердить.'); return; }
    out('Загружаем… (сервер может просыпаться до минуты)');
    try { await applyCloud(code, out); } catch (e) { pending = ''; out('⚠ ' + escapeHtml(e.message)); }
  });
}
// кнопки в статусе сохранения (перерисовывается без renderProfile) — один делегированный обработчик
$('profile-body').addEventListener('click', async (e) => {
  const out = (html) => { const el = document.getElementById('pf-out'); if (el) el.innerHTML = html; };
  if (e.target.id === 'pf-pull') { try { out('Загружаем…'); await applyCloud(PG.profile.cloud.token, out); } catch (er) { out('⚠ ' + escapeHtml(er.message)); } }
  if (e.target.id === 'pf-push') { out(''); await cloudSyncNow({ force: true }); }
});
async function loadRemoteProfile() {
  if (!PG.profile.cloud) return;
  try { remoteProfile = await api.profile(PG.profile.cloud.id); if (menuScreen === 'profile') renderProfile(); } catch { /* офлайн */ }
}

// ---------- достижения ----------
function renderAch() {
  const done = PG.ACHIEVEMENTS.filter((a) => PG.profile.ach[a.id]).length;
  $('ach-count').textContent = `${done} / ${PG.ACHIEVEMENTS.length}`;
  $('ach-list').innerHTML = PG.ACHIEVEMENTS.map((a) => {
    const p = PG.achProgress(a);
    return `<div class="ach ${p.done ? 'done' : ''}"><div><b>${p.done ? '🏅' : '🔒'} ${a.name}</b><small>${a.desc}</small>
      ${p.done ? '' : `<div class="xpbar"><i style="width:${Math.round(p.cur / p.goal * 100)}%"></i></div><small>${fmtN(p.cur)} / ${fmtN(p.goal)}</small>`}</div>
      <span class="ach-rw">+${fmtN(a.coins)} 💰${a.xp ? `<br/>+${fmtN(a.xp)} XP` : ''}</span></div>`;
  }).join('');
}

// ---------- лидерборд и таблица игроков ----------
const lbView = { board: 'rating', mode: 'drift', map: '', len: '', q: '' };
const BOARDS = [['rating', 'Рейтинг'], ['wins', 'Победы'], ['level', 'Уровень'], ['drift', 'Дрифт'], ['speed', 'Скорость'], ['distance', 'Дистанция'], ['mode', 'По режимам и картам']];
async function renderLeader() {
  const opt = (v, t, cur) => `<option value="${v}" ${String(v) === String(cur) ? 'selected' : ''}>${t}</option>`;
  $('lb-tabs').innerHTML = BOARDS.map(([id, n]) => `<button class="btn small ${lbView.board === id ? 'on' : ''}" data-lb="${id}">${n}</button>`).join('');
  $('lb-filters').innerHTML = lbView.board === 'mode' ? `
    <label>Режим<select data-lf="mode">${[...MODES, FIELD_MODE].map((m) => opt(m.id, m.name, lbView.mode)).join('')}</select></label>
    <label>Карта<select data-lf="map">${opt('', 'Все карты', lbView.map)}${MAPS.map((m) => opt(m.id, m.name, lbView.map)).join('')}</select></label>
    <label>Длина<select data-lf="len">${opt('', 'Любая', lbView.len)}${[0, 5, 10, 15, 20, 25, 30, 40, 50].map((l) => opt(l, l ? l + ' км' : '∞ / полигон', lbView.len)).join('')}</select></label>` : '';
  $('lb-tabs').querySelectorAll('[data-lb]').forEach((b) => b.addEventListener('click', () => { audio.click(); lbView.board = b.dataset.lb; lbView.q = ''; $('lb-search').value = ''; renderLeader(); }));
  $('lb-filters').querySelectorAll('[data-lf]').forEach((el) => el.addEventListener('change', () => { lbView[el.dataset.lf] = el.value; renderLeader(); }));
  const box = $('lb-table');
  box.innerHTML = '<p class="hint">Загрузка… (бесплатный сервер может просыпаться до минуты)</p>';
  try {
    api.setBase(apiBase(serverUrl()));
    let rows, me = null;
    if (lbView.q) rows = (await api.search(lbView.q)).rows || [];
    else {
      const params = { board: lbView.board, limit: 100 };
      if (lbView.board === 'mode') { params.mode = lbView.mode; if (lbView.map) params.map = lbView.map; if (lbView.len !== '') params.len = lbView.len; }
      if (PG.profile.cloud) params.token = PG.profile.cloud.token;
      const r = await api.leaderboard(params); rows = r.rows || []; me = r.me;
    }
    if (!rows.length) { box.innerHTML = '<p class="hint">Пока пусто — сыграй и попади в таблицу первым!</p>'; return; }
    const myId = PG.profile.cloud && PG.profile.cloud.id;
    box.innerHTML = `<table class="ptable lb"><tr><th>#</th><th>Игрок</th><th>Ур.</th><th>Рейтинг</th><th>Победы</th><th>Лучшее</th></tr>${rows.map((r, i) => `<tr class="${String(r.id) === String(myId) ? 'me' : ''}" data-pid="${escapeHtml(r.id)}"><td>${r.rank ?? i + 1}</td><td>${escapeHtml(r.name)}</td><td>${r.level ?? '—'}</td><td>${r.rating != null ? fmtN(r.rating) : '—'}</td><td>${fmtN(r.wins)}</td><td>${escapeHtml(r.bestLabel ?? (r.best != null ? fmtN(r.best) : '—'))}</td></tr>`).join('')}</table>${me && me.rank ? `<p class="hint">Твоё место: ${me.rank}</p>` : ''}`;
    box.querySelectorAll('[data-pid]').forEach((tr) => tr.addEventListener('click', () => openPlayer(tr.dataset.pid)));
  } catch (e) { box.innerHTML = `<p class="hint">⚠ ${escapeHtml(e.message)}</p>`; }
}
$('lb-search').addEventListener('change', (e) => { lbView.q = e.target.value.trim(); renderLeader(); });
async function openPlayer(id) {
  const pv = $('player-view');
  pv.classList.remove('hidden');
  $('pv-body').innerHTML = '<p class="hint">Загрузка…</p>';
  try {
    const p = await api.profile(id), s = p.stats || {};
    const hist = (p.online && p.online.history) || [];
    const ms = Object.entries((p.online && p.online.modeStats) || {});
    $('pv-body').innerHTML = `<h2>${escapeHtml(p.name)}</h2>
      ${statGrid([['Уровень', p.level ?? s.level ?? '—'], ['Рейтинг', p.rating != null ? fmtN(p.rating) + (p.ratingRank ? ` · #${p.ratingRank}` : '') : '—'], ['Победы', fmtN(p.wins)], ['Матчи', fmtN(p.matches)],
        ['Поражения', fmtN(p.losses)], ['Процент побед', p.winRate != null ? Math.round(p.winRate * (p.winRate <= 1 ? 100 : 1)) + '%' : '—'], ['Лучший дрифт', fmtN(s.bestDrift)], ['Макс. скорость', speedStr(s.maxSpeed || 0)],
        ['Дистанция', ((s.distance || 0) / 1000).toFixed(1) + ' км'], ['Машины', `${s.carsOwned ?? '—'} / ${s.carsTotal ?? CARS.length}`], ['Достижения', `${s.achievements ?? '—'} / ${s.achievementsTotal ?? PG.ACHIEVEMENTS.length}`], ['Заезды (всего)', fmtN(s.races)]])}
      ${ms.length ? `<h3>Онлайн по режимам</h3><table class="ptable"><tr><th>Режим</th><th>Матчи</th><th>Победы</th><th>Лучший</th></tr>${ms.map(([k, v]) => `<tr><td>${MODE_NAME(k)}</td><td>${v.matches ?? v.races ?? 0}</td><td>${v.wins ?? 0}</td><td>${fmtN(v.best)}</td></tr>`).join('')}</table>` : ''}
      ${(p.records || []).length ? `<h3>Лучшие результаты</h3><table class="ptable"><tr><th>Режим</th><th>Карта</th><th>Длина</th><th>Результат</th></tr>${p.records.slice(0, 12).map((r) => `<tr><td>${MODE_NAME(r.mode)}</td><td>${escapeHtml(MAP_NAME(r.map))}</td><td>${lenLabel(r.mode, r.len)}</td><td>${r.time && byTime(r.mode, r.len) ? fmtTime(r.time) : fmtN(r.score)}</td></tr>`).join('')}</table>` : ''}
      ${hist.length ? `<h3>Последние онлайн-заезды</h3><table class="ptable"><tr><th>Режим</th><th>Место</th><th>Рейтинг</th></tr>${hist.slice(0, 10).map((h) => `<tr><td>${MODE_NAME(h.mode)}</td><td>${h.place}/${h.of}</td><td>${h.ratingDelta >= 0 ? '+' : ''}${h.ratingDelta} → ${h.rating}</td></tr>`).join('')}</table>` : ''}`;
  } catch (e) { $('pv-body').innerHTML = `<p class="hint">⚠ ${escapeHtml(e.message)}</p>`; }
}
$('pv-close').addEventListener('click', () => { audio.click(); $('player-view').classList.add('hidden'); });

// ======================= повтор заезда (Replay) =======================
const RP = { pl: null, model: null, t: 0, speed: 1, paused: false, from: 'over', cam: 0, ch: 0, tv: null, rec: null, sliding: false };
const RP_CAMS = ['Камера: сзади', 'Камера: кино', 'Камера: ТВ-трансляция', 'Камера: сверху'];
function replayWorld(rec) {
  const mi = Math.max(0, MAPS.findIndex((m) => m.id === rec.map));
  buildWorld(mi, rec.seed, { finishIdx: finishIdxFor(rec.len, rec.mode), profile: rec.mode === 'drag' ? 'drag' : rec.mode === 'hill' ? 'hill' : '' });
  W.player.model.root.visible = false; // машина из записи может отличаться от выбранной
  RP.model = buildGhostCar(rec, 1);
}
function startReplay(rec, from) {
  if (!rec || !rec.s || !rec.s.length) return;
  audio.init(); audio.silence();
  RP.rec = rec; RP.from = from; RP.pl = new GH.Player(rec); RP.t = 0; RP.speed = 1; RP.paused = false; RP.cam = 0; RP.tv = null;
  if (from === 'over' && G) G.replaying = true;
  replayWorld(rec);
  state = 'replay';
  for (const s of SCREENS) $('menu-' + s).classList.remove('show');
  $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); $('garage-info').classList.add('hidden');
  $('countdown').textContent = '';
  viewShift = { x: 0, y: 0 }; updateViewOffset(); camera.updateProjectionMatrix();
  $('rp-seek').max = RP.pl.duration.toFixed(2);
  $('rp-title').textContent = `🎬 Повтор · ${MAP_NAME(rec.map)} · ${MODE_NAME(rec.mode)}${rec.len ? ` · ${lenLabel(rec.mode, rec.len)}` : ''} · ${(CARS.find((c) => c.id === rec.car) || CARS[0]).name}`;
  $('replay-bar').classList.remove('hidden');
  renderReplayBar();
  updateReplay(0, true);
}
function exitReplay() {
  $('replay-bar').classList.add('hidden');
  if (W && RP.model) { W.group.remove(RP.model.root); disposeModel(RP.model); }
  RP.model = null; RP.pl = null;
  if (RP.from === 'over' && G) {
    // мир пересобран для повтора — возвращаемся к итогам заезда
    W.player.model.root.visible = true;
    state = 'over'; cam.mode = 3; cam.cineT = 0;
    showScreen('over');
  } else {
    showScreen(RP.from === 'setup' ? 'setup' : 'records');
  }
  last = performance.now();
}
function seekReplay(t) {
  t = clamp(t, 0, RP.pl.duration);
  const p = RP.pl.at(t);
  // трасса позади удаляется — для перемотки назад строим её заново
  if (p.idx < W.track.base + 4) { W.group.remove(RP.model.root); disposeModel(RP.model); replayWorld(RP.rec); }
  RP.t = t; RP.tv = null;
  updateReplay(0, true);
}
function renderReplayBar() {
  $('rp-play').textContent = RP.paused ? '▶' : '⏸';
  $('rp-speed').textContent = `×${RP.speed}`;
  $('rp-cam').textContent = '🎥 ' + RP_CAMS[RP.cam].replace('Камера: ', '');
}
function updateReplay(dt, instant = false) {
  if (!RP.pl) return;
  if (!RP.paused && !RP.sliding) RP.t += dt * RP.speed;
  if (RP.t >= RP.pl.duration) { RP.t = RP.pl.duration; if (!RP.paused) { RP.paused = true; renderReplayBar(); } }
  const p = RP.pl.at(RP.t);
  W.track.update(p.idx);
  placePoseModel(RP.model, p, dt * RP.speed);
  const d = W.sunDir;
  W.sun.position.set(p.x + d.x * 90, p.roadY + d.y * 90, p.z + d.z * 90);
  W.sun.target.position.set(p.x, p.roadY, p.z);
  W.farPlane.position.set(p.x, p.roadY - 14, p.z);
  if (W.snow) W.snow.update(dt, camera);
  replayCamera(dt, p, instant);
  W.sky.position.copy(camera.position);
  if (!RP.sliding) $('rp-seek').value = RP.t.toFixed(2);
  setText('rp-time', `${fmtTime(RP.t)} / ${fmtTime(RP.pl.duration)} · ${speedStr(p.speed * 3.6)}`);
}
function replayCamera(dt, p, instant) {
  const fx = Math.sin(p.h), fz = Math.cos(p.h);
  const k = instant ? 1 : 1 - Math.exp(-dt * 6);
  let fov = 58;
  if (RP.cam === 0) { // сзади (как в заезде)
    RP.ch = instant ? p.h : RP.ch + angDiff(p.h, RP.ch) * k;
    camera.position.set(p.x - Math.sin(RP.ch) * 5.6, p.roadY + 2.0, p.z - Math.cos(RP.ch) * 5.6);
    camera.lookAt(p.x + fx * 2.5, p.roadY + 1.0, p.z + fz * 2.5);
    fov = 60 + Math.min(9, p.speed * 0.12);
  } else if (RP.cam === 1) { // кино: облёт с разных сторон
    cam.cineT -= dt;
    if (cam.cineT <= 0 || instant) { cam.cineT = 3.5 + Math.random() * 3; cam.cineA = (Math.random() * 2 - 1) * 2.4; cam.cineD = 6 + Math.random() * 6; cam.cineH = 0.6 + Math.random() * 3; }
    const a = p.h + Math.PI + cam.cineA;
    const des = new THREE.Vector3(p.x + Math.sin(a) * cam.cineD, p.roadY + cam.cineH, p.z + Math.cos(a) * cam.cineD);
    if (instant) camera.position.copy(des); else camera.position.lerp(des, 1 - Math.exp(-dt * 2.5));
    camera.lookAt(p.x, p.roadY + 0.8, p.z);
    fov = 52;
  } else if (RP.cam === 2) { // ТВ: камера стоит у дороги и провожает машину, потом переставляется вперёд
    const dist = RP.tv ? Math.hypot(RP.tv.x - p.x, RP.tv.z - p.z) : Infinity;
    const passed = RP.tv && ((RP.tv.x - p.x) * fx + (RP.tv.z - p.z) * fz) < -25;
    if (!RP.tv || dist > 140 || passed) {
      const ahead = p.idx + Math.round((45 + Math.random() * 35) / SP);
      W.track.ensure(ahead + 2);
      const q = W.track.P(ahead), side = Math.random() < 0.5 ? 1 : -1, off = W.track.hw + 4 + Math.random() * 5;
      RP.tv = { x: q.x + (q.lx || 0) * off * side, z: q.z + (q.lz || 0) * off * side, y: q.y + 1.6 + Math.random() * 2.5 };
    }
    camera.position.set(RP.tv.x, RP.tv.y, RP.tv.z);
    camera.lookAt(p.x, p.roadY + 0.7, p.z);
    fov = clamp(2400 / Math.max(8, Math.hypot(RP.tv.x - p.x, RP.tv.z - p.z)) , 14, 60);
  } else { // сверху
    RP.ch = instant ? p.h : RP.ch + angDiff(p.h, RP.ch) * k * 0.5;
    camera.position.set(p.x - Math.sin(RP.ch) * 6, p.roadY + 22, p.z - Math.cos(RP.ch) * 6);
    camera.lookAt(p.x + fx * 4, p.roadY, p.z + fz * 4);
    fov = 55;
  }
  camera.fov += (fov - camera.fov) * (instant ? 1 : Math.min(1, dt * 3));
  camera.updateProjectionMatrix();
}
$('rp-play').addEventListener('click', () => { audio.click(); if (RP.t >= RP.pl.duration) seekReplay(0); RP.paused = !RP.paused; renderReplayBar(); });
$('rp-restart').addEventListener('click', () => { audio.click(); seekReplay(0); RP.paused = false; renderReplayBar(); });
$('rp-speed').addEventListener('click', () => { audio.click(); const S = [0.25, 0.5, 1, 2, 4]; RP.speed = S[(S.indexOf(RP.speed) + 1) % S.length]; renderReplayBar(); });
$('rp-cam').addEventListener('click', () => { audio.click(); RP.cam = (RP.cam + 1) % RP_CAMS.length; RP.tv = null; renderReplayBar(); updateReplay(0, true); });
$('rp-photo').addEventListener('click', () => { audio.click(); RP.paused = true; renderReplayBar(); enterPhoto(); });
$('rp-exit').addEventListener('click', () => { audio.click(); exitReplay(); });
$('rp-seek').addEventListener('input', (e) => { RP.sliding = true; seekReplay(+e.target.value); });
$('rp-seek').addEventListener('change', () => { RP.sliding = false; });
$('btn-replay').addEventListener('click', () => { audio.click(); if (G && G.lastRec) startReplay(G.lastRec, 'over'); });

// ======================= фоторежим =======================
// свободная камера (или облёт машины), скрытие интерфейса, фильтры и снимок экрана в PNG
const PH = { prev: null, prevScreen: null, mode: 'orbit', yaw: 0, pitch: 0.2, r: 6, fov: 50, roll: 0, target: new THREE.Vector3(), pos: new THREE.Vector3(), look: { yaw: 0, pitch: 0 }, ui: true };
const PH_FILTERS = { none: 'Без фильтра', vivid: 'Сочный', bw: 'Ч/Б', sepia: 'Сепия', cold: 'Холодный', warm: 'Тёплый', noir: 'Нуар' };
const PH_CSS = { none: '', vivid: 'saturate(1.45) contrast(1.08)', bw: 'grayscale(1) contrast(1.1)', sepia: 'sepia(0.85) contrast(1.05)', cold: 'saturate(1.1) hue-rotate(-12deg) brightness(1.03)', warm: 'sepia(0.3) saturate(1.3) hue-rotate(-8deg)', noir: 'grayscale(1) contrast(1.6) brightness(0.9)' };
function photoSubject() {
  if (state === 'replay' && RP.model) return RP.model.root.position;
  if (W && W.player) return W.player.model.root.position;
  return new THREE.Vector3();
}
function enterPhoto() {
  if (!W || state === 'photo') return;
  PH.prev = state; PH.prevScreen = menuScreen;
  PH.target.copy(photoSubject()); PH.target.y += 0.6;
  // начинаем с текущего вида камеры
  const off = camera.position.clone().sub(PH.target);
  PH.r = clamp(off.length(), 2.5, 30); PH.yaw = Math.atan2(off.x, off.z); PH.pitch = clamp(Math.asin(off.y / (off.length() || 1)), -0.1, 1.45);
  PH.pos.copy(camera.position);
  const dir = new THREE.Vector3(); camera.getWorldDirection(dir);
  PH.look.yaw = Math.atan2(dir.x, dir.z); PH.look.pitch = Math.asin(clamp(dir.y, -1, 1));
  PH.fov = camera.fov; PH.roll = 0;
  state = 'photo';
  for (const s of SCREENS) $('menu-' + s).classList.remove('show');
  $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); $('garage-info').classList.add('hidden'); $('replay-bar').classList.add('hidden');
  viewShift = { x: 0, y: 0 }; updateViewOffset(); camera.updateProjectionMatrix();
  document.body.classList.add('photo');
  $('photo-bar').classList.remove('hidden'); PH.ui = true;
  $('ph-fov').value = Math.round(PH.fov); $('ph-roll').value = 0;
  $('ph-filter').innerHTML = Object.entries(PH_FILTERS).map(([k, n]) => `<option value="${k}" ${k === settings.photoFilter ? 'selected' : ''}>${n}</option>`).join('');
  canvas.style.filter = PH_CSS[settings.photoFilter] || '';
  renderPhotoBar();
}
function exitPhoto() {
  if (state !== 'photo') return;
  document.body.classList.remove('photo');
  $('photo-bar').classList.add('hidden'); $('ph-show').classList.add('hidden');
  canvas.style.filter = '';
  state = PH.prev;
  if (state === 'paused') { $('menu-pause').classList.add('show'); menuScreen = 'pause'; updateCamera(0.016, true); }
  else if (state === 'replay') { $('replay-bar').classList.remove('hidden'); updateReplay(0, true); }
  else if (state === 'over') showScreen('over');
  else if (state === 'menu') { showScreen(PH.prevScreen || 'garage'); }
  last = performance.now();
}
function renderPhotoBar() {
  $('ph-mode').textContent = PH.mode === 'orbit' ? '🔄 Облёт машины' : '🕹 Свободная камера';
  $('ph-help').textContent = PH.mode === 'orbit'
    ? (isTouch ? 'Тяни пальцем — вращать, щипок — приблизить' : 'Мышь — вращать, колесо — приблизить, H — скрыть панель, Esc — выход')
    : (isTouch ? 'Тяни пальцем — смотреть, щипок — лететь вперёд/назад' : 'WASD/стрелки — лететь, E/Q — вверх/вниз, Shift — быстрее, мышь — смотреть, H — скрыть панель');
}
function setPhotoUI(on) { PH.ui = on; $('photo-bar').classList.toggle('hidden', !on); $('ph-show').classList.toggle('hidden', on); }
function updatePhoto(dt) {
  if (PH.mode === 'orbit') {
    const cp = Math.cos(PH.pitch);
    camera.position.set(PH.target.x + Math.sin(PH.yaw) * PH.r * cp, PH.target.y + Math.sin(PH.pitch) * PH.r, PH.target.z + Math.cos(PH.yaw) * PH.r * cp);
    const minY = (W.track.isField ? W.track.heightAt(camera.position.x, camera.position.z) : PH.target.y - 0.6) + 0.15;
    if (camera.position.y < minY) camera.position.y = minY;
    camera.up.set(0, 1, 0);
    camera.lookAt(PH.target);
  } else {
    const k = input.down('ShiftLeft', 'ShiftRight') ? 24 : 8;
    const f = new THREE.Vector3(Math.sin(PH.look.yaw) * Math.cos(PH.look.pitch), Math.sin(PH.look.pitch), Math.cos(PH.look.yaw) * Math.cos(PH.look.pitch));
    const r = new THREE.Vector3(-Math.cos(PH.look.yaw), 0, Math.sin(PH.look.yaw));
    const mv = new THREE.Vector3();
    if (input.down('KeyW', 'ArrowUp')) mv.add(f); if (input.down('KeyS', 'ArrowDown')) mv.sub(f);
    if (input.down('KeyD', 'ArrowRight')) mv.add(r); if (input.down('KeyA', 'ArrowLeft')) mv.sub(r);
    if (input.down('KeyE', 'Space')) mv.y += 1; if (input.down('KeyQ', 'KeyC')) mv.y -= 1;
    if (mv.lengthSq()) PH.pos.addScaledVector(mv.normalize(), k * dt);
    // не даём улететь далеко от машины (трасса вокруг дальше не построена)
    const off = PH.pos.clone().sub(PH.target); if (off.length() > 120) PH.pos.copy(PH.target).addScaledVector(off.normalize(), 120);
    camera.position.copy(PH.pos);
    camera.up.set(0, 1, 0);
    camera.lookAt(PH.pos.clone().add(f));
  }
  if (PH.roll) camera.rotateZ(PH.roll);
  camera.fov = PH.fov; camera.updateProjectionMatrix();
  if (W.snow) W.snow.update(dt * 0.25, camera);
  W.sky.position.copy(camera.position);
}
{
  const pts = new Map(); let pinch = 0, moved = 0;
  canvas.addEventListener('pointerdown', (e) => { if (state !== 'photo') return; pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); canvas.setPointerCapture(e.pointerId); moved = 0; });
  canvas.addEventListener('pointermove', (e) => {
    const p = pts.get(e.pointerId); if (!p || state !== 'photo') return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y; moved += Math.abs(dx) + Math.abs(dy);
    if (pts.size === 1) {
      if (PH.mode === 'orbit') { PH.yaw -= dx * 0.008; PH.pitch = clamp(PH.pitch + dy * 0.006, -0.05, 1.45); }
      else { PH.look.yaw -= dx * 0.004; PH.look.pitch = clamp(PH.look.pitch - dy * 0.004, -1.5, 1.5); }
    }
    p.x = e.clientX; p.y = e.clientY;
    if (pts.size === 2) {
      const [a, b] = [...pts.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch) {
        if (PH.mode === 'orbit') PH.r = clamp(PH.r * pinch / d, 2, 40);
        else { const f = new THREE.Vector3(Math.sin(PH.look.yaw) * Math.cos(PH.look.pitch), Math.sin(PH.look.pitch), Math.cos(PH.look.yaw) * Math.cos(PH.look.pitch)); PH.pos.addScaledVector(f, (d - pinch) * 0.05); }
      }
      pinch = d;
    }
  });
  const up = (e) => {
    if (state === 'photo' && pts.size === 1 && moved < 6 && !PH.ui) setPhotoUI(true); // тап по экрану возвращает панель
    pts.delete(e.pointerId); if (pts.size < 2) pinch = 0;
  };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', (e) => {
    if (state !== 'photo') return; e.preventDefault();
    if (PH.mode === 'orbit') PH.r = clamp(PH.r * Math.exp(e.deltaY * 0.0012), 2, 40);
    else { PH.fov = clamp(PH.fov * Math.exp(e.deltaY * 0.0008), 15, 100); $('ph-fov').value = Math.round(PH.fov); }
  }, { passive: false });
  addEventListener('keydown', (e) => {
    if (state !== 'photo' || (e.target && e.target.tagName === 'INPUT')) return;
    if (e.code === 'KeyH') setPhotoUI(!PH.ui);
    if (e.code === 'KeyF' || e.code === 'F12') { e.preventDefault(); takePhoto(); }
  });
}
// снимок: рендерим кадр в повышенном разрешении (до 2x, не больше 4K по ширине), применяем фильтр и скачиваем PNG
function takePhoto() {
  const oldPR = renderer.getPixelRatio();
  const pr = Math.min(oldPR * 2, Math.max(oldPR, 3840 / innerWidth));
  try {
    if (pr > oldPR + 0.01) { renderer.setPixelRatio(pr); resize(); }
    if (composer && W.map.night) composer.render(); else renderer.render(scene, camera);
    const src = renderer.domElement;
    const out = document.createElement('canvas'); out.width = src.width; out.height = src.height;
    const ctx = out.getContext('2d');
    ctx.filter = PH_CSS[settings.photoFilter] || 'none';
    ctx.drawImage(src, 0, 0);
    ctx.filter = 'none';
    // небольшая подпись в углу
    const fs = Math.round(out.height * 0.022);
    ctx.font = `700 ${fs}px Segoe UI, Arial`; ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.textAlign = 'right';
    ctx.fillText('ENDLESS DRIFT', out.width - fs, out.height - fs);
    out.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `endless-drift-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.png`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    }, 'image/png');
    const fl = $('ph-flash'); fl.classList.remove('go'); void fl.offsetWidth; fl.classList.add('go');
    audio.click();
  } finally {
    if (pr > oldPR + 0.01) { renderer.setPixelRatio(oldPR); resize(); }
  }
}
$('ph-shot').addEventListener('click', () => takePhoto());
$('ph-mode').addEventListener('click', () => {
  audio.click();
  if (PH.mode === 'orbit') { // свободная камера стартует из текущего вида
    PH.mode = 'free'; PH.pos.copy(camera.position);
    const dir = new THREE.Vector3(); camera.getWorldDirection(dir); PH.look.yaw = Math.atan2(dir.x, dir.z); PH.look.pitch = Math.asin(clamp(dir.y, -1, 1));
  } else {
    PH.mode = 'orbit'; const off = camera.position.clone().sub(PH.target);
    PH.r = clamp(off.length(), 2, 40); PH.yaw = Math.atan2(off.x, off.z); PH.pitch = clamp(Math.asin(off.y / (off.length() || 1)), -0.05, 1.45);
  }
  renderPhotoBar();
});
$('ph-fov').addEventListener('input', (e) => { PH.fov = +e.target.value; });
$('ph-roll').addEventListener('input', (e) => { PH.roll = +e.target.value * Math.PI / 180; });
$('ph-filter').addEventListener('change', (e) => { settings.photoFilter = e.target.value; saveSettings(); canvas.style.filter = PH_CSS[settings.photoFilter] || ''; });
$('ph-hide').addEventListener('click', () => setPhotoUI(false));
$('ph-show').addEventListener('click', () => setPhotoUI(true));
$('ph-exit').addEventListener('click', () => { audio.click(); exitPhoto(); });
$('btn-photo').addEventListener('click', () => { audio.click(); enterPhoto(); });
$('btn-over-photo').addEventListener('click', () => { audio.click(); enterPhoto(); });
$('btn-garage-photo').addEventListener('click', () => { audio.click(); enterPhoto(); });

// пауза / итоги
function pause() { if (state !== 'race' && state !== 'countdown') return; G.prevState = state; state = 'paused'; showScreen('pause'); audio.update(W.player.veh, W.player.veh.spec, 0, 0, false, 0, false); }
function resume() { if (state !== 'paused') return; state = G.prevState; showScreen(null); last = performance.now(); }
$('btn-resume').addEventListener('click', () => { audio.click(); resume(); });
$('btn-restart').addEventListener('click', () => { audio.click(); startRace(); });
$('btn-tomenu').addEventListener('click', () => {
  audio.click();
  if (G && G.online) { if (state !== 'over') net.finish(false, G.elapsed, G.score); G = null; showScreen(net.connected ? 'lobby' : 'online'); }
  else showScreen('main');
});
$('btn-again').addEventListener('click', () => { audio.click(); startRace(); });
$('btn-over-menu').addEventListener('click', () => { audio.click(); const on = G && G.online; G = null; showScreen(on ? (net.connected ? 'lobby' : 'online') : 'main'); });

function handleEvents(evs) {
  for (const e of evs) {
    if (state === 'photo') { if (e === 'pause') exitPhoto(); continue; }
    if (state === 'replay') {
      if (e === 'pause') exitReplay();
      if (e === 'camera') $('rp-cam').click();
      continue;
    }
    if (e === 'mute') { audio.setVolume(audio.volume > 0 ? 0 : settings.vol); }
    if (e === 'pause') { if (state === 'paused') resume(); else pause(); }
    if (state === 'race' || state === 'countdown') {
      if (e === 'camera') {
        cam.mode = (cam.mode + 1) % 4; updateCamera(0.016, true);
        const h = $('cam-hint'); h.textContent = CAM_NAMES[cam.mode]; h.classList.add('show');
        clearTimeout(handleEvents._t); handleEvents._t = setTimeout(() => h.classList.remove('show'), 1200);
      }
      if (e === 'reset' && state === 'race') {
        const { veh } = W.player;
        const p = W.track.isField ? { x: veh.x, z: veh.z, h: veh.h, y: W.track.heightAt(veh.x, veh.z) } : W.track.sample(Math.max(W.track.base + 2, veh.idx));
        veh.reset(p.x, p.z, p.h); veh.idx = Math.round(veh.idx); veh.roadY = p.y; veh.px = undefined; veh.ph = undefined; veh.pY = undefined; veh.pz = undefined;
        W.skids.last = [null, null, null, null];
        showMsg('НА ТРАССУ', 0.8);
      }
    }
    if (e === 'enter' && state === 'menu' && menuScreen === 'setup') startRace();
  }
}

// Оптимизация: новые куски трассы неподвижны — один раз считаем их матрицы и больше не пересчитываем каждый кадр
const frozen = new WeakSet();
function freezeStatic() {
  const root = W && W.track && W.track.root;
  if (!root) return;
  for (const ch of root.children) {
    if (frozen.has(ch) || ch === W.track.sea || ch.userData.dynamic) continue; // море и анимированное двигаются
    frozen.add(ch);
    ch.updateMatrixWorld(true);
    ch.traverse((o) => { o.matrixAutoUpdate = false; });
  }
}

// ======================= главный цикл =======================
let last = performance.now();
const fpsMeter = { frames: 0, t: performance.now(), value: 0 };
function frame(now) {
  requestAnimationFrame(frame);
  // ограничение FPS (0 = без ограничений; выше частоты монитора браузер всё равно не рисует)
  if (settings.fps > 0 && now - last < 1000 / settings.fps - 0.7) return;
  // в меню машина стоит — хватает 60 кадров/с (меньше греется телефон и ноутбук)
  if (state === 'menu' && now - last < 1000 / 60 - 0.7) return;
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  fpsMeter.frames++;
  if (now - fpsMeter.t >= 500) {
    fpsMeter.value = Math.round(fpsMeter.frames * 1000 / (now - fpsMeter.t)); fpsMeter.frames = 0; fpsMeter.t = now;
    const el = $('fps'); el.classList.toggle('hidden', !settings.showFps); if (settings.showFps) el.textContent = `${fpsMeter.value} FPS`;
  }
  const evs = input.takeEvents();
  handleEvents(evs);
  if (!W) return;
  if (state === 'menu') {
    audio.silence(); // после заезда мотор в меню больше не гудит
    W.track.update(W.player.veh.idx);
    placePlayerModel(dt);
    W.sun.position.set(W.player.veh.x + W.sunDir.x * 90, W.player.veh.roadY + W.sunDir.y * 90, W.player.veh.z + W.sunDir.z * 90);
    W.sun.target.position.set(W.player.veh.x, W.player.veh.roadY, W.player.veh.z);
    W.farPlane.position.set(W.player.veh.x, W.player.veh.roadY - 14, W.player.veh.z);
    if (W.snow) W.snow.update(dt, camera);
    menuCamera(dt, menuScreen === 'garage' || menuScreen === 'tune');
    W.sky.position.copy(camera.position);
  } else if (state === 'countdown' || state === 'race' || state === 'over') {
    G._events = evs;
    updateRace(dt);
  }
  else if (state === 'replay') updateReplay(dt);
  else if (state === 'photo') updatePhoto(dt);
  updateDynRes(dt);
  freezeStatic();
  // свечение (bloom) заметно только ночью: днём рисуем напрямую, без лишних проходов постобработки
  if (composer && W.map.night) composer.render(); else renderer.render(scene, camera);
}

// старт
resize();
enterMenuWorld();
state = 'menu';
showScreen('main');
requestAnimationFrame(frame);

// для отладки/тестов
window.__game = { renderer, get W() { return W; }, get G() { return G; }, get state() { return state; }, startRace, showScreen, sel, settings, cam, net, CARS, camera, scene, PG, finishRace: (f) => finishRace(!!f), MODES,
  tick(dt, n = 1) { for (let i = 0; i < n; i++) { if (state === "countdown" || state === "race" || state === "over") { G._events = []; updateRace(dt); } } } };
