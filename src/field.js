import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mulberry32, fbm2, canvasTexture, clamp, smooth, tint } from './utils.js';

// «Полигон»: бесконечное открытое поле с рельефом (асфальт / пляж / снег).
// Мир строится квадратными чанками вокруг игрока и удаляется позади.
// Высота считается одной функцией и интерполируется ровно так же, как треугольники меша,
// поэтому колёса всегда стоят на земле.
// Интерфейс совместим с Track (P, project, update, ensure, hw, wall…), чтобы остальной код не менялся.

const CS = 96;        // размер чанка, м
const RES = 4;        // шаг сетки, м
const N = CS / RES;   // клеток в чанке
const RAD = 3;        // радиус чанков вокруг игрока

export class Field {
  // opts.props — расставлять объекты (препятствия, декорации); opts.flat — ровная земля без холмов
  constructor(scene, map, seed = 1, quality = 1, opts = {}) {
    this.isField = true;
    this.props = opts.props !== false; this.flat = !!opts.flat;
    this.scene = scene; this.map = map; this.seed = seed; this.quality = quality;
    this.f = map.field;
    this.hw = 1e9; this.wall = 1e9; this.base = 0; this.lastIdx = 1e9; this.sh = 0;
    this.chunks = new Map();
    this.root = new THREE.Group(); scene.add(this.root);
    this.target = { x: 0, z: 0 };
    this.makeMaterials();
    this.propGeo = buildFieldProps(map.field.surface);
    this.update(0);
  }

  // ---------- рельеф ----------
  H(x, z) {
    const f = this.f, s = this.seed;
    let y = 0;
    if (!this.flat) {
      y = (fbm2(x * f.freq, z * f.freq, s + 3, 4) - 0.5) * f.amp * 2;
      y += (fbm2(x * f.freq * 3.1, z * f.freq * 3.1, s + 41, 2) - 0.5) * f.amp * 0.35;
    }
    // ровная площадка на старте
    const r = Math.hypot(x, z);
    y *= smooth(clamp((r - 25) / 60, 0, 1));
    // пляж: берег моря вдоль x < shore, дно уходит под воду
    if (f.shore !== undefined && x < f.shore + 30) y -= (f.shore + 30 - x) * 0.09;
    return y;
  }
  // высота ровно по треугольникам меша
  heightAt(x, z) {
    const gx = Math.floor(x / RES), gz = Math.floor(z / RES);
    const fx = x / RES - gx, fz = z / RES - gz;
    const X0 = gx * RES, Z0 = gz * RES;
    const a = this.H(X0, Z0), b = this.H(X0 + RES, Z0), c = this.H(X0, Z0 + RES), d = this.H(X0 + RES, Z0 + RES);
    if (fx + fz <= 1) return a + (b - a) * fx + (c - a) * fz;
    return d + (c - d) * (1 - fx) + (b - d) * (1 - fz);
  }
  // уклон вдоль направления (dx,dz) — используется для наклона кузова и гравитации
  grad(x, z) {
    const e = 1.2;
    return [(this.heightAt(x + e, z) - this.heightAt(x - e, z)) / (2 * e), (this.heightAt(x, z + e) - this.heightAt(x, z - e)) / (2 * e)];
  }

  // ---------- совместимость с Track ----------
  ensure() {}
  P(i) {
    const z = i * 2, y = this.heightAt(0, z);
    return { x: 0, z, y, h: 0, lx: 1, lz: 0, s: z, k: 0 };
  }
  sample(fi, out = {}) { return Object.assign(out, this.P(fi), { slope: 0 }); }
  project(x, z, hint) { return { idx: hint, lat: 0, y: this.heightAt(x, z), h: 0, lx: 1, lz: 0, slope: 0, k: 0 }; }

  // препятствия рядом с точкой (круги {x,z,r})
  collidersNear(x, z) {
    const out = [];
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    for (let i = cx - 1; i <= cx + 1; i++) for (let j = cz - 1; j <= cz + 1; j++) {
      const c = this.chunks.get(i + ',' + j);
      if (c) for (const o of c.userData.col) out.push(o);
    }
    return out;
  }

  // ---------- материалы ----------
  makeMaterials() {
    const f = this.f;
    const tex = canvasTexture(512, 512, (c, w, h) => {
      c.fillStyle = f.texBase; c.fillRect(0, 0, w, h);
      const rnd = mulberry32(5);
      for (let i = 0; i < 9000; i++) {
        const v = rnd();
        c.fillStyle = v < 0.5 ? `rgba(0,0,0,${0.05 + rnd() * 0.08})` : `rgba(255,255,255,${0.04 + rnd() * 0.07})`;
        const s = 1 + rnd() * 2.5; c.fillRect(rnd() * w, rnd() * h, s, s);
      }
      if (f.surface === 'asphalt') {
        // разметка площадки: рамка квадрата 32×32 м и штриховые линии
        c.strokeStyle = 'rgba(245,245,240,0.8)'; c.lineWidth = 5; c.strokeRect(2.5, 2.5, w - 5, h - 5);
        c.setLineDash([26, 22]); c.strokeStyle = 'rgba(242,194,48,0.75)'; c.lineWidth = 4;
        c.beginPath(); c.moveTo(w / 2, 0); c.lineTo(w / 2, h); c.stroke();
        c.setLineDash([]);
        // следы шин от прошлых заездов
        c.strokeStyle = 'rgba(10,10,10,0.18)'; c.lineWidth = 7;
        for (let k = 0; k < 5; k++) { c.beginPath(); c.arc(rnd() * w, rnd() * h, 60 + rnd() * 120, rnd() * 6, rnd() * 6 + 2.5); c.stroke(); }
      }
      if (f.surface === 'beach') {
        c.strokeStyle = 'rgba(160,120,70,0.13)'; c.lineWidth = 3;
        for (let y = 10; y < h; y += 22) { c.beginPath(); for (let x = 0; x <= w; x += 16) c.lineTo(x, y + Math.sin(x * 0.05 + y) * 5); c.stroke(); }
      }
    }, { repeat: true });
    this.groundMat = new THREE.MeshLambertMaterial({ map: tex, vertexColors: true });
    this.propMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    if (f.shore !== undefined) {
      const water = new THREE.Mesh(new THREE.PlaneGeometry(900, 4000), new THREE.MeshLambertMaterial({ color: 0x2f9ec4, transparent: true, opacity: 0.88 }));
      water.rotation.x = -Math.PI / 2; water.position.set(f.shore - 440, -1.4, 0);
      this.water = water; this.root.add(water);
    }
  }

  // ---------- чанки ----------
  update() {
    const t = this.target;
    const cx = Math.floor(t.x / CS), cz = Math.floor(t.z / CS);
    if (this.water) this.water.position.z = t.z;
    // игрок в том же чанке и всё вокруг уже построено — нечего делать (без строковых ключей и обхода сетки каждый кадр)
    if (cx === this._cx && cz === this._cz && !this._pending) return;
    this._cx = cx; this._cz = cz; this._pending = false;
    let built = 0;
    for (let r = 0; r <= RAD; r++) for (let i = cx - r; i <= cx + r; i++) for (let j = cz - r; j <= cz + r; j++) {
      if (Math.max(Math.abs(i - cx), Math.abs(j - cz)) !== r) continue;
      const key = i + ',' + j;
      if (this.chunks.has(key)) continue;
      if (built >= 2 && r > 1) { this._pending = true; continue; } // не больше двух чанков за кадр — без рывков
      this.buildChunk(i, j); built++;
    }
    for (const [key, grp] of this.chunks) {
      const i = grp.userData.ci, j = grp.userData.cj;
      if (Math.abs(i - cx) > RAD + 1 || Math.abs(j - cz) > RAD + 1) {
        this.root.remove(grp);
        grp.traverse((o) => { if (o.geometry && !o.userData.sharedGeo) o.geometry.dispose(); if (o.isInstancedMesh) o.dispose(); });
        this.chunks.delete(key);
      }
    }
  }

  buildChunk(ci, cj) {
    const f = this.f, grp = new THREE.Group();
    const X0 = ci * CS, Z0 = cj * CS, V = N + 1;
    const pos = new Float32Array(V * V * 3), uv = new Float32Array(V * V * 2), col = new Float32Array(V * V * 3);
    const cA = new THREE.Color(f.colA), cB = new THREE.Color(f.colB), cLow = new THREE.Color(f.colLow ?? f.colB), tmp = new THREE.Color();
    for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
      const k = j * V + i, x = X0 + i * RES, z = Z0 + j * RES, y = this.H(x, z);
      pos[k * 3] = x; pos[k * 3 + 1] = y; pos[k * 3 + 2] = z;
      uv[k * 2] = x / 32; uv[k * 2 + 1] = z / 32;
      const n = fbm2(x * 0.02, z * 0.02, this.seed + 77, 2);
      tmp.copy(cA).lerp(cB, n);
      if (f.shore !== undefined) tmp.lerp(cLow, smooth(clamp((f.shore + 34 - x) / 22, 0, 1)));
      else tmp.lerp(cLow, clamp(-y / (f.amp * 1.2), 0, 0.6));
      col[k * 3] = tmp.r; col[k * 3 + 1] = tmp.g; col[k * 3 + 2] = tmp.b;
    }
    const idx = [];
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const a = j * V + i, b = a + 1, c = a + V, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.setIndex(idx); g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, this.groundMat);
    mesh.receiveShadow = this.quality > 0;
    grp.add(mesh);
    grp.userData.col = []; grp.userData.ci = ci; grp.userData.cj = cj;
    if (this.props) this.buildProps(grp, ci, cj);
    this.root.add(grp);
    this.chunks.set(ci + ',' + cj, grp);
  }

  buildProps(grp, ci, cj) {
    const f = this.f, rnd = mulberry32(this.seed * 131 + ci * 7919 + cj * 104729);
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    for (const [type, count, sMin, sMax, radius] of f.props) {
      const geo = this.propGeo[type]; if (!geo) continue;
      const list = [];
      const n = Math.floor(count * (0.5 + rnd()));
      for (let k = 0; k < n; k++) {
        const x = ci * CS + rnd() * CS, z = cj * CS + rnd() * CS;
        if (Math.hypot(x, z) < 45) continue;                        // старт свободен
        if (f.shore !== undefined && x < f.shore + (type === 'palm' || type === 'umbrella' ? 12 : 40)) continue;
        const s = sMin + rnd() * (sMax - sMin);
        q.setFromAxisAngle(up, rnd() * Math.PI * 2);
        sc.set(s, s, s);
        ps.set(x, this.heightAt(x, z) - 0.05, z);
        list.push(mtx.compose(ps, q, sc).clone());
        if (radius > 0) grp.userData.col.push({ x, z, r: radius * s });
      }
      if (!list.length) continue;
      const im = new THREE.InstancedMesh(geo, this.propMat, list.length);
      im.userData.sharedGeo = true;
      list.forEach((mm, k) => im.setMatrixAt(k, mm));
      im.castShadow = this.quality > 0;
      grp.add(im);
    }
  }
}

// ---------- декорации полигона ----------
function buildFieldProps(surface) {
  const out = {};
  const M = (arr) => mergeGeometries(arr);
  // стопка шин (ограждение на асфальте)
  {
    const g = [];
    for (let k = 0; k < 3; k++) { const t = new THREE.TorusGeometry(0.42, 0.2, 6, 10); t.rotateX(Math.PI / 2); t.translate(0, 0.2 + k * 0.36, 0); g.push(tint(t, k === 1 ? 0xf2f2f2 : 0x1c1c1c)); }
    out.tires = M(g);
  }
  // конус
  {
    const c = new THREE.ConeGeometry(0.28, 0.75, 8); c.translate(0, 0.42, 0);
    const b = new THREE.BoxGeometry(0.6, 0.06, 0.6); b.translate(0, 0.03, 0);
    const s = new THREE.CylinderGeometry(0.17, 0.2, 0.14, 8); s.translate(0, 0.45, 0);
    out.cone = M([tint(c, 0xff6a13), tint(b, 0xff6a13), tint(s, 0xffffff)]);
  }
  // фонарь-мачта
  {
    const p = new THREE.CylinderGeometry(0.12, 0.18, 9, 6); p.translate(0, 4.5, 0);
    const h = new THREE.BoxGeometry(1.4, 0.25, 0.5); h.translate(0, 9, 0);
    out.mast = M([tint(p, 0x5c6068), tint(h, 0xe8e8e0)]);
  }
  // бетонный блок
  { const b = new THREE.BoxGeometry(3, 0.8, 0.7); b.translate(0, 0.4, 0); out.block = M([tint(b, 0xc9c6bd)]); }
  // пальма
  out.palm = palmGeo();
  // зонтик
  {
    const p = new THREE.CylinderGeometry(0.04, 0.04, 2.3, 5); p.translate(0, 1.15, 0);
    const top = new THREE.ConeGeometry(1.4, 0.5, 8); top.translate(0, 2.3, 0);
    out.umbrella = M([tint(p, 0xeeeeee), tint(top, [0xff4b4b, 0x2f8ae0, 0xffc933][Math.floor(Math.random() * 3)])]);
  }
  // камень
  for (const [name, color] of [['rock', 0x8f8a80], ['srock', 0x7d8794]]) {
    const r = new THREE.DodecahedronGeometry(1.2, 0);
    const p = r.attributes.position; const rn = mulberry32(9);
    for (let i = 0; i < p.count; i++) p.setXYZ(i, p.getX(i) * (0.8 + rn() * 0.5), p.getY(i) * (0.55 + rn() * 0.3), p.getZ(i) * (0.8 + rn() * 0.5));
    r.translate(0, 0.45, 0); out[name] = tint(r, color);
  }
  // ель со снегом
  {
    const g = [];
    const trunk = new THREE.CylinderGeometry(0.2, 0.3, 1.6, 6); trunk.translate(0, 0.8, 0); g.push(tint(trunk, 0x5a3d2b));
    [[2.0, 2.4, 1.6], [1.5, 2.1, 3.0], [1.0, 1.8, 4.3]].forEach(([r, h, y], i) => {
      const c = new THREE.ConeGeometry(r, h, 7); c.translate(0, y, 0); g.push(tint(c, i % 2 ? 0x1f4d36 : 0x245a3e));
      const s = new THREE.ConeGeometry(r * 0.72, h * 0.45, 7); s.translate(0, y + h * 0.3, 0); g.push(tint(s, 0xf1f5fa));
    });
    out.pine = M(g);
  }
  // снеговик :)
  {
    const a = new THREE.SphereGeometry(0.6, 8, 6); a.translate(0, 0.55, 0);
    const b = new THREE.SphereGeometry(0.42, 8, 6); b.translate(0, 1.35, 0);
    const n = new THREE.ConeGeometry(0.07, 0.35, 5); n.rotateX(Math.PI / 2); n.translate(0, 1.38, 0.52);
    out.snowman = M([tint(a, 0xffffff), tint(b, 0xffffff), tint(n, 0xff7a1a)]);
  }
  return out;
}

// пальма (используется и на «Полигоне», и на трассе «Ривьера»)
export function palmGeo(lean = 0.12, trunkCol = [0x9c7a50, 0x8a6a43], leafCol = [0x3fa048, 0x2f8a3a]) {
  const g = [];
  let x = 0;
  for (let k = 0; k < 6; k++) { const t = new THREE.CylinderGeometry(0.2 - k * 0.015, 0.24 - k * 0.015, 1.1, 6); t.translate(x, 0.55 + k * 1.05, 0); x += lean; g.push(tint(t, trunkCol[k % 2])); }
  for (let k = 0; k < 7; k++) {
    const leaf = new THREE.BoxGeometry(0.5, 0.06, 3.0); leaf.translate(0, 0, 1.4); leaf.rotateX(0.35); leaf.rotateY((k / 7) * Math.PI * 2);
    leaf.translate(x, 6.5, 0); g.push(tint(leaf, leafCol[k % 2]));
  }
  return mergeGeometries(g);
}
