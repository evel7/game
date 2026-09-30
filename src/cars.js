// Машины игры. Все названия и формы придуманы — это «собирательные» образы
// классов машин (японское купе, маслкар, суперкар, раллийный хэтчбек, турбо-купе),
// а не копии реальных моделей, поэтому авторские права не нарушаются.

export const CARS = [
  {
    id: 'kaze', name: 'KAZE RS', tag: 'Японское дрифт-купе',
    desc: 'Лёгкое заднеприводное купе. Легко срывается в занос и держит угол.',
    colors: ['#e8e8e8', '#d7263d', '#1b98e0', '#f4d35e', '#2e2e2e', '#7ae582'],
    hp: 280, mass: 1180, torque: 330, redline: 8000, idle: 900, peakAt: 0.72, cylinders: 4,
    gears: [3.3, 2.15, 1.55, 1.18, 0.95, 0.78], finalDrive: 4.1, wheelRadius: 0.31,
    drive: 'RWD', wheelbase: 2.52, frontWeight: 0.52, cgHeight: 0.48,
    muFront: 1.12, muRear: 1.0, tireB: 9, tireC: 1.5, steerMax: 0.62, steerFade: 26,
    brakeForce: 13000, drag: 0.42, downforce: 0.2, yawDamp: 0.5,
    body: {
      L: 4.45, W: 1.72, H: 1.3, track: 1.48, wheelF: 1.3, wheelR: -1.22,
      upper: [[2.22, 0.36], [2.26, 0.56], [2.12, 0.69], [1.2, 0.8], [0.55, 0.85], [-1.3, 0.88], [-1.75, 0.92], [-2.18, 0.9], [-2.25, 0.62], [-2.22, 0.36]],
      cabin: [[0.52, 0.84], [-0.15, 1.3], [-0.95, 1.29], [-1.58, 0.9]],
      extras: ['popups', 'ducktail'],
    },
  },
  {
    id: 'bulldog', name: 'BULLDOG V8', tag: 'Американский маслкар',
    desc: 'Огромный момент и тяжёлый зад. Дымит на любой передаче.',
    colors: ['#f25c05', '#111111', '#0b3d91', '#c1121f', '#ffd166', '#ffffff'],
    hp: 480, mass: 1560, torque: 620, redline: 6500, idle: 750, peakAt: 0.55, cylinders: 8,
    gears: [2.9, 1.95, 1.4, 1.05, 0.82], finalDrive: 3.55, wheelRadius: 0.34,
    drive: 'RWD', wheelbase: 2.8, frontWeight: 0.55, cgHeight: 0.52,
    muFront: 1.08, muRear: 0.98, tireB: 8.5, tireC: 1.5, steerMax: 0.58, steerFade: 24,
    brakeForce: 15000, drag: 0.5, downforce: 0.15, yawDamp: 0.55,
    body: {
      L: 4.85, W: 1.92, H: 1.36, track: 1.62, wheelF: 1.5, wheelR: -1.3,
      upper: [[2.4, 0.38], [2.43, 0.7], [2.3, 0.82], [0.7, 0.92], [0.5, 0.93], [-1.6, 0.96], [-2.3, 0.99], [-2.42, 0.9], [-2.43, 0.45], [-2.4, 0.38]],
      cabin: [[0.48, 0.92], [-0.3, 1.34], [-1.0, 1.33], [-1.72, 0.95]],
      extras: ['scoop', 'stripes'],
    },
  },
  {
    id: 'veloce', name: 'VELOCE GT', tag: 'Среднемоторный суперкар',
    desc: 'Максимальная скорость и прижимная сила. Держит дорогу как на рельсах.',
    colors: ['#e63946', '#ffbe0b', '#06d6a0', '#3a86ff', '#ffffff', '#8338ec'],
    hp: 640, mass: 1420, torque: 680, redline: 8500, idle: 1000, peakAt: 0.75, cylinders: 10,
    gears: [3.1, 2.2, 1.65, 1.3, 1.05, 0.86, 0.72], finalDrive: 3.6, wheelRadius: 0.34,
    drive: 'RWD', wheelbase: 2.65, frontWeight: 0.42, cgHeight: 0.4,
    muFront: 1.28, muRear: 1.3, tireB: 10, tireC: 1.45, steerMax: 0.55, steerFade: 30,
    brakeForce: 19000, drag: 0.36, downforce: 1.1, yawDamp: 0.8,
    body: {
      L: 4.55, W: 1.98, H: 1.14, track: 1.68, wheelF: 1.38, wheelR: -1.27,
      upper: [[2.26, 0.3], [2.3, 0.46], [1.4, 0.62], [0.9, 0.7], [-1.9, 0.95], [-2.26, 0.96], [-2.28, 0.4], [-2.25, 0.3]],
      cabin: [[0.9, 0.69], [0.0, 1.12], [-0.6, 1.12], [-1.9, 0.94]],
      extras: ['wing', 'intakes'],
    },
  },
  {
    id: 'tundra', name: 'TUNDRA R', tag: 'Раллийный хэтчбек',
    desc: 'Полный привод и короткая база. Король снега и резких поворотов.',
    colors: ['#0077b6', '#ffffff', '#e76f51', '#2a9d8f', '#f9c74f', '#1d1d1d'],
    hp: 330, mass: 1300, torque: 420, redline: 7500, idle: 900, peakAt: 0.6, cylinders: 4,
    gears: [3.0, 2.05, 1.5, 1.15, 0.9, 0.74], finalDrive: 4.3, wheelRadius: 0.32,
    drive: 'AWD', awdFront: 0.4, wheelbase: 2.5, frontWeight: 0.56, cgHeight: 0.52,
    muFront: 1.18, muRear: 1.08, tireB: 8.5, tireC: 1.45, steerMax: 0.62, steerFade: 24,
    brakeForce: 14500, drag: 0.46, downforce: 0.35, yawDamp: 0.6,
    body: {
      L: 4.05, W: 1.8, H: 1.46, track: 1.55, wheelF: 1.28, wheelR: -1.22, ride: 0.05,
      upper: [[2.0, 0.4], [2.03, 0.62], [1.86, 0.78], [1.0, 0.88], [0.75, 0.9], [-1.9, 0.95], [-2.02, 0.9], [-2.03, 0.42], [-2.0, 0.4]],
      cabin: [[0.73, 0.9], [0.05, 1.42], [-1.78, 1.42], [-1.96, 0.95]],
      extras: ['roofscoop', 'rallylights', 'mudflaps', 'roofwing'],
    },
  },
  {
    id: 'ronin', name: 'RONIN 34', tag: 'Турбо-купе с полным приводом',
    desc: 'Турбо-мотор и умный полный привод. Быстрый и послушный в любом повороте.',
    colors: ['#5e60ce', '#c0c0c0', '#101010', '#d62828', '#ffffff', '#2b9348'],
    hp: 520, mass: 1480, torque: 560, redline: 8000, idle: 900, peakAt: 0.65, cylinders: 6,
    gears: [3.2, 2.1, 1.55, 1.2, 0.97, 0.8], finalDrive: 3.9, wheelRadius: 0.33,
    drive: 'AWD', awdFront: 0.3, wheelbase: 2.66, frontWeight: 0.54, cgHeight: 0.47,
    muFront: 1.2, muRear: 1.14, tireB: 9, tireC: 1.45, steerMax: 0.58, steerFade: 27,
    brakeForce: 17000, drag: 0.4, downforce: 0.6, yawDamp: 0.65,
    body: {
      L: 4.6, W: 1.86, H: 1.34, track: 1.58, wheelF: 1.38, wheelR: -1.28,
      upper: [[2.3, 0.36], [2.33, 0.62], [2.2, 0.76], [0.8, 0.86], [0.6, 0.88], [-1.5, 0.9], [-2.2, 1.0], [-2.31, 0.95], [-2.32, 0.4], [-2.3, 0.36]],
      cabin: [[0.58, 0.88], [-0.1, 1.34], [-1.0, 1.33], [-1.62, 0.92]],
      extras: ['wing', 'roundtails'],
    },
  },
];

// Характеристики для экрана гаража (0..1), считаются из параметров
export function carStats(c) {
  const top = Math.min(1, (c.hp / c.mass) / 0.47);
  const accel = Math.min(1, (c.torque * c.gears[0] * c.finalDrive / c.wheelRadius / c.mass) / 22);
  const handling = Math.min(1, ((c.muFront + c.muRear) / 2 - 0.9) / 0.45 + c.downforce * 0.2);
  const drift = Math.min(1, Math.max(0.15, (c.drive === 'RWD' ? 0.55 : 0.25) + (c.muFront - c.muRear) * 2.2 + (c.torque / c.mass - 0.25) * 0.8));
  return { top, accel, handling, drift };
}
