// var ground;
// var extraWidth =700;
// rose = false;
// var bedroomEntered; 
// var bouquet;
// var gotBouquet;
// var win;
// var door;
// var LevelFour = function() { 
// 	// platforms group
// 	var platforms;
// 	// the fade in rect
// 	var fadeInRect;
// };
// LevelFour.prototype = {
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
//         game.world.setBounds(0, 0, 1280, game.world.height);
// 	    // start the physics system
// 	    game.physics.startSystem(Phaser.Physics.ARCADE);
// 	    var background = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'levelFourSprites', 'Bedroom_BG'
//         );
//         var bed = game.add.sprite(0, game.world.height - 327, 'levelFourSprites', 'Bed');
//         bed.scale.x =.8;
//         bed.scale.y =.8;
//         if (showBouquet) {
//             bouquet = game.add.sprite(280, game.world.height - 335, 'bouquet');
//             bouquet.scale.x = .55;
//             bouquet.scale.y = .55; 
//             bouquet.angle = 60;
//             bouquet.inputEnabled = true; 
//             bouquet.events.onInputDown.add(getBouquet, this);
//         }
//         door = new DialogueItem(game, 500, game.world.height - 527, 250, 100, 'levelFourSprites', 'Bedroom_Door',
//             "Nothing here has really changed.");
//         game.add.existing(door);
//         door.inputEnabled = true;
//         door.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'LevelTwoPresent', stopMusic: false, x: 1605,
//         y: game.world.height - 470, scale: playerScale});
//         win = new DialogueItem(game, 100, 170, 250, 100, 'levelFourSprites', 'Bedroom_Window',
// 		"We would sit here and talk for hours about nothing and everything.");
// 	game.add.existing(win);
//         win.scale.x =.8;
//         win.scale.y =.8;
//         var desk = game.add.sprite(game.world.width - 500, game.world.height - 550, 'levelFourSprites', 'Desk');
// 	game.add.existing(desk);
//         desk.scale.x =.8;
//         desk.scale.y =.8;
//         var books = new DialogueItem(game, game.world.width - 489, game.world.height - 459, 250, 100, 'levelFourSprites', 'Books',
// 		"A collection of cheap sci-fi novels.");
// 	game.add.existing(books);
//         books.scale.x =.8;
//         books.scale.y =.8;
//         var comp = new DialogueItem(game, game.world.width - 275, game.world.height - 415, 250, 100, 'levelFourSprites', 'Computer',
// 		"Still logged in.");
// 	game.add.existing(comp);
//         comp.scale.x =.8;
//         comp.scale.y =.8;
//         // var doorDialogue = new DialogueItem(game, 1800, 300, 250, 100, null, 'fade_in', 
//         //     'An old storage closet, filled with dusty things.');
//         // doorDialogue.width = 150; 
//         // doorDialogue.height = 600;
//         // doorDialogue.alpha = 0;
//         // game.add.existing(doorDialogue);
//         // var stairDialogue = new DialogueItem(game, 1560, 300, 250, 100, null, 'fade_in', 
//         //     'Leads to their room.');
//         // stairDialogue.width = 100; 
//         // stairDialogue.height = 600;
//         // stairDialogue.alpha = 0;
//         // game.add.existing(stairDialogue);
//         // stairs.inputEnabled = true;
//         // stairs.events.onInputDown.add(enterDoor, this);
//         var compChair = game.add.sprite(game.world.width - 300, 360,'levelFourSprites', 'Computer_Chair');
//         //mailbox.inputEnabled = true;
//         compChair.scale.x =.8;
//         compChair.scale.y =.8;
//         ground = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140, 'levelFourSprites', 'Bedroom_Floor');
//         game.physics.arcade.enable(ground);
//         ground.body.immovable = true;
//         ground.body.setSize(ground.body.width, ground.body.height - 10, 0, 16);
//         if (gotBouquet)
//             player = new Player(game, this.playerX, this.playerY, this.facing, true); 
//         else
//             player = new Player(game, this.playerX, this.playerY, this.facing); 
//         player.parallaxForeground = null;
//         player.parallaxBackground = null;
//         player.footsteps = game.add.audio('walk_wood');
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
//        switchAnimation();
// 		game.physics.arcade.collide(player, ground);
//         // if (player.body.blocked.right) {
//         //     SceneEndCleanup();
//         //     game.state.start('LevelFive', true, false, 120, game.world.height - 500, .65, 0, 0, 0, false);
//         // }
// 		//game.physics.arcade.collide(player, grass);
// 	}
// }
// function enterKitchen() {
//     SceneEndCleanup();
//     game.world.setBounds(0, 0, 1280 + extraWidth, game.world.height);    
//     game.state.start('LevelTwoPresent', true, false, game.world.width - 375, game.world.height - 470, -playerScale, 0, 0, 0, false);
// }
// function getBouquet() {
//         bouquet.destroy();
//         gotBouquet = true;           
//         showBouquet = false;
//         player.destroy();
//         player = new Player(game, player.position.x, player.position.y, player.scale.x, true);
//         game.add.existing(player);
//         player.footsteps = game.add.audio('walk_wood');
//         game.add.existing(player);
//         addMessageBox(); 
//         //add again bc janky ass code
//         fadeInRect = game.add.sprite(0, 0, 'switch_animation');
//         fadeInRect.width = game.camera.width;
//         fadeInRect.height = game.camera.height;
//         fadeInRect.fixedToCamera = true;
//         fadeInRect.animations.add('switch_animation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//         10,11,12,13,14,15,16,17,18], 5, false);
//         // bouquet = new DialogueItem(game, 300, game.world.height - 361, 250, 100, null, 'bouquet',
//         //     "I....I guess I'm ready to go back.");
//         // game.add.existing(bouquet);
//         // bouquet.alpha = 0;
// }
// function addMessageBox() {
//     var msgBox;
//     var msgBoxNew = game.add.group(); 
//     var back = game.add.sprite(0, 0, 'msgBoxBack');
//     back.width = 250;
//     back.height = 100; 
//     back.alpha = .5; 
//     var text = game.add.text(0, 0, "I....I guess I'm ready to go back.");
//     text.font = 'Courier';
//     text.fontSize = 18;
//     // text.fontWeight = 'bold';
//     //  Stroke color and thickness
//     // text.stroke = '#000000';
//     // text.strokeThickness = 6;
//     text.fill = '#ffffff';
//     text.wordWrap = true; 
//     //TODO: change width to be width of dialogue box
//     text.wordWrapWidth = 250 * .9; 
//     msgBoxNew.add(back); 
//     msgBoxNew.add(text);
//     msgBoxNew.x = 180; 
//     msgBoxNew.y = game.world.height - 335; 
//     //set text in middle of message box
//     text.x = back.width / 2 - text.width / 2;
//     text.y = back.height / 2 - text.height / 2; 
//     msgBox = msgBoxNew; 
//     game.add.existing(msgBox);
// }
