'use strict';

var RPG = RPG || {};

/** a door is a specialized game object that has two states: open and closed. */

RPG.BeerCrateDropZone = function (state, x, y, key, name) {
	Phaser.Sprite.call(this, state.game, x, y, state.playerData[key].sprite);

	this.key = key;
	this.state = state;
	this.game = state.game;
	this.data = Object.create(state.playerData[key]);
	this.playerData = state.playerData;
	this.name = name;

	this.crateCount = 0;
	if (name === "BeerCrateDropZone1") {
		for (var i = 0; i < 6; ++i) {
			this.makeCrate();
		}
	}

	this.game.physics.arcade.enable(this);
	var bodySize = this.data.body_size;
	this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
	this.body.immovable = true;
};

RPG.BeerCrateDropZone.prototype = Object.create(Phaser.Sprite.prototype);
RPG.BeerCrateDropZone.prototype.constructor = RPG.Door;

/** called whenever a player collides with this door */
RPG.BeerCrateDropZone.prototype.makeCrate = function() {

	var nx = this.x + Math.floor(this.crateCount / 3) * 32;
	var ny = this.y - (this.crateCount % 3) * 32;
	this.crateCount += 1;
	var sprite = new RPG.GameObject(this.state, nx, ny, 'beercrate');
	sprite.beerCrateDropZone = this;
	this.game.add.existing(sprite);
	this.state.gameobjects.push(sprite);

};

/** called whenever a player collides with this door */
RPG.BeerCrateDropZone.prototype.handleCollision = function () {
	
	if (this.state.justPressedSpace) {
		if (this.state.player.canDropOff()) {
			this.state.player.dropoff();
			this.makeCrate();
		}
		
	}
	else {
		// TODO: dialog is buggy for some reason...
		/* if (this.state.player.canDropOff() && !this.isExecutingTask) {
			this.isExecutingTask = true;
			this.state.callAction(this.name, this);
		} */
	}

};