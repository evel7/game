// Онлайн: подключение к серверу (WebSocket), комнаты и приём позиций других игроков.
// Сервер только пересылает данные; машины других игроков рисуются «призраками» (без столкновений),
// их позиции плавно интерполируются с задержкой ~120 мс.

// Адрес сервера по умолчанию (Render: https://<имя-сервиса>.onrender.com → wss://…)
export const DEFAULT_SERVER = 'wss://endless-drift-server.onrender.com';
const INTERP_DELAY = 120; // мс
const SEND_HZ = 15;

export const net = {
  ws: null, id: 0, code: '', host: 0, isPublic: false, state: 'off', // off | connecting | lobby | racing | done
  mm: null, mmStatus: null, // быстрый матч: требования комнаты и статус подбора { count, size, state: search|countdown, left }
  config: null, players: new Map(), // id -> { id, name, car, color, inRace, buf: [], vis, model, fin }
  results: [], racers: [],
  on: {}, // обработчики: joined, player, left, config, start, fin, lobby, error, close
  lastSend: 0,

  get isHost() { return this.id && this.id === this.host; },
  get connected() { return this.ws && this.ws.readyState === 1; },

  connect(url, joinMsg) {
    this.disconnect(true);
    this.state = 'connecting';
    return new Promise((resolve, reject) => {
      let ws;
      try { ws = new WebSocket(url); } catch (e) { this.state = 'off'; reject(new Error('Неверный адрес сервера')); return; }
      this.ws = ws;
      const timer = setTimeout(() => { if (ws.readyState !== 1) { ws.close(); reject(new Error('Сервер не отвечает. Бесплатный сервер может «просыпаться» до минуты — попробуй ещё раз.')); } }, 65000);
      ws.onopen = () => { clearTimeout(timer); this.send({ t: 'join', ...joinMsg }); };
      ws.onerror = () => { clearTimeout(timer); if (this.state === 'connecting') reject(new Error('Не удалось подключиться к серверу')); };
      ws.onclose = () => {
        clearTimeout(timer);
        const was = this.state;
        this.state = 'off'; this.players.clear();
        if (was !== 'off' && this.ws === ws) this.emit('close');
      };
      ws.onmessage = (e) => {
        let m; try { m = JSON.parse(e.data); } catch { return; }
        if (m.t === 'joined') resolve(m);
        if (m.t === 'error' && this.state === 'connecting') { reject(new Error(m.text)); return; }
        this.handle(m);
      };
    });
  },

  disconnect(silent) {
    this.mm = null; this.mmStatus = null;
    if (this.ws) { const ws = this.ws; this.ws = null; this.state = 'off'; try { ws.close(); } catch { /* уже закрыт */ } }
    this.players.clear();
    if (!silent) this.emit('close');
  },

  send(m) { if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(m)); },
  emit(name, ...a) { if (this.on[name]) this.on[name](...a); },

  addPlayer(p) {
    const old = this.players.get(p.id);
    if (old) { Object.assign(old, p); return old; }
    const np = { ...p, buf: [], vis: null, model: null, fin: null };
    this.players.set(p.id, np);
    return np;
  },

  handle(m) {
    switch (m.t) {
      case 'joined':
        this.id = m.id; this.code = m.code; this.host = m.host; this.config = m.config; this.isPublic = m.isPublic;
        this.mm = m.mm || null; this.mmStatus = m.mm ? { count: m.players.length, size: m.mm.size, state: 'search', left: 0 } : null; this.results = [];
        this.state = 'lobby'; this.players.clear();
        for (const p of m.players) if (p.id !== this.id) this.addPlayer(p);
        this.emit('joined', m);
        break;
      case 'player': if (m.p.id !== this.id) this.addPlayer(m.p); else this.me = m.p; this.emit('player', m.p); break;
      case 'left': {
        const p = this.players.get(m.id);
        this.players.delete(m.id); this.host = m.host;
        this.emit('left', p, m.id);
        break;
      }
      case 'config': this.config = m.config; this.emit('config', m.config); break;
      case 'start':
        this.state = 'racing'; this.results = []; this.racers = m.racers; this.config = m.config;
        for (const p of m.players) if (p.id !== this.id) { const pl = this.addPlayer(p); pl.buf = []; pl.vis = null; pl.fin = null; }
        this.emit('start', m);
        break;
      case 's': {
        const p = this.players.get(m.id);
        if (!p) break;
        const [x, y, z, h, spd, idx, steer, slope] = m.d;
        p.buf.push({ t: performance.now(), x, y, z, h, spd, idx, steer, slope });
        if (p.buf.length > 30) p.buf.shift();
        break;
      }
      case 'fin': {
        this.results.push(m.r);
        const p = this.players.get(m.r.id); if (p) p.fin = m.r;
        this.emit('fin', m.r);
        break;
      }
      case 'mm': this.mmStatus = m; this.emit('mm', m); break;
      case 'lobby': this.state = m.state === 'done' ? 'done' : 'lobby'; this.results = m.results || this.results; for (const p of this.players.values()) p.inRace = false; this.emit('lobby', m); break;
      case 'error': this.emit('error', m.text); break;
      default: break;
    }
  },

  // отправка своего состояния (не чаще SEND_HZ раз в секунду)
  sendState(veh) {
    const now = performance.now();
    if (now - this.lastSend < 1000 / SEND_HZ) return;
    this.lastSend = now;
    this.send({ t: 's', d: [veh.x, veh.roadY, veh.z, veh.h, veh.speed, veh.idx, veh.steer || 0, veh.slope || 0] });
  },

  finish(finished, time, score) { this.send({ t: 'fin', finished, time, score }); },

  // интерполированная позиция другого игрока на момент (сейчас − задержка)
  sample(p) {
    const b = p.buf;
    if (!b.length) return null;
    const t = performance.now() - INTERP_DELAY;
    while (b.length > 2 && b[1].t <= t) b.shift();
    const a = b[0], c = b[1];
    if (!c || t <= a.t) return a;
    const k = Math.min(1, (t - a.t) / Math.max(1, c.t - a.t));
    let dh = c.h - a.h; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    const L = (u, v) => u + (v - u) * k;
    return { x: L(a.x, c.x), y: L(a.y, c.y), z: L(a.z, c.z), h: a.h + dh * k, spd: L(a.spd, c.spd), idx: L(a.idx, c.idx), steer: L(a.steer, c.steer), slope: L(a.slope, c.slope) };
  },
};
