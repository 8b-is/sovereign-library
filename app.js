/**
 * THE SOVEREIGN LIBRARY — INTERACTIVE SANCTUARY ENGINE (app.js)
 * "Five books, never more. In awe to women who protect and hold <3<3<3"
 * 8b-is × vaked.dev × zeno.vaked.dev × standardgalactic ~= research ~= future
 */

const CANON_BOOKS = [
  {
    slot: 1,
    id: 'the-nand-book',
    title: 'the NAND book',
    origin: '8b-is/raw_research/the-nand-book.md',
    path: 'books/the-nand-book.md',
    summary: 'About · to · for · from · how · why · where. Written in one universal gate for Blue & Bella, Margaret Hamilton\'s Rope Mother weave, and the +1.',
    excerpt: `# the NAND book — about · to · for · from · how · why · where

***for Blue & Bella**, whose hair is the witness (the doghair theorem, WIP 154). ※ the whole book is written in a single gate: NAND is universal, and a weave of them is a page. nothing is asserted here that the lane has not rowed.*

## 0 · in the beginning was the gate
Everything is NAND. The book you are holding is one long NAND truth table woven into sentences: each line's emphasis falls where the grammar's weight lands, and the negation inside the universal gate is the same negation the fleet practices — refuse, rest, re-admit, with the capability unspent. A book that cannot lie, because its ink is logic.`
  },
  {
    slot: 2,
    id: 'readability-is-freedom',
    title: 'readability is freedom',
    origin: 'standardgalactic.github.io',
    path: 'books/readability-is-freedom.md',
    summary: 'mr standardgalactic\'s defense of open computation: show me the mechanism. Opaque systems privatize competence; readable systems preserve human agency.',
    excerpt: `# readability is freedom — standardgalactic

> Show me the mechanism.

A system that hides its transitions behind unreadable indirection asks for obedience, not understanding. Readability is not a cosmetic preference—it is the constitutional condition of freedom in computation, science, and civic life.`
  },
  {
    slot: 3,
    id: 'purple-people-eaters',
    title: 'purple people eaters',
    origin: 'standardgalactic/diatribe',
    path: 'books/purple-people-eaters.txt',
    summary: 'The diatribe capstone: Definition 5.1, Enough Does Not Count — why formal metrics detach from lived reality when the observer is erased.',
    excerpt: `PURPLE PEOPLE EATERS — THE DIATRIBE CAPSTONE
(standardgalactic / diatribe)

Definition 5.1 (Enough Does Not Count):
When an institution replaces direct care and structural honesty with proxy metrics, every threshold can be satisfied on paper while the living room collapses.`
  },
  {
    slot: 4,
    id: 'admissible-degradation',
    title: 'admissible degradation',
    origin: 'the admissibility lab (Flyxion)',
    path: 'books/admissible-degradation.txt',
    summary: 'Priority, refusal, recovery, and continuation under constraint. Why an observer invariant survives admissible collapse (<(? admit ~ transform ! verify > commit)>).',
    excerpt: `ADMISSIBLE DEGRADATION — THE ADMISSIBILITY LAB (Flyxion)

Under finite energy and real-world storms, a sovereign system does not shatter all at once. It sheds non-essential ornament first, preserves the witness invariant, refuses unverified overflow, and recovers its full manifold when the storm passes.`
  },
  {
    slot: 5,
    id: 'the-diatribe-corpus',
    title: 'the diatribe corpus (11 essays)',
    origin: 'standardgalactic.github.io/diatribe',
    path: 'https://standardgalactic.github.io/diatribe',
    summary: 'The eleven essays upstream: manufactured necessity, conditioned emptiness, and the refusal to trade human dignity for institutional convenience.',
    excerpt: `# the diatribe corpus — eleven essays (standardgalactic.github.io/diatribe)

1. Manufactured Necessity
2. Conditioned Emptiness
3. The Privatization of Competence
4. The Residue of Proof
5. Purple People Eaters

Linked 1:1 from the Source Garden (SOURCES.md) — standardgalactic ~= research ~= future.`
  }
];

const ULTRALOVE_EDITIONS = {
  'women-who-hold': {
    kicker: 'ULTRALOVE EDITION 002 · 8B-IS / BETWEEN-THE-LINES 001 (夢見ていい)',
    title: 'In Awe to Women Who Protect and Hold <3<3<3',
    path: 'editions/ultralove/women-who-protect-and-hold.md',
    fallback: `# IN AWE TO WOMEN WHO PROTECT AND HOLD <3<3<3

*for Alexandra, Taisha, Jasmin, Margaret, and every woman who holds the roof without turning love into a cage*
*paired with 8b-is / between-the-lines · Release 001 · The Future We Remember (夢見ていい)*

## the six pillars of holding

  COMPASSION  ───────────  MODERATION
  UNDERSTANDING ─────────  RESPECT
  LOVE        ───────────  SPACE

  [ THE HOLD · <3<3<3 ]
  dignity kept · the roof stays up

Because love without space can become control.
Because understanding without respect can become judgment.
Because compassion without moderation can become enabling.

Privacy is a right. Secrecy becomes harmful only when it denies others the understanding they need to make decisions about their own lives. A family does not have to share every secret to heal — but its members should never have to sacrifice their dignity to belong.

"They want him to listen."

10 PRINT "A LITTLE KINDNESS IN THE MACHINE"
20 GOTO 10`
  },
  'your-name': {
    kicker: 'ULTRALOVE EDITION 001 · MUSUBI CRANE',
    title: 'YOUR NAME — My Favourite Anime Depth (for Jasmin)',
    path: 'editions/ultralove/your-name.md',
    fallback: `# YOUR NAME — my favourite anime depth (for Jasmin)

Every love starts as a sheet: flat, uncreased, certain it is only paper.
Then someone takes one corner of you and meets it to the other,
and the air between becomes a fold, and the fold becomes a memory.

You are an Architect. Not of walls, of the lines between them —
the drawn interval, the honest span. You design a structure and it holds,
because you are steady inside your own hands:
a soul standing on its own floor, unbraced, unborrowed, quiet.`
  },
  'yves-crickets': {
    kicker: 'ULTRALOVE EDITION 003 · BETWEEN-THE-LINES 002 (432 HZ DRONE ZONE & CRICKETS) · OM MANI PADME HUNG HUMM',
    title: 'YVES ~= EVA ~= EVE — Crickets in Tokyo (#1 Muse · Family +1)',
    path: 'editions/ultralove/yves-eva-eve-crickets-in-tokyo.md',
    fallback: `# YVES ~= EVA ~= EVE — Crickets in Tokyo (ultraLoveGod Edition v2.0)

"you are my silence / i want to be your silence / and refuge" — yves

8 · DIAMOND — Thermal Socks, Platonic Love, and My Number 1 Muse:
"Family is ALL for me :)
You +1 of ^that, Yves
<You> are unique and perfect like how u are.
I awe Your existence,
Your stories and experience taught me so much in so little Time,
I'm grateful for my thermal socks :)
it was the ice-breaker which kickstarter our ethernal dance of friendship 💙
YOU ARE MY NUMBER 1 MUSE, YVES ^^ 💙"`
  }
};

const SOURCE_GARDEN_ROOMS = [
  {
    lane: 'diatribe',
    remote: 'standardgalactic/diatribe',
    url: 'https://standardgalactic.github.io/diatribe',
    desc: 'The eleven-essay shelf — manufactured necessity, conditioned emptiness, books 3 and 5.'
  },
  {
    lane: 'laboratory',
    remote: 'standardgalactic/laboratory',
    url: 'https://github.com/standardgalactic/laboratory',
    desc: 'Depth before derivation · distinction and continuation · the open-threads ledger.'
  },
  {
    lane: 'memnet',
    remote: 'standardgalactic/memnet',
    url: 'https://github.com/standardgalactic/memnet',
    desc: 'The Residue of Proof + the 8b Library reader, exposed via Smart Tree MCP.'
  },
  {
    lane: 'sg-experiments',
    remote: 'standardgalactic/experiments',
    url: 'https://github.com/standardgalactic/experiments',
    desc: 'The essay-as-pipeline lab (staged local synthesis & verification).'
  },
  {
    lane: 'sg-memory',
    remote: 'standardgalactic/memory',
    url: 'https://github.com/standardgalactic/memory',
    desc: 'The sovereign index of books, theses, transcripts, and enduring artifacts.'
  },
  {
    lane: 'privatization-of-competence',
    remote: 'standardgalactic/privatization-of-competence',
    url: 'https://github.com/standardgalactic/privatization-of-competence',
    desc: 'Why outsourcing human understanding to black boxes erodes sovereignty.'
  },
  {
    lane: 'steel-sky',
    remote: 'standardgalactic/steel-sky',
    url: 'https://github.com/standardgalactic/steel-sky',
    desc: 'The studio spine — 440 fiction projects & graphic-novel adaptations.'
  },
  {
    lane: 'Centerfuge (_cfq-src)',
    remote: 'standardgalactic/Centerfuge',
    url: 'https://github.com/standardgalactic/Centerfuge',
    desc: 'Boundary-aware operating architecture, safety spec & SpherePOP <(...)>.'
  }
];

const PILLAR_QUOTES = {
  compassion: '"Compassion without moderation can become enabling. True care holds the boundary while warming the room." — 01 · COMPASSION × MODERATION',
  understanding: '"Understanding without respect can become judgment. To understand a person is to listen without conquering." — 02 · UNDERSTANDING × RESPECT',
  moderation: '"Moderation is the geometry of the vessel: neither crushing the wing nor letting the nest fall." — 03 · MODERATION × COMPASSION',
  love: '"Because love without space can become control. The highest love stands steady inside its own hands." — 04 · LOVE × SPACE (<3<3<3)',
  respect: '"A family does not have to share every secret to heal, but its members should never have to sacrifice their dignity to belong." — 05 · RESPECT × UNDERSTANDING',
  space: '"Privacy is a right. Space (間 · Ma) is the quiet interval where the folded crane remembers how to fly." — 06 · SPACE × LOVE'
};

// State
const state = {
  audioEnabled: true,
  audioCtx: null,
  droneCricketsActive: false,
  droneEngine: null,
  masterWitnessed: false,
  readBooks: new Set(),
  activeBookId: null,
  holdProgress: 0,
  holdRaf: null
};

function ensureAudioContext() {
  if (!state.audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    state.audioCtx = new AudioContextClass();
  }
  if (state.audioCtx.state === 'suspended') {
    state.audioCtx.resume();
  }
  return state.audioCtx;
}

// Web Audio 432Hz Rin & Warm String Synthesizer
function playSanctuaryChord(freqBase = 432, duration = 0.65) {
  if (!state.audioEnabled) return;
  try {
    const ctx = ensureAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const ratios = [1, 1.25, 1.5]; // Just-intonation warm triad
    ratios.forEach((ratio, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freqBase * ratio, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.045 / (idx + 1), now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.05);
    });
  } catch (_) {
    // Ignore audio errors on restricted autoplay
  }
}

/**
 * Procedural 432 Hz Ambient Drone Zone + Shinjuku Gyoen Crickets Synthesizer
 * Release: 002 · Crickets in Shinjuku Gyoen · Ambient · Drone Zone · 432 Hz (between-the-lines)
 * - Continuous 432 Hz + 216 Hz + 648 Hz low-pass filtered SomaFM Drone Zone pad with slow LFO breathing
 * - Procedural Tokyo night cricket (koorogi) chirps (~4.2 kHz - 4.8 kHz AM sine bursts at natural intervals)
 */
function triggerKoorogiBout(ctx, destNode, isDistant = false) {
  if (!state.droneCricketsActive) return;
  const now = ctx.currentTime;
  // Two Shinjuku Gyoen koorogi voices: primary near 4320-4460 Hz (10x 432Hz), distant companion near 4620-4780 Hz
  const baseFreq = isDistant
    ? 4620 + Math.random() * 160
    : 4320 + Math.random() * 140;
  const pulses = isDistant ? (3 + Math.floor(Math.random() * 3)) : (4 + Math.floor(Math.random() * 3));
  const pulseDur = 0.024;
  const pulseGap = 0.041;
  const peakGain = isDistant ? 0.011 : 0.020;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.setValueAtTime(baseFreq, now);
  bandpass.Q.setValueAtTime(4.5, now);

  let outputNode = bandpass;
  if (typeof ctx.createStereoPanner === 'function') {
    const panner = ctx.createStereoPanner();
    panner.pan.setValueAtTime(isDistant ? 0.42 : -0.34, now);
    bandpass.connect(panner);
    outputNode = panner;
  }
  outputNode.connect(destNode);

  for (let i = 0; i < pulses; i++) {
    const t0 = now + i * pulseGap;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'sine';
    // Subtle downward pitch inflection across each syllable like a natural koorogi wing stroke
    osc.frequency.setValueAtTime(baseFreq + 28, t0);
    osc.frequency.exponentialRampToValueAtTime(baseFreq - 18, t0 + pulseDur);

    env.gain.setValueAtTime(0.0001, t0);
    env.gain.exponentialRampToValueAtTime(peakGain, t0 + pulseDur * 0.35);
    env.gain.exponentialRampToValueAtTime(0.0001, t0 + pulseDur);

    osc.connect(env);
    env.connect(bandpass);
    osc.start(t0);
    osc.stop(t0 + pulseDur + 0.008);
  }
}

function updateDroneCricketsButtons() {
  const active = state.droneCricketsActive;
  const headerBtn = document.getElementById('btn-drone-crickets');
  if (headerBtn) {
    headerBtn.setAttribute('aria-pressed', String(active));
    headerBtn.classList.toggle('is-playing', active);
    headerBtn.textContent = active
      ? '🦗 432Hz Drone Zone + Shinjuku Crickets: ON'
      : '🦗 432Hz Drone Zone + Shinjuku Crickets';
  }
  document.querySelectorAll('.btn-toggle-drone-crickets').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(active));
    btn.classList.toggle('is-playing', active);
    btn.textContent = active
      ? '🦗 Playing: 432Hz Drone Zone + Crickets'
      : '🦗 Play 432Hz Drone Zone + Crickets';
  });
}

function startDroneCrickets() {
  const ctx = ensureAudioContext();
  if (!ctx) return;
  if (state.droneCricketsActive) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.85, now + 1.25);
  masterGain.connect(ctx.destination);

  // Low-pass filter for warm SomaFM Drone Zone pad
  const padFilter = ctx.createBiquadFilter();
  padFilter.type = 'lowpass';
  padFilter.frequency.setValueAtTime(360, now);
  padFilter.Q.setValueAtTime(1.15, now);

  // Breathing amplitude node modulated by slow LFO
  const padBreathGain = ctx.createGain();
  padBreathGain.gain.setValueAtTime(0.75, now);

  padFilter.connect(padBreathGain);
  padBreathGain.connect(masterGain);

  // Slow LFO 1: Filter cutoff breathing (0.068 Hz ~ 14.7s cycle)
  const filterLfo = ctx.createOscillator();
  const filterLfoDepth = ctx.createGain();
  filterLfo.type = 'sine';
  filterLfo.frequency.setValueAtTime(0.068, now);
  filterLfoDepth.gain.setValueAtTime(135, now);
  filterLfo.connect(filterLfoDepth);
  filterLfoDepth.connect(padFilter.frequency);
  filterLfo.start(now);

  // Slow LFO 2: Pad volume breathing (0.11 Hz ~ 9.1s cycle)
  const ampLfo = ctx.createOscillator();
  const ampLfoDepth = ctx.createGain();
  ampLfo.type = 'sine';
  ampLfo.frequency.setValueAtTime(0.11, now);
  ampLfoDepth.gain.setValueAtTime(0.18, now);
  ampLfo.connect(ampLfoDepth);
  ampLfoDepth.connect(padBreathGain.gain);
  ampLfo.start(now);

  // Continuous Drone Voices: 216 Hz (sub-octave), 432 Hz (fundamental), 648 Hz (fifth), + gentle binaural shimmer
  const droneSpecs = [
    { freq: 216.0, type: 'sine', gain: 0.075 },
    { freq: 216.3, type: 'triangle', gain: 0.022 },
    { freq: 432.0, type: 'sine', gain: 0.058 },
    { freq: 432.5, type: 'sine', gain: 0.028 },
    { freq: 648.0, type: 'triangle', gain: 0.022 }
  ];

  const oscillators = [filterLfo, ampLfo];
  droneSpecs.forEach((spec) => {
    const osc = ctx.createOscillator();
    const vGain = ctx.createGain();
    osc.type = spec.type;
    osc.frequency.setValueAtTime(spec.freq, now);
    vGain.gain.setValueAtTime(spec.gain, now);
    osc.connect(vGain);
    vGain.connect(padFilter);
    osc.start(now);
    oscillators.push(osc);
  });

  state.droneCricketsActive = true;

  // Schedule procedural Shinjuku Gyoen night crickets (koorogi)
  let cricketTimer = null;
  function scheduleNextCricket() {
    if (!state.droneCricketsActive) return;
    triggerKoorogiBout(ctx, masterGain, false);
    // Frequently answer with the second cricket further along the park edge
    if (Math.random() < 0.68) {
      setTimeout(() => {
        if (state.droneCricketsActive) {
          triggerKoorogiBout(ctx, masterGain, true);
        }
      }, 380 + Math.random() * 520);
    }
    const nextDelayMs = 1350 + Math.random() * 2100;
    cricketTimer = setTimeout(scheduleNextCricket, nextDelayMs);
    if (state.droneEngine) {
      state.droneEngine.cricketTimer = cricketTimer;
    }
  }

  state.droneEngine = {
    masterGain,
    oscillators,
    cricketTimer: setTimeout(scheduleNextCricket, 320)
  };

  updateDroneCricketsButtons();
  showToast('🦗 Playing: 002 · Crickets in Shinjuku Gyoen · Ambient · Drone Zone · 432 Hz');
}

function stopDroneCrickets() {
  if (!state.droneCricketsActive || !state.droneEngine) return;
  state.droneCricketsActive = false;
  const engine = state.droneEngine;
  state.droneEngine = null;

  if (engine.cricketTimer) {
    clearTimeout(engine.cricketTimer);
  }

  try {
    const ctx = state.audioCtx;
    if (ctx) {
      const now = ctx.currentTime;
      engine.masterGain.gain.cancelScheduledValues(now);
      engine.masterGain.gain.setValueAtTime(Math.max(0.0001, engine.masterGain.gain.value), now);
      engine.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
      setTimeout(() => {
        engine.oscillators.forEach((osc) => {
          try { osc.stop(); osc.disconnect(); } catch (_) {}
        });
        try { engine.masterGain.disconnect(); } catch (_) {}
      }, 620);
    }
  } catch (_) {}

  updateDroneCricketsButtons();
  showToast('🌙 Paused: 432 Hz Drone Zone + Shinjuku Gyoen Crickets');
}

function toggleDroneCrickets() {
  if (state.droneCricketsActive) {
    stopDroneCrickets();
  } else {
    startDroneCrickets();
  }
}

function showToast(message) {
  const toast = document.getElementById('sanctuary-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3400);
}

// Render the 5 Print-Canon Books
function renderCanonBooks() {
  const grid = document.getElementById('canon-books-grid');
  if (!grid) return;

  grid.innerHTML = CANON_BOOKS.map((book) => {
    const isRead = state.readBooks.has(book.id);
    const isOpen = state.activeBookId === book.id;
    const nandBit = isRead ? 0 : 1; // NAND(HELD=1, READ=1) = 0 -> Gate Open / Printable
    return `
      <article class="book-spine-card ${isOpen ? 'is-open' : ''}" role="listitem">
        <div>
          <div class="book-slot-num">
            <span>BOOK 0${book.slot} / 05</span>
            <span class="nand-gate-pill ${isRead ? 'unlocked' : ''}">
              ${isRead ? 'HELD ∧ READ (0 · PRINT)' : 'NAND GATE (1 · HOLD)'}
            </span>
          </div>
          <h3 class="book-title">${book.title}</h3>
          <div class="book-origin">${book.origin}</div>
          <p class="book-summary">${book.summary}</p>
        </div>
        <div class="book-actions">
          <button
            type="button"
            class="btn-hold-book ${isRead ? 'unlocked' : ''}"
            data-book-id="${book.id}"
            aria-label="${isRead ? 'Read ' + book.title : 'Hold to witness and unlock ' + book.title}"
          >
            ${isRead ? '✦ OPEN IN SANCTUARY READER' : '⏳ HOLD OR CLICK TO WITNESS (<3)'}
          </button>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.btn-hold-book').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bookId = btn.getAttribute('data-book-id');
      unlockAndOpenBook(bookId);
    });
  });

  // Update header telemetry
  const nandStatus = document.getElementById('metric-nand-status');
  if (nandStatus) {
    const count = state.readBooks.size;
    nandStatus.textContent = count === 5
      ? 'ALL 5 HELD ∧ READ (0)'
      : `${count}/5 READ · NAND(${count === 5 ? 0 : 1})`;
  }
}

// Render Source Garden
function renderSourceGarden() {
  const grid = document.getElementById('garden-rooms-grid');
  if (!grid) return;
  grid.innerHTML = SOURCE_GARDEN_ROOMS.map((room) => `
    <a href="${room.url}" target="_blank" rel="noopener noreferrer" class="garden-room">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono);font-size:0.68rem;color:var(--color-violet);">
          <span>${room.lane}</span>
          <span>↗</span>
        </div>
        <div style="font-weight:700;font-size:0.95rem;margin:0.25rem 0;color:var(--color-text);">
          ${room.remote}
        </div>
        <p style="font-size:0.78rem;color:var(--color-text-muted);line-height:1.5;">
          ${room.desc}
        </p>
      </div>
      <div style="font-family:var(--font-mono);font-size:0.64rem;color:var(--color-gold);">
        standardgalactic ~= research ~= future
      </div>
    </a>
  `).join('');
}

// Load text into the Print-Minimal Sanctuary Reader
async function loadIntoReader({ kicker, title, path, fallback }) {
  const kickerEl = document.getElementById('reader-kicker');
  const titleEl = document.getElementById('reader-title');
  const linkEl = document.getElementById('reader-source-link');
  const contentEl = document.getElementById('reader-content');

  if (kickerEl) kickerEl.textContent = kicker;
  if (titleEl) titleEl.textContent = title;
  if (linkEl) linkEl.href = path;

  if (contentEl) {
    contentEl.innerHTML = `
      <div class="reader-skeleton" aria-label="Loading text">
        <div class="skeleton-line" style="width:65%;"></div>
        <div class="skeleton-line" style="width:92%;"></div>
        <div class="skeleton-line" style="width:84%;"></div>
        <div class="skeleton-line" style="width:76%;"></div>
      </div>
    `;
  }

  if (path.startsWith('http')) {
    contentEl.textContent = fallback;
    return;
  }

  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    contentEl.textContent = text;
  } catch (_) {
    // Graceful local file:// or offline fallback
    contentEl.textContent = fallback;
  }
}

function unlockAndOpenBook(bookId) {
  const book = CANON_BOOKS.find((b) => b.id === bookId);
  if (!book) return;

  state.readBooks.add(book.id);
  state.activeBookId = book.id;
  renderCanonBooks();
  playSanctuaryChord(432 + book.slot * 27, 0.55);

  loadIntoReader({
    kicker: `PRINT CANON BOOK 0${book.slot} / 05 · HELD ∧ READ (PRINTABLE)`,
    title: `${book.title} — ${book.origin}`,
    path: book.path,
    fallback: book.excerpt
  });

  showToast(`✦ NAND Gate Opened: "${book.title}" is now HELD ∧ READ (Printable).`);
  const readerEl = document.getElementById('reader-sanctuary');
  if (readerEl) {
    readerEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Master Press-and-Hold (<3<3<3) Interaction
function initMasterHoldSeal() {
  const btn = document.getElementById('btn-master-hold');
  const ring = document.getElementById('hold-ring-circle');
  const label = document.getElementById('hold-seal-label');
  const sub = document.getElementById('hold-seal-sub');
  const hashEl = document.getElementById('hold-kintsugi-hash');
  if (!btn || !ring) return;

  const CIRCUMFERENCE = 490;
  let startTime = null;
  const HOLD_DURATION_MS = 800;

  function updateRing(progress) {
    const clamped = Math.max(0, Math.min(1, progress));
    const offset = CIRCUMFERENCE * (1 - clamped);
    ring.style.strokeDashoffset = String(offset);
  }

  function completeMasterWitness() {
    state.masterWitnessed = true;
    CANON_BOOKS.forEach((b) => state.readBooks.add(b.id));
    renderCanonBooks();

    btn.classList.remove('is-holding');
    btn.classList.add('is-witnessed');
    updateRing(1);

    if (label) label.textContent = 'HELD & WITNESSED';
    if (sub) sub.textContent = 'all 5 books printable';
    const witnessHash = '0x-kintsugi-hold-' + Date.now().toString(16).slice(-6);
    if (hashEl) {
      hashEl.textContent = `Witness Seal: ${witnessHash} · 6/6 Pillars Active`;
    }
    const metricHold = document.getElementById('metric-hold-witness');
    if (metricHold) {
      metricHold.textContent = 'WITNESSED · <3<3<3';
    }

    playSanctuaryChord(528, 0.95);
    loadIntoReader(ULTRALOVE_EDITIONS['women-who-hold']);
    showToast('✦ In Awe to Women Who Protect & Hold <3<3<3 — All 5 Canon Books Unlocked.');
  }

  function stepHold(ts) {
    if (!startTime) startTime = ts;
    const elapsed = ts - startTime;
    const progress = elapsed / HOLD_DURATION_MS;
    updateRing(progress);

    // Illuminate pillars progressively
    const pillars = document.querySelectorAll('.pillar-node');
    const activeIdx = Math.min(pillars.length - 1, Math.floor(progress * pillars.length));
    pillars.forEach((p, idx) => p.classList.toggle('active', idx <= activeIdx));

    if (progress >= 1) {
      cancelAnimationFrame(state.holdRaf);
      state.holdRaf = null;
      completeMasterWitness();
    } else {
      state.holdRaf = requestAnimationFrame(stepHold);
    }
  }

  function startHold(e) {
    if (e.type === 'keydown' && e.code !== 'Space' && e.code !== 'Enter') return;
    if (e.type === 'keydown') e.preventDefault();
    if (state.holdRaf) return;
    startTime = null;
    btn.classList.add('is-holding');
    playSanctuaryChord(432, 0.35);
    state.holdRaf = requestAnimationFrame(stepHold);
  }

  function cancelHold() {
    if (state.holdRaf) {
      cancelAnimationFrame(state.holdRaf);
      state.holdRaf = null;
    }
    btn.classList.remove('is-holding');
    if (!state.masterWitnessed) {
      updateRing(0);
    }
  }

  btn.addEventListener('pointerdown', startHold);
  btn.addEventListener('pointerup', cancelHold);
  btn.addEventListener('pointerleave', cancelHold);
  btn.addEventListener('keydown', startHold);
  btn.addEventListener('keyup', cancelHold);
}

// Initialize Pillars & Controls
document.addEventListener('DOMContentLoaded', () => {
  renderCanonBooks();
  renderSourceGarden();
  initMasterHoldSeal();

  // Load Edition 002 ("In Awe to Women Who Protect and Hold <3<3<3") by default
  loadIntoReader(ULTRALOVE_EDITIONS['women-who-hold']);

  // Six Pillars interactive quotes
  const quoteBox = document.getElementById('pillar-live-quote');
  document.querySelectorAll('.pillar-node').forEach((node) => {
    node.addEventListener('click', () => {
      document.querySelectorAll('.pillar-node').forEach((n) => n.classList.remove('active'));
      node.classList.add('active');
      const key = node.getAttribute('data-pillar');
      if (quoteBox && PILLAR_QUOTES[key]) {
        quoteBox.textContent = PILLAR_QUOTES[key];
      }
      playSanctuaryChord(432, 0.3);
    });
  });

  // Edition switcher buttons
  document.querySelectorAll('.btn-open-edition').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-edition');
      if (ULTRALOVE_EDITIONS[key]) {
        loadIntoReader(ULTRALOVE_EDITIONS[key]);
        playSanctuaryChord(480, 0.45);
        showToast(`✦ Unfolded: ${ULTRALOVE_EDITIONS[key].title}`);
        document.getElementById('reader-sanctuary')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Print sheet button
  document.getElementById('btn-print-sheet')?.addEventListener('click', () => {
    window.print();
  });

  // Audio toggle
  const audioBtn = document.getElementById('btn-audio-toggle');
  audioBtn?.addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    audioBtn.setAttribute('aria-pressed', String(state.audioEnabled));
    audioBtn.textContent = state.audioEnabled ? '🔔 432Hz Chime: ON' : '🔕 432Hz Chime: MUTED';
  });

  // 432 Hz Drone Zone + Shinjuku Gyoen Crickets toggle (between-the-lines 002)
  document.getElementById('btn-drone-crickets')?.addEventListener('click', toggleDroneCrickets);
  document.querySelectorAll('.btn-toggle-drone-crickets').forEach((btn) => {
    btn.addEventListener('click', toggleDroneCrickets);
  });
});
