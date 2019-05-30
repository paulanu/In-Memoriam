// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');

		game.load.spritesheet('player_animation', 'assets/img/player_animation.png', 170, 266);
        
        //background
        game.load.atlasJSONHash('levelOneSprites', 'assets/img/LevelOne.png','assets/img/LevelOne.json');

        //Audio 
        //http://www.orangefreesounds.com/rain-and-thunder-loop/
        game.load.audio('rain', 'assets/audio/rain_Background.mp3');
        //https://freesound.org/people/Yuval/sounds/206030/
        game.load.audio('grass_footsteps', 'assets/audio/grass_footsteps.mp3');

        //fixed sizing issues, add to atlas later
        game.load.image('Night_Grass' , 'assets/img/new/Night_Grass.png');
        game.load.image('Night_Mailbox' , 'assets/img/new/Night_Mailbox.png');
        game.load.image('left', 'assets/img/left.png');
        game.load.image('right', 'assets/img/right.png');
        game.load.image('mouse', 'assets/img/mouse.png');
        game.load.image('arrow', 'assets/img/arrow.png');
        
        //Temp 
        game.load.image('corona', 'assets/img/temp/blue.png');
		game.load.image('fade_in', 'assets/img/temp/fade_in.png');
		switchKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}