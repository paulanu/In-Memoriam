var fadeInRect;
var switching; 
var switchLevelName;

//used for fading out music
var backgroundMusic;

function switchAnimation() {

	if (switching) {
		fadeInRect.alpha += .05;
		backgroundMusic.volume -= .05;
	}

	if (fadeInRect.alpha >= 1 && switching) {
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
	switchLevelName = switchToLevelName.level;
}

