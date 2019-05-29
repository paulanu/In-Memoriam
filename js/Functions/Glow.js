//define spawn rectangle and if the glow is behind or in front of the object
function addGlow(x, y, width, height, behind) {

    emitter = game.add.emitter(game.world.centerX, 500, 200);

    emitter.makeParticles('corona');


        this.emitter = this.game.add.emitter(x, y);

        let area = new Phaser.Rectangle(x, y, width, height); //from nathan bless
        this.emitter.area = area;

        this.emitter.makeParticles('corona');
        this.emitter.setAlpha(0.5, 0, 500); //min, max, how long to go from min --> max 
        this.emitter.setScale(1, .2, 1, .2, 100); //min x, max x, min / max y,, rate min --> max

        emitter.gravity = -50;

        this.emitter.minRotation = 0;
        this.emitter.maxRotation = 0;

        if (behind)
                this.emitter.start(false, 600, 500);
        else {
                this.emitter.setAlpha(0.3, 0, 500);
                this.emitter.setScale(0.3, .1, 0.3, 0.1, 100);
                this.emitter.start(false, 600, 500)
        }
}
