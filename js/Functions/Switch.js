var fadeInRect;
var switching; 
var switchLevelName;
var weirdAfWorkAround; 

//used for fading out music
var backgroundMusic;

function switchAnimation() {
	fadeInRect.position.x = game.camera.x; 
	fadeInRect.position.y = game.camera.y;

	if (weirdAfWorkAround != null) weirdAfWorkAround.alpha = 0;

	//remove the !fadeInRect.alive thing here
	if (switching && fadeInRect.frame == 18) {
		switching = false; 
		backgroundMusic.stop();
		console.log(player.position.x);
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

