'use strict';

var RPG = RPG || {};

/**
A game object represents non-moving objects spread around the level that you interact with,
such as the PC, the coffee machine.
*/

RPG.GameObject = function (state, x, y, key) {
        console.log(key);
    Phaser.Sprite.call(this, state.game, x, y, state.playerData[key].sprite);

    this.key = key.toLowerCase();
    this.state = state;
    this.game = state.game;
    this.data = Object.create(state.playerData[key]);
    this.playerData = state.playerData;
    this.anchor.setTo(0, 0);
    this.isExecutingTask = false;
    this.isCharacterOnHold = false;

    this.game.physics.arcade.enable(this);
    var bodySize = this.data.body_size
    this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
    this.body.immovable = true
};

RPG.GameObject.prototype = Object.create(Phaser.Sprite.prototype);
RPG.GameObject.prototype.constructor = RPG.GameObject;

/** called whenever a player collides with this game object */
RPG.GameObject.prototype.handleCollision = function () {
    if (this.state.spaceKey.isDown && !this.isExecutingTask) {
        this.isExecutingTask = true;
        if (this.key == "pc" || this.key == "coffeemachine") {
          this.state.callAction(this.key, this);
        }
        else if (this.key == "BeerCrate") {
            this.state.player.pickup()
        }
    }
    else if (this.key == "exit") {
        this.state.currentLevel = 1;
        this.state.initLevel();
    }
};
