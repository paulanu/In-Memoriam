var player; 
var grass; 
var backgroundMusic;
var extraWidth = 700; //adjust this to change level width
var arrowkey;
var mouse;
var mailbox;

var DepressionLevel = function() { 
	// platforms group
	var platforms;

	// the fade in rect
	var fadeInRect;
};
DepressionLevel.prototype = { 

	init: function(playerX, playerY, facing) {
		//--------HAVE THIS IN EVERY LEVEL----------
		this.playerX = playerX;
		this.playerY = playerY;
		this.facing = facing;
		//-----------------------------------------
	},

    create: function() {
    	//adjust world bounds, this is a long one boys
    	game.world.setBounds(0, 0, game.world.width + extraWidth, game.world.height);

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

        //LEVEL ELEMENTS
        var car = this.game.add.sprite(-100, game.world.height - 230, 'levelOneSprites', 'Night_Car');

        var house = this.game.add.sprite(game.world.width - 393, 0, 'levelOneSprites', 'Night_House');

        //Tree with swing 
        var tree = this.game.add.sprite(100 + extraWidth, 0, 'levelOneSprites', 'Night_Swing');

        //mailbox
        addGlow(700 + extraWidth, game.world.height - 130, 50, 350, true);
        var mailbox = this.game.add.sprite(650 + extraWidth, game.world.height - 350, 'Night_Mailbox');
        addGlow(700 + extraWidth, game.world.height - 130, 50, 350, false);

        //PLAYER
        player = new Player(game, 100, 100); 
        player.footsteps = game.add.audio('grass_footsteps');
        player.parallaxForeground = foregroundTrees;
    	player.parallaxBackground = backgroundTrees;
        game.add.existing(player);
        game.camera.follow(player);
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 200, 500);


        //grass
        grass = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140, 'Night_Grass');
    	game.physics.arcade.enable(grass);
		grass.body.immovable = true; 
    	grass.body.setSize(grass.body.width, grass.body.height - 10, 0, 50);

    	//rain
    	addRain();

    	//music
    	backgroundMusic = game.add.audio('rain');
        backgroundMusic.play('', 0, .3, true);    // ('marker', start position, volume (0-1), loop)

        arrowkey = game.add.group();
        var rightkey = arrowkey.create(107, 310, 'right');
        var leftkey = arrowkey.create(57, 310, 'left');

        arrowkey.alpha = -1;

        game.add.tween(arrowkey).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);// 1000, false);

        mouse = game.add.group();

        var m = mouse.create(1388, 330, 'mouse');
        mouse.alpha = -2;
        game.add.tween(mouse).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);// 1000, false);
      


         


	 //    // create fade in rect
	 //    fadeInRect = game.add.sprite(0, 0, 'fade_in');

    },

	// render: function() {

	//     game.debug.body(grass);
	//     game.debug.body(player);

	// },

    update: function() {
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
}

}