// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');
		game.load.image('player_stand', 'assets/img/player_stand.png');
        game.load.spritesheet('player_walk_left', 'assets/img/player_walk_left.png', 120, 265);
        game.load.spritesheet('player_walk_right', 'assets/img/player_walk_right.png', 120, 265);
        game.load.image('player_jump', 'assets/img/player_jump.png');

        game.load.image('stage1_bg_sepia', 'assets/img/stage1_bg_sepia.png');
        game.load.image('stage1_bg_bw', 'assets/img/stage1_bg_bw.png');
        game.load.image('grass_ground_sepia', 'assets/img/stage1_grass_ground_sepia.png');
        game.load.image('grass_ground_bw', 'assets/img/stage1_grass_ground_bw.png');
        game.load.image('grass_platform_sepia', 'assets/img/stage1_grass_platform_sepia.png');
        game.load.image('grass_platform_bw', 'assets/img/stage1_grass_platform_bw.png');
        game.load.image('rock_sepia', 'assets/img/stage1_rock_sepia.png');
        game.load.image('rock_bw', 'assets/img/stage1_rock_bw.png');
        game.load.image('stage1_tree_sepia', 'assets/img/stage1_tree_sepia.png');
        game.load.image('stage1_tree_bw', 'assets/img/stage1_tree_bw.png');


		game.load.image('fade_in', 'assets/img/temp/fade_in.png');
		jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		switchKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}