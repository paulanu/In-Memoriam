//put this function in an level's update() function

//switchToLevelName: The level you are going to switch to
//objectListToTransfer: if Objects have been moved, input their x / y here. 
function switchStates(switchToLevelName, objectListToTransfer) {
	game.camera.fade(0x000000, 200, false);
	game.camera.onFadeComplete.add(function() {
		game.state.start(switchToLevelName, true, false, player.position.x, player.position.y, player.scale.x);
	}, this);

}

var fadeOutUntilComplete = false; 

function enterMemoryOrPresent(switchToLevelName) {
	if (switchKey.isDown && !fadeOutUntilComplete) {
		fadeInRect.alpha += .01;

		if (fadeInRect.alpha >= 1) {
			fadeOutUntilComplete = true; 
			game.state.start(switchToLevelName, true, false, player.position.x, player.position.y, player.scale.x);
		}
	}
	else
		fadeInRect.alpha = game.math.max(fadeInRect.alpha - .05, 0);

	if (fadeInRect.alpha == 0)
		fadeOutUntilComplete = false;
}

