'use strict';

var RPG = RPG || {};

RPG.GameObject = function (state, x, y, key) {
    Phaser.Sprite.call(this, state.game, x, y, state.playerData[key].sprite);

    this.key = key
    this.state = state;
    this.game = state.game;
    this.data = Object.create(state.playerData[key]);
    this.playerData = state.playerData;
    this.anchor.setTo(0.5);
    this.isExecutingTask = false;
    this.isCharacterOnHold = false;

    this.game.physics.arcade.enable(this);
    var bodySize = this.data.body_size
    this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
    this.body.immovable = true
};

RPG.GameObject.prototype = Object.create(Phaser.Sprite.prototype);
RPG.GameObject.prototype.constructor = RPG.GameObject;
