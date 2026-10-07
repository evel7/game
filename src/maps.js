import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { tint, mulberry32 } from './utils.js';
import { palmGeo } from './field.js';

// Карты. У каждой свой вид, сцепление, характер трассы и декорации.
// ВАЖНО: онлайн-игра ссылается на карты по индексу — новые карты добавляем только В КОНЕЦ массива.
// style — «стиль» оформления (рельеф, горизонт, город, облака); по умолчанию равен id.
//   Новые карты переиспользуют стиль ('city') или задают свой ('forest', 'coast', 'volcano', 'ice').
// decor — расстановка декораций на чанк 100 м: [тип, кол-во, отступ от отбойника мин, макс, масштаб мин, макс, зазор, тень, шанс]
// neon — цвета светящихся полос на бетонном отбойнике (null — без полос); bank — цвет вала за металлическим отбойником.
export const MAPS = [
  {
    id: 'desert', name: 'Каньон «Закат»', tag: 'Пустыня',
    desc: 'Горячий асфальт, красные скалы и кактусы. Длинные быстрые дуги.',
    grip: 1.0, night: false, weather: null,
    sky: { top: 0x3d7cc9, horizon: 0xf6c28b, bottom: 0xe7a36a },
    fog: { color: 0xeab58a, near: 120, far: 700 },
    sun: { color: 0xfff0d6, intensity: 2.8, dir: [0.5, 0.75, -0.4] },
    hemi: { sky: 0xffe9cc, ground: 0x9a6a45, intensity: 1.1 },
    ground: { near: 0xd6a066, far: 0xc07a45, hills: 26 },
    road: { asphalt: '#55504b', line: '#f2c230', edge: '#eeeeee', halfWidth: 7.5, shoulder: 1.6, shoulderColor: '#b98a5a' },
    barrier: 'tires',
    track: { minR: 40, maxR: 170, straight: [50, 180], hill: 9 },
    props: ['cactus', 'rock', 'mesa', 'bush'],
  },
  {
    id: 'snow', name: 'Перевал «Ала-Тоо»', tag: 'Заснеженные горы',
    desc: 'Скользкая дорога среди елей и вершин. Нужна аккуратность: сцепление ниже.',
    grip: 0.74, night: false, weather: 'snow',
    sky: { top: 0x6f93c4, horizon: 0xdfe8f2, bottom: 0xf2f6fa },
    fog: { color: 0xdde6ef, near: 60, far: 460 },
    sun: { color: 0xffffff, intensity: 2.0, dir: [-0.4, 0.6, -0.5] },
    hemi: { sky: 0xe8f0ff, ground: 0x8899aa, intensity: 1.35 },
    ground: { near: 0xf4f7fb, far: 0xdfe7f0, hills: 40 },
    road: { asphalt: '#5d6168', line: '#ffffff', edge: '#f2f2f2', halfWidth: 7.2, shoulder: 1.8, shoulderColor: '#e9eef4' },
    barrier: 'rail',
    track: { minR: 30, maxR: 130, straight: [35, 120], hill: 14 },
    props: ['pine', 'pine', 'rock', 'peak'],
  },
  {
    id: 'city', name: 'Неон-Сити', tag: 'Ночной город',
    desc: 'Ночной мегаполис: неоновые вывески, фонари и небоскрёбы вдоль трассы.',
    grip: 0.95, night: true, weather: null,
    sky: { top: 0x05060f, horizon: 0x2a1745, bottom: 0x0a0a14 },
    fog: { color: 0x1a1030, near: 60, far: 520 },
    sun: { color: 0x9fb4ff, intensity: 0.55, dir: [0.3, 0.8, 0.4] },
    hemi: { sky: 0x5a4a9a, ground: 0x202030, intensity: 0.9 },
    ground: { near: 0x2a2a33, far: 0x1c1c24, hills: 0 },
    road: { asphalt: '#2c2c33', line: '#ffcc33', edge: '#dddddd', halfWidth: 8.3, shoulder: 1.4, shoulderColor: '#50505a' },
    barrier: 'concrete',
    track: { minR: 30, maxR: 130, straight: [50, 160], hill: 3, corners: true },
    props: ['building', 'building', 'lamp', 'neon'],
  },
  // ---------- «Полигон»: бесконечное поле с рельефом, без трассы и ограждений ----------
  {
    id: 'field_asphalt', name: 'Полигон «Асфальт»', tag: 'Поле · асфальт',
    desc: 'Бесконечная асфальтовая площадка с мягкими холмами. Катайся куда хочешь и дрифти.',
    grip: 1.0, night: false, weather: null, horizon: 'hills',
    sky: { top: 0x3f86d6, horizon: 0xcfe3f2, bottom: 0xdfe9f0 },
    fog: { color: 0xcfdde8, near: 120, far: 380 },
    sun: { color: 0xfff4e0, intensity: 2.6, dir: [0.45, 0.8, -0.35] },
    hemi: { sky: 0xeaf2ff, ground: 0x6a6a6a, intensity: 1.15 },
    ground: { near: 0x55565a, far: 0x7d8a7a, hills: 0 },
    smoke: 0xe8e8ea, dust: 0x8a8a8a, skid: 0x0c0c0c,
    field: { surface: 'asphalt', freq: 0.006, amp: 3.4, texBase: '#4d4e52', colA: 0xffffff, colB: 0xd9d9d9, colLow: 0xcfcfcf,
      props: [['tires', 5, 1, 1.2, 0.7], ['cone', 10, 1, 1, 0], ['mast', 1, 1, 1, 0.3], ['block', 2, 1, 1, 1.1]] },
  },
  {
    id: 'field_beach', name: 'Полигон «Пляж»', tag: 'Поле · пляж',
    desc: 'Бесконечный песчаный пляж с дюнами, пальмами и морем. Песок скользкий — дрифт в удовольствие.',
    grip: 0.8, night: false, weather: null, horizon: 'sea',
    sky: { top: 0x2f8fe0, horizon: 0xd8f0ff, bottom: 0xf3e6c8 },
    fog: { color: 0xd9ecf5, near: 120, far: 400 },
    sun: { color: 0xfff1d0, intensity: 2.9, dir: [-0.5, 0.75, -0.3] },
    hemi: { sky: 0xfff4dc, ground: 0xc9a86e, intensity: 1.15 },
    ground: { near: 0xe6cf98, far: 0x2f9ec4, hills: 0 },
    smoke: 0xf2e6c8, dust: 0xe0c58c, skid: 0x8a6d44,
    field: { surface: 'beach', freq: 0.009, amp: 3.4, shore: -70, texBase: '#e3c98f', colA: 0xffffff, colB: 0xf3e2c0, colLow: 0xb39868,
      props: [['palm', 3, 0.9, 1.3, 0.45], ['umbrella', 2, 1, 1, 0], ['rock', 1.5, 0.6, 1.4, 1.0]] },
  },
  {
    id: 'field_snow', name: 'Полигон «Снег»', tag: 'Поле · снег',
    desc: 'Бескрайнее заснеженное поле с холмами и ёлками. Скользко — заносы длинные и плавные.',
    grip: 0.68, night: false, weather: 'snow', horizon: 'snow',
    sky: { top: 0x6f93c4, horizon: 0xe3ebf4, bottom: 0xf2f6fa },
    fog: { color: 0xe0e8f0, near: 90, far: 360 },
    sun: { color: 0xffffff, intensity: 2.0, dir: [-0.4, 0.6, -0.5] },
    hemi: { sky: 0xe8f0ff, ground: 0x8899aa, intensity: 1.35 },
    ground: { near: 0xf4f7fb, far: 0xdfe7f0, hills: 0 },
    smoke: 0xffffff, dust: 0xf4f8ff, skid: 0x7d8898,
    field: { surface: 'snow', freq: 0.007, amp: 7, texBase: '#f2f5f9', colA: 0xffffff, colB: 0xe6edf6, colLow: 0xcfdcea,
      props: [['pine', 6, 0.8, 1.5, 0.5], ['srock', 1.5, 0.6, 1.5, 1.0], ['snowman', 0.4, 1, 1, 0.5]] },
  },
  // ---------- новые трассы (добавлены в конец — индексы старых карт не меняются) ----------
  {
    id: 'taiga', style: 'forest', name: 'Лес «Тайга»', tag: 'Летний лес',
    desc: 'Извилистая дорога сквозь густую тайгу: сосны, берёзы и холмы. Сцепление хорошее, но повороты слепые.',
    grip: 0.96, night: false, weather: null, horizon: 'forest',
    sky: { top: 0x3f86d8, horizon: 0xd2ead8, bottom: 0xbfd8c4 },
    fog: { color: 0xb4d0c2, near: 70, far: 470 },
    sun: { color: 0xfff1d2, intensity: 2.6, dir: [0.35, 0.8, -0.45] },
    hemi: { sky: 0xe2f0ff, ground: 0x4a6a3a, intensity: 1.15 },
    ground: { near: 0x6a9a40, far: 0x3d6b30, hills: 34 },
    smoke: 0xe4e8e4, dust: 0x8a7a52, skid: 0x0c0c0c,
    road: { asphalt: '#4a4c50', line: '#f4f4f4', edge: '#f0f0f0', halfWidth: 7.0, shoulder: 1.6, shoulderColor: '#7d6b4c' },
    barrier: 'rail', bank: 0x4f7f34,
    track: { minR: 28, maxR: 120, straight: [30, 110], hill: 15 },
    props: ['gpine', 'birch', 'bush', 'rock', 'fern'], rockColor: 0x80867f, bushColor: 0x3f7a30,
    decor: [['gpine', 18, 3, 100, 0.9, 1.9], ['birch', 10, 2.5, 60, 0.85, 1.4], ['gpine', 8, 100, 220, 1.4, 2.2, 6, false],
      ['bush', 8, 1.5, 45, 0.7, 1.5, 2, false], ['fern', 10, 1, 30, 0.8, 1.4, 1.5, false], ['rock', 4, 3, 80, 0.5, 1.8]],
  },
  {
    id: 'riviera', style: 'coast', name: 'Побережье «Ривьера»', tag: 'Морское побережье',
    desc: 'Солнечная дорога вдоль моря: пальмы, кипарисы и белые виллы на склонах. Быстрые дуги над водой.',
    grip: 1.0, night: false, weather: null, horizon: 'sea', cloudTint: 0xffffff,
    sky: { top: 0x2380e0, horizon: 0xcdeeff, bottom: 0x9fd3ea },
    fog: { color: 0xbfe0f0, near: 140, far: 760 },
    sun: { color: 0xfff4dc, intensity: 3.0, dir: [-0.45, 0.8, -0.35] },
    hemi: { sky: 0xf2f8ff, ground: 0xb79a6a, intensity: 1.15 },
    ground: { near: 0x9aab55, far: 0x6f8c40, hills: 24, sand: 0xead7a2 },
    sea: { level: 0, color: 0x1a86b8 },
    smoke: 0xf0ece4, dust: 0xd8c08a, skid: 0x0c0c0c,
    road: { asphalt: '#56575c', line: '#ffffff', edge: '#ffffff', halfWidth: 7.5, shoulder: 1.5, shoulderColor: '#d6c493' },
    barrier: 'tires',
    track: { minR: 35, maxR: 160, straight: [40, 150], hill: 8, events: false, base: 12 },
    props: ['palm', 'cypress', 'villa', 'oleander', 'rock'], rockColor: 0xb3a58c,
    decor: [['palm', 7, 2, 16, 0.9, 1.3, 2, true, 1, -1], ['palm', 4, 2, 30, 0.9, 1.4, 2, true, 1, 1], ['cypress', 7, 4, 70, 0.8, 1.4, 3, true, 1, 1],
      ['villa', 3, 14, 90, 0.9, 1.4, 9, true, 1, 1], ['oleander', 8, 1.5, 40, 0.8, 1.4, 2, false, 1, 1], ['rock', 5, 10, 36, 0.6, 2.2, 3, true, 1, -1]],
  },
  {
    id: 'magma', style: 'volcano', name: 'Вулкан «Магма»', tag: 'Вулканическое плато',
    desc: 'Чёрный базальт, светящиеся лавовые озёра и пепельное небо. Асфальт держит хорошо, но ошибок не прощает.',
    grip: 0.92, night: true, weather: null, horizon: 'volcano', stars: false, neon: [0xff6a1a, 0xff3a0a],
    sky: { top: 0x15111a, horizon: 0xc8561e, bottom: 0x2e130b },
    fog: { color: 0x502c22, near: 70, far: 540 },
    sun: { color: 0xffa060, intensity: 1.6, dir: [-0.35, 0.5, -0.6] },
    hemi: { sky: 0xffc0a0, ground: 0x5a3020, intensity: 1.8 },
    ground: { near: 0x6e6460, far: 0x423b39, hills: 30, rough: 5 },
    smoke: 0x8a807a, dust: 0x3a3230, skid: 0x050505,
    road: { asphalt: '#302e2e', line: '#ff8a1a', edge: '#d8d0c8', halfWidth: 7.6, shoulder: 1.5, shoulderColor: '#3c322d' },
    barrier: 'concrete',
    track: { minR: 32, maxR: 140, straight: [40, 140], hill: 12 },
    props: ['basalt', 'lava', 'crack', 'deadtree', 'volcano'],
    decor: [['basalt', 10, 3, 110, 0.6, 3.0], ['lava', 6, 4, 40, 0.8, 1.8, 4, false], ['crack', 10, 1.2, 40, 0.8, 1.6, 1, false],
      ['deadtree', 5, 3, 70, 0.8, 1.3], ['volcano', 1, 160, 240, 0.8, 1.5, 90, false, 0.7]],
  },
  {
    id: 'sakura', style: 'city', name: 'Сакура-Сити', tag: 'Город на закате',
    desc: 'Золотой час в мегаполисе: цветущая сакура, стеклянные башни и прямые углы перекрёстков.',
    grip: 0.97, night: false, weather: null, horizon: 'sakura', cloudTint: 0xffc2a0, neon: null,
    sky: { top: 0x4e63b0, horizon: 0xffa66c, bottom: 0xffc296 },
    fog: { color: 0xeea88a, near: 80, far: 560 },
    sun: { color: 0xffb070, intensity: 2.7, dir: [0.55, 0.3, -0.75] },
    hemi: { sky: 0xffd8c0, ground: 0x6a5060, intensity: 1.15 },
    ground: { near: 0x8f858c, far: 0x6e6670, hills: 0 },
    smoke: 0xf2e4e0, dust: 0x8a7f80, skid: 0x0c0c0c,
    road: { asphalt: '#3f3e45', line: '#ffffff', edge: '#eeeeee', halfWidth: 8.0, shoulder: 1.4, shoulderColor: '#a0939a' },
    barrier: 'concrete',
    track: { minR: 28, maxR: 120, straight: [50, 150], hill: 3, corners: true },
    props: ['lamp', 'sakura'],
    decor: [['sakura', 9, 2.2, 6.5, 0.9, 1.25, 1.2]],
  },
  {
    id: 'baikal', style: 'ice', name: 'Ледяное озеро «Байкал»', tag: 'Ночной лёд',
    desc: 'Трасса прямо по льду замёрзшего озера под северным сиянием. Очень скользко — заносы бесконечные.',
    grip: 0.58, night: true, weather: null, horizon: 'ice', aurora: true,
    sky: { top: 0x030a1c, horizon: 0x1a5a70, bottom: 0x081422 },
    fog: { color: 0x10293a, near: 70, far: 560 },
    sun: { color: 0xc4dcff, intensity: 0.9, dir: [-0.35, 0.55, -0.6] },
    hemi: { sky: 0x7aa8d0, ground: 0x1a2a3a, intensity: 1.05 },
    ground: { near: 0xe2edf6, far: 0x86aecb, hills: 2 },
    smoke: 0xeef6ff, dust: 0xdbe8f4, skid: 0x5d7a96,
    road: { asphalt: '#9cbcd2', line: null, edge: '#e2f3ff', halfWidth: 8.5, shoulder: 1.8, shoulderColor: '#e2eef8', cracks: true, kerb: false, rough: 0.2 },
    barrier: 'rail', bank: 0xeef5fb,
    track: { minR: 38, maxR: 170, straight: [50, 170], hill: 1.5, events: false },
    props: ['hummock', 'drift', 'hut', 'pine'],
    decor: [['hummock', 8, 4, 90, 0.6, 1.8], ['drift', 8, 1.5, 60, 0.8, 2.2, 2, false], ['hut', 1, 10, 50, 1, 1.2, 5, true, 0.35],
      ['pine', 10, 150, 240, 1.2, 2.0, 20, false]],
  },
];

// ---------- геометрии декораций (низкополигональные, с цветами вершин) ----------
function cactus() {
  const g = [];
  const trunk = new THREE.CylinderGeometry(0.35, 0.4, 4.5, 7); trunk.translate(0, 2.25, 0); g.push(tint(trunk, 0x3f7d3a));
  const a1 = new THREE.CylinderGeometry(0.22, 0.25, 1.6, 6); a1.translate(0.8, 2.6, 0); g.push(tint(a1, 0x3f7d3a));
  const a1b = new THREE.CylinderGeometry(0.22, 0.22, 0.9, 6); a1b.rotateZ(Math.PI / 2); a1b.translate(0.45, 1.9, 0); g.push(tint(a1b, 0x3f7d3a));
  const a2 = new THREE.CylinderGeometry(0.2, 0.22, 1.3, 6); a2.translate(-0.75, 3.1, 0); g.push(tint(a2, 0x44873f));
  const a2b = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 6); a2b.rotateZ(Math.PI / 2); a2b.translate(-0.4, 2.5, 0); g.push(tint(a2b, 0x44873f));
  return mergeGeometries(g);
}
function rock(color = 0x9c5b3b) {
  const r = new THREE.DodecahedronGeometry(1.4, 0);
  const p = r.attributes.position; const rnd = mulberry32(7);
  for (let i = 0; i < p.count; i++) p.setXYZ(i, p.getX(i) * (0.8 + rnd() * 0.5), p.getY(i) * (0.6 + rnd() * 0.3), p.getZ(i) * (0.8 + rnd() * 0.5));
  r.translate(0, 0.6, 0);
  return tint(r, color);
}
function mesa() {
  const g = [];
  const base = new THREE.CylinderGeometry(14, 20, 26, 9); base.translate(0, 13, 0); g.push(tint(base, 0xb4583a));
  const band = new THREE.CylinderGeometry(14.3, 14.6, 3, 9); band.translate(0, 22, 0); g.push(tint(band, 0xd07a4f));
  const top = new THREE.CylinderGeometry(13, 14, 1.5, 9); top.translate(0, 26.5, 0); g.push(tint(top, 0x9c4a30));
  return mergeGeometries(g);
}
function bush(color = 0x8a7d3c) {
  const b = new THREE.IcosahedronGeometry(0.7, 0); b.scale(1.2, 0.6, 1.2); b.translate(0, 0.3, 0);
  return tint(b, color);
}
function pine(snow = true, cols = [0x245a3e, 0x1f4d36]) {
  const g = [];
  const trunk = new THREE.CylinderGeometry(0.2, 0.3, 1.6, 6); trunk.translate(0, 0.8, 0); g.push(tint(trunk, 0x5a3d2b));
  const levels = [[2.2, 2.6, 1.6], [1.7, 2.3, 3.2], [1.2, 2.0, 4.6], [0.7, 1.6, 5.8]];
  levels.forEach(([r, h, y], i) => {
    const c = new THREE.ConeGeometry(r, h, 7); c.translate(0, y, 0); g.push(tint(c, cols[i % 2]));
    if (snow) { const s = new THREE.ConeGeometry(r * 0.72, h * 0.45, 7); s.translate(0, y + h * 0.3, 0); g.push(tint(s, 0xf1f5fa)); }
  });
  return mergeGeometries(g);
}
function peak() {
  const g = [];
  const m = new THREE.ConeGeometry(38, 60, 7); m.translate(0, 30, 0); g.push(tint(m, 0x6b7888));
  const s = new THREE.ConeGeometry(17, 27, 7); s.translate(0, 46.6, 0); g.push(tint(s, 0xf4f8fc));
  return mergeGeometries(g);
}
function lamp() {
  const g = [];
  const post = new THREE.CylinderGeometry(0.1, 0.14, 7, 6); post.translate(0, 3.5, 0); g.push(tint(post, 0x3a3a44));
  const arm = new THREE.BoxGeometry(0.12, 0.12, 2.2); arm.translate(0, 7, -1.0); g.push(tint(arm, 0x3a3a44));
  return mergeGeometries(g);
}

// ---------- новые декорации ----------
// неровный «комок» из икосаэдра (крона, куст, сугроб) — детерминированный шум вершин
function blob(r, sx, sy, sz, seed, jit = 0.25, detail = 0) {
  const g = new THREE.IcosahedronGeometry(r, detail);
  const p = g.attributes.position, rnd = mulberry32(seed), cache = new Map();
  for (let i = 0; i < p.count; i++) {
    const key = p.getX(i).toFixed(3) + p.getY(i).toFixed(3) + p.getZ(i).toFixed(3);
    if (!cache.has(key)) cache.set(key, 1 - jit / 2 + rnd() * jit);   // одинаковый сдвиг для совпадающих вершин — без щелей
    const k = cache.get(key);
    p.setXYZ(i, p.getX(i) * sx * k, p.getY(i) * sy * k, p.getZ(i) * sz * k);
  }
  return g;
}
function birch() {
  const g = [];
  const trunk = new THREE.CylinderGeometry(0.13, 0.2, 6.5, 6); trunk.translate(0, 3.25, 0); g.push(tint(trunk, 0xeeeae2));
  const rnd = mulberry32(21);
  for (let k = 0; k < 6; k++) { // тёмные чёрточки на коре
    const m = new THREE.BoxGeometry(0.22, 0.07, 0.42); m.rotateY(rnd() * Math.PI); m.translate(0, 0.6 + k * 0.85, 0); g.push(tint(m, 0x2a2a28));
  }
  [[0, 6.4, 0, 1.6, 0x6fae48], [0.6, 5.3, 0.3, 1.25, 0x7dbd52], [-0.6, 5.6, -0.3, 1.2, 0x5f9e40], [0.1, 7.5, 0.1, 1.05, 0x86c45a]].forEach(([x, y, z, r, c], i) => {
    const b = blob(r, 1, 1.25, 1, 30 + i, 0.3); b.translate(x, y, z); g.push(tint(b, c));
  });
  return mergeGeometries(g);
}
function fern() { // кустик папоротника / травы
  const g = [];
  for (let k = 0; k < 6; k++) {
    const l = new THREE.ConeGeometry(0.16, 1.3, 3); l.translate(0, 0.65, 0); l.rotateZ(0.6); l.rotateY((k / 6) * Math.PI * 2);
    g.push(tint(l, k % 2 ? 0x4f8f2f : 0x63a83a));
  }
  return mergeGeometries(g);
}
function cypress() {
  const g = [];
  const trunk = new THREE.CylinderGeometry(0.15, 0.2, 1.2, 5); trunk.translate(0, 0.6, 0); g.push(tint(trunk, 0x5a4330));
  const c = blob(1, 1.1, 4.4, 1.1, 41, 0.18); c.translate(0, 4.6, 0); g.push(tint(c, 0x2e5a2a));
  return mergeGeometries(g);
}
function villa() {
  const g = [];
  const body = new THREE.BoxGeometry(7, 4.2, 6); body.translate(0, 2.1, 0); g.push(tint(body, 0xf4efe4));
  const wing = new THREE.BoxGeometry(4, 3, 4); wing.translate(4.6, 1.5, 0.8); g.push(tint(wing, 0xf0dcc0));
  const roof = new THREE.ConeGeometry(5.3, 1.8, 4); roof.rotateY(Math.PI / 4); roof.scale(1.0, 1, 0.86); roof.translate(0, 5.1, 0); g.push(tint(roof, 0xc4572e));
  const roof2 = new THREE.ConeGeometry(3.1, 1.2, 4); roof2.rotateY(Math.PI / 4); roof2.translate(4.6, 3.6, 0.8); g.push(tint(roof2, 0xb24b28));
  for (const [x, y, z, w, d] of [[-2, 2.6, 3.02, 1, 0.08], [0.2, 2.6, 3.02, 1, 0.08], [2.2, 2.6, 3.02, 1, 0.08], [-2, 2.6, -3.02, 1, 0.08], [1.5, 2.6, -3.02, 1, 0.08],
    [3.5 + 0.02, 1.4, 2.82, 1, 0.08], [5.4, 1.4, 2.82, 1, 0.08]]) {
    const win = new THREE.BoxGeometry(w, 1.3, d); win.translate(x, y, z); g.push(tint(win, 0x3a6f9a));
  }
  return mergeGeometries(g);
}
function oleander() {
  const g = [];
  const b = blob(0.9, 1.2, 0.75, 1.2, 51, 0.3); b.translate(0, 0.65, 0); g.push(tint(b, 0x3f7a35));
  const rnd = mulberry32(52);
  for (let k = 0; k < 7; k++) {
    const f = new THREE.IcosahedronGeometry(0.22, 0); const a = rnd() * Math.PI * 2, r = 0.5 + rnd() * 0.5;
    f.translate(Math.cos(a) * r, 0.75 + rnd() * 0.5, Math.sin(a) * r); g.push(tint(f, k % 3 ? 0xf06ca0 : 0xffffff));
  }
  return mergeGeometries(g);
}
function basalt() {
  const g = [];
  const r = rock(0x2f2a29); g.push(r);
  // светящаяся трещина у основания отрисуется отдельной геометрией (см. lava)
  const c = new THREE.CylinderGeometry(0.5, 0.6, 2.4, 6); c.translate(1.1, 1.2, 0.3); g.push(tint(c, 0x262222));
  const c2 = new THREE.CylinderGeometry(0.4, 0.5, 1.6, 6); c2.translate(1.6, 0.8, -0.5); g.push(tint(c2, 0x332d2b));
  return mergeGeometries(g);
}
// лавовое озерцо: тёмный каменный ободок + светящаяся середина (отдельная геометрия с glow-материалом)
function lavaRim() {
  const ring = new THREE.RingGeometry(2.3, 3.4, 9, 1); ring.rotateX(-Math.PI / 2);
  const p = ring.attributes.position, rnd = mulberry32(61);
  for (let i = 0; i < p.count; i++) { const k = 0.85 + rnd() * 0.3; p.setXYZ(i, p.getX(i) * k, 0.3 + rnd() * 0.3, p.getZ(i) * k); }
  return tint(ring, 0x1d1817);
}
function lavaGlow() {
  const g = [];
  const outer = new THREE.CircleGeometry(2.55, 9); outer.rotateX(-Math.PI / 2); outer.translate(0, 0.32, 0); g.push(tint(outer, new THREE.Color(0.95, 0.13, 0.005)));
  const inner = new THREE.CircleGeometry(1.3, 7); inner.rotateX(-Math.PI / 2); inner.translate(0.3, 0.36, -0.2); g.push(tint(inner, new THREE.Color(1.0, 0.4, 0.03)));
  return mergeGeometries(g);
}
// светящаяся трещина на земле — ломаная из тонких квадов
function crack() {
  const pos = [], rnd = mulberry32(71);
  let x = 0, z = -3, a = 0;
  for (let k = 0; k < 7; k++) {
    const nx = x + Math.sin(a) * 1, nz = z + 1, w0 = 0.07 + rnd() * 0.12, w1 = 0.07 + rnd() * 0.12;
    pos.push(x - w0, 0.14, z, nx - w1, 0.14, nz, x + w0, 0.14, z, x + w0, 0.14, z, nx - w1, 0.14, nz, nx + w1, 0.14, nz);
    if (rnd() < 0.35) { const bx = nx + (rnd() - 0.5) * 1.6, bz = nz + 0.6; pos.push(nx - 0.05, 0.14, nz, bx, 0.14, bz, nx + 0.05, 0.14, nz); }
    x = nx; z = nz; a += (rnd() - 0.5) * 1.4;
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
  return tint(g, new THREE.Color(1.0, 0.2, 0.01));
}
function deadtree() {
  const g = [];
  const t = new THREE.CylinderGeometry(0.12, 0.28, 5, 5); t.translate(0, 2.5, 0); g.push(tint(t, 0x1e1a19));
  for (const [ry, rz, y, l] of [[0, 0.8, 2.8, 1.8], [2.2, 0.9, 3.5, 1.5], [4.1, 0.7, 2.2, 1.4], [1.2, 0.5, 4.2, 1.1]]) {
    const b = new THREE.CylinderGeometry(0.04, 0.09, l, 4); b.translate(0, l / 2, 0); b.rotateZ(rz); b.rotateY(ry); b.translate(0, y, 0); g.push(tint(b, 0x262120));
  }
  return mergeGeometries(g);
}
function volcano() {
  const g = [];
  const m = new THREE.CylinderGeometry(9, 46, 52, 9, 3); m.translate(0, 26, 0);
  const p = m.attributes.position, rnd = mulberry32(81), cache = new Map();
  for (let i = 0; i < p.count; i++) if (p.getY(i) < 51 && p.getY(i) > 1) {
    const key = p.getX(i).toFixed(2) + ',' + p.getY(i).toFixed(2) + ',' + p.getZ(i).toFixed(2);
    if (!cache.has(key)) cache.set(key, 0.85 + rnd() * 0.3);
    const k = cache.get(key); p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k);
  }
  g.push(tint(m, 0x2a2322));
  return mergeGeometries(g);
}
function volcanoGlow() {
  const g = [];
  const crater = new THREE.CircleGeometry(8.2, 9); crater.rotateX(-Math.PI / 2); crater.translate(0, 51.6, 0); g.push(tint(crater, new THREE.Color(1.0, 0.33, 0.02)));
  // лавовые потоки по склону — узкие полосы
  for (let k = 0; k < 3; k++) {
    const a = k * 2.3 + 0.4;
    const s = new THREE.PlaneGeometry(1.6, 50, 1, 1); s.translate(0, -25, 0); s.rotateX(-0.66); s.translate(0, 51.5, 8.4); s.rotateY(a);
    g.push(tint(s, new THREE.Color(0.95, 0.15, 0.008)));
  }
  return mergeGeometries(g);
}
function sakura() {
  const g = [];
  const t = new THREE.CylinderGeometry(0.16, 0.26, 2.6, 6); t.translate(0, 1.3, 0); g.push(tint(t, 0x4a3030));
  for (const [rz, ry] of [[0.6, 0], [0.7, 2.1], [0.5, 4.2]]) {
    const b = new THREE.CylinderGeometry(0.06, 0.12, 1.6, 4); b.translate(0, 0.8, 0); b.rotateZ(rz); b.rotateY(ry); b.translate(0, 2.4, 0); g.push(tint(b, 0x4a3030));
  }
  [[0, 4.1, 0, 1.9, 0xf6b3c8], [1.2, 3.6, 0.4, 1.4, 0xffcadb], [-1.1, 3.7, -0.3, 1.5, 0xee9fba], [0.2, 3.5, -1.2, 1.3, 0xffd8e4], [-0.3, 3.6, 1.2, 1.3, 0xf4a8c0]].forEach(([x, y, z, r, c], i) => {
    const b = blob(r, 1.15, 0.8, 1.15, 90 + i, 0.3); b.translate(x, y, z); g.push(tint(b, c));
  });
  return mergeGeometries(g);
}
function hummock() { // торосы: торчащие льдины
  const g = [], rnd = mulberry32(101);
  for (let k = 0; k < 5; k++) {
    const b = new THREE.BoxGeometry(1.4 + rnd() * 1.6, 0.25 + rnd() * 0.2, 1 + rnd() * 1.4);
    b.rotateX((rnd() - 0.5) * 1.6); b.rotateZ((rnd() - 0.5) * 1.8); b.rotateY(rnd() * 3);
    b.translate((rnd() - 0.5) * 2.4, 0.3 + rnd() * 0.4, (rnd() - 0.5) * 2.4);
    g.push(tint(b, [0x9fd2ec, 0xc4e8fa, 0x7fbde0][k % 3]));
  }
  const s = blob(1.3, 1.4, 0.35, 1.2, 102, 0.3); s.translate(0, 0.05, 0); g.push(tint(s, 0xf2f7fb));
  return mergeGeometries(g);
}
function drift() { const b = blob(1.4, 1.6, 0.42, 1.0, 111, 0.3); b.translate(0, 0.1, 0); return tint(b, 0xf3f8fc); }
function hut() { // рыбацкий домик на льду
  const g = [];
  const body = new THREE.BoxGeometry(2.4, 2.1, 3); body.translate(0, 1.05, 0); g.push(tint(body, 0x8a3b2a));
  const roof = new THREE.BoxGeometry(2.8, 0.25, 3.4); roof.rotateZ(0.12); roof.translate(0, 2.25, 0); g.push(tint(roof, 0xe8f0f6));
  const pipe = new THREE.CylinderGeometry(0.1, 0.1, 0.9, 5); pipe.translate(0.7, 2.6, -0.8); g.push(tint(pipe, 0x333333));
  const door = new THREE.BoxGeometry(0.05, 1.5, 0.8); door.translate(1.22, 0.8, 0.6); g.push(tint(door, 0x5a2a1e));
  return mergeGeometries(g);
}
function hutGlow() {
  const w = new THREE.PlaneGeometry(0.8, 0.6); w.rotateY(Math.PI / 2); w.translate(1.215, 1.3, -0.6);
  const w2 = new THREE.PlaneGeometry(0.8, 0.6); w2.translate(0, 1.3, 1.505);
  return mergeGeometries([tint(w, new THREE.Color(1.0, 0.62, 0.22)), tint(w2, new THREE.Color(1.0, 0.62, 0.22))]);
}

// геометрии декораций карты; ключ «тип_glow» — светящаяся часть (рисуется MeshBasicMaterial с теми же матрицами)
export function buildPropGeometries(map) {
  const out = {};
  const st = map.style ?? map.id;
  for (const p of new Set(map.props)) {
    if (p === 'cactus') out[p] = cactus();
    if (p === 'rock') out[p] = rock(map.rockColor ?? (st === 'snow' ? 0x7d8794 : 0x9c5b3b));
    if (p === 'mesa') out[p] = mesa();
    if (p === 'bush') out[p] = bush(map.bushColor);
    if (p === 'pine') out[p] = pine();
    if (p === 'gpine') out[p] = pine(false, [0x2f6a3e, 0x24563a]);
    if (p === 'peak') out[p] = peak();
    if (p === 'lamp') out[p] = lamp();
    if (p === 'birch') out[p] = birch();
    if (p === 'fern') out[p] = fern();
    if (p === 'palm') out[p] = palmGeo(0.16, [0x9c7a50, 0x8a6a43], [0x3a9a45, 0x2c8038]);
    if (p === 'cypress') out[p] = cypress();
    if (p === 'villa') out[p] = villa();
    if (p === 'oleander') out[p] = oleander();
    if (p === 'basalt') out[p] = basalt();
    if (p === 'lava') { out[p] = lavaRim(); out[p + '_glow'] = lavaGlow(); }
    if (p === 'crack') out[p + '_glow'] = crack();
    if (p === 'deadtree') out[p] = deadtree();
    if (p === 'volcano') { out[p] = volcano(); out[p + '_glow'] = volcanoGlow(); }
    if (p === 'sakura') out[p] = sakura();
    if (p === 'hummock') out[p] = hummock();
    if (p === 'drift') out[p] = drift();
    if (p === 'hut') { out[p] = hut(); out[p + '_glow'] = hutGlow(); }
  }
  return out;
}
