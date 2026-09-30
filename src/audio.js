// Весь звук синтезируется в браузере (Web Audio API) — никаких чужих аудиофайлов.
// Мотор: несколько генераторов на частоте вспышек в цилиндрах + искажение + фильтр.
// Шины: отфильтрованный шум. Ветер, удары, переключения, отсечка, UI и простая музыка.

export class GameAudio {
  constructor() {
    this.ctx = null; this.enabled = true; this.volume = 0.8; this.musicOn = true; this.musicVol = 0.3; this.sfxVol = 0.8;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    // компрессор выравнивает громкость: тихое не теряется, громкое не «бьёт по ушам»
    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -20; this.comp.knee.value = 12; this.comp.ratio.value = 4; this.comp.attack.value = 0.005; this.comp.release.value = 0.2;
    this.comp.connect(ctx.destination);
    this.master = ctx.createGain(); this.master.gain.value = this.volume; this.master.connect(this.comp);
    this.sfx = ctx.createGain(); this.sfx.gain.value = this.sfxVol; this.sfx.connect(this.master);
    this.musicBus = ctx.createGain(); this.musicBus.gain.value = this.musicOn ? this.musicVol : 0; this.musicBus.connect(this.master);

    // белый шум
    const len = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    // --- мотор ---
    this.engGain = ctx.createGain(); this.engGain.gain.value = 0;
    this.engFilter = ctx.createBiquadFilter(); this.engFilter.type = 'lowpass'; this.engFilter.frequency.value = 800; this.engFilter.Q.value = 1.4;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 1.6); }
    shaper.curve = curve;
    // основной тон + суб-октава + немного верхних гармоник: звучит как мотор, а не как «пищалка»
    this.oscs = [
      { o: ctx.createOscillator(), type: 'sawtooth', mul: 1, g: 0.38 },
      { o: ctx.createOscillator(), type: 'sine', mul: 0.5, g: 0.6 },
      { o: ctx.createOscillator(), type: 'triangle', mul: 2, g: 0.16 },
      { o: ctx.createOscillator(), type: 'sawtooth', mul: 1.005, g: 0.25 },
    ];
    const mix = ctx.createGain(); mix.gain.value = 0.5;
    for (const s of this.oscs) {
      s.o.type = s.type; const g = ctx.createGain(); g.gain.value = s.g; s.o.connect(g); g.connect(mix); s.o.start();
    }
    // «рокот»: амплитудная модуляция низкой частотой
    this.rumble = ctx.createOscillator(); this.rumble.frequency.value = 18;
    const rg = ctx.createGain(); rg.gain.value = 0.15; this.rumble.connect(rg); rg.connect(mix.gain); this.rumble.start();
    mix.connect(shaper); shaper.connect(this.engFilter); this.engFilter.connect(this.engGain); this.engGain.connect(this.sfx);

    // --- звук дрифта: тональный «визг» резины + мягкий шорох ---
    // Раньше был чистый шум в полосе мотора (~700 Гц) -> смешивался с мотором в «кашу».
    // Теперь: тон 1.0-1.6 кГц (выше мотора) с живой «дрожью» высоты + немного
    // высокочастотного шороха, всё через мягкий фильтр, без резкого шипения.
    this.tireGain = ctx.createGain(); this.tireGain.gain.value = 0;
    const tireLp = ctx.createBiquadFilter(); tireLp.type = 'lowpass'; tireLp.frequency.value = 3200; tireLp.Q.value = 0.5;
    const tireHp = ctx.createBiquadFilter(); tireHp.type = 'highpass'; tireHp.frequency.value = 700; tireHp.Q.value = 0.5;
    this.tireGain.connect(tireHp); tireHp.connect(tireLp); tireLp.connect(this.sfx);
    const sq = ctx.createGain(); sq.gain.value = 1; sq.connect(this.tireGain);
    this.sqOscs = [
      { o: ctx.createOscillator(), type: 'triangle', mul: 1, g: 0.55 },
      { o: ctx.createOscillator(), type: 'sine', mul: 1.5, g: 0.22 },
      { o: ctx.createOscillator(), type: 'triangle', mul: 1.012, g: 0.3 },
    ];
    // «дрожь» высоты (как у настоящей резины): два медленных LFO + отфильтрованный шум
    const wob = ctx.createGain(); wob.gain.value = 38;
    const l1 = ctx.createOscillator(); l1.frequency.value = 6.3; l1.start();
    const l2 = ctx.createOscillator(); l2.frequency.value = 11.7; l2.start();
    const l2g = ctx.createGain(); l2g.gain.value = 0.6; l1.connect(wob); l2.connect(l2g); l2g.connect(wob);
    const wn = this.loopNoise(); const wnl = ctx.createBiquadFilter(); wnl.type = 'lowpass'; wnl.frequency.value = 18;
    const wng = ctx.createGain(); wng.gain.value = 3; wn.connect(wnl); wnl.connect(wng); wng.connect(wob);
    for (const s of this.sqOscs) {
      s.o.type = s.type; s.o.frequency.value = 1150 * s.mul;
      wob.connect(s.o.frequency);
      const g = ctx.createGain(); g.gain.value = s.g * 0.5; s.o.connect(g); g.connect(sq); s.o.start();
    }
    // амплитудная «рябь», чтобы визг не был ровным свистом
    const am = this.loopNoise(); const aml = ctx.createBiquadFilter(); aml.type = 'lowpass'; aml.frequency.value = 25;
    const amg = ctx.createGain(); amg.gain.value = 1.2; am.connect(aml); aml.connect(amg); amg.connect(sq.gain);
    // шорох резины по асфальту (тихий, выше полосы мотора)
    this.tireSrc = this.loopNoise();
    const sc = ctx.createBiquadFilter(); sc.type = 'bandpass'; sc.frequency.value = 2200; sc.Q.value = 0.8;
    const scg = ctx.createGain(); scg.gain.value = 0.35; this.tireSrc.connect(sc); sc.connect(scg); scg.connect(this.tireGain);
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
  setSfxVol(v) { this.sfxVol = v; if (this.sfx) this.sfx.gain.value = v; }
  setMusicVol(v) { this.musicVol = v; if (this.musicBus && this.musicOn) this.musicBus.gain.value = v; }
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
    this.engFilter.frequency.setTargetAtTime(220 + rpm * 0.22 * load + throttle * 500, t, 0.04);
    const sl0 = Math.min(1, slip) * (offroad ? 0 : 1) * Math.min(1, speed / 6);
    // мягкий порог: лёгкое скольжение не пищит, в заносе звук плавно нарастает
    const sl = Math.max(0, (sl0 - 0.15) / 0.85); const sq = sl * sl * (3 - 2 * sl);
    // в заносе мотор чуть приглушается, чтобы визг и мотор не спорили
    this.engGain.gain.setTargetAtTime((0.1 + 0.08 * load) * (1 - 0.22 * sq), t, 0.05);
    this.tireGain.gain.setTargetAtTime(sq * 0.07, t, 0.18);
    const pf = 1000 + sq * 350 + Math.min(1, speed / 50) * 120;
    for (const s of this.sqOscs) s.o.frequency.setTargetAtTime(pf * s.mul, t, 0.25);
    this.gravelGain.gain.setTargetAtTime(offroad ? Math.min(0.18, speed / 90) : 0, t, 0.08);
    this.windGain.gain.setTargetAtTime(Math.min(0.12, (speed / 70) ** 2 * 0.12), t, 0.15);
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

  crash(strength) { this.burst(0.3, 500 + strength * 25, Math.min(0.32, 0.1 + strength * 0.015)); this.tone(70, 0.22, Math.min(0.22, strength * 0.012), 'sine'); }
  shift() { this.burst(0.06, 2200, 0.05, 'bandpass'); }
  backfire() { this.burst(0.1, 280, 0.18); }
  click() { this.tone(880, 0.05, 0.05, 'triangle'); }
  checkpoint() { [660, 880, 1320].forEach((f, i) => this.tone(f, 0.18, 0.09, 'triangle', i * 0.09)); }
  countdown(go) { this.tone(go ? 1046 : 523, go ? 0.5 : 0.22, 0.1, 'triangle'); }
  score() { this.tone(1320, 0.12, 0.06, 'triangle'); this.tone(1760, 0.14, 0.05, 'triangle', 0.06); }
  gameOver() { [523, 440, 349, 262].forEach((f, i) => this.tone(f, 0.3, 0.08, 'triangle', i * 0.18)); }

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
          if (bass[s] !== 0 || s % 4 === 0) this.tone(midi(ch[0] - 24 + (bass[s] || 0)), step * 1.8, 0.14, 'triangle', next - ctx.currentTime, this.musicBus);
          if (s % 2 === 0) this.tone(midi(ch[arp[(s / 2) % 8]] + 12), step * 1.5, 0.05, 'triangle', next - ctx.currentTime, this.musicBus);
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
    g.gain.setValueAtTime(0.35, when); g.gain.exponentialRampToValueAtTime(0.001, when + 0.2);
    o.connect(g); g.connect(this.musicBus); o.start(when); o.stop(when + 0.25);
  }
  snare(when) {
    const ctx = this.ctx; const s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 1500;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.14, when); g.gain.exponentialRampToValueAtTime(0.001, when + 0.15);
    s.connect(f); f.connect(g); g.connect(this.musicBus); s.start(when, Math.random()); s.stop(when + 0.2);
  }
  hat(when) {
    const ctx = this.ctx; const s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.035, when); g.gain.exponentialRampToValueAtTime(0.001, when + 0.04);
    s.connect(f); f.connect(g); g.connect(this.musicBus); s.start(when, Math.random()); s.stop(when + 0.06);
  }
}
