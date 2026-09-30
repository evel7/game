import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Vehicle } from './vehicle.js';
import { CARS, carStats } from './cars.js';
import { MAPS } from './maps.js';
import { Track, SP, CP_EVERY } from './track.js';
import { buildCarModel, animateCar } from './carmodel.js';
import { Rival } from './ai.js';
import { GameAudio } from './audio.js';
import { Input } from './input.js';
import { makeSky, Smoke, Skids, Snowfall, makeEnvScene, makeHorizon, makeClouds } from './fx.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { clamp, lerp, fmtTime } from './utils.js';

// ======================= режимы =======================
const MODES = [
  { id: 'race', name: 'Гонка', desc: 'Соперники, чекпоинты и таймер. Очки за дистанцию, обгоны и дрифт.', timer: 50, rivals: 5,
    bonus: (n) => Math.max(22, 40 - n * 2) },
  { id: 'drift', name: 'Дрифт', desc: 'Только ты и трасса. Очки за занос, чекпоинты и длинные серии добавляют время.', timer: 60, rivals: 0,
    bonus: (n) => Math.max(26, 42 - n * 1.5) },
  { id: 'free', name: 'Свободная езда', desc: 'Без таймера и давления. Катайся по бесконечной трассе и тренируй дрифт.', timer: 0, rivals: 3,
    bonus: () => 0 },
];
const STEP = 1 / 240; // физика 240 шагов/с — плавно даже на мониторах 144–240 Гц
const CP_FIRST_IDX = 400;

// ======================= сохранения =======================
const store = {
  get(k, d) { try { const v = localStorage.getItem('ed_' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('ed_' + k, JSON.stringify(v)); } catch { /* приватный режим */ } },
};
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (isTouch) document.body.classList.add('touch');
const settings = Object.assign({ vol: 0.8, music: true, assist: true, manual: false, quality: isTouch ? 0 : 1, camera: 0, units: 'kmh', fps: 120, showFps: false }, store.get('settings', {}));
const sel = Object.assign({ car: 0, colors: {}, mode: 0, map: 0 }, store.get('sel', {}));
let records = store.get('records', {});
const saveSettings = () => store.set('settings', settings);
const saveSel = () => store.set('sel', sel);

// ======================= рендер =======================
const $ = (id) => document.getElementById(id);
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 1600);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

function applyQuality() {
  const q = +settings.quality;
  renderer.setPixelRatio([1, Math.min(devicePixelRatio, 1.5), Math.min(devicePixelRatio, 2)][q]);
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
audio.setVolume(settings.vol); audio.musicOn = settings.music;
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

function buildWorld(mapIdx, seed) {
  disposeWorld();
  const map = MAPS[mapIdx];
  const group = new THREE.Group();
  scene.add(group);
  scene.fog = new THREE.Fog(map.fog.color, map.fog.near, map.fog.far);
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
  const track = new Track(group, map, seed, +settings.quality);
  const farPlane = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), new THREE.MeshLambertMaterial({ color: map.ground.far }));
  farPlane.rotation.x = -Math.PI / 2; group.add(farPlane);

  const smokeColor = { desert: 0xe6ddd0, snow: 0xffffff, city: 0xb8b8c8 }[map.id];
  const smoke = new Smoke(group, smokeColor, settings.quality > 0 ? 260 : 120);
  const dust = new Smoke(group, { desert: 0xcf9f6c, snow: 0xf4f8ff, city: 0x77777f }[map.id], 120);
  const skids = new Skids(group, settings.quality > 0 ? 3000 : 1200, map.id === 'snow' ? 0x7d8898 : 0x0c0c0c, map.id === 'snow' ? 0.4 : 0.6);
  const snow = map.weather === 'snow' ? new Snowfall(group, settings.quality > 0 ? 2600 : 900) : null;

  W = { map, mapIdx, group, hemi, sun, sunDir: sd, sky, track, farPlane, smoke, dust, skids, snow, rivals: [], player: null };
  applyQuality();
  spawnPlayer(6, -2.8);
}

function carColor(spec) { return spec.colors[sel.colors[spec.id] ?? 0]; }

function spawnPlayer(idx, lat) {
  const spec = CARS[sel.car];
  if (W.player) { W.group.remove(W.player.model.root); }
  const model = buildCarModel(spec, carColor(spec), { night: W.map.night });
  model._tailBase = W.map.night ? 1.2 : 0.35;
  model.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  W.group.add(model.root);
  const veh = new Vehicle(spec);
  const p = W.track.P(idx);
  veh.reset(p.x + p.lx * lat, p.z + p.lz * lat, p.h);
  veh.idx = idx; veh.lat = lat; veh.roadY = p.y; veh.slope = 0;
  if (W.map.night) {
    const hl = new THREE.SpotLight(0xfff1d6, 40, 100, 0.5, 0.6, 1.4);
    hl.position.set(0, 0.8, 2.0); hl.target.position.set(0, 0, 25);
    model.root.add(hl); model.root.add(hl.target);
  }
  W.player = { veh, model };
  placePlayerModel(0);
}

function placePlayerModel(dt) {
  const { veh, model } = W.player;
  model.root.position.set(veh.x, veh.roadY, veh.z);
  model.root.rotation.set(-Math.atan(veh.slope || 0), veh.h, 0, 'YXZ');
  animateCar(model, veh, dt || 0.016, G && G.braking);
}

function spawnRivals(n) {
  const grid = [[6, 2.8], [14, -2.8], [14, 2.8], [22, -2.8], [22, 2.8], [30, 0]];
  for (let i = 0; i < n; i++) {
    const spec = CARS[(sel.car + 1 + i) % CARS.length];
    const color = spec.colors[(i * 2 + 1) % spec.colors.length];
    const model = buildCarModel(spec, color, { night: W.map.night });
    model._tailBase = W.map.night ? 1.2 : 0.35;
    W.group.add(model.root);
    const r = new Rival(spec, model, grid[i][0], grid[i][1], 0.82 + Math.random() * 0.13, W.map.grip);
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
  const { veh } = W.player;
  const spd = veh.speed;
  const fwdX = Math.sin(veh.h), fwdZ = Math.cos(veh.h);
  const cy = veh.roadY;
  // камера частично смотрит по направлению скорости (красиво в дрифте), но вес меняется плавно
  // и угол ограничен — при ударах и откатах назад камеру не дёргает
  const w = clamp((veh.u - 3) / 8, 0, 1) * 0.45;
  const target = veh.h + clamp(angDiff(Math.atan2(veh.vx, veh.vz), veh.h), -0.7, 0.7) * w;
  if (instant) cam.h = target;
  cam.h += angDiff(target, cam.h) * Math.min(1, dt * 3.5);
  const k = instant ? 1 : 1 - Math.exp(-dt * 9);
  let fov = 60 + Math.min(20, spd * 0.24);
  const des = new THREE.Vector3(), look = new THREE.Vector3();
  if (cam.mode === 0 || cam.mode === 1) {
    const dist = cam.mode === 0 ? 6.3 : 9.8, hgt = cam.mode === 0 ? 2.2 : 3.6;
    des.set(veh.x - Math.sin(cam.h) * dist, cy + hgt, veh.z - Math.cos(cam.h) * dist);
    look.set(veh.x + Math.sin(cam.h) * 2.5, cy + 1.05, veh.z + Math.cos(cam.h) * 2.5);
    cam.pos.lerp(des, k);
    cam.pos.y = Math.max(cam.pos.y, cy + 1.0);
    cam.look.lerp(look, instant ? 1 : 1 - Math.exp(-dt * 16));
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
  cam.fov += (fov - cam.fov) * Math.min(1, dt * 3);
  camera.fov = cam.fov; camera.updateProjectionMatrix();
  camera.position.copy(cam.pos);
  if (cam.shake > 0.001) {
    camera.position.x += (Math.random() - 0.5) * cam.shake * 0.5;
    camera.position.y += (Math.random() - 0.5) * cam.shake * 0.5;
    cam.shake *= Math.exp(-dt * 6);
  }
  // лёгкая вибрация на большой скорости
  if (spd > 45) camera.position.y += (Math.random() - 0.5) * 0.02 * (spd - 45) / 20;
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
function newGame() {
  const mode = MODES[sel.mode];
  G = {
    mode, time: mode.timer, score: 0, dist: 0, startS: W.track.P(6).s, driftTotal: 0, overtakes: 0, cpCount: 0,
    nextCp: CP_FIRST_IDX, maxSpeed: 0, bestDrift: 0, hits: 0, cd: 3.6, cdShown: 4, started: false, over: false, braking: false,
    drift: { active: false, pts: 0, mult: 1, time: 0, idle: 0, angle: 0 }, driftShowT: 0, elapsed: 0, acc: 0,
  };
}

function startRace() {
  audio.init();
  buildWorld(sel.map, (Math.random() * 1e6) | 0);
  newGame();
  spawnRivals(G.mode.rivals);
  cam.mode = +settings.camera;
  state = 'countdown';
  showScreen(null);
  $('hud').classList.remove('hidden');
  if (isTouch) $('touch').classList.remove('hidden');
  $('hud-mode').textContent = `${G.mode.name} · ${W.map.name}`;
  viewShift = { x: 0, y: 0 }; updateViewOffset();
  updateCamera(0.016, true);
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
  cam.shake = Math.min(0.5, impact / 25);
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
  const track = W.track;
  const res = veh.step(STEP, inp, { grip: W.map.grip, assist: settings.assist ? 1 : 0, manual: settings.manual });
  if (res.shifted) { audio.shift(); if (res.shifted > 0 && inp.throttle > 0.5 && Math.random() < 0.35) audio.backfire(); }
  inp.shiftUp = inp.shiftDown = false;
  const pr = track.project(veh.x, veh.z, veh.idx);
  veh.idx = pr.idx; veh.lat = pr.lat; veh.roadY = pr.y; veh.slope = pr.slope;
  veh.offroad = Math.abs(pr.lat) > track.hw + 0.3 && Math.abs(pr.k) < 1 / 170;
  // стены: учитываем габарит машины поперёк трассы
  const b = veh.spec.body;
  const rel = veh.h - pr.h;
  const ext = Math.abs(Math.cos(rel)) * b.W / 2 + Math.abs(Math.sin(rel)) * b.L / 2;
  const limit = track.wall - 0.1 - ext;
  if (Math.abs(pr.lat) > limit) {
    const s = Math.sign(pr.lat);
    const imp = veh.collideWall(-s * pr.lx, -s * pr.lz, Math.abs(pr.lat) - limit, 0.3);
    if (imp > 1.5 && G) onHit(imp);
  }
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
  if (state === 'over') inp = { throttle: 0, brake: 0.35, steer: 0, handbrake: 0 };
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
  for (const r of W.rivals) r.update(dt, track, { idx: veh.idx, lat: veh.lat, t: G.elapsed }, G.started);
  if (state !== 'countdown') collideRivals();
  track.update(veh.idx);

  // респаун отставших соперников впереди + обгоны
  for (const r of W.rivals) {
    const isAhead = r.fi > veh.idx;
    if (racing && r.ahead && !isAhead && G.mode.id === 'race') {
      G.overtakes++; showMsg('ОБГОН!  +300', 1.2, '#7cff4f'); audio.score();
    }
    r.ahead = isAhead;
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
    Math.max(veh.rearSlide * (Math.abs(veh.beta) > 0.12 || veh.spinR > 0.2 || veh.lockR > 0 ? 1 : 0.3), veh.frontSlide > 0.8 ? 0.5 : 0),
    veh.offroad, veh.speed, state !== 'paused');
  updateCamera(dt);
  updateHUD(dt);
}

function updateScoring(dt, veh) {
  G.elapsed += dt;
  const spd = veh.speed, kmh = spd * 3.6;
  G.maxSpeed = Math.max(G.maxSpeed, kmh);
  G.dist = Math.max(G.dist, W.track.P(veh.idx).s - G.startS);

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
        if (G.mode.id === 'drift') G.time += Math.min(8, pts / 1200);
        const el = $('drift-pts'); el.textContent = '+' + pts; el.className = 'drift-pts banked';
        $('drift-info').textContent = pts > 5000 ? 'ЛЕГЕНДАРНЫЙ ДРИФТ!' : pts > 2000 ? 'ОТЛИЧНЫЙ ДРИФТ!' : 'ДРИФТ ЗАСЧИТАН';
        G.driftShowT = 1.3;
        audio.score();
      }
      G.drift = { active: false, pts: 0, mult: 1, time: 0, idle: 0, angle: 0 };
    }
  }

  // --- чекпоинты ---
  if (veh.idx >= G.nextCp) {
    G.cpCount++;
    G.nextCp += CP_EVERY;
    if (G.mode.timer) {
      const bonus = Math.round(G.mode.bonus(G.cpCount - 1));
      G.time += bonus;
      showMsg(`ЧЕКПОИНТ  +${bonus} с`, 1.8, '#ffcc00');
    } else showMsg(`ЧЕКПОИНТ ${G.cpCount}`, 1.5, '#ffcc00');
    audio.checkpoint();
  }

  // --- счёт и время ---
  if (G.mode.id === 'race') G.score = Math.floor(G.dist) + G.overtakes * 300 + Math.floor(G.driftTotal / 4);
  else if (G.mode.id === 'drift') G.score = G.driftTotal;
  else G.score = Math.floor(G.dist);
  if (G.mode.timer) {
    G.time -= dt;
    if (G.time <= 0) { G.time = 0; finishRace(); }
  }
}

function finishRace() {
  if (G.drift.active && G.drift.pts > 30) { G.driftTotal += Math.floor(G.drift.pts); G.bestDrift = Math.max(G.bestDrift, Math.floor(G.drift.pts)); if (G.mode.id === 'drift') G.score = G.driftTotal; }
  state = 'over';
  audio.gameOver();
  const key = `${G.mode.id}_${W.map.id}`;
  const old = records[key];
  const isRec = G.score > 0 && (!old || G.score > old.score);
  if (isRec) { records[key] = { score: G.score, dist: Math.floor(G.dist), drift: G.bestDrift, car: CARS[sel.car].name, date: new Date().toLocaleDateString('ru-RU') }; store.set('records', records); }
  $('over-title').textContent = G.mode.timer ? 'Время вышло!' : 'Заезд окончен';
  $('over-record').classList.toggle('show', isRec && G.score > 0);
  const rows = [
    ['Очки', G.score.toLocaleString('ru-RU')], ['Дистанция', `${(G.dist / 1000).toFixed(2)} км`],
    ['Макс. скорость', speedStr(G.maxSpeed)], ['Лучший дрифт', G.bestDrift.toLocaleString('ru-RU')],
    ['Все очки дрифта', G.driftTotal.toLocaleString('ru-RU')], ['Чекпоинты', G.cpCount],
  ];
  if (G.mode.id === 'race') rows.splice(4, 0, ['Обгоны', G.overtakes]);
  rows.push(['Удары', G.hits], ['Время в заезде', fmtTime(G.elapsed)]);
  if (old && !isRec) rows.push(['Рекорд', old.score.toLocaleString('ru-RU')]);
  $('over-stats').innerHTML = rows.map(([a, b]) => `<span>${a}</span><b>${b}</b>`).join('');
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
    if (slip > 0.35 && spd > 2 && !veh.offroad) {
      if (Math.random() < (q > 0 ? 40 : 20) * dt) W.smoke.emit(x, veh.roadY, z, veh.vx, veh.vz, slip, W.map.night ? 0.22 : 0.32);
    }
    if (veh.offroad && spd > 4 && Math.random() < 30 * dt) W.dust.emit(x, veh.roadY, z, veh.vx, veh.vz, 1, 0.55);
    W.skids.add(side > 0 ? 0 : 1, x, veh.roadY, z, lx, lz, !veh.offroad && slip > 0.42 ? Math.min(1, (slip - 0.3) * 1.6) : 0);
    const [fx, fz] = wheelPos(b.wheelF, side * b.track / 2);
    W.skids.add(side > 0 ? 2 : 3, fx, veh.roadY, fz, lx, lz, !veh.offroad && (veh.frontSlide > 0.85 || (inp.brake > 0.5 && spd > 15 && veh.u > 0 && veh.lockR > 0)) ? 0.6 : 0);
  }
  // соперники тоже дымят в поворотах
  for (const r of W.rivals) {
    if (Math.abs(r.pose.k) * r.v * r.v > 7 && Math.random() < 12 * dt) W.smoke.emit(r.x, r.y, r.z, r.vx, r.vz, 0.6, 0.25);
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
  c.strokeStyle = rf > 0.9 ? '#ff3b3b' : rf > 0.75 ? '#ffb300' : '#ffcc00'; c.lineWidth = 10; c.stroke();
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
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath();
  for (let i = Math.max(tr.base, Math.floor(veh.idx) - 60); i < Math.min(tr.lastIdx, veh.idx + 320); i += 3) {
    const p = tr.P(i); const [x, y] = toMap(p.x, p.z);
    if (i === Math.max(tr.base, Math.floor(veh.idx) - 60)) c.moveTo(x, y); else c.lineTo(x, y);
  }
  c.strokeStyle = 'rgba(255,255,255,0.85)'; c.lineWidth = 6; c.stroke();
  // чекпоинт
  if (G && G.nextCp < tr.lastIdx) {
    const p = tr.P(G.nextCp); const [x, y] = toMap(p.x, p.z);
    c.fillStyle = '#ffcc00'; c.beginPath(); c.arc(x, y, 5, 0, Math.PI * 2); c.fill();
  }
  for (const r of W.rivals) {
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
  if (G.mode.timer) {
    setText('hud-timer', fmtTime(G.time));
    $('hud-timer').classList.toggle('warn', G.time < 10);
  } else setText('hud-timer', fmtTime(G.elapsed));
  const toCp = Math.max(0, (G.nextCp - veh.idx) * SP);
  setText('hud-next', `до чекпоинта ${Math.round(toCp)} м`);
  setText('hud-score', G.score.toLocaleString('ru-RU'));
  setText('hud-dist', `${(G.dist / 1000).toFixed(2)} км${G.mode.id === 'race' ? ` · обгонов: ${G.overtakes}` : ''}`);
  const rec = records[`${G.mode.id}_${W.map.id}`];
  setText('hud-sub', rec ? `рекорд: ${rec.score.toLocaleString('ru-RU')}` : 'рекорда пока нет');
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
const SCREENS = ['main', 'setup', 'garage', 'records', 'settings', 'controls', 'pause', 'over'];
function showScreen(name) {
  for (const s of SCREENS) $('menu-' + s).classList.toggle('show', s === name);
  $('loading').classList.remove('show');
  if (['main', 'setup', 'garage', 'records', 'settings', 'controls'].includes(name)) {
    if (state !== 'menu') enterMenuWorld();
    state = 'menu';
    $('hud').classList.add('hidden'); $('touch').classList.add('hidden');
    viewShift = name === 'setup' ? { x: 0, y: 0.18 } : { x: innerWidth > 800 ? 0.16 : 0, y: innerWidth > 800 ? 0 : 0.2 };
    updateViewOffset(); camera.updateProjectionMatrix();
  }
  if (name === 'setup') renderSetup();
  if (name === 'garage') renderGarage();
  if (name === 'records') renderRecords();
  if (name === 'settings') renderSettings();
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
  $('mode-cards').innerHTML = MODES.map((m, i) => `<div class="card ${i === sel.mode ? 'sel' : ''}" data-mode="${i}"><b>${m.name}</b><small>${m.desc}</small></div>`).join('');
  $('map-cards').innerHTML = MAPS.map((m, i) => {
    const rec = records[`${MODES[sel.mode].id}_${m.id}`];
    return `<div class="card ${i === sel.map ? 'sel' : ''}" data-map="${i}"><span class="tag">${m.tag}</span><b>${m.name}</b><small>${m.desc}</small>${rec ? `<span class="rec">рекорд: ${rec.score.toLocaleString('ru-RU')}</span>` : ''}</div>`;
  }).join('');
  $('setup-car-name').textContent = CARS[sel.car].name;
  document.querySelectorAll('[data-mode]').forEach((el) => el.addEventListener('click', () => { sel.mode = +el.dataset.mode; saveSel(); audio.click(); renderSetup(); }));
  document.querySelectorAll('[data-map]').forEach((el) => el.addEventListener('click', () => {
    const m = +el.dataset.map; audio.click();
    if (m !== sel.map) { sel.map = m; saveSel(); buildWorld(sel.map, 7); }
    renderSetup();
  }));
}
$('btn-start').addEventListener('click', () => { audio.click(); startRace(); });

function renderGarage() {
  const c = CARS[sel.car];
  $('car-name').textContent = c.name; $('car-tag').textContent = c.tag; $('car-desc').textContent = c.desc;
  const st = carStats(c);
  $('car-stats').innerHTML = [['Скорость', st.top], ['Разгон', st.accel], ['Управляемость', st.handling], ['Дрифт', st.drift]]
    .map(([n, v]) => `<div class="stat"><span>${n}</span><div class="bar"><i style="width:${Math.round(v * 100)}%"></i></div></div>`).join('');
  $('car-spec').textContent = `${c.hp} л.с. · ${c.torque} Н·м · ${c.mass} кг · привод ${c.drive === 'RWD' ? 'задний' : c.drive === 'AWD' ? 'полный' : 'передний'} · ${c.gears.length} передач`;
  const ci = sel.colors[c.id] ?? 0;
  $('car-colors').innerHTML = c.colors.map((col, i) => `<div class="swatch ${i === ci ? 'sel' : ''}" style="background:${col}" data-col="${i}"></div>`).join('');
  document.querySelectorAll('[data-col]').forEach((el) => el.addEventListener('click', () => {
    sel.colors[c.id] = +el.dataset.col; saveSel(); audio.click();
    W.player.model.bodyMat.color.set(c.colors[+el.dataset.col]); renderGarage();
  }));
}
function switchCar(d) {
  sel.car = (sel.car + d + CARS.length) % CARS.length; saveSel(); audio.click();
  const { veh } = W.player;
  const p = W.track.P(6);
  spawnPlayer(6, -2.8);
  renderGarage();
}
$('car-prev').addEventListener('click', () => switchCar(-1));
$('car-next').addEventListener('click', () => switchCar(1));

function renderRecords() {
  let html = '<table><tr><th>Режим</th><th>Карта</th><th>Очки</th><th>Км</th><th>Машина</th></tr>';
  let any = false;
  for (const m of MODES) for (const mp of MAPS) {
    const r = records[`${m.id}_${mp.id}`];
    if (!r) continue; any = true;
    html += `<tr><td>${m.name}</td><td>${mp.name}</td><td><b>${r.score.toLocaleString('ru-RU')}</b></td><td>${(r.dist / 1000).toFixed(2)}</td><td>${r.car}</td></tr>`;
  }
  html += '</table>';
  $('records-table').innerHTML = any ? html : '<p class="hint">Рекордов пока нет — самое время поставить первый!</p>';
}
$('btn-reset-rec').addEventListener('click', () => { if (confirm('Удалить все рекорды?')) { records = {}; store.set('records', records); renderRecords(); } });

function renderSettings() {
  $('set-vol').value = settings.vol; $('set-music').checked = settings.music; $('set-assist').checked = settings.assist;
  $('set-manual').checked = settings.manual; $('set-quality').value = settings.quality; $('set-camera').value = settings.camera; $('set-units').value = settings.units;
  $('set-fps').value = settings.fps; $('set-showfps').checked = settings.showFps;
}
$('set-vol').addEventListener('input', (e) => { settings.vol = +e.target.value; audio.setVolume(settings.vol); saveSettings(); });
$('set-music').addEventListener('change', (e) => { settings.music = e.target.checked; audio.setMusic(settings.music); saveSettings(); });
$('set-assist').addEventListener('change', (e) => { settings.assist = e.target.checked; saveSettings(); });
$('set-manual').addEventListener('change', (e) => { settings.manual = e.target.checked; saveSettings(); });
$('set-quality').addEventListener('change', (e) => { settings.quality = +e.target.value; saveSettings(); buildWorld(sel.map, 7); });
$('set-camera').addEventListener('change', (e) => { settings.camera = +e.target.value; saveSettings(); });
$('set-units').addEventListener('change', (e) => { settings.units = e.target.value; saveSettings(); });
$('set-fps').addEventListener('change', (e) => { settings.fps = +e.target.value; saveSettings(); });
$('set-showfps').addEventListener('change', (e) => { settings.showFps = e.target.checked; saveSettings(); });

// пауза / итоги
function pause() { if (state !== 'race' && state !== 'countdown') return; G.prevState = state; state = 'paused'; showScreen('pause'); audio.update(W.player.veh, W.player.veh.spec, 0, 0, false, 0, false); }
function resume() { if (state !== 'paused') return; state = G.prevState; showScreen(null); last = performance.now(); }
$('btn-resume').addEventListener('click', () => { audio.click(); resume(); });
$('btn-restart').addEventListener('click', () => { audio.click(); startRace(); });
$('btn-tomenu').addEventListener('click', () => { audio.click(); showScreen('main'); });
$('btn-again').addEventListener('click', () => { audio.click(); startRace(); });
$('btn-over-menu').addEventListener('click', () => { audio.click(); showScreen('main'); });

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
        const { veh } = W.player; const p = W.track.sample(Math.max(W.track.base + 2, veh.idx));
        veh.reset(p.x, p.z, p.h); veh.idx = Math.round(veh.idx); veh.roadY = p.y;
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
  if (composer) composer.render(); else renderer.render(scene, camera);
}

// старт
resize();
enterMenuWorld();
state = 'menu';
showScreen('main');
requestAnimationFrame(frame);

// для отладки/тестов
window.__game = { get W() { return W; }, get G() { return G; }, get state() { return state; }, startRace, showScreen, sel, settings, cam };
