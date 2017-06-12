'use strict';

var RPG = RPG || {};

/** a door is a specialized game object that has two states: open and closed. */

RPG.Door = function (state, x, y, key) {
	Phaser.Sprite.call(this, state.game, x, y, state.playerData[key].sprite);

	this.key = key;
	this.state = state;
	this.game = state.game;
	this.data = Object.create(state.playerData[key]);
	this.playerData = state.playerData;

	this.animations.add('closed', [0]);
	this.animations.add('open', [1]);
	this.play('closed'); // initial state = closed.
	this.anchor.setTo(0, 0);

	this.game.physics.arcade.enable(this);
	var bodySize = this.data.body_size;
	this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
	this.body.immovable = true;
};

RPG.Door.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Door.prototype.constructor = RPG.Door;

RPG.Door.prototype.openDoor = function () {
	this.play('open');
	var bodySize = this.data.body_size;
	this.body.setSize(0, 0, bodySize.left, bodySize.top);
};

/** called whenever a player collides with this door */
RPG.Door.prototype.handleCollision = function () {
	this.openDoor();
};
