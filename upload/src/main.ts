/** @type {import("../typings/phaser.d.ts")} */

"use strict";

import movie_cry from "mini_games/movie_cry";

var config = {
    type: Phaser.AUTO,
    width: 550,
    height: 400,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: movie_cry //<-- pass in aray for multiple scenes
    // { 
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};

var game = new Phaser.Game(config);

// function preload ()
// {
// }

// function create ()
// {
// }

// function update ()
// {
// }