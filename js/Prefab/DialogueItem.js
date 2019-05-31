parallaxForegroundSpeed = .05;
parallaxBackgroundSpeed = .02;

function DialogueItem(game, x, y, spriteWidth, width, height, atlasKey, key, dialogue){

    var sprite = Phaser.Sprite.call(this, game, x, y, atlasKey, key);
    this.minX = x - 10; 
    this.maxX = x + spriteWidth + 10; 
    console.log(this.minX + " " + this.maxX + " "+ x);
    this.boxWidth = width;
    this.boxHeight = height; 

    this.msgBox;
    this.dialogue = dialogue;



}
 
DialogueItem.prototype = Object.create(Phaser.Sprite.prototype);
DialogueItem.prototype.constructor = DialogueItem;

DialogueItem.prototype.update = function() {
   if (player.position.x > this.minX && player.position.x < this.maxX) {
    var x = this.position.x - 10; 
    var y = this.position.y - this.boxHeight;
    console.log(this.position.y + " " + y);
    this.showMessageBox(this.boxWidth, this.boxHeight, x, y, this.dialogue);

   }
   else if (this.msgBox != null)
    this.msgBox.destroy();
}

DialogueItem.prototype.showMessageBox = function(width, height, x, y, text) {
    if (this.msgBox) {
        this.msgBox.destroy();
    }

    //group to hold all messageBoxElements
    var msgBox = game.add.group(); 

    var back = game.add.sprite(0, 0, 'msgBoxBack');
    back.width = width;
    back.height = height; 
    back.alpha = .5; 

    var text = game.add.text(0, 0, text)
    text.wordWrap = true; 
    //TODO: change width to be width of dialogue box
    text.wordWrapWidth = width * .9; 

    msgBox.add(back); 
    msgBox.add(text);

    msgBox.x = x; 
    msgBox.y = y; 

    //set text in middle of message box
    text.x = back.width / 2 - text.width / 2;
    text.y = back.height / 2 - text.height / 2; 

    this.msgBox = msgBox; 
}

