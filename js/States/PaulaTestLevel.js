
var PaulaTestLevel = function() { 
	//platforms group
	var platforms; 

	//the player
	var player;
};
PaulaTestLevel.prototype = { 

	init: function(playerX, playerY, leftKeyIsDown, rightKeyIsDown, playerVelocity) {
		//--------HAVE THIS IN EVERY LEVEL----------
		//edge case checks
		if (playerX < 0) playerX = 0;
		if (playerX > game.world.width) playerX = game.world.width - 64; //account for player
		if (playerY < 0) playerY = 0; //account for ground
		if (playerY > game.world.height) playerY = game.world.height - 64;

		player = game.add.sprite(playerX, playerY, 'player');

		//enable physics on player
	   	game.physics.arcade.enable(player) 
	   	player.body.velocity = playerVelocity;

		//below are for making a key press persistent across states
		if (leftKeyIsDown) {
			leftKey.isDown = true;
			leftKey.isUp = false;
		}
		if (rightKeyIsDown) {
			rightKey.isUp = false;
			rightKey.isDown = true; 
		}
		//-----------------------------------------
	},

    create: function() {
        game.stage.backgroundColor = "#2300d3";

	    //start the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    //create platforms group
        platforms = game.add.group(); 
    
	    //create the ground and scale it so it fills the bottom
	    var ground = new Platform(game, 0, game.world.height - 25, 'platform', 0, game.world.width);
	    platforms.add(ground); 

	    //create some ledges
	    var platform = new Platform(game, 350, 350, 'platform', 0);
	    platforms.add(platform); 
	    platform = new Platform(game, 500, 200, 'platform', 0);
	    platforms.add(platform); 
   
	    //player physics properties
	    player.body.gravity.y = 800; 
	    player.body.collideWorldBounds = true;

    },

    update: function() {
    	if(game.input.keyboard.justPressed(Phaser.Keyboard.SHIFT)) {
    		switchStates('PaulaTestLevel2', player.position.x, player.position.y, leftKey.isDown,
    			rightKey.isDown, player.body.velocity, null);
    	}

        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GameOver');
        }

        //collisions
        game.physics.arcade.collide(player, platforms);

        //-----------TEMPORARY CONTROLS---------------------//

        //reset player velocity and do funky key stuff 
        if (leftKey.isUp && rightKey.isUp) {
        	leftKey.isDown = false;
        	rightKey.isDown = false;
        	player.body.velocity.x = 0;
        }    

	    //move left
	    if (leftKey.isDown)
	    {
	        player.body.velocity.x = -150;
	        console.log(player.body.velocity.x);
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