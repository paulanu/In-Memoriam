
// play state
var PaulaTestLevel = function() { 
	var platforms;
	var cursors;
	var jumpKey;
	var leftKey;
	var player;
	var rightKey;
};
PaulaTestLevel.prototype = { 

	init: function(playerX, playerY, leftKeyIsDown, rightKeyIsDown, playerVelocity) {
		if (playerX != null) {
			player = game.add.sprite(playerX, playerY, 'player');
			if (leftKeyIsDown) {
				leftKey.isDown = true;
				leftKey.isUp = false;
			}
			if (rightKeyIsDown) {
				rightKey.isUp = false;
				rightKey.isDown = true; 
			}
			
		   	game.physics.arcade.enable(player) //enable physics on player
		   	player.body.velocity = playerVelocity;
		   	console.log(player.body.velocity);
		}
	},

	preload: function() {
	    //load assets from the appropriate folder
		jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

	},

    create: function() {
        game.stage.backgroundColor = "#2300d3";


	    //start the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

        platforms = game.add.group(); 
    
	    //create the ground and scale it so it fills the bottom
	    var ground = new Platform(game, 0, game.world.height - 25, 'platform', 0, game.world.width);
	    platforms.add(ground); 

	    //create some ledges
	    var platform = new Platform(game, 350, 350, 'platform', 0);
	    platforms.add(platform); 
	    platform = new Platform(game, 500, 200, 'platform', 0);
	    platforms.add(platform); 

	    console.log(player);
        //---TEMPORARY PLAYER FOR TESTING---//
    	// player = game.add.sprite(32, game.world.height - 150, 'player'); 
   		// game.physics.arcade.enable(player); //enable physics on player
	    
	    //player physics properties
	    player.body.gravity.y = 800; 
	    player.body.collideWorldBounds = true;
	    console.log(player.body);
	    console.log(player); 

	    //controls
	    cursors = game.input.keyboard.createCursorKeys(); 
	    //---------------------------------//

    },

    update: function() {
    	if(game.input.keyboard.justPressed(Phaser.Keyboard.E))
    		switchStates('PaulaTestLevel2', player.position.x, player.position.y, leftKey.isDown,
    			rightKey.isDown, player.body.velocity, null);

        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GameOver');
        }

        game.physics.arcade.collide(player, platforms);

        if (leftKey.isUp && rightKey.isUp) {
        	leftKey.isDown = false;
        	rightKey.isDown = false;
        }

        //-----------TEMPORARY CONTROLS---------------------//
    
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