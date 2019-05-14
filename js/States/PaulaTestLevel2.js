// play state
var ground; var ledge; var tree;
var PaulaTestLevel2 = function() { 
	//platforms group
	var platforms; 

	//the fade in rect
	var fadeInRect;
};
PaulaTestLevel2.prototype = { 

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
		var background = game.add.sprite(0, 0, 'stage1_bg_bw');

 		//add tree
		tree = game.add.sprite(250, 0, 'stage1_tree_bw');
		game.physics.arcade.enable(tree);
		tree.body.immovable = true;
		tree.body.setSize(90, 75, 5, 260);

		//player physics properties
		player = game.add.sprite(this.playerX, this.playerY, 'player_animation');
		player.anchor.x = 0.5;
		player.scale.x = this.facing;
		game.physics.arcade.enable(player);
<<<<<<< HEAD
		player.body.bounce.y =0.10;
=======
>>>>>>> b1bd6c177807c025f6ca5106041ea58ee5df2306
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
		player.animations.add('stand', [8], 6, true);
		player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7], 6, true);
		player.animations.add('jump', [9], 12, true);
		player.body.setSize(45, 170, 65, 96);

 	 	// create platforms group
        platforms = game.add.group();
        platforms.enableBody = true; 

	    //create the ground
	    ground = platforms.create(0, game.world.height - 76, 'grass_ground_bw');
		ground.body.immovable = true; 
		ground.body.setSize(ground.body.width, ground.body.height - 10, 0, 50);

		//this is just to fill in the gap btwn the ledge and the ground
	  	ledge = platforms.create(300, 250, 'grass_platform_sepia');
		ledge.body.immovable = true;
		ledge.angle = 5;
		ledge.body.setSize(ledge.body.width, ledge.body.height - 10, 50, 50);

	    //create ledge
	  	ledge = platforms.create(300, 150, 'grass_platform_bw');
		ledge.body.immovable = true;
		ledge.body.setSize(ledge.body.width, ledge.body.height - 10, 50, 50);

	    //create fade in rect
	    fadeInRect = game.add.sprite(0, 0, 'fade_in');

	    // play standing animation
	    player.animations.play('stand');
<<<<<<< HEAD

	    rock = game.add.sprite(500, -100, 'rock_bw');
	    rock.enableBody = true;
	    game.physics.arcade.enable(rock);
	    rock.body.bounce.y = 0.2;

	    rock.body.gravity.y =100;
	    rock.body.immovable = false;
	    rock.body.collideWorldBounds = true;
=======
>>>>>>> b1bd6c177807c025f6ca5106041ea58ee5df2306

    },

	render: function() {

	    game.debug.body(ground);
	    game.debug.body(ledge);
	    game.debug.body(player);
	    game.debug.body(tree);
<<<<<<< HEAD
	    game.debug.body(rock);
=======
>>>>>>> b1bd6c177807c025f6ca5106041ea58ee5df2306

	},


    update: function() {
    	// switch to sepia world
    	enterMemoryOrPresent('PaulaTestLevel');

<<<<<<< HEAD
    	//rock.body.velocity.x =0;

=======
>>>>>>> b1bd6c177807c025f6ca5106041ea58ee5df2306
    	// space to go to GameOver state
        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GameOver');
        }

        // collisions
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(player, tree);
<<<<<<< HEAD
        game.physics.arcade.collide(rock, platforms);
	    game.physics.arcade.collide(rock, player);
=======
>>>>>>> b1bd6c177807c025f6ca5106041ea58ee5df2306

        // set player variables that need to be passed
        this.playerX = player.x;
        this.playerY = player.y;
        this.facing = player.scale.x;

        //-----------TEMPORARY CONTROLS---------------------//
        // set player velocity
	    player.body.velocity.x = 0;

	    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) // move left
	    {
<<<<<<< HEAD
	        player.body.velocity.x = -150;
=======
	        player.body.velocity.x = -100;
>>>>>>> b1bd6c177807c025f6ca5106041ea58ee5df2306
	        player.animations.play('walk');
	        player.scale.x = -1;
	    }
	 	else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) // move right
	    {
<<<<<<< HEAD
	        player.body.velocity.x = 150;
=======
	        player.body.velocity.x = 100;
>>>>>>> b1bd6c177807c025f6ca5106041ea58ee5df2306
	       	player.animations.play('walk');
	       	player.scale.x = 1;
	    }
	    else
	    {
	    	player.animations.play('stand'); // stand
	    }
	    
	    //jump if player is touching the ground
	    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && player.body.touching.down) // jump if player is touching the ground
<<<<<<< HEAD
	    {
	        player.body.velocity.y =  -350;
		}

	    if (!player.body.touching.down) // player jump animation
	    {
=======
	    {
	        player.body.velocity.y =  -350;
		}

	    if (!player.body.touching.down) // player jump animation
	    {
>>>>>>> b1bd6c177807c025f6ca5106041ea58ee5df2306
	    	player.animations.play('jump');
	    }

	    //if((game.physics.arcade.collide(player, rock)) && (game.input.keyboard.isDown(Phaser.Keyboard.S))){
	    	if((game.input.keyboard.isDown(Phaser.Keyboard.S)) && (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))){
	    		
	    		 //rock.body.velocity = 0;
	    		 game.physics.arcade.collide(rock, player);
	    		 player.body.velocity.x = -150;
                 rock.body.velocity.x = -300;
                
                 }
            if((game.input.keyboard.isDown(Phaser.Keyboard.S)) && (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))){
            	game.physics.arcade.collide(rock, player);
	    		 player.body.velocity.x = 150;
                 rock.body.velocity.x = 100;

            }



	    

	    //game.physics.arcade.overlap(player, rock, table, null, this);

	    //------------------------------------------------//
    }
}
//}

function table (player, block){
  if(game.input.keyboard.isDown(Phaser.keyboard.S)){
   // block.body.velocity = 0;
    //if(cursors.left.isDown){
      block.body.velocity.x = -150;
    //}
    //if(cursors.right.isDown){
      //block.body.velocity.x = 150;
    //}
  }
}

