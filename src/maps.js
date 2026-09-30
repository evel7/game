import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { tint, mulberry32 } from './utils.js';

// Три карты. У каждой свой вид, сцепление, характер трассы и декорации.
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
function bush() {
  const b = new THREE.IcosahedronGeometry(0.7, 0); b.scale(1.2, 0.6, 1.2); b.translate(0, 0.3, 0);
  return tint(b, 0x8a7d3c);
}
function pine() {
  const g = [];
  const trunk = new THREE.CylinderGeometry(0.2, 0.3, 1.6, 6); trunk.translate(0, 0.8, 0); g.push(tint(trunk, 0x5a3d2b));
  const levels = [[2.2, 2.6, 1.6], [1.7, 2.3, 3.2], [1.2, 2.0, 4.6], [0.7, 1.6, 5.8]];
  levels.forEach(([r, h, y], i) => {
    const c = new THREE.ConeGeometry(r, h, 7); c.translate(0, y, 0); g.push(tint(c, i % 2 ? 0x1f4d36 : 0x245a3e));
    const s = new THREE.ConeGeometry(r * 0.72, h * 0.45, 7); s.translate(0, y + h * 0.3, 0); g.push(tint(s, 0xf1f5fa));
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

export function buildPropGeometries(map) {
  const out = {};
  for (const p of new Set(map.props)) {
    if (p === 'cactus') out[p] = cactus();
    if (p === 'rock') out[p] = rock(map.id === 'snow' ? 0x7d8794 : 0x9c5b3b);
    if (p === 'mesa') out[p] = mesa();
    if (p === 'bush') out[p] = bush();
    if (p === 'pine') out[p] = pine();
    if (p === 'peak') out[p] = peak();
    if (p === 'lamp') out[p] = lamp();
  }
  return out;
}
