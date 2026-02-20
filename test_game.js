// Test ChopMath by parsing the index.html and checking for common issues
const fs = require('fs');
const html = fs.readFileSync('C:/Users/matt/clawd/ninjachop/index.html', 'utf8');

// Extract the JS code
const scriptMatch = html.match(/<script>\s*([\s\S]*?)\s*<\/script>\s*<\/body>/);
if (!scriptMatch) { console.log('ERROR: Could not find game script'); process.exit(1); }
const code = scriptMatch[1];

console.log('=== CHECKING GAME CODE ===\n');

// 1. Check all animation keys are created and used consistently
const animCreates = [...code.matchAll(/key:\s*['"]([^'"]+)['"]/g)].map(m => m[1]).filter(k => k !== 'WorldScene' && k !== 'BootScene' && k !== 'MenuScene' && k !== 'UIScene');
const animPlays = [...code.matchAll(/\.play\(['"]([^'"]+)['"]/g)].map(m => m[1]);

console.log('Animations created:', animCreates.length);
console.log('Animation .play() calls:', animPlays.length);

// Check for plays that don't match creates
const createSet = new Set(animCreates);
animPlays.forEach(p => {
    if (!createSet.has(p) && !p.includes('+')) {
        console.log('  WARN: .play("' + p + '") but no matching anims.create');
    }
});

// 2. Check portal system
const hasPortalOverlap = code.includes('physics.add.overlap') && code.includes('enterPortal');
const hasPortalPhysics = code.includes('physics.add.staticSprite') && code.includes('portals.add');
console.log('\nPortal overlap setup:', hasPortalOverlap ? 'OK' : 'MISSING');
console.log('Portal physics bodies:', hasPortalPhysics ? 'OK' : 'MISSING');

// 3. Check if portals group is physics
const portalGroupMatch = code.match(/this\.portals\s*=\s*this\.([\w.]+)\(/);
console.log('Portal group type:', portalGroupMatch ? portalGroupMatch[1] : 'NOT FOUND');

// 4. Check NPC system
const hasGetNearbyNPC = code.includes('getNearbyNPC');
const hasShowDialogue = code.includes('showDialogue');
const npcGroupMatch = code.match(/this\.npcs\s*=\s*this\.([\w.]+)\(/);
console.log('\nNPC getNearbyNPC:', hasGetNearbyNPC ? 'OK' : 'MISSING');
console.log('NPC showDialogue:', hasShowDialogue ? 'OK' : 'MISSING');
console.log('NPC group type:', npcGroupMatch ? npcGroupMatch[1] : 'NOT FOUND');

// 5. Check for Phaser API misuse
const badAPIs = ['cameras.main.setTint', 'make.tilemap', 'animationcomplete'];
badAPIs.forEach(api => {
    if (code.includes(api)) {
        console.log('BAD API FOUND:', api);
    }
});

// 6. Check NPC interaction flow
const updateSection = code.substring(code.indexOf('update()'));
const spaceCheckBeforeAttack = updateSection.indexOf('getNearbyNPC') < updateSection.indexOf('this.attack()');
console.log('\nNPC check before attack in update():', spaceCheckBeforeAttack ? 'OK' : 'WRONG ORDER');

// 7. Check depth values
const depthMatches = [...code.matchAll(/setDepth\((\d+)\)/g)].map(m => ({val: parseInt(m[1]), ctx: code.substring(m.index - 50, m.index + 30)}));
console.log('\nDepth values used:');
depthMatches.forEach(d => {
    const ctx = d.ctx.replace(/\s+/g, ' ').trim();
    console.log('  depth=' + d.val, '-', ctx.substring(ctx.length - 40));
});

// 8. Check enterPortal has grassCut check
const enterPortalSection = code.substring(code.indexOf('enterPortal('));
const hasGrassCutCheck = enterPortalSection.includes('grassCut') && enterPortalSection.includes('grassRequired');
console.log('\nPortal grassCut check:', hasGrassCutCheck ? 'OK' : 'MISSING');

// 9. Check the SPACE key flow more carefully
const spaceFlow = code.match(/JustDown\(this\.spaceKey\)[^}]+getNearbyNPC[^}]+attack/s);
console.log('SPACE → NPC check → attack flow:', spaceFlow ? 'OK' : 'CHECK MANUALLY');

// 10. Verify world configs have sign data for portals
const worldConfigs = code.substring(code.indexOf('const WORLDS'), code.indexOf('class BootScene'));
const signMatches = [...worldConfigs.matchAll(/sign:\s*['"]([^'"]+)['"]/g)];
console.log('\nPortal signs defined:', signMatches.length);
signMatches.forEach(s => console.log('  ', s[1]));

console.log('\n=== CHECK COMPLETE ===');
