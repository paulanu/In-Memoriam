//put this in an level's update() function
function switchStates(switchToLevelName, playerX, playerY, leftKeyIsDown,
		rightKeyIsDown, playerVelocity, objectListToTransfer) {
	//(state, clear all objects, clear cache, extra parameters)
	game.state.start(switchToLevelName, true, false, playerX, playerY, 
		leftKeyIsDown, rightKeyIsDown, playerVelocity);

}

//put this in a level's init() function
//var that holds player, x pos of player, y pos, sprite key
function loadObjects(player, playerX, playerY, playerVelocity, playerKey) {
	return game.add.sprite(playerX, playerY, playerKey);
}
