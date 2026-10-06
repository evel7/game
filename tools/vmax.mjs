// Пересчитывает реальную максималку (км/ч) каждой машины физикой игры и записывает поле vmax в src/cars.js.
// Запуск: node tools/vmax.mjs   (после изменения мотора/коробки/аэродинамики машины)
import fs from 'fs';
import { CARS } from '../src/cars.js';
import { Vehicle } from '../src/vehicle.js';
const file = new URL('../src/cars.js', import.meta.url);
let src = fs.readFileSync(file, 'utf8');
for (const c of CARS) {
  const v = new Vehicle(c);
  const inp = { throttle: 1, brake: 0, steer: 0, handbrake: 0 };
  for (let i = 0; i < 120 * 120; i++) v.step(1 / 120, inp, { grip: 1.12, assist: 1.15, easy: true });
  const vmax = Math.round(v.kmh / 5) * 5;
  const i0 = src.indexOf(`id: '${c.id}'`), i1 = src.indexOf('body:', i0);
  let seg = src.slice(i0, i1);
  seg = /vmax: \d+/.test(seg) ? seg.replace(/vmax: \d+/, `vmax: ${vmax}`) : seg.replace(/(cylinders: \d+,)/, `$1 vmax: ${vmax},`);
  src = src.slice(0, i0) + seg + src.slice(i1);
  console.log(c.id.padEnd(10), vmax);
}
fs.writeFileSync(file, src);
