//put this in an level's update() function

//switchToLevelName: The level you are going to switch to
//playerX / playerY: the player's position
//leftKeyIsDown: is the left key being pressed
//rightKeyIsDown: is the right key being pressed
//playervelocity: it is what it says
//objectListToTransfer: if Objects have been moved, input their x / y here. 
function switchStates(switchToLevelName, objectListToTransfer) {
	//(state, clear all objects, clear cache, extra parameters)
	game.camera.fade(0x000000, 200, false);
	game.camera.onFadeComplete.add(function() {
		game.state.start(switchToLevelName, true, false, player.position.x, player.position.y,
		leftKey.isDown, rightKey.isDown, player.body.velocity);
	}, this);

}

var fadeOutUntilComplete = false; 

function enterMemoryOrPresent(switchToLevelName) {
	if (switchKey.isDown && !fadeOutUntilComplete) {
		fadeInRect.alpha += .01;

		if (fadeInRect.alpha >= 1) {
			fadeOutUntilComplete = true; 
			game.state.start(switchToLevelName, true, false, player.position.x, player.position.y,
				leftKey.isDown, rightKey.isDown, player.body.velocity);
		}
	}
	else
		fadeInRect.alpha = game.math.max(fadeInRect.alpha - .05, 0);

	if (fadeInRect.alpha == 0)
		fadeOutUntilComplete = false; 

}

