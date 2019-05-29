//define spawn rectangle and if the glow is behind or in front of the object
function addGlow(x, y, width, height, behind) {

    emitter = game.add.emitter(game.world.centerX, 500, 200);

    emitter.makeParticles('corona');


        this.emitter = this.game.add.emitter(x, y);

        let area = new Phaser.Rectangle(x, y, width, height); //from nathan bless
        this.emitter.area = area;

        this.emitter.makeParticles('corona');
        // this.emitter.alpha = 0.2;
        this.emitter.setAlpha(0.1, 0, 2000); //min, max, how long to go from min --> max 
        this.emitter.setScale(1, .2, 1, .2, 2000); //min x, max x, min / max y,, rate min --> max

        emitter.gravity = -50;

        if (behind) {
                emitter.gravity = -10;
                this.emitter.start(false, 500, 100);
        }

        else {
                this.emitter.setAlpha(0.3, 0, 500);
                this.emitter.setScale(0.3, .1, 0.3, 0.1, 500);
                this.emitter.start(false, 500, 400) //explode, life span, frequency
        }
}
