// play state
var PaulaTestLevel2 = function() { 
	var platforms;
	var cursors;
};
PaulaTestLevel2.prototype = { 

	init: function(playerX, playerY, leftKeyIsDown, rightKeyIsDown, playerVelocity) {

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
	},

	preload: function() {
	    //load assets from the appropriate folder
		game.load.image('platform2', '../../assets/img/temp/platform2.png');
	},

    create: function() {
        game.stage.backgroundColor = "#F10700";


	    //start the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

        platforms = game.add.group(); 
    
	    //create the ground and scale it so it fills the bottom
	    var ground = new Platform(game, 0, game.world.height - 25, 'platform2', 0, game.world.width);
	    platforms.add(ground); 

	    //create some ledges
	    var platform = new Platform(game, 350, 350, 'platform2', 0);
	    platforms.add(platform); 
	    platform = new Platform(game, 500, 200, 'platform2', 0);
	    platforms.add(platform); 

        //---TEMPORARY PLAYER FOR TESTING---//
	    // player = game.add.sprite(32, game.world.height - 150, 'player'); 
	    
	    //player physics properties
	    player.body.gravity.y = 800; 
	    player.body.collideWorldBounds = true; 

	    //controls
	    cursors = game.input.keyboard.createCursorKeys(); 
	    //---------------------------------//

    },

    update: function() {
    	if(game.input.keyboard.justPressed(Phaser.Keyboard.E))
    		switchStates('PaulaTestLevel', player.position.x, player.position.y, leftKey.isDown,
    			rightKey.isDown, player.body.velocity, null);

        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GameOver');
        }

        game.physics.arcade.collide(player, platforms);

        if (leftKey.isUp && rightKey.isUp) {
        	player.body.velocity.x = 0; 
        	leftKey.isDown = false;
        	rightKey.isDown = false;
        }

        //-----------TEMPORARY CONTROLS---------------------//
    
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