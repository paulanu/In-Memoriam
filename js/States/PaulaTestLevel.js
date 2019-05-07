// play state
var PaulaTestLevel = function() { 
	var platforms;
	var player;
	var cursors;
};
PaulaTestLevel.prototype = { 

	preload: function() {
	    //load assets from the appropriate folder
		game.load.image('platform', '../../assets/img/temp/platform.png');
		game.load.image('player', '../../assets/img/temp/player.png');
	},

    create: function() {
        game.stage.backgroundColor = "#2300d3";


	    //start the physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

        platforms = game.add.group(); 
    
	    //create the ground and scale it so it fills the bottom
	    var ground = new Platform(game, 0, game.world.height - 25, 'platform', 0, game.world.width);
	    platforms.add(ground); 

	    //create some ledges
	    var platform = new Platform(game, 350, 350, 'platform', 0);
	    platforms.add(platform); 
	    platform = new Platform(game, 500, 200, 'platform', 0);
	    platforms.add(platform); 

        //---TEMPORARY PLAYER FOR TESTING---//
	    player = game.add.sprite(32, game.world.height - 150, 'player'); 
	    game.physics.arcade.enable(player) //enable physics on player
	    
	    //player physics properties
	    player.body.gravity.y = 800; 
	    player.body.collideWorldBounds = true; 

	    //controls
	    cursors = game.input.keyboard.createCursorKeys(); 
	    //---------------------------------//

    },

    update: function() {
        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GameOver');
        }

        game.physics.arcade.collide(player, platforms);

        //-----------TEMPORARY CONTROLS---------------------//
    
	    //reset player velocity 
	    player.body.velocity.x = 0; 
	    
	    //move left
	    if (cursors.left.isDown)
	    {
	        player.body.velocity.x = -150;
	    }

	    //move right
	    else if (cursors.right.isDown)
	    {
	        player.body.velocity.x = 150;
	    }
	    
	    //jump if player is touching the ground
	    if (cursors.up.isDown && player.body.touching.down)
	    {
	        player.body.velocity.y = -500; 
	    }

	    //------------------------------------------------//


    }
}