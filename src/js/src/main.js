/** @type {import("../typings/phaser.d.ts")} */
"use strict";
var backStyle = { font: 'Courier', fontSize: '43px', fill: '#fff', fontWeight: 'bold' };
import TitleText from "/In_Memoriam/src/js/Scenes/TitleText";
import PorchPresent from "/In_Memoriam/src/js/Scenes/PorchPresent";
import Load from "/In_Memoriam/src/js/Load";
var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Load, TitleText, PorchPresent] //<-- pass in array for multiple scenes
    // { 
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};
var game = new Phaser.Game(config);
