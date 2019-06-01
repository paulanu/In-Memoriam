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

	init: function(playerX, playerY, facing, fgTilePosX, bgTilePosX, fadeInRectAlpha) {
		//--------HAVE THIS IN EVERY LEVEL----------
		this.playerX = playerX;
		this.playerY = playerY;
		this.facing = facing;
        this.fgTilePosX = fgTilePosX;
        this.bgTilePosX = bgTilePosX;
        this.fadeInRectAlpha = fadeInRectAlpha;     
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
        addGlow(700 + extraWidth, game.world.height - 130, 50, 350, true);
        var mailbox = this.game.add.sprite(650 + extraWidth, game.world.height - 350,
        'levelOneSprites', 'Sepia_Mailbox');
        addGlow(700 + extraWidth, game.world.height - 130, 50, 350, false);
        mailbox.inputEnabled = true;

        //PLAYER
        player = new Player(game, this.playerX, this.playerY, this.facing); 
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
	    fadeInRect = game.add.sprite(0, 0, 'fade_in');
        fadeInRect.scale.x = 5;
        fadeInRect.alpha = this.fadeInRectAlpha;


    },

	// render: function() {

	//     game.debug.body(grass);
	//     game.debug.body(player);

	// },

    update: function() {
    	game.physics.arcade.collide(player, grass);

        switchAnimation();


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

