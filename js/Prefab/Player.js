var game = new Phaser.Game(854, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    //load assets from the appropriate folder
	game.load.image('sky', 'assets/img/sky.png');
	game.load.image('ground', 'assets/img/platform.png');
	game.load.image('star', 'assets/img/star.png');
	game.load.image('diamond', 'assets/img/diamond.png');
	game.load.spritesheet('dude', 'assets/img/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/img/baddie.png', 32, 32);

}

var platforms;
var player; 
var cursors;
 
var stars; 
var diamond; 
var score = 0; 
var scoreText; 

var badBoys;

function create() {
    //start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //add the background (must add it first, so that it's behind everything)
	game.add.sprite(0, 0, 'sky');

    //---PLATFORMS---//
    platforms = game.add.group(); 
    
    //enable physics for them platforms
    platforms.enableBody = true; 

    //create the ground and scale it so it fills the bottom
    var ground = platforms.create(0, game.world.height - 64, 'ground'); 
    ground.scale.setTo(2, 2); 
    ground.body.immovable = true; //ground won't fall

    //create some ledges
    var ledge = platforms.create(350, 350, 'ground'); 
    ledge.body.immovable = true; 
    var ledge = platforms.create(425, 250, 'ground'); 
    ledge.body.immovable = true; 
    ledge = platforms.create(-250, 250, 'ground'); 
    ledge.body.immovable = true; 
    ledge = platforms.create(200, 500, 'ground'); 
    ledge.scale.setTo(.2, 1);
    ledge.body.immovable = true; 
    //----------------//

    //---THE PLAYER---//
    player = game.add.sprite(32, game.world.height - 150, 'dude'); 
    game.physics.arcade.enable(player) //enable physics on player
    
    //player physics properties
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 300; 
    player.body.collideWorldBounds = true; 

    //player anim
    player.animations.add('left', [0, 1, 2, 3], 10, true); 
    player.animations.add('right', [5, 6, 7, 8], 10, true); 
    //----------------//

    //---CONTROLS---//
    cursors = game.input.keyboard.createCursorKeys(); 
    //--------------//

    //---STARS---//
    stars = game.add.group(); 
    stars.enableBody = true; 

    //create stars 
    for (var i = 0; i < 12; i++)
    {
        var star = stars.create(i * 70, 0, 'star');  //create star in group
        star.body.gravity.y = 300; 
        star.body.bounce.y = 0.7 + Math.random() * 0.2; 
    }
    //--------------//

    //---THE SCORE---//
    scoreText = game.add.text(16, 16, 'Score: 0', {fontSize: '32px', fill: '#000' });
    //--------------//

    //---DIAMOND---// 
    var x = Math.random() * game.world.width; 
    var y = Math.random() * (game.world.height - 64); //-64 to account for ground 
	diamond = game.add.sprite(x, y, 'diamond');
    game.physics.arcade.enable(diamond); //enable physics or else overlap doesn't work???? 
    //honestly not sure why bc i thought overlap doesn't use physics
    //--------------//

    //---BAD BOYS---// 
    badBoys = game.add.group(); 
    badBoys.enableBody = true; 

    //Bad Boy #1
    var badBoy = badBoys.create(32, 0, 'baddie'); 
    badBoy.body.gravity.y = 300; 
    badBoy.animations.add('left', [0, 1], 10, true); 
    badBoy.animations.play('left');

    //Bad Boy #1
    var badBoy = badBoys.create(350, game.world.height - 100, 'baddie'); 
    badBoy.body.gravity.y = 300; 
    badBoy.animations.add('right', [2, 3], 10, true); 
    badBoy.animations.play('right');
    //--------------//


}

function update() {
	//collisions between (player, stars) and platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.collide(badBoys, platforms);

    //player collects stars (by touching them)
    game.physics.arcade.overlap(player, stars, collectStar, null, this);

    //player collects diamond
    game.physics.arcade.overlap(player, diamond, collectDiamond, null, this);

    //badBoy hurts player... or is player murdering badBoy???!!!
    game.physics.arcade.overlap(player, badBoys, badBoyDESTROYED, null, this);

    //---CONTROLS---//
    
    //reset player velocity 
    player.body.velocity.x = 0; 
    
    //move left
    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;
        player.animations.play('left');
    }

    //move right
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;
        player.animations.play('right');
    }
    
    //stand still
    else
    {
        player.animations.stop(); 
        player.frame = 4;
    }   

    //jump if player is touching the ground
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350; 
    }

    //--------------//

}

// Removes the star from the screen
function collectStar(player, star) 
{
    star.kill();

    score += 10;
    scoreText.text = 'Score: ' + score;
}

// Removes the diamond from the screen
function collectDiamond(player, diamond) 
{
    diamond.kill();

    score += 50;
    scoreText.text = 'Score: ' + score;
}

function badBoyDESTROYED(player, badBoy) 
{
    badBoy.kill(); //:( he just survivin

    score -= 25;
    scoreText.text = 'Score: ' + score;
}



