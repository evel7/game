import { SP } from './track.js';
import { clamp } from './utils.js';
import { seatCar } from './carmodel.js';

// Соперники едут вдоль оси трассы (по параметру fi — дробный индекс точки) со своим смещением по полосе.
// Скорость ограничивается кривизной впереди (как у настоящего гонщика: v = √(μ·g·R)),
// плюс «резинка»: отставшие чуть ускоряются, чтобы гонка оставалась плотной.

export class Rival {
  constructor(spec, model, fi, lat, skill, grip) {
    this.spec = spec; this.model = model;
    this.fi = fi; this.d = lat; this.targetD = lat; this.dv = 0;
    this.v = 0; this.skill = skill; this.grip = grip;
    // быстрее и цепче, чем раньше: выше макс. скорость, лучше сцепление в поворотах
    this.top = Math.min(96, 58 + spec.hp / 16) * skill;
    this.mu = ((spec.muFront + spec.muRear) / 2) * grip * 1.15;
    this.laneTimer = 1 + Math.random() * 2.5;
    this.stopAt = Infinity; // индекс, после которого соперник плавно останавливается (за финишем)
    this.wheelSpin = 0; this.steer = 0;
    this.ahead = true; this.h = 0;
    this.pose = {};
    this.bump = 0;
  }

  update(dt, track, player, started) {
    const hw = track.hw;
    if (!started) { this.v = 0; this.place(track, dt); return; }
    // допустимая скорость по кривизне впереди
    let target = this.top;
    const tmp = {};
    for (let k = 3; k <= 80; k += 3) {
      track.sample(this.fi + k, tmp);
      const kk = Math.abs(tmp.k);
      if (kk < 1e-4) continue;
      const vmax = Math.sqrt(this.mu * 9.81 / kk);
      const dist = k * SP;
      target = Math.min(target, Math.sqrt(vmax * vmax + 2 * 12 * dist)); // тормозят позже и резче
    }
    // резинка относительно игрока
    const gap = player.idx - this.fi; // >0 — соперник позади
    // «резинка» включается не сразу — на старте все разгоняются честно
    if (gap > 0 && (player.t ?? 99) > 5) target *= 1 + Math.min(0.3, gap / 200);
    else if (gap < -260) target *= 0.95;
    if (this.bump > 0) { this.bump -= dt; target *= 0.8; }
    if (this.fi > this.stopAt) target = 0;
    const acc = 9.8 * (1 - 0.5 * Math.min(1, this.v / this.top)); // резкий разгон, слабеет с ростом скорости
    this.v += clamp(target - this.v, -15 * dt, acc * dt);
    this.v = Math.max(0, this.v);

    // смена полосы и объезд игрока
    this.laneTimer -= dt;
    if (this.laneTimer <= 0) { this.targetD = (Math.random() * 2 - 1) * (hw - 1.8); this.laneTimer = 1.5 + Math.random() * 3; }
    const ahead = player.idx - this.fi;
    if (ahead > 0 && ahead < 16 && Math.abs(player.lat - this.d) < 2.8) {
      this.targetD = player.lat > 0 ? player.lat - 3.2 : player.lat + 3.2;
      this.targetD = clamp(this.targetD, -(hw - 1.4), hw - 1.4);
    }
    // в повороте тянется к внутренней стороне
    track.sample(this.fi + 10, tmp);
    const inner = clamp(tmp.k * 400, -1, 1) * (hw - 2);
    const want = clamp(this.targetD * 0.6 + inner * 0.4, -(hw - 1.3), hw - 1.3);
    this.dv += (clamp((want - this.d) * 3.2, -6.5, 6.5) - this.dv) * Math.min(1, dt * 8); // шустрее перестраиваются
    this.d += this.dv * dt;
    this.d = clamp(this.d, -(hw - 1.1), hw - 1.1);

    this.fi += this.v * dt / SP;
    this.place(track, dt);
  }

  place(track, dt) {
    const p = track.sample(this.fi, this.pose);
    this.x = p.x + p.lx * this.d; this.z = p.z + p.lz * this.d; this.y = p.y;
    const yaw = Math.atan2(this.dv, Math.max(this.v, 3));
    this.h = p.h + yaw * 0.9;
    this.steer = clamp(p.k * 2.6 + yaw, -0.5, 0.5);
    this.slope = p.slope;
    this.wheelSpin += this.v / this.spec.wheelRadius * dt;
    const m = this.model;
    // колёса — на асфальт (раньше машина стояла на оси трассы и утопала в дороге на 2 см, а на перегибах — сильнее)
    if (track.isField) { m.root.position.set(this.x, this.y, this.z); m.root.rotation.set(-Math.atan(this.slope), this.h, 0, 'YXZ'); }
    else seatCar(m, this.x, this.z, this.h, (x, z) => { const r = track.project(x, z, this.fi); return r.y + 0.02; }, dt);
    for (const w of m.wheels) { w.wheel.rotation.x = this.wheelSpin; if (w.front) w.pivot.rotation.y = this.steer; }
    m.chassis.rotation.z = clamp(p.k * this.v * this.v * 0.008, -0.07, 0.07);
  }

  // скорость в мире (для столкновений)
  get vx() { return Math.sin(this.h) * this.v; }
  get vz() { return Math.cos(this.h) * this.v; }
}
