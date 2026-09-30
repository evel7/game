import { SP } from './track.js';
import { clamp } from './utils.js';

// Соперники едут вдоль оси трассы (по параметру fi — дробный индекс точки) со своим смещением по полосе.
// Скорость ограничивается кривизной впереди (как у настоящего гонщика: v = √(μ·g·R)),
// плюс «резинка»: отставшие чуть ускоряются, чтобы гонка оставалась плотной.

export class Rival {
  constructor(spec, model, fi, lat, skill, grip) {
    this.spec = spec; this.model = model;
    this.fi = fi; this.d = lat; this.targetD = lat; this.dv = 0;
    this.v = 0; this.skill = skill; this.grip = grip;
    this.top = (44 + spec.hp / 24) * skill;
    this.mu = ((spec.muFront + spec.muRear) / 2) * grip * 0.92;
    this.laneTimer = 2 + Math.random() * 4;
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
    for (let k = 3; k <= 70; k += 3) {
      track.sample(this.fi + k, tmp);
      const kk = Math.abs(tmp.k);
      if (kk < 1e-4) continue;
      const vmax = Math.sqrt(this.mu * 9.81 / kk);
      const dist = k * SP;
      target = Math.min(target, Math.sqrt(vmax * vmax + 2 * 7 * dist));
    }
    // резинка относительно игрока
    const gap = player.idx - this.fi; // >0 — соперник позади
    if (gap > 0) target *= 1 + Math.min(0.22, gap / 300);
    else if (gap < -120) target *= 0.86;
    if (this.bump > 0) { this.bump -= dt; target *= 0.7; }
    this.v += clamp(target - this.v, -9 * dt, 5.5 * dt);
    this.v = Math.max(0, this.v);

    // смена полосы и объезд игрока
    this.laneTimer -= dt;
    if (this.laneTimer <= 0) { this.targetD = (Math.random() * 2 - 1) * (hw - 1.8); this.laneTimer = 3 + Math.random() * 5; }
    const ahead = player.idx - this.fi;
    if (ahead > 0 && ahead < 10 && Math.abs(player.lat - this.d) < 2.6) {
      this.targetD = player.lat > 0 ? player.lat - 3.2 : player.lat + 3.2;
      this.targetD = clamp(this.targetD, -(hw - 1.4), hw - 1.4);
    }
    // в повороте тянется к внутренней стороне
    track.sample(this.fi + 10, tmp);
    const inner = clamp(tmp.k * 400, -1, 1) * (hw - 2);
    const want = clamp(this.targetD * 0.6 + inner * 0.4, -(hw - 1.3), hw - 1.3);
    this.dv += (clamp((want - this.d) * 1.6, -3, 3) - this.dv) * Math.min(1, dt * 3);
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
    m.root.position.set(this.x, this.y, this.z);
    m.root.rotation.set(-Math.atan(this.slope), this.h, 0, 'YXZ');
    for (const w of m.wheels) { w.wheel.rotation.x = this.wheelSpin; if (w.front) w.pivot.rotation.y = this.steer; }
    m.chassis.rotation.z = clamp(p.k * this.v * this.v * 0.008, -0.07, 0.07);
  }

  // скорость в мире (для столкновений)
  get vx() { return Math.sin(this.h) * this.v; }
  get vz() { return Math.cos(this.h) * this.v; }
}
