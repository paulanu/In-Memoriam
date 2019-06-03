// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');

		game.load.spritesheet('player_animation', 'assets/img/player_animation.png', 340, 532);
        game.load.spritesheet('switch_animation', 'assets/img/switch_animation.png', 600, 338);

        //background
        game.load.atlasJSONHash('levelOneSprites', 'assets/img/LevelOne.png','assets/img/LevelOne.json');
        game.load.atlasJSONHash('levelFiveSprites', 'assets/img/LevelFive.png','assets/img/LevelFive.json');

        //Audio 
        //http://www.orangefreesounds.com/rain-and-thunder-loop/
        game.load.audio('rain', 'assets/audio/rain_Background.mp3');

        game.load.audio('forest', 'assets/audio/forest.mp3');
        
        //https://freesound.org/people/Yuval/sounds/206030/
        game.load.audio('grass_footsteps', 'assets/audio/grass_footsteps.mp3');

        //fixed sizing issues, add to atlas later
        game.load.image('Sepia_BG_Trees', 'assets/img/new/Sepia_BG_Trees.png');

        game.load.image('left', 'assets/img/left.png');
        game.load.image('right', 'assets/img/right.png');
        game.load.image('mouse', 'assets/img/mouse.png');

        //Temp 
        game.load.image('corona', 'assets/img/temp/blue.png');
        game.load.image('msgBoxBack', 'assets/img/new/asset 1.png');
		game.load.image('fade_in', 'assets/img/temp/fade_in.png');
		switchKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}