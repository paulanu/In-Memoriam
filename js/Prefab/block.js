// Platform prefab constructor function
function Block(game, x, y, key, frame, xscale = 1) {
	// call to Phaser.Sprite 
	// new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, x, y, key, frame);

	// add custom properties
	this.anchor.set(0.5);
	this.scale.x = xscale;

	// put some physics on it
	game.physics.arcade.enable(this);
    this.body.immovable = true; 
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Player)
Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;

// override Phaser.Sprite update
Platform.prototype.update = function() {
}