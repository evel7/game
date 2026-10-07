// Записывает таблицу машин для сервера (класс и максималка по индексу) — нужна античиту.
// Запуск: node tools/server-cars.mjs   (после добавления машин или node tools/vmax.mjs)
import fs from 'fs';
import { CARS, carClass } from '../src/cars.js';
const table = CARS.map((c) => ({ id: c.id, cls: carClass(c), vmax: c.vmax || 250 }));
fs.writeFileSync(new URL('../server/cars.json', import.meta.url), JSON.stringify(table) + '\n');
console.log(`server/cars.json: ${table.length} машин`);
