// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');
    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}