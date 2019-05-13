// play state
var PaulaTestLevel2 = function() { 
	var platforms;
	var cursors;
};
PaulaTestLevel2.prototype = { 

	init: function(playerX, playerY, leftKeyIsDown, rightKeyIsDown, playerVelocity) {
		//--------HAVE THIS IN EVERY LEVEL----------
		//edge case checks
		if (playerX < 0) playerX = 0;
		if (playerX > game.world.width) playerX = game.world.width - 64; //account for player
		if (playerY < 0) playerY = 0; //account for ground
		if (playerY > game.world.height) playerY = game.world.height - 64;

		player = game.add.sprite(playerX, playerY, 'player_stand');
		var player_stand = player.animations.add('player_stand');
		var walk_right = player.animations.add('player_walk_right');
		var walk_left = player.animations.add('player_walk_left');
		var player_jump = player.animations.add('player_jump');

		//enable physics on player
	   	game.physics.arcade.enable(player) 
	   	player.body.velocity = playerVelocity;

		//below are for making a key press persistent across states
		if (leftKeyIsDown) {
			leftKey.isDown = true;
			leftKey.isUp = false;
			player.animations.play('player_walk_left');
		}
		if (rightKeyIsDown) {
			rightKey.isUp = false;
			rightKey.isDown = true;
			player.animations.play('player_walk_right');
		}
		//-----------------------------------------
	},

    create: function() {
        game.stage.backgroundColor = "#F10700";
        var bg =  game.add.image(0, 0, 'stage1_bg_bw');

	    //start the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

        platforms = game.add.group(); 
    
	    //create the ground and scale it so it fills the bottom
	    var ground = new Platform(game, 0, game.world.height - 76, 'grass_ground_bw');
	    platforms.add(ground); 

	    //create some ledges
	    var platform = new Platform(game, 0, 350, 'grass_platform_bw', 0);
	    platforms.add(platform); 

	    //player physics properties
	    player.body.gravity.y = 800; 
	    player.body.collideWorldBounds = true; 
	    //---------------------------------//

	    //create fade in rect
	    fadeInRect = game.add.sprite(0, 0, 'fade_in');

    },

    update: function() {
    	enterMemoryOrPresent('PaulaTestLevel');

        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GameOver');
        }

        game.physics.arcade.collide(player, platforms);

        //-----------TEMPORARY CONTROLS---------------------//
        if (leftKey.isUp && rightKey.isUp) {
        	player.body.velocity.x = 0; 
        	leftKey.isDown = false;
        	rightKey.isDown = false;
        }
    
	    //move left
	    if (leftKey.isDown)
	    {
	        player.body.velocity.x = -150;
	    }

	    //move right
	    else if (rightKey.isDown)
	    {
	        player.body.velocity.x = 150;
	    }
	    
	    //jump if player is touching the ground
	    if (jumpKey.isDown && player.body.touching.down)
	    {
	        player.body.velocity.y = -500; 
	    }
	    //------------------------------------------------//
    }
}