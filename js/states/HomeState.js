var RPG = RPG || {}

RPG.HomeState = {
    create: function (){
        var background = this.game.add.sprite(0,0);
        background.width = this.game.world.width;
        background.height = this.game.world.height;
        background.inputEnabled = true;
        console.log(background);

        var style = {font:'18px Arial', fill: '#000'};

        var text = "You wake up in a large room. There is a lot of sound. You blink a few times. ";
        text += "You try to determine where you are. Some flashbacks. There was a party. There was beer, tequila. ";
        text += "An office party. You check your pockets. Phone gone, wallet gone, keys gone. Oh no..... ";
        text += "Your head hurts, you need coffee and your bed. Let's find your stuff and go home. But first, coffee.. ";
        var words = text.split(" ");
        var output = null;
        var initWidth= 50;
        var initHeight = 100;

        for(var i=0;i<words.length;i++) {
            var word = words[i];
            //window.setTimeout(function (word){
                output = this.game.add.bitmapText(initWidth, initHeight, 'desyrel', word, 30);
                 if ((output.textWidth + 5 + initWidth)< (background.width - 155)) {
                     initWidth += output.textWidth + 5;
                 }
                 else {
                     initHeight += output.textHeight + 10;
                     initWidth = 50;
                }
            //}.bind(this, initWidth, initHeight), 2000);
        }

        this.game.add.text(this.game.world.centerX + 50, this.game.world.height - 50, 'TOUCH TO START', style);

        background.events.onInputDown.add(function (){
            this.state.start('GameState');
        }, this);
    }
};