var textStyle = { fontFamily: 'Courier', fontSize: '36px', fill: '#fff', fontStyle: 'bold' };
var backTextStyle = { fontFamily: 'Courier', fontSize: '43px', fill: '#fff', fontStyle: 'bold' };
export default class TitleText extends Phaser.Scene {
    constructor() {
        super(TITLETEXT_KEY);
        this.startingHeight = 50;
        this.currentLine = 0;
        this.textVerticalSpacing = 50; //how far apart text should be
        this.backTextOffsetHeight = 2; //offset backtext from regular text for visual effect
    }
    preload() {
        this.load.text('titletext', 'assets/text/titletext.txt');
    }
    create() {
        //this enables mouse input
        this.input.on('pointerup', this.onClick, this);
        //read text file
        var titleText = this.cache.text.get('titletext');
        this.text = titleText.split('\n');
        //add in text
        this.textObject = this.add.text(this.scale.width / 2, this.startingHeight, this.text[0], textStyle);
        this.textObject.setOrigin(.5, .5); //is this same as set anchor? 
        //add in back text for visual effect
        this.backTextObject = this.add.text(this.scale.width / 2, this.startingHeight + this.backTextOffsetHeight, this.text[0]).setStyle(backTextStyle);
        this.backTextObject.setOrigin(0.5);
        this.backTextObject.alpha = .2;
        //add in flashing text below everything
        this.flashingTextObject = this.add.text(this.scale.width / 2, this.startingHeight + this.textVerticalSpacing, '[click to cont]', textStyle);
        this.flashingTextObject.setOrigin(0.5);
        this.flashingTextObject.alpha = 0.5;
        this.flashingTextObject.setShadow(.1, .1, '#fff', 1);
        //create them flash tween
        var flashTween = this.tweens.add({
            targets: this.flashingTextObject,
            alpha: 0.1,
            duration: 2000,
            repeat: -1,
            yoyo: true
        });
        //keep track of variables
        this.currentLine++;
        this.currentYPos = this.startingHeight + this.textVerticalSpacing;
    }
    update() {
        //basic ass scene w nothing to update lol
    }
    //Raise the willpower on click
    onClick() {
        //enter the next scene if you've reached the end of the title text
        if (this.currentLine >= this.text.length) {
            //game.world.setBounds(0, 0, 1980, game.world.height);  //IS THIS NECESSARY IN P3		
            //this.scene.start('TitleScreen', true, false, 120, game.world.height - 460, .65, 0, 0, 0, false);
        }
        else { //display next line
            //display next line
            this.textObject = this.add.text(this.scale.width / 2, this.currentYPos, this.text[this.currentLine], textStyle);
            this.textObject.setOrigin(0.5);
            //display back text effect for next line
            this.backTextObject = this.add.text(this.scale.width / 2, this.currentYPos + this.backTextOffsetHeight, this.text[this.currentLine], backTextStyle);
            this.backTextObject.setOrigin(0.5);
            this.backTextObject.alpha = .2;
            //variable updating
            this.currentLine++;
            this.currentYPos += this.textVerticalSpacing;
            //move "click to cont" text down
            this.flashingTextObject.y += this.textVerticalSpacing;
        }
    }
}
