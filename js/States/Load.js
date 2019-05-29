// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');

		game.load.spritesheet('player_animation', 'assets/img/player_animation.png', 170, 266);
        
        //background
        game.load.atlasJSONHash('levelOneSprites', 'assets/img/LevelOne.png','assets/img/LevelOne.json');

        //fixed sizing issues, add to atlas later
        game.load.image('Night_Grass' , 'assets/img/new/Night_Grass.png');
        game.load.image('Night_Mailbox' , 'assets/img/new/Night_Mailbox.png');
        
        //Temp 
        game.load.image('corona', 'assets/img/temp/blue.png');
		game.load.image('fade_in', 'assets/img/temp/fade_in.png');
		switchKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}