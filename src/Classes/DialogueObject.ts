var boxWidth = 100; 

var textBoxWidth = 300;
var textBoxHeight = 125;

var textBox; 
var text; 

export default class DialogueObject extends Phaser.GameObjects.Image {

    dialogue: string; 

    constructor(scene, x, y, frame, dialogue) {
        super(scene, x, y, frame);

        this.scene = scene; 
        this.dialogue = dialogue;

        //set dialogue to appear when clicked (for alpha > 1)
        this.setInteractive(scene.input.makePixelPerfect()); 
        this.on('pointerdown', this.onClick);

        //make it invisible 
        // this.alpha = 0; 

    }

    onClick() {

        //check if text is already displayed
        if (textBox && text) {
            textBox.destroy();
            text.destroy();
        }

        //display text and textbox
        textBox = this.scene.add.image(this.scene.scale.width/2, 
            this.scene.scale.height - textBoxHeight, 'textbox');
        text = this.scene.add.text(textBox.x, textBox.y, this.dialogue).setOrigin(.5, .5);
        textBox.alpha = .4;
        text.setWordWrapWidth(textBoxWidth * 2 - 25);
    }

    //use when player clicks outside of any dialogueobjects
    static destroyTextBox() {
        if (textBox && text) {
            textBox.destroy();
            text.destroy();
        }
    }

}

// DialogueItem.prototype.update = function() {
//    this.maxX = this.position.x + this.width + 20;
//    if (player.position.x > this.minX && player.position.x < this.maxX && (fadeInRect.frame == 19 ||
//     fadeInRect.frame == 0)) {
//         var x = this.position.x - ((game.math.difference(this.width, this.boxWidth) / 2)); //center that beech 
//         var y = player.position.y - 100; 
//         this.showMessageBox(this.boxWidth, this.boxHeight, x, y, this.dialogue);
//    }
//    else if (this.msgBox != null)
//     this.msgBox.destroy();
// }

// DialogueItem.prototype.showMessageBox = function(width, height, x, y, text) {
//     if (this.msgBox) {
//         this.msgBox.destroy();
//     }

//     //group to hold all messageBoxElements
//     var msgBoxNew = game.add.group(); 

//     var back = game.add.sprite(0, 0, 'msgBoxBack');
//     back.width = width;
//     back.height = height; 
//     back.alpha = .5; 

//     var text = game.add.text(0, 0, text);
//     text.font = 'Courier';
//     text.fontSize = 18;
//     // text.fontWeight = 'bold';

//     //  Stroke color and thickness
//     // text.stroke = '#000000';
//     // text.strokeThickness = 6;
//     text.fill = '#ffffff';
//     text.wordWrap = true; 
//     //TODO: change width to be width of dialogue box
//     text.wordWrapWidth = width * .9; 

//     msgBoxNew.add(back); 
//     msgBoxNew.add(text);

//     msgBoxNew.x = x; 
//     msgBoxNew.y = y; 

//     //set text in middle of message box
//     text.x = back.width / 2 - text.width / 2;
//     text.y = back.height / 2 - text.height / 2; 

//     this.msgBox = msgBoxNew; 
// }

