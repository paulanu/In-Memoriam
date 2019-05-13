function Player(game, x, y, key){
    Phaser.Sprite.call(this, game, x, y, key);

    game.physics.arcade.enable(this);
    this.body.bounce.y = 0.10;
    this.body.gravity.y =800;
    this.body.collideWorldBounds = true;
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
    cursors = game.input.keyboard.createCursorKeys();//to make the player to move by using keyboard
        player.body.velocity.x = 0;
        //block.body.velocity.x = 0;
       if (cursors.left.isDown){//move to left
           player.body.velocity.x = -150;
           //player.animations.play('left');
       }
       if (cursors.right.isDown){
           player.body.velocity.x =150;//move to right
           //player.animations.play('right');

       }
       if(cursors.up.isDown && player.body.touching.down){//if player is tounching the ground
           player.body.velocity.y = -350;//player can jump
       }
}

