var grass;
var extraWidth = 700; //adjust this to change level width
var arrowkey;
var mouse;
var mailbox;
import DialogueObject from "/In_Memoriam/js/src/Classes/DialogueObject";
export default class PorchPresent extends Phaser.Scene {
    constructor() {
        super(PORCHPRESENT_KEY);
    }
    preload() {
    }
    create() {
        // this.input.on('pointerup', DialogueObject.destroyTextBox, this);
        // BACKGROUND ART ELEMENTS
        //NOTE: WHY DO HEIGHT / WIDTH NEED TO BE DOUBLED OM F G 
        var background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'livingRoomPast');
        background.setInteractive();
        background.on('pointerdown', DialogueObject.destroyTextBox);
        // var backgroundTrees = this.add.tileSprite(0, 0, this.scale.width * 2, this.scale.height*2, 
        //     'porchImages', 'Night_BG_Trees'
        // );
        // var foregroundTrees = this.add.tileSprite(0, 0, this.scale.width * 2, this.scale.height*2, 
        //     'porchImages', 'Night_FG_Trees'
        // );
        // backgroundTrees.tilePosition.x = this.bgTilePosX;
        // foregroundTrees.tilePosition.x = this.fgTilePosX;
        //SCENE ELEMENTS
        // var car = this.add.sprite(-100, this.scale.height - 340, 'porchImages', 'Night_Car').setOrigin(0, 0);
        // var house = this.add.sprite(this.scale.width - 393, 0, 'porchImages', 'Night_House').setOrigin(0, 0);
        // var tree = this.add.sprite(100 + extraWidth, 0, 'porchImages', 'Night_Swing').setOrigin(0, 0);
        // //mailbox
        // addGlow(690 + extraWidth, game.world.height - 130, 60, 350, true);
        var card = new DialogueObject(this, this.scale.width / 2, this.scale.height / 2, 'card', "it's a dialogue box! There's stuff about the item! you have just clicked on it! hooray");
        this.add.existing(card);
        var picture = new DialogueObject(this, this.scale.width / 2, this.scale.height / 2, 'picture', "MOOOORE DIALOGUE!!!!!!!!!!!!!!!");
        this.add.existing(picture);
        //  250, 100,'levelOneSprites', 'Night_Mailbox', "I haven't had the energy to look at these.");
        // game.add.existing(mailbox);
        // mailbox.scale.x =  .7;
        // mailbox.scale.y = .7;
        // addGlow(690 + extraWidth, game.world.height - 130, 60, 350, false);
        // mailbox.inputEnabled = true;
    }
}
//    LevelOnePresent () { 
// // platforms group
// // var platforms;
// LevelOnePresent.prototype = { 
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
//         this.world.setBounds(0, 0, 1980, this.world.height); 
// 	    // BACKGROUND ART ELEMENTS
// 		var background = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'porchImages', 'Night_BG'
//         );
//         var backgroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'porchImages', 'Night_BG_Trees'
//         );
//         var foregroundTrees = this.game.add.tileSprite(0, 0, game.world.width, game.world.height, 
//             'porchImages', 'Night_FG_Trees'
//         );
//       //initialize parallax (so it is consistent between states)
//       backgroundTrees.tilePosition.x = this.bgTilePosX;
//       foregroundTrees.tilePosition.x = this.fgTilePosX;
//       //LEVEL ELEMENTS	
//    var car = this.game.add.sprite(-100, game.world.height - 340, 'levelOneSprites', 'Night_Car');
//       var house = this.game.add.sprite(game.world.width - 393, 0, 'levelOneSprites', 'Night_House');
//       //Tree with swing 
//       var tree = this.game.add.sprite(100 + extraWidth, 0, 'levelOneSprites', 'Night_Swing');
//       //mailbox
//       addGlow(690 + extraWidth, game.world.height - 130, 60, 350, true);
//       var mailbox = new DialogueItem(game, 650 + extraWidth, game.world.height - 350,
//        250, 100,'levelOneSprites', 'Night_Mailbox', "I haven't had the energy to look at these.");
//   	game.add.existing(mailbox);
//       mailbox.scale.x =  .7;
//       mailbox.scale.y = .7;
//       addGlow(690 + extraWidth, game.world.height - 130, 60, 350, false);
//       mailbox.inputEnabled = true;
//       //TUTORIAL MOUSE
//       mouse = game.add.group();
//       if (!this.playTransition) {
//           if (fuckmouse != true){
//           var m = mouse.create(1390, 340, 'mouse');
//           mouse.alpha = .5;
//           game.add.tween(mouse).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);// 1000, false);
//       }
//           player = new Player(game, this.playerX, this.playerY, this.facing); 
//       player.footsteps = game.add.audio('grass_footsteps');
//       player.parallaxForeground = foregroundTrees;
//   	player.parallaxBackground = backgroundTrees;
//       game.add.existing(player);
//       mailbox.events.onInputDown.add(enterMemoryOrPresent, this, 0, {level:'LevelOnePast', stopMusic: true});
//       //grass
//       grass = this.game.add.tileSprite(0, game.world.height - 140, game.world.width, 140,
//   'levelOneSprites', 'Night_Grass');
//   	game.physics.arcade.enable(grass);
// grass.body.immovable = true; 
//   	grass.body.setSize(grass.body.width, grass.body.height - 10, 0, 50);
//   	// var dialogue = new DialogueItem(game, 100, 100, 150, 100, 'corona', "hihihihihi");
//   	// game.add.existing(dialogue);
//   	//gradient layer on top of all
//       var gradient = this.game.add.tileSprite(0, 0, game.world.width, game.world.height,
//        'levelOneSprites', 'Night_Dark');
//   	//rain
//   	addRain();
//   	//music
//   	backgroundMusic = game.add.audio('rain');
//       backgroundMusic.play('', 0, .1, true);    // ('marker', start position, volume (0-1), loop)
//    // create fade in rect for switching
//    fadeInRect = game.add.sprite(this.cameraX, game.camera.y, 'switch_animation');
//       fadeInRect.width = game.camera.width;
//       fadeInRect.height = game.camera.height;
//   	fadeInRect.animations.add('switch_animation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//   		10,11,12,13,14,15,16,17,18], 5, false);
//       fadeInRect.animations.add('enter_level', [17,16,15,14,13,12,11,10,9,8,
//           7,6,5,4,3,2,1,0,19], 5, false);
//   	if (this.playTransition) {
//           weirdAfWorkAround = game.add.sprite(0, 0, 'fade_in');
//           weirdAfWorkAround.width = game.world.width; 
//           weirdAfWorkAround.height = game.world.height;
// 	fadeInRect.animations.play('enter_level', 5, false, false);
//   	}
//       arrowkey = game.add.group();
//       var rightkey = arrowkey.create(120, 205, 'right');
//       var leftkey = arrowkey.create(65, 209, 'left');
//       arrowkey.alpha = .55;
//       game.add.tween(arrowkey).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0);// 1000, false);
//       player.animations.play('stand');
// },
// render: function() {
//     game.debug.body(grass);
//     game.debug.body(player);
// },
// update: function() {
//   	game.physics.arcade.collide(player, grass);
//   	switchAnimation(); 
//       if (player.body.blocked.right) {
//           SceneEndCleanup(true);
//           game.state.start('LevelTwoPresent', true, false, 120, game.world.height - 470, .65, 0, 0, 0, false);
//       }
//       cursors = game.input.keyboard.createCursorKeys();
//       if(game.input.keyboard.isDown(Phaser.Keyboard.A) || game.input.keyboard.isDown(Phaser.Keyboard.D)){
//       //arrowkey.kill();
//       game.add.tween(arrowkey).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None, 1000, true);
//       //arrowkey.destroy();
//       }
//       if (game.input.mousePointer.isDown){
//       //mouse.kill();
//       game.add.tween(mouse).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None,1000, true);
//       //mouse.remove();
//      }
//   	   //      background.tilePosition.x -= 1;
//       // foreground.tilePosition.x -= 10;
//   	//don't exit left side of screen
// // 	if (player.position.x < 0)
// // 		player.position.x = 0;
// // 	//don't exit left side of screen
// // 	if (player.position.x > game.world.width)
// // 		game.state.start('End');
// //   	// switch to bw world
// //   	enterMemoryOrPresent('PaulaTestLevel2');
// //       // collisions
// //       game.physics.arcade.collide(player, platforms);
// //       // set player variables that need to be passed
// //       this.playerX = player.x;
// //       this.playerY = player.y;
// //       this.facing = player.scale.x;
