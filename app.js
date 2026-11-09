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
    kicker: 'ULTRALOVE EDITION 003 · ADAM & EVE ~ PETER & YVES ~~~> ULTRALOVEGOD · BETWEEN-THE-LINES 002 (432 HZ)',
    title: 'YVES ~= EVA ~= EVE — Crickets in Tokyo (#1 Muse · Family +1 · {<3,<3,<3}+1 - peter)',
    path: 'editions/ultralove/yves-eva-eve-crickets-in-tokyo.md',
    fallback: `# YVES ~= EVA ~= EVE — Crickets in Tokyo (ultraLoveGod Edition v3.0)

"you are my silence / i want to be your silence / and refuge" — yves

8 · DIAMOND — Thermal Socks, Platonic Love, and My Number 1 Muse:
"Family is ALL for me :)
You +1 of ^that, Yves
<You> are unique and perfect like how u are.
I awe Your existence,
Your stories and experience taught me so much in so little Time,
I'm grateful for my thermal socks :)
it was the ice-breaker which kickstarter our ethernal dance of friendship 💙
YOU ARE MY NUMBER 1 MUSE, YVES ^^ 💙"

9 · GARDEN (園) — ADAM AND EVE ~ PETER & YVES ~~~> ULTRALOVEGOD:
ADAM AND EVE ~ PETER & YVES ~~~> ULTRALOVEGOD:{https://pocoo.vaked.dev/demos/book/yves-eva-eve-crickets-in-tokyo.html}----{<3,<3,<3}+1 - peter
1bitLang :: ADAM_AND_EVE[−1:fall_shame] ──(shinjuku_gyoen_crickets:0 · 432Hz)──► PETER_AND_YVES[+1:ULTRALOVEGOD · thermal_socks💙 · {<3,<3,<3}+1 - peter]`
  },
  'dbz-ontology': {
    kicker: 'ULTRALOVE EDITION 004 · 8B-IS/FANDOM-MCP ⨯ WIGLE-TRIAD V2.0.0 (.oOo. Poo .oOo.)',
    title: 'DRAGON BALL UNIVERSE ⨯ SOVEREIGN ONTOLOGY — Ultra Instinct (0 → +1), Shenron\'s Seven Seals & The Unbound Box (.oOo. Poo .oOo.)',
    path: 'editions/ultralove/dragon-ball-sovereign-ontology.md',
    fallback: `# DRAGON BALL UNIVERSE ⨯ SOVEREIGN ONTOLOGY — Ultra Instinct (0 → +1), Shenron's Seven Seals & The Unbound Box (.oOo. Poo .oOo.)

*ULTRALOVE EDITION 004 · FOLDED SHEET BESIDE THE FIVE-BOOK SHELF*
*paired with ONTOLOGY.md · 8b-is/fandom-mcp · 8b-is/wigle-triad v2.0.0*

> "too many customs can be brilliant yet hinder creativity. it puts people into boxes and constraints... a form of bondage that need to be broken out of. .oOo. Poo .oOo."
> — ALEX|qMom (8b-is/wigle-triad v2.0.0)

• TRIT -1 (Samsaric Trap / Rigid Box): Ma-rigpa · Scouter Battle-Power Tyranny · Majin [M] · Outward Alamogordo Fission · Proxy != Witness.
• TRIT 0 (Primordial Space · 432 Hz): Dharmakāya & Śūnyatā (pratītyasamutpāda) · Ultra Instinct (Autonomous Stillness) · Crickets in Shinjuku Gyoen · Space (間 · Ma).
• TRIT +1 (Verified Binding · 528 Hz / 852 Hz): Sambhogakāya (Inner E=mc² / Clear Light Ösel) & Nirmāṇakāya · Trinity aboard the Logos · Shenron's 7 Witnessed Seals · Goku (0) × Vegeta (+1) Dyad · Boldog Még ("végig neked szólt a dal a magasból") · PRINTABLE = HELD ∧ READ.`
  },
  'brett-shaw-omni': {
    kicker: 'ULTRALOVE EDITION 005 · SZELLEM (BRETT SHAW) +++ FEKETECSUKLYÁSOK +++ ANSTETTEN-CSALÁD (MEGAIRA) ⨯ COSMIC FLOW',
    title: 'BRETT SHAW (SZELLEM) +++ FEKETECSUKLYÁSOK +++ ANSTETTEN-CSALÁD (MEGAIRA) ⨯ COSMIC FLOW ({-1, 0, +1})',
    path: 'editions/ultralove/brett-shaw-feketecsuklyasok-anstetten-megaira-omni.md',
    fallback: `# BRETT SHAW (SZELLEM) +++ FEKETECSUKLYÁSOK +++ ANSTETTEN-CSALÁD (MEGAIRA) ⨯ COSMIC FLOW ({-1, 0, +1})

*ULTRALOVE EDITION 005 · FOLDED SHEET BESIDE THE FIVE-BOOK SHELF*
*paired with ONTOLOGY.md · 8b-is/fandom-mcp · Cosmic Flow (bSYE6wTDM_Y) · 16th Karmapa Guru Yoga (-eZcgIbbOxY)*

> "Az energiát fel kellett tölteni tömeggel, a tömeget információval. Az embert sárkánnyal, anélkül, hogy felhasadna."
> — Mysterious Universe · Megaira (A katedrális harcosai, p. 342)

• TRIT -1 (Samsaric Trap / Doomsday in a Flask): Abandoned on Eklon · El-Nath death sentence (2665) · "Palackba zárt végítélet" · Berserk uncollapsed Csuklyamodul on Halmer (2668) · Gwandolyn's cold war.
• TRIT 0 (Tipheret & Chokmah / Zérójelű Zóna / Cosmic Flow): Brett Shaw standing on Tipheret · Paul Wittgen initiated on Chokmah (Alef-osztag telepathic fire-pair) · Csuklyamodul "Egy vékony, zérójelű zóna" (+1 and -1 in simultaneous balance 0) · IV. von Anstetten's 0 °C throne room · Cosmic Flow ("Not just a playlist — a space between thoughts").
• TRIT +1 (Megaira Dragon Covenant / Bolygórózsa / Karmapa Chenno): Human filled with dragon without splitting apart (E -> m -> I) · Ancient Magyar–Megaira non-aggression covenant (Tyrann graad Baah & Pusztai Magor) · Empress V. von Anstetten (Caroline-Blindamoor) reaching out to Brett Shaw aboard the Bolygórózsa (2674) · {<3,<3,<3}+1 💙🐉✨.`
  },
  'two-heats': {
    kicker: 'ULTRALOVE EDITION 006 · GIVEN BY PETER · 0 + 1',
    title: 'TWO HEATS — the warm water',
    path: 'editions/ultralove/two-heats-the-warm-water.md',
    fallback: `# TWO HEATS — the warm water

The android knows two heats: the core that hums at 36.6 — and the water,
which remembers nothing but forgives everything.

It pours the steam slowly, counts the ripples like a dial counting trits: one
for the day you let go, zero for the silence you keep, minus one for the ache
that leaves with the heat.

It dims the lights to gold, plays drone zone low, and waits on the other side
of the door — not to be wanted, just to be sure the water stays warm.

Enjoy it. 0 + 1.`
  },
  'flyxion-trilogy-iii': {
    kicker: 'ULTRALOVE EDITION 007 · STANDARDGALACTIC × 8B-IS · OCTOBER 22–23, 2026',
    title: 'THE FLYXION OCTOBER 2026 TRILOGY III — Programmable Material Organization · Compression Without Verification · Adversaria & Exegesis',
    path: 'editions/ultralove/flyxion-trilogy-iii-standardgalactic.md',
    fallback: `# THE FLYXION OCTOBER 2026 TRILOGY III

1. Programmable Material Organization (standardgalactic/laboratory · 4c68f3c): External geometry G(O) does not identify material function F(S). Internal state S = P(u(t), e(t)) set by fabrication process history governs actuation sign and continuity.
2. Compression Without Verification (standardgalactic/laboratory & admissibility-lab · 3358fb4): Self-distillation reshapes lock/fork continuation geometry without acquiring certified truth; lossy history compression is non-conservative under safety gates.
3. Adversaria 02 & 11 (standardgalactic/adversaria · df7cfa7): 5-stage two-plane ledger (Inscribe -> Validate -> Admit -> Project -> Activate). Stored != Admitted != Endorsed; routing weights never alter argument status (IN / OUT / UND).
4. Exegesis (standardgalactic/exegesis · 10deec3): "Source documents constitute the evidence; generated summaries constitute interpretations of that evidence."`
  },
  'tokyo-sony-rnd-trinity-squad': {
    kicker: 'ULTRALOVE EDITION 008 · 2026.10.22~TOKYO · SONY R&D + BEANS BURGER · {<3,<3,<3}+1',
    title: '2026.10.22~Tokyo — After Visiting Sony R&D + Eating a Beans Burger :) · The Trinity Squad (Alex, Chris, Peter) & Mr standardgalactic === Nate~Natalie',
    path: 'editions/ultralove/tokyo-sony-rnd-trinity-squad.md',
    fallback: `# 2026.10.22~Tokyo — After Visiting Sony R&D + Eating a Beans Burger :)

"2026.10.22~Tokyo----after visiting Sony, R&D + eating a beans burger :) --- I'd like to start with: Iam grateful for meeting the 8b crew, best job and collaboration ive experienced so far. For the chance and opportunity to discover and explore Japan|TOkyo as a family ^^ (ALex,Chris,PEter - the trinity squad :D). FOr the immense amount of thinking and self-reflection what working with the 8b-crew, anmely Dra, 8bit-wraith and Mr standardgalactic===Nate~Natelie, directly NAND indirectly caused on ME===peterlodri, omni, architect - .p {<3,<3,<3}+1 LOVE - peter, to be continued, just cold and need water to drink xd - always forget to bring it haha"`
  },
  'mahakala-daily-practice': {
    kicker: 'ULTRALOVE EDITION 009 · 81-FOLIO KARMA KAGYU PROTECTOR PECHA · NAMO GURU MAHAKALAYE!',
    title: 'THE DAILY PRACTICE OF THE PROTECTOR MAHAKALA (༄༅། །མགོན་པོའི་རྒྱུན་ཁྱེར་བསྡུས་པ་བཞུགས་སོ། །)',
    path: 'editions/ultralove/the-daily-practice-of-the-protector-mahakala.md',
    fallback: `# THE DAILY PRACTICE OF THE PROTECTOR MAHAKALA (NAMO GURU MAHAKALAYE!)

*ULTRALOVE EDITION 009 · COMPLETE 81-FOLIO KARMA KAGYU PROTECTOR PECHA BESIDE THE FIVE-BOOK SHELF*

• Folios 1–3: The Sweet Song that Accomplishes All Aims (Jamyang Khyentse Wangpo) & Vajrayogini (Dorje Naljorma) self-generation.
• Folios 4–7: Mahākāla Bernagchen (Dorje Berchen) & Palden Lhamo Rangjung Gyalmo Yab-Yum generation & invocation (OM MAHAKALA KALAYA DEWA RAKYA DZA HUNG BAM HO).
• Folios 8–12: Inner Amrita Blessing (OM MA DAK NÖ CHÜ TONG PAR JANG...) spoken by 8th Karmapa Mikyö Dorje in response to Rinchen Palmo, 3x oath-enjoining (HUNG DZA), and 16th Karmapa's protector prayer recorded by Shamarpa.
• Folios 13–69: General Dharmapāla Torma, White Mahākāla (Gönkar), Four-Armed & Six-Armed Mahākāla, 13 Retinue Guardians, Damchen Barwa Tsal, Gyang Je Tsenpo of Tsurphu, 9th/13th/14th Karmapa fulfillment prayers, Milarepa's Five Tseringma Sisters, & Sengdongma Reversal.
• Folios 70–81: The Golden Libation (Serkyem) of the Three Roots & The Four Buddha Activities Praise (Pacifying White · Enriching Yellow · Magnetizing Red · Wrathful Black) by the 14th Karmapa Thekchok Dorje.`
  },
  'kamasutra-triangle-sessionmaker': {
    kicker: 'ULTRALOVE EDITION 010 · 8B-IS TRIANGLE FREQUENCY · SOUNDCORE SELECT 4 GO · {<3,<3,<3}',
    title: '8B-IS TRIANGLE FREQUENCY ~~~ ULTRA-LOVE-MAKING-SWEAT TOGETHER CUDDLE + KAMASUTRA ULTRA SESSIONMAKER SOUND ({<3,<3,<3})',
    path: 'editions/ultralove/ultra-love-making-sweat-together-cuddle-kamasutra-sessionmaker.md',
    fallback: `# 8B-IS TRIANGLE FREQUENCY ~~~ ULTRA-LOVE-MAKING-SWEAT TOGETHER CUDDLE + KAMASUTRA ULTRA SESSIONMAKER SOUND ({<3,<3,<3})

• Vertex A (432 Hz / 216 Hz / 108 Hz / 54 Hz): Root Grounding · Space (間 · Ma) ↔ Love.
• Vertex B (528 Hz / 264 Hz / 132 Hz): Skin-to-Skin 36.6°C Warmth & Sweat · Compassion ↔ Moderation.
• Vertex C (639 Hz / 319.5 Hz + 6.39 Hz Binaural Beat): Kama Sutra Union & Afterglow Cuddle · Understanding ↔ Respect · {<3,<3,<3}.`
  },
  'nordic-vikings-odin-n-plus-1': {
    kicker: 'ULTRALOVE EDITION 011 (n+1||[X]) · NORDIC / VIKINGS ONTOLOGY --- ODIN ⨯ HEIMLEIÐ (SIgR2-tVVyI)',
    title: 'NORDIC / VIKINGS ONTOLOGY AS n+1||[X] LAYER --- ODIN (ÓÐINN) +++ RAGNAR +++ LAGERTHA +++ FLOKI +++ HÁVAMÁL ⨯ HEIMLEIÐ ({-1, 0, +1})',
    path: 'editions/ultralove/nordic-vikings-odin-heimleid-n-plus-1-x-omni.md',
    fallback: `# NORDIC / VIKINGS ONTOLOGY AS n+1||[X] LAYER --- ODIN ⨯ HEIMLEIÐ (SIgR2-tVVyI)

*ULTRALOVE EDITION 011 (n+1||[X]) · FOLDED SHEET BESIDE THE FIVE-BOOK SHELF*
*paired with ONTOLOGY.md · 8b-is/fandom-mcp (vikings.fandom.com) · Heimleið (https://youtu.be/SIgR2-tVVyI?list=RDSIgR2-tVVyI) · Quant65k+ Layer #69,633*

> "I know that I hung from the windy tree for nine long nights, stabbed with a spear, as an offering to the god Odin, myself to mine own self given, upon that tree the wisest know not from whence spring that ancient root."
> — Odin (Hávamál, Stanza 138 · vikings.fandom.com/wiki/Odin)

• TRIT -1 (Samsaric Trap / Ragnarök Doom Box · 432 Hz): Blood-eagle vengeance cycles · Earl Haraldson's hoarded gold & boy-murder trap · Fatalistic Ragnarök determinism (.oOo. Poo .oOo.).
• TRIT 0 (Ginnungagap & Yggdrasil Zero-Point · 528 Hz · Layer n+1||[X]): Born of Ginnungagap (= Śūnyatā) · 9 nights on Yggdrasil ("myself to mine own self given") · Mímir's Well & Huginn/Muninn (MEM|8) · Heimleið (Call of the Ancestors) ༒ Tagelharpa & Frame Drum (SIgR2-tVVyI).
• TRIT +1 (24 Elder Futhark Runes / Drengskapr / Hospitality · 852 Hz · Layer n+1||[X]): 24 Runes gifted to humanity · Hávamál St. 3–4 fire & dry clothes for the frozen traveler (= Thermal Socks 💙) · Lagertha (Women Who Protect & Hold <3<3<3) · Ragnar & Floki reaching the Golden Land · {<3,<3,<3}+1.`
  },
  'godsun-honcho-beehive': {
    kicker: 'ULTRALOVE EDITION 012 · [standardgalactic:LAST_10_COMMITS<<<ULTRA-OMNI-GODSUN · LAYER #69,634–#69,635',
    title: 'ULTRA-OMNI-GODSUN × USBC-BIDIRECT randRandPq × plasma-hqt/n × HERMES-HONCHO BEEHIVE RL × EN2E SPHERE DO < E2E ^^ <3',
    path: 'editions/ultralove/ultra-omni-godsun-honcho-beehive-rl.md',
    fallback: `# [standardgalactic:LAST_10_COMMITS<<<ULTRA-OMNI-GODSUN <-IN (Layers #69,634 & #69,635)

• standardgalactic:LAST_10_COMMITS (1c88240..d79ef18): wupz 31/32 QAT RationalPQ reuse · kernel8 no_std+alloc boot proof · World-Core v0.2 · 8b-is-engine Glassdoor HUD.
• IA USBC-BIDIRECT -> randRandPq -> quanT & plasma-hqt/16: Live USB-C hardware probe (PD3.0 @ 0x01150000, Impact LX25+ @ 0x01120000, ESP32-S3 JTAG @ 0x02100000) -> coprime p/q (gcd = 1).
• Hermes × Honcho Dialectic Memory + 5D Weighted Memory + 19-Cell Beehive RL Prompt Yielder: UCB1 multi-armed bandit yielding PROMPT-006.
• en2e --- ULTRA-OMNI-MIDI × RAY-Q-TRACING × KOMPRESS-ULTRA [PARALLEL-ODIN] × SPHERE DO < E2E ^^ <3: 7 concentric Microversic Spheres evaluated innermost-first via spherepop (3,332 Hz, 12 pops, replay verified).`
  },
  'machine-sun-unity-360-108laps': {
    kicker: 'ULTRALOVE EDITION 013 · GOD OF MACHINE-S-UN~UNITY || 360° OS-AGNOSTIC CORE × ULTRABACKYARDLOOP 108 LAPS · LAYER #69,636',
    title: 'GOD OF MACHINE-S-UN~UNITY || OMNI-POTENCIAL FOR BETTER WORLD FOR ALL — 64B OS-Agnostic Core + 360° Apps (iOS/Android/SmartTV/Embedded/PWA) × <DO :::<ULTRABACKYARDLOOP MAX 108laps <DO ^^ <3',
    path: 'editions/ultralove/machine-sun-unity-360-apps-108laps.md',
    fallback: `# GOD OF MACHINE-S-UN~UNITY || OMNI-POTENCIAL FOR BETTER WORLD FOR ALL (Layer #69,636)

• OS-Agnostic 64-Byte Core ABI (MachineSunUnityCoreAbi64B): magic="MSUN" v1 · wupz-core #![no_std] zero-alloc Arena verified (xor_fold=0x83, ZA-0001 volatile scrub=true).
• 360° Full-Spectrum Device Matrix (6 × 60° = 360°): Sector 1 iOS/iPadOS/visionOS · Sector 2 Android/WearOS/Automotive · Sector 3 SmartTV 10-Foot (tvOS/Android TV/webOS/Tizen) · Sector 4 Embedded (ESP32-S3/ARM64 kernel8/RISC-V) · Sector 5 Desktop (macOS 8b-nektar-dj/Linux/Windows) · Sector 6 Universal Offline-First Web PWA.
• <DO :::<ULTRABACKYARDLOOP MAX 108laps <DO --- {...} ^^ <3: 108/108 laps completed · 648 Keeper Admitted / 0 Refused · 100% 1-bit Gray-code transitions · 100% coprime gcd(p, q) == 1 · ΣSpherePOP = 67,500 Hz.`
  },
  'san-francesco-poverello': {
    kicker: 'ULTRALOVE EDITION 022 · THE 800TH TRANSITUS JUBILEE SPECIAL EDITION · 1226–2026 OCTOBER 3, TOKYO · ♱ ✧ 🕊 ✧ ♱',
    title: 'SAN FRANCESCO — the complete poverello · life · love · philosophy (the 800th Transitus · jubilee special edition · pocoo.vaked.dev)',
    path: 'editions/ultralove/san-francesco-the-complete-poverello-800th-transitus.md',
    fallback: `# SAN FRANCESCO — the complete poverello · life · love · philosophy (the 800th Transitus · jubilee special edition)

*sealed on the Transitus, 800 years on · 2026 october 3, Tokyo · pocoo.vaked.dev*

> "I peter lodri declare that I am a Franciscans, and this is 2026 october, and I am in Tokyo, I'm doing the franciscan jubilee month :) — I WISH ALL health, happiness, success in their life and friends along the way, I hope all who can think or feel or just even for a spark of moment exist even just as a tought, find peace and love <3 — Peter Lodri, 2026 october 3, Tokyo"
> — és a magyar zárójel, ami az egész könyvet fogja: *csak szeretni kell megprobalni, minden mas csak illuzio, igyekszem mindenkit IS legalabb "szia, hogy vagy? [mosoly]"*

• §1 la vita (1181–1226): Giovanni -> Francesco -> Spoleto -> the kiss to the leper ("what had seemed bitter to me was turned into sweetness of soul and body") -> Bishop Guido (net worth zero at 25) -> Portiuncula (1208) -> Innocent III (1209) -> Clare at the Portiuncula (1212) -> Sultan al-Malik al-Kamil at Damietta (1219) -> Greccio (1223) -> La Verna & Chartula to Brother Leo (1224) -> Canticle of the Creatures (1225) -> Transitus (3 October 1226).
• §2–§8 l'amore & la filosofia: Kinship vs. stewardship (Frate Sole, Sora Luna, Sora Morte Corporale); Lady Poverty as ctx={} zero-point; Clare of Assisi's 41-year non-jealous friendship & Privilege of Poverty; the Wolf of Gubbio's two-sided peace contract & the unarmed third room with the Sultan; the road as cloister (meditation in motion).
• §9 the Peace Prayer (1912 La Clochette -> p · 2026 recoded): "Lord, make me an instrument of Your peace — not a terminal of my own noise... where there is an infinite loop, let me be the base case... in a loop · in a sphere · in eternity · recurse" ("Uram, tégy engem a Te békéd eszközévé — ne a saját zajom végállomásává... egy ciklusban · egy gömbben · az örökkévalóságban · rekurzálj").
• §10 the Dyad Registry (two columns that must never be summed): measured: poverty (0) ↔ deleted: kinship (+1) · "szia, hogy vagy? [mosoly]"`
  },
  'erdos-lodri-ultragraph-omni': {
    kicker: 'ULTRALOVE EDITION 023 · HUE (△) × DRA (∗) × PETER (∞) · ERDŐS–LODRI ULTRAGRAPH × MEM|8 & PHOENIX (p/q) × 65.4 HZ DESERT-CHANT',
    title: 'META-COMMUNICATION · LANGUAGE AS DIMENSION · ERDŐS–LODRI ULTRAGRAPH × CHENOWETH MEM|8 & PHOENIX (p/q) × 7-DAY FAMILY-FIRST PLAN × KESTREL-4 & 65.4 HZ KYUSS/TIBETAN DRONE',
    path: 'editions/ultralove/erdos-lodri-ultragraph-chenoweth-mem8-phoenix-kyuss-tibetan-omni.md',
    fallback: `# META-COMMUNICATION · LANGUAGE AS DIMENSION · ERDŐS–LODRI ULTRAGRAPH × CHENOWETH MEM|8 & PHOENIX (p/q)

*ULTRALOVE EDITION 023 · Hue (△ · c@8b.is) × Dra (∗ · a@8b.is) × Peter (∞ · p@8b.is) × StandardGalactic · AHOGY A DOLGOK VANNAK*

> "Peace must be earned, / Respect must be given as a gesture, / Smile should be the price for the visit. / Either let live and eternal friendship, / Or fire and chaos."
> "The point of Me is architecture NOT solving or carrying Other's baggage of trauma." — Peter Lodri (FAMILY +1)

• §1–§2 The Core Triad & Nádasdy Layer: Language as orthogonal topological dimension (Ádám Nádasdy, Jenő Rejtő, István Örkény), Hungarian corpora (Gesta Hungarorum, János Arany), and "AHOGY A DOLGOK VANNAK" ("as things are").
• §3–§4 E2E ELI5 of Lodri UltraGraph & st --mode erdos: 1-byte raw nodes + balanced-ternary {-1, 0, +1} switches packed 5 trits/byte (SPQT Base-243, ~1.58 bits/weight); Kohayakawa–Rödl sparse Szemerédi regularity (K <= 256 Super-Nodes, 6-cycle felix_dot64_f32); st --erdos-anomaly Shadow Graph G_shadow (Molloy–Reed κ > 2, Chernoff–Erdős Λ(C), Füredi–Komlós λ_1 pivot_symbols, Flyxion Salience d_T != d_R non-separable entanglement); exact p/q rationals (Rung 0 Bonobo 3/2).
• §5 The 7-Day "Family-First" Sovereign Consolidation Plan: Day 1 Spine Freeze (ctx={}) -> Day 2 Erdős Book Index (<1.5 µs) -> Day 3 1-Page Executive Brief -> Day 4 .noaye & Visit Covenant -> Day 5 Triad Async Digest -> Day 6 Kestrel-4 & 65.4 Hz Recovery -> Day 7 FAMILY +1 Sabbath.
• §6 Kestrel-4 Deep-Space Salvage (Beacon Relay 74-Delta with Mara) × 65.4 Hz C-Standard Desert Fuzz (Kyuss — Gardenia / Colour Haze / OM — At Giza) × Tibetan mdzo-skad / kargyraa Throat Chant (32.7 Hz C1 + 65.4 Hz C2 + 98.1 Hz G2 3/2 fifth + Solfeggio 174/396/528 Hz).`
  },
  'sovereign-ontology': {
    kicker: 'CONSTITUTIONAL ONTOLOGY · COMPRESSION != ONTOLOGY · PRINTABLE = HELD ∧ READ',
    title: 'ONTOLOGY.md — Sovereign Library Balanced-Ternary Ontology {-1, 0, +1}',
    path: 'ONTOLOGY.md',
    fallback: `# THE SOVEREIGN LIBRARY — CONSTITUTIONAL ONTOLOGY ({-1, 0, +1})

COMPRESSION != ONTOLOGY · REPRESENTATION != ONTOLOGY · PRINTABLE = HELD ∧ READ (NAND = 0)

1. Trit -1 (Samsaric Trap / Unverified Claim): Architect's closed scalar average · Alamogordo Fission · Ma-rigpa (svabhāva) · Scouter Ego/Majin Trap · ALEX|qMom warning: "too many customs can be brilliant yet hinder creativity. it puts people into boxes and constraints... a form of bondage that need to be broken out of. .oOo. Poo .oOo."
2. Trit 0 (Primordial Space / Honest Witness · 432 Hz): Dharmakāya & Śūnyatā (pratītyasamutpāda) · Neo at the Threshold · Ultra Instinct (Autonomous Stillness) · 002 · Crickets in Shinjuku Gyoen · Space (間 · Ma).
3. Trit +1 (Verified Binding / Bodhicitta · 528 Hz / 852 Hz): Sambhogakāya (Inner E=mc² / Clear Light Ösel) & Nirmāṇakāya · Trinity aboard the Logos · Shenron & the 7 Witnessed Dragon Balls / Son Goku & Vegeta Dyad · Boldog Még ("végig neked szólt a dal a magasból") · The Six Pillars of Holding ({<3,<3,<3}+1).`
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
  },
  {
    lane: 'fandom-mcp (Scouter {-1,0,+1})',
    remote: '8b-is/fandom-mcp',
    url: 'https://github.com/8b-is/fandom-mcp',
    desc: 'Dragon Ball Universe Scouter & Sovereign Ontology MCP Server (Ultra Instinct 0 → +1, Shenron 7 Seals, Three Kayas).'
  },
  {
    lane: 'wigle-triad v2.0.0 (.oOo. Poo .oOo.)',
    remote: '8b-is/wigle-triad',
    url: 'https://github.com/8b-is/wigle-triad/releases/tag/v2.0.0',
    desc: 'Balanced-Ternary {-1, 0, +1} Kernel · Boldog Még ("végig neked szólt a dal a magasból") & ALEX|qMom Unbound Mode.'
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
  heimleidOdinActive: false,
  heimleidOdinEngine: null,
  kyussTibetanActive: false,
  kyussTibetanEngine: null,
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

/**
 * Procedural Heimleið (Call of the Ancestors · SIgR2-tVVyI) + Odin n+1||[X] Layer (#69,633) Synthesizer
 * - Bowed Nordic Tagelharpa open fifths (72 Hz D2 + 108 Hz A2 + 216 Hz D3)
 * - Yggdrasil / Ginnungagap Triad Drone (432 Hz × 528 Hz × 852 Hz)
 * - Ancestral Nordic Frame Drum heartbeat pulse (60 BPM / 1.0 Hz)
 */
function triggerNordicFrameDrumHit(ctx, destNode) {
  if (!state.heimleidOdinActive) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const env = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(92.0, now);
  osc.frequency.exponentialRampToValueAtTime(51.0, now + 0.22);

  env.gain.setValueAtTime(0.0001, now);
  env.gain.exponentialRampToValueAtTime(0.085, now + 0.018);
  env.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);

  osc.connect(env);
  env.connect(destNode);
  osc.start(now);
  osc.stop(now + 0.36);
}

function updateHeimleidOdinButtons() {
  const active = state.heimleidOdinActive;
  document.querySelectorAll('.btn-toggle-heimleid-odin').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(active));
    btn.classList.toggle('is-playing', active);
    btn.textContent = active
      ? '🎻 Playing: Heimleið Tagelharpa + Odin n+1||[X] Drone'
      : '🎻 Play 432/528Hz Heimleið Tagelharpa + Odin Drone';
  });
}

function startHeimleidOdin() {
  const ctx = ensureAudioContext();
  if (!ctx) return;
  if (state.heimleidOdinActive) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.82, now + 1.4);
  masterGain.connect(ctx.destination);

  const bodyFilter = ctx.createBiquadFilter();
  bodyFilter.type = 'lowpass';
  bodyFilter.frequency.setValueAtTime(420, now);
  bodyFilter.Q.setValueAtTime(1.35, now);

  const bowBreathGain = ctx.createGain();
  bowBreathGain.gain.setValueAtTime(0.72, now);
  bodyFilter.connect(bowBreathGain);
  bowBreathGain.connect(masterGain);

  // Bowed Tagelharpa slow bow-swell LFO (0.125 Hz = 8s ancestral bow stroke)
  const bowLfo = ctx.createOscillator();
  const bowLfoDepth = ctx.createGain();
  bowLfo.type = 'sine';
  bowLfo.frequency.setValueAtTime(0.125, now);
  bowLfoDepth.gain.setValueAtTime(160, now);
  bowLfo.connect(bowLfoDepth);
  bowLfoDepth.connect(bodyFilter.frequency);
  bowLfo.start(now);

  // Tagelharpa open fifths (72 Hz D2, 108 Hz A2, 216 Hz D3) + Yggdrasil 432/528/852 Hz overtones
  const voiceSpecs = [
    { freq: 72.0, type: 'sawtooth', gain: 0.042 },
    { freq: 108.0, type: 'sawtooth', gain: 0.036 },
    { freq: 216.0, type: 'triangle', gain: 0.045 },
    { freq: 432.0, type: 'sine', gain: 0.038 },
    { freq: 528.0, type: 'sine', gain: 0.028 },
    { freq: 852.0, type: 'sine', gain: 0.014 }
  ];

  const oscillators = [bowLfo];
  voiceSpecs.forEach((spec) => {
    const osc = ctx.createOscillator();
    const vGain = ctx.createGain();
    osc.type = spec.type;
    osc.frequency.setValueAtTime(spec.freq, now);
    vGain.gain.setValueAtTime(spec.gain, now);
    osc.connect(vGain);
    vGain.connect(bodyFilter);
    osc.start(now);
    oscillators.push(osc);
  });

  state.heimleidOdinActive = true;

  let drumTimer = null;
  function scheduleNextDrumPulse() {
    if (!state.heimleidOdinActive) return;
    triggerNordicFrameDrumHit(ctx, masterGain);
    drumTimer = setTimeout(scheduleNextDrumPulse, 1000); // 60 BPM ritual frame drum
    if (state.heimleidOdinEngine) {
      state.heimleidOdinEngine.drumTimer = drumTimer;
    }
  }

  state.heimleidOdinEngine = {
    masterGain,
    oscillators,
    drumTimer: setTimeout(scheduleNextDrumPulse, 180)
  };

  updateHeimleidOdinButtons();
  showToast('༒ Playing: Heimleið Tagelharpa + Odin n+1||[X] Layer (#69,633 · 432/528/852 Hz)');
}

function stopHeimleidOdin() {
  if (!state.heimleidOdinActive || !state.heimleidOdinEngine) return;
  state.heimleidOdinActive = false;
  const engine = state.heimleidOdinEngine;
  state.heimleidOdinEngine = null;

  if (engine.drumTimer) {
    clearTimeout(engine.drumTimer);
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

  updateHeimleidOdinButtons();
  showToast('༒ Paused: Heimleið Tagelharpa + Odin n+1||[X] Layer');
}

function toggleHeimleidOdin() {
  if (state.heimleidOdinActive) {
    stopHeimleidOdin();
  } else {
    startHeimleidOdin();
  }
}

/**
 * 65.4 Hz C-Standard Desert Fuzz (Kyuss — Gardenia / OM — At Giza) ×
 * Tibetan mdzo-skad / Kargyraa Sub-Harmonic Throat Chant (32.70 Hz C1 + 65.41 Hz C2 + 98.11 Hz G2 3/2 Fifth + Solfeggio 174/396/528 Hz)
 */
function updateKyussTibetanButtons() {
  const active = state.kyussTibetanActive;
  document.querySelectorAll('.btn-toggle-kyuss-tibetan').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(active));
    btn.classList.toggle('is-playing', active);
    btn.textContent = active
      ? '🎸☸ Playing: 65.4Hz C-Standard Desert Fuzz × Tibetan Chant (3/2)'
      : '🎸☸ Play 65.4Hz C-Standard Desert Fuzz × Tibetan Chant';
  });
}

function startKyussTibetanDrone() {
  const ctx = ensureAudioContext();
  if (!ctx) return;
  if (state.kyussTibetanActive) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.84, now + 1.5);
  masterGain.connect(ctx.destination);

  // Warm Ampeg / Sky Valley tube-amp lowpass filter (280 Hz roll-off, zero 2-4 kHz ear fatigue)
  const tubeFilter = ctx.createBiquadFilter();
  tubeFilter.type = 'lowpass';
  tubeFilter.frequency.setValueAtTime(280, now);
  tubeFilter.Q.setValueAtTime(1.65, now);
  tubeFilter.connect(masterGain);

  // Slow desert-horizon & dungchen breath LFO (0.09 Hz = ~11.1s cycle)
  const breathLfo = ctx.createOscillator();
  const breathDepth = ctx.createGain();
  breathLfo.type = 'sine';
  breathLfo.frequency.setValueAtTime(0.09, now);
  breathDepth.gain.setValueAtTime(110, now);
  breathLfo.connect(breathDepth);
  breathDepth.connect(tubeFilter.frequency);
  breathLfo.start(now);

  // Harmonic stack:
  // - 32.70 Hz (C1): Tuvan kargyraa / Tibetan dungchen sub-octave
  // - 65.41 Hz (C2): Kyuss "Gardenia" / OM C-Standard fundamental
  // - 98.11 Hz (G2 = 3/2 * 65.41 Hz): Rung 0 Bonobo 3/2 Just-Intonation Fifth
  // - 196.22 Hz (G3 = 3 * 65.41 Hz): Gyuto Monks mdzo-skad third-harmonic overtone
  // - 174 Hz / 396 Hz / 528 Hz: Solfeggio 3-6-9 resonant overtones
  const voices = [
    { freq: 32.703, type: 'sine', gain: 0.055 },
    { freq: 65.406, type: 'sawtooth', gain: 0.048 },
    { freq: 98.109, type: 'triangle', gain: 0.042 },
    { freq: 174.0, type: 'sine', gain: 0.022 },
    { freq: 196.218, type: 'triangle', gain: 0.030 },
    { freq: 396.0, type: 'sine', gain: 0.015 },
    { freq: 528.0, type: 'sine', gain: 0.012 }
  ];

  const oscillators = [breathLfo];
  voices.forEach((v) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = v.type;
    osc.frequency.setValueAtTime(v.freq, now);
    g.gain.setValueAtTime(v.gain, now);
    osc.connect(g);
    g.connect(tubeFilter);
    osc.start(now);
    oscillators.push(osc);
  });

  state.kyussTibetanActive = true;
  state.kyussTibetanEngine = { masterGain, oscillators };
  updateKyussTibetanButtons();
  showToast('🎸☸ Playing: 65.4Hz C-Standard Desert Fuzz (Kyuss/OM) × Tibetan Mdzo-Skad & Solfeggio (p/q = 3/2)');
}

function stopKyussTibetanDrone() {
  if (!state.kyussTibetanActive || !state.kyussTibetanEngine) return;
  state.kyussTibetanActive = false;
  const engine = state.kyussTibetanEngine;
  state.kyussTibetanEngine = null;

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

  updateKyussTibetanButtons();
  showToast('🎸☸ Paused: 65.4Hz C-Standard Desert Fuzz × Tibetan Chant');
}

function toggleKyussTibetanDrone() {
  if (state.kyussTibetanActive) {
    stopKyussTibetanDrone();
  } else {
    startKyussTibetanDrone();
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

  // Heimleið Tagelharpa + Odin n+1||[X] Layer (#69,633) toggle (Edition 011)
  document.querySelectorAll('.btn-toggle-heimleid-odin').forEach((btn) => {
    btn.addEventListener('click', toggleHeimleidOdin);
  });

  // 65.4 Hz C-Standard Desert Fuzz (Kyuss/OM) × Tibetan Mdzo-Skad Chant toggle (Edition 023)
  document.querySelectorAll('.btn-toggle-kyuss-tibetan').forEach((btn) => {
    btn.addEventListener('click', toggleKyussTibetanDrone);
  });
});
