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
    	grass.body.setSize(grass.body.width, grass.body.height - 25, 0, 45);

    	//gradient layer on top of all
        var gradient = this.game.add.tileSprite(0, 0, game.world.width, game.world.height,
         'levelFiveSprites', 'Dawn_Dew');

    	//music
    	backgroundMusic = game.add.audio('crickets');
        backgroundMusic.play('', 0, .3, true);    // ('marker', start position, volume (0-1), loop)
        player.animations.add('rose', [9], 6, true);

    },

	// render: function() {

	//     game.debug.body(grass);
	//     game.debug.body(player);

	// },

    update: function() {
    	game.physics.arcade.collide(player, grass);
        // game.world.forEach(function(object) {
        //     object.scale.x = object.scale.x -.01; 
        //     object.scale.y = object.scale.y -.01;        
        // });
        if (player.position.x > grave.position.x - 100) {
            switching = true; //lmao
            rose = true;
            player.animations.play('rose'); // stand
        }

    }

}

