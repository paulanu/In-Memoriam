
function SwitchItem(game, x, y, SpriteAtlas, Key){
    addGlow(x + 50, y + 50, game.textures﻿.get('key');, 350, true);
    Phaser.Sprite.call(this, game, x, y, SpriteAtlas, Key);
    addGlow(725 + extraWidth, game.world.height - 130, 600, 350, false);

    this.inputEnabled = true;
    this.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'PaulaTestLevel'});
}

SwitchItem.prototype = Object.create(Phaser.Sprite.prototype);
SwitchItem.prototype.constructor = SwitchItem;