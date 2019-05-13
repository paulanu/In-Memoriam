// gameover state
var GameOver = function() {};
GameOver.prototype = {
    create: function() {
        var Text = game.add.text(game.width/2, game.height/2, 'GAMEOVER', style);
        Text.anchor.set(0.5);
    },
    update: function() {
        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('MainMenu');
        }
    }
}