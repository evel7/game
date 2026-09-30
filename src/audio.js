// Весь звук синтезируется в браузере (Web Audio API) — никаких чужих аудиофайлов.
// Мотор: несколько генераторов на частоте вспышек в цилиндрах + искажение + фильтр.
// Шины: отфильтрованный шум. Ветер, удары, переключения, отсечка, UI и простая музыка.

export class GameAudio {
  constructor() {
    this.ctx = null; this.enabled = true; this.volume = 0.8; this.musicOn = true; this.musicVol = 0.35;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain(); this.master.gain.value = this.volume; this.master.connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.musicBus = ctx.createGain(); this.musicBus.gain.value = this.musicOn ? this.musicVol : 0; this.musicBus.connect(this.master);

    // белый шум
    const len = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    // --- мотор ---
    this.engGain = ctx.createGain(); this.engGain.gain.value = 0;
    this.engFilter = ctx.createBiquadFilter(); this.engFilter.type = 'lowpass'; this.engFilter.frequency.value = 800; this.engFilter.Q.value = 3;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 3.2); }
    shaper.curve = curve;
    this.oscs = [
      { o: ctx.createOscillator(), type: 'sawtooth', mul: 1, g: 0.5 },
      { o: ctx.createOscillator(), type: 'square', mul: 0.5, g: 0.35 },
      { o: ctx.createOscillator(), type: 'sawtooth', mul: 2, g: 0.18 },
      { o: ctx.createOscillator(), type: 'triangle', mul: 0.25, g: 0.4 },
    ];
    const mix = ctx.createGain(); mix.gain.value = 0.5;
    for (const s of this.oscs) {
      s.o.type = s.type; const g = ctx.createGain(); g.gain.value = s.g; s.o.connect(g); g.connect(mix); s.o.start();
    }
    // «рокот»: амплитудная модуляция низкой частотой
    this.rumble = ctx.createOscillator(); this.rumble.frequency.value = 18;
    const rg = ctx.createGain(); rg.gain.value = 0.25; this.rumble.connect(rg); rg.connect(mix.gain); this.rumble.start();
    mix.connect(shaper); shaper.connect(this.engFilter); this.engFilter.connect(this.engGain); this.engGain.connect(this.sfx);

    // --- визг шин ---
    this.tireSrc = this.loopNoise();
    const bp1 = ctx.createBiquadFilter(); bp1.type = 'bandpass'; bp1.frequency.value = 1100; bp1.Q.value = 6;
    const bp2 = ctx.createBiquadFilter(); bp2.type = 'bandpass'; bp2.frequency.value = 1800; bp2.Q.value = 9;
    this.tireGain = ctx.createGain(); this.tireGain.gain.value = 0;
    this.tireSrc.connect(bp1); this.tireSrc.connect(bp2); bp1.connect(this.tireGain); bp2.connect(this.tireGain); this.tireGain.connect(this.sfx);
    this.tireBp = bp1;
    // --- шорох гравия / снега (съезд с трассы) ---
    this.gravelSrc = this.loopNoise();
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    this.gravelGain = ctx.createGain(); this.gravelGain.gain.value = 0;
    this.gravelSrc.connect(lp); lp.connect(this.gravelGain); this.gravelGain.connect(this.sfx);
    // --- ветер ---
    this.windSrc = this.loopNoise();
    const wl = ctx.createBiquadFilter(); wl.type = 'lowpass'; wl.frequency.value = 420;
    this.windGain = ctx.createGain(); this.windGain.gain.value = 0;
    this.windSrc.connect(wl); wl.connect(this.windGain); this.windGain.connect(this.sfx);

    this.startMusic();
  }

  loopNoise() {
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true; s.start();
    return s;
  }

  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }
  setMusic(on) { this.musicOn = on; if (this.musicBus) this.musicBus.gain.setTargetAtTime(on ? this.musicVol : 0, this.ctx.currentTime, 0.2); }

  // вызывается каждый кадр во время заезда
  update(veh, spec, throttle, slip, offroad, speed, active) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (!active) {
      this.engGain.gain.setTargetAtTime(0, t, 0.08);
      this.tireGain.gain.setTargetAtTime(0, t, 0.05);
      this.windGain.gain.setTargetAtTime(0, t, 0.1);
      this.gravelGain.gain.setTargetAtTime(0, t, 0.1);
      return;
    }
    const rpm = veh.rpm;
    const f = (rpm / 60) * (spec.cylinders / 2) * 0.5; // основная гармоника
    for (const s of this.oscs) s.o.frequency.setTargetAtTime(f * s.mul, t, 0.02);
    this.rumble.frequency.setTargetAtTime(8 + rpm / 400, t, 0.05);
    const load = 0.35 + 0.65 * throttle;
    this.engFilter.frequency.setTargetAtTime(300 + rpm * 0.35 * load + throttle * 900, t, 0.03);
    this.engGain.gain.setTargetAtTime(0.12 + 0.16 * load, t, 0.04);
    const sl = Math.min(1, slip) * (offroad ? 0.3 : 1) * Math.min(1, speed / 6);
    this.tireGain.gain.setTargetAtTime(sl * 0.32, t, 0.05);
    this.tireBp.frequency.setTargetAtTime(900 + sl * 500, t, 0.1);
    this.gravelGain.gain.setTargetAtTime(offroad ? Math.min(0.4, speed / 50) : 0, t, 0.05);
    this.windGain.gain.setTargetAtTime(Math.min(0.35, (speed / 70) ** 2 * 0.35), t, 0.1);
  }

  burst(dur, freq, vol, type = 'lowpass') {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.sfx); s.start(t, Math.random()); s.stop(t + dur + 0.05);
  }
  tone(freq, dur, vol = 0.2, type = 'sine', when = 0, bus) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime + when;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(bus || this.sfx); o.start(t); o.stop(t + dur + 0.05);
  }

  crash(strength) { this.burst(0.35, 600 + strength * 40, Math.min(0.9, 0.2 + strength * 0.05)); this.tone(70, 0.25, Math.min(0.5, strength * 0.03), 'sine'); }
  shift() { this.burst(0.08, 2500, 0.12, 'bandpass'); }
  backfire() { this.burst(0.12, 300, 0.5); }
  click() { this.tone(880, 0.06, 0.12, 'square'); }
  checkpoint() { [660, 880, 1320].forEach((f, i) => this.tone(f, 0.18, 0.18, 'triangle', i * 0.09)); }
  countdown(go) { this.tone(go ? 1046 : 523, go ? 0.5 : 0.22, 0.25, 'square'); }
  score() { this.tone(1320, 0.12, 0.12, 'triangle'); this.tone(1760, 0.14, 0.1, 'triangle', 0.06); }
  gameOver() { [523, 440, 349, 262].forEach((f, i) => this.tone(f, 0.3, 0.2, 'sawtooth', i * 0.18)); }

  // ---------- музыка: простой синт-вейв луп, генерируется на лету ----------
  startMusic() {
    const ctx = this.ctx;
    const bpm = 112, step = 60 / bpm / 4;
    const bass = [0, 0, 12, 0, 0, 0, 10, 0, 0, 0, 12, 0, 7, 0, 10, 0];
    const chords = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]; // Am F C G
    const arp = [0, 1, 2, 1, 0, 2, 1, 2];
    let n = 0, next = ctx.currentTime + 0.1;
    const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);
    const tick = () => {
      if (!this.ctx) return;
      while (next < ctx.currentTime + 0.2) {
        const bar = Math.floor(n / 16) % 4, s = n % 16;
        const ch = chords[bar];
        if (this.musicOn) {
          if (bass[s] !== 0 || s % 4 === 0) this.tone(midi(ch[0] - 24 + (bass[s] || 0)), step * 1.8, 0.22, 'sawtooth', next - ctx.currentTime, this.musicBus);
          if (s % 2 === 0) this.tone(midi(ch[arp[(s / 2) % 8]] + 12), step * 1.5, 0.07, 'square', next - ctx.currentTime, this.musicBus);
          if (s % 4 === 0) this.kick(next);
          if (s % 8 === 4) this.snare(next);
          if (s % 2 === 1) this.hat(next);
        }
        next += step; n++;
      }
      this._musicTimer = setTimeout(tick, 60);
    };
    tick();
  }
  kick(when) {
    const ctx = this.ctx; const o = ctx.createOscillator(); const g = ctx.createGain();
    o.frequency.setValueAtTime(140, when); o.frequency.exponentialRampToValueAtTime(40, when + 0.15);
    g.gain.setValueAtTime(0.5, when); g.gain.exponentialRampToValueAtTime(0.001, when + 0.2);
    o.connect(g); g.connect(this.musicBus); o.start(when); o.stop(when + 0.25);
  }
  snare(when) {
    const ctx = this.ctx; const s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 1500;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.25, when); g.gain.exponentialRampToValueAtTime(0.001, when + 0.15);
    s.connect(f); f.connect(g); g.connect(this.musicBus); s.start(when, Math.random()); s.stop(when + 0.2);
  }
  hat(when) {
    const ctx = this.ctx; const s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.06, when); g.gain.exponentialRampToValueAtTime(0.001, when + 0.04);
    s.connect(f); f.connect(g); g.connect(this.musicBus); s.start(when, Math.random()); s.stop(when + 0.06);
  }
}
