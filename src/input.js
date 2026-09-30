// Управление: клавиатура (ПК), сенсорные кнопки (телефон) и геймпад.
//   W / ↑  — газ          S / ↓ — тормоз / задний ход
//   A / ←, D / → — руль    ПРОБЕЛ — ручник
//   C — камера   R — вернуться на трассу   Esc / P — пауза
//   E / Q — передача вверх / вниз (при ручной коробке)   M — звук вкл/выкл

export class Input {
  constructor() {
    this.keys = new Set();
    this.events = [];
    this.steer = 0;
    this.touch = { left: false, right: false, gas: false, brake: false, hb: false };
    this.touchActive = false;
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      if (!e.repeat) {
        const map = { KeyC: 'camera', KeyR: 'reset', Escape: 'pause', KeyP: 'pause', KeyE: 'shiftUp', KeyQ: 'shiftDown', KeyM: 'mute', Enter: 'enter' };
        if (map[e.code]) this.events.push(map[e.code]);
      }
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    this.gpPrev = {};
  }

  bindTouch(root) {
    const btns = root.querySelectorAll('[data-touch]');
    btns.forEach((b) => {
      const k = b.dataset.touch;
      const on = (e) => { e.preventDefault(); this.touch[k] = true; b.classList.add('on'); this.touchActive = true; };
      const off = (e) => { e.preventDefault(); this.touch[k] = false; b.classList.remove('on'); };
      b.addEventListener('touchstart', on, { passive: false });
      b.addEventListener('touchend', off, { passive: false });
      b.addEventListener('touchcancel', off, { passive: false });
      b.addEventListener('mousedown', on); b.addEventListener('mouseup', off); b.addEventListener('mouseleave', off);
    });
    root.querySelectorAll('[data-tap]').forEach((b) => {
      b.addEventListener('touchstart', (e) => { e.preventDefault(); this.events.push(b.dataset.tap); }, { passive: false });
      b.addEventListener('click', () => this.events.push(b.dataset.tap));
    });
  }

  down(...codes) { return codes.some((c) => this.keys.has(c)); }

  // собрать состояние за кадр
  read(dt, speed) {
    const t = this.touch;
    let gas = this.down('KeyW', 'ArrowUp') || t.gas ? 1 : 0;
    let brake = this.down('KeyS', 'ArrowDown') || t.brake ? 1 : 0;
    let hb = this.down('Space') || t.hb ? 1 : 0;
    let left = this.down('KeyA', 'ArrowLeft') || t.left;
    let right = this.down('KeyD', 'ArrowRight') || t.right;
    let target = (left ? 1 : 0) - (right ? 1 : 0);

    // геймпад
    let analog = null;
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) {
      if (!p) continue;
      const ax = p.axes[0] || 0;
      if (Math.abs(ax) > 0.12) analog = -ax;
      const rt = p.buttons[7]?.value || 0, lt = p.buttons[6]?.value || 0;
      gas = Math.max(gas, rt, p.buttons[0]?.pressed ? 1 : 0);
      brake = Math.max(brake, lt, p.buttons[2]?.pressed ? 1 : 0);
      hb = Math.max(hb, p.buttons[1]?.pressed ? 1 : 0, p.buttons[5]?.pressed ? 1 : 0);
      const edge = (i, ev) => { const pr = !!p.buttons[i]?.pressed; if (pr && !this.gpPrev[i]) this.events.push(ev); this.gpPrev[i] = pr; };
      edge(3, 'camera'); edge(9, 'pause'); edge(8, 'reset'); edge(12, 'shiftUp'); edge(13, 'shiftDown');
      break;
    }

    if (analog !== null) {
      this.steer = analog;
    } else {
      // клавиатура: плавный руль, быстрее возвращается к центру; на скорости — чуть медленнее
      const rate = target === 0 ? 7 : (Math.sign(target) !== Math.sign(this.steer) && this.steer !== 0 ? 9 : 4.2 - Math.min(1.8, speed / 40));
      const d = target - this.steer;
      this.steer += Math.sign(d) * Math.min(Math.abs(d), rate * dt);
    }
    return { throttle: gas, brake, handbrake: hb, steer: this.steer };
  }

  takeEvents() { const e = this.events; this.events = []; return e; }
}
