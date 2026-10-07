import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Процедурные 3D-модели машин. Всё строится кодом — никаких чужих моделей.
// Кузов: боковой профиль (сглаженный) → выдавливание → деформация (сужение носа/кормы и верха),
// кабина со стёклами и салоном, детальные колёса (шина-«лейтинг», спицы, гайки, диск, суппорт),
// фары с линзами, фонари, решётки, номера, зеркала, двери, пороги, спойлеры и т.д.

const smoothstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ---------- общие материалы ----------
const M = {
  glass: new THREE.MeshStandardMaterial({ color: 0x1b2633, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.55, envMapIntensity: 1.4, depthWrite: false }),
  black: new THREE.MeshStandardMaterial({ color: 0x121214, roughness: 0.65 }),
  gloss: new THREE.MeshStandardMaterial({ color: 0x0c0c0e, roughness: 0.25, metalness: 0.3 }),
  trim: new THREE.MeshStandardMaterial({ color: 0x1e1e22, roughness: 0.6, metalness: 0.05 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xe6e8ec, roughness: 0.12, metalness: 1.0 }),
  tire: new THREE.MeshStandardMaterial({ color: 0x19191b, roughness: 0.92 }),
  disc: new THREE.MeshStandardMaterial({ color: 0x77787c, roughness: 0.35, metalness: 0.9 }),
  interior: new THREE.MeshStandardMaterial({ color: 0x1a1a1d, roughness: 0.8 }),
  seat: new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.75 }),
  carbon: new THREE.MeshStandardMaterial({ color: 0x1a1b1f, roughness: 0.3, metalness: 0.5 }),
  lensClear: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.02, transparent: true, opacity: 0.25, depthWrite: false }),
  reverse: new THREE.MeshStandardMaterial({ color: 0xdddddd, emissive: 0xffffff, emissiveIntensity: 0.1, roughness: 0.2 }),
  amber: new THREE.MeshStandardMaterial({ color: 0xff9a1a, emissive: 0xff8800, emissiveIntensity: 0.4, roughness: 0.3 }),
};

// Стили колёс и мелких деталей для каждой машины
const STYLE = {
  kaze: { spokes: 6, rim: 0xd9dadc, caliper: 0xd62828, rimDepth: 0.06, plate: '01 KG 086 AE' },
  bulldog: { spokes: 5, rim: 0xc9ccd2, caliper: 0x2a2a2a, rimDepth: 0.03, plate: '01 KG 069 V8', chromeBumpers: true },
  veloce: { spokes: 10, rim: 0x202124, caliper: 0xffc400, rimDepth: 0.02, plate: '01 KG 777 GT' },
  tundra: { spokes: 8, rim: 0xf1f1f1, caliper: 0xd62828, rimDepth: 0.04, plate: '01 KG 555 RR', cage: true },
  ronin: { spokes: 6, rim: 0x6d7076, caliper: 0x1f6fe0, rimDepth: 0.05, plate: '01 KG 034 GR' },
  vanta: { spokes: 7, rim: 0xb8bcc4, caliper: 0x1d3f8f, rimDepth: 0.04, plate: '01 KG 005 MW' },
  kitsune: { spokes: 5, rim: 0x2b2b2e, caliper: 0xffc400, rimDepth: 0.05, plate: '01 KG 013 RX' },
  tora: { spokes: 5, rim: 0xd6d8dc, caliper: 0xd62828, rimDepth: 0.07, plate: '01 KG 002 JZ' },
  toro: { spokes: 10, rim: 0x1c1c1f, caliper: 0xff8c00, rimDepth: 0.02, plate: '01 KG 012 LP' },
  stutt: { spokes: 5, rim: 0xc9ccd2, caliper: 0xffd000, rimDepth: 0.03, plate: '01 KG 911 SS' },
  shiro: { spokes: 8, rim: 0xc0c3c8, caliper: 0x444444, rimDepth: 0.07, plate: '01 KG 086 AE' },
  hayate: { spokes: 6, rim: 0xe8e8e8, caliper: 0xd62828, rimDepth: 0.04, plate: '01 KG 009 EV', cage: true },
  sakura: { spokes: 5, rim: 0x2b2d42, caliper: 0xff4d6d, rimDepth: 0.07, plate: '01 KG 015 SL' },
  stallion: { spokes: 5, rim: 0x1c1c1f, caliper: 0xd62828, rimDepth: 0.04, plate: '01 KG 050 GT' },
  pixel: { spokes: 5, rim: 0x8d99ae, caliper: 0xd62828, rimDepth: 0.03, plate: '01 KG 007 GT' },
  estate: { spokes: 10, rim: 0x3c3f45, caliper: 0xd62828, rimDepth: 0.03, plate: '01 KG 006 RS' },
  aurora: { spokes: 10, rim: 0x111114, caliper: 0x00f5d4, rimDepth: 0.02, plate: '01 KG 001 HX' },
  bars: { spokes: 6, rim: 0x2b2b2b, caliper: 0x555555, rimDepth: 0.06, plate: '01 KG 444 OR' },
  baron: { spokes: 7, rim: 0xb8bcc4, caliper: 0x1d3f8f, rimDepth: 0.04, plate: '01 KG 005 MB' },
  mamba: { spokes: 5, rim: 0x1c1c1f, caliper: 0xffba08, rimDepth: 0.04, plate: '01 KG 010 VR' },
  kei: { spokes: 4, rim: 0xd9dadc, caliper: 0x444444, rimDepth: 0.03, plate: '01 KG 660 KC' },
  zhiga: { spokes: 6, rim: 0xc9ccd2, caliper: 0x444444, rimDepth: 0.06, plate: '01 KG 107 AA', chromeBumpers: true },
  taiga: { spokes: 5, rim: 0x5c5c5c, caliper: 0x444444, rimDepth: 0.05, plate: '01 KG 214 NV' },
  rossa: { spokes: 7, rim: 0xd6d8dc, caliper: 0xd62828, rimDepth: 0.06, plate: '01 KG 124 SP', chromeBumpers: true },
  rancho: { spokes: 6, rim: 0x2b2b2b, caliper: 0x555555, rimDepth: 0.07, plate: '01 KG 150 V8', chromeBumpers: true },
  volt: { spokes: 10, rim: 0x8d99ae, caliper: 0x3a86ff, rimDepth: 0.02, plate: '01 KG 003 EV' },
  gruppo: { spokes: 8, rim: 0xf1f1f1, caliper: 0xd62828, rimDepth: 0.04, plate: '01 KG 037 GB', cage: true },
  kaiju: { spokes: 6, rim: 0x111114, caliper: 0xf72585, rimDepth: 0.08, plate: '01 KG 760 DR' },
  proto: { spokes: 10, rim: 0x111114, caliper: 0xffd166, rimDepth: 0.02, plate: '01 KG 024 LM' },
  zenith: { spokes: 10, rim: 0x1c1c1f, caliper: 0xfca311, rimDepth: 0.02, plate: '01 KG 016 W1' },
  bigfoot: { spokes: 6, rim: 0xc0c4cc, caliper: 0x333333, rimDepth: 0.12, plate: '01 KG 999 MT' },
  semya: { spokes: 5, rim: 0xb8bcc4, caliper: 0x444444, rimDepth: 0.04, plate: '01 KG 777 VN' },
  kross: { spokes: 5, rim: 0x3a3a3f, caliper: 0xe76f51, rimDepth: 0.05, plate: '01 KG 340 KR' },
  bukhanka: { spokes: 4, rim: 0x606c38, caliper: 0x333333, rimDepth: 0.06, plate: '01 KG 452 UZ' },
  titan: { spokes: 10, rim: 0x1c1c1f, caliper: 0xffbe0b, rimDepth: 0.03, plate: '01 KG 650 TT' },
  punto: { spokes: 7, rim: 0xe0e0e0, caliper: 0xd62828, rimDepth: 0.04, plate: '01 KG 230 PR' },
  charger: { spokes: 5, rim: 0x2b2b2b, caliper: 0xf48c06, rimDepth: 0.07, plate: '01 KG 717 HC' },
  diplomat: { spokes: 10, rim: 0xe8e8ea, caliper: 0x555555, rimDepth: 0.03, plate: '01 KG 001 VIP', chromeBumpers: true },
  dune: { spokes: 6, rim: 0x222222, caliper: 0x333333, rimDepth: 0.08, plate: '01 KG 200 DB', cage: true },
  gelato: { spokes: 5, rim: 0xffffff, caliper: 0x444444, rimDepth: 0.04, plate: '01 KG 123 IC' },
  // обновление 5
  riksha: { spokes: 4, rim: 0xe9c46a, caliper: 0x333333, rimDepth: 0.03, plate: '01 KG 003 TK' },
  kroha: { spokes: 4, rim: 0xd9dadc, caliper: 0x444444, rimDepth: 0.04, plate: '01 KG 968 ZP', chromeBumpers: true },
  chibi: { spokes: 6, rim: 0x2b2d42, caliper: 0xffbe0b, rimDepth: 0.04, plate: '01 KG 660 CR' },
  strela: { spokes: 5, rim: 0xe8e8ea, caliper: 0x444444, rimDepth: 0.03, plate: '01 KG 024 GA', chromeBumpers: true },
  aria: { spokes: 8, rim: 0x6c757d, caliper: 0xd62828, rimDepth: 0.05, plate: '01 KG 007 SV' },
  komar: { spokes: 8, rim: 0xf1f1f1, caliper: 0xd62828, rimDepth: 0.04, plate: '01 KG 205 RS', cage: true },
  seiryu: { spokes: 6, rim: 0xc0c3c8, caliper: 0xf72585, rimDepth: 0.08, plate: '01 KG 015 S5' },
  shaker: { spokes: 5, rim: 0xc9ccd2, caliper: 0x2a2a2a, rimDepth: 0.06, plate: '01 KG 427 SH', chromeBumpers: true },
  mule: { spokes: 6, rim: 0x111114, caliper: 0xf77f00, rimDepth: 0.07, plate: '01 KG 300 DR' },
  oda: { spokes: 5, rim: 0xb8bcc4, caliper: 0xd62828, rimDepth: 0.04, plate: '01 KG 300 ZR' },
  windsor: { spokes: 10, rim: 0xd6d8dc, caliper: 0x1b4332, rimDepth: 0.03, plate: '01 KG 012 DB', chromeBumpers: true },
  falco: { spokes: 5, rim: 0xd6d8dc, caliper: 0xffba08, rimDepth: 0.06, plate: '01 KG 040 FX' },
  attack: { spokes: 6, rim: 0x111114, caliper: 0x00f5d4, rimDepth: 0.08, plate: '01 KG 700 TA', cage: true },
  enduro: { spokes: 10, rim: 0x111114, caliper: 0xffd166, rimDepth: 0.03, plate: '01 KG 024 GE', cage: true },
  taifun: { spokes: 10, rim: 0xc0c3c8, caliper: 0xe63946, rimDepth: 0.03, plate: '01 KG 001 GT' },
  noctis: { spokes: 10, rim: 0x2b2b2e, caliper: 0x6a040f, rimDepth: 0.03, plate: '01 KG 012 NX' },
  furia: { spokes: 5, rim: 0x1c1c1f, caliper: 0xffd60a, rimDepth: 0.03, plate: '01 KG 012 FV' },
  iskra: { spokes: 10, rim: 0xe0e0e0, caliper: 0x00f5d4, rimDepth: 0.02, plate: '01 KG 000 EV' },
  skadi: { spokes: 7, rim: 0x111114, caliper: 0xff9f1c, rimDepth: 0.03, plate: '01 KG 001 SR' },
  raketa: { spokes: 4, rim: 0xe8e8ea, caliper: 0xd00000, rimDepth: 0.01, plate: '01 KG 001 RK' },
};

// ---------- утилиты ----------
function chaikin(pts, it = 2) {
  for (let k = 0; k < it; k++) {
    const out = [pts[0]];
    for (let i = 0; i < pts.length - 1; i++) {
      const p = pts[i], q = pts[i + 1];
      out.push([p[0] * 0.75 + q[0] * 0.25, p[1] * 0.75 + q[1] * 0.25]);
      out.push([p[0] * 0.25 + q[0] * 0.75, p[1] * 0.25 + q[1] * 0.75]);
    }
    out.push(pts[pts.length - 1]);
    pts = out;
  }
  return pts;
}

function bodyShape(up, b, wheelR) {
  const s = new THREE.Shape();
  const yb = up[up.length - 1][1];
  s.moveTo(up[0][0], up[0][1]);
  for (let i = 1; i < up.length; i++) s.lineTo(up[i][0], up[i][1]);
  const archR = wheelR + 0.08;
  const cy = wheelR + (b.ride ?? 0);
  const arch = (zc) => {
    s.lineTo(zc - archR, yb);
    s.lineTo(zc - archR, Math.min(cy, yb + 0.02));
    s.absarc(zc, cy, archR, Math.PI, 0, true);
    s.lineTo(zc + archR, yb);
  };
  arch(b.wheelR); arch(b.wheelF);
  s.lineTo(up[0][0], yb);
  s.closePath();
  return s;
}

function extrude(shape, width, bevel, segs = 3) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: segs, curveSegments: 14 });
  g.rotateY(-Math.PI / 2);
  g.computeBoundingBox();
  const bb = g.boundingBox;
  g.translate(-(bb.min.x + bb.max.x) / 2, 0, 0);
  return g;
}

function deform(g, fn) {
  const p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); fn(v); p.setXYZ(i, v.x, v.y, v.z); }
  g.computeVertexNormals();
}

function box(w, h, d, mat, x, y, z, parent) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = true;
  if (parent) parent.add(m);
  return m;
}
function cyl(r, h, mat, x, y, z, axis, parent, seg = 16) {
  const g = new THREE.CylinderGeometry(r, r, h, seg);
  if (axis === 'x') g.rotateZ(Math.PI / 2); else if (axis === 'z') g.rotateX(Math.PI / 2);
  const m = new THREE.Mesh(g, mat); m.position.set(x, y, z);
  if (parent) parent.add(m);
  return m;
}
// тонкая деталь между двумя точками (стойки, трубы каркаса)
function strut(a, b, t, mat, parent, round = false) {
  const len = a.distanceTo(b);
  const g = round ? new THREE.CylinderGeometry(t, t, len, 8).rotateX(Math.PI / 2) : new THREE.BoxGeometry(t, t, len);
  const m = new THREE.Mesh(g, mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.lookAt(b); parent.add(m);
  return m;
}

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
const texCache = {};
function grilleTex() {
  return texCache.grille ||= canvasTex(128, 64, (c, w, h) => {
    c.fillStyle = '#050505'; c.fillRect(0, 0, w, h);
    c.strokeStyle = '#3a3a3e'; c.lineWidth = 2;
    for (let y = 0; y < h + 8; y += 8) for (let x = (y / 8) % 2 ? 0 : 5; x < w + 10; x += 10) {
      c.beginPath();
      for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3; c.lineTo(x + Math.cos(a) * 4, y + Math.sin(a) * 4); }
      c.closePath(); c.stroke();
    }
  });
}
function plateTex(text) {
  return texCache['p' + text] ||= canvasTex(256, 56, (c, w, h) => {
    c.fillStyle = '#f4f4f4'; c.fillRect(0, 0, w, h);
    c.strokeStyle = '#111'; c.lineWidth = 4; c.strokeRect(2, 2, w - 4, h - 4);
    c.fillStyle = '#d0021b'; c.fillRect(6, 6, 34, h - 12);
    c.fillStyle = '#ffd400'; c.beginPath(); c.arc(23, 22, 8, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#fff'; c.font = 'bold 12px Arial'; c.textAlign = 'center'; c.fillText('KG', 23, 45);
    c.fillStyle = '#111'; c.font = 'bold 34px Arial'; c.textBaseline = 'middle'; c.fillText(text.slice(6), 150, 30);
    c.font = 'bold 26px Arial'; c.fillText(text.slice(0, 2), 62, 30);
  });
}
function numberTex(n, dark) {
  return texCache['n' + n + dark] ||= canvasTex(128, 128, (c) => {
    c.fillStyle = dark ? '#111' : '#fff'; c.beginPath(); c.arc(64, 64, 58, 0, Math.PI * 2); c.fill();
    c.fillStyle = dark ? '#fff' : '#111'; c.font = 'bold 70px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(String(n), 64, 68);
  });
}
const SPONSORS = [
  ['ASMAN OIL', '#ffd400', '#111'], ['NITRO-X', '#111', '#39ff14'], ['ТУРБО KG', '#d62828', '#fff'], ['DRIFT LAB', '#fff', '#111'],
  ['TOKMOK TIRES', '#111', '#ffcc00'], ['ALA-TOO', '#1d3f8f', '#fff'], ['KAZE WORKS', '#f2f2f2', '#d62828'], ['BISHKEK MS', '#00a86b', '#fff'],
];
function stickerTex(i) {
  const [txt, bg, fg] = SPONSORS[i % SPONSORS.length];
  return texCache['s' + i] ||= canvasTex(256, 64, (c, w, h) => {
    c.fillStyle = bg; c.beginPath(); c.roundRect ? c.roundRect(2, 2, w - 4, h - 4, 14) : c.rect(2, 2, w - 4, h - 4); c.fill();
    c.strokeStyle = fg; c.lineWidth = 3; c.stroke();
    c.fillStyle = fg; c.font = 'italic 900 36px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(txt, w / 2, h / 2 + 2);
  });
}
function bannerTex(text) {
  return texCache['b' + text] ||= canvasTex(512, 48, (c, w, h) => {
    c.fillStyle = '#0d0d10'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#fff'; c.font = 'italic 900 34px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, w / 2, h / 2 + 2);
  });
}

function toonRamp() {
  if (texCache.ramp) return texCache.ramp;
  const data = new Uint8Array([90, 90, 90, 255, 170, 170, 170, 255, 235, 235, 235, 255, 255, 255, 255, 255]);
  const t = new THREE.DataTexture(data, 4, 1, THREE.RGBAFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true;
  return (texCache.ramp = t);
}

function aoTex() {
  return texCache.ao ||= (() => {
    const cv = document.createElement('canvas'); cv.width = 64; cv.height = 128;
    const c = cv.getContext('2d');
    const g = c.createRadialGradient(32, 64, 8, 32, 64, 64);
    g.addColorStop(0, 'rgba(0,0,0,0.8)'); g.addColorStop(0.6, 'rgba(0,0,0,0.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 128);
    return new THREE.CanvasTexture(cv);
  })();
}

function glowTex() {
  return texCache.glow ||= (() => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 64;
    const c = cv.getContext('2d'), g = c.createRadialGradient(32, 32, 2, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(cv);
  })();
}
function beamTex() { // мягкое пятно света фар на дороге
  return texCache.beam ||= (() => {
    const cv = document.createElement('canvas'); cv.width = 64; cv.height = 128;
    const c = cv.getContext('2d'), g = c.createRadialGradient(32, 128, 4, 32, 90, 90);
    g.addColorStop(0, 'rgba(255,255,255,0.9)'); g.addColorStop(0.5, 'rgba(255,255,255,0.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 128);
    return new THREE.CanvasTexture(cv);
  })();
}

// Склеивает все неподвижные детали группы в один меш на каждый материал.
// Машина остаётся такой же детальной, но рисуется за ~20 вызовов вместо ~150 — сильно меньше нагрузки.
function mergeByMaterial(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const meshes = [];
  const out = [];
  root.traverse((o) => { if (o.isMesh) meshes.push(o); });
  const tmp = new THREE.Matrix4();
  for (const o of meshes) {
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(tmp.multiplyMatrices(inv, o.matrixWorld));
    const key = o.material.uuid;
    if (!buckets.has(key)) buckets.set(key, { mat: o.material, list: [], order: o.renderOrder });
    buckets.get(key).list.push(g);
    o.parent.remove(o);
    o.geometry.dispose();
  }
  for (const { mat, list, order } of buckets.values()) {
    const merged = mergeGeometries(list);
    list.forEach((g) => g.dispose());
    const m = new THREE.Mesh(merged, mat);
    m.renderOrder = order;
    // тень отбрасывают кузов, стёкла (чтобы у тени не было «дыры» на месте кабины) и шины
    m.castShadow = !(mat === M.lensClear) && !(mat.transparent && mat !== M.glass);
    m.receiveShadow = mat !== M.glass;
    root.add(m);
    out.push(m);
  }
  return out;
}

// Чёрный контур в мультяшном стиле (метод «вывернутой оболочки»): копия меша чуть раздута по нормалям
// и рисуется только изнутри. Нормали сглажены, чтобы контур не рвался на острых гранях.
const outlineMat = new THREE.ShaderMaterial({
  side: THREE.BackSide,
  uniforms: { t: { value: 0.022 } },
  vertexShader: 'uniform float t; void main(){ vec3 p = position + normal * t; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }',
  fragmentShader: 'void main(){ gl_FragColor = vec4(0.03, 0.03, 0.045, 1.0); }',
});
function addOutline(mesh, thick) {
  let g = mesh.geometry.clone();
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  g = mergeVertices(g, 1e-3);
  g.computeVertexNormals();
  const mat = thick ? outlineMat.clone() : outlineMat;
  if (thick) mat.uniforms.t.value = thick;
  const o = new THREE.Mesh(g, mat);
  o.position.copy(mesh.position); o.quaternion.copy(mesh.quaternion);
  o.userData.outlineOf = mesh;
  mesh.parent.add(o);
  return o;
}

// ---------- колесо ----------
function buildWheel(r, width, st, sx) {
  const wheel = new THREE.Group();
  const rw = width / 2;
  const prof = [[r * 0.7, -rw * 0.96], [r * 0.86, -rw], [r * 0.95, -rw * 0.92], [r * 0.995, -rw * 0.6], [r, -rw * 0.2], [r, rw * 0.2], [r * 0.995, rw * 0.6], [r * 0.95, rw * 0.92], [r * 0.86, rw], [r * 0.7, rw * 0.96]];
  const tg = new THREE.LatheGeometry(prof.map(([a, b]) => new THREE.Vector2(a, b)), 28);
  tg.rotateZ(Math.PI / 2);
  const tire = new THREE.Mesh(tg, M.tire); tire.castShadow = true; wheel.add(tire);
  const rimMat = new THREE.MeshStandardMaterial({ color: st.rim, roughness: 0.3, metalness: 0.6 });
  // обод (бочка)
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.7, r * 0.7, width * 0.92, 24, 1, true).rotateZ(Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x3a3b3f, metalness: 0.8, roughness: 0.4, side: THREE.DoubleSide }));
  wheel.add(barrel);
  const face = sx * (rw * 0.82 - st.rimDepth);
  // внешняя закраина обода
  const lip = new THREE.Mesh(new THREE.TorusGeometry(r * 0.69, 0.018, 6, 28).rotateY(Math.PI / 2), rimMat);
  lip.position.x = sx * rw * 0.86; wheel.add(lip);
  // тормозной диск (вращается вместе с колесом)
  cyl(r * 0.56, 0.035, M.disc, -sx * 0.02, 0, 0, 'x', wheel, 24);
  cyl(r * 0.2, 0.06, M.trim, -sx * 0.01, 0, 0, 'x', wheel, 12);
  // спицы
  const n = st.spokes;
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2;
    const sp = new THREE.Mesh(new THREE.BoxGeometry(0.035, r * 0.52, n > 8 ? 0.035 : 0.06), rimMat);
    sp.position.set(face, Math.cos(a) * r * 0.42, Math.sin(a) * r * 0.42);
    sp.rotation.x = a;
    wheel.add(sp);
  }
  // ступица, гайки, колпачок
  cyl(r * 0.17, 0.06, rimMat, face, 0, 0, 'x', wheel, 16);
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2;
    cyl(0.014, 0.05, M.chrome, face + sx * 0.03, Math.cos(a) * r * 0.1, Math.sin(a) * r * 0.1, 'x', wheel, 6);
  }
  cyl(r * 0.055, 0.07, M.gloss, face + sx * 0.02, 0, 0, 'x', wheel, 12);
  return wheel;
}

// ---------- тюнинг (варианты из progress.js: индексы должны совпадать) ----------
const WINGS = ['wing', 'ducktail', 'roofwing', 'bigwing'];
const RIM_STYLES = [null, { spokes: 5, rimDepth: 0.04 }, { spokes: 6, rimDepth: 0.05 }, { spokes: 14, rimDepth: 0.03 }, { spokes: 6, rimDepth: 0.11 }, { spokes: 18, rimDepth: 0.02 }, { spokes: 10, rimDepth: 0.03 }];
const RIM_HEX = [null, 0x111114, 0xe6e8ec, 0xd4af37, 0x9c6b30, 0xd62828, 0x1f6fe0, 0x39ff14, 0xf72585, 0xffffff];
const LIGHT_HEX = [null, 0xcfe4ff, 0xffd43b, 0x9be7ff, 0xff8fd8, 0xb388ff];
const GLOW_HEX = [null, 0x28e7ff, 0xff2ea6, 0x39ff14, 0xffd400, 0xb388ff, 0xff3b3b];
const TINTS = {};
function tintGlass(k) {
  if (TINTS[k]) return TINTS[k];
  const [color, opacity] = [[0x1b2633, 0.55], [0x141c26, 0.68], [0x0b0f14, 0.8], [0x050608, 0.9], [0x0d2a4a, 0.7]][k] || [0x1b2633, 0.55];
  const m = M.glass.clone(); m.color.set(color); m.opacity = opacity;
  return (TINTS[k] = m);
}

// ---------- машина ----------
export function buildCarModel(spec, color, opts = {}) {
  const b = spec.body, wr = spec.wheelRadius;
  const look = opts.look || {};
  let st = STYLE[spec.id] || STYLE.kaze;
  // тюнинг дисков: форма и цвет
  if (look.rims && RIM_STYLES[look.rims]) st = { ...st, ...RIM_STYLES[look.rims] };
  if (look.rimc && RIM_HEX[look.rimc] != null) st = { ...st, rim: RIM_HEX[look.rimc] };
  const group = new THREE.Group();
  // мультяшная (cel) заливка: 3 ступени света, как в мобильных дрифт-играх — красиво и очень дёшево
  const bodyMat = new THREE.MeshToonMaterial({ color, gradientMap: toonRamp() });
  const light = new THREE.Color(color).getHSL({}).l > 0.6;
  const accentMat = new THREE.MeshStandardMaterial({ color: spec.id === 'vanta' ? 0x1d4fb8 : (light ? 0x141414 : 0xf2f2f2), roughness: 0.4 });
  const L = b.L, W = b.W;

  // ===== кузов =====
  const up = chaikin(b.upper, 2);
  const halfL = L / 2;
  const beltY = b.cabin[0][1];
  const bodyTaper = (z, y) => (1 - 0.085 * smoothstep(0.55, 1.02, Math.abs(z) / halfL)) * (1 - 0.07 * smoothstep(beltY - 0.3, beltY + 0.05, y));
  const bodyG = extrude(bodyShape(up, b, wr), W, 0.07, 3);
  deform(bodyG, (v) => { v.x *= bodyTaper(v.z, v.y); });
  const body = new THREE.Mesh(bodyG, bodyMat);
  body.castShadow = true; body.receiveShadow = true;
  group.add(body);
  const sideX = (z, y) => (W / 2) * bodyTaper(z, y);

  // ===== кабина =====
  const c = b.cabin;
  const cabW = W * 0.84;
  const roofY = Math.max(c[1][1], c[2][1]);
  const cabTaper = (y) => 1 - 0.2 * smoothstep(beltY, roofY, y);
  const cab = new THREE.Shape();
  cab.moveTo(c[0][0] + 0.06, c[0][1] - 0.06);
  for (let i = 0; i < c.length; i++) cab.lineTo(c[i][0], c[i][1]);
  cab.lineTo(c[c.length - 1][0] + 0.06, c[c.length - 1][1] - 0.06);
  cab.closePath();
  const cabG = extrude(cab, cabW, 0.04, 2);
  deform(cabG, (v) => { v.x *= cabTaper(v.y); });
  const glassMat = look.tint ? tintGlass(look.tint) : M.glass;
  const cabin = new THREE.Mesh(cabG, glassMat);
  cabin.renderOrder = 3;
  group.add(cabin);
  const cabX = (y) => (cabW / 2) * cabTaper(y);
  // крыша
  const roofLen = Math.abs(c[1][0] - c[2][0]) + 0.12;
  const roofZ = (c[1][0] + c[2][0]) / 2;
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-roofLen / 2, 0); roofShape.lineTo(roofLen / 2, 0); roofShape.lineTo(roofLen / 2 - 0.04, 0.05); roofShape.lineTo(-roofLen / 2 + 0.04, 0.06); roofShape.closePath();
  const roofG = extrude(roofShape, cabX(roofY) * 2 + 0.04, 0.02, 2);
  const roof = new THREE.Mesh(roofG, bodyMat); roof.position.set(0, roofY - 0.02, roofZ); roof.castShadow = true; group.add(roof);
  // ---- щупы по реальной поверхности кузова: навесные детали садятся точно на кузов любой формы ----
  for (const m of [body, cabin, roof]) m.updateMatrixWorld(true);
  const _rc = new THREE.Raycaster(), _o = new THREE.Vector3(), _d = new THREE.Vector3();
  const topAt = (x, z, objs = [body], fb = b.upper[3][1]) => { _rc.set(_o.set(x, 20, z), _d.set(0, -1, 0)); const h = _rc.intersectObjects(objs, false)[0]; return h ? h.point.y : fb; };
  // брусок на поверхности: высота по кузову в двух точках, наклон — по уклону поверхности
  const onTop = (w, h, len, mat, x, zc, lift = 0.004, parent = group) => {
    const y1 = topAt(x, zc - len / 2), y2 = topAt(x, zc + len / 2), y0 = topAt(x, zc);
    const m = box(w, h, len, mat, x, Math.max((y1 + y2) / 2, y0 - 0.01) + h / 2 + lift, zc, parent);
    m.rotation.x = -Math.atan2(y2 - y1, len); return m;
  };
  // стойки A / B / C
  for (const sx of [1, -1]) {
    const P = (z, y, o = 0.012) => new THREE.Vector3(sx * (cabX(y) + o), y, z);
    strut(P(c[0][0], c[0][1]), P(c[1][0], c[1][1]), 0.07, bodyMat, group);
    strut(P(c[2][0], c[2][1]), P(c[3][0], c[3][1]), 0.09, bodyMat, group);
    const bz = c[1][0] + (c[2][0] - c[1][0]) * 0.45;
    strut(P(bz, beltY), P(bz, roofY - 0.03), 0.05, M.gloss, group);
    // молдинг по нижнему краю стёкол
    strut(P(c[0][0] - 0.02, beltY + 0.015, 0.02), P(c[3][0] + 0.05, beltY + 0.015, 0.02), 0.03, M.gloss, group);
  }
  // дворники
  for (const sx of [0.2, -0.25]) {
    const w = box(0.5, 0.015, 0.03, M.black, sx * W, c[0][1] + 0.03, c[0][0] - 0.1, group);
    w.rotation.set(-0.5, 0, 0.12);
  }

  // ===== салон (виден через стёкла) =====
  const floorY = Math.max(0.45, b.upper[b.upper.length - 1][1] - 0.05); // пол салона не ниже днища кузова (у BIGFOOT кузов высоко — сиденья раньше висели под ним)
  box(cabW * 0.9, 0.2, 0.35, M.interior, 0, beltY - 0.05, c[0][0] - 0.25, group);         // торпедо
  for (const sx of [1, -1]) {
    const x = sx * cabW * 0.24;
    const sz = c[1][0] - 0.3;
    box(0.42, 0.12, 0.45, M.seat, x, floorY + 0.12, sz, group);                              // подушка
    const back = box(0.42, 0.55, 0.1, M.seat, x, floorY + 0.42, sz - 0.25, group); back.rotation.x = -0.18;
    box(0.2, 0.14, 0.08, M.seat, x, floorY + 0.78, sz - 0.3, group);                          // подголовник
  }
  const sw = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.022, 8, 20), M.interior);         // руль (левый)
  sw.position.set(cabW * 0.24, beltY + 0.05, c[0][0] - 0.5); sw.rotation.x = -0.35; group.add(sw);
  if (st.cage) {
    const cz0 = c[1][0] - 0.1, cz1 = c[2][0] + 0.1, cy = roofY - 0.08;
    for (const sx of [1, -1]) {
      const x = sx * cabX(roofY) * 0.95;
      strut(new THREE.Vector3(x, floorY, cz0), new THREE.Vector3(x, cy, cz0), 0.02, M.chrome, group, true);
      strut(new THREE.Vector3(x, cy, cz0), new THREE.Vector3(x, cy, cz1), 0.02, M.chrome, group, true);
      strut(new THREE.Vector3(x, floorY, cz1), new THREE.Vector3(x, cy, cz1), 0.02, M.chrome, group, true);
    }
    strut(new THREE.Vector3(cabX(roofY) * 0.95, cy, cz1), new THREE.Vector3(-cabX(roofY) * 0.95, floorY + 0.2, cz1), 0.02, M.chrome, group, true);
  }

  // ===== перед =====
  const zF = Math.max(...b.upper.map((q) => q[0])) + 0.07;
  const zR = Math.min(...b.upper.map((q) => q[0])) - 0.07;
  const noseY = b.upper[0][1];
  const frontY = (b.upper[0][1] + b.upper[1][1]) / 2 + 0.06;
  const rearIdx = b.upper.length - 2;
  const rearY = (b.upper[rearIdx][1] + b.upper[rearIdx + 1][1]) / 2 + 0.08;
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xfff2c0, emissiveIntensity: opts.night ? 3.2 : 1.1, roughness: 0.15 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0x6a0808, emissive: 0xff1a1a, emissiveIntensity: opts.night ? 1.2 : 0.35, roughness: 0.25 });
  const fW = W * 0.92; // ширина носа после сужения
  // капот: от основания лобового стекла до носа
  const hood0 = c[0][0] + 0.06, hood1 = zF - 0.14, hoodLen = Math.max(0.2, hood1 - hood0), hoodC = (hood0 + hood1) / 2;
  // кабина доходит почти до кормы — хэтчбек, универсал, фургон: крылья ставим на край крыши
  let hatch = c[c.length - 1][0] < zR + 0.5;
  // настоящий верх крыши (у фургона-будки кузов выше кабины — багажник и воздухозаборник ставим на него)
  const roofTop = Math.max(roofY + 0.04, topAt(0, roofZ, [body, roof, cabin], roofY)) - 0.04;
  let ex = b.extras || [];
  // тюнинг антикрыла и винила меняет набор деталей кузова
  if (look.wing) { ex = ex.filter((e) => !WINGS.includes(e)); const w = [null, null, 'ducktail', 'wing', 'roofwing', 'bigwing'][look.wing]; if (w) ex = [...ex, w]; }
  if (look.decal === 1 || look.decal === 5) ex = [...ex, 'stripes'];
  if (look.light && LIGHT_HEX[look.light] != null) { headMat.color.set(LIGHT_HEX[look.light]); headMat.emissive.set(LIGHT_HEX[look.light]); }
  // ореол вокруг фар: плоскости с аддитивным смешиванием, склеиваются в один меш — почти бесплатно
  const glowMat = new THREE.MeshBasicMaterial({ map: glowTex(), color: headMat.emissive, transparent: true, opacity: opts.night ? 0.95 : 0.4, blending: THREE.AdditiveBlending, depthWrite: false });
  const glow = (x, y, z, w, h = w * 0.7) => { const g = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glowMat); g.position.set(x, y, z); g.renderOrder = 4; group.add(g); };
  let underglow = null;
  const bm = opts.night ? new THREE.MeshBasicMaterial({ map: beamTex(), color: headMat.emissive, transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false }) : null;
  if (opts.night) for (const sx of [1, -1]) { // световые пятна фар на асфальте
    const bp = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 7), bm); bp.rotation.x = -Math.PI / 2; bp.position.set(sx * W * 0.25, 0.045, zF + 3.4); bp.renderOrder = 2; bp.userData.beam = true; group.add(bp);
  }

  if (ex.includes('popups')) {
    for (const sx of [1, -1]) {
      box(0.44, 0.05, 0.32, bodyMat, sx * W * 0.3, b.upper[2][1] + 0.02, zF - 0.4, group);
      box(0.4, 0.02, 0.28, M.gloss, sx * W * 0.3, b.upper[2][1] - 0.005, zF - 0.4, group);
    }
  }
  if (ex.includes('roundlights')) {
    // круглые «лягушачьи» фары на крыльях
    for (const sx of [1, -1]) {
      const hx = sx * fW * 0.34, hy = b.upper[2][1] - 0.02, hz = zF - 0.32;
      cyl(0.12, 0.2, bodyMat, hx, hy, hz, 'z', group, 20);
      cyl(0.1, 0.03, headMat, hx, hy, hz + 0.1, 'z', group, 20);
      glow(hx, hy, hz + 0.13, 0.5, 0.5);
    }
  }
  const wedge = b.upper[1][1] - b.upper[0][1] < 0.2;
  if (wedge) {
    // у клиновидных суперкаров фары — узкие полосы на верхней плоскости носа
    const zz = zF - 0.35;
    let yy = up[0][1];
    for (let i = 0; i < up.length - 1; i++) if (up[i][0] >= zz && up[i + 1][0] <= zz) { const t = (up[i][0] - zz) / (up[i][0] - up[i + 1][0]); yy = up[i][1] + (up[i + 1][1] - up[i][1]) * t; }
    const slope = Math.atan2(b.upper[2][1] - b.upper[1][1], b.upper[1][0] - b.upper[2][0]);
    for (const sx of [1, -1]) {
      const h1 = box(0.46, 0.03, 0.2, M.gloss, sx * fW * 0.32, yy + 0.09, zz, group); h1.rotation.x = slope;
      const h2 = box(0.42, 0.05, 0.06, headMat, sx * fW * 0.32, yy + 0.105, zz + 0.07, group); h2.rotation.x = slope;
      glow(sx * fW * 0.32, yy + 0.12, zz + 0.12, 0.75, 0.32);
    }
  }
  for (const sx of (ex.includes('roundlights') || wedge ? [] : [1, -1])) {
    // блок-фара: корпус, отражатель, линза-проектор, стекло, поворотник
    const hx = sx * fW * 0.33;
    box(0.44, 0.15, 0.08, M.gloss, hx, frontY, zF - 0.02, group);
    box(0.36, 0.07, 0.03, headMat, hx + sx * 0.03, frontY + 0.01, zF + 0.02, group);
    glow(hx + sx * 0.03, frontY + 0.01, zF + 0.05, 0.7, 0.36);
    cyl(0.04, 0.03, M.chrome, hx - sx * 0.12, frontY, zF + 0.025, 'z', group, 14);
    box(0.44, 0.15, 0.01, M.lensClear, hx, frontY, zF + 0.035, group);
    box(0.1, 0.035, 0.02, M.amber, hx + sx * 0.16, frontY - 0.055, zF + 0.03, group);
  }
  // решётка радиатора + нижний воздухозаборник + сплиттер
  const grilleMat = new THREE.MeshStandardMaterial({ map: grilleTex(), roughness: 0.6 });
  const grille = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.34, 0.1), grilleMat);
  grille.position.set(0, frontY - 0.04, zF + 0.012); group.add(grille);
  const intake = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.62, 0.12), grilleMat);
  intake.position.set(0, noseY + 0.09, zF + 0.01); group.add(intake);
  box(W * 0.94, 0.06, 0.14, st.chromeBumpers ? M.chrome : M.trim, 0, noseY + 0.01, zF - 0.01, group);
  box(W * 0.9, 0.02, 0.12, M.carbon, 0, noseY - 0.035, zF + 0.03, group);
  // противотуманки
  for (const sx of [1, -1]) cyl(0.04, 0.03, headMat, sx * W * 0.37, noseY + 0.09, zF + 0.01, 'z', group, 12);
  // номер спереди
  const plateMat = new THREE.MeshStandardMaterial({ map: plateTex(st.plate), roughness: 0.5 });
  const pf = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.1), plateMat); pf.position.set(0, noseY + 0.1, zF + 0.02); group.add(pf);
  // эмблема
  cyl(0.04, 0.015, M.chrome, 0, frontY + 0.04, zF + 0.02, 'z', group, 16);

  // ===== зад =====
  if (ex.includes('roundtails')) {
    for (const sx of [1, -1]) for (const k of [0.22, 0.38]) {
      cyl(0.085, 0.05, M.gloss, sx * W * k, rearY, zR + 0.01, 'z', group, 18);
      cyl(0.07, 0.06, tailMat, sx * W * k, rearY, zR - 0.005, 'z', group, 18);
      cyl(0.03, 0.065, tailMat, sx * W * k, rearY, zR - 0.01, 'z', group, 12);
    }
  } else {
    // сплошная полоса фонарей через всю корму
    box(W * 0.88, 0.13, 0.05, M.gloss, 0, rearY, zR + 0.015, group);
    for (const sx of [1, -1]) {
      box(0.42, 0.09, 0.03, tailMat, sx * W * 0.28, rearY, zR - 0.005, group);
      box(0.1, 0.05, 0.03, M.reverse, sx * W * 0.1, rearY, zR - 0.005, group);
    }
    box(W * 0.12, 0.03, 0.03, tailMat, 0, rearY + 0.02, zR - 0.005, group);
  }
  const rb = b.upper[b.upper.length - 1][1];
  box(W * 0.94, 0.07, 0.14, st.chromeBumpers ? M.chrome : M.trim, 0, rb + 0.01, zR + 0.01, group);
  const pr = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.1), plateMat); pr.position.set(0, rearY - 0.16, zR - 0.01); pr.rotation.y = Math.PI; group.add(pr);
  // диффузор
  if ((ex.includes('wing') || ex.includes('intakes')) && !look.rear) {
    box(W * 0.7, 0.03, 0.24, M.carbon, 0, rb - 0.04, zR + 0.12, group);
    for (let k = -2; k <= 2; k++) box(0.015, 0.08, 0.2, M.carbon, k * W * 0.13, rb - 0.07, zR + 0.11, group);
  }
  // выхлоп
  let pipes = spec.id === 'veloce' ? [[0.06, 0], [-0.06, 0]] : spec.cylinders >= 6 ? [[W * 0.3, 0], [W * 0.36, 0], [-W * 0.3, 0], [-W * 0.36, 0]] : [[W * 0.3, 0]];
  let pr0 = 0.045;
  if (look.exh === 1) pipes = [[W * 0.3, 0], [-W * 0.3, 0]];
  if (look.exh === 2) pipes = [[W * 0.27, 0], [W * 0.35, 0], [-W * 0.27, 0], [-W * 0.35, 0]];
  if (look.exh === 3) { pipes = [[W * 0.3, 0]]; pr0 = 0.075; }
  for (const [x] of pipes) {
    cyl(pr0, 0.2, M.chrome, x, rb + 0.0, zR + 0.02, 'z', group, 14);
    cyl(pr0 * 0.72, 0.21, M.black, x, rb + 0.0, zR + 0.02, 'z', group, 12);
  }

  // ===== бока =====
  for (const sx of [1, -1]) {
    // зеркала на ножке
    const mz = c[0][0] - 0.2, my = beltY + 0.1, mx = sx * (sideX(mz, beltY) + 0.06);
    strut(new THREE.Vector3(sx * (sideX(mz, beltY) - 0.02), beltY + 0.02, mz), new THREE.Vector3(mx, my, mz), 0.025, M.gloss, group);
    box(0.13, 0.09, 0.14, bodyMat, mx + sx * 0.03, my, mz, group);
    box(0.01, 0.07, 0.11, M.chrome, mx + sx * 0.03, my, mz - 0.075, group);
    // линии дверей
    const dz0 = c[0][0] - 0.05, dz1 = c[1][0] + (c[2][0] - c[1][0]) * 0.45;
    const yMid = (rb + beltY) / 2;
    for (const z of [dz0, dz1]) box(0.008, beltY - rb - 0.08, 0.012, M.black, sx * (sideX(z, yMid) + 0.003), yMid + 0.02, z, group);
    box(0.008, 0.012, Math.abs(dz0 - dz1), M.black, sx * (sideX((dz0 + dz1) / 2, rb + 0.06) + 0.003), rb + 0.06, (dz0 + dz1) / 2, group);
    // ручка
    box(0.03, 0.03, 0.14, M.gloss, sx * (sideX(dz1 + 0.2, beltY - 0.1) + 0.012), beltY - 0.1, dz1 + 0.2, group);
    // пороги
    const skL = Math.abs(b.wheelF - b.wheelR) - (wr + 0.1) * 2;
    box(0.07, 0.1, skL, M.carbon, sx * (sideX(0, rb) + 0.01), rb + 0.04, (b.wheelF + b.wheelR) / 2, group);
    // лючок бензобака
    cyl(0.06, 0.01, M.trim, sx * (sideX(b.wheelR + 0.35, beltY - 0.15) + 0.004), beltY - 0.15, b.wheelR + 0.35, 'x', group, 14);
    // расширители арок
    for (const z of [b.wheelF, b.wheelR]) {
      const flare = new THREE.Mesh(new THREE.TorusGeometry(wr + 0.09, 0.035, 6, 20, Math.PI), M.trim);
      flare.rotation.y = Math.PI / 2; flare.position.set(sx * (sideX(z, wr) + 0.005), wr + (b.ride ?? 0), z);
      group.add(flare);
    }
    // гоночный номер
    if (!ex.includes('stripes') || look.decal === 5) {
      const nm = new THREE.MeshStandardMaterial({ map: numberTex(opts.number ?? ((spec.id.length * 17) % 90) + 10, light), transparent: true, roughness: 0.4 });
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.46), nm);
      const nz = (dz0 + dz1) / 2;
      const ny = Math.max(0.6, Math.min(beltY - 0.28, yMid + 0.04));
      pl.position.set(sx * (sideX(nz, ny) + 0.006), ny, nz); pl.rotation.y = sx * Math.PI / 2; group.add(pl);
    }
  }

  // ===== индивидуальные детали =====
  // высота крышки багажника/моторного отсека — самая высокая точка кузова позади кабины
  const deckY = Math.max(...b.upper.filter((q) => q[0] < c[c.length - 1][0] + 0.05).map((q) => q[1]));
  // высота крышки багажника там, где стоят стойки крыла (по реальной поверхности кузова)
  const deckAt = (z) => topAt(0, z, [body], deckY);
  if (hatch && roofY - deckAt(zR + 0.3) > 0.4) hatch = false; // низкая крышка мотора за кабиной (суперкар) — крыло на корме
  const wingProfile = (len, th, w, mat) => {
    const sh = new THREE.Shape();
    sh.moveTo(0, 0); sh.lineTo(len, th * 0.4); sh.lineTo(len * 0.95, th); sh.lineTo(len * 0.05, th * 0.8); sh.closePath();
    const m = new THREE.Mesh(extrude(sh, w, 0.01, 1), mat); m.rotation.y = Math.PI; m.castShadow = true; return m;
  };
  // крыло на краю крыши (для хэтчбеков и фургонов): на стойках над задней кромкой крыши
  const roofEdgeWing = (big) => {
    const ry = topAt(0, c[2][0] + 0.15, [body, roof, cabin], roofY), h = big ? 0.2 : 0.13, len = big ? 0.42 : 0.32, zc = c[2][0] - 0.02;
    const wm = big ? M.carbon : bodyMat, ww = cabX(roofY) * 2 + (big ? 0.2 : 0.08);
    const w = wingProfile(len, 0.05, ww, wm); w.position.set(0, ry + h, zc + len / 2); group.add(w);
    for (const sx of [1, -1]) {
      strut(new THREE.Vector3(sx * ww * 0.3, ry, zc + 0.12), new THREE.Vector3(sx * ww * 0.3, ry + h + 0.02, zc + 0.1), 0.03, M.gloss, group);
      box(0.015, big ? 0.11 : 0.07, len * 0.85, wm, sx * ww / 2, ry + h + 0.025, zc, group);
    }
  };
  if (ex.includes('wing') && hatch) roofEdgeWing(false);
  else if (ex.includes('wing')) {
    const dy = deckAt(zR + 0.3);
    const wing = wingProfile(0.36, 0.05, W * 0.95, spec.id === 'ronin' ? M.carbon : bodyMat);
    wing.position.set(0, dy + 0.32, zR + 0.46); group.add(wing);
    for (const sx of [1, -1]) {
      box(0.03, 0.32, 0.12, M.gloss, sx * W * 0.3, dy + 0.16, zR + 0.3, group);
      box(0.015, 0.16, 0.42, spec.id === 'ronin' ? M.carbon : bodyMat, sx * W * 0.475, dy + 0.33, zR + 0.28, group);
    }
  } else if (ex.includes('ducktail') && hatch) {
    box(cabX(roofY) * 2 + 0.06, 0.035, 0.22, bodyMat, 0, topAt(0, c[2][0] + 0.1, [roof, cabin], roofY) + 0.02, c[2][0] - 0.05, group);
  } else if (ex.includes('ducktail')) {
    const dz = zR + 0.14; onTop(W * 0.86, 0.05, 0.18, bodyMat, 0, dz, -0.005);
  }
  if (ex.includes('scoop')) {
    const sl = Math.min(0.75, hoodLen * 0.6), sb = onTop(0.55, 0.09, sl, bodyMat, 0, hoodC, -0.01);
    const sc = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.06), grilleMat); sc.position.set(0, 0.005, sl / 2 + 0.003); sb.add(sc);
  }
  if (spec.id === 'ronin') {
    // вентиляционные жабры на капоте
    for (const sx of [1, -1]) for (let k = 0; k < 4; k++) onTop(0.22, 0.012, 0.03, M.gloss, sx * 0.32, hoodC - 0.12 + k * 0.08);
    box(W * 0.9, 0.025, 0.1, M.carbon, 0, noseY - 0.04, zF + 0.06, group);
  }
  if (spec.id === 'veloce') {
    // жалюзи моторного отсека за кабиной
    for (let k = 0; k < 6; k++) box(W * 0.5, 0.012, 0.05, M.gloss, 0, c[3][1] + 0.01 - k * 0.012, c[3][0] + 0.05 - k * 0.1 - 0.12, group);
  }
  if (ex.includes('roofscoop')) {
    box(0.36, 0.08, 0.4, bodyMat, 0, roofY + 0.07, roofZ + 0.25, group);
    const rs = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.05), grilleMat); rs.position.set(0, roofY + 0.07, roofZ + 0.451); group.add(rs);
  }
  if (ex.includes('intakes')) for (const sx of [1, -1]) {
    const it = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.2), grilleMat);
    it.position.set(sx * (sideX(-0.6, 0.55) + 0.006), 0.55, -0.6); it.rotation.y = sx * Math.PI / 2; group.add(it);
  }
  if (ex.includes('stripes')) for (const sx of [0.13, -0.13]) {
    // полосы по капоту — кусками, чтобы повторять изгиб
    const sl = hoodLen + 0.1, n = Math.max(4, Math.ceil(sl / 0.1));
    for (let k = 0; k < n; k++) onTop(0.16, 0.008, sl / n + 0.02, accentMat, sx, hood0 - 0.05 + sl * (k + 0.5) / n, 0.003);
    if (roofTop < roofY + 0.06) box(0.16, 0.008, roofLen, accentMat, sx, roofY + 0.045, roofZ, group); // у фургона-будки крыша спрятана в кузове
    const dl = Math.abs(c[3][0] - zR) - 0.12, dn = Math.max(3, Math.ceil(dl / 0.1));
    if (dl > 0.25) for (let k = 0; k < dn; k++) onTop(0.16, 0.008, dl / dn + 0.02, accentMat, sx, zR + 0.06 + dl * (k + 0.5) / dn, 0.003);
  }
  if (ex.includes('rallylights')) {
    box(W * 0.7, 0.03, 0.05, M.gloss, 0, frontY + 0.12, zF + 0.1, group);
    for (const sx of [0.3, 0.1, -0.1, -0.3]) {
      cyl(0.085, 0.07, M.gloss, sx * W, frontY + 0.05, zF + 0.12, 'z', group, 16);
      cyl(0.07, 0.075, headMat, sx * W, frontY + 0.05, zF + 0.125, 'z', group, 16);
      glow(sx * W, frontY + 0.05, zF + 0.17, 0.36, 0.36);
    }
  }
  if (ex.includes('bigwing') && hatch) roofEdgeWing(true);
  else if (ex.includes('bigwing')) {
    // большое тайм-аттак крыло на «лебединых шеях»: широкий профиль, торцевые пластины
    const dy = deckAt(zR + 0.4);
    const bwing = wingProfile(0.48, 0.07, W * 1.0, M.carbon);
    bwing.position.set(0, dy + 0.46, zR + 0.6); group.add(bwing);
    box(W * 0.98, 0.035, 0.02, bodyMat, 0, dy + 0.52, zR + 0.13, group); // гурни-флап
    for (const sx of [1, -1]) {
      strut(new THREE.Vector3(sx * W * 0.22, dy, zR + 0.42), new THREE.Vector3(sx * W * 0.22, dy + 0.52, zR + 0.3), 0.035, M.gloss, group);
      box(0.016, 0.22, 0.52, bodyMat, sx * W * 0.5, dy + 0.47, zR + 0.36, group);
    }
  }
  if (ex.includes('sidepipes')) for (const sx of [1, -1]) {
    // боковые выхлопные трубы вдоль порогов
    const z0 = b.wheelF - wr - 0.12, z1 = b.wheelR + wr + 0.12;
    const px = sx * (sideX((z0 + z1) / 2, rb) + 0.09);
    cyl(0.05, Math.abs(z0 - z1), M.chrome, px, rb + 0.07, (z0 + z1) / 2, 'z', group, 12);
    cyl(0.062, 0.12, M.chrome, px, rb + 0.07, z1 + 0.04, 'z', group, 12);
    cyl(0.045, 0.125, M.black, px, rb + 0.07, z1 + 0.04, 'z', group, 10);
  }
  if (ex.includes('lightbar')) {
    // светодиодная балка на крыше
    box(cabX(roofY) * 2 * 0.9, 0.07, 0.09, M.gloss, 0, roofY + 0.1, c[1][0] - 0.12, group);
    box(cabX(roofY) * 2 * 0.86, 0.04, 0.02, headMat, 0, roofY + 0.1, c[1][0] - 0.07, group);
    for (const sx of [1, -1]) box(0.03, 0.08, 0.03, M.gloss, sx * cabX(roofY) * 0.8, roofY + 0.05, c[1][0] - 0.12, group);
  }
  if (ex.includes('mudflaps')) for (const sx of [1, -1]) for (const z of [b.wheelF - wr - 0.14, b.wheelR - wr - 0.14]) box(0.3, 0.28, 0.015, M.black, sx * (b.track / 2), 0.26, z, group);
  if (spec.id === 'kaze' || spec.id === 'bulldog') {
    // антенна
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.006, 0.55, 5), M.black);
    ant.position.set(-W * 0.35, deckY + 0.28, zR + 0.45); ant.rotation.x = -0.25; group.add(ant);
  }
  if (spec.id === 'tundra') {
    box(0.8, 0.012, 0.14, accentMat, 0, roofY + 0.045, roofZ - 0.2, group);
  }

  // ===== внешний тюнинг игрока (opts.look) =====
  if (look.hood === 1) onTop(W * 0.68, 0.012, hoodLen * 0.9, M.carbon, 0, hoodC, 0.002);
  if (look.hood === 2) {
    const sl = Math.min(0.62, hoodLen * 0.55), sb = onTop(0.5, 0.085, sl, bodyMat, 0, hoodC, -0.01);
    const sc = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.055), grilleMat); sc.position.set(0, 0.005, sl / 2 + 0.003); sb.add(sc);
  }
  if (look.hood === 3) for (const sx of [1, -1]) for (let k = 0; k < 5; k++) onTop(0.24, 0.014, 0.03, M.gloss, sx * W * 0.2, hoodC - 0.16 + k * 0.08, 0.002);
  if (look.bumper === 1) box(W * 0.96, 0.022, 0.16, M.carbon, 0, noseY - 0.05, zF + 0.05, group);
  if (look.bumper === 2) {
    box(W * 1.0, 0.028, 0.18, M.carbon, 0, noseY - 0.055, zF + 0.06, group);
    for (const sx of [1, -1]) {
      box(0.018, 0.08, 0.16, M.carbon, sx * W * 0.5, noseY - 0.02, zF + 0.05, group);
      const cn = box(0.24, 0.015, 0.12, M.carbon, sx * W * 0.43, noseY + 0.16, zF - 0.02, group); cn.rotation.z = sx * 0.3;
    }
  }
  if (look.bumper === 3) {
    const sk = box(W * 0.7, 0.025, 0.34, M.chrome, 0, noseY - 0.05, zF - 0.06, group); sk.rotation.x = -0.25;
    for (const sx of [1, -1]) box(0.05, 0.18, 0.05, M.gloss, sx * W * 0.36, noseY + 0.04, zF + 0.06, group);
  }
  if (look.skirts) {
    const skL = Math.abs(b.wheelF - b.wheelR) - (wr + 0.1) * 2;
    for (const sx of [1, -1]) {
      box(look.skirts === 2 ? 0.14 : 0.09, 0.11, skL + 0.04, look.skirts === 2 ? bodyMat : M.carbon, sx * (sideX(0, rb) + (look.skirts === 2 ? 0.05 : 0.025)), rb + 0.03, (b.wheelF + b.wheelR) / 2, group);
      if (look.skirts === 2) for (const z of [b.wheelF, b.wheelR]) {
        const fl = new THREE.Mesh(new THREE.TorusGeometry(wr + 0.1, 0.05, 6, 20, Math.PI), bodyMat);
        fl.rotation.y = Math.PI / 2; fl.position.set(sx * (sideX(z, wr) + 0.035), wr + (b.ride ?? 0), z); group.add(fl);
      }
    }
  }
  if (look.rear) {
    // диффузор под задним бампером: не торчит за корму
    box(W * 0.78, 0.03, 0.26, M.carbon, 0, rb - 0.045, zR + 0.13, group);
    const fins = look.rear === 2 ? 4 : 2;
    for (let k = -fins; k <= fins; k++) box(0.015, look.rear === 2 ? 0.12 : 0.08, 0.22, M.carbon, k * W * 0.34 / fins, rb - 0.045 - (look.rear === 2 ? 0.06 : 0.04), zR + 0.12, group);
  }
  if (look.roof === 1) {
    for (const sx of [1, -1]) box(0.03, 0.03, roofLen * 0.9, M.gloss, sx * cabX(roofY) * 0.8, roofTop + 0.09, roofZ, group);
    for (const zz of [-0.3, 0, 0.3]) box(cabX(roofY) * 1.7, 0.02, 0.03, M.gloss, 0, roofTop + 0.1, roofZ + zz * roofLen, group);
  }
  if (look.roof === 2) {
    box(0.34, 0.08, 0.38, bodyMat, 0, roofTop + 0.07, roofZ + 0.2, group);
    const rs = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.05), grilleMat); rs.position.set(0, roofTop + 0.07, roofZ + 0.391); group.add(rs);
  }
  if (look.roof === 3 || look.decal === 4) box(cabX(roofY) * 2 + 0.03, 0.012, roofLen, look.roof === 3 ? M.carbon : M.gloss, 0, roofTop + 0.045, roofZ, group);
  if (look.decal === 3) for (const sx of [1, -1]) {
    // полоса по борту
    box(0.006, 0.07, L * 0.78, accentMat, sx * (sideX(0, rb + 0.22) + 0.008), rb + 0.22, 0, group);
  }
  if (look.decal === 2) {
    // номер на капоте
    const nm = new THREE.MeshStandardMaterial({ map: numberTex(opts.number ?? ((spec.id.length * 17) % 90) + 10, light), transparent: true, roughness: 0.4 });
    const hn = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.42), nm);
    const hy1 = topAt(0, hoodC - 0.2), hy2 = topAt(0, hoodC + 0.2);
    hn.rotation.x = -Math.PI / 2 - Math.atan2(hy2 - hy1, 0.4); hn.position.set(0, topAt(0, hoodC) + 0.008, hoodC); group.add(hn);
  }
  if (look.glow) {
    // неоновая подсветка днища: дешёвая плоскость с аддитивным смешиванием, без источников света
    const gc = GLOW_HEX[look.glow] ?? 0x28e7ff;
    const gm = new THREE.MeshBasicMaterial({ color: gc, map: aoTex(), transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
    const gp = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.5, L * 1.1), gm);
    gp.rotation.x = -Math.PI / 2; gp.position.y = 0.035; gp.renderOrder = 2; underglow = gp;
  }

  // ===== стиль дрифт-корча: полоса на лобовом, наклейки спонсоров, буксировочные петли, канарды, пины капота =====
  {
    const d = new THREE.Vector3(0, c[1][1] - c[0][1], c[1][0] - c[0][0]).normalize();
    const n = new THREE.Vector3(0, -d.z, d.y).normalize();
    const top = new THREE.Vector3(0, c[1][1], c[1][0]).addScaledVector(d, -0.08).addScaledVector(n, 0.012);
    const ban = new THREE.Mesh(new THREE.PlaneGeometry(cabX(top.y) * 2 * 0.95, 0.11), new THREE.MeshStandardMaterial({ map: bannerTex(st.banner || spec.name + ' RACING'), roughness: 0.5 }));
    ban.position.copy(top); ban.lookAt(top.clone().add(n)); group.add(ban);
    const seed = spec.id.charCodeAt(0) + spec.id.charCodeAt(1);
    const stick = (k, z, y, w) => {
      for (const sx of [1, -1]) {
        const pl = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 4), new THREE.MeshStandardMaterial({ map: stickerTex(seed + k), transparent: true, roughness: 0.45 }));
        pl.position.set(sx * (sideX(z, y) + 0.007), y, z); pl.rotation.y = sx * Math.PI / 2; group.add(pl);
      }
    };
    stick(0, b.wheelF - 0.02, wr * 2 + 0.16 + (b.ride ?? 0), 0.5);
    stick(1, b.wheelR + 0.05, wr * 2 + 0.17 + (b.ride ?? 0), 0.46);
    stick(2, (b.wheelF + b.wheelR) / 2 + 0.15, rb + 0.17, 0.62);
    // красные буксировочные петли
    const towMat = new THREE.MeshStandardMaterial({ color: 0xe01e1e, roughness: 0.5 });
    const tf = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 6, 12), towMat); tf.position.set(-W * 0.3, noseY + 0.02, zF + 0.1); group.add(tf);
    const tr = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 6, 12), towMat); tr.position.set(W * 0.34, rb + 0.02, zR - 0.08); group.add(tr);
    // канарды на углах бампера
    for (const sx of [1, -1]) {
      const cn = box(0.22, 0.015, 0.12, M.carbon, sx * W * 0.42, noseY + 0.12, zF - 0.05, group); cn.rotation.z = sx * 0.25;
    }
    // пины капота
    for (const sx of [1, -1]) cyl(0.02, 0.02, M.chrome, sx * W * 0.3, topAt(sx * W * 0.3, zF - 0.25) + 0.005, zF - 0.25, 'y', group, 8);
  }

  // днище
  box(W * 0.86, 0.05, L * 0.82, M.black, 0, rb + 0.0, 0, group);

  // ===== колёса: pivot (руление) → wheel (вращение) =====
  const wheels = [];
  // колёса всегда стоят на земле (центр = радиус); ride поднимает только кузов и арки —
  // раньше колёса поднимались вместе с кузовом, и BIGFOOT «висел» над землёй
  const cy = wr;
  const caliperMat = new THREE.MeshStandardMaterial({ color: st.caliper, roughness: 0.4, metalness: 0.3 });
  for (const [z, sx, front] of [[b.wheelF, 1, true], [b.wheelF, -1, true], [b.wheelR, 1, false], [b.wheelR, -1, false]]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * b.track / 2, cy, z);
    const wheel = buildWheel(wr, b.tireW ?? (front ? 0.25 : 0.27), st, sx);
    pivot.add(wheel);
    // суппорт — не вращается
    const cal = box(0.07, wr * 0.36, wr * 0.26, caliperMat, -sx * 0.0, wr * 0.3, -wr * 0.3, pivot);
    cal.rotation.x = 0.8;
    group.add(pivot);
    wheels.push({ pivot, wheel, front, side: sx, z });
  }

  // пятно тени
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.35, L * 1.2), new THREE.MeshBasicMaterial({ map: aoTex(), transparent: true, depthWrite: false, opacity: 0.8 }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.03; shadow.renderOrder = 2;

  const chassis = new THREE.Group();
  const root = new THREE.Group();
  chassis.add(group);
  for (const w of wheels) { group.remove(w.pivot); root.add(w.pivot); }
  const merged = mergeByMaterial(group);
  if (opts.outline !== false) for (const m of merged) if (m.material === bodyMat || m.material === glassMat || m.material === M.trim || m.material === M.carbon) addOutline(m, m.material === bodyMat ? 0 : 0.014);
  for (const w of wheels) {
    const wm = mergeByMaterial(w.wheel);
    if (opts.outline !== false) for (const m of wm) if (m.material === M.tire) addOutline(m, 0.016);
    w.pivot.children.forEach((c) => { if (c.isMesh) c.castShadow = false; });
  }
  root.add(chassis); root.add(shadow);
  if (underglow) root.add(underglow);
  // занижение: кузов ниже, колёса на месте
  if (look.low) chassis.position.y = -[0, 0.03, 0.06, 0.09][look.low];

  // LOD для далёких машин: мелкие детали (решётки, номера, диски, суппорты, эмблемы…) прячем —
  // вблизи их видно, а издалека это лишь десятки лишних вызовов отрисовки на каждую машину
  const keep = new Set([bodyMat, glassMat, M.black, tailMat, headMat, M.tire, glowMat]);
  const detail = [];
  group.children.forEach((m) => { if (m.isMesh && !keep.has(m.material) && !(m.userData.outlineOf && m.userData.outlineOf.material === bodyMat)) detail.push(m); });
  for (const w of wheels) w.wheel.children.forEach((m) => { if (m.isMesh && m.material !== M.tire && !m.userData.outlineOf) detail.push(m); });
  for (const w of wheels) w.pivot.children.forEach((m) => { if (m.isMesh) detail.push(m); });
  for (const m of detail) m.userData.detail = true;
  const casters = [];
  root.traverse((m) => { if (m.isMesh && m.castShadow) casters.push(m); });

  return { root, chassis, wheels, bodyMat, headMat, tailMat, spec, detail, casters, far: false };
}

// переключение детализации: far = true — упрощённая машина без мелких деталей и без отбрасывания тени
export function setCarLod(model, far) {
  if (model.far === far) return;
  model.far = far;
  for (const m of model.detail) m.visible = !far;
  for (const m of model.casters) m.castShadow = !far;
}

// обновление анимации модели по состоянию физики
export function animateCar(model, veh, dt, braking) {
  for (const w of model.wheels) {
    w.wheel.rotation.x = veh.wheelSpin;
    if (w.front) w.pivot.rotation.y = veh.steer;
  }
  // мягкий крен и клевок (небольшие и плавные — без дёрганья кузова)
  const targetRoll = Math.max(-0.05, Math.min(0.05, veh.ay * 0.005));
  const targetPitch = Math.max(-0.025, Math.min(0.025, -veh.ax * 0.0025));
  model.chassis.rotation.z += (targetRoll - model.chassis.rotation.z) * Math.min(1, dt * 4);
  model.chassis.rotation.x += (targetPitch - model.chassis.rotation.x) * Math.min(1, dt * 3);
  model.tailMat.emissiveIntensity = braking ? 3.0 : model._tailBase ?? 0.35;
}
