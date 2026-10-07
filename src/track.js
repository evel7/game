import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mulberry32, noise1, fbm2, canvasTexture, clamp, smooth } from './utils.js';
import { buildPropGeometries } from './maps.js';

// Бесконечная процедурная трасса.
// Осевая линия строится точками через каждые SP метров. Трасса состоит из отрезков:
// прямые и дуги разного радиуса с плавными переходами кривизны (клотоиды).
// Курс ограничен ±HMAX от начального направления, поэтому дорога всегда
// «уходит вперёд» и никогда не пересекает сама себя.
// Геометрия строится кусками (чанками) по CH точек и удаляется позади игрока.

export const SP = 2;          // шаг точек, м
const CH = 50;                // точек в чанке (100 м)
const HMAX = 1.45;             // макс. отклонение курса, рад
const AHEAD_CHUNKS = 11;
const BEHIND_CHUNKS = 3;
export const CP_EVERY = 500;  // чекпоинт каждые 1000 м
const CP_FIRST = 400;

// Объединяем меши чанка с одинаковым материалом в один — меньше вызовов отрисовки (заметно поднимает FPS)
function mergeChunk(grp) {
  const buckets = new Map();
  for (const o of grp.children) {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material) || o.userData.sharedGeo || o.children.length || o.renderOrder) continue;
    const g = o.geometry;
    const key = o.material.uuid + '|' + Object.keys(g.attributes).sort().join(',') + '|' + (g.index ? 'i' : 'n') + '|' + o.castShadow + o.receiveShadow;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(o);
  }
  for (const list of buckets.values()) {
    if (list.length < 2) continue;
    const geos = list.map((o) => { o.updateMatrix(); const g = o.geometry.clone(); g.applyMatrix4(o.matrix); return g; });
    const merged = mergeGeometries(geos);
    geos.forEach((g) => g.dispose());
    if (!merged) continue;
    const m = new THREE.Mesh(merged, list[0].material);
    m.castShadow = list[0].castShadow; m.receiveShadow = list[0].receiveShadow;
    for (const o of list) { grp.remove(o); o.geometry.dispose(); }
    grp.add(m);
  }
}

export class Track {
  constructor(scene, map, seed = 1, quality = 1, opts = {}) {
    this.scene = scene; this.map = map; this.seed = seed; this.quality = quality;
    // стиль оформления: новые карты переиспользуют рельеф/декорации существующих (например, 'city')
    this.style = map.style ?? map.id;
    this.draw = opts.draw ?? 1;
    this.ahead = [8, AHEAD_CHUNKS, 16][this.draw] ?? AHEAD_CHUNKS;
    // finishIdx — индекс точки финиша (трасса заданной длины); Infinity — бесконечная трасса
    this.finishIdx = opts.finishIdx ?? Infinity;
    this.rnd = mulberry32(seed * 9301 + 49297);
    this.hw = map.road.halfWidth;
    this.sh = map.road.shoulder;
    this.wall = this.hw + this.sh + 0.35;   // где стоит отбойник
    this.pts = []; this.base = 0;
    this.g = { x: 0, z: 0, h: 0, s: 0, k: 0, seg: { type: 'straight', L: 160, u: 0, k: 0, ramp: 1 } };
    this.chunks = new Map();
    this.root = new THREE.Group();
    scene.add(this.root);
    // общие для всех чанков геометрии (раньше создавались заново в каждом чанке)
    this.geo = {
      post: new THREE.BoxGeometry(0.12, 0.85, 0.12),
      box: new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0),
      plane: new THREE.PlaneGeometry(1, 1),
      lampHead: new THREE.BoxGeometry(0.5, 0.15, 0.9),
      pool: new THREE.PlaneGeometry(11, 11).rotateX(-Math.PI / 2),
    };
    this.makeMaterials();
    this.propGeo = buildPropGeometries(map);
    this.ensure(CH * (this.ahead + 2));
  }

  // ---------------- генерация осевой линии ----------------
  newSegment() {
    if (this.queue && this.queue.length) return this.queue.shift();
    const r = this.rnd, t = this.map.track, g = this.g;
    const straight = (L) => ({ type: 'straight', L, u: 0, k: 0, ramp: 1 });
    // дуга: R — радиус, A — угол поворота; направление выбирается так, чтобы трасса не разворачивалась назад
    const curve = (R, A, dir, h0) => {
      if (Math.abs(h0 + dir * A * 0.75) > HMAX) dir = -dir;
      if (Math.abs(h0 + dir * A * 0.75) > HMAX) A = Math.max(0.3, (HMAX - Math.abs(h0)) / 0.75);
      const L = A * R;
      return { seg: { type: 'curve', L, u: 0, k: dir / R, ramp: Math.min(L * 0.3, 22) }, dh: dir * A * 0.75, dir };
    };
    const dir0 = r() < 0.5 ? 1 : -1;
    const roll = r();
    // рельеф: иногда к повороту/прямой добавляется подъём, спуск или горб (подъём-спуск)
    if (t.events !== false && g.s > 300 && !(g.ev && g.s < g.ev.s0 + g.ev.L) && r() < 0.38) this.planElevation();
    if (r() < 0.12) {
      // резкий поворот: малый радиус, большой угол
      const c = curve(t.minR * (0.72 + r() * 0.25), 1.0 + r() * 0.6, dir0, g.h);
      this.queue = [straight(15 + r() * 40)];
      return c.seg;
    }
    if (roll < 0.2) {
      return straight(t.straight[0] + r() * (t.straight[1] - t.straight[0]));
    }
    if (roll < 0.32) {
      // S-связка / шикана: два поворота в разные стороны
      const R = t.minR * (1 + r() * 1.4), A = 0.5 + r() * 0.7;
      const c1 = curve(R, A, dir0, g.h);
      const c2 = curve(R * (0.8 + r() * 0.5), A * (0.8 + r() * 0.4), -c1.dir, g.h + c1.dh);
      this.queue = [straight(4 + r() * 18), c2.seg];
      return c1.seg;
    }
    if (roll < 0.4) {
      // шпилька: крутой длинный поворот
      return curve(t.minR * (1.0 + r() * 0.4), 1.1 + r() * 0.7, dir0, g.h).seg;
    }
    if (roll < 0.54) {
      // «сжимающийся» поворот: сначала пологий, потом крутой в ту же сторону
      const c1 = curve(t.maxR * (0.5 + r() * 0.4), 0.4 + r() * 0.3, dir0, g.h);
      const c2 = curve(t.minR * (1 + r() * 0.5), 0.6 + r() * 0.6, c1.dir, g.h + c1.dh);
      this.queue = [c2.seg];
      return c1.seg;
    }
    if (roll < 0.64 && t.corners) {
      // городской поворот ~90° с короткой прямой после
      const c = curve(t.minR * (0.9 + r() * 0.3), 1.45 + r() * 0.25, dir0, g.h);
      this.queue = [straight(20 + r() * 50)];
      return c.seg;
    }
    // обычная дуга
    const R = t.minR + Math.pow(r(), 1.3) * (t.maxR - t.minR);
    const res = curve(R, 0.4 + r() * 1.3, dir0, g.h);
    if (r() < 0.5) this.queue = [straight(10 + r() * 50)];
    return res.seg;
  }

  // событие рельефа на ближайшие L метров: подъём / спуск (меняют уровень) или горб / яма
  planElevation() {
    const r = this.rnd, g = this.g;
    const hs = clamp(this.map.track.hill / 9, 0.45, 1.5);
    const L = 110 + r() * 170;
    const from = g.lvl || 0;
    const kind = r();
    let to = from, crest = 0;
    if (kind < 0.55) {
      // подъём или спуск; уровень держим в разумных пределах, чтобы трасса не уходила в небо
      const A = Math.min(L * 0.12, (8 + r() * 14) * hs * (L / 200)); // уклон не круче ~18%
      const lim = 26 * hs;
      to = from + (from > lim * 0.4 ? -A : from < -lim * 0.4 ? A : (r() < 0.5 ? A : -A));
      to = clamp(to, -lim, lim);
    } else crest = (r() < 0.7 ? 1 : -1) * Math.min(L * 0.06, (5 + r() * 7) * hs); // горб или яма
    g.ev = { s0: g.s, L, from, to, crest };
  }

  genPoint() {
    const g = this.g;
    if (g.seg.u >= g.seg.L) g.seg = this.newSegment();
    const seg = g.seg;
    const edge = Math.min(seg.u, seg.L - seg.u);
    const k = seg.k * smooth(clamp(edge / seg.ramp, 0, 1));
    g.h += k * SP;
    g.h = clamp(g.h, -HMAX - 0.1, HMAX + 0.1);
    const n = this.pts.length + this.base;
    const p = {
      x: g.x, z: g.z, h: g.h, k, s: g.s, i: n,
      y: this.map.track.hill * (noise1(g.s * 0.0042, this.seed) * 2 - 1) + (noise1(g.s * 0.021, this.seed + 5) - 0.5) * this.map.track.hill * 0.15,
      lx: Math.cos(g.h), lz: -Math.sin(g.h),
    };
    if (g.ev) {
      const x = clamp((g.s - g.ev.s0) / g.ev.L, 0, 1);
      g.lvl = g.ev.from + (g.ev.to - g.ev.from) * smooth(x);
      p.y += g.lvl + g.ev.crest * Math.sin(Math.PI * x) ** 2;
    }
    // первые метры — ровная площадка старта
    if (g.s < 120) p.y *= g.s / 120;
    // подъём всей трассы (например, над уровнем моря на «Ривьере»)
    if (this.map.track.base) p.y += this.map.track.base;
    this.pts.push(p);
    g.x += Math.sin(g.h) * SP; g.z += Math.cos(g.h) * SP;
    g.s += SP; seg.u += SP;
  }

  ensure(globalIdx) {
    while (this.base + this.pts.length <= globalIdx + 2) this.genPoint();
  }

  P(i) {
    i = Math.round(i);
    const j = clamp(i - this.base, 0, this.pts.length - 1);
    return this.pts[j];
  }
  get lastIdx() { return this.base + this.pts.length - 1; }

  // точка на трассе по дробному индексу (для соперников и камеры)
  sample(fi, out = {}) {
    this.ensure(Math.ceil(fi) + 1);
    const i0 = Math.max(this.base, Math.floor(fi));
    const t = clamp(fi - i0, 0, 1);
    const a = this.P(i0), b = this.P(i0 + 1);
    out.x = a.x + (b.x - a.x) * t; out.y = a.y + (b.y - a.y) * t; out.z = a.z + (b.z - a.z) * t;
    out.h = a.h + (b.h - a.h) * t; out.k = a.k + (b.k - a.k) * t;
    out.lx = Math.cos(out.h); out.lz = -Math.sin(out.h);
    out.slope = (b.y - a.y) / SP;
    return out;
  }

  // проекция точки мира на трассу: индекс (дробный), смещение влево от оси, высота
  project(x, z, hint) {
    let i = clamp(Math.round(hint), this.base + 1, this.lastIdx - 2);
    const d2 = (j) => { const p = this.P(j); return (p.x - x) ** 2 + (p.z - z) ** 2; };
    let best = d2(i);
    for (let it = 0; it < 400; it++) {
      const f = i + 1 <= this.lastIdx - 1 ? d2(i + 1) : Infinity;
      const b = i - 1 >= this.base ? d2(i - 1) : Infinity;
      if (f < best) { i++; best = f; } else if (b < best) { i--; best = b; } else break;
    }
    // уточняем на отрезке
    let a = this.P(i), bpt = this.P(i + 1);
    let dx = bpt.x - a.x, dz = bpt.z - a.z;
    let t = ((x - a.x) * dx + (z - a.z) * dz) / (dx * dx + dz * dz);
    if (t < 0 && i > this.base) { i--; a = this.P(i); bpt = this.P(i + 1); dx = bpt.x - a.x; dz = bpt.z - a.z; t = ((x - a.x) * dx + (z - a.z) * dz) / (dx * dx + dz * dz); }
    t = clamp(t, 0, 1);
    const px = a.x + dx * t, pz = a.z + dz * t;
    const h = a.h + (bpt.h - a.h) * t;
    const lx = Math.cos(h), lz = -Math.sin(h);
    const lat = (x - px) * lx + (z - pz) * lz;
    return { idx: i + t, lat, y: a.y + (bpt.y - a.y) * t, h, lx, lz, slope: (bpt.y - a.y) / SP, k: a.k };
  }

  // высота рельефа рядом с трассой: p — точка оси, off — расстояние от оси (±)
  terrainY(p, off) {
    const a = Math.abs(off);
    const wx = p.x + p.lx * off, wz = p.z + p.lz * off;
    const hills = this.map.ground.hills;
    let y = p.y;
    const edge = this.hw + this.sh, st = this.style;
    if (st === 'city') {
      if (a > edge + 0.4) y += 0.18; // тротуар
      return y;
    }
    if (st === 'ice') {
      // ровный лёд озера: лишь едва заметные снежные гребни
      if (a > edge) y -= Math.min(0.12, (a - edge) * 0.05);
      return y + smooth(clamp((a - edge - 4) / 40, 0, 1)) * hills * (fbm2(wx * 0.02, wz * 0.02, this.seed + 11, 2) - 0.5);
    }
    if (a > edge) y -= Math.min(0.6, (a - edge) * 0.25);           // кювет
    const f = smooth(clamp((a - edge - 6) / 70, 0, 1));
    if (st === 'coast' && off < 0) {
      // со стороны моря: пляж и уход под воду (уровень моря — абсолютная высота)
      const sea = this.map.sea?.level ?? 0;
      const t = smooth(clamp((a - edge - 8) / 46, 0, 1));
      return y + (sea - 3.2 - y) * t;
    }
    const n = fbm2(wx * 0.008, wz * 0.008, this.seed + 11, 4);
    y += f * hills * (st === 'coast' ? n * 1.4 - 0.15 : n * 1.6 - 0.35);
    const rough = this.map.ground.rough;
    if (rough) y += f * rough * (fbm2(wx * 0.045, wz * 0.045, this.seed + 23, 2) - 0.5) * 2;
    return y;
  }

  // ---------------- материалы ----------------
  makeMaterials() {
    const m = this.map, rd = m.road;
    const roadTex = canvasTexture(256, 512, (c, w, h) => {
      c.fillStyle = rd.asphalt; c.fillRect(0, 0, w, h);
      const rnd = mulberry32(3);
      for (let i = 0; i < 9000; i++) {
        const v = rnd();
        c.fillStyle = v < 0.5 ? 'rgba(0,0,0,0.13)' : 'rgba(255,255,255,0.07)';
        c.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 2, 1 + rnd() * 2);
      }
      // следы шин посередине полос
      c.fillStyle = 'rgba(0,0,0,0.12)';
      c.fillRect(w * 0.18, 0, w * 0.1, h); c.fillRect(w * 0.72, 0, w * 0.1, h);
      if (rd.cracks) {
        // лёд: светлые разводы и сетка трещин (бесшовно по вертикали)
        for (let i = 0; i < 26; i++) {
          const x = rnd() * w, y = rnd() * h, r = 20 + rnd() * 60;
          const gr = c.createRadialGradient(x, y, 0, x, y, r);
          const a = rnd() < 0.5 ? 'rgba(255,255,255,0.16)' : 'rgba(20,60,110,0.16)';
          gr.addColorStop(0, a); gr.addColorStop(1, 'rgba(0,0,0,0)');
          c.fillStyle = gr; c.fillRect(x - r, y - r, r * 2, r * 2);
        }
        c.lineCap = 'round';
        for (let i = 0; i < 16; i++) {
          // ломаная трещина с ответвлениями: список отрезков, рисуем дважды со сдвигом на высоту текстуры — шов не виден
          let x = 14 + rnd() * (w - 28), y = rnd() * h, a = rnd() * Math.PI * 2;
          const segs = [];
          for (let k = 0; k < 7; k++) {
            a += (rnd() - 0.5) * 1.3;
            const nx = clamp(x + Math.cos(a) * 14, 14, w - 14), ny = y + Math.sin(a) * 14;
            segs.push(x, y, nx, ny);
            if (rnd() < 0.3) segs.push(nx, ny, clamp(nx + (rnd() - 0.5) * 22, 14, w - 14), ny + (rnd() - 0.5) * 22);
            x = nx; y = ny;
          }
          c.strokeStyle = `rgba(240,250,255,${0.18 + rnd() * 0.25})`; c.lineWidth = 0.6 + rnd() * 1.0;
          for (const dy of [-h, 0, h]) {
            c.beginPath();
            for (let k = 0; k < segs.length; k += 4) { c.moveTo(segs[k], segs[k + 1] + dy); c.lineTo(segs[k + 2], segs[k + 3] + dy); }
            c.stroke();
          }
        }
      }
      c.fillStyle = rd.edge; c.fillRect(6, 0, 6, h); c.fillRect(w - 12, 0, 6, h);
      if (rd.line) { c.fillStyle = rd.line; c.fillRect(w / 2 - 4, 0, 8, h * 0.5); }
    }, { repeat: true, aniso: 8 });
    this.roadMat = new THREE.MeshStandardMaterial({
      map: roadTex, roughness: rd.rough ?? (m.night ? 0.42 : 0.88), metalness: m.night ? 0.15 : 0,
      envMapIntensity: m.night ? 0.8 : 0.4,
    });
    const kerbTex = canvasTexture(32, 64, (c, w, h) => {
      c.fillStyle = '#d42b2b'; c.fillRect(0, 0, w, h / 2);
      c.fillStyle = '#f2f2f2'; c.fillRect(0, h / 2, w, h / 2);
    }, { repeat: true });
    this.kerbMat = new THREE.MeshStandardMaterial({ map: kerbTex, roughness: 0.7 });
    this.shoulderMat = new THREE.MeshLambertMaterial({ color: rd.shoulderColor });
    this.terrainMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    this.propMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    // светящиеся части декораций (лава, окна) — без освещения, цвета вершин > 1 подхватывает bloom на ночных картах
    // toneMapped: false — иначе ACES выбеливает насыщенный оранжевый в бледно-жёлтый
    this.glowMat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, toneMapped: false });
    const st = this.style;
    if (m.sea) {
      // море: одна плоскость на постоянной высоте, едет вместе с игроком
      const sea = new THREE.Mesh(new THREE.PlaneGeometry(3200, 3200).rotateX(-Math.PI / 2),
        new THREE.MeshStandardMaterial({ color: m.sea.color, roughness: 0.18, metalness: 0.25, envMapIntensity: 1.1 }));
      sea.position.y = m.sea.level ?? 0; sea.receiveShadow = false;
      this.sea = sea; this.root.add(sea);
    }

    if (m.barrier === 'tires') {
      const tex = canvasTexture(128, 64, (c, w, h) => {
        for (let x = 0; x < 4; x++) {
          c.fillStyle = x % 2 ? '#e8e8e8' : '#d63a2f'; c.fillRect(x * 32, 0, 32, h);
          c.fillStyle = 'rgba(0,0,0,0.85)';
          for (let y = 0; y < 3; y++) { c.beginPath(); c.ellipse(x * 32 + 16, y * 21 + 11, 12, 8, 0, 0, Math.PI * 2); c.fill(); }
        }
      }, { repeat: true });
      this.barrierMat = new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide });
    } else if (m.barrier === 'rail') {
      this.barrierMat = new THREE.MeshStandardMaterial({ color: 0xb8c0c8, metalness: 0.7, roughness: 0.35, side: THREE.DoubleSide });
      this.postMat = new THREE.MeshLambertMaterial({ color: 0x5a5f66 });
      const bank = m.bank !== undefined ? m.bank : (st === 'snow' ? 0xf6f9fc : null);
      if (bank !== null) this.snowbankMat = new THREE.MeshLambertMaterial({ color: bank, side: THREE.DoubleSide });
    } else {
      const tex = canvasTexture(128, 32, (c, w, h) => {
        c.fillStyle = '#8d8d95'; c.fillRect(0, 0, w, h);
        c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(0, 0, 2, h); c.fillRect(64, 0, 2, h);
      }, { repeat: true });
      this.barrierMat = new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide });
      const neon = m.neon !== undefined ? m.neon : [0x28e7ff, 0xff2ea6];
      if (neon) {
        this.neonMat = new THREE.MeshBasicMaterial({ color: neon[0] });
        this.neonMat2 = new THREE.MeshBasicMaterial({ color: neon[1] });
      }
    }

    const gateTex = (text) => canvasTexture(512, 96, (c, w, h) => {
      for (let x = 0; x < w; x += 24) for (let y = 0; y < h; y += 24) {
        c.fillStyle = ((x + y) / 24) % 2 ? '#111' : '#fff'; c.fillRect(x, y, 24, 24);
      }
      c.fillStyle = 'rgba(10,10,20,0.85)'; c.fillRect(60, 12, w - 120, h - 24);
      c.fillStyle = '#ffd400'; c.font = 'bold 54px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText(text, w / 2, h / 2 + 2);
    });
    this.gateMatCP = new THREE.MeshBasicMaterial({ map: gateTex('ЧЕКПОИНТ'), side: THREE.DoubleSide });
    this.gateMatStart = new THREE.MeshBasicMaterial({ map: gateTex('СТАРТ'), side: THREE.DoubleSide });
    this.gateMatFinish = new THREE.MeshBasicMaterial({ map: gateTex('ФИНИШ'), side: THREE.DoubleSide });
    // клетчатая финишная полоса на асфальте
    this.finishLineMat = new THREE.MeshBasicMaterial({ map: canvasTexture(256, 32, (c, w, h) => {
      for (let x = 0; x < w; x += 16) for (let y = 0; y < h; y += 16) { c.fillStyle = ((x + y) / 16) % 2 ? '#111' : '#f4f4f4'; c.fillRect(x, y, 16, 16); }
    }), side: THREE.DoubleSide });
    this.pillarMat = new THREE.MeshStandardMaterial({ color: 0x222228, roughness: 0.6 });
    // атлас рекламных баннеров (придуманные спонсоры)
    const SP = [['ASMAN OIL', '#ffd400', '#111'], ['NITRO-X', '#111', '#39ff14'], ['ТУРБО KG', '#d62828', '#fff'], ['DRIFT LAB', '#fff', '#111'],
      ['TOKMOK TIRES', '#111', '#ffcc00'], ['ALA-TOO', '#1d3f8f', '#fff'], ['KAZE WORKS', '#f2f2f2', '#d62828'], ['BISHKEK MS', '#00a86b', '#fff']];
    this.bannerRows = SP.length;
    const atlas = canvasTexture(512, 512, (c, w, h) => {
      SP.forEach(([t, bg, fg], k) => {
        const y = k * 64;
        c.fillStyle = bg; c.fillRect(0, y, w, 64);
        c.fillStyle = fg; c.fillRect(0, y, w, 4); c.fillRect(0, y + 60, w, 4);
        c.font = 'italic 900 42px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(t, w / 2, y + 34);
      });
    });
    atlas.wrapS = THREE.RepeatWrapping;
    this.bannerMat = new THREE.MeshLambertMaterial({ map: atlas, side: THREE.DoubleSide });
    // трибуны со зрителями
    const crowd = canvasTexture(512, 128, (c, w, h) => {
      c.fillStyle = '#3a3d46'; c.fillRect(0, 0, w, h);
      const rnd = mulberry32(77);
      const cols = ['#e63946', '#f1faee', '#457b9d', '#ffb703', '#2a9d8f', '#fb8500', '#8338ec', '#ffffff', '#111111'];
      for (let row = 0; row < 5; row++) {
        const y = 14 + row * 23;
        c.fillStyle = '#2b2d34'; c.fillRect(0, y + 12, w, 11);
        for (let x = 4; x < w; x += 9 + rnd() * 4) {
          if (rnd() < 0.12) continue;
          c.fillStyle = cols[Math.floor(rnd() * cols.length)]; c.fillRect(x, y + 2, 7, 11);
          c.fillStyle = ['#f1c27d', '#c68642', '#8d5524', '#ffdbac'][Math.floor(rnd() * 4)];
          c.beginPath(); c.arc(x + 3.5, y - 1, 3.2, 0, Math.PI * 2); c.fill();
          if (rnd() < 0.15) { c.fillStyle = '#ffd400'; c.fillRect(x + 5, y - 9, 2, 8); }
        }
      }
    }, { repeat: true });
    crowd.repeat.set(3, 1);
    this.standMats = [crowd, crowd].map((t) => new THREE.MeshLambertMaterial({ map: t }));
    this.standGrey = new THREE.MeshLambertMaterial({ color: 0x6b6f78 });
    this.roofMat = new THREE.MeshLambertMaterial({ color: 0xd62828 });

    if (st === 'city' && !m.night) {
      // город днём / на закате: светлые фасады, окна отражают закатное небо
      this.buildingMats = [0, 1, 2].map((v) => {
        const tex = canvasTexture(128, 256, (c, w, h) => {
          const base = ['#e2d3c4', '#cdb6bd', '#b4c2d2'][v];
          c.fillStyle = base; c.fillRect(0, 0, w, h);
          const rnd = mulberry32(200 + v);
          for (let y = 6; y < h - 4; y += 12) {
            c.fillStyle = 'rgba(0,0,0,0.06)'; c.fillRect(0, y + 9, w, 2);
            for (let x = 6; x < w - 4; x += 12) {
              const r = rnd();
              c.fillStyle = r < 0.18 ? '#ffc58a' : r < 0.3 ? '#ffe0b8' : ['#3b4a6b', '#4a5a7c', '#56607e'][Math.floor(rnd() * 3)];
              c.fillRect(x, y, 7, 8);
            }
          }
        }, { repeat: true });
        tex.repeat.set(2, 3);
        return new THREE.MeshLambertMaterial({ map: tex });
      });
      this.lampHeadMat = new THREE.MeshBasicMaterial({ color: 0xfff1d6 });
      const words = ['RAMEN', 'HOTEL', 'SUSHI', 'КАФЕ', 'MATCHA', 'DRIFT', 'TAXI', 'КИНО'];
      const cols = [['#c8102e', '#fff'], ['#fff', '#c8102e'], ['#1d2b53', '#ffd9e4'], ['#ffd9e4', '#7a1a3a']];
      this.neonSigns = words.map((wd, i) => new THREE.MeshLambertMaterial({
        map: canvasTexture(256, 96, (c, w, h) => {
          const [bg, fg] = cols[i % cols.length];
          c.fillStyle = bg; c.fillRect(0, 0, w, h);
          c.strokeStyle = fg; c.lineWidth = 4; c.strokeRect(6, 6, w - 12, h - 12);
          c.fillStyle = fg; c.font = 'bold 54px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle';
          c.fillText(wd, w / 2, h / 2 + 3);
        }),
        side: THREE.DoubleSide,
      }));
    } else if (st === 'city') {
      this.buildingMats = [0, 1, 2].map((v) => {
        const tex = canvasTexture(128, 256, (c, w, h) => {
          const base = ['#20222c', '#262033', '#1d2a33'][v];
          c.fillStyle = base; c.fillRect(0, 0, w, h);
          const rnd = mulberry32(100 + v);
          for (let y = 6; y < h - 4; y += 12) for (let x = 6; x < w - 4; x += 12) {
            const on = rnd() < 0.42;
            c.fillStyle = on ? ['#ffd98a', '#fff2c4', '#9fd8ff', '#ffb36b'][Math.floor(rnd() * 4)] : '#0c0d12';
            c.fillRect(x, y, 7, 8);
          }
        }, { repeat: true });
        tex.repeat.set(2, 3);
        return new THREE.MeshLambertMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.85 });
      });
      this.lampHeadMat = new THREE.MeshBasicMaterial({ color: 0xffe2a0 });
      const pool = canvasTexture(128, 128, (c, w, h) => {
        const gr = c.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, 'rgba(255,210,140,0.55)'); gr.addColorStop(1, 'rgba(255,210,140,0)');
        c.fillStyle = gr; c.fillRect(0, 0, w, h);
      });
      this.poolMat = new THREE.MeshBasicMaterial({ map: pool, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
      const words = ['RAMEN', 'HOTEL', '24/7', 'DRIFT', 'КАФЕ', 'NEON', 'CLUB', 'ТАКСИ', 'SUSHI', 'GARAGE', 'КИНО', 'TURBO'];
      const cols = ['#ff2ea6', '#28e7ff', '#ffe600', '#7cff4f', '#ff7b1c', '#b26bff'];
      this.neonSigns = words.map((wd, i) => new THREE.MeshBasicMaterial({
        map: canvasTexture(256, 96, (c, w, h) => {
          c.fillStyle = '#07070c'; c.fillRect(0, 0, w, h);
          const col = cols[i % cols.length];
          c.strokeStyle = col; c.lineWidth = 5; c.strokeRect(6, 6, w - 12, h - 12);
          c.shadowColor = col; c.shadowBlur = 18; c.fillStyle = col;
          c.font = 'bold 56px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle';
          c.fillText(wd, w / 2, h / 2 + 3); c.fillText(wd, w / 2, h / 2 + 3);
        }),
        side: THREE.DoubleSide,
      }));
    }
  }

  // ---------------- построение чанков ----------------
  update(playerIdx) {
    const pc = Math.floor(playerIdx / CH);
    this.ensure((pc + this.ahead + 1) * CH + 2);
    let built = 0;
    for (let c = Math.max(0, pc - BEHIND_CHUNKS); c <= pc + this.ahead; c++) {
      if (!this.chunks.has(c)) {
        // не строим больше двух чанков за кадр, чтобы не было рывков
        if (built >= 2 && c > pc + 2) break;
        this.buildChunk(c); built++;
      }
    }
    // чанки дальше, чем видно сквозь туман, не рисуем (они всё равно полностью «в тумане»), но держим готовыми
    const pp = this.P(Math.max(this.base, Math.min(this.lastIdx, Math.round(playerIdx))));
    if (this.sea) { this.sea.position.x = pp.x; this.sea.position.z = pp.z; }
    // скрываем дальние чанки только на «близкой» дальности прорисовки
    const vis = this.draw === 0 ? (this.map.fog?.far ?? 700) * 0.8 + 60 : Infinity;
    for (const [c, grp] of this.chunks) {
      const u = grp.userData;
      if (u.cx !== undefined) grp.visible = Math.hypot(u.cx - pp.x, u.cy - pp.y, u.cz - pp.z) < vis;
      if (c < pc - BEHIND_CHUNKS) {
        this.root.remove(grp);
        grp.traverse((o) => { if (o.geometry && !o.userData.sharedGeo) o.geometry.dispose(); if (o.isInstancedMesh) o.dispose(); });
        this.chunks.delete(c);
      }
    }
    // удаляем старые точки (оставляем запас для соперников позади)
    const keepFrom = (pc - BEHIND_CHUNKS - 2) * CH;
    if (keepFrom > this.base + 200) {
      const cut = keepFrom - this.base;
      this.pts.splice(0, cut); this.base += cut;
    }
  }

  // лента вдоль трассы: offsets — массив смещений поперёк (слева направо), yFn(p, off) — высота
  ribbon(i0, i1, offsets, yFn, colorFn, vScale = 0, skip) {
    const pos = [], uv = [], col = [], idx = [];
    const n = offsets.length;
    let row = 0;
    for (let i = i0; i <= i1; i++) {
      const p = this.P(i);
      for (let j = 0; j < n; j++) {
        const off = offsets[j];
        pos.push(p.x + p.lx * off, yFn(p, off), p.z + p.lz * off);
        uv.push(j / (n - 1), p.s * vScale);
        if (colorFn) { const c = colorFn(p, off); col.push(c.r, c.g, c.b); }
      }
      if (i > i0 && !(skip && skip(i - 1))) {
        const r0 = (row - 1) * n, r1 = row * n;
        for (let j = 0; j < n - 1; j++) {
          idx.push(r0 + j, r0 + j + 1, r1 + j, r0 + j + 1, r1 + j + 1, r1 + j);
        }
      }
      row++;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    if (colorFn) g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  buildChunk(c) {
    const i0 = c * CH, i1 = i0 + CH;
    this.ensure(i1 + 2);
    const grp = new THREE.Group();
    const m = this.map, hw = this.hw, sh = this.sh;
    const Y = (p) => p.y;

    // дорога (ось X текстуры поперёк, V вдоль: 1 повтор на 12 м)
    const road = new THREE.Mesh(this.ribbon(i0, i1, [hw, -hw], (p) => p.y + 0.02, null, 1 / 12), this.roadMat);
    road.receiveShadow = true; grp.add(road);

    // обочины: поребрики (красно-белые) на поворотах, обычная обочина на прямых
    const isKerb = m.road.kerb === false ? () => false : (i) => Math.abs(this.P(i).k) > 1 / 170 || Math.abs(this.P(i + 1).k) > 1 / 170;
    for (const side of [1, -1]) {
      const offs = side > 0 ? [hw + sh, hw] : [-hw, -hw - sh];
      const kerb = new THREE.Mesh(this.ribbon(i0, i1, offs, (p, o) => p.y + 0.035 + (Math.abs(o) > hw + 0.1 ? 0.03 : 0), null, 1 / 4, (i) => !isKerb(i)), this.kerbMat);
      kerb.receiveShadow = true; grp.add(kerb);
      const plain = new THREE.Mesh(this.ribbon(i0, i1, offs, (p) => p.y + 0.015, null, 0, (i) => isKerb(i)), this.shoulderMat);
      plain.receiveShadow = true; grp.add(plain);
    }

    // рельеф
    // (цвет возвращается во временном объекте: ribbon() сразу копирует компоненты — без лишних аллокаций на вершину)
    const nearC = new THREE.Color(m.ground.near), farC = new THREE.Color(m.ground.far), tmp = new THREE.Color();
    const sandC = m.ground.sand !== undefined ? new THREE.Color(m.ground.sand) : null, wetC = sandC && sandC.clone().multiplyScalar(0.72);
    const ehw = hw + sh;
    const colorFn = (p, off) => {
      const wx = p.x + p.lx * off, wz = p.z + p.lz * off;
      const n = fbm2(wx * 0.05, wz * 0.05, this.seed + 3, 2);
      tmp.copy(nearC).lerp(farC, clamp(n * 1.3 - 0.15 + Math.abs(off) / 400, 0, 1));
      if (sandC && off < 0) {
        // берег: трава → песок → мокрый песок у воды
        const a = -off - ehw;
        tmp.lerp(sandC, smooth(clamp((a - 3) / 10, 0, 1)));
        if (a > 34) tmp.lerp(wetC, smooth(clamp((a - 34) / 16, 0, 1)));
      }
      return tmp;
    };
    const e = hw + sh;
    const cols = [e, e + 1.5, e + 4, e + 9, e + 18, e + 34, e + 60, e + 100, e + 160, e + 240];
    for (const side of [1, -1]) {
      const offs = side > 0 ? cols.slice().reverse() : cols.map((o) => -o);
      const terr = new THREE.Mesh(this.ribbon(i0, i1, offs, (p, o) => this.terrainY(p, o), colorFn), this.terrainMat);
      terr.receiveShadow = true; grp.add(terr);
    }

    this.buildBarriers(grp, i0, i1);
    this.buildBanners(grp, c, i0, i1);
    this.buildProps(grp, c, i0, i1);

    // ворота чекпоинтов и старта
    for (let i = i0; i < i1; i++) {
      if (i === 28) { this.buildGate(grp, i, this.gateMatStart); this.buildStands(grp, i + 12); }
      if (i >= CP_FIRST && (i - CP_FIRST) % CP_EVERY === 0 && i < this.finishIdx - 100) { this.buildGate(grp, i, this.gateMatCP); this.buildStands(grp, i - 14); }
      if (i === this.finishIdx) { this.buildGate(grp, i, this.gateMatFinish); this.buildFinishLine(grp, i); this.buildStands(grp, i - 14); this.buildStands(grp, i + 20); }
    }

    mergeChunk(grp);
    const pc = this.P(i0 + (CH >> 1));
    grp.userData.cx = pc.x; grp.userData.cy = pc.y; grp.userData.cz = pc.z;
    this.root.add(grp);
    this.chunks.set(c, grp);
  }

  buildBarriers(grp, i0, i1) {
    const w = this.wall, m = this.map;
    for (const side of [1, -1]) {
      const s = side;
      if (m.barrier === 'tires') {
        const g = this.ribbon(i0, i1, [s * w, s * w], (p, o) => 0, null, 1 / 3.2);
        // лента из двух рядов вершин: низ и верх стены
        this.wallFromRibbon(g, i0, i1, s * w, 0, 1.05);
        const mesh = new THREE.Mesh(g, this.barrierMat); mesh.castShadow = true; mesh.receiveShadow = true; grp.add(mesh);
      } else if (m.barrier === 'rail') {
        const g = this.ribbon(i0, i1, [s * w, s * w], () => 0, null, 1 / 4);
        this.wallFromRibbon(g, i0, i1, s * w, 0.45, 0.8);
        const mesh = new THREE.Mesh(g, this.barrierMat); mesh.castShadow = true; grp.add(mesh);
        // столбики
        const n = Math.floor((i1 - i0) / 2);
        const posts = new THREE.InstancedMesh(this.geo.post, this.postMat, n);
        posts.userData.sharedGeo = true;
        const mtx = new THREE.Matrix4();
        for (let k = 0; k < n; k++) {
          const p = this.P(i0 + k * 2);
          mtx.makeTranslation(p.x + p.lx * s * (w + 0.12), p.y + 0.42, p.z + p.lz * s * (w + 0.12));
          posts.setMatrixAt(k, mtx);
        }
        grp.add(posts);
        // снежный (или травяной) вал за отбойником
        if (this.snowbankMat) grp.add(new THREE.Mesh(this.ribbon(i0, i1, s > 0 ? [w + 3, w + 1.6, w + 0.4] : [-w - 0.4, -w - 1.6, -w - 3],
          (p, o) => p.y + (Math.abs(Math.abs(o) - w - 1.6) < 0.1 ? 0.9 : 0.05), null), this.snowbankMat));
      } else {
        // бетонный отбойник «Нью-Джерси» + неоновая полоса
        const prof = [[w, 0], [w + 0.12, 0.3], [w + 0.18, 0.85], [w + 0.32, 0.85], [w + 0.4, 0.3], [w + 0.45, 0]];
        const g = this.sweep(i0, i1, prof.map(([o, hh]) => [s * o, hh]), 1 / 6);
        const mesh = new THREE.Mesh(g, this.barrierMat); mesh.castShadow = true; mesh.receiveShadow = true; grp.add(mesh);
        if (this.neonMat) {
          const strip = new THREE.Mesh(this.ribbon(i0, i1, s > 0 ? [w + 0.3, w + 0.2] : [-w - 0.2, -w - 0.3], (p) => p.y + 0.87, null), s > 0 ? this.neonMat : this.neonMat2);
          grp.add(strip);
        }
      }
    }
  }

  // протяжка профиля [[смещение, высота], ...] вдоль трассы
  sweep(i0, i1, prof, vScale = 0) {
    const pos = [], uv = [], idx = [];
    const n = prof.length;
    let row = 0;
    for (let i = i0; i <= i1; i++, row++) {
      const p = this.P(i);
      prof.forEach(([o, hh], j) => {
        pos.push(p.x + p.lx * o, p.y + hh, p.z + p.lz * o);
        uv.push(p.s * vScale, j / (n - 1));
      });
      if (i > i0) {
        const r0 = (row - 1) * n, r1 = row * n;
        for (let j = 0; j < n - 1; j++) idx.push(r0 + j, r0 + j + 1, r1 + j, r0 + j + 1, r1 + j + 1, r1 + j);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    return g;
  }

  // превращает ленту из 2 вершин в поперечнике в вертикальную стену от y0 до y1
  wallFromRibbon(g, i0, i1, off, y0, y1) {
    const pos = g.attributes.position;
    let r = 0;
    for (let i = i0; i <= i1; i++, r++) {
      const p = this.P(i);
      pos.setY(r * 2, p.y + y1);
      pos.setY(r * 2 + 1, p.y + y0);
    }
    const uv = g.attributes.uv;
    for (let k = 0; k < uv.count; k++) uv.setX(k, k % 2);
    // поменяем местами u/v: вдоль трассы — по X текстуры
    for (let k = 0; k < uv.count; k++) { const a = uv.getX(k), b = uv.getY(k); uv.setXY(k, b, a); }
    g.computeVertexNormals();
  }

  // проверка, что точка достаточно далеко от дороги (с учётом соседних участков)
  clearOfRoad(x, z, i, margin) {
    const lim = (this.wall + margin) ** 2;
    // проверяем далеко вперёд и назад: трасса может петлять и вернуться к дереву (раньше ёлка вставала прямо на дорогу)
    const far = Math.max(90, Math.ceil(Math.sqrt((x - this.P(i).x) ** 2 + (z - this.P(i).z) ** 2) * 2.5));
    const stp = far > 200 ? 4 : 3;
    this.ensure(i + far); // дорога впереди генерируется заранее (детерминированно), чтобы дерево не встало на будущий участок
    for (let j = Math.max(this.base, i - far); j <= Math.min(this.lastIdx, i + far); j += stp) {
      const p = this.P(j);
      if ((p.x - x) ** 2 + (p.z - z) ** 2 < lim) return false;
    }
    return true;
  }

  buildProps(grp, c, i0, i1) {
    const m = this.map, rnd = mulberry32(this.seed * 1000 + c * 7919);
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    // side: 0 — обе стороны, ±1 — только с одной стороны трассы
    const place = (type, count, offMin, offMax, sMin, sMax, margin = 3, cast = true, onlySide = 0) => {
      const geo = this.propGeo[type], glow = this.propGeo[type + '_glow']; if (!geo && !glow) return;
      const list = [];
      for (let k = 0; k < count * 3 && list.length < count; k++) {
        const i = i0 + Math.floor(rnd() * (i1 - i0));
        const p = this.P(i);
        let side = rnd() < 0.5 ? -1 : 1;
        if (onlySide) side = onlySide;
        const off = side * (offMin + rnd() * (offMax - offMin));
        const x = p.x + p.lx * off, z = p.z + p.lz * off;
        if (!this.clearOfRoad(x, z, i, margin)) continue;
        const s = sMin + rnd() * (sMax - sMin);
        q.setFromAxisAngle(up, rnd() * Math.PI * 2);
        sc.set(s, s * (0.85 + rnd() * 0.3), s);
        ps.set(x, this.terrainY(p, off) - 0.1, z);
        list.push(mtx.compose(ps, q, sc).clone());
      }
      if (!list.length) return;
      if (geo) {
        const im = new THREE.InstancedMesh(geo, this.propMat, list.length);
        im.userData.sharedGeo = true;
        list.forEach((mm, k) => im.setMatrixAt(k, mm));
        im.castShadow = cast && this.quality > 0; im.receiveShadow = false;
        grp.add(im);
      }
      if (glow) {
        const gm = new THREE.InstancedMesh(glow, this.glowMat, list.length);
        gm.userData.sharedGeo = true;
        list.forEach((mm, k) => gm.setMatrixAt(k, mm));
        grp.add(gm);
      }
    };
    const st = this.style;
    if (m.decor) {
      // новые карты: расстановка из описания карты (отступы — от отбойника)
      if (st === 'city') this.buildCity(grp, c, i0, i1, rnd);
      for (const [type, count, dMin, dMax, sMin, sMax, margin = 3, cast = true, chance = 1, side = 0] of m.decor) {
        if (chance < 1 && rnd() > chance) continue;
        place(type, count, this.wall + dMin, this.wall + dMax, sMin, sMax, margin, cast, side);
      }
    } else if (st === 'desert') {
      place('cactus', 8, this.wall + 3, 70, 0.8, 1.5);
      place('bush', 8, this.wall + 2, 60, 0.7, 1.6, 2, false);
      place('rock', 8, this.wall + 4, 110, 0.6, 3.2);
      if (rnd() < 0.8) place('mesa', 1, 150, 240, 0.7, 1.7, 60, false);
    } else if (st === 'snow') {
      place('pine', 22, this.wall + 3, 110, 0.8, 1.6);
      place('rock', 6, this.wall + 3, 80, 0.6, 2.2);
      if (rnd() < 0.9) place('peak', 1, 170, 250, 0.8, 1.8, 90, false);
    } else if (st === 'city') {
      this.buildCity(grp, c, i0, i1, rnd);
    }
  }

  buildCity(grp, c, i0, i1, rnd) {
    const box = this.geo.box, night = this.map.night;
    const per = [[], [], []];
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), ps = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    const signs = [];
    for (const side of [1, -1]) {
      let i = i0 + Math.floor(rnd() * 3);
      while (i < i1) {
        const p = this.P(i);
        const width = 10 + rnd() * 10, depth = 12 + rnd() * 14, height = 14 + Math.pow(rnd(), 1.6) * 80;
        const off = side * (this.wall + 8 + depth / 2 + rnd() * 6);
        const x = p.x + p.lx * off, z = p.z + p.lz * off;
        if (this.clearOfRoad(x, z, i, depth / 2 + 4)) {
          q.setFromAxisAngle(up, p.h);
          sc.set(width, height, depth); ps.set(x, p.y, z);
          per[Math.floor(rnd() * 3)].push(mtx.compose(ps, q, sc).clone());
          if (rnd() < (night ? 0.45 : 0.3)) signs.push({ p, off: off - side * (depth / 2 + 0.3), y: p.y + 6 + rnd() * Math.min(20, height - 10), side, w: 6 + rnd() * 3 });
        }
        i += Math.ceil((width + 3) / SP);
      }
    }
    per.forEach((list, v) => {
      if (!list.length) return;
      const im = new THREE.InstancedMesh(box, this.buildingMats[v], list.length);
      list.forEach((mm, k) => im.setMatrixAt(k, mm));
      im.userData.sharedGeo = true;
      if (!night) { im.castShadow = this.quality > 0; im.receiveShadow = true; }
      grp.add(im);
    });
    // неоновые вывески на фасадах, обращённые к дороге
    const plane = this.geo.plane;
    for (const s of signs) {
      const mat = this.neonSigns[Math.floor(rnd() * this.neonSigns.length)];
      const mesh = new THREE.Mesh(plane, mat);
      mesh.userData.sharedGeo = true;
      mesh.scale.set(s.w, s.w * 0.375, 1);
      mesh.position.set(s.p.x + s.p.lx * s.off, s.y, s.p.z + s.p.lz * s.off);
      mesh.rotation.y = s.p.h + (s.side > 0 ? -Math.PI / 2 : Math.PI / 2);
      grp.add(mesh);
    }
    // фонари каждые 30 м, в шахматном порядке, со световыми пятнами на асфальте
    const lampGeo = this.propGeo.lamp;
    const lamps = [], heads = [], pools = [];
    for (let i = i0 + (c % 2) * 7; i < i1; i += 15) {
      const p = this.P(i);
      const side = ((i / 15) | 0) % 2 ? 1 : -1;
      const off = side * (this.wall + 0.9);
      q.setFromAxisAngle(up, p.h + (side > 0 ? -Math.PI / 2 : Math.PI / 2));
      ps.set(p.x + p.lx * off, p.y, p.z + p.lz * off); sc.set(1, 1, 1);
      lamps.push(mtx.compose(ps, q, sc).clone());
      const hoff = off - side * 2.0;
      heads.push(new THREE.Matrix4().makeTranslation(p.x + p.lx * hoff, p.y + 6.9, p.z + p.lz * hoff));
      const poff = off - side * 3.5;
      if (night) pools.push(new THREE.Matrix4().makeTranslation(p.x + p.lx * poff, p.y + 0.05, p.z + p.lz * poff));
    }
    if (lamps.length) {
      const im = new THREE.InstancedMesh(lampGeo, this.propMat, lamps.length);
      im.userData.sharedGeo = true;
      lamps.forEach((mm, k) => im.setMatrixAt(k, mm)); grp.add(im);
      const hm = new THREE.InstancedMesh(this.geo.lampHead, this.lampHeadMat, heads.length);
      hm.userData.sharedGeo = true;
      heads.forEach((mm, k) => hm.setMatrixAt(k, mm)); grp.add(hm);
      if (pools.length) {
        const pm = new THREE.InstancedMesh(this.geo.pool, this.poolMat, pools.length);
        pm.userData.sharedGeo = true;
        pools.forEach((mm, k) => pm.setMatrixAt(k, mm));
        pm.renderOrder = 1; grp.add(pm);
      }
    }
  }

  // рекламные баннеры над отбойниками — вся партия чанка одним мешем (один вызов отрисовки)
  buildBanners(grp, c, i0, i1) {
    const rnd = mulberry32(this.seed * 31 + c * 101);
    const topH = { tires: 1.1, rail: 0.85, concrete: 0.9 }[this.map.barrier];
    const pos = [], uv = [], idx = [];
    const rows = this.bannerRows;
    for (let i = i0; i + 3 <= i1; i += 4) {
      if (rnd() < 0.45) continue;
      const side = rnd() < 0.5 ? 1 : -1;
      const row = Math.floor(rnd() * rows);
      const v0 = 1 - (row + 1) / rows, v1 = 1 - row / rows;
      const off = side * (this.wall + 0.05);
      const base = pos.length / 3;
      for (let k = 0; k <= 3; k++) {
        const p = this.P(i + k);
        const x = p.x + p.lx * off, z = p.z + p.lz * off;
        pos.push(x, p.y + topH, z, x, p.y + topH + 0.75, z);
        const u = side > 0 ? k / 3 : 1 - k / 3;
        uv.push(u, v0, u, v1);
      }
      for (let k = 0; k < 3; k++) { const a = base + k * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    if (!pos.length) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    grp.add(new THREE.Mesh(g, this.bannerMat));
  }

  // трибуны со зрителями по обе стороны трассы
  buildStands(grp, i) {
    const p = this.P(i);
    for (const s of [1, -1]) {
      const off = s * (this.wall + 7.5);
      const x = p.x + p.lx * off, z = p.z + p.lz * off;
      if (!this.clearOfRoad(x, z, i, 5.5)) continue;
      const mats = [this.standGrey, this.standGrey, this.standGrey, this.standGrey, this.standGrey, this.standGrey];
      mats[s > 0 ? 1 : 0] = this.standMats[0];
      const stand = new THREE.Mesh(new THREE.BoxGeometry(8, 5, 34), mats);
      stand.position.set(x, p.y + 2.5, z); stand.rotation.y = p.h; stand.castShadow = true;
      grp.add(stand);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.3, 35), this.roofMat);
      roof.position.set(x - p.lx * s * 0.6, p.y + 7.2, z - p.lz * s * 0.6); roof.rotation.y = p.h; roof.rotation.z = s * 0.08;
      grp.add(roof);
      for (const dz of [-16, 0, 16]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.3, 0.25), this.pillarMat);
        post.position.set(x - p.lx * s * 4.3 + Math.sin(p.h) * dz, p.y + 6, z - p.lz * s * 4.3 + Math.cos(p.h) * dz);
        grp.add(post);
      }
    }
  }

  buildFinishLine(grp, i) {
    const p = this.P(i);
    const g = new THREE.PlaneGeometry(this.hw * 2, 2); g.rotateX(-Math.PI / 2);
    const line = new THREE.Mesh(g, this.finishLineMat);
    line.rotation.y = p.h; // ось X плоскости — поперёк трассы
    line.position.set(p.x, p.y + 0.04, p.z);
    grp.add(line);
  }

  buildGate(grp, i, mat) {
    const p = this.P(i), w = this.wall + 0.5;
    const pillarG = new THREE.BoxGeometry(0.6, 6.5, 0.6);
    for (const s of [1, -1]) {
      const pl = new THREE.Mesh(pillarG, this.pillarMat);
      pl.position.set(p.x + p.lx * s * w, p.y + 3.25, p.z + p.lz * s * w);
      pl.rotation.y = p.h; pl.castShadow = true; grp.add(pl);
    }
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(w * 2, w * 2 * 96 / 512), mat);
    banner.position.set(p.x, p.y + 6.2, p.z);
    banner.rotation.y = p.h + Math.PI;
    grp.add(banner);
  }
}
