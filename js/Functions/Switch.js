var fadeInRect;
var switching; 
var switchLevelName;

//used for fading out music
var backgroundMusic;

function switchAnimation() {
	fadeInRect.position.x = game.camera.x; 
	fadeInRect.position.y = game.camera.y;
	// if (switching) {
	// 	fadeInRect.animations.next(1);
	// 	//backgroundMusic.volume -= .05;
	// }

	if (switching && !fadeInRect.alive) {
		switching = false; 
		backgroundMusic.stop();
		game.state.start(switchLevelName, true, false, player.position.x, player.position.y, player.scale.x,
			player.parallaxForeground.tilePosition.x, player.parallaxBackground.tilePosition.x, 1);
	}

	//for fade into levels
	if (switching == false && fadeInRect.alpha > 0) {
		fadeInRect.alpha -= .09
		if (fadeInRect.alpha < 0) fadeInRect.alpha = 0;
	}
}

function enterMemoryOrPresent(sprite, pointer, switchToLevelName) {
	switching = true; 
	fadeInRect.alpha = 1;
	fadeInRect.animations.play('switch_animation', 10, false, true);
	switchLevelName = switchToLevelName.level;
}

