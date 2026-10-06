import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Vehicle } from './vehicle.js';
import { CARS, carStats, carClass, CLASSES } from './cars.js';
import { MAPS } from './maps.js';
import { Track, SP, CP_EVERY } from './track.js';
import { Field } from './field.js';
import { buildCarModel, animateCar, setCarLod } from './carmodel.js';
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

// ======================= режимы =======================
const MODES = [
  { id: 'race', name: 'Гонка', desc: 'Соперники, чекпоинты и таймер. Очки за дистанцию, обгоны и дрифт.', timer: 50, rivals: 5,
    bonus: (n) => Math.max(22, 40 - n * 2) },
  { id: 'drift', name: 'Дрифт', desc: 'Очки за занос. На трассе с финишем итог = очки дрифта + бонус за быстрое время (в онлайне ещё и за место на финише).', timer: 60, rivals: 0,
    bonus: (n) => Math.max(26, 42 - n * 1.5) },
  { id: 'free', name: 'Свободная езда', desc: 'Без таймера и давления. Катайся и тренируй дрифт.', timer: 0, rivals: 3,
    bonus: () => 0 },
];
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
const settings = Object.assign({ vol: 0.8, music: true, assist: true, manual: false, quality: isTouch ? 0 : 1, camera: 0, units: 'kmh', fps: 0, showFps: false, sfxVol: 0.8, musicVol: 0.3, easy: true, smoke: true, outline: true, autoRes: false, assistMode: 'all', draw: 1 }, store.get('settings', {}));
// миграция: старая галочка «помощь» → режим помощи; авто-разрешение по умолчанию выключено (картинка мылилась)
if (!settings.v3) { settings.v3 = 1; settings.autoRes = false; if (settings.assist === false) settings.assistMode = 'off'; }
if (!settings.handling) settings.handling = settings.easy === false ? 'real' : 'easy';
settings.easy = settings.handling === 'easy';
// len — длина трассы в км (0 = бесконечная); fieldMode — полигон: obst (с препятствиями), clean (чистое поле), flat (чистое и ровное)
const sel = Object.assign({ car: 0, colors: {}, mode: 0, map: 0, len: 10, fieldMode: 'obst' }, store.get('sel', {}));
sel.mm = Object.assign({ mode: 'race', len: 10, size: 5, carRule: 'any' }, sel.mm || {}); // фильтры быстрого матча
if (sel.car >= CARS.length) sel.car = 0;
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
    composer.setPixelRatio(renderer.getPixelRatio());
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
addEventListener('keydown', () => audio.init(), { once: true });

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
    : new Track(group, map, seed, +settings.quality, { finishIdx: opts.finishIdx ?? Infinity, draw: +settings.draw });
  const farPlane = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), new THREE.MeshLambertMaterial({ color: map.ground.far }));
  farPlane.rotation.x = -Math.PI / 2; group.add(farPlane);

  const smokeColor = map.smoke ?? { desert: 0xe6ddd0, snow: 0xffffff, city: 0xb8b8c8 }[map.id];
  const smoke = new Smoke(group, smokeColor, settings.quality > 0 ? 90 : 50);
  const dust = new Smoke(group, map.dust ?? { desert: 0xcf9f6c, snow: 0xf4f8ff, city: 0x77777f }[map.id], 40);
  const skidCol = map.skid ?? (map.id === 'snow' ? 0x7d8898 : 0x0c0c0c);
  const skids = new Skids(group, settings.quality > 0 ? 3000 : 1200, skidCol, skidCol === 0x0c0c0c ? 0.6 : 0.4);
  const snow = map.weather === 'snow' ? new Snowfall(group, settings.quality > 0 ? 2600 : 900) : null;

  W = { map, mapIdx, group, hemi, sun, sunDir: sd, sky, track, farPlane, smoke, dust, skids, snow, rivals: [], player: null };
  applyQuality();
  spawnPlayer(6, -2.8);
}

function carColor(spec) { return spec.colors[sel.colors[spec.id] ?? 0]; }

function spawnPlayer(idx, lat) {
  const spec = CARS[sel.car];
  if (W.player) { W.group.remove(W.player.model.root); }
  const model = buildCarModel(spec, carColor(spec), { night: W.map.night, outline: settings.outline });
  model._tailBase = W.map.night ? 1.2 : 0.35;
    W.group.add(model.root);
  const veh = new Vehicle(spec);
  const p = W.track.P(idx);
  veh.reset(p.x + p.lx * lat, p.z + p.lz * lat, p.h);
  veh.idx = idx; veh.lat = lat; veh.roadY = p.y; veh.slope = 0; veh.roll = 0;
  if (W.track.isField) { W.track.target = veh; veh.odo = 0; }
  if (W.map.night) {
    const hl = new THREE.SpotLight(0xfff1d6, 40, 100, 0.5, 0.6, 1.4);
    hl.position.set(0, 0.8, 2.0); hl.target.position.set(0, 0, 25);
    model.root.add(hl); model.root.add(hl.target);
  }
  W.player = { veh, model };
  placePlayerModel(0);
}

// Интерполяция между шагами физики: картинка плавная при любом FPS, без рывков «вперёд-назад»
function interp() {
  const { veh } = W.player;
  const a = G && veh.px !== undefined ? clamp(G.acc / STEP, 0, 1) : 1;
  const L = (p, c) => (p === undefined ? c : p + (c - p) * a);
  let dh = veh.h - (veh.ph ?? veh.h);
  return { x: L(veh.px, veh.x), z: L(veh.pz, veh.z), h: (veh.ph ?? veh.h) + dh * a, y: L(veh.pY, veh.roadY) };
}
function placePlayerModel(dt) {
  const { veh, model } = W.player;
  const ip = interp();
  model.root.position.set(ip.x, ip.y + 0.03, ip.z);
  model.root.rotation.set(-Math.atan(veh.slope || 0), ip.h, Math.atan(veh.roll || 0), 'YXZ');
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
  const model = buildCarModel(spec, spec.colors[p.color % spec.colors.length], { night: W.map.night, outline: settings.outline });
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
    m.root.position.set(v.x, v.y + 0.03, v.z);
    m.root.rotation.set(-Math.atan(v.slope || 0), v.h, 0, 'YXZ');
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
    const model = buildCarModel(spec, color, { night: W.map.night, outline: settings.outline });
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

function menuCamera(dt, garage) {
  const { veh } = W.player;
  cam.orbit += dt * 0.18;
  const r = garage ? 6.2 : 7.5;
  const a = veh.h + (garage ? 0.75 : Math.PI * 0.75) + Math.sin(cam.orbit) * (garage ? 0.6 : 0.9);
  camera.position.set(veh.x + Math.sin(a) * r, veh.roadY + (garage ? 1.6 : 2.2), veh.z + Math.cos(a) * r);
  camera.fov = 50; camera.updateProjectionMatrix();
  camera.lookAt(veh.x, veh.roadY + 0.7, veh.z);
}

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
  };
}

const finishIdxFor = (lenKm) => (lenKm > 0 ? 6 + Math.round(lenKm * 1000 / SP) : Infinity);
function startRace(opts = {}) {
  audio.init();
  const lenKm = opts.len ?? (MAPS[sel.map].field ? 0 : sel.len);
  buildWorld(sel.map, opts.seed ?? ((Math.random() * 1e6) | 0), { finishIdx: finishIdxFor(lenKm), fieldMode: opts.fieldMode });
  newGame(lenKm);
  G.online = !!opts.online;
  makeBackWall();
  spawnRivals(G.online ? 0 : G.mode.rivals);
  if (opts.onStart) opts.onStart();
  cam.mode = +settings.camera;
  state = 'countdown';
  showScreen(null);
  $('hud').classList.remove('hidden');
  if (isTouch) $('touch').classList.remove('hidden');
  $('hud-mode').textContent = `${G.online ? 'Онлайн · ' : ''}${G.mode.name} · ${W.map.name}${G.finite ? ` · ${G.lenKm} км` : ''}`;
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
  const p = W.track.sample(Math.max(W.track.base + 4, 3, G.maxIdx - BACK_WALL / SP));
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
  const easy = settings.handling === 'easy';
  // помощь руля: везде / только в режиме «Дрифт» (и на полигоне) / выключена
  const am = settings.assistMode;
  const asOn = am === 'all' || (am === 'drift' && (G.mode.id === 'drift' || G.mode.id === 'field'));
  const res = veh.step(STEP, inp, easy
    ? { grip: W.map.grip * 1.12, assist: asOn ? 1.15 : 0, manual: settings.manual, easy: true }
    : { grip: W.map.grip, assist: asOn ? 0.45 : 0, manual: settings.manual, easy: false, real: true });
  if (res.shifted) { audio.shift(); if (res.shifted > 0 && inp.throttle > 0.5 && Math.random() < 0.35) audio.backfire(); }
  inp.shiftUp = inp.shiftDown = false;
  if (track.isField) { fieldStep(veh, track); return; }
  const pr = track.project(veh.x, veh.z, veh.idx);
  veh.idx = pr.idx; veh.lat = pr.lat; veh.roadY = pr.y; veh.slope = pr.slope;
  veh.offroad = Math.abs(pr.lat) > track.hw + 0.3 && Math.abs(pr.k) < 1 / 170;
  veh.trackH = pr.h;
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
      $('countdown').textContent = n > 0 ? n : 'СТАРТ!';
      audio.countdown(n <= 0);
    }
    // можно погазовать на старте
    veh.rpm += ((veh.spec.idle + raw.throttle * veh.spec.redline * 0.75) - veh.rpm) * Math.min(1, dt * 6);
    if (G.cd <= 0.6) { state = 'race'; G.started = true; setTimeout(() => { $('countdown').textContent = ''; }, 700); }
  } else {
    for (const e of evs) { if (e === 'shiftUp') inp.shiftUp = true; if (e === 'shiftDown') inp.shiftDown = true; }
    G.acc += dt;
    let n = 0;
    while (G.acc >= STEP && n < 24) { G.acc -= STEP; physicsStep(inp); n++; }
    if (n === 24) G.acc = 0;
  }
  G.braking = inp.brake > 0.1 && veh.u > 0.5;

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
    if (racing && r.ahead && !isAhead && G.mode.id === 'race') {
      G.overtakes++; showMsg('ОБГОН!  +300', 1.2, '#7cff4f'); audio.score();
    }
    r.ahead = isAhead;
    if (G.finite && veh.idx - r.fi > 170) {
      // на трассе с финишем соперник, отставший больше чем на 340 м, сходит с дистанции (считается позади)
      r.out = true; r.model.root.visible = false; continue;
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
        G.driftTotal += pts; G.bestDrift = Math.max(G.bestDrift, pts);
        if (G.mode.id === 'drift' && !G.finite) G.time += Math.min(8, pts / 1200);
        const el = $('drift-pts'); el.textContent = '+' + pts; el.className = 'drift-pts banked';
        $('drift-info').textContent = pts > 5000 ? 'ЛЕГЕНДАРНЫЙ ДРИФТ!' : pts > 2000 ? 'ОТЛИЧНЫЙ ДРИФТ!' : 'ДРИФТ ЗАСЧИТАН';
        G.driftShowT = 1.3;
        audio.score();
      }
      G.drift = { active: false, pts: 0, mult: 1, time: 0, idle: 0, angle: 0 };
    }
  }

  // --- финиш ---
  if (G.finite && veh.idx >= G.finishIdx) { finishRace(true); return; }

  // --- чекпоинты ---
  if (veh.idx >= G.nextCp && veh.idx < G.finishIdx - 100) {
    G.cpCount++;
    G.nextCp += CP_EVERY;
    if (G.mode.timer && !G.finite) {
      const bonus = Math.round(G.mode.bonus(G.cpCount - 1));
      G.time += bonus;
      showMsg(`ЧЕКПОИНТ  +${bonus} с`, 1.8, '#ffcc00');
    } else showMsg(`ЧЕКПОИНТ ${G.cpCount}`, 1.5, '#ffcc00');
    audio.checkpoint();
  }

  // --- счёт и время ---
  if (G.mode.id === 'race') G.score = Math.floor(G.dist) + G.overtakes * 300 + Math.floor(G.driftTotal / 4);
  else if (G.mode.id === 'drift' || G.mode.id === 'field') G.score = G.driftTotal;
  else G.score = Math.floor(G.dist);
  if (G.mode.timer && !G.finite) {
    G.time -= dt;
    if (G.time <= 0) { G.time = 0; finishRace(); }
  }
  // место в гонке (против ботов или онлайн)
  if (G.mode.id === 'race' && W.rivals.length) G.place = 1 + W.rivals.filter((r) => !r.out && (r.finOrder !== undefined || r.fi > veh.idx)).length;
  if (G.mode.id === 'race' && G.online) {
    let ahead = 0;
    for (const p of net.players.values()) {
      if (!net.racers.includes(p.id)) continue;
      if ((p.fin && p.fin.finished) || (!p.fin && p.vis && p.vis.idx > veh.idx)) ahead++;
    }
    G.place = 1 + ahead;
  }
}

// ключ рекорда: режим + карта (+ длина трассы, если она задана)
const recKey = (modeId, mapId, lenKm) => `${modeId}_${mapId}${lenKm ? '_' + lenKm : ''}`;
// на трассе с финишем в Гонке и Свободной езде рекорд — лучшее время, в Дрифте — очки
const byTime = (modeId, lenKm) => lenKm > 0 && modeId !== 'drift';
function finishRace(finished = false) {
  if (state === 'over') return;
  if (G.drift.active && G.drift.pts > 30) { G.driftTotal += Math.floor(G.drift.pts); G.bestDrift = Math.max(G.bestDrift, Math.floor(G.drift.pts)); }
  if (G.mode.id === 'drift' || G.mode.id === 'field') G.score = G.driftTotal;
  G.finished = finished;
  if (finished && G.mode.id === 'race' && W.rivals.length) G.place = 1 + W.rivals.filter((r) => !r.out && r.finOrder !== undefined).length;
  if (finished && G.mode.id === 'race' && G.online) G.place = 1 + net.results.filter((r) => r.finished).length;
  // Дрифт на трассе с финишем: итог = очки дрифта + бонус за время (быстрее 60 км/ч в среднем) + онлайн бонус за место на финише
  if (G.mode.id === 'drift' && G.finite) {
    G.timeBonus = finished ? Math.max(0, Math.round((G.lenKm * 60 - G.elapsed) * 50)) : 0;
    G.finPlace = finished && G.online ? 1 + net.results.filter((r) => r.finished).length : 0;
    G.placeBonus = [0, 5000, 3000, 1500][G.finPlace] || 0;
    G.score = G.driftTotal + G.timeBonus + G.placeBonus;
  }
  state = 'over';
  audio.gameOver();
  const key = recKey(G.mode.id, W.map.id, G.lenKm);
  const old = records[key];
  const timeRec = byTime(G.mode.id, G.lenKm);
  const isRec = !G.online && (timeRec ? finished && (!old || !old.time || G.elapsed < old.time) : G.score > 0 && (!old || G.score > old.score));
  const entry = { score: G.score, time: finished ? G.elapsed : 0, dist: Math.floor(G.dist), drift: G.bestDrift, car: CARS[sel.car].name, date: new Date().toLocaleDateString('ru-RU'), ts: Date.now(), maxSpeed: Math.round(G.maxSpeed) };
  if (isRec) records[key] = entry;
  // личный рекорд этой машины на этой карте/режиме/длине
  const carKey = key + '|' + CARS[sel.car].id, oldCar = records[carKey];
  const isCarRec = !G.online && (timeRec ? finished && (!oldCar || !oldCar.time || G.elapsed < oldCar.time) : G.score > 0 && (!oldCar || G.score > oldCar.score));
  if (isCarRec) records[carKey] = entry;
  if (isRec || isCarRec) store.set('records', records);
  let title = G.mode.timer && !G.finite ? 'Время вышло!' : 'Заезд окончен';
  if (finished) title = G.place ? `ФИНИШ! ${G.place} место` : 'ФИНИШ!';
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
  rows.push(['Удары', G.hits]);
  if (!finished) rows.push(['Время в заезде', fmtTime(G.elapsed)]);
  if (old && !isRec) rows.push(['Рекорд', timeRec ? (old.time ? fmtTime(old.time) : '—') : old.score.toLocaleString('ru-RU')]);
  $('over-stats').innerHTML = rows.map(([a, b]) => `<span>${a}</span><b>${b}</b>`).join('');
  if (G.online) net.finish(finished, G.elapsed, G.score);
  renderOnlineResults();
  $('touch').classList.add('hidden');
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
  setText('hud-next', next);
  setText('hud-score', G.score.toLocaleString('ru-RU'));
  const total = (G.online ? net.players.size : W.rivals.length) + 1;
  const placeStr = G.place && G.mode.id === 'race' ? ` · место ${G.place}/${total}` : '';
  setText('hud-dist', `${(G.dist / 1000).toFixed(2)} км${G.finite ? ` из ${G.lenKm}` : ''}${G.mode.id === 'race' && !G.online ? ` · обгонов: ${G.overtakes}` : ''}${placeStr}`);
  const rec = records[recKey(G.mode.id, W.map.id, G.lenKm)];
  const timeRec = byTime(G.mode.id, G.lenKm);
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
const SCREENS = ['main', 'setup', 'garage', 'records', 'settings', 'controls', 'pause', 'over', 'online', 'lobby'];
const MENU_SCREENS = ['main', 'setup', 'garage', 'records', 'settings', 'controls', 'online', 'lobby'];
function showScreen(name) {
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
  $('garage-info').classList.toggle('hidden', name !== 'garage');
  if (name === 'garage') { renderGarageGrid(); renderGarage(); }
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
  const fieldSel = !!MAPS[sel.map].field;
  $('mode-cards').innerHTML = (fieldSel ? `<div class="card sel"><b>Полигон</b><small>На полигоне нет трассы: свободная езда без таймера, очки за дрифт.</small></div>` : '') + MODES.map((m, i) => `<div class="card ${i === sel.mode && !fieldSel ? 'sel' : ''}" ${fieldSel ? 'style="opacity:.4"' : ''} data-mode="${i}"><b>${m.name}</b><small>${m.desc}</small></div>`).join('');
  $('map-cards').innerHTML = MAPS.map((m, i) => {
    const len = m.field ? 0 : sel.len;
    const mid = m.field ? 'field' : MODES[sel.mode].id;
    const rec = records[recKey(mid, m.id, len)];
    const recTxt = rec ? (byTime(mid, len) ? (rec.time ? fmtTime(rec.time) : '') : rec.score.toLocaleString('ru-RU')) : '';
    return `<div class="card ${i === sel.map ? 'sel' : ''}" data-map="${i}"><span class="tag">${m.tag}</span><b>${m.name}</b><small>${m.desc}</small>${recTxt ? `<span class="rec">рекорд: ${recTxt}</span>` : ''}</div>`;
  }).join('');
  renderSetupOpts(fieldSel);
  $('setup-car-name').textContent = CARS[sel.car].name;
  document.querySelectorAll('[data-mode]').forEach((el) => el.addEventListener('click', () => { sel.mode = +el.dataset.mode; saveSel(); audio.click(); renderSetup(); }));
  document.querySelectorAll('[data-map]').forEach((el) => el.addEventListener('click', () => {
    const m = +el.dataset.map; audio.click();
    if (m !== sel.map) { sel.map = m; saveSel(); buildWorld(sel.map, 7); }
    renderSetup();
  }));
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
  } else {
    $('opts-title').textContent = 'Длина трассы';
    const inf = !sel.len;
    const v = sel.len || 10;
    box.innerHTML = `<div class="len-row">
      <input type="range" id="len-range" min="${LEN_MIN}" max="${LEN_MAX}" step="1" value="${v}" ${inf ? 'class="off"' : ''} />
      <div class="len-val" id="len-val">${inf ? '∞' : v + ' км'}</div>
      <button class="btn small ${inf ? 'accent' : ''}" id="len-inf">∞ Бесконечная</button>
    </div>
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
function thumbKey(spec) { return `${spec.id}:${sel.colors[spec.id] ?? 0}`; }
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
  const model = buildCarModel(spec, carColor(spec), { outline: settings.outline });
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
      const img = document.querySelector(`.car-card[data-car="${CARS.indexOf(spec)}"] img`);
      if (img && thumbs[k]) img.src = thumbs[k];
    }
    setTimeout(step, 0);
  };
  step();
}
function renderGarageGrid() {
  $('garage-count').textContent = `${CARS.length} машин`;
  // в сетке машины идут от самой медленной к самой быстрой
  const order = CARS.map((c, i) => i).sort((a, b) => (CARS[a].vmax || 0) - (CARS[b].vmax || 0));
  $('car-grid').innerHTML = order.map((i) => {
    const c = CARS[i], t = thumbs[thumbKey(c)];
    return `<div class="car-card ${i === sel.car ? 'sel' : ''}" data-car="${i}"><img class="thumb" alt="" ${t ? `src="${t}"` : ''}/><b>${c.name}</b></div>`;
  }).join('');
  document.querySelectorAll('.car-card').forEach((el) => el.addEventListener('click', () => selectCar(+el.dataset.car)));
  const missing = CARS.filter((c) => !thumbs[thumbKey(c)]);
  // сначала выбранная и соседние
  missing.sort((a, b) => Math.abs(CARS.indexOf(a) - sel.car) - Math.abs(CARS.indexOf(b) - sel.car));
  thumbQueue = missing; pumpThumbs();
  const cur = document.querySelector('.car-card.sel'); if (cur) cur.scrollIntoView({ block: 'nearest' });
}
function renderGarage() {
  const c = CARS[sel.car];
  $('car-name').textContent = c.name;
  $('car-tag').innerHTML = `${escapeHtml(c.tag)}<span class="cls cls-${carClass(c)}">${carClass(c)}</span>`;
  $('car-desc').textContent = c.desc;
  const st = carStats(c);
  $('car-stats').innerHTML = [['Скорость', st.top], ['Разгон', st.accel], ['Управляемость', st.handling], ['Дрифт', st.drift]]
    .map(([n, v]) => `<div class="stat"><span>${n}</span><div class="bar"><i style="width:${Math.round(v * 100)}%"></i></div></div>`).join('');
  $('car-spec').textContent = `${c.hp} л.с. · ${c.torque} Н·м · ${c.mass} кг · до ${speedStr(c.vmax || 250)} · привод ${c.drive === 'RWD' ? 'задний' : c.drive === 'AWD' ? 'полный' : 'передний'} · ${c.gears.length} ${c.gears.length < 5 ? 'передачи' : 'передач'}`;
  const ci = sel.colors[c.id] ?? 0;
  $('car-colors').innerHTML = c.colors.map((col, i) => `<div class="swatch ${i === ci ? 'sel' : ''}" style="background:${col}" data-col="${i}"></div>`).join('');
  document.querySelectorAll('[data-col]').forEach((el) => el.addEventListener('click', () => {
    sel.colors[c.id] = +el.dataset.col; saveSel(); audio.click();
    W.player.model.bodyMat.color.set(c.colors[+el.dataset.col]); renderGarage(); renderGarageGrid();
  }));
  document.querySelectorAll('.car-card').forEach((el) => el.classList.toggle('sel', +el.dataset.car === sel.car));
}
function selectCar(i) {
  if (i === sel.car) return;
  sel.car = (i + CARS.length) % CARS.length; saveSel(); audio.click();
  spawnPlayer(6, -2.8);
  renderGarage();
  const cur = document.querySelector('.car-card.sel'); if (cur) cur.scrollIntoView({ block: 'nearest' });
}
function switchCar(d) { selectCar((sel.car + d + CARS.length) % CARS.length); }
$('car-prev').addEventListener('click', () => switchCar(-1));
$('car-next').addEventListener('click', () => switchCar(1));

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
      html += `<tr><td>${e.map.name}<small>${e.mode.name}</small></td><td>${e.map.field ? '—' : e.len ? e.len + ' км' : '∞'}</td><td>${e.car.name}<span class="cls cls-${carClass(e.car)}">${carClass(e.car)}</span></td><td><b>${val}</b>${sub ? `<small>${sub}</small>` : ''}</td><td><small>${e.r.date || ''}</small></td></tr>`;
    }
  }
  $('records-table').innerHTML = html + '</table>';
}
$('btn-reset-rec').addEventListener('click', () => { if (confirm('Удалить все рекорды?')) { records = {}; store.set('records', records); renderRecords(); } });

function renderSettings() {
  $('set-vol').value = settings.vol; $('set-music').checked = settings.music; $('set-assist').value = settings.assistMode; $('set-draw').value = settings.draw;
  $('set-manual').checked = settings.manual; $('set-quality').value = settings.quality; $('set-camera').value = settings.camera; $('set-units').value = settings.units;
  $('set-sfx').value = settings.sfxVol; $('set-musicvol').value = settings.musicVol;
  $('set-outline').checked = settings.outline;
  $('set-handling').value = settings.handling; $('set-smoke').checked = settings.smoke;
  $('set-fps').value = settings.fps; $('set-showfps').checked = settings.showFps; $('set-autores').checked = settings.autoRes;
}
$('set-vol').addEventListener('input', (e) => { settings.vol = +e.target.value; audio.setVolume(settings.vol); saveSettings(); });
$('set-sfx').addEventListener('input', (e) => { settings.sfxVol = +e.target.value; audio.setSfxVol(settings.sfxVol); saveSettings(); });
$('set-musicvol').addEventListener('input', (e) => { settings.musicVol = +e.target.value; audio.setMusicVol(settings.musicVol); saveSettings(); });
$('set-outline').addEventListener('change', (e) => { settings.outline = e.target.checked; saveSettings(); if (state === 'menu') spawnPlayer(6, -2.8); });
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
$('set-manual').addEventListener('change', (e) => { settings.manual = e.target.checked; saveSettings(); });
$('set-quality').addEventListener('change', (e) => { settings.quality = +e.target.value; saveSettings(); buildWorld(sel.map, 7); });
$('set-camera').addEventListener('change', (e) => { settings.camera = +e.target.value; saveSettings(); });
$('set-units').addEventListener('change', (e) => { settings.units = e.target.value; saveSettings(); });
$('set-fps').addEventListener('change', (e) => { settings.fps = +e.target.value; saveSettings(); });
$('set-showfps').addEventListener('change', (e) => { settings.showFps = e.target.checked; saveSettings(); });
$('set-autores').addEventListener('change', (e) => { settings.autoRes = e.target.checked; saveSettings(); dynRes.scale = 1; applyPixelRatio(); });

// ======================= онлайн: подключение и лобби =======================
const serverUrl = () => (settings.server || '').trim() || (/^(localhost|127\.)/.test(location.hostname) ? 'ws://localhost:8080' : DEFAULT_SERVER);
function setOnlineStatus(text, err) { const el = $('online-status'); el.textContent = text; el.classList.toggle('err', !!err); }
const MM_LENS = [5, 10, 15, 20, 25, 30, 40, 50, 0];
function renderOnline() {
  const c = CARS[sel.car], cls = carClass(c);
  $('mm-car').innerHTML = `${c.name}<span class="cls cls-${cls}">${cls}</span>`;
  const seg = (id, items, key) => {
    $(id).innerHTML = items.map(([v, t]) => `<button class="btn small ${sel.mm[key] === v ? 'on' : ''}" data-v="${v}">${t}</button>`).join('');
    $(id).querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
      audio.click(); const v = b.dataset.v; sel.mm[key] = /^\d+$/.test(v) ? +v : v; saveSel(); renderOnline();
    }));
  };
  seg('mm-mode', [['race', 'Гонка'], ['drift', 'Дрифт']], 'mode');
  seg('mm-size', [[5, '5'], [10, '10']], 'size');
  seg('mm-car-rule', [['any', 'Любые'], ['class', `Класс ${cls}`], ['same', 'Та же машина']], 'carRule');
  if (!MM_LENS.includes(sel.mm.len)) sel.mm.len = 10;
  $('mm-len').innerHTML = MM_LENS.map((l) => `<option value="${l}" ${l === sel.mm.len ? 'selected' : ''}>${l ? l + ' км' : '∞ бесконечная'}</option>`).join('');
  $('on-name').value = settings.name || '';
  $('on-server').value = settings.server || '';
  $('on-server').placeholder = serverUrl();
  setOnlineStatus(net.connected ? 'Подключено' : '');
}
function myProfile() { const spec = CARS[sel.car]; return { name: settings.name || 'Игрок', car: sel.car, cls: carClass(spec), color: sel.colors[spec.id] ?? 0 }; }
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
const mmJoin = () => ({ mm: { ...sel.mm, maps: MAPS.map((m, i) => (m.field ? -1 : i)).filter((i) => i >= 0) } });
$('on-quick').addEventListener('click', () => goOnline(mmJoin()));
$('mm-len').addEventListener('change', (e) => { sel.mm.len = +e.target.value; saveSel(); });
function mmCar(d) { sel.car = (sel.car + d + CARS.length) % CARS.length; saveSel(); audio.click(); if (W && state === 'menu') spawnPlayer(6, -2.8); renderOnline(); }
$('mm-prev').addEventListener('click', () => mmCar(-1));
$('mm-next').addEventListener('click', () => mmCar(1));
$('mm-again').addEventListener('click', () => { showScreen('online'); goOnline(mmJoin()); });
$('on-create').addEventListener('click', () => goOnline({}));
$('on-join').addEventListener('click', () => {
  const code = $('on-code').value.trim().toUpperCase();
  if (code.length !== 4) { setOnlineStatus('Введи код комнаты из 4 символов', true); return; }
  goOnline({ code });
});
$('on-back').addEventListener('click', () => { audio.click(); net.disconnect(true); showScreen('main'); });

function lobbyConfigText(c) {
  const map = MAPS[c.map] || MAPS[0];
  const mode = map.field ? 'Полигон' : (MODES.find((m) => m.id === c.mode) || MODES[0]).name;
  const extra = map.field ? { obst: 'с препятствиями', clean: 'чистое поле', flat: 'чистое и ровное' }[c.fieldMode] : c.len ? `${c.len} км` : 'бесконечная';
  return `${mode} · ${map.name} · ${extra}`;
}
function renderLobby() {
  if (!net.connected) { showScreen('online'); return; }
  const mm = net.mm;
  $('lobby-code').textContent = mm ? '' : net.code;
  $('menu-lobby').querySelector('h2').firstChild.textContent = mm ? 'Быстрый матч ' : 'Комната ';
  $('lobby-type').textContent = mm
    ? `${mm.mode === 'drift' ? 'Дрифт' : 'Гонка'} · ${mm.len ? mm.len + ' км' : 'бесконечная'} · ${mm.size} игроков · соперники: ${{ any: 'любые машины', class: 'класс ' + carClass(CARS[sel.car]), same: CARS[sel.car].name }[mm.carRule]}`
    : 'Закрытая комната — отправь код друзьям';
  const me = myProfile();
  const list = [{ id: net.id, ...me, me: true }, ...[...net.players.values()]];
  $('lobby-players').innerHTML = list.map((p) => {
    const spec = CARS[p.car] || CARS[0];
    const col = spec.colors[p.color % spec.colors.length];
    return `<div class="lp"><i style="background:${col}"></i><b>${p.id === net.host && !net.mm ? '👑 ' : ''}${escapeHtml(p.name)}${p.me ? ' (ты)' : ''}</b><span>${spec.name}${p.inRace ? ' · в заезде' : ''}</span></div>`;
  }).join('');
  $('lobby-count').textContent = `Игроки: ${list.length} / ${mm ? mm.size : 10}`;
  $('lobby-car').textContent = CARS[sel.car].name;
  const c = net.config;
  const host = net.isHost && !mm;
  $('lobby-host').classList.toggle('hidden', !host);
  $('lobby-guest').classList.toggle('hidden', host || !!mm);
  $('lobby-start').classList.toggle('hidden', !host);
  $('lobby-carsw').classList.toggle('hidden', !!mm);
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
  $('lobby-wait').textContent = mm ? (done ? 'Нажми «Искать снова», чтобы найти новый матч с теми же настройками.' : 'Матч начнётся сам, как только наберётся нужное число игроков с подходящими машинами.') : racing ? 'Сейчас идёт заезд — подожди, пока он закончится.' : host ? (list.length < 2 ? 'Можно стартовать одному или подождать друзей.' : '') : 'Ждём, когда хост нажмёт «Старт».';
  if (host) {
    $('lc-map').innerHTML = MAPS.map((m, i) => `<option value="${i}" ${i === c.map ? 'selected' : ''}>${m.name}</option>`).join('');
    const field = !!(MAPS[c.map] || {}).field;
    $('lc-mode').innerHTML = MODES.map((m) => `<option value="${m.id}" ${m.id === c.mode ? 'selected' : ''}>${m.name}</option>`).join('');
    $('lc-mode-row').classList.toggle('hidden', field);
    $('lc-len-row').classList.toggle('hidden', field);
    $('lc-fm-row').classList.toggle('hidden', !field);
    const lens = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 0];
    $('lc-len').innerHTML = lens.map((l) => `<option value="${l}" ${l === c.len ? 'selected' : ''}>${l ? l + ' км' : '∞ бесконечная'}</option>`).join('');
    $('lc-fm').value = c.fieldMode;
  }
  renderOnlineResults();
}
const escapeHtml = (t) => String(t).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
function sendConfig() {
  net.send({ t: 'config', config: { map: +$('lc-map').value, mode: $('lc-mode').value, len: +$('lc-len').value, fieldMode: $('lc-fm').value } });
}
['lc-map', 'lc-mode', 'lc-len', 'lc-fm'].forEach((id) => $(id).addEventListener('change', () => { audio.click(); sendConfig(); }));
$('lobby-start').addEventListener('click', () => { audio.click(); if (net.state === 'lobby') net.send({ t: 'start' }); });
$('lobby-leave').addEventListener('click', () => { audio.click(); net.disconnect(true); showScreen('online'); });
function lobbyCar(d) {
  sel.car = (sel.car + d + CARS.length) % CARS.length; saveSel(); audio.click();
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
  const nm = (r) => `${escapeHtml(r.name)}${r.id === net.id ? ' (ты)' : ''}`;
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
net.on.fin = () => { renderOnlineResults(); };
setInterval(() => {
  const el = document.getElementById('mm-wait-t');
  if (el && net.mmSince) { const t = Math.floor((Date.now() - net.mmSince) / 1000); el.textContent = `ожидание ${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; }
}, 1000);
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
  sel.map = Math.min(c.map, MAPS.length - 1);
  const mi = MODES.findIndex((x) => x.id === c.mode); sel.mode = mi < 0 ? 0 : mi;
  const field = !!MAPS[sel.map].field;
  for (const p of net.players.values()) { p.model = null; p.vis = null; p.buf = []; }
  startRace({ seed: m.seed, len: field ? 0 : c.len, fieldMode: c.fieldMode, online: true });
};

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

// ======================= главный цикл =======================
let last = performance.now();
const fpsMeter = { frames: 0, t: performance.now(), value: 0 };
function frame(now) {
  requestAnimationFrame(frame);
  // ограничение FPS (0 = без ограничений; выше частоты монитора браузер всё равно не рисует)
  if (settings.fps > 0 && now - last < 1000 / settings.fps - 0.7) return;
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
    W.track.update(W.player.veh.idx);
    placePlayerModel(dt);
    W.sun.position.set(W.player.veh.x + W.sunDir.x * 90, W.player.veh.roadY + W.sunDir.y * 90, W.player.veh.z + W.sunDir.z * 90);
    W.sun.target.position.set(W.player.veh.x, W.player.veh.roadY, W.player.veh.z);
    W.farPlane.position.set(W.player.veh.x, W.player.veh.roadY - 14, W.player.veh.z);
    if (W.snow) W.snow.update(dt, camera);
    menuCamera(dt, menuScreen === 'garage');
    W.sky.position.copy(camera.position);
  } else if (state === 'countdown' || state === 'race' || state === 'over') {
    G._events = evs;
    updateRace(dt);
  }
  updateDynRes(dt);
  if (composer) composer.render(); else renderer.render(scene, camera);
}

// старт
resize();
enterMenuWorld();
state = 'menu';
showScreen('main');
requestAnimationFrame(frame);

// для отладки/тестов
window.__game = { renderer, get W() { return W; }, get G() { return G; }, get state() { return state; }, startRace, showScreen, sel, settings, cam, net, CARS, camera, scene,
  tick(dt, n = 1) { for (let i = 0; i < n; i++) { if (state === "countdown" || state === "race" || state === "over") { G._events = []; updateRace(dt); } } } };
