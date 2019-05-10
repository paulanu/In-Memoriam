// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');
        game.load.image('platform', '../../assets/img/temp/platform.png');
        game.load.image('platform2', '../../assets/img/temp/platform2.png');
		game.load.image('player', '../../assets/img/temp/player.png');
		jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}