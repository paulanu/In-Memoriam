

parallaxForegroundSpeed = .05;
parallaxBackgroundSpeed = .02;

function Player(game, x, y){
    this.footsteps; 
    this.parallaxForeground;
    this.parallaxBackground; 


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

    if (cursors.left.isDown){//move to left
        player.body.velocity.x = -150;
        
        //animation
        player.animations.play('walk');
        player.scale.x = -1;
        
        //footsteps audio
        this.footsteps.play('', 0 , 1, false, false);﻿﻿
        
        //parallax
        if (this.parallaxForeground != null) {
          this.parallaxForeground.tilePosition.x += parallaxForegroundSpeed;
          this.parallaxBackground.tilePosition.x += parallaxBackgroundSpeed;
        }
    }

    else if (cursors.right.isDown){
        player.body.velocity.x =150;//move to right
        
        //animation
        player.animations.play('walk');
        player.scale.x = 1;
        
        //footsteps audio
        this.footsteps.play('', 0 , 1, false, false);﻿﻿
        
        //parallax
        if (this.parallaxForeground != null) {
          this.parallaxForeground.tilePosition.x -= parallaxForegroundSpeed;
          this.parallaxBackground.tilePosition.x -= parallaxBackgroundSpeed;
        }

    }

    else
    {
      this.footsteps.stop();
      player.animations.play('stand'); // stand
    }
    //---------------------------------//
}

