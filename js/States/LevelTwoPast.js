var palyer;
var ground;
var extraWidth =700;

var LevelTwoPast = function() { 
	// platforms group
	var platforms;

	// the fade in rect
	var fadeInRect;
};

LevelTwoPast.prototype = {
	init: function(playerX, playerY, facing, fgTilePosX, bgTilePosX, fadeInRectAlpha, transition = true) {
		//--------HAVE THIS IN EVERY LEVEL----------
		this.playerX = playerX;
		this.playerY = playerY;
		this.facing = facing;
        this.fgTilePosX = fgTilePosX;
        this.bgTilePosX = bgTilePosX;
        this.fadeInRectAlpha = fadeInRectAlpha;
        this.playTransition = transition;      
		//-----------------------------------------
	},

	create: function() {
	    // start the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    var background = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
            'levelTwoSprites', 'Sepia_Kitchen_BG'
        );


        var cabinets = this.game.add.sprite(0, 0, 'levelTwoSprites', 'Sepia_Cabinets');
        cabinets.scale.y =1.2;

        var stove = this.game.add.sprite(150, 140 + 220, 'levelTwoSprites', 'Sepia_Stove');
        stove.scale.x =.9;
        stove.scale.y =.9;
        var sink = this.game.add.sprite(350, game.world.height - 430, 'levelTwoSprites', 'Sepia_Sink');
        sink.scale.x =.9;
        sink.scale.y =.9;

        var Fridge = this.game.add.sprite(0, 140 + 17, 'levelTwoSprites', 'Sepia_Fridge');

        // var Fridge = new DialogueItem(game, 0, ground.body.height + 17, 190, 166, 0, 'levelTwoSprites', 'Sepia_Fridge',
        // 	"There's some cheese cake in the Fridge");
        // game.add.existing(Fridge);
        //Fridge.inputEnabled = true;


        var door = this.game.add.sprite(0, 140 +71, 'levelTwoSprites', 'Sepia_Door');
        var Stairs = this.game.add.sprite(1400, game.world.height - 690, 'levelTwoSprites', 'Sepia_Stairs');


        var win = this.game.add.sprite(870, game.world.height - 660, 'levelTwoSprites', 'Sepia_Window');
        win.scale.x =.9;
        win.scale.y =.9;
        //var flower = this.game.add.sprite(930, game.world.height - 540, 'levelTwoSprites', 'Sepia_Flowers');
         

        var flower = new DialogueItem(game, 950, game.world.height - 445, 176, 176, 0, 'levelTwoSprites', 'Sepia_Flowers',
        	"This was my friend's favorite flower");
        game.add.existing(flower);
        flower.scale.x =.7;
        flower.scale.y =.7;

        //var Coatrack = this.game.add.sprite(700, game.world.height -577, 'levelTwoSprites', 'Sepia_Coatrack');
        var coatrack = new DialogueItem(game, 700, game.world.height - 500, 153, 153, 0, 'levelTwoSprites', 'Sepia_Coatrack',
        	"They're home!");
        game.add.existing(coatrack);
        coatrack.scale.x =.9;
        coatrack.scale.y =.9;

        var table = this.game.add.sprite(830, game.world.height - 310, 'levelTwoSprites', 'Sepia_Table');
        table.scale.x =.9;
        table.scale.y =.9;
        var chair = this.game.add.sprite(1200, game.world.height - 400, 'levelTwoSprites', 'Sepia_Chair');
        chair.scale.x =.9;
        chair.scale.y =.9;

        ground = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140,
            'levelTwoSprites', 'Sepia_Floor');
        game.physics.arcade.enable(ground);
        ground.body.immovable = true;
        ground.body.setSize(ground.body.width, ground.body.height - 10, 0, 16);
        
        
        //mailbox.inputEnabled = true;


        player = new Player(game, this.playerX, this.playerY, this.facing); 
        player.footsteps = game.add.audio('grass_footsteps');
        game.add.existing(player);
        game.camera.follow(player);
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 200, 500);


       


	    fadeInRect = game.add.sprite(0, 0, 'switch_animation');
        fadeInRect.width = game.camera.width;
        fadeInRect.height = game.camera.height;
        fadeInRect.animations.add('switch_animation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10,11,12,13,14,15,16,17,18], 5, false);
        if (this.playTransition) {
            fadeInRect.animations.add('enter_level', [18,17,16,15,14,13,12,11,10,9,8,
                7,6,5,4,3,2,1,0,19], 5, false);
            fadeInRect.animations.play('enter_level', 5, false, false);
        }


	},

	update: function() {
		game.physics.arcade.collide(player, ground);
		//game.physics.arcade.collide(player, grass);
	}

}