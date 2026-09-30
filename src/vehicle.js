// Физика автомобиля: плоская модель «велосипед» с двумя осями,
// шинами по упрощённой формуле Пачейки, кругом трения, переносом веса,
// двигателем с кривой момента, коробкой передач и ручником.
// Модуль не зависит от Three.js — его можно тестировать отдельно.
//
// Система координат мира: X/Z — плоскость земли, Y — вверх.
// Курс h: направление «вперёд» = (sin h, cos h). Положительный h — поворот влево.
// В системе машины: u — продольная скорость (вперёд), v — поперечная (влево).

const G = 9.81;

function clamp(x, a, b) { return x < a ? a : x > b ? b : x; }
function sign(x) { return x < 0 ? -1 : x > 0 ? 1 : 0; }

export class Vehicle {
  constructor(spec) {
    this.spec = spec;
    const s = spec;
    this.m = s.mass;
    this.L = s.wheelbase;
    this.a = s.wheelbase * s.frontWeight;          // от ЦТ до передней оси
    this.b = s.wheelbase - this.a;                 // от ЦТ до задней оси
    this.I = s.mass * (s.inertiaK ?? 0.95) * this.a * this.b * 1.35; // момент инерции по рысканию
    this.reset(0, 0, 0);
  }

  reset(x, z, h) {
    this.x = x; this.z = z; this.h = h;
    this.vx = 0; this.vz = 0;       // скорость в мире
    this.r = 0;                      // скорость рыскания, рад/с
    this.u = 0; this.v = 0;          // скорость в системе машины
    this.steer = 0;                  // текущий угол поворота колёс
    this.gear = 1;                   // 1..N, -1 задняя
    this.rpm = this.spec.idle;
    this.shiftTimer = 0;
    this.ax = 0; this.ay = 0;        // ускорения в системе машины (сглаженные)
    this.slipF = 0; this.slipR = 0;  // углы увода осей
    this.spinR = 0;                  // 0..1 — пробуксовка ведущих колёс
    this.lockR = 0;                  // 0..1 — блокировка задних (ручник/тормоз)
    this.frontSlide = 0; this.rearSlide = 0; // насколько ось «сорвана», 0..1
    this.wheelSpin = 0;              // угол вращения колёс для анимации
    this.offroad = false;
    this.lastHit = 0;
  }

  get speed() { return Math.hypot(this.vx, this.vz); }
  get kmh() { return this.speed * 3.6; }
  // угол скольжения кузова (между курсом и вектором скорости)
  get beta() { return this.speed < 1 ? 0 : Math.atan2(this.v, Math.abs(this.u)); }

  torqueAt(rpm) {
    const s = this.spec;
    const x = clamp(rpm / s.redline, 0, 1.05);
    // плавная кривая: мало на низах, пик около peakAt, спад у отсечки
    const p = s.peakAt ?? 0.7;
    let k;
    if (x < p) k = 0.55 + 0.45 * Math.sin((x / p) * Math.PI / 2);
    else k = 1 - 0.35 * Math.pow((x - p) / (1.05 - p), 2);
    return s.torque * k;
  }

  // input: {throttle 0..1, brake 0..1, steer -1..1 (+ влево), handbrake 0..1, shiftUp, shiftDown}
  // opts: {grip — множитель сцепления поверхности, assist — помощь в дрифте 0..1, manual}
  step(dt, input, opts) {
    const s = this.spec;
    const grip = opts.grip ?? 1;

    const ch = Math.cos(this.h), sh = Math.sin(this.h);
    // вперёд = (sh, ch), влево = (ch, -sh)
    const u = this.vx * sh + this.vz * ch;
    const v = this.vx * ch - this.vz * sh;
    this.u = u; this.v = v;
    const spd = Math.hypot(u, v);

    // ---------- рулевое управление ----------
    const speedFactor = 1 / (1 + Math.max(0, Math.abs(u) - 5) / ((s.steerFade ?? 22) * (opts.easy ? 1.35 : 1)));
    let target = input.steer * s.steerMax * speedFactor;
    // помощь в дрифте: автоматическая контррулёжка по углу скольжения
    const beta = spd > 3 ? Math.atan2(v, Math.max(Math.abs(u), 0.5)) : 0;
    // «намерение дрифтить»: ручник или пинок сцеплением запускают занос; пока держишь угол с газом — намерение сохраняется.
    // Без намерения (в лёгком режиме) машина на скорости сама стабилизируется и не уходит в занос случайно.
    if (input.handbrake > 0.3 || this.kickT > 0) this.intent = 1.6;
    else if (Math.abs(beta) > 0.2 && input.throttle > 0.3 && (this.intent || 0) > 0) this.intent = Math.max(this.intent, 0.6);
    else if (u < 12) this.intent = Math.max(this.intent || 0, 0.3); // на малой скорости всегда можно покрутить «пончики»
    this.intent = Math.max(0, (this.intent || 0) - dt);
    const calm = opts.easy && this.intent <= 0;
    if (opts.assist > 0 && u > 3) {
      target += clamp(beta, -0.9, 0.9) * 0.85 * opts.assist * (1 - 0.5 * Math.abs(input.steer));
    }
    target = clamp(target, -s.steerMax * 1.25, s.steerMax * 1.25);
    const steerRate = 7.5; // рад/с — быстрые перекладки руля в «восьмёрках»
    this.steer += clamp(target - this.steer, -steerRate * dt, steerRate * dt);
    const d = this.steer;

    // ---------- коробка передач ----------
    const gears = s.gears;
    const wheelRpmFromSpeed = (gear) => Math.abs(u) / s.wheelRadius * gears[Math.abs(gear) - 1] * s.finalDrive * 60 / (2 * Math.PI);
    if (this.shiftTimer > 0) this.shiftTimer -= dt;
    let wantReverse = input.brake > 0.1 && input.throttle < 0.1 && u < 1.0;
    if (this.gear === -1) {
      if (input.throttle > 0.1 && u > -1.0) this.gear = 1;
    } else if (wantReverse && Math.abs(u) < 0.6 && this.revHold > 0.25) {
      this.gear = -1;
    }
    this.revHold = wantReverse && Math.abs(u) < 0.6 ? (this.revHold || 0) + dt : 0;

    let shifted = 0;
    if (this.gear > 0) {
      const rpmW = wheelRpmFromSpeed(this.gear);
      if (opts.manual) {
        if (input.shiftUp && this.gear < gears.length) { this.gear++; this.shiftTimer = 0.12; shifted = 1; }
        if (input.shiftDown && this.gear > 1) { this.gear--; this.shiftTimer = 0.12; shifted = -1; }
      } else if (this.shiftTimer <= 0) {
        if (rpmW > s.redline * 0.9 && this.gear < gears.length) { this.gear++; this.shiftTimer = 0.09; shifted = 1; }
        else if (this.gear > 1 && Math.abs(beta) < 0.22 && this.spinR < 0.05 && wheelRpmFromSpeed(this.gear - 1) < s.redline * 0.62) { this.gear--; this.shiftTimer = 0.12; shifted = -1; }
      }
    }

    // ---------- двигатель ----------
    const gIdx = Math.abs(this.gear) - 1;
    const ratio = gears[gIdx] * s.finalDrive * (this.gear === -1 ? 1.1 : 1);
    let rpmWheel = Math.abs(u) / s.wheelRadius * ratio * 60 / (2 * Math.PI);
    const throttle = this.shiftTimer > 0 ? 0 : (this.gear === -1 ? input.brake : input.throttle);
    // при пробуксовке обороты «улетают» вверх
    let rpmTarget = Math.max(s.idle, rpmWheel);
    if (this.spinR > 0.05) rpmTarget = Math.max(rpmTarget, s.idle + (s.redline * 0.9 - s.idle) * (0.6 + 0.4 * throttle) * Math.min(1, this.spinR * 2));
    if (Math.abs(u) < 2 && throttle > 0) rpmTarget = Math.max(rpmTarget, s.idle + (s.redline * 0.6 - s.idle) * throttle);
    this.rpm += (rpmTarget - this.rpm) * Math.min(1, dt * 12);
    // отсечка срабатывает только когда реально перекручен мотор по скорости колёс,
    // а не при пробуксовке (раньше она резала момент на старте — «что-то держит»)
    const limiter = rpmWheel >= s.redline;
    if (limiter) this.rpm = s.redline - 150 * Math.random();
    else this.rpm = Math.min(this.rpm, s.redline * 0.97);

    // «пинок сцеплением» (clutch kick): резко отпустил и снова втопил газ — короткий всплеск момента,
    // срывает задние колёса для входа в занос, как в дрифт-симуляторах
    const thrIn = input.throttle;
    if (thrIn < 0.2) this.liftT = (this.liftT || 0) + dt;
    if ((this.thrPrev ?? 0) < 0.3 && thrIn > 0.8 && (this.liftT || 0) < 0.35 && (this.liftT || 0) > 0.02 && u > 6 && this.gear > 0) this.kickT = 0.28;
    if (thrIn >= 0.2) this.liftT = 0;
    this.thrPrev = thrIn;
    if (this.kickT > 0) this.kickT -= dt;

    let engineT = this.torqueAt(Math.max(this.rpm, s.idle)) * throttle * (limiter ? 0.1 : 1);
    if (throttle < 0.05 && Math.abs(u) > 1) engineT = -s.torque * 0.12 * clamp(this.rpm / s.redline, 0, 1); // торможение двигателем
    let driveF = engineT * ratio * 0.88 / s.wheelRadius * (this.kickT > 0 ? 1.9 : 1);
    if (this.gear === -1) {
      driveF = -Math.abs(driveF);
      if (u < -9) driveF = 0; // ограничение скорости назад
    }
    if (engineT < 0) driveF = sign(u) * engineT * ratio * 0.88 / s.wheelRadius; // тормозит против движения

    // ---------- нагрузки на оси с переносом веса ----------
    const down = (s.downforce ?? 0) * spd * spd;
    const hL = s.cgHeight / this.L;
    let Fzf = this.m * G * this.b / this.L - this.m * this.ax * hL + down * 0.45;
    let Fzr = this.m * G * this.a / this.L + this.m * this.ax * hL + down * 0.55;
    Fzf = Math.max(Fzf, this.m * G * 0.12); Fzr = Math.max(Fzr, this.m * G * 0.12);

    const offMul = this.offroad ? 0.62 : 1;
    const muF = s.muFront * grip * offMul;
    const muR = s.muRear * grip * offMul;
    // поперечный перенос веса: внешние колёса нагружены, внутренние разгружены.
    // Из-за «чувствительности шины к нагрузке» суммарное сцепление оси падает —
    // ось с большей долей переноса (жёстче стабилизатор) срывается первой.
    const trackW = s.body?.track ?? 1.55;
    const dFz = this.m * Math.abs(this.ay) * s.cgHeight / trackW;
    const rf = s.rollFront ?? (s.drive === 'RWD' ? 0.46 : 0.56);
    const lsF = 1 - 0.14 * Math.min(1, (dFz * rf) / (Fzf / 2)) ** 2;
    const lsR = 1 - 0.14 * Math.min(1, (dFz * (1 - rf)) / (Fzr / 2)) ** 2;
    // лёгкий режим: на скорости машина цепче держит поворот (если не дрифтишь специально ручником/заносом)
    let hsGrip = 1;
    if (calm) hsGrip = 1 + 0.8 * clamp((spd - 15) / 30, 0, 1);
    const FmaxF = muF * Fzf * lsF * hsGrip, FmaxR = muR * Fzr * lsR * hsGrip;

    // ---------- продольные силы ----------
    let FxF = 0, FxR = 0;
    const split = s.drive === 'AWD' ? (s.awdFront ?? 0.35) : s.drive === 'FWD' ? 1 : 0;
    FxF += driveF * split;
    FxR += driveF * (1 - split);

    // тормоза
    const brakeInput = this.gear === -1 ? input.throttle : input.brake;
    const wantBrake = brakeInput > 0 && Math.abs(u) > 0.3 ? brakeInput : 0;
    if (wantBrake > 0) {
      const Fb = s.brakeForce * wantBrake;
      FxF += -sign(u) * Fb * 0.64;
      FxR += -sign(u) * Fb * 0.36;
    }
    // ручник: блокирует задние колёса
    var hb = input.handbrake;
    if (hb > 0 && Math.abs(u) > 0.5) {
      FxR = -sign(u) * FmaxR * 0.95 * hb + FxR * (1 - hb);
    }

    // трекшн-контроль на прямой: при старте и разгоне без руля колёса не буксуют впустую.
    // В повороте, с ручником, при «пинке» или в заносе — отключается, чтобы можно было дрифтить.
    const straight = (Math.abs(beta) < 0.1 && Math.abs(input.steer) < 0.3 && hb < 0.1 && !(this.kickT > 0)) ||
      (calm && u > 15); // в лёгком режиме без намерения дрифтить газ не срывает задок
    if (opts.tcs !== false && straight && driveF > 0) {
      FxR = Math.min(FxR, FmaxR * 0.97);
      FxF = Math.min(FxF, FmaxF * 0.97);
    }

    // ограничение кругом трения по продольной
    this.spinR = 0; this.lockR = 0;
    let spinF = 0;
    const rearDrivenOver = Math.abs(FxR) / FmaxR;
    if (rearDrivenOver > 1) {
      if (sign(FxR) === sign(driveF) && driveF !== 0 && !(hb > 0.3)) this.spinR = clamp(rearDrivenOver - 1 + 0.35, 0, 1);
      else this.lockR = 1;
      FxR = sign(FxR) * FmaxR * (this.spinR > 0 ? 0.92 : 0.98);
    }
    if (hb > 0.3 && Math.abs(u) > 0.5) this.lockR = Math.max(this.lockR, hb);
    if (Math.abs(FxF) > FmaxF) { spinF = 1; FxF = sign(FxF) * FmaxF * 0.95; }

    // ---------- поперечные силы (Пачейка) ----------
    const B = s.tireB ?? 9, C = s.tireC ?? 1.45;
    // передняя ось: скорость пятна контакта в системе колеса
    const vyF = v + this.a * this.r;
    const cd = Math.cos(d), sd = Math.sin(d);
    const longF = u * cd + vyF * sd;
    const latF = -u * sd + vyF * cd;
    const alphaF = Math.atan2(latF, Math.max(Math.abs(longF), 0.8));
    const vyR = v - this.b * this.r;
    const alphaR = Math.atan2(vyR, Math.max(Math.abs(u), 0.8));
    this.slipF = alphaF; this.slipR = alphaR;

    const capF = FmaxF * Math.sqrt(Math.max(0.04, 1 - 0.85 * Math.pow(FxF / FmaxF, 2)));
    let capR = FmaxR * Math.sqrt(Math.max(0.04, 1 - 0.85 * Math.pow(FxR / FmaxR, 2)));
    if (this.lockR > 0) capR *= 1 - 0.45 * this.lockR; // заблокированное колесо держит хуже

    let FyF = -FmaxF * Math.sin(C * Math.atan(B * alphaF));
    let FyR = -FmaxR * Math.sin(C * Math.atan(B * alphaR));
    FyF = clamp(FyF, -capF, capF);
    FyR = clamp(FyR, -capR, capR);

    // защита от «перелёта» на малых скоростях: сила не больше той, что гасит скольжение за шаг
    const mF = this.m * this.b / this.L, mR = this.m * this.a / this.L;
    const lim = (f, lat, mass) => clamp(f, -Math.abs(lat) * mass / dt, Math.abs(lat) * mass / dt);
    FyF = lim(FyF, latF, mF);
    FyR = lim(FyR, vyR, mR);

    this.frontSlide = clamp(Math.abs(alphaF) / 0.25, 0, 1);
    this.rearSlide = clamp(Math.max(Math.abs(alphaR) / 0.2, this.spinR, this.lockR * (Math.abs(u) > 3 ? 1 : 0)), 0, 1);

    // ---------- сумма сил в системе машины ----------
    const drag = s.drag * u * Math.abs(u);
    const roll = (s.rolling ?? 12) * u * (this.offroad ? 5 : 1);
    let Fx = FxF * cd - FyF * sd + FxR - drag - roll;
    let Fy = FxF * sd + FyF * cd + FyR - (s.drag * 2) * v * Math.abs(v);
    let Tz = this.a * (FyF * cd + FxF * sd) - this.b * FyR;

    // на месте — не ползём
    if (spd < 0.3 && throttle < 0.05 && Math.abs(driveF) < 1) {
      this.vx *= 0.9; this.vz *= 0.9; this.r *= 0.8;
    }

    // ускорения в системе машины (для переноса веса и крена)
    const axRaw = Fx / this.m, ayRaw = Fy / this.m;
    this.ax += (clamp(axRaw, -12, 12) - this.ax) * Math.min(1, dt * 8);
    this.ay += (clamp(ayRaw, -14, 14) - this.ay) * Math.min(1, dt * 8);

    // в мир
    const FwX = Fx * sh + Fy * ch;
    const FwZ = Fx * ch - Fy * sh;
    this.vx += FwX / this.m * dt;
    this.vz += FwZ / this.m * dt;
    this.r += Tz / this.I * dt;
    // помощь при перекладке заноса (левый дрифт → правый): если руль повёрнут против текущего вращения,
    // добавляем немного момента в сторону руля — машина охотно «перекидывается», как в аркадных дрифт-играх
    if (opts.assist > 0 && u > 5 && Math.abs(input.steer) > 0.3 && Math.sign(input.steer) !== Math.sign(this.r) && (Math.abs(beta) > 0.12 || this.rearSlide > 0.4)) {
      this.r += input.steer * 3.2 * dt * opts.assist * Math.min(1, u / 15);
    }
    const drifting = Math.abs(beta) > 0.15;
    // как в FR Legends: в управляемом заносе с газом машина почти не теряет скорость
    if (opts.assist > 0 && Math.abs(beta) > 0.2 && Math.abs(beta) < 1.2 && throttle > 0.5 && spd > 6) {
      const k = 3.2 * opts.assist * throttle * dt / spd;
      this.vx += this.vx * k; this.vz += this.vz * k;
    }
    this.r *= 1 - Math.min(0.5, (s.yawDamp ?? 0.6) * (drifting ? 0.4 : 1) * dt); // лёгкое демпфирование
    // стабилизация на скорости в лёгком режиме: гасим резкие «виляния», если не в заносе
    if (calm && u > 12) {
      const rTarget = u * Math.tan(this.steer) / this.L * 0.95;
      const gMax = 1.3 + 0.9 * clamp((u - 15) / 30, 0, 1); // аркадно: на скорости держит до ~2.2g
      const lim = 9.81 * gMax / Math.max(u, 1);
      this.r += (clamp(rTarget, -lim, lim) - this.r) * Math.min(1, 5 * dt);
      // «помощь в повороте»: если руль заложен сильнее, чем можно пройти, машина сама слегка сбрасывает скорость
      const want = Math.abs(rTarget) * u / 9.81;
      if (want > gMax && throttle < 0.9) { const k2 = Math.min(0.5, (want - gMax) * 0.9) * dt; this.vx -= this.vx * k2; this.vz -= this.vz * k2; }
      // гасим боковое скольжение кузова
      const k = Math.min(1, 3 * dt);
      const fx = sh, fz = ch;
      const along = this.vx * fx + this.vz * fz;
      this.vx += (fx * along - this.vx) * k * 0.5 * clamp(Math.abs(beta) / 0.3, 0, 1);
      this.vz += (fz * along - this.vz) * k * 0.5 * clamp(Math.abs(beta) / 0.3, 0, 1);
    }
    // стабилизация «помощника»: не даём закрутиться волчком
    if (opts.assist > 0 && Math.abs(beta) > 1.05 && u > 2) this.r *= 1 - 2.5 * dt * opts.assist;

    this.h += this.r * dt;
    this.x += this.vx * dt;
    this.z += this.vz * dt;

    // вращение колёс для анимации
    const wheelSpeed = this.spinR > 0 ? Math.max(Math.abs(u), 25 * this.spinR) * sign(this.gear) : (this.lockR > 0.5 ? 0 : u);
    this.wheelSpin += wheelSpeed / s.wheelRadius * dt;

    return { shifted, limiter };
  }

  // Удар о стену: n — нормаль (x,z) от стены к машине; глубина проникновения pen
  collideWall(nx, nz, pen, restitution = 0.25) {
    this.x += nx * pen; this.z += nz * pen;
    const vn = this.vx * nx + this.vz * nz;
    if (vn < 0) {
      // тангенциальное трение
      const tx = -nz, tz = nx;
      const vt = this.vx * tx + this.vz * tz;
      const newVn = -vn * restitution;
      const newVt = vt * (1 - Math.min(0.5, Math.abs(vn) * 0.04));
      this.vx = nx * newVn + tx * newVt;
      this.vz = nz * newVn + tz * newVt;
      // закручивание от удара
      const fwdX = Math.sin(this.h), fwdZ = Math.cos(this.h);
      const along = fwdX * tx + fwdZ * tz;
      this.r += -along * vn * 0.02;
      this.r *= 0.7;
      return Math.abs(vn);
    }
    return 0;
  }
}
