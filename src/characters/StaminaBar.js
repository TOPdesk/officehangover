'use strict';

var RPG = RPG || {};

RPG.StaminaBar = function (state, x, y, key, length) {
	this.game = state.game;
	this.stamina = length;

	Phaser.Sprite.call(this, state.game, x, y, key);
	this.anchor.setTo(0.5, 2.5);
	this.refreshStaminabar(this.stamina);

	this.game.physics.arcade.enable(this);

};

RPG.StaminaBar.prototype = Object.create(Phaser.Sprite.prototype);
RPG.StaminaBar.prototype.constructor = RPG.StaminaBar;


RPG.StaminaBar.prototype.refreshStaminabar = function (long) {
	this.scale.setTo(long, 0.5);
};


RPG.StaminaBar.prototype.incrementStaminaBar = function (amount) {
	this.scale.setTo(this.stamina + amount, 0.5);
};

RPG.StaminaBar.prototype.decrementStaminaBar = function (amount) {
	this.scale.setTo(this.stamina - amount, 0.5);
};
