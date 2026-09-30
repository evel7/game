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
  if (map.night) {
    const n = 1500, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const th = Math.random() * Math.PI * 2, ph = Math.acos(Math.random() * 0.9 + 0.1);
      pos[i * 3] = 850 * Math.sin(ph) * Math.cos(th); pos[i * 3 + 1] = 850 * Math.cos(ph); pos[i * 3 + 2] = 850 * Math.sin(ph) * Math.sin(th);
    }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    grp.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, fog: false })));
  }
  grp.renderOrder = -10;
  return grp;
}

// Дым из-под колёс: пул спрайтов
export class Smoke {
  constructor(scene, color = 0xffffff, max = 220) {
    const cv = document.createElement('canvas'); cv.width = cv.height = 64;
    const c = cv.getContext('2d');
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,0.9)'); g.addColorStop(0.5, 'rgba(255,255,255,0.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(cv);
    this.items = [];
    for (let i = 0; i < max; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color, transparent: true, depthWrite: false, opacity: 0 }));
      s.visible = false; scene.add(s);
      this.items.push({ s, life: 0, max: 1, vx: 0, vy: 0, vz: 0, size: 1 });
    }
    this.next = 0;
  }
  emit(x, y, z, vx, vz, amount, opacity = 0.5) {
    const it = this.items[this.next]; this.next = (this.next + 1) % this.items.length;
    it.s.visible = true; it.s.position.set(x + (Math.random() - 0.5) * 0.3, y + 0.25, z + (Math.random() - 0.5) * 0.3);
    it.life = 0; it.max = 1.2 + Math.random() * 1.3 * amount;
    it.vx = vx * 0.25 + (Math.random() - 0.5) * 1.2; it.vz = vz * 0.25 + (Math.random() - 0.5) * 1.2; it.vy = 0.6 + Math.random() * 0.8;
    it.size = 0.8 + Math.random() * 0.6; it.op = opacity;
  }
  update(dt) {
    for (const it of this.items) {
      if (!it.s.visible) continue;
      it.life += dt;
      const t = it.life / it.max;
      if (t >= 1) { it.s.visible = false; continue; }
      it.s.position.x += it.vx * dt; it.s.position.y += it.vy * dt; it.s.position.z += it.vz * dt;
      it.vx *= 1 - dt * 1.5; it.vz *= 1 - dt * 1.5;
      const sz = it.size * (1 + t * 5);
      it.s.scale.set(sz, sz, 1);
      it.s.material.opacity = it.op * (1 - t) * Math.min(1, it.life * 8);
    }
  }
  clear() { for (const it of this.items) it.s.visible = false; }
  dispose(scene) { for (const it of this.items) { scene.remove(it.s); it.s.material.dispose(); } }
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
  }
  // wheel — индекс колеса; x,y,z — точка контакта; hx,hz — направление «вбок» (для ширины)
  add(wheel, x, y, z, lx, lz, strength) {
    const prev = this.last[wheel];
    const w = 0.13;
    const cur = { x, y: y + 0.045, z, lx, lz };
    if (prev && strength > 0 && (x - prev.x) ** 2 + (z - prev.z) ** 2 < 4) {
      if ((x - prev.x) ** 2 + (z - prev.z) ** 2 < 0.09) return; // слишком близко — ждём
      const i = this.n % this.max; this.n++;
      const p = this.pos, b = i * 12;
      p[b] = prev.x + prev.lx * w; p[b + 1] = prev.y; p[b + 2] = prev.z + prev.lz * w;
      p[b + 3] = prev.x - prev.lx * w; p[b + 4] = prev.y; p[b + 5] = prev.z - prev.lz * w;
      p[b + 6] = x + lx * w; p[b + 7] = cur.y; p[b + 8] = z + lz * w;
      p[b + 9] = x - lx * w; p[b + 10] = cur.y; p[b + 11] = z - lz * w;
      const a = Math.min(1, strength);
      this.alpha.set([a, a, a, a], i * 4);
      this.mesh.geometry.attributes.position.needsUpdate = true;
      this.mesh.geometry.attributes.alpha.needsUpdate = true;
    }
    this.last[wheel] = strength > 0 ? cur : null;
  }
  clear() { this.pos.fill(0); this.alpha.fill(0); this.mesh.geometry.attributes.position.needsUpdate = true; this.last = [null, null, null, null]; }
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
    for (let i = 0; i < this.n; i++) {
      a[i * 3 + 1] -= dt * (2 + (i % 5) * 0.4);
      a[i * 3] += Math.sin(i + performance.now() * 0.0005) * dt * 0.6;
      if (a[i * 3 + 1] < -2) a[i * 3 + 1] += 40;
    }
    p.needsUpdate = true;
    // сетка частиц «обёрнута» вокруг камеры
    this.pts.position.set(0, cam.position.y - 15, 0);
    for (let i = 0; i < this.n; i++) {
      const wx = a[i * 3], wz = a[i * 3 + 2];
      if (wx - cam.position.x > 40) a[i * 3] -= 80; else if (wx - cam.position.x < -40) a[i * 3] += 80;
      if (wz - cam.position.z > 40) a[i * 3 + 2] -= 80; else if (wz - cam.position.z < -40) a[i * 3 + 2] += 80;
    }
  }
}
