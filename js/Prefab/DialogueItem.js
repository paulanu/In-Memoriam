parallaxForegroundSpeed = .05;
parallaxBackgroundSpeed = .02;
var msgBox; 

function DialogueItem(game, x, y, spriteWidth, width, height, atlasKey, key, dialogue){

    var sprite = Phaser.Sprite.call(this, game, x, y, atlasKey, key);
    this.spriteWidth = spriteWidth;
    this.minX = x - 90; 
    this.maxX = x + spriteWidth + 90; 
    this.boxWidth = width;
    this.boxHeight = height; 

    this.dialogue = dialogue;



}
 
DialogueItem.prototype = Object.create(Phaser.Sprite.prototype);
DialogueItem.prototype.constructor = DialogueItem;

DialogueItem.prototype.update = function() {
   if (player.position.x > this.minX && player.position.x < this.maxX && !switching) {
    var x = this.position.x + ((this.spriteWidth - this.boxWidth) / 2); //center that beech 
    var y = this.position.y - this.boxHeight - 10;
    this.showMessageBox(this.boxWidth, this.boxHeight, x, y, this.dialogue);

   }
   else if (msgBox != null)
    msgBox.destroy();
}

DialogueItem.prototype.showMessageBox = function(width, height, x, y, text) {
    if (msgBox) {
        msgBox.destroy();
    }

    //group to hold all messageBoxElements
    var msgBoxNew = game.add.group(); 

    var back = game.add.sprite(0, 0, 'msgBoxBack');
    back.width = width;
    back.height = height; 
    back.alpha = .5; 

    var text = game.add.text(0, 0, text);
    text.font = 'Courier';
    text.fontSize = 18;
    // text.fontWeight = 'bold';

    //  Stroke color and thickness
    // text.stroke = '#000000';
    // text.strokeThickness = 6;
    text.fill = '#ffffff';
    text.wordWrap = true; 
    //TODO: change width to be width of dialogue box
    text.wordWrapWidth = width * .9; 

    msgBoxNew.add(back); 
    msgBoxNew.add(text);

    msgBoxNew.x = x; 
    msgBoxNew.y = y; 

    //set text in middle of message box
    text.x = back.width / 2 - text.width / 2;
    text.y = back.height / 2 - text.height / 2; 

    msgBox = msgBoxNew; 
}

