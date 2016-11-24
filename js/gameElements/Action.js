'use strict';

var RPG = RPG || {};

RPG.Action = function (type) {

    this.type =  type;

    switch (type){
    	case "dialog": this.createDialog();
                        break;
        case "stamina": this.collectItem();
                        break;
        default: break;
    }
}


RPG.Action.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Action.prototype.constructor = RPG.Action;

RPG.Action.prototype.createDialog = function() {
}

RPG.Action.prototype.collectItem = function() {
    //add to the player and the stamina bar the points
}

