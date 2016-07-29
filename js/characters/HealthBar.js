'use strict';

var RPG = RPG || {};

RPG.HealthBar = function (state, x, y, key, scale) {
    this.game = state.game;

    Phaser.Sprite.call(this, state.game, x, y, key);

    this.anchor.setTo(0.5);
    this.refreshHealthbar(scale);

    this.game.physics.arcade.enable(this);

};

RPG.HealthBar.prototype = Object.create(Phaser.Sprite.prototype);
RPG.HealthBar.prototype.constructor = RPG.HealthBar;


RPG.HealthBar.prototype.refreshHealthbar = function(long) {
    this.scale.setTo(long ,0.5);
};

