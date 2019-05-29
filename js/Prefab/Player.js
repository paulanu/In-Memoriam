
function Player(game, x, y){
    this.footsteps; 

    Phaser.Sprite.call(this, game, x, y, 'player_animation');

    //physics
    game.physics.arcade.enable(this);
    this.anchor.x = 0.5;
    this.body.bounce.y = 0.10;
    this.body.gravity.y =800;

    //collisions
    this.body.collideWorldBounds = true;
    this.body.setSize(45, 266, 65, 0);

    //animations 
    this.animations.add('stand', [8], 6, true);
    this.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7], 6, true);

}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
    cursors = game.input.keyboard.createCursorKeys();//to make the player move by using keyboard

    //---------MOVEMENT----------------//
    player.body.velocity.x = 0;
    //block.body.velocity.x = 0;
    if (cursors.left.isDown){//move to left
        player.body.velocity.x = -150;
        player.animations.play('walk');
        this.footsteps.play('', 0 , 1, false, false);﻿﻿
        player.scale.x = -1;
    }

    else if (cursors.right.isDown){
        player.body.velocity.x =150;//move to right
        player.animations.play('walk');
        this.footsteps.play('', 0 , 1, false, false);﻿﻿
        player.scale.x = 1;

    }

    else
    {
      player.animations.play('stand'); // stand
    }
    //---------------------------------//
}

