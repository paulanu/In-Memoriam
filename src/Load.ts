// load state
export default class Load extends Phaser.Scene {
    constructor ()
    {
        super(LOAD_KEY);
    }


    preload() {
        // load assets
        console.log('LOADING ASSETS');

		// game.load.spritesheet('player_animation', 'assets/img/player_animation.png', 340, 532);
  //       game.load.spritesheet('player_flower_animation', 'assets/img/Player_Flower_Animation.png', 340, 532);
  //       game.load.spritesheet('switch_animation', 'assets/img/switch_animation.png', 600, 338);
  //       game.load.spritesheet('stairs', 'assets/img/stairs.png', 595, 618);
    
        //background
        this.load.atlas('porchImages', 'assets/art/porch.png', 'assets/art/porch.json');
        this.load.image('textbox', 'assets/art/textbox.png')
        this.load.image('card', 'assets/art/card_living_room.png')
        this.load.image('picture', 'assets/art/picture_frame_living_room.png')
        this.load.image('livingRoomPast', 'assets/art/Living_Room_Past.png')

        // this.load.atlasJSONHash('levelOneSprites', 'assets/img/LevelOne.png','assets/img/LevelOne.json');
        // game.load.atlasJSONHash('levelFiveSprites', 'assets/img/LevelFive.png','assets/img/LevelFive.json');
        // game.load.atlasJSONHash('levelTwoSprites', 'assets/img/LevelTwo.png', 'assets/img/LevelTwo.json');
        // game.load.atlasJSONHash('levelFourSprites', 'assets/img/LevelFour.png', 'assets/img/LevelFour.json');

        //Audio 
        //http://www.orangefreesounds.com/rain-and-thunder-loop/
  //       game.load.audio('rain', 'assets/audio/rain_Background.mp3');

  //       game.load.audio('forest', 'assets/audio/forest.mp3');
  //       game.load.audio('crickets', 'assets/audio/Crickets.mp3');
  //       game.load.audio('walk_wood', 'assets/audio/wood_footsteps.mp3');

  //       //"Bittersweet" Kevin MacLeod (incompetech.com)
  //       // Licensed under Creative Commons: By Attribution 3.0 License
  //       // http://creativecommons.org/licenses/by/3.0/
  //       game.load.audio('bittersweet', 'assets/audio/Bittersweet.mp3');

  //       //https://freesound.org/people/Yuval/sounds/206030/
  //       game.load.audio('grass_footsteps', 'assets/audio/grass_footsteps.mp3');

  //       //fixed sizing issues, add to atlas later
  //       game.load.image('Sepia_BG_Trees', 'assets/img/new/Sepia_BG_Trees.png');

	 //   //additional assets
  //       game.load.image('title', 'assets/img/Title.png');
  //       game.load.image('bouquet', 'assets/img/bouquet.png');
  //       game.load.image('wheel', 'assets/img/Night_Tire.png');
  //       game.load.spritesheet('stair_hover', 'assets/img/stair_hover.png', 217, 564);
  //       game.load.spritesheet('sepia_stair_hover', 'assets/img/Sepia_stairs_hover.png', 214, 563);
  //       game.load.image('dawn_grass', 'assets/img/new/Dawn_Grass.png');

  //       //https://thestickermart.com/products/wasd-gaming-keyboard-keys-vinyl-decal
  //       game.load.image('left', 'assets/img/left.png');
  //       game.load.image('right', 'assets/img/right.png');
  //       game.load.image('mouse', 'assets/img/mouse.png');

  //       game.load.text('beginning', 'js/beginning.txt');

  //       //corona from phaser examples
  //       game.load.image('corona', 'assets/img/Temp/blue.png');

  //       //temp
  //       game.load.image('msgBoxBack', 'assets/img/new/Asset1.png');
		// game.load.image('fade_in', 'assets/img/Temp/fade_in.png');
		// switchKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
  //   },
    }

    create () {
        // go to MainMenu
        this.scene.start(PORCHPRESENT_KEY);
    }
}
