// mainmenu state
var End = function() {};
End.prototype = {
	create: function() {
		var Text = game.add.text(game.width/2, 100, 'THANK YOU FOR PLAYING', style);
	    Text.anchor.set(0.5);
		
		Text = game.add.text(game.width/2, 150, 'IN MEMORIAM PROTOTYPE 1	', style);
	 	Text.anchor.set(0.5);
	 	
	 	Text = game.add.text(game.width/2, 200, 'Press SPACE to play again', style);
	    Text.anchor.set(0.5);

		Text = game.add.text(game.width/2, 250, 'game made by:', style);
	    Text.anchor.set(0.5);

	    Text = game.add.text(game.width/2, 300, 'Jay, Sandy, & Paula! (Group 38)', style);
	    Text.anchor.set(0.5);

	},
	update: function() {
		// start Play State
		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
    		game.state.start('MainMenu', true, false, 120, game.world.height - 350, 1);
		}
	}
}