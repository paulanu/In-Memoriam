var player; 
var grass; 
var extraWidth = 700; //adjust this to change level width

var grave;
//for zoomout
var zoomies; 

var LevelFive = function() { 
	// platforms group
	var platforms;

};
LevelFive.prototype = { 

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
            'levelFiveSprites', 'Dawn_BG'
        );

        var backgroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
            'levelFiveSprites', 'Dawn_BG_Trees'
        );
        var foregroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
            'levelFiveSprites', 'Dawn_FG_Trees'
        );

        //initialize parallax (so it is consistent between states)
        backgroundTrees.tilePosition.x = this.bgTilePosX;
        foregroundTrees.tilePosition.x = this.fgTilePosX;

        
        grave = this.game.add.sprite(game.world.width - 600, game.world.height - 240, 'levelFiveSprites', 'Grave');
        grave.scale.x = .55;
        grave.scale.y = .55; 
        grave.inputEnabled = true;

        grave.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'End'});

        //PLAYER
        player = new Player(game, this.playerX, this.playerY, this.facing); 
        player.footsteps = game.add.audio('grass_footsteps');
        player.parallaxForeground = foregroundTrees;
    	player.parallaxBackground = backgroundTrees;
        game.add.existing(player);

        //grass
        grass = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140, 'dawn_grass');
    	game.physics.arcade.enable(grass);
		grass.body.immovable = true; 
        grass.body.setSize(grass.body.width, grass.body.height - 30, 0, 50);

    	//gradient layer on top of all
        var gradient = this.game.add.tileSprite(0, 0, game.world.width, game.world.height,
         'levelFiveSprites', 'Dawn_Dew');

    	//music
    	backgroundMusic = game.add.audio('crickets');
        backgroundMusic.play('', 0, .3, true);    // ('marker', start position, volume (0-1), loop)
        player.animations.add('rose', [9], 6, true);

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

    },

	// render: function() {

	//     game.debug.body(grass);
	//     game.debug.body(player);

	// },

    update: function() {
                switchAnimation(); 

    	game.physics.arcade.collide(player, grass);
        // game.world.forEach(function(object) {
        //     object.scale.x = object.scale.x -.01; 
        //     object.scale.y = object.scale.y -.01;        
        // });
        if (player.position.x > grave.position.x - 100) {
            player.position.x = grave.position.x - 55;
            switching = true; //lmao
            rose = true;
            player.animations.play('rose'); // stand
        }

    }

}

