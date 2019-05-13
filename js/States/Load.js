// load state
var Load = function(game) {};
Load.prototype= {
    preload: function() {
        // load assets
        console.log('LOAD');
		game.load.spritesheet('player_animation', 'assets/img/player_animation.png', 170, 266);

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
		switchKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
    },
    create: function() {
        // go to MainMenu
        game.state.start('MainMenu');
    }
}