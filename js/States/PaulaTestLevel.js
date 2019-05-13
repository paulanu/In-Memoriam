var ground;
var ledge;
var PaulaTestLevel = function() { 
	// platforms group
	var platforms;

	// the fade in rect
	var fadeInRect;
};
PaulaTestLevel.prototype = { 

	init: function(playerX, playerY, facing) {
		//--------HAVE THIS IN EVERY LEVEL----------
		this.playerX = playerX;
		this.playerY = playerY;
		this.facing = facing;
		//-----------------------------------------
	},

    create: function() {
	    // start the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    // add bg
		var background = game.add.sprite(0, 0, 'stage1_bg_sepia');

		//add tree
		var tree = game.add.sprite(250, 0, 'stage1_tree_sepia');

		// player physics properties
		player = game.add.sprite(this.playerX, this.playerY, 'player_animation');
		player.anchor.x = 0.5;
		player.scale.x = this.facing;
		game.physics.arcade.enable(player);
		player.body.gravity.y = 600;
		// player.body.collideWorldBounds = true;
		player.animations.add('stand', [8], 6, true);
		player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7], 6, true);
		player.animations.add('jump', [9], 12, true);
				console.log(player.body.width + " " + player.body.height);
		player.body.setSize(45, 266, 65, 0);
    
	    // create platforms group
        platforms = game.add.group();
        platforms.enableBody = true;

	    // create the ground
	    ground = platforms.create(0, game.world.height - 76, 'grass_ground_sepia');
		ground.body.immovable = true; 
		ground.body.setSize(ground.body.width, ground.body.height - 10, 0, 50);

		//this is just to fill in the gap btwn the ledge and the ground
	  	ledge = platforms.create(300, 250, 'grass_platform_sepia');
		ledge.body.immovable = true;
		ledge.angle = 5;
		ledge.body.setSize(ledge.body.width, ledge.body.height - 10, 50, 50);

	    // create ledge
	  	ledge = platforms.create(300, 150, 'grass_platform_sepia');
		ledge.body.immovable = true;
		ledge.body.setSize(ledge.body.width, ledge.body.height - 10, 50, 50);

	    // create fade in rect
	    fadeInRect = game.add.sprite(0, 0, 'fade_in');

	    // play standing animation
	    player.animations.play('stand');

    },

	// render: function() {

	//     game.debug.body(ground);
	//     game.debug.body(ledge);
	//     game.debug.body(player);

	// },

    update: function() {
    	//don't exit left side of screen
 		if (player.position.x < 0)
 			player.position.x = 0;

 		//don't exit left side of screen
 		if (player.position.x > game.world.width)
 			game.state.start('End');

    	// switch to bw world
    	enterMemoryOrPresent('PaulaTestLevel2');

    	// space to go to GameOver state
        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GameOver');
        }

        // collisions
        game.physics.arcade.collide(player, platforms);

        // set player variables that need to be passed
        this.playerX = player.x;
        this.playerY = player.y;
        this.facing = player.scale.x;

        //-----------TEMPORARY CONTROLS---------------------//
	    // set player velocity
	    player.body.velocity.x = 0;

	    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) // move left
	    {
	        player.body.velocity.x = -100;
	        player.animations.play('walk');
	        player.scale.x = -1;
	    }
	 	else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) // move right
	    {
	        player.body.velocity.x = 100;
	       	player.animations.play('walk');
	       	player.scale.x = 1;
	    }
	    else
	    {
	    	player.animations.play('stand'); // stand
	    }
	    
	    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && player.body.touching.down) // jump if player is touching the ground
	    {
	        player.body.velocity.y =  -200;
		}

	    if (!player.body.touching.down) // player jump animation
	    {
	    	player.animations.play('jump');
	    }

	    //------------------------------------------------//
    }
}