var player; 
var grass; 
var extraWidth = 700; //adjust this to change level width

var arrowkey;
var mouse;
var mailbox;


var LevelOnePresent = function() { 
	// platforms group
	var platforms;

};
LevelOnePresent.prototype = { 

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
            'levelOneSprites', 'Night_BG'
        );

        var backgroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
            'levelOneSprites', 'Night_BG_Trees'
        );
        var foregroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
            'levelOneSprites', 'Night_FG_Trees'
        );

        //initialize parallax (so it is consistent between states)
        backgroundTrees.tilePosition.x = this.bgTilePosX;
        foregroundTrees.tilePosition.x = this.fgTilePosX;

        //LEVEL ELEMENTS
        var car = this.game.add.sprite(-100, game.world.height - 340, 'levelOneSprites', 'Night_Car');

        var house = this.game.add.sprite(game.world.width - 393, 0, 'levelOneSprites', 'Night_House');

        //Tree with swing 
        var tree = this.game.add.sprite(100 + extraWidth, 0, 'levelOneSprites', 'Night_Swing');

        //mailbox
        addGlow(690 + extraWidth, game.world.height - 130, 60, 350, true);
        var mailbox = new DialogueItem(game, 650 + extraWidth, game.world.height - 350,
         150, 250, 100,'levelOneSprites', 'Night_Mailbox', "I haven't had the energy to look at these.");
    	game.add.existing(mailbox);
        mailbox.scale.x =  .7;
        mailbox.scale.y = .7;
        addGlow(690 + extraWidth, game.world.height - 130, 60, 350, false);
        mailbox.inputEnabled = true;

        //PLAYER
        player = new Player(game, this.playerX, this.playerY, this.facing); 
        player.footsteps = game.add.audio('grass_footsteps');
        player.parallaxForeground = foregroundTrees;
    	player.parallaxBackground = backgroundTrees;
        game.add.existing(player);

        mailbox.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'LevelOnePast'});

        //grass
        grass = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140,
		  'levelOneSprites', 'Night_Grass');
    	game.physics.arcade.enable(grass);
		grass.body.immovable = true; 
    	grass.body.setSize(grass.body.width, grass.body.height - 10, 0, 50);

    	// var dialogue = new DialogueItem(game, 100, 100, 150, 100, 'corona', "hihihihihi");
    	// game.add.existing(dialogue);

    	//gradient layer on top of all
        var gradient = this.game.add.tileSprite(0, 0, game.world.width, game.world.height,
         'levelOneSprites', 'Night_Dark');

    	//rain
    	addRain();

    	//music
    	backgroundMusic = game.add.audio('rain');
        backgroundMusic.play('', 0, .3, true);    // ('marker', start position, volume (0-1), loop)

	    // create fade in rect for switching
	    fadeInRect = game.add.sprite(this.cameraX, game.camera.y, 'switch_animation');
        fadeInRect.width = game.camera.width;
        fadeInRect.height = game.camera.height;
    	fadeInRect.animations.add('switch_animation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    		10,11,12,13,14,15,16,17,18], 5, false);
        fadeInRect.animations.add('enter_level', [17,16,15,14,13,12,11,10,9,8,
            7,6,5,4,3,2,1,0,19], 5, false);
    	if (this.playTransition) {
            weirdAfWorkAround = game.add.sprite(0, 0, 'fade_in');
            weirdAfWorkAround.width = game.world.width; 
            weirdAfWorkAround.height = game.world.height;

			fadeInRect.animations.play('enter_level', 5, false, false);
    	}



        arrowkey = game.add.group();
        var rightkey = arrowkey.create(120, 310, 'right');
        var leftkey = arrowkey.create(70, 310, 'left');

        arrowkey.alpha = -1;

        game.add.tween(arrowkey).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);// 1000, false);

        mouse = game.add.group();

        var m = mouse.create(1414, 350, 'mouse');
        mouse.alpha = -2;
        game.add.tween(mouse).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);// 1000, false);


    },

	// render: function() {

	//     game.debug.body(grass);
	//     game.debug.body(player);

	// },

    update: function() {
    	game.physics.arcade.collide(player, grass);

    	switchAnimation(); 


  cursors = game.input.keyboard.createCursorKeys();

  if(cursors.right.isDown || cursors.left.isDown){
    //arrowkey.kill();
    game.add.tween(arrowkey).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None, 1000, true);
    //arrowkey.destroy();
  }


  if (game.input.mousePointer.isDown){
     //mouse.kill();
   game.add.tween(mouse).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None, 100, true);
  }

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

