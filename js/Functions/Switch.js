var fadeInRect;
var switching; 
var switchLevelName;
var weirdAfWorkAround; 
var lastFadeInRectXPos; 

//used for fading out music
var backgroundMusic;

function switchAnimation() {
	fadeInRect.position.x = game.camera.x; 
	fadeInRect.position.y = game.camera.y;

	//I FUCKING HATE THIS SHIT BUT ITS NECESSARY
	if (game.camera.x == 0 && lastFadeInRectXPos > 10) {
		fadeInRect.width = game.world.width;
	}
	else {
		fadeInRect.width = game.camera.width;
	}

	lastFadeInRectXPos = game.camera.x; 

	if (weirdAfWorkAround != null) weirdAfWorkAround.alpha = 0;

	//remove the !fadeInRect.alive thing here
	if (switching && fadeInRect.frame == 18) {
		var fuck = game.add.sprite(0, 0, 'fade_in');
		fuck.width = game.world.width;
		fuck.height = game.world.height;
		backgroundMusic.stop();
		switching = false; 
		game.state.start(switchLevelName, true, false, player.position.x, player.position.y, player.scale.x,
			player.parallaxForeground.tilePosition.x, player.parallaxBackground.tilePosition.x, 1, true,
			game.camera.x);
	}
}

function enterMemoryOrPresent(sprite, pointer, switchToLevelName) {
	switching = true; 
	if (msgBox != null) msgBox.destroy();
	fadeInRect.animations.play('switch_animation', 10, false, false);
	switchLevelName = switchToLevelName.level;
}

