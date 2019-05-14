var SandyTestLevel = function(){
	var platforms;
    var player;
    var cursors;
    var block;
}

SandyTestLevel.prototype = {

	preload: function() {


	},
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = "#ccddaa";

		platforms = game.add.group();
        platforms.enableBody = true;

        //var platform = platforms.create(20, game.world.height - 25, 'platform');
        var ground = platforms.create(0, game.world.height - 64, 'ground');
        
        ground.scale.setTo(2, 2);
        ground.body.immovable = true;


        player = game.add.sprite(5, game.world.height -150 , 'player');
        game.physics.arcade.enable(player);//to enable physics on the player

        player.body.bounce.y = 0.10;//to give player bounce


        player.body.gravity.y = 800; 
	    player.body.collideWorldBounds = true;
	    console.log(player.body);
	    console.log(player);

	    block = game.add.sprite(300, 100, 'block');
        block.enableBody = true;
        game.physics.arcade.enable(block);
        block.body.bounce.y =0.2;

        block.body.gravity.y =1000;
        block.body.immovable = false;
        block.body.collideWorldBounds =true;

	},
	update: function() {
		var hitPlatform = game.physics.arcade.collide(player, platforms);
        cursors = game.input.keyboard.createCursorKeys();//to make the player to move by using keyboard
        player.body.velocity.x = 0;
        //block.body.velocity.x = 0;
       if (cursors.left.isDown){//move to left
           player.body.velocity.x = -150;
           //player.animations.play('left');
       }
       if (cursors.right.isDown){
           player.body.velocity.x =150;//move to right
           //player.animations.play('right');

       }
       /*else{
           player.animations.stop();
           player.frame = 4;//show frame #4

       }*/
         game.physics.arcade.collide(block, platforms);
         game.physics.arcade.collide(block, player);
    
       if(cursors.up.isDown && player.body.touching.down){//if player is tounching the ground
           player.body.velocity.y = -350;//player can jump
       }
       //else if(cursors.up.isDown && player.body.touching.down && hit){
        //player.body.velocity.y = -350;
       //}

	}

}

function table (player, block){
  if(game.input.keyboard.isDown(Phaser.keyboard.SPACEBAR)){
    block.body.velocity = 0;
    if(cursors.left.isDown){
      block.body.velocity.x = -150;
    }
    if(cursors.right.isDown){
      block.body.velocity.x = 150;
    }
  }
}







