const fs = require('fs');
const base = 'C:/Users/matt/clawd/ninjachop/';

// All asset paths referenced in the game (manually extracted from code)
const paths = [
    // Player
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/NinjaGreen/SeparateAnim/Walk.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/NinjaGreen/SeparateAnim/Idle.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/NinjaGreen/SeparateAnim/Attack.png',
    // NPCs
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/Villager/SeparateAnim/Walk.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/Villager/SeparateAnim/Idle.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/Villager2/SeparateAnim/Walk.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/Villager2/SeparateAnim/Idle.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/OldMan/SeparateAnim/Walk.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/OldMan/SeparateAnim/Idle.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/Skeleton/SeparateAnim/Walk.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Characters/Skeleton/SeparateAnim/Idle.png',
    // Monsters
    'assets/Ninja Adventure - Asset Pack/Actor/Monsters/Slime/Slime.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Monsters/Fish/SpriteSheet.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Monsters/Mushroom/mushroom.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Monsters/Larva/Larva.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Monsters/Lizard/Lizard.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Monsters/Snake/Snake.png',
    'assets/Ninja Adventure - Asset Pack/Actor/Monsters/Dragon/SpriteSheet.png',
    // Tilesets
    'assets/Ninja Adventure - Asset Pack/Backgrounds/Tilesets/TilesetField.png',
    'assets/Ninja Adventure - Asset Pack/Backgrounds/Tilesets/TilesetNature.png',
    'assets/Ninja Adventure - Asset Pack/Backgrounds/Tilesets/TilesetHouse.png',
    'assets/Ninja Adventure - Asset Pack/Backgrounds/Tilesets/TilesetWater.png',
    'assets/Ninja Adventure - Asset Pack/Backgrounds/Tilesets/TilesetDesert.png',
    'assets/Ninja Adventure - Asset Pack/Backgrounds/Tilesets/TilesetElement.png',
    // Particles
    'assets/Ninja Adventure - Asset Pack/FX/Particle/Grass.png',
    'assets/Ninja Adventure - Asset Pack/FX/Particle/Spark.png',
    // Music
    'assets/Ninja Adventure - Asset Pack/Audio/Musics/1 - Adventure Begin.ogg',
    'assets/Ninja Adventure - Asset Pack/Audio/Musics/5 - Peaceful.ogg',
    'assets/Ninja Adventure - Asset Pack/Audio/Musics/3 - Revelation.ogg',
    'assets/Ninja Adventure - Asset Pack/Audio/Musics/37 - Dark Forest.ogg',
    'assets/Ninja Adventure - Asset Pack/Audio/Musics/28 - Tension.ogg',
    'assets/Ninja Adventure - Asset Pack/Audio/Musics/10 - Dark Castle.ogg',
    // SFX
    'assets/Ninja Adventure - Asset Pack/Audio/Sounds/Bonus/Coin.wav',
    'assets/Ninja Adventure - Asset Pack/Audio/Sounds/Bonus/Bonus2.wav',
    'assets/Ninja Adventure - Asset Pack/Audio/Sounds/Bonus/Bonus3.wav',
];

let missing = 0;
paths.forEach(p => {
    const full = base + p;
    const exists = fs.existsSync(full);
    if(!exists) { console.log('MISS', p); missing++; }
    else console.log('OK  ', p);
});
console.log('\n' + missing + ' missing out of ' + paths.length);
