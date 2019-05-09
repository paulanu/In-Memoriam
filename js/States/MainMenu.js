// mainmenu state
var MainMenu = function() {};
MainMenu.prototype = {
	create: function() {
		var Text = game.add.text(game.width/2, game.height/2, 'MAINMENU', style);
		Text.anchor.set(0.5);
	},
	update: function() {

		if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
    		switchStates('PaulaTestLevel', 32, game.world.height - 150, false,
    			false, new Phaser.Point(0,0), null);
		}
	}
}