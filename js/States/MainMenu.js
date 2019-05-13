// mainmenu state
var MainMenu = function() {};
MainMenu.prototype = {
	create: function() {
		var Text = game.add.text(game.width/2, game.height/2, 'MAINMENU', style);
		Text.anchor.set(0.5);
	},
	update: function() {
		// start Play State
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
    		game.state.start('PaulaTestLevel', true, false, 120, game.world.height - 350, 1);
		}
	}
}