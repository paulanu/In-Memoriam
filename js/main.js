"use strict";

// global variables
var game;
var style = {font: 'Helvetica', fontSize: '24px', fill: '#fff'};

// wait for brower
window.onload = function() {
    // define game
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'ourGame');

    // define states
    game.state.add('Load', Load);
    game.state.add('MainMenu', MainMenu);
    game.state.add('Play', Play);
    game.state.add('GameOver', GameOver);

    //test states
    game.state.add('PaulaTestLevel', PaulaTestLevel);
    game.state.add('PaulaTestLevel2', PaulaTestLevel2);
    game.state.add('SandyTestLevel', SandyTestLevel);

    //start initial state
    game.state.start('Load');
}