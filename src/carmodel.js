import * as THREE from 'three';

// Процедурные 3D-модели машин. Всё строится кодом — никаких чужих моделей.
// Кузов: боковой профиль (сглаженный) → выдавливание → деформация (сужение носа/кормы и верха),
// кабина со стёклами и салоном, детальные колёса (шина-«лейтинг», спицы, гайки, диск, суппорт),
// фары с линзами, фонари, решётки, номера, зеркала, двери, пороги, спойлеры и т.д.

const smoothstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ---------- общие материалы ----------
const M = {
  glass: new THREE.MeshPhysicalMaterial({ color: 0x1b2633, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.55, envMapIntensity: 1.6, depthWrite: false }),
  black: new THREE.MeshStandardMaterial({ color: 0x121214, roughness: 0.65 }),
  gloss: new THREE.MeshStandardMaterial({ color: 0x0c0c0e, roughness: 0.25, metalness: 0.3 }),
  trim: new THREE.MeshStandardMaterial({ color: 0x1e1e22, roughness: 0.5, metalness: 0.2 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xe6e8ec, roughness: 0.12, metalness: 1.0 }),
  tire: new THREE.MeshStandardMaterial({ color: 0x19191b, roughness: 0.92 }),
  disc: new THREE.MeshStandardMaterial({ color: 0x77787c, roughness: 0.35, metalness: 0.9 }),
  interior: new THREE.MeshStandardMaterial({ color: 0x1a1a1d, roughness: 0.8 }),
  seat: new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.75 }),
  carbon: new THREE.MeshStandardMaterial({ color: 0x1a1b1f, roughness: 0.3, metalness: 0.5 }),
  lensClear: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.02, transparent: true, opacity: 0.25, depthWrite: false }),
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

// ---------- колесо ----------
function buildWheel(r, width, st, sx) {
  const wheel = new THREE.Group();
  const rw = width / 2;
  const prof = [[r * 0.7, -rw * 0.96], [r * 0.86, -rw], [r * 0.95, -rw * 0.92], [r * 0.995, -rw * 0.6], [r, -rw * 0.2], [r, rw * 0.2], [r * 0.995, rw * 0.6], [r * 0.95, rw * 0.92], [r * 0.86, rw], [r * 0.7, rw * 0.96]];
  const tg = new THREE.LatheGeometry(prof.map(([a, b]) => new THREE.Vector2(a, b)), 28);
  tg.rotateZ(Math.PI / 2);
  const tire = new THREE.Mesh(tg, M.tire); tire.castShadow = true; wheel.add(tire);
  const rimMat = new THREE.MeshStandardMaterial({ color: st.rim, roughness: 0.22, metalness: 0.85 });
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

// ---------- машина ----------
export function buildCarModel(spec, color, opts = {}) {
  const b = spec.body, wr = spec.wheelRadius;
  const st = STYLE[spec.id] || STYLE.kaze;
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshPhysicalMaterial({ color, roughness: 0.28, metalness: 0.45, clearcoat: 1.0, clearcoatRoughness: 0.08, envMapIntensity: 1.2 });
  const light = new THREE.Color(color).getHSL({}).l > 0.6;
  const accentMat = new THREE.MeshStandardMaterial({ color: light ? 0x141414 : 0xf2f2f2, roughness: 0.4 });
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
  const cabin = new THREE.Mesh(cabG, M.glass);
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
  const floorY = 0.45;
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
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xfff2c0, emissiveIntensity: opts.night ? 2.4 : 0.5, roughness: 0.15 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0x6a0808, emissive: 0xff1a1a, emissiveIntensity: opts.night ? 1.2 : 0.35, roughness: 0.25 });
  const fW = W * 0.92; // ширина носа после сужения
  const ex = b.extras || [];

  if (ex.includes('popups')) {
    for (const sx of [1, -1]) {
      box(0.44, 0.05, 0.32, bodyMat, sx * W * 0.3, b.upper[2][1] + 0.02, zF - 0.4, group);
      box(0.4, 0.02, 0.28, M.gloss, sx * W * 0.3, b.upper[2][1] - 0.005, zF - 0.4, group);
    }
  }
  for (const sx of [1, -1]) {
    // блок-фара: корпус, отражатель, линза-проектор, стекло, поворотник
    const hx = sx * fW * 0.33;
    box(0.44, 0.15, 0.08, M.gloss, hx, frontY, zF - 0.02, group);
    box(0.36, 0.07, 0.03, headMat, hx + sx * 0.03, frontY + 0.01, zF + 0.02, group);
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
  if (ex.includes('wing') || ex.includes('intakes')) {
    box(W * 0.7, 0.08, 0.2, M.carbon, 0, rb - 0.02, zR + 0.05, group);
    for (let k = -2; k <= 2; k++) box(0.015, 0.1, 0.22, M.carbon, k * W * 0.13, rb - 0.02, zR + 0.03, group);
  }
  // выхлоп
  const pipes = spec.id === 'veloce' ? [[0.06, 0], [-0.06, 0]] : spec.cylinders >= 6 ? [[W * 0.3, 0], [W * 0.36, 0], [-W * 0.3, 0], [-W * 0.36, 0]] : [[W * 0.3, 0]];
  for (const [x] of pipes) {
    cyl(0.045, 0.2, M.chrome, x, rb + 0.0, zR + 0.02, 'z', group, 14);
    cyl(0.032, 0.21, M.black, x, rb + 0.0, zR + 0.02, 'z', group, 12);
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
    if (!ex.includes('stripes')) {
      const nm = new THREE.MeshStandardMaterial({ map: numberTex(opts.number ?? ((spec.id.length * 17) % 90) + 10, light), transparent: true, roughness: 0.4 });
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.46), nm);
      const nz = (dz0 + dz1) / 2;
      pl.position.set(sx * (sideX(nz, 0.66) + 0.006), 0.66, nz); pl.rotation.y = sx * Math.PI / 2; group.add(pl);
    }
  }

  // ===== индивидуальные детали =====
  const deckY = b.upper[rearIdx][1];
  if (ex.includes('wing')) {
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0); wingShape.lineTo(0.36, 0.02); wingShape.lineTo(0.34, 0.05); wingShape.lineTo(0.02, 0.04); wingShape.closePath();
    const wg = extrude(wingShape, W * 0.95, 0.01, 1);
    const wing = new THREE.Mesh(wg, spec.id === 'ronin' ? M.carbon : bodyMat);
    wing.rotation.y = Math.PI; wing.position.set(0, deckY + 0.32, zR + 0.46); wing.castShadow = true; group.add(wing);
    for (const sx of [1, -1]) {
      box(0.03, 0.3, 0.12, M.gloss, sx * W * 0.3, deckY + 0.16, zR + 0.3, group);
      box(0.015, 0.16, 0.42, spec.id === 'ronin' ? M.carbon : bodyMat, sx * W * 0.475, deckY + 0.33, zR + 0.28, group);
    }
  } else if (ex.includes('ducktail')) {
    box(W * 0.88, 0.05, 0.16, bodyMat, 0, deckY + 0.04, zR + 0.13, group);
  }
  if (ex.includes('roofwing')) {
    box(cabX(roofY) * 2 + 0.06, 0.035, 0.28, bodyMat, 0, roofY + 0.07, c[2][0] - 0.1, group);
    for (const sx of [1, -1]) box(0.02, 0.1, 0.26, bodyMat, sx * (cabX(roofY) + 0.03), roofY + 0.04, c[2][0] - 0.1, group);
  }
  if (ex.includes('scoop')) {
    const hz = (b.upper[2][0] + c[0][0]) / 2;
    box(0.55, 0.1, 0.75, bodyMat, 0, b.upper[3][1] + 0.05, hz, group);
    const sc = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.07), grilleMat); sc.position.set(0, b.upper[3][1] + 0.06, hz + 0.38); group.add(sc);
  }
  if (spec.id === 'ronin') {
    // вентиляционные жабры на капоте
    const hz = (b.upper[2][0] + c[0][0]) / 2;
    for (const sx of [1, -1]) for (let k = 0; k < 4; k++) box(0.22, 0.012, 0.03, M.gloss, sx * 0.32, b.upper[3][1] + 0.02, hz - 0.12 + k * 0.08, group);
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
    const hood = box(0.16, 0.008, Math.abs(zF - c[0][0]), accentMat, sx, 0, (zF + c[0][0]) / 2, group);
    hood.position.y = b.upper[3][1] + 0.012;
    box(0.16, 0.008, roofLen, accentMat, sx, roofY + 0.045, roofZ, group);
    box(0.16, 0.008, Math.abs(c[3][0] - zR), accentMat, sx, deckY + 0.012, (c[3][0] + zR) / 2, group);
  }
  if (ex.includes('rallylights')) {
    box(W * 0.7, 0.03, 0.05, M.gloss, 0, frontY + 0.12, zF + 0.1, group);
    for (const sx of [0.3, 0.1, -0.1, -0.3]) {
      cyl(0.085, 0.07, M.gloss, sx * W, frontY + 0.05, zF + 0.12, 'z', group, 16);
      cyl(0.07, 0.075, headMat, sx * W, frontY + 0.05, zF + 0.125, 'z', group, 16);
    }
  }
  if (ex.includes('mudflaps')) for (const sx of [1, -1]) for (const z of [b.wheelF - wr - 0.14, b.wheelR - wr - 0.14]) box(0.3, 0.28, 0.015, M.black, sx * (b.track / 2), 0.26, z, group);
  if (spec.id === 'kaze' || spec.id === 'bulldog') {
    // антенна
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.006, 0.55, 5), M.black);
    ant.position.set(-W * 0.35, deckY + 0.28, zR + 0.45); ant.rotation.x = -0.25; group.add(ant);
  }
  if (spec.id === 'tundra') {
    // раллийная ливрея
    for (const sx of [1, -1]) {
      const stripe = box(0.006, 0.12, L * 0.7, accentMat, sx * (sideX(0, 0.5) + 0.004), 0.47, 0, group);
      stripe.rotation.x = 0.06;
    }
    box(0.8, 0.012, 0.14, accentMat, 0, roofY + 0.045, roofZ - 0.2, group);
  }

  // днище
  box(W * 0.86, 0.05, L * 0.82, M.black, 0, rb + 0.0, 0, group);

  // ===== колёса: pivot (руление) → wheel (вращение) =====
  const wheels = [];
  const cy = wr + (b.ride ?? 0);
  const caliperMat = new THREE.MeshStandardMaterial({ color: st.caliper, roughness: 0.4, metalness: 0.3 });
  for (const [z, sx, front] of [[b.wheelF, 1, true], [b.wheelF, -1, true], [b.wheelR, 1, false], [b.wheelR, -1, false]]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * b.track / 2, cy, z);
    const wheel = buildWheel(wr, front ? 0.25 : 0.27, st, sx);
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
  root.add(chassis); root.add(shadow);
  root.traverse((o) => { if (o.isMesh && o.material !== M.glass && !o.material.transparent) o.castShadow = true; });

  return { root, chassis, wheels, bodyMat, headMat, tailMat, spec };
}

// обновление анимации модели по состоянию физики
export function animateCar(model, veh, dt, braking) {
  for (const w of model.wheels) {
    w.wheel.rotation.x = veh.wheelSpin;
    if (w.front) w.pivot.rotation.y = veh.steer;
  }
  const targetRoll = Math.max(-0.09, Math.min(0.09, veh.ay * 0.009));
  const targetPitch = Math.max(-0.06, Math.min(0.06, -veh.ax * 0.006));
  model.chassis.rotation.z += (targetRoll - model.chassis.rotation.z) * Math.min(1, dt * 7);
  model.chassis.rotation.x += (targetPitch - model.chassis.rotation.x) * Math.min(1, dt * 7);
  model.tailMat.emissiveIntensity = braking ? 3.0 : model._tailBase ?? 0.35;
}
