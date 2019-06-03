var player; 
var grass; 
var extraWidth = 700; //adjust this to change level width


var LevelOnePast = function() { 
	// platforms group
	var platforms;

	// the fade in rect
	var fadeInRect;
};
LevelOnePast.prototype = { 

	init: function(playerX, playerY, facing, fgTilePosX, bgTilePosX, fadeInRectAlpha, transition = true, cameraX = 0) {
		//--------HAVE THIS IN EVERY LEVEL----------
		this.playerX = playerX;
		this.playerY = playerY;
		this.facing = facing;
        this.fgTilePosX = fgTilePosX;
        this.bgTilePosX = bgTilePosX;
        this.fadeInRectAlpha = fadeInRectAlpha;
        this.playTransition = transition;    
        this.cameraX = cameraX;  
		//-----------------------------------------
	},

    create: function() {
	    // start the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    // BACKGROUND ART ELEMENTS
		var background = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
            'levelOneSprites', 'Sepia_BG'
        );

        var backgroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
            'Sepia_BG_Trees'
        );
        var foregroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
            'levelOneSprites', 'Sepia_FG_Trees'
        );

        //initialize parallax (so it is consistent between states)
        backgroundTrees.tilePosition.x = this.bgTilePosX;
        foregroundTrees.tilePosition.x = this.fgTilePosX;

        //LEVEL ELEMENTS
        var car = this.game.add.sprite(-100, game.world.height - 340, 'levelOneSprites', 'Sepia_Car');

        var house = this.game.add.sprite(game.world.width - 410, 0, 'levelOneSprites', 'Sepia_House');

        //Tree with swing 
        var tree = this.game.add.sprite(85 + extraWidth, 0, 'levelOneSprites', 'Sepia_Swing');

        //mailbox
        addGlow(690 + extraWidth, game.world.height - 130, 50, 350, true);
        var mailbox = this.game.add.sprite(650 + extraWidth, game.world.height - 350,
        'levelOneSprites', 'Sepia_Mailbox');
        mailbox.scale.x = .8;
        mailbox.scale.y = .8;
        addGlow(690 + extraWidth, game.world.height - 130, 50, 350, false);
        mailbox.inputEnabled = true;

        //PLAYER
        player = new Player(game, this.playerX, this.playerY, this.facing); 
        player.scale.x = this.facing;
        player.scale.y = .65;
        player.footsteps = game.add.audio('grass_footsteps');
        player.parallaxForeground = foregroundTrees;
    	player.parallaxBackground = backgroundTrees;
        game.add.existing(player);
        game.camera.follow(player);
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 200, 500);

        mailbox.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'LevelOnePresent'});

        //grass
        grass = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140, 
            'levelOneSprites', 'Sepia_Grass');
    	game.physics.arcade.enable(grass);
		grass.body.immovable = true; 
    	grass.body.setSize(grass.body.width, grass.body.height - 10, 0, 50);

    	//music
    	backgroundMusic = game.add.audio('forest');
        backgroundMusic.play('', 0, .3, true);    // ('marker', start position, volume (0-1), loop)


	 //    // create fade in rect
        console.log(this.cameraX);
	    fadeInRect = game.add.sprite(this.cameraX, 0, 'switch_animation');
        fadeInRect.width = game.camera.width;
        fadeInRect.height = game.camera.height;
        fadeInRect.animations.add('switch_animation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10,11,12,13,14,15,16,17,18], 5, false);
        fadeInRect.animations.add('enter_level', [17,16,15,14,13,12,11,10,9,8,
            7,6,5,4,3,2,1,0,19], 5, false);
        fadeInRect.alpha = 1;
        if (this.playTransition) {
            weirdAfWorkAround = game.add.sprite(0, 0, 'fade_in');
            weirdAfWorkAround.width = game.world.width; 
            weirdAfWorkAround.height = game.world.height;
            fadeInRect.animations.play('enter_level', 10, false, false);
        }



    },

	// render: function() {

	//     game.debug.body(grass);
	//     game.debug.body(player);

	// },

    update: function() {
        console.log(fadeInRect.position.x);
        switchAnimation();
    	game.physics.arcade.collide(player, grass);


    	   //      background.tilePosition.x -= 1;
        // foreground.tilePosition.x -= 10;

    	//don't exit left side of screen
 	// 	if (player.position.x < 0)
 	// 		player.position.x = 0;

 	// 	//don't exit left side of screen
 	// 	if (player.position.x > game.world.width)
 	// 		game.state.start('End');

  //   	// switch to bw world
  //   	enterMemoryOrPresent('PaulaTestLevel2');

  //       // collisions
  //       game.physics.arcade.collide(player, platforms);

  //       // set player variables that need to be passed
  //       this.playerX = player.x;
  //       this.playerY = player.y;
  //       this.facing = player.scale.x;

    }
}

