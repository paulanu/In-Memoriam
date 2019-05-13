// play state
var Play = function() {};
Play.prototype = {
    create: function() {
        var Text = game.add.text(game.width/2, game.height/2, 'PLAY', style);
        Text.anchor.set(0.5);
    },
    update: function() {
        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GameOver');
        }
    }
}