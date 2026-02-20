# CHOPMATH — COMPLETE GAME SPECIFICATION
**Domain:** ninjachop.com | **Server:** RunCloud | **Engine:** Phaser 3.60 (CDN)

---

## WHAT THIS IS

A math fact fluency RPG for kids ages 8–12, especially those with ADHD or dyslexia. Math IS the combat mechanic — Hiro slashes enemies by answering math problems. No timers. No multiple choice. No punishment for wrong answers. Just dopamine, ninja vibes, and repetition that builds mastery.

**Single file:** `index.html` — all JS inline, Phaser via CDN, no build tools.  
**All assets:** `assets/Ninja Adventure - Asset Pack/` (extracted from ZIP in this folder)

---

## TECH STACK

- **Phaser 3.60** — `https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js`
- **Single index.html** — everything inline
- **Canvas:** 480×854 (portrait mobile), `Scale.FIT`, `autoCenter`
- **Physics:** Arcade (no gravity — top-down)
- **Audio:** Web Audio API + OGG/WAV files from asset pack
- **Persistence:** `localStorage` for victory save ONLY — no mid-run saves
- **Font:** Nunito (Google Fonts CDN) — clear numerals, dyslexia-friendly

---

## SCENE ARCHITECTURE (9 Scenes)

| Scene | Purpose |
|-------|---------|
| `BootScene` | Asset preloader with colored rectangle fallbacks |
| `MenuScene` | Title animation, START button |
| `WorldScene` | Overworld exploration, tilemap, grass cutting, coins |
| `CombatScene` | Math battle, numpad, enemy sprites, shields |
| `ShopScene` | Merchant, item grid, coin spending |
| `BossScene` | Extends CombatScene — phase transitions |
| `DeathScene` | Run summary with stats |
| `VictoryScene` | Scroll assembly, Ninja Certificate, print button |
| `UIScene` | Persistent HUD overlay — hearts, coins, streak |

---

## THE FIVE LANDS

Each land = one math operation. Unlocks sequentially after boss defeat.

| Land | Name | Operation | Boss | Boss HP | Reward |
|------|------|-----------|------|---------|--------|
| 1 | Meadow Village | Addition (sums 7–18) | Grass Golem | 6 | Fragment of Sums |
| 2 | River Crossing | Subtraction (minuends 11–18) | River Serpent | 8 | Fragment of Difference |
| 3 | Bamboo Forest | Multiplication 2×–5× | Bamboo Oni | 10 | Fragment of Products |
| 4 | Shadow Citadel | Multiplication 6×–9×, Division | Shadow Knight | 12 | Fragment of Division |
| 5 | Kage's Fortress | Mixed operations | KAGE | 18 | The Restored Scroll |

---

## CORE LOOP

1. **EXPLORE** overworld — WASD/arrows move Hiro top-down, cut grass for coins (70% drop rate)
2. **COLLECT** coins — from grass and chests (3–5 per land)
3. **SHOP** — merchant sells 8 items, all purchased with coins
4. **PAY DUNGEON TOLL** — 60–150 coins to enter dungeon (required gate)
5. **COMBAT** — navigate dungeon rooms, math problems appear above enemies
6. **BOSS FIGHT** — defeat boss, collect scroll fragment, next land unlocks

---

## COMBAT MECHANIC

- Math problem appears in **glowing orb** above enemy
- **On-screen numpad** — 3×4 grid: 1–9, ⌫, 0, GO (Phaser GameObjects ONLY — never HTML)
- **Keyboard:** 0–9, Enter, Backspace, Escape
- **Correct:** slash animation + particle burst + floating score + combo tracking
- **Wrong:** red screen flash, correct answer shown 2.5s, problem re-queued, combo resets
- **NEVER say "wrong" or "incorrect"** — show correct answer and move on

### Combo System
| Streak | Effect |
|--------|--------|
| 3× | Glow around Hiro |
| 5× | Energy pulse |
| 8× | **Shadow Mode** — double damage, aura FX |

### Hearts
- Start with 5 hearts
- Only certain shield types cause heart loss on wrong answers
- Death = full run reset (no mid-run save)

---

## SHIELD SYSTEM (14 Types)

| Shield | Behavior |
|--------|---------|
| Dirt Shield | 2 correct answers to break |
| Water Shield | 3-answer streak required |
| Iron Shell | Half damage (2 correct per HP) |
| Phase Shield | Re-activates every 3rd hit, bonus problem to remove |
| Mirror Shield | Wrong answer costs Hiro 1 heart |
| Combo Shield | Only 2+ streaks deal damage |
| Split Shield | Boss splits at 50% HP — defeat both halves |
| Katana Parry | Random 1× per fight, just re-answer same problem |
| Double Shield | Iron Shell + Combo Shield combined |
| Absorb Shield | Wrong answers HEAL enemy 1 HP |
| Random Shield | Randomly assigned each fight |
| Invisible Shield | Hidden until player discovers it |
| Rage Shield | Activates after 2 wrong answers in a row |
| Counter Shield | Wrong answer = automatic 1 heart damage |

---

## ENEMY ROSTER

### Land 1 — Meadow Village (Addition)
| Enemy | Shield | HP | Coins |
|-------|--------|-----|-------|
| Grass Slime | Dirt Shield | 2 | 5 |
| Leaf Bug | None | 1 | 3 |
| Mud Crab | Iron Shell | 3 | 7 |
| Vine Snake | None | 2 | 4 |
| **BOSS: Grass Golem** | Regen Shield | 6 | — |

### Land 2 — River Crossing (Subtraction)
| Enemy | Shield | HP | Coins |
|-------|--------|-----|-------|
| River Fish | Water Shield | 3 | 6 |
| Blue Bat | None | 1 | 4 |
| Kappa | Combo Shield | 4 | 8 |
| Axolotl | Phase Shield | 3 | 7 |
| **BOSS: River Serpent** | Phase Shield | 8 | — |

### Land 3 — Bamboo Forest (Easy Multiply)
| Enemy | Shield | HP | Coins |
|-------|--------|-----|-------|
| Bamboo Sprite | Mirror Shield | 3 | 8 |
| Panda | Combo Shield | 4 | 9 |
| Yellow Bamboo | Split Shield | 4 | 10 |
| Forest Owl | Invisible Shield | 2 | 7 |
| **BOSS: Bamboo Oni** | Split Shield (50% HP) | 10 | — |

### Land 4 — Shadow Citadel (Hard Multiply + Division)
| Enemy | Shield | HP | Coins |
|-------|--------|-----|-------|
| Shadow Skull | Absorb Shield | 4 | 12 |
| Blue Skull | Double Shield | 5 | 14 |
| Dark Spirit | Rage Shield | 3 | 10 |
| Cyclops | Counter Shield | 4 | 12 |
| **BOSS: Shadow Knight** | Absorb Shield | 12 | — |

### Land 5 — Kage's Fortress (Mixed)
| Enemy | Shield | HP | Coins |
|-------|--------|-----|-------|
| Shadow Clone | Random Shield | 4 | 15 |
| Eye Beast | Katana Parry | 3 | 12 |
| Dark Dragon | Double Shield | 6 | 18 |
| Kage Clone | Counter Shield | 5 | 16 |
| **BOSS: KAGE** | 3-phase (see below) | 18 | — |

---

## KAGE — FINAL BOSS (3 Phases)

### Phase 1 (18→12 HP)
- Sends shadow clones that each have a math problem
- Math: Addition + Subtraction review (easy warm-up)
- No heart damage

### Phase 2 (12→6 HP)
- **Counter Shield** activates — wrong answer = 1 heart damage
- Math: Hard multiply + divide (6×–9×, 63÷9 type)
- Faster attack pattern

### Phase 3 (6→0 HP)
- No shield — full damage every hit
- Math: Mixed all operations, weighted toward hardest facts
- At 3 HP: **Shadow Burst** — 3 rapid-fire problems in a row
- Defeat = victory

---

## SHOP SYSTEM

All items cost coins. Persist for entire run. Lost on death.

| Item | Cost | Effect |
|------|------|--------|
| Bamboo Shield | 30 | Absorbs 1 wrong answer |
| Scroll Hint | 20 | Shows visual hint (number line/grid) |
| Speed Sandals | 50 | 40% faster movement |
| Double Edge | 40 | Next 3 correct = double damage |
| Coin Magnet | 25 | 2× coins for 5 minutes |
| Health Potion | 35 | Restore 2 hearts |
| Dungeon Key | 60–150 | REQUIRED to enter dungeon |
| Combo Cloak | 45 | First wrong answer doesn't break streak |

---

## MATH PROBLEM SETS

### Land 1 — Addition (40 problems, sums 7–18)
Hard addition facts only: 6+7, 7+8, 8+9, 9+9, 7+7, 8+8, 6+8, 9+8, 6+9, 7+9, etc.

### Land 2 — Subtraction (36 problems, minuends 11–18)
11–2 through 18–9 (inverses of Land 1 facts)

### Land 3 — Easy Multiply (28 problems, 2×–5×)
2×3 through 5×9 — skip trivial facts (×0, ×1, ×2 under 10)

### Land 4 — Hard Multiply + Division (32 problems)
6×6 through 9×9 + inverses: 36÷6 through 81÷9

### Land 5 — Mixed (random from all pools)
Weighted toward hardest: 7×8, 8×9, 56÷7, 63÷9, 17–9, 9+8

---

## SAVE SYSTEM — NINJA CODES

Multiple kids share one device. Each gets a personal **Ninja Code** — a short pronounceable code they write on paper and type back in to resume.

### Code Format
`[ADJECTIVE]-[ANIMAL]-[4 digits]` — e.g. `RED-FOX-7842`, `DARK-OWL-3391`

- Generated on first play (no account, no login)
- Shown prominently after every land boss defeat: "Write this down! Your Ninja Code: RED-FOX-7842"
- Re-enter code on the main menu to resume
- Multiple codes can exist in localStorage simultaneously

### When Saves Happen

Saves occur after **every second land boss** — Land 2 (River Serpent) and Land 4 (Shadow Knight) only. Defeating Land 1, 3, or 5 bosses does NOT trigger a save. This preserves meaningful consequence while not forcing kids to replay 2+ hours.

| Boss Defeated | Save Triggered? | Resumes At |
|---------------|----------------|-----------|
| Land 1 — Grass Golem | ❌ No | — |
| Land 2 — River Serpent | ✅ YES | Land 3 entrance |
| Land 3 — Bamboo Oni | ❌ No | — |
| Land 4 — Shadow Knight | ✅ YES | Land 5 entrance |
| Land 5 — KAGE | ✅ YES (victory save) | Victory screen |

Show save prompt immediately after boss death animation: "CHECKPOINT! Write down your Ninja Code: RED-FOX-7842"

### What Gets Saved (after Land 2 and Land 4 boss defeats)
```javascript
localStorage.setItem('chopmath_' + ninjaCode, JSON.stringify({
  ninjaCode: 'RED-FOX-7842',
  landsCompleted: 2,           // 2 or 4 — resumes at next land
  heartsRemaining: 4,          // hearts at time of save
  coinsRemaining: 120,         // coins at time of save
  inventory: ['speedSandals', 'comboCloak'],
  totalProblems: 147,
  totalCorrect: 131,
  bestCombo: 12,
  hardestFact: '7 × 8',
  savedAt: new Date().toISOString()
}));
```

### What DOES NOT Save (mid-run death still resets these)
- Current dungeon room position
- Current enemy HP
- Problems answered in current combat session
- Coins collected since last land boss

### Code Entry UI (Main Menu)
- "NEW QUEST" button — generates new Ninja Code, starts fresh
- "CONTINUE" button — opens text input for Ninja Code
- If code not found: "That code wasn't found. Check your spelling — codes look like RED-FOX-7842"
- Show last 3 used codes as quick-tap buttons (stored in a separate localStorage key)

### Ninja Code Generation
```javascript
const adjectives = ['RED','BLUE','DARK','SWIFT','BOLD','IRON','JADE','GOLD','SHADOW','STORM'];
const animals = ['FOX','OWL','WOLF','BEAR','HAWK','LYNX','CRANE','TIGER','PANDA','VIPER'];
const digits = Math.floor(1000 + Math.random() * 9000);
const code = adjectives[random] + '-' + animals[random] + '-' + digits;
```

### Certificate Enhancement
On victory, Ninja Certificate shows:
- Ninja Code (so they can still replay or show friends)
- "You mastered all 5 lands, RED-FOX-7842!"

---

## VICTORY SCREEN — NINJA CERTIFICATE

After defeating Kage, show a printable certificate:
- Kid types their name
- Date completed
- Accuracy with star rating: ★★★ = 90%+, ★★ = 75%+, ★ = any
- Best combo
- Hardest fact: "7 × 8 = 56 — Now you know it forever!"
- **PRINT button** — `window.print()`

---

## BUILD PHASES

### Phase 1 — Foundation
- Phaser config, BootScene, MenuScene
- WorldScene: Hiro movement (WASD/arrows), grass cutting, coin counter
- NO combat yet — just explore and collect

### Phase 2 — Combat Core
- CombatScene: numpad (Phaser GameObjects only), correct/wrong feedback
- Hearts system, enemy defeat, room progression

### Phase 3 — World Completeness
- Dungeon door + toll gate, shop, chests, NPCs
- Land 1 complete (overworld → dungeon → boss → victory screen for land)

### Phase 4 — Shield System + Lands 2–4
- All 14 shields implemented as state machines
- Lands 2–4 enemies, bosses, combo system
- DeathScene with run stats

### Phase 5 — Land 5 + KAGE
- Kage's Fortress, 3-phase boss fight
- VictoryScene + Ninja Certificate + localStorage save

### Phase 6 — Polish
- Button states, scene transitions, mobile D-pad overlay
- Audio integration (see asset appendix for track assignments)
- New Game+ option after victory

---

## CRITICAL RULES — NON-NEGOTIABLE

- **NEVER** use HTML elements for game UI — Phaser GameObjects only
- **NEVER** show a visible timer
- **NEVER** use multiple choice answers
- **NEVER** say "wrong" or "incorrect"
- **NEVER** make wrong answers directly damage hearts (shield mechanics handle exceptions)
- **NEVER** skip particle system — it's the primary dopamine reward
- **NEVER** save mid-run progress
- **NEVER** use fonts smaller than 18px
- **NEVER** hard-block on missing assets — always use colored rectangle fallbacks
- **ALWAYS** test Phase 1 with empty assets/ folder before adding real sprites

---

## DESIGN PRINCIPLES (Research-Backed)

1. **Typed recall only** — free recall builds stronger memory than recognition
2. **No visible timer** — timed tests cause math anxiety (Boaler 2015)
3. **Positive framing always** — never punish, always reframe wrong as learning
4. **Short sessions** — 10–15 min max, ADHD accommodation
5. **Extrinsic rewards** — dopamine for every correct answer
6. **Large text** — 52px+ for problems, dyslexia accommodation
7. **Nunito font** — clear numerals, 6 and 9 visually distinct
