// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');

		game.load.spritesheet('player_animation', 'assets/img/player_animation.png', 170, 266);
        
        //background
        game.load.atlasJSONHash('levelOneSprites', 'assets/img/LevelOne.png','assets/img/LevelOne.json');

		game.load.image('fade_in', 'assets/img/temp/fade_in.png');
		switchKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}