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
    road: { asphalt: '#55504b', line: '#f2c230', edge: '#eeeeee', halfWidth: 6.5, shoulder: 1.6, shoulderColor: '#b98a5a' },
    barrier: 'tires',
    track: { minR: 45, maxR: 180, straight: [60, 220], hill: 9 },
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
    road: { asphalt: '#5d6168', line: '#ffffff', edge: '#f2f2f2', halfWidth: 6.0, shoulder: 1.8, shoulderColor: '#e9eef4' },
    barrier: 'rail',
    track: { minR: 32, maxR: 120, straight: [40, 140], hill: 16 },
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
    road: { asphalt: '#2c2c33', line: '#ffcc33', edge: '#dddddd', halfWidth: 7.5, shoulder: 1.4, shoulderColor: '#50505a' },
    barrier: 'concrete',
    track: { minR: 40, maxR: 150, straight: [50, 180], hill: 3 },
    props: ['building', 'building', 'lamp', 'neon'],
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
