# ENDLESS DRIFT — онлайн-сервер

Node ≥ 18 + `ws`. Комнаты, быстрый матч, античит, а также аккаунты, облачные сохранения,
онлайн-рейтинг (Эло), история матчей и таблицы лидеров (HTTP API `/api/...`).

```
npm install
npm start          # порт из PORT (по умолчанию 8080)
npm test           # смоук-тест: аккаунты, заезды с рейтингом, лидерборды, перезапуск
```

## Где хранятся аккаунты

| Переменная | Что делает |
|---|---|
| `DATABASE_URL` | строка подключения Postgres → данные хранятся в базе и переживают перезапуски |
| `DATA_DIR` | папка для файлового хранилища, если `DATABASE_URL` не задан (по умолчанию `server/data`) |
| `REGISTER_PER_HOUR` | лимит регистраций с одного IP в час (по умолчанию 10) |
| `POST_PER_MIN` | лимит POST-запросов с одного IP в минуту (по умолчанию 60) |

**Без `DATABASE_URL`** сервер пишет всё в JSON-файлы. На бесплатном Render диск эфемерный:
при каждом деплое, перезапуске или «засыпании» сервиса файлы стираются — **все аккаунты, рейтинг и
облачные сохранения пропадут** (игра продолжит работать, у игроков останется локальный прогресс,
но токены перестанут подходить). В логе при старте будет предупреждение.

Таблицы в Postgres (`players`, `records`, `saves`) создаются автоматически при старте.

## Подключить бесплатный Postgres (Neon) — по шагам

1. Зайди на <https://neon.tech> → **Sign up** (можно через GitHub).
2. **Create project**: любое имя (например `endless-drift`), регион поближе к Render-сервису
   (для Render Frankfurt — `AWS Europe Central (Frankfurt)`), версия Postgres — любая.
3. На странице проекта нажми **Connect** (или Dashboard → *Connection string*), выбери ветку `main`,
   базу `neondb`, и скопируй строку вида
   `postgresql://neondb_owner:********@ep-xxx-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require`.
4. Открой <https://dashboard.render.com> → сервис **endless-drift-server** → вкладка **Environment**.
5. **Add Environment Variable**: Key = `DATABASE_URL`, Value = скопированная строка → **Save Changes**.
6. Render сам перезапустит сервис (если нет — **Manual Deploy → Deploy latest commit**).
7. Проверь логи (вкладка **Logs**): должно быть `[store] Postgres: игроков N, рекордов M`
   и `[server] аккаунты готовы (хранилище: pg)`.

SSL включается автоматически (для не-localhost хостов и при `sslmode=require`).
Если база недоступна при старте, сервер **не переходит на файлы**, а повторяет подключение (пауза до 30 с),
пока не получится. В это время `/api/...` отвечает 503 «Сервер запускается», онлайн-заезды работают.

**Проверка:** открой `https://<сервер>/api/health` → `{"ok":true,"store":"pg","players":N,...}`.
`store: "starting"` + `error` — нет связи с базой (проверь `DATABASE_URL`), `store: "file"` — `DATABASE_URL` не задан.

**Если базу пересоздали / очистили:** аккаунты восстановятся сами — каждое устройство с локальным прогрессом
при запуске игры пересоздаёт свой аккаунт с тем же кодом восстановления и заливает прогресс.

## HTTP API (кратко)

Все ответы — JSON, CORS `*`, тело запроса ≤ 160 КБ. Ошибки: `{ "error": "текст" }` с кодом 400/401/404/413/429/503.
Токен — в теле (`token`), в query (`?token=`) или заголовком `Authorization: Bearer <token>`.

- `POST /api/register {name}` → `{id, token, recovery, name, profile}`
- `POST /api/sync {token, name?, save?, stats?, records?, recreate?, force?}` → `{ok, id, recreated, stale, saveAt, cloudXp, improved, profile}`
  - `recreate: true` — если токен неизвестен (база пересоздана), создать аккаунт заново с этим токеном (нужен `save`)
  - `stale: true` — в облаке сохранение с бОльшим опытом, `save` не записан (`force: true` — записать всё равно)
- `GET /api/save?token=` → `{id, name, save, saveAt}`
- `GET /api/me?token=` → профиль
- `GET /api/leaderboard?board=rating|wins|level|drift|speed|distance|mode&mode=&map=&len=&limit=&offset=&around=&token=`
  → `{board, total, offset, limit, rows:[{rank,id,name,level,rating,wins,matches,best,bestLabel,…}], me?}`
- `GET /api/profile/:id` → публичный профиль (без токена и сохранения)
- `GET /api/players?q=&limit=` → поиск по имени
- `GET /api/health` → `{ok, store: pg|file|starting, players, records, dbConfigured, error, uptime}` (без секретов)
- `GET /` → текстовая проверка здоровья (используется Render)

Точные форматы — в шапке `src/api.js`.

### WebSocket

- `join` / `profile` принимают дополнительные поля `token` (токен или код восстановления) и `level`.
- В данных игрока (`joined.players`, `player.p`, `start.players`) появились `level`, `rating` (`null` у гостя), `pid` (id аккаунта).
- Если в заезде было ≥ 2 игроков с аккаунтами, после `{t:'lobby'}` каждый получает
  `{t:'rating', rating, delta, place, of}`, а комната — обновлённый `{t:'player'}` с новым рейтингом.
- Вышедший посреди заезда записывается в `results` как сошедший (`left: true`) — уход не спасает от поражения.

### Рейтинг

Эло для нескольких игроков: для каждой пары `E = 1/(1+10^((Rj−Ri)/400))`, `S` = 1/0.5/0 по местам,
`K = 32/(n−1)`, сумма по парам, округление, минимум 0, старт 1000. Места: дрифт / бесконечная трасса /
полигон — по очкам; трасса с финишем — финишировавшие по времени, затем сошедшие по очкам; результаты
с флагом античита — последние, их `delta ≤ 0` и победа не засчитывается. Победа = 1-е место,
поражение (`losses`) = любое другое место. Гости (без токена) в рейтинге не участвуют, но занимают места.
