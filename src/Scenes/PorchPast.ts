// var player; 
// var grass; 
// var extraWidth = 700; //adjust this to change level width
// rose = false;

// var LevelOnePast = function() { 
// 	// platforms group
// 	var platforms;

// 	// the fade in rect
// 	var fadeInRect;
// };
// LevelOnePast.prototype = { 

// 	init: function(playerX, playerY, facing, fgTilePosX, bgTilePosX, fadeInRectAlpha, transition = true, cameraX = 0) {
// 		//--------HAVE THIS IN EVERY LEVEL----------
// 		this.playerX = playerX;
// 		this.playerY = playerY;
// 		this.facing = facing;
//         this.fgTilePosX = fgTilePosX;
//         this.bgTilePosX = bgTilePosX;
//         this.fadeInRectAlpha = fadeInRectAlpha;
//         this.playTransition = transition;    
//         this.cameraX = cameraX;  
// 		//-----------------------------------------
// 	},

//     create: function() {
//         game.world.setBounds(0, 0, 1980, game.world.height);            
// 	    // start the physics system
// 	    game.physics.startSystem(Phaser.Physics.ARCADE);

// 	    // BACKGROUND ART ELEMENTS
// 		var background = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'levelOneSprites', 'Sepia_BG'
//         );

//         var backgroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'Sepia_BG_Trees'
//         );
//         var foregroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'levelOneSprites', 'Sepia_FG_Trees'
//         );

//         //initialize parallax (so it is consistent between states)
//         backgroundTrees.tilePosition.x = this.bgTilePosX;
//         foregroundTrees.tilePosition.x = this.fgTilePosX;

//         //LEVEL ELEMENTS
//         var car = this.game.add.sprite(-100, game.world.height - 340, 'levelOneSprites', 'Sepia_Car');
//         if (gotBouquet) {
//             car = new DialogueItem(game, -100, game.world.height - 340, 250, 100, 'levelOneSprites', 'Sepia_Car',
//                         "I think I'm ready to go now.");
//             var dialogue = new DialogueItem(game, 400, game.world.height - 350,
//              250, 100,'levelOneSprites', 'Night_Mailbox', "I think I'm ready to go now.");
//             dialogue.alpha = 0;
//             game.add.existing(dialogue);

//             game.add.existing(car);
//             car.inputEnabled = true;
//             car.inputEnabled = true; 
//             car.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'LevelFive', stopMusic: true});
//         }

//         var house = this.game.add.sprite(game.world.width - 410, 0, 'levelOneSprites', 'Sepia_House');

//         //Tree with swing 
//         addGlow(965, 500, 170, 160, true, true);
//         var tree = this.game.add.sprite(85 + extraWidth, 0, 'levelOneSprites', 'Sepia_Swing');
//         addGlow(965, 500, 170, 160, false, true);

//         //mailbox
//         var mailbox = this.game.add.sprite(650 + extraWidth, game.world.height - 350,
//         'levelOneSprites', 'Sepia_Mailbox');
//         mailbox.scale.x = .8;
//         mailbox.scale.y = .8;

//         //PLAYER
//         if (gotBouquet)
//             player = new Player(game, this.playerX, this.playerY, this.facing, true); 
//         else
//             player = new Player(game, this.playerX, this.playerY, this.facing); 
//         player.footsteps = game.add.audio('grass_footsteps');
//         player.parallaxForeground = foregroundTrees;
//     	player.parallaxBackground = backgroundTrees;
//         game.add.existing(player);

//         var switchObject = new DialogueItem(game, 925, 435, 250, 100, null, 'fade_in',
//             "We used to play on this when we were kids.");
//         game.add.existing(switchObject);
//         switchObject.alpha = 0;
//         switchObject.width = 135;
//         switchObject.height = 145;
//         switchObject.inputEnabled = true;
//         switchObject.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'LevelOnePresent', stopMusic: true});

//         //grass
//         grass = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140, 
//             'levelOneSprites', 'Sepia_Grass');
//     	game.physics.arcade.enable(grass);
// 		grass.body.immovable = true; 
//     	grass.body.setSize(grass.body.width, grass.body.height - 10, 0, 50);

//     	//music
//     	backgroundMusic = game.add.audio('forest');
//         backgroundMusic.play('', 0, .3, true);    // ('marker', start position, volume (0-1), loop)


// 	    // create fade in rect
// 	    fadeInRect = game.add.sprite(this.cameraX, 0, 'switch_animation');
//         fadeInRect.width = game.camera.width;
//         fadeInRect.height = game.camera.height;
//         fadeInRect.animations.add('switch_animation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//             10,11,12,13,14,15,16,17,18], 5, false);
//         fadeInRect.animations.add('enter_level', [17,16,15,14,13,12,11,10,9,8,
//             7,6,5,4,3,2,1,0,19], 5, false);
//         fadeInRect.alpha = 1;
//         if (this.playTransition) {
//             weirdAfWorkAround = game.add.sprite(0, 0, 'fade_in');
//             weirdAfWorkAround.width = game.world.width; 
//             weirdAfWorkAround.height = game.world.height;
//             fadeInRect.animations.play('enter_level', 10, false, false);
//         }



//     },

// 	// render: function() {

// 	//     game.debug.body(grass);
// 	//     game.debug.body(player);

// 	// },

//     update: function() {
//         switchAnimation();
//     	game.physics.arcade.collide(player, grass);


//         if (player.body.blocked.right) {
//             SceneEndCleanup(true);
//             game.state.start('LevelTwoPast', true, false, 120, game.world.height - 470, .65, 0, 0, 0, false);
//         }
//         // foreground.tilePosition.x -= 10;

//     	//don't exit left side of screen
//  	// 	if (player.position.x < 0)
//  	// 		player.position.x = 0;

//  	// 	//don't exit left side of screen
//  	// 	if (player.position.x > game.world.width)
//  	// 		game.state.start('End');

//   //   	// switch to bw world
//   //   	enterMemoryOrPresent('PaulaTestLevel2');

//   //       // collisions
//   //       game.physics.arcade.collide(player, platforms);

//   //       // set player variables that need to be passed
//   //       this.playerX = player.x;
//   //       this.playerY = player.y;
//   //       this.facing = player.scale.x;

//     }
// }

