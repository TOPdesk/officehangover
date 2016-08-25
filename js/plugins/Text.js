Phaser.Plugin.Text = function(game, parent) {
  Phaser.Plugin.call(this, game, parent);
  this.game = game;
};

Phaser.Plugin.Text.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Text.prototype.constructor = Phaser.Plugin.Text

Phaser.Plugin.Text.prototype.setup = function (){
  this.line=[];
  this.wordIndex=0;
  this.lineIndex=0;
  this.wordDelay=120;
  this.lineDelay=400;
  this.text="";
  this.content="";
};

Phaser.Plugin.Text.prototype.create = function(content,posX, posY, config, callback) {
    console.log(content);
    this.content=content;
    this.callback = callback;

    //TODO: Add a customize styling

    this.text = this.game.add.text(posX, posY, "", { font: "28px Arial", fill: "#ff0044", align: "left" });

    this.nextLine();
}

Phaser.Plugin.Text.prototype.nextLine = function() {

    if (this.lineIndex === this.content.length)
    {
        //  We're finished
        this.callback();
        return;
    }

    //  Split the current line on spaces, so one word per array element
    this.line = this.content[this.lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    this.wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);

    //  Advance to the next line
    this.lineIndex++;

}

Phaser.Plugin.Text.prototype.nextWord = function() {

    //  Add the next word onto the text string, followed by a space
    this.text.text = this.text.text.concat(this.line[this.wordIndex] + " ");

    //  Advance the word index to the next word in the line
    this.wordIndex++;

    //  Last word?
    if (this.wordIndex === this.line.length)
    {
        //  Add a carriage return
        this.text.text = this.text.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        this.game.time.events.add(this.lineDelay, this.nextLine, this);
    }

}
