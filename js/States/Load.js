// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');
        game.load.image('platform', '../../assets/img/temp/platform.png');
		game.load.image('player', '../../assets/img/temp/player.png');

    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}