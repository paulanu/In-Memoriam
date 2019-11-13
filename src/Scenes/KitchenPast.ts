// var ground;
// var extraWidth =700;
// rose = false;
// var bedroomEntered; 

// var LevelTwoPast = function() { 
// 	// platforms group
// 	var platforms;

// 	// the fade in rect
// 	var fadeInRect;

// };

// LevelTwoPast.prototype = {
// 	init: function(playerX, playerY, facing, fgTilePosX, bgTilePosX, fadeInRectAlpha, transition = true) {
// 		//--------HAVE THIS IN EVERY LEVEL----------
// 		this.playerX = playerX;
// 		this.playerY = playerY;
// 		this.facing = facing;
//         this.fgTilePosX = fgTilePosX;
//         this.bgTilePosX = bgTilePosX;
//         this.fadeInRectAlpha = fadeInRectAlpha;
//         this.playTransition = transition;      
// 		//-----------------------------------------
// 	},

// 	create: function() {
// 	visitedPast = true;

//         game.world.setBounds(0, 0, 1730, game.world.height);            

// 	    // start the physics system
// 	    game.physics.startSystem(Phaser.Physics.ARCADE);

// 	    var background = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'levelTwoSprites', 'Sepia_Kitchen_BG'
//         );
//            var foreground = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'levelTwoSprites', 'Sepia_Kitchen_BG'
//         );

//           background.tilePosition.x = this.bgTilePosX;
//           foreground.tilePosition.x = this.fgTilePosX;


//         var cabinets = this.game.add.sprite(0, 0, 'levelTwoSprites', 'Sepia_Cabinets');
//         cabinets.scale.y =1.2;

//         var stove = new DialogueItem(game, 150, 140 + 220, 250, 100, 'levelTwoSprites', 'Sepia_Stove',
//             "There's a pie baking in the oven.");
//         game.add.existing(stove);
//         stove.scale.x =.9;
//         stove.scale.y =.9;
        
//         var sink = this.game.add.sprite(350, game.world.height - 430, 'levelTwoSprites', 'Sepia_Sink');
//         sink.scale.x =.9;
//         sink.scale.y =.9;

//         var Fridge = game.add.sprite(0, game.world.height - 550, 'levelTwoSprites', 'Sepia_Fridge');

//         var door = game.add.sprite(0, 140+71, 'levelTwoSprites', 'Sepia_Door');

//         var stairs = this.game.add.sprite(1400, game.world.height - 690, 'levelTwoSprites', 'Sepia_Stairs');
//         var playbutton = game.add.button(1495, game.world.height - 688, 'sepia_stair_hover', enterBedroomFromPast, this, 0, 1, 0, 0,);
//         playbutton.inputEnabled = true;

//         // hand cursor on hover
//         playbutton.input.useHandCursor = true;

//         // var doorDialogue = new DialogueItem(game, 1800, 300, 250, 100, null, 'fade_in', 
//         //     'An old storage closet, filled with childhood memorabilia.');
//         // doorDialogue.width = 150; 
//         // doorDialogue.height = 600;
//         // doorDialogue.alpha = 0;
//         // game.add.existing(doorDialogue);

//         var stairDialogue = new DialogueItem(game, 1560, 300, 250, 100, null, 'fade_in', 
//             'Leads to their room.');
//         stairDialogue.width = 100; 
//         stairDialogue.height = 600;
//         stairDialogue.alpha = 0;
//         game.add.existing(stairDialogue);

//         // var stairClickable = game.add.sprite(1500, 0, 'fade_in')
//         // stairClickable.width = 220; 
//         // stairClickable.height = 580;
//         // stairClickable.alpha = 0;
//         // stairClickable.inputEnabled = true;
//         // stairClickable.events.onInputDown.add(enterBedroomFromPast, this);

//         var win = this.game.add.sprite(870, game.world.height - 660, 'levelTwoSprites', 'Sepia_Window');
//         win.scale.x =.9;
//         win.scale.y =.9;

//         var coatrack = new DialogueItem(game, 650, game.world.height - 500, 200, 50, 'levelTwoSprites', 'Sepia_Coatrack',
//          "They're home!");
//         game.add.existing(coatrack);
//         coatrack.scale.x =.9;
//         coatrack.scale.y =.9;

//         addGlow(300 + extraWidth, game.world.height - 335, 60, 350, true, true);
//         var flower = new DialogueItem(game, 950, game.world.height - 445, 250, 100, 'levelTwoSprites', 'Sepia_Flowers',
//         	"This is their favorite flower.");
//         game.add.existing(flower);
//         addGlow(300 + extraWidth, game.world.height - 335, 60, 350, false, true);
//         flower.scale.x =.7;
//         flower.scale.y =.7;
//          flower.inputEnabled = true;
//          flower.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'LevelTwoPresent', stopMusic: false});

//         var table = this.game.add.sprite(830, game.world.height - 310, 'levelTwoSprites', 'Sepia_Table');
//         table.scale.x =.9;
//         table.scale.y =.9;
        
//         var chair = this.game.add.sprite(1200, game.world.height - 400, 'levelTwoSprites', 'Sepia_Chair');
//         chair.scale.x =.9;
//         chair.scale.y =.9;

//         ground = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140, 'levelTwoSprites', 'Sepia_Floor');
//         game.physics.arcade.enable(ground);
//         ground.body.immovable = true;
//         ground.body.setSize(ground.body.width, ground.body.height - 10, 0, 16);
        
//         //mailbox.inputEnabled = true;

//         if (gotBouquet)
//             player = new Player(game, this.playerX, this.playerY, this.facing, true); 
//         else
//             player = new Player(game, this.playerX, this.playerY, this.facing); 
//         player.footsteps = game.add.audio('walk_wood');
//         game.add.existing(player);
//         player.parallaxForeground = foreground;
//         player.parallaxBackground = background;
//         game.add.existing(player);

// 	    fadeInRect = game.add.sprite(0, 0, 'switch_animation');
//         fadeInRect.width = game.camera.width;
//         fadeInRect.height = game.camera.height;
//         fadeInRect.animations.add('switch_animation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//         10,11,12,13,14,15,16,17,18], 5, false);
//         if (this.playTransition) {
//             fadeInRect.animations.add('enter_level', [18,17,16,15,14,13,12,11,10,9,8,
//                 7,6,5,4,3,2,1,0,19], 5, false);
//             fadeInRect.animations.play('enter_level', 5, false, false);
//         }


// 	},

// 	update: function() {
//         switchAnimation();
// 		game.physics.arcade.collide(player, ground);

   

//         if (gotBouquet && player.body.blocked.left) {
//             SceneEndCleanup(true);
//             game.state.start('LevelOnePast', true, false, game.world.width - 300, game.world.height - 435, -playerScale, 0, 0, 0, false);
//         }
// 		//game.physics.arcade.collide(player, grass);
// 	}

// }

// function enterBedroomFromPast() {
//     bedroomEntered = true;
//     SceneEndCleanup(false);
//     // enterMemoryOrPresent(null, 0, 'LevelFour')
//     game.state.start('LevelFour', true, false, 600, game.world.height - 470, .65, 0, 0, 0, false);
// }



