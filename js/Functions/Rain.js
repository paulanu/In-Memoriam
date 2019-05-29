//from: https://www.joshmorony.com/how-to-add-weather-effects-in-phaser-games/

function addRain() {

        let rainParticle = this.game.add.bitmapData(15, 110);

        rainParticle.ctx.rect(0, 0, 15, 110);
        rainParticle.ctx.fillStyle = '#9cc9de';
        rainParticle.ctx.fill();

        this.emitter = this.game.add.emitter(this.game.world.centerX-130, -300, 400);

        this.emitter.width = this.game.world.width;
        let area = new Phaser.Rectangle(0, 0, game.world.width, 100); //from nathan bless
		this.emitter.area = area;


        this.emitter.makeParticles(rainParticle);
        this.emitter.angle = 10;
        this.emitter.alpha = .3; 

        this.emitter.minParticleScale = 0.2;
        this.emitter.maxParticleScale = 0.3;

        this.emitter.setYSpeed(2000, 2000);
        this.emitter.setXSpeed(-5, -5);

        this.emitter.minRotation = 0;
        this.emitter.maxRotation = 0;

        this.emitter.start(false, 330, 5, 0);

}

function removeRain() {
        this.emitter.kill();
}
