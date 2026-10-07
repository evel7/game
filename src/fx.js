import * as THREE from 'three';

// Небо: сфера с вертикальным градиентом, солнце/луна и звёзды для ночи
export function makeSky(map) {
  const grp = new THREE.Group();
  const geo = new THREE.SphereGeometry(900, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color(map.sky.top) },
      horizon: { value: new THREE.Color(map.sky.horizon) },
      bottom: { value: new THREE.Color(map.sky.bottom) },
    },
    vertexShader: 'varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.6),0.7)) : mix(horizon, bottom, min(1.0,-h*4.0));
      gl_FragColor = vec4(c,1.0); }`,
  });
  grp.add(new THREE.Mesh(geo, mat));
  const d = new THREE.Vector3(...map.sun.dir).normalize();
  // диск солнца / луны
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
  if (map.night) { g.addColorStop(0, 'rgba(235,240,255,1)'); g.addColorStop(0.25, 'rgba(220,230,255,0.95)'); g.addColorStop(0.3, 'rgba(160,170,255,0.25)'); g.addColorStop(1, 'rgba(0,0,0,0)'); }
  else { g.addColorStop(0, 'rgba(255,255,240,1)'); g.addColorStop(0.2, 'rgba(255,250,220,0.95)'); g.addColorStop(0.45, 'rgba(255,220,160,0.25)'); g.addColorStop(1, 'rgba(255,200,120,0)'); }
  c.fillStyle = g; c.fillRect(0, 0, 128, 128);
  const sunTex = new THREE.CanvasTexture(cv);
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTex, fog: false, depthWrite: false, transparent: true }));
  sun.position.copy(d).multiplyScalar(800); sun.scale.setScalar(map.night ? 70 : 150);
  grp.add(sun);
  if (map.night && map.stars !== false) {
    const n = 1500, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const th = Math.random() * Math.PI * 2, ph = Math.acos(Math.random() * 0.9 + 0.1);
      pos[i * 3] = 850 * Math.sin(ph) * Math.cos(th); pos[i * 3 + 1] = 850 * Math.cos(ph); pos[i * 3 + 2] = 850 * Math.sin(ph) * Math.sin(th);
    }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    grp.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, fog: false })));
  }
  if (map.aurora) grp.add(makeAurora());
  grp.renderOrder = -10;
  return grp;
}

// северное сияние: несколько полупрозрачных «занавесов» (кольцевые ленты) с аддитивным смешиванием.
// Анимация не нужна — ноль работы на кадр, 3 вызова отрисовки.
function makeAurora() {
  const grp = new THREE.Group();
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128;
  const c = cv.getContext('2d');
  // вертикальные лучи разной яркости, снизу зелёные, сверху фиолетовые
  for (let x = 0; x < 512; x++) {
    const k = 0.35 + 0.65 * Math.abs(Math.sin(x * 0.031) * Math.sin(x * 0.0071 + 1.3)) * (0.75 + 0.25 * Math.sin(x * 0.37));
    const g = c.createLinearGradient(0, 128, 0, 0);
    g.addColorStop(0, 'rgba(60,255,160,0)');
    g.addColorStop(0.12, `rgba(70,255,170,${0.9 * k})`);
    g.addColorStop(0.45, `rgba(60,220,190,${0.45 * k})`);
    g.addColorStop(0.8, `rgba(150,90,255,${0.22 * k})`);
    g.addColorStop(1, 'rgba(150,90,255,0)');
    c.fillStyle = g; c.fillRect(x, 0, 1, 128);
  }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = THREE.RepeatWrapping;
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  const bands = [[640, 70, 150, 0.6, 1.8, 0.95], [720, 120, 130, 2.6, 1.5, 0.7], [600, 50, 110, 4.4, 1.6, 0.6]];
  for (const [r, y, h, a0, len, op] of bands) {
    const seg = 48, pos = [], uv = [], idx = [];
    for (let i = 0; i <= seg; i++) {
      const t = i / seg, a = a0 + t * len;
      const rr = r + Math.sin(t * 9 + a0) * 60;                     // волнистый «занавес»
      const yy = y + Math.sin(t * 5 + a0 * 2) * 25;
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      pos.push(x, yy, z, x, yy + h, z);
      const u = t * 2.4 + a0;
      uv.push(u, 0, u, 1);
      if (i < seg) { const b = i * 2; idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    // плавное затухание на концах ленты — через цвет вершин
    const col = [];
    for (let i = 0; i <= seg; i++) { const t = i / seg, f = Math.sin(Math.PI * t) * op; col.push(f, f, f, f, f, f); }
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    const m = new THREE.Mesh(g, mat.clone()); m.material.vertexColors = true;
    m.renderOrder = -9.5; grp.add(m);
  }
  return grp;
}

// Дым из-под колёс: ОДНА система частиц (THREE.Points) — один вызов отрисовки на весь дым,
// поэтому не тормозит даже при сильном дрифте.
export class Smoke {
  constructor(scene, color = 0xffffff, max = 260) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max).fill(1);
    this.base = new Float32Array(max);
    this.op = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { color: { value: new THREE.Color(color) }, scale: { value: innerHeight * 0.5 } },
      vertexShader: `attribute float size; attribute float alpha; varying float a; uniform float scale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
          // возле камеры дым растворяется — не залепляет экран
          a = alpha * smoothstep(3.0, 9.0, -mv.z);
          gl_PointSize = min(size * scale / -mv.z, 260.0); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform vec3 color; varying float a;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d)*4.0; if (r > 1.0) discard; gl_FragColor = vec4(color, a * (1.0 - r) * (1.0 - r)); }`,
    });
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false; this.points.renderOrder = 4;
    scene.add(this.points);
    this.next = 0;
  }
  emit(x, y, z, vx, vz, amount, opacity = 0.5) {
    const i = this.next; this.next = (this.next + 1) % this.max;
    // дым стелется по асфальту: почти не поднимается, расползается в стороны и остаётся на месте
    this.pos[i * 3] = x + (Math.random() - 0.5) * 0.3; this.pos[i * 3 + 1] = y + 0.35; this.pos[i * 3 + 2] = z + (Math.random() - 0.5) * 0.3;
    const a = Math.random() * Math.PI * 2, sp = 0.8 + Math.random() * 1.4;
    this.vel[i * 3] = vx * 0.08 + Math.cos(a) * sp; this.vel[i * 3 + 1] = 0.08 + Math.random() * 0.15; this.vel[i * 3 + 2] = vz * 0.08 + Math.sin(a) * sp;
    this.life[i] = 0; this.maxLife[i] = 1.4 + Math.random() * 0.8 * amount;
    this.base[i] = 1.1 + Math.random() * 0.5; this.op[i] = opacity;
  }
  update(dt) {
    // нет живых частиц — ничего не пересчитываем и не загружаем в GPU
    if (!this.live && this.next === this._lastNext) return;
    this._lastNext = this.next;
    const k = 1 - dt * 1.5;
    let live = 0;
    for (let i = 0; i < this.max; i++) {
      if (this.op[i] === 0) continue;
      live++;
      this.life[i] += dt;
      const t = this.life[i] / this.maxLife[i];
      if (t >= 1) { this.op[i] = 0; this.alpha[i] = 0; continue; }
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.vel[i * 3] *= k; this.vel[i * 3 + 2] *= k;
      this.size[i] = this.base[i] * (1 + t * 2.4);
      this.alpha[i] = this.op[i] * (1 - t) * Math.min(1, this.life[i] * 8);
    }
    this.live = live;
    const a = this.points.geometry.attributes;
    a.position.needsUpdate = true; a.size.needsUpdate = true; a.alpha.needsUpdate = true;
  }
  clear() {
    this.op.fill(0); this.alpha.fill(0); this.live = 0;
    const a = this.points.geometry.attributes; a.alpha.needsUpdate = true;
  }
  dispose(scene) { scene.remove(this.points); this.points.geometry.dispose(); this.points.material.dispose(); }
}

// Следы шин: кольцевой буфер из отрезков-квадов в одном меше
export class Skids {
  constructor(scene, max = 2400, color = 0x111111, opacity = 0.55) {
    this.max = max;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 4 * 3);
    this.alpha = new Float32Array(max * 4);
    const idx = new Uint32Array(max * 6);
    for (let i = 0; i < max; i++) { const b = i * 4; idx.set([b, b + 1, b + 2, b + 1, b + 3, b + 2], i * 6); }
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2,
      uniforms: { color: { value: new THREE.Color(color) }, op: { value: opacity } },
      vertexShader: 'attribute float alpha; varying float a; void main(){ a = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader: 'uniform vec3 color; uniform float op; varying float a; void main(){ gl_FragColor = vec4(color, a*op); }',
    });
    this.mesh = new THREE.Mesh(g, mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 1;
    scene.add(this.mesh);
    this.n = 0; this.last = [null, null, null, null];
    // по одному объекту «последней точки» на колесо — без аллокаций каждый кадр
    this.pool = [0, 1, 2, 3].map(() => ({ x: 0, y: 0, z: 0, lx: 0, lz: 0 }));
  }
  // wheel — индекс колеса; x,y,z — точка контакта; hx,hz — направление «вбок» (для ширины)
  add(wheel, x, y, z, lx, lz, strength) {
    const prev = this.last[wheel];
    const w = 0.13, cy = y + 0.045;
    if (prev && strength > 0 && (x - prev.x) ** 2 + (z - prev.z) ** 2 < 4) {
      if ((x - prev.x) ** 2 + (z - prev.z) ** 2 < 0.09) return; // слишком близко — ждём
      const i = this.n % this.max; this.n++;
      const p = this.pos, b = i * 12;
      p[b] = prev.x + prev.lx * w; p[b + 1] = prev.y; p[b + 2] = prev.z + prev.lz * w;
      p[b + 3] = prev.x - prev.lx * w; p[b + 4] = prev.y; p[b + 5] = prev.z - prev.lz * w;
      p[b + 6] = x + lx * w; p[b + 7] = cy; p[b + 8] = z + lz * w;
      p[b + 9] = x - lx * w; p[b + 10] = cy; p[b + 11] = z - lz * w;
      const a = Math.min(1, strength), al = this.alpha;
      al[i * 4] = al[i * 4 + 1] = al[i * 4 + 2] = al[i * 4 + 3] = a;
      // в GPU отправляем только изменённый квад, а не весь буфер (3000 квадов = 144 КБ на каждое обновление)
      const at = this.mesh.geometry.attributes;
      at.position.addUpdateRange(b, 12); at.position.needsUpdate = true;
      at.alpha.addUpdateRange(i * 4, 4); at.alpha.needsUpdate = true;
    }
    if (strength > 0) {
      const c = this.pool[wheel];
      c.x = x; c.y = cy; c.z = z; c.lx = lx; c.lz = lz;
      this.last[wheel] = c;
    } else this.last[wheel] = null;
  }
  clear() {
    this.pos.fill(0); this.alpha.fill(0);
    const at = this.mesh.geometry.attributes;
    at.position.clearUpdateRanges(); at.alpha.clearUpdateRanges();
    at.position.needsUpdate = true; at.alpha.needsUpdate = true;
    this.last = [null, null, null, null];
  }
}

// Снегопад вокруг камеры
export class Snowfall {
  constructor(scene, n = 2500) {
    this.n = n;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pos[i * 3] = (Math.random() - 0.5) * 80; pos[i * 3 + 1] = Math.random() * 40; pos[i * 3 + 2] = (Math.random() - 0.5) * 80; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 0.18, transparent: true, opacity: 0.9, depthWrite: false }));
    this.pts.frustumCulled = false;
    scene.add(this.pts);
  }
  update(dt, cam) {
    const p = this.pts.geometry.attributes.position, a = p.array;
    // один проход вместо двух; performance.now() — один раз за кадр, а не на каждую снежинку
    const t = performance.now() * 0.0005, cx = cam.position.x, cz = cam.position.z, sway = dt * 0.6;
    for (let i = 0, j = 0; i < this.n; i++, j += 3) {
      let y = a[j + 1] - dt * (2 + (i % 5) * 0.4);
      if (y < -2) y += 40;
      a[j + 1] = y;
      let x = a[j] + Math.sin(i + t) * sway;
      // сетка частиц «обёрнута» вокруг камеры
      if (x - cx > 40) x -= 80; else if (x - cx < -40) x += 80;
      a[j] = x;
      const z = a[j + 2];
      if (z - cz > 40) a[j + 2] = z - 80; else if (z - cz < -40) a[j + 2] = z + 80;
    }
    p.needsUpdate = true;
    this.pts.position.set(0, cam.position.y - 15, 0);
  }
}

// ---------- карта окружения для отражений: небо + земля + солнце конкретной карты ----------
export function makeEnvScene(map) {
  const sc = new THREE.Scene();
  const geo = new THREE.SphereGeometry(50, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      top: { value: new THREE.Color(map.sky.top) }, horizon: { value: new THREE.Color(map.sky.horizon).lerp(new THREE.Color(0xdde3ea), map.night ? 0 : 0.45) },
      ground: { value: new THREE.Color(map.ground.far).lerp(new THREE.Color(0x5a5a5e), 0.7).multiplyScalar(map.night ? 0.25 : 0.55) },
    },
    vertexShader: 'varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; varying vec3 vp;
      void main(){ float h = vp.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(min(1.0,h*1.5),0.6)) : mix(horizon*0.8, ground, min(1.0,-h*6.0)); gl_FragColor = vec4(c,1.0); }`,
  });
  sc.add(new THREE.Mesh(geo, mat));
  const d = new THREE.Vector3(...map.sun.dir).normalize();
  const sun = new THREE.Mesh(new THREE.SphereGeometry(map.night ? 2 : 4, 16, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(map.sun.color).multiplyScalar(map.night ? 2 : 12) }));
  sun.position.copy(d).multiplyScalar(40); sc.add(sun);
  const st = map.style ?? map.id;
  if (map.night) {
    // ночные отблески в отражениях: неон города / лава / северное сияние
    const cols = st === 'volcano' ? [0xff5a14, 0xff8a2a, 0xff3a0a, 0xffb040] : st === 'ice' ? [0x3cffaa, 0x2ad6c0, 0x8a6bff, 0x9fd8ff]
      : [0xff2ea6, 0x28e7ff, 0xffd98a, 0x7cff4f, 0xffb36b];
    for (let i = 0; i < 40; i++) {
      const a = Math.random() * Math.PI * 2, h = Math.random() * 12 - 2;
      const m = new THREE.Mesh(new THREE.BoxGeometry(3 + Math.random() * 4, 1 + Math.random() * 3, 0.5), new THREE.MeshBasicMaterial({ color: new THREE.Color(cols[i % cols.length]).multiplyScalar(2.5) }));
      m.position.set(Math.cos(a) * 40, h, Math.sin(a) * 40); m.lookAt(0, h, 0); sc.add(m);
    }
  } else {
    // светлые «облака» для бликов на лаке
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2, h = 8 + Math.random() * 20;
      const m = new THREE.Mesh(new THREE.SphereGeometry(4 + Math.random() * 5, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffffff).multiplyScalar(1.4) }));
      m.scale.y = 0.35; m.position.set(Math.cos(a) * 42, h, Math.sin(a) * 42); sc.add(m);
    }
  }
  return sc;
}

// ---------- горизонт: кольцо гор / силуэт города, всегда далеко (следует за камерой) ----------
export function makeHorizon(map) {
  const W = 2048, H = 256;
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const c = cv.getContext('2d');
  const rnd = (() => { let a = 12345; return () => { a = (a * 16807) % 2147483647; return a / 2147483647; }; })();
  const fog = new THREE.Color(map.fog.color);
  const layer = (col, amp, base, freq, jag) => {
    c.fillStyle = col; c.beginPath(); c.moveTo(0, H);
    const ph = [rnd() * 10, rnd() * 10, rnd() * 10];
    for (let x = 0; x <= W; x += 4) {
      const t = (x / W) * Math.PI * 2;
      let y = Math.sin(t * freq + ph[0]) * 0.5 + Math.sin(t * freq * 2.3 + ph[1]) * 0.3 + Math.sin(t * freq * 5.7 + ph[2]) * 0.2;
      y += (rnd() - 0.5) * jag;
      c.lineTo(x, H - base - (y * 0.5 + 0.5) * amp);
    }
    c.lineTo(W, H); c.closePath(); c.fill();
  };
  const mix = (hex, k) => '#' + new THREE.Color(hex).lerp(fog, k).getHexString();
  const hz = map.horizon ?? map.id;
  if (hz === 'hills') {
    layer(mix(0x7a8f8a, 0.55), 80, 14, 3, 0.04);
    layer(mix(0x5f7a62, 0.4), 45, 4, 6, 0.05);
  } else if (hz === 'sea') {
    layer(mix(0x6b8f7a, 0.6), 34, 0, 2, 0.02);
  } else if (hz === 'desert') {
    layer(mix(0x9a5a4a, 0.55), 110, 20, 3, 0.05);
    layer(mix(0xb0583a, 0.35), 70, 8, 5, 0.08);
  } else if (hz === 'snow') {
    layer(mix(0x8fa3bd, 0.5), 190, 20, 4, 0.12);
    // снежные шапки
    c.globalCompositeOperation = 'source-atop';
    const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#ffffff'); g.addColorStop(0.45, 'rgba(255,255,255,0.8)'); g.addColorStop(0.6, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    c.globalCompositeOperation = 'source-over';
    layer(mix(0x6f829a, 0.35), 90, 6, 7, 0.15);
  } else if (hz === 'forest') {
    // дальние холмы, покрытые лесом: зубчатый край из «ёлочек»
    const forest = (col, base, amp, freq, tree, seedPh) => {
      c.fillStyle = col; c.beginPath(); c.moveTo(0, H);
      for (let x = 0; x <= W; x += tree) {
        const t = (x / W) * Math.PI * 2;
        const y = (Math.sin(t * freq + seedPh) * 0.6 + Math.sin(t * freq * 2.7 + seedPh * 2) * 0.4) * 0.5 + 0.5;
        const top = H - base - y * amp - rnd() * tree * 0.9;
        c.lineTo(x, top + tree * 1.4); c.lineTo(x + tree / 2, top); c.lineTo(x + tree, top + tree * 1.4);
      }
      c.lineTo(W, H); c.closePath(); c.fill();
    };
    layer(mix(0x6f8f9a, 0.62), 120, 30, 2, 0.03);
    forest(mix(0x3d6a4a, 0.5), 22, 70, 3, 7, 1.3);
    forest(mix(0x2a5236, 0.32), 6, 40, 5, 9, 4.1);
  } else if (hz === 'volcano') {
    // зарево у горизонта, гряда и дымящийся вулкан с потоками лавы
    const g = c.createLinearGradient(0, H * 0.35, 0, H); g.addColorStop(0, 'rgba(255,90,20,0)'); g.addColorStop(1, 'rgba(255,90,20,0.55)');
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    layer(mix(0x3a1a14, 0.45), 90, 14, 3, 0.06);
    for (const [cx, w, h] of [[W * 0.22, 260, 200], [W * 0.68, 200, 150]]) {
      c.fillStyle = mix(0x24100c, 0.3); c.beginPath(); c.moveTo(cx - w, H); c.lineTo(cx - 26, H - h); c.lineTo(cx + 26, H - h); c.lineTo(cx + w, H); c.closePath(); c.fill();
      c.strokeStyle = 'rgba(255,110,30,0.8)'; c.lineWidth = 2;
      for (let k = 0; k < 3; k++) { c.beginPath(); let x = cx + (k - 1) * 14, y = H - h + 4; c.moveTo(x, y); while (y < H - h * 0.5) { x += (rnd() - 0.5) * 6 + (k - 1) * 5; y += 8; c.lineTo(x, y); } c.stroke(); }
      const cg = c.createRadialGradient(cx, H - h, 0, cx, H - h, 70); cg.addColorStop(0, 'rgba(255,170,60,0.95)'); cg.addColorStop(1, 'rgba(255,80,20,0)');
      c.fillStyle = cg; c.fillRect(cx - 70, H - h - 70, 140, 140);
    }
    layer(mix(0x1a0c0a, 0.2), 45, 2, 7, 0.1);
  } else if (hz === 'sakura') {
    // закатный город в дымке и гора на фоне
    c.fillStyle = mix(0x8a6a8a, 0.55); c.beginPath(); c.moveTo(W * 0.3, H); c.lineTo(W * 0.45, H - 210); c.lineTo(W * 0.48, H - 214); c.lineTo(W * 0.62, H); c.closePath(); c.fill();
    c.fillStyle = 'rgba(255,240,245,0.85)'; c.beginPath(); c.moveTo(W * 0.427, H - 178); c.lineTo(W * 0.45, H - 210); c.lineTo(W * 0.48, H - 214); c.lineTo(W * 0.505, H - 176);
    c.lineTo(W * 0.48, H - 186); c.lineTo(W * 0.465, H - 174); c.lineTo(W * 0.445, H - 186); c.closePath(); c.fill();
    for (const [col, kk, maxH] of [[0x7a5a7a, 0.5, 150], [0x5a3f5a, 0.3, 110]]) {
      let x = 0;
      while (x < W) {
        const w = 14 + rnd() * 36, h = 20 + Math.pow(rnd(), 1.6) * maxH;
        c.fillStyle = mix(col, kk); c.fillRect(x, H - h, w, h);
        for (let yy = H - h + 4; yy < H - 4; yy += 7) for (let xx = x + 3; xx < x + w - 3; xx += 5) {
          if (rnd() < 0.08) { c.fillStyle = 'rgba(255,200,140,0.8)'; c.fillRect(xx, yy, 2, 2); }
        }
        x += w + rnd() * 10;
      }
    }
  } else if (hz === 'ice') {
    // ночные горы за озером со снежными вершинами
    layer(mix(0x2a4a6a, 0.45), 150, 16, 3, 0.1);
    c.globalCompositeOperation = 'source-atop';
    const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, 'rgba(220,235,255,0.95)'); g.addColorStop(0.5, 'rgba(200,220,245,0.5)'); g.addColorStop(0.68, 'rgba(200,220,245,0)');
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    c.globalCompositeOperation = 'source-over';
    layer(mix(0x14283c, 0.3), 60, 4, 6, 0.12);
    // тёмная полоска леса по берегу
    layer(mix(0x0a1620, 0.25), 14, 0, 40, 0.5);
  } else {
    // силуэт ночного города с огнями окон
    let x = 0;
    while (x < W) {
      const w = 14 + rnd() * 40, h = 30 + Math.pow(rnd(), 1.5) * 190;
      c.fillStyle = mix(0x141026, 0.25); c.fillRect(x, H - h, w, h);
      for (let yy = H - h + 4; yy < H - 4; yy += 6) for (let xx = x + 3; xx < x + w - 3; xx += 5) {
        if (rnd() < 0.18) { c.fillStyle = ['#ffd98a', '#9fd8ff', '#ff9ad5'][Math.floor(rnd() * 3)]; c.fillRect(xx, yy, 2, 2); }
      }
      if (rnd() < 0.15) { c.fillStyle = '#ff2020'; c.fillRect(x + w / 2 - 1, H - h - 6, 2, 2); }
      x += w + rnd() * 6;
    }
  }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = THREE.RepeatWrapping;
  const R = 820, HH = { snow: 230, city: 190, ice: 190, volcano: 180, sakura: 180, forest: 150 }[hz] ?? 140;
  const geo = new THREE.CylinderGeometry(R, R, HH, 96, 1, true);
  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  mesh.userData.h = HH;
  mesh.renderOrder = -9;
  return mesh;
}

// ---------- облака (для дневных карт) ----------
export function makeClouds(map) {
  const grp = new THREE.Group();
  if (map.night) return grp;
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 128;
  const c = cv.getContext('2d');
  for (let i = 0; i < 16; i++) {
    const x = 40 + Math.random() * 176, y = 50 + Math.random() * 40, r = 20 + Math.random() * 30;
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 256, 128);
  }
  const tex = new THREE.CanvasTexture(cv);
  const tint = map.cloudTint ?? ((map.style ?? map.id) === 'desert' ? 0xffe2c8 : 0xffffff);
  for (let i = 0; i < 14; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: tint, fog: false, depthWrite: false, transparent: true, opacity: 0.75 }));
    const a = Math.random() * Math.PI * 2, d = 450 + Math.random() * 300;
    s.position.set(Math.cos(a) * d, 160 + Math.random() * 180, Math.sin(a) * d);
    const sc = 180 + Math.random() * 220; s.scale.set(sc, sc * 0.45, 1);
    grp.add(s);
  }
  return grp;
}
