

'use strict'


var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('ground', 'assets/img/platform.png');
  game.load.image('block', 'assets/img/block.png');
  game.load.spritesheet('dude', 'assets/img/dude.png', 32, 48);
}

var platforms;
var player;
var cursors;
var block;


function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.stage.backgroundColor = "#ccddaa";

  platforms = game.add.group();
  platforms.enableBody = true;

  var ground = platforms.create(0, game.world.height - 64, 'ground');
  ground.scale.setTo(2, 2);
  ground.body.immovable = true;//to make the ground not moving or become stable.

  player = game.add.sprite(32, game.world.height - 150, 'dude');
  game.physics.arcade.enable(player);//to enable physics on the player

  player.body.bounce.y = 0.10;//to give player bounce
  player.body.gravity.y = 300; //smaller the number higher the player can jump
  player.body.collideWorldBounds =true;

  player.animations.add('left', [0, 1, 2, 3], 10, true);//uses frames 0,1,2,3 runs at 10 frames per second. The 'true' tells the animation to loop.
  player.animations.add('right', [5, 6, 7, 8], 10, true);//uses frames 5,6,7,8 to run right

  block = game.add.sprite(300, 100, 'block');
  block.enableBody = true;
  game.physics.arcade.enable(block);
  block.body.bounce.y =0.2;

  block.body.gravity.y =1000;
  block.body.immovable = false;
  block.body.collideWorldBounds =true;







}
function update() {
  //var hit = game.physics.arcade.collide(block, player);
  var hitPlatform = game.physics.arcade.collide(player, platforms);
  cursors = game.input.keyboard.createCursorKeys();//to make the player to move by using keyboard
  player.body.velocity.x = 0;
  //block.body.velocity.x = 0;
       if (cursors.left.isDown){//move to left
           player.body.velocity.x = -150;
           player.animations.play('left');
       }
       if (cursors.right.isDown){
           player.body.velocity.x =150;//move to right
           player.animations.play('right');

       }
       else{
           player.animations.stop();
           player.frame = 4;//show frame #4

       }
         game.physics.arcade.collide(block, platforms);
         game.physics.arcade.collide(block, player);
    
       if(cursors.up.isDown && player.body.touching.down){//if player is tounching the ground
           player.body.velocity.y = -350;//player can jump
       }
       //else if(cursors.up.isDown && player.body.touching.down && hit){
        //player.body.velocity.y = -350;
       //}


  game.physics.arcade.collide(block, platforms);
  game.physics.arcade.collide(block, player);
  //game.physics.arcade.overlap(player, block, table, null, this);



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
