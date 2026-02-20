# CHOPMATH — ASSET MAPPING REFERENCE
**Addendum to CHOPMATH-GAME-SPEC.md**  
**Asset Pack:** `Ninja Adventure - Asset Pack.zip` (this folder)  
**All paths below are relative to:** `assets/Ninja Adventure - Asset Pack/`

---

## SETUP

1. Unzip `Ninja Adventure - Asset Pack.zip` into the project `assets/` folder
2. Result: `assets/Ninja Adventure - Asset Pack/Actor/`, `Audio/`, `Backgrounds/`, `FX/`, `Items/`, `Ui/`
3. All Phaser `preload()` calls use path prefix: `assets/Ninja Adventure - Asset Pack/`

---

## PLAYER CHARACTER (HIRO)

Use **NinjaGreen**. Each character has `SeparateAnim/` files — use these (individual PNG per animation, easier to load than spritesheet).

| Game Purpose | Asset Path |
|-------------|-----------|
| Hiro Idle | `Actor/Characters/NinjaGreen/SeparateAnim/Idle.png` |
| Hiro Walk | `Actor/Characters/NinjaGreen/SeparateAnim/Walk.png` |
| Hiro Attack (slash) | `Actor/Characters/NinjaGreen/SeparateAnim/Attack.png` |
| Hiro Hurt / Death | `Actor/Characters/NinjaGreen/SeparateAnim/Dead.png` |
| Hiro Item Use | `Actor/Characters/NinjaGreen/SeparateAnim/Item.png` |
| Hiro Full Sheet (fallback) | `Actor/Characters/NinjaGreen/SpriteSheet.png` |
| Hiro Face (UI portrait) | `Actor/Characters/NinjaGreen/Faceset.png` |

### KAGE — Final Boss (uses NinjaDark)

| Game Purpose | Asset Path |
|-------------|-----------|
| Kage Idle | `Actor/Characters/NinjaDark/SeparateAnim/Idle.png` |
| Kage Attack | `Actor/Characters/NinjaDark/SeparateAnim/Attack.png` |
| Kage Hurt | `Actor/Characters/NinjaDark/SeparateAnim/Dead.png` |
| Kage Walk | `Actor/Characters/NinjaDark/SeparateAnim/Walk.png` |
| Kage Face (UI) | `Actor/Characters/NinjaDark/Faceset.png` |

> Note: Kage is character-sized (not Giant) — intentional. He's a dark mirror of Hiro.

---

## BOSS SPRITES

| Boss (Spec Name) | Land | Asset Folder | Files to Use |
|-----------------|------|-------------|-------------|
| Grass Golem | 1 — Meadow | `Actor/Boss/GiantSlime/` | `Idle.png`, `Hit.png`, `Jump.png` |
| River Serpent | 2 — River | `Actor/Boss/GiantFrog/` | `Idle40x40.png`, `Attack.png`, `Hit.png` |
| Bamboo Oni | 3 — Bamboo | `Actor/Boss/GiantBamboo/` | `Idle.png`, `Walk.png`, `Attack.png`, `Hit.png`, `Charge.png` |
| Shadow Knight | 4 — Citadel | `Actor/Boss/GiantBlueSamurai/` | `Idle.png`, `Walk.png`, `AttackLeft.png`, `Hit.png` |
| KAGE (3 phases) | 5 — Fortress | `Actor/Characters/NinjaDark/` | All `SeparateAnim/` files |

---

## ENEMY MONSTERS BY LAND

Each folder has `Faceset.png` (portrait/HUD) and `SpriteSheet.png` (animated sprite).

### Land 1 — Meadow Village (Addition)

| Enemy Name | Asset Path | Shield Type |
|-----------|-----------|------------|
| Grass Slime | `Actor/Monsters/Slime/SpriteSheet.png` | Dirt Shield |
| Leaf Bug | `Actor/Monsters/Butterfly/SpriteSheet.png` | None |
| Mud Crab | `Actor/Monsters/Mollusc/SpriteSheet.png` | Iron Shell |
| Vine Snake | `Actor/Monsters/Snake/SpriteSheet.png` | None |

### Land 2 — River Crossing (Subtraction)

| Enemy Name | Asset Path | Shield Type |
|-----------|-----------|------------|
| River Fish | `Actor/Monsters/Fish/SpriteSheet.png` | Water Shield |
| Blue Bat | `Actor/Monsters/BlueBat/SpriteSheet.png` | None |
| Kappa | `Actor/Monsters/KappaGreen/SpriteSheet.png` | Combo Shield |
| Axolotl | `Actor/Monsters/Axolot/SpriteSheet.png` | Phase Shield |

### Land 3 — Bamboo Forest (Easy Multiply 2×–5×)

| Enemy Name | Asset Path | Shield Type |
|-----------|-----------|------------|
| Bamboo Sprite | `Actor/Monsters/Bamboo/SpriteSheet.png` | Mirror Shield |
| Panda | `Actor/Monsters/Panda/SpriteSheet.png` | Combo Shield |
| Yellow Bamboo | `Actor/Monsters/BambooYellow/SpriteSheet.png` | Split Shield |
| Forest Owl | `Actor/Monsters/Owl/SpriteSheet.png` | Invisible Shield |

### Land 4 — Shadow Citadel (Hard Multiply + Division)

| Enemy Name | Asset Path | Shield Type |
|-----------|-----------|------------|
| Shadow Skull | `Actor/Monsters/Skull/SpriteSheet.png` | Absorb Shield |
| Blue Skull | `Actor/Monsters/SkullBlue/SpriteSheet.png` | Double Shield |
| Dark Spirit | `Actor/Monsters/Spirit/SpriteSheet.png` | Rage Shield |
| Cyclops | `Actor/Monsters/Cyclope/SpriteSheet.png` | Counter Shield |

### Land 5 — Kage's Fortress (Mixed Operations)

| Enemy Name | Asset Path | Shield Type |
|-----------|-----------|------------|
| Shadow Clone (Hiro) | `Actor/Characters/NinjaGray/SpriteSheet.png` | Random Shield |
| Eye Beast | `Actor/Monsters/Eye/Eye.png` | Katana Parry |
| Dark Dragon | `Actor/Monsters/Dragon/SpriteSheet.png` | Double Shield |
| Kage Clone | `Actor/Characters/NinjaDark/SpriteSheet.png` | Counter Shield |

---

## TILESETS & BACKGROUNDS

### Overworld Tilesets

| Use | Asset Path |
|-----|-----------|
| Grass / Field (Lands 1–3) | `Backgrounds/Tilesets/TilesetField.png` |
| Dungeon floors (all lands) | `Backgrounds/Tilesets/TilesetDungeon.png` |
| Interior (shops, boss rooms) | `Backgrounds/Tilesets/Interior/TilesetInterior.png` |
| Interior floor | `Backgrounds/Tilesets/Interior/TilesetInteriorFloor.png` |
| Nature details | `Backgrounds/Tilesets/TilesetNature.png` |
| Wall (simple) | `Backgrounds/Tilesets/Interior/TilesetWallSimple.png` |
| Elements / props | `Backgrounds/Tilesets/TilesetElement.png` |

### Combat Backgrounds (Parallax)

Use as background layer behind tilemap in combat scenes. Exact subfolder names may vary — list `Backgrounds/` after extracting and match closest thematically.

| Land | Background | Notes |
|------|-----------|-------|
| Land 1 — Meadow | `Backgrounds/Parallax/` — green/forest variant | |
| Land 2 — River | `Backgrounds/Parallax/` — water/blue variant | |
| Land 3 — Bamboo | `Backgrounds/Parallax/` — bamboo variant | |
| Land 4 — Citadel | `Backgrounds/Parallax/` — castle variant | |
| Land 5 — Fortress | `Backgrounds/Parallax/` — dungeon variant | |

**Fallback:** If no suitable parallax found, use solid color fill:
- Land 1: `#2d5a27` | Land 2: `#1a3a5c` | Land 3: `#1a4a1a` | Land 4: `#1a1a2e` | Land 5: `#0d0d1a`

---

## AUDIO — MUSIC TRACKS

One track per scene. All files in `Audio/Musics/` as `.ogg`.

| Scene / Land | Track File | Vibe |
|-------------|-----------|------|
| Main Menu | `1 - Adventure Begin.ogg` | Upbeat intro |
| Land 1 — Meadow (Overworld) | `33 - Calm Village.ogg` | Peaceful village |
| Land 2 — River (Overworld) | `18 - Aquatic.ogg` | Water, calm |
| Land 3 — Bamboo (Overworld) | `11 - Clearing.ogg` | Open, light |
| Land 4 — Citadel (Overworld) | `37 - Dark Forest.ogg` | Ominous |
| Land 5 — Fortress (Overworld) | `10 - Dark Castle.ogg` | Dark, urgent |
| Combat (all lands) | `17 - Fight.ogg` | Battle energy |
| Boss Fight | `34  - Fight.ogg` | Intense (note: two spaces in filename) |
| Shop | `4 - Village.ogg` | Friendly merchant |
| Death Screen | `7 - Sad Theme.ogg` | Melancholy |
| Victory / Kage Defeated | `24 - Final Area.ogg` | Epic climax |
| Credits / Certificate | `15 - Credit Theme.ogg` | Warm ending |

---

## AUDIO — SOUND EFFECTS

All in `Audio/Sounds/` or `Audio/Jingles/` as `.wav`.

| Game Event | Sound File | Notes |
|-----------|-----------|-------|
| Correct answer | `Audio/Sounds/Bonus/Bonus2.wav` | Short, happy |
| Combo ×3 | `Audio/Sounds/Bonus/PowerUp1.wav` | Energy surge |
| Combo ×8 (Shadow Mode) | `Audio/Sounds/Bonus/PowerUp2.wav` | Bigger surge |
| Wrong answer | `Audio/Sounds/Hit & Impact/` — pick soft hit | Gentle thud, NOT harsh |
| Coin pickup | `Audio/Sounds/Bonus/Coin.wav` | |
| Gold chest open | `Audio/Sounds/Bonus/Gold1.wav` | |
| Level up / Land clear | `Audio/Jingles/LevelUp1.wav` | |
| Boss defeated | `Audio/Jingles/Success1.wav` | |
| Player hurt | `Audio/Sounds/Hit & Impact/` — pick body hit | |
| Game over / Death | `Audio/Jingles/GameOver.wav` | |
| Shop purchase | `Audio/Sounds/Bonus/Gold2.wav` | |
| Victory / Kage killed | `Audio/Jingles/Success4.wav` | Longest success jingle |
| Enemy slash FX | `Audio/Sounds/Whoosh & Slash/` — pick sword slash | For correct-answer slash animation |
| Menu button press | `Audio/Sounds/Menu/` — pick click | |

> Note: Folder names contain spaces and `&`. Use exact names when building file paths.

---

## VISUAL FX & PARTICLES

All in `FX/` folder.

| Game Effect | Asset Path | Notes |
|-----------|-----------|-------|
| Slash animation (correct answer) | `FX/SlashFx/Slash/` | SpriteSheet inside — use Slash or SlashDouble |
| Curved slash (boss hits) | `FX/SlashFx/SlashCurved/` | |
| Combo burst particles | `FX/Particle/Spark.png` | Single PNG for Phaser emitter |
| Grass cut particles | `FX/Particle/Grass.png` | When Hiro cuts grass for coins |
| Leaf particles (Bamboo land) | `FX/Particle/Leaf.png` | Ambient atmosphere |
| Explosion (boss death) | `FX/Elemental/Explosion/SpriteSheet.png` | |
| Shield break effect | `FX/Magic/Shield/` | SpriteSheet inside |
| Shadow Mode aura (×8 combo) | `FX/Magic/Aura/` | Wrap around Hiro |
| Kage shadow burst projectile | `FX/Projectile/EnergyBall.png` | |
| Screen spark on correct | `FX/Magic/Spark/` | Small sparks |
| Smoke puff (wrong answer) | `FX/Smoke/Smoke/` | Gentle, not harsh |

---

## UI ELEMENTS

All in `Ui/` folder.

| UI Purpose | Asset Path | Notes |
|-----------|-----------|-------|
| Dialog box (NPC speech) | `Ui/Dialog/DialogBox.png` | |
| Dialog with portrait | `Ui/Dialog/DialogBoxFaceset.png` | |
| Info / tooltip box | `Ui/Dialog/DialogInfo.png` | Use for shop hints |
| Yes button | `Ui/Dialog/YesButton.png` | Shop purchase confirm |
| No button | `Ui/Dialog/NoButton.png` | Shop purchase cancel |
| Navigation arrow | `Ui/Arrow.png` | Shop item scroll |
| NPC emotes | `Ui/Emote/emote1.png` – `emote27.png` | Merchant reactions |

> Hearts (HP) and coin counter: draw programmatically in Phaser — no matching heart sprite in pack. Use colored rectangles or simple Phaser Graphics objects.

---

## ASSET FALLBACK RULES (NON-NEGOTIABLE)

1. Every `this.load.image()` and `this.load.spritesheet()` must have a fallback colored rectangle if the load fails — check with `this.textures.exists()` in BootScene
2. **Fallback colors:** Player = green rect | Enemies = red rect | Boss = purple rect | Coins = yellow circle | UI = gray rect
3. **Audio failures must be silent** — wrap all `this.sound.play()` in try/catch, never throw on missing file
4. **Parallax fallback:** solid color fill per land (see Tilesets section above)
5. **Phase 1 must be completable with zero real assets** — test with empty `assets/` folder before adding real files

---

## DEPLOYMENT

| Item | Value |
|------|-------|
| Domain | ninjachop.com |
| DNS Provider | Namecheap |
| Server | RunCloud (credentials in PAA / paa2 folders) |
| Deploy type | Static files — no build step |
| Steps | Upload `index.html` + `assets/` folder to RunCloud web root |
| SSL | RunCloud handles Let's Encrypt automatically |

---

## AVAILABLE CHARACTER ROSTER (for reference)

The pack includes these ninja characters — any can be used for NPCs, clones, or variants:

`NinjaBlue`, `NinjaBlue2`, `NinjaBomb`, `NinjaDark`, `NinjaEskimo`, `NinjaGray`, `NinjaGreen`, `NinjaMageBlack`, `NinjaMageOrange`, `NinjaMasked`, `NinjaRed`, `NinjaRed2`, `NinjaYellow`, `RedNinja3`, `Samurai`, `SamuraiBlue`, `SamuraiRed`, `Tengu`, `Tengu2`

All are in `Actor/Characters/{Name}/SeparateAnim/` with: `Idle.png`, `Walk.png`, `Attack.png`, `Dead.png`, `Item.png`, `Jump.png`, `Special1.png`, `Special2.png`
