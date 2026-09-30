import * as THREE from 'three';

// Процедурные низкополигональные модели машин (стиль «мультяшного» дрифт-симулятора).
// Кузов — вытянутый боковой профиль с вырезами под колёса, кабина — отдельный профиль со стёклами.

const glassMat = new THREE.MeshStandardMaterial({ color: 0x0d1520, roughness: 0.08, metalness: 0.6, envMapIntensity: 1.4 });
const blackMat = new THREE.MeshStandardMaterial({ color: 0x151517, roughness: 0.6 });
const trimMat = new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.45, metalness: 0.3 });
const chromeMat = new THREE.MeshStandardMaterial({ color: 0xdadde2, roughness: 0.18, metalness: 1.0 });
const tireMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });
const plateMat = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.5 });

function bodyShape(b, wheelR, withArches = true) {
  const s = new THREE.Shape();
  const up = b.upper;
  const yb = up[up.length - 1][1];
  s.moveTo(up[0][0], up[0][1]);
  for (let i = 1; i < up.length; i++) s.lineTo(up[i][0], up[i][1]);
  // низ: от заднего края вперёд, с арками
  const archR = wheelR + 0.07;
  const cy = wheelR + (b.ride ?? 0);
  const arch = (zc) => {
    s.lineTo(zc - archR, yb);
    s.lineTo(zc - archR, Math.min(cy, yb + 0.02));
    s.absarc(zc, cy, archR, Math.PI, 0, true);
    s.lineTo(zc + archR, yb);
  };
  if (withArches) { arch(b.wheelR); arch(b.wheelF); }
  s.lineTo(up[0][0], yb);
  s.closePath();
  return s;
}

function extrudeProfile(shape, width, bevel = 0.06) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 10 });
  g.rotateY(-Math.PI / 2);
  g.computeBoundingBox();
  const bb = g.boundingBox;
  g.translate(-(bb.min.x + bb.max.x) / 2, 0, 0);
  g.computeVertexNormals();
  return g;
}

function box(w, h, d, mat, x, y, z) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = true;
  return m;
}

export function buildCarModel(spec, color, opts = {}) {
  const b = spec.body, wr = spec.wheelRadius;
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.35, envMapIntensity: 1.1 });
  const accent = new THREE.Color(color).getHSL({}).l > 0.6 ? 0x111111 : 0xf2f2f2;
  const accentMat = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.4 });

  const bodyG = extrudeProfile(bodyShape(b, wr), b.W, 0.08);
  const body = new THREE.Mesh(bodyG, bodyMat);
  body.castShadow = true; body.receiveShadow = true;
  group.add(body);

  // кабина
  const cab = new THREE.Shape();
  const c = b.cabin;
  cab.moveTo(c[0][0] + 0.05, c[0][1] - 0.04);
  for (let i = 0; i < c.length; i++) cab.lineTo(c[i][0], c[i][1]);
  cab.lineTo(c[c.length - 1][0] + 0.05, c[c.length - 1][1] - 0.04);
  cab.closePath();
  const cabG = extrudeProfile(cab, b.W * 0.84, 0.05);
  const cabin = new THREE.Mesh(cabG, glassMat);
  cabin.castShadow = true;
  group.add(cabin);
  // крыша в цвет кузова
  const roofZ0 = c[1][0], roofZ1 = c[2][0];
  const roofY = Math.max(c[1][1], c[2][1]);
  const roof = box(b.W * 0.8, 0.05, Math.abs(roofZ0 - roofZ1) + 0.1, bodyMat, 0, roofY + 0.02, (roofZ0 + roofZ1) / 2);
  group.add(roof);
  // стойки
  for (const sx of [1, -1]) {
    const a = new THREE.Vector3(sx * b.W * 0.41, c[0][1], c[0][0]);
    const t = new THREE.Vector3(sx * b.W * 0.4, c[1][1], c[1][0]);
    const len = a.distanceTo(t);
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, len), bodyMat);
    pillar.position.copy(a).add(t).multiplyScalar(0.5);
    pillar.lookAt(t); group.add(pillar);
  }

  const zF = Math.max(...b.upper.map((q) => q[0])) + 0.08, zR = Math.min(...b.upper.map((q) => q[0])) - 0.08;
  const L = b.L, W = b.W;
  const frontY = (b.upper[0][1] + b.upper[1][1]) / 2 + 0.05;
  const rearIdx = b.upper.length - 2;
  const rearY = (b.upper[rearIdx][1] + b.upper[rearIdx + 1][1]) / 2 + 0.08;

  // фары
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xfff2c0, emissiveIntensity: opts.night ? 2.2 : 0.6, roughness: 0.2 });
  const tailMat = new THREE.MeshStandardMaterial({ color: 0x7a0a0a, emissive: 0xff1a1a, emissiveIntensity: opts.night ? 1.2 : 0.35, roughness: 0.3 });
  if (b.extras?.includes('popups')) {
    for (const sx of [1, -1]) group.add(box(0.42, 0.06, 0.3, bodyMat, sx * W * 0.3, b.upper[2][1] + 0.03, zF - 0.35));
  }
  for (const sx of [1, -1]) {
    group.add(box(0.38, 0.1, 0.08, headMat, sx * W * 0.32, frontY, zF + 0.03));
    if (b.extras?.includes('roundtails')) {
      for (const k of [0.22, 0.38]) {
        const t = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.06, 14), tailMat);
        t.rotation.x = Math.PI / 2; t.position.set(sx * W * k, rearY, zR - 0.02); group.add(t);
      }
    } else {
      group.add(box(0.46, 0.1, 0.06, tailMat, sx * W * 0.3, rearY, zR - 0.02));
    }
  }
  // решётка, бамперы, номера
  group.add(box(W * 0.36, 0.1, 0.05, blackMat, 0, frontY - 0.08, zF + 0.04));
  group.add(box(W * 0.98, 0.1, 0.12, trimMat, 0, b.upper[0][1] + 0.02, zF + 0.02));
  group.add(box(W * 0.98, 0.1, 0.12, trimMat, 0, b.upper[b.upper.length - 1][1] + 0.02, zR - 0.02));
  group.add(box(0.44, 0.13, 0.02, plateMat, 0, rearY - 0.14, zR - 0.06));
  // выхлоп
  for (const sx of (spec.cylinders >= 8 ? [1, -1] : [1])) {
    const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.2, 10), chromeMat);
    ex.rotation.x = Math.PI / 2; ex.position.set(sx * W * 0.28, b.upper[b.upper.length - 1][1] + 0.02, zR - 0.08); group.add(ex);
  }
  // зеркала
  for (const sx of [1, -1]) group.add(box(0.14, 0.09, 0.12, bodyMat, sx * (W / 2 + 0.05), c[0][1] + 0.08, c[0][0] - 0.15));
  // пороги
  for (const sx of [1, -1]) group.add(box(0.06, 0.08, Math.abs(b.wheelF - b.wheelR) - wr * 2 - 0.2, trimMat, sx * (W / 2 - 0.01), b.upper[b.upper.length - 1][1] + 0.05, (b.wheelF + b.wheelR) / 2));

  const ex = b.extras || [];
  if (ex.includes('wing') || ex.includes('ducktail')) {
    if (ex.includes('wing')) {
      const deckY = b.upper[rearIdx][1];
      group.add(box(W * 0.92, 0.04, 0.32, bodyMat, 0, deckY + 0.3, zR + 0.3));
      for (const sx of [1, -1]) group.add(box(0.04, 0.3, 0.14, trimMat, sx * W * 0.32, deckY + 0.15, zR + 0.32));
      for (const sx of [1, -1]) group.add(box(0.02, 0.14, 0.36, bodyMat, sx * W * 0.46, deckY + 0.32, zR + 0.3));
    } else {
      group.add(box(W * 0.9, 0.06, 0.18, bodyMat, 0, b.upper[rearIdx][1] + 0.04, zR + 0.12));
    }
  }
  if (ex.includes('roofwing')) group.add(box(W * 0.8, 0.04, 0.3, bodyMat, 0, roofY + 0.06, roofZ1 - 0.15));
  if (ex.includes('scoop')) group.add(box(0.5, 0.1, 0.8, blackMat, 0, b.upper[3][1] + 0.05, (b.upper[2][0] + b.upper[3][0]) / 2));
  if (ex.includes('roofscoop')) group.add(box(0.36, 0.08, 0.4, bodyMat, 0, roofY + 0.06, (roofZ0 + roofZ1) / 2 + 0.3));
  if (ex.includes('intakes')) for (const sx of [1, -1]) group.add(box(0.03, 0.18, 0.6, blackMat, sx * (W / 2 + 0.005), 0.55, -0.6));
  if (ex.includes('stripes')) for (const sx of [0.12, -0.12]) {
    group.add(box(0.14, 0.01, Math.abs(zF - c[0][0]), accentMat, sx, b.upper[3][1] + 0.005 + 0.012, (zF + c[0][0]) / 2 - 0.05));
    group.add(box(0.14, 0.01, Math.abs(roofZ0 - roofZ1), accentMat, sx, roofY + 0.05, (roofZ0 + roofZ1) / 2));
  }
  if (ex.includes('rallylights')) for (const sx of [0.3, 0.1, -0.1, -0.3]) {
    const l = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 12), headMat);
    l.rotation.x = Math.PI / 2; l.position.set(sx * W, frontY + 0.02, zF + 0.1); group.add(l);
  }
  if (ex.includes('mudflaps')) for (const sx of [1, -1]) for (const z of [b.wheelF - wr - 0.12, b.wheelR - wr - 0.12]) group.add(box(0.3, 0.3, 0.02, blackMat, sx * (spec.body.track / 2), 0.28, z));
  if (!ex.includes('stripes')) {
    // гоночный номер на двери
    const numTex = numberTexture(Math.floor(Math.random() * 90) + 10, accent);
    const numMat = new THREE.MeshStandardMaterial({ map: numTex, transparent: true, roughness: 0.4 });
    for (const sx of [1, -1]) {
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), numMat);
      pl.position.set(sx * (W / 2 + 0.005), 0.62, (b.wheelF + b.wheelR) / 2 + 0.1);
      pl.rotation.y = sx * Math.PI / 2; group.add(pl);
    }
  }

  // колёса: pivot (поворот) -> wheel (вращение)
  const wheels = [];
  const tireG = new THREE.CylinderGeometry(wr, wr, 0.26, 20); tireG.rotateZ(Math.PI / 2);
  const rimG = new THREE.CylinderGeometry(wr * 0.66, wr * 0.66, 0.27, 16); rimG.rotateZ(Math.PI / 2);
  const spokeG = new THREE.BoxGeometry(0.02, wr * 1.2, 0.07);
  const rimMat = new THREE.MeshStandardMaterial({ color: opts.rimColor ?? 0xc8ccd2, roughness: 0.25, metalness: 0.9 });
  const cy = wr + (b.ride ?? 0);
  for (const [z, sx, front] of [[b.wheelF, 1, true], [b.wheelF, -1, true], [b.wheelR, 1, false], [b.wheelR, -1, false]]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * b.track / 2, cy, z);
    const wheel = new THREE.Group();
    const tire = new THREE.Mesh(tireG, tireMat); tire.castShadow = true; wheel.add(tire);
    const rim = new THREE.Mesh(rimG, rimMat); wheel.add(rim);
    for (let k = 0; k < 5; k++) {
      const sp = new THREE.Mesh(spokeG, rimMat); sp.rotation.x = (k / 5) * Math.PI * 2; sp.position.x = sx * 0.14; wheel.add(sp);
    }
    pivot.add(wheel); group.add(pivot);
    wheels.push({ pivot, wheel, front, side: sx, z });
  }
  // тёмное «днище», чтобы не просвечивало
  group.add(box(W * 0.9, 0.05, L * 0.8, blackMat, 0, 0.3, 0));

  // тень-пятно под машиной (дешёвый ambient occlusion)
  const shadowTex = aoTexture();
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.35, L * 1.2), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.8 }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.03; shadow.renderOrder = 2;

  // корпус качается (крен/тангаж), колёса остаются на месте
  const chassis = new THREE.Group();
  const root = new THREE.Group();
  chassis.add(group);
  // колёса переносим в root, чтобы они не наклонялись с кузовом
  for (const w of wheels) { group.remove(w.pivot); root.add(w.pivot); }
  root.add(chassis); root.add(shadow);

  return { root, chassis, wheels, bodyMat, headMat, tailMat, spec };
}

let _ao = null;
function aoTexture() {
  if (_ao) return _ao;
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 128;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(32, 64, 10, 32, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,0.75)'); g.addColorStop(0.6, 'rgba(0,0,0,0.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  c.fillStyle = g; c.fillRect(0, 0, 64, 128);
  _ao = new THREE.CanvasTexture(cv);
  return _ao;
}

function numberTexture(n, accent) {
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 128;
  const c = cv.getContext('2d');
  c.fillStyle = accent === 0x111111 ? '#111' : '#fff';
  c.beginPath(); c.arc(64, 64, 58, 0, Math.PI * 2); c.fill();
  c.fillStyle = accent === 0x111111 ? '#fff' : '#111';
  c.font = 'bold 70px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(String(n), 64, 68);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// обновление анимации модели по состоянию физики
export function animateCar(model, veh, dt, braking) {
  const s = veh.spec;
  for (const w of model.wheels) {
    w.wheel.rotation.x = veh.wheelSpin;
    if (w.front) w.pivot.rotation.y = veh.steer;
  }
  // крен и тангаж от ускорений
  const targetRoll = Math.max(-0.09, Math.min(0.09, veh.ay * 0.009));
  const targetPitch = Math.max(-0.06, Math.min(0.06, -veh.ax * 0.006));
  model.chassis.rotation.z += (targetRoll - model.chassis.rotation.z) * Math.min(1, dt * 7);
  model.chassis.rotation.x += (targetPitch - model.chassis.rotation.x) * Math.min(1, dt * 7);
  model.tailMat.emissiveIntensity = braking ? 3.0 : model._tailBase ?? 0.35;
}
