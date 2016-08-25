'use strict';

var RPG = RPG || {};

RPG.StaminaBar = function (state, x, y, key, scale) {
    this.game = state.game;

    Phaser.Sprite.call(this, state.game, x, y, key);

    this.anchor.setTo(0.5);
    this.refreshStaminabar(scale);

    this.game.physics.arcade.enable(this);

};

RPG.StaminaBar.prototype = Object.create(Phaser.Sprite.prototype);
RPG.StaminaBar.prototype.constructor = RPG.StaminaBar;


RPG.StaminaBar.prototype.refreshStaminabar = function(long) {
    this.scale.setTo(long ,0.5);
};

