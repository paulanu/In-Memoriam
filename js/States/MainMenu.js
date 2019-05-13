// mainmenu state
var MainMenu = function() {};
MainMenu.prototype = {
	create: function() {
		var Text = game.add.text(game.width/2, 100, 'In Memoriam', style);
	    Text.anchor.set(0.5);
		
		Text = game.add.text(game.width/2, 150, 'press & hold \'e\' to switch between memories and present', style);
	 	Text.anchor.set(0.5);
	 	
	 	Text = game.add.text(game.width/2, 200, 'arrow keys to move', style);
	    Text.anchor.set(0.5);

		Text = game.add.text(game.width/2, 250, 'exit the right side of the level', style);
	    Text.anchor.set(0.5);

	},
	update: function() {
		// start Play State
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
    		game.state.start('PaulaTestLevel', true, false, 120, game.world.height - 350, 1);
		}
	}
}