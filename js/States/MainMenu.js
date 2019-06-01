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
	    
	    Text = game.add.text(game.width/2, 250, 'hold s + arrow keys to move objects while in memories', style);
	    Text.anchor.set(0.5);

		Text = game.add.text(game.width/2, 300, 'exit the right side of the level', style);
	    Text.anchor.set(0.5);

	    Text = game.add.text(game.width/2, 350, 'Press SPACE to start', style);
	    Text.anchor.set(0.5);

	},
	update: function() {
		// start Play State
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
			//do this before starting the level to set width - IMPORTANT: ONLY DO ONCE THATS WHY ITS HERE
			game.world.setBounds(0, 0, game.world.width + extraWidth, game.world.height);
    		game.state.start('LevelOnePresent', true, false, 120, game.world.height - 600, 1, 0, 0, 0);
		}
	}
}