'use strict';

var RPG = RPG || {};

RPG.Character = function (state, x, y, spriteName, data, character, isBodyFrame) {
	Phaser.Sprite.call(this, state.game, x, y, spriteName.toLowerCase(), state.playerData[character].initial_frame);
	isBodyFrame = (typeof isBodyFrame == undefined) ? false : isBodyFrame;

	this.state = state;
	this.game = state.game;
	this.data = Object.create(data);
	this.playerData = state.playerData;
	this.anchor.setTo(0.5);
	this.x = x;
	this.y = y;
	this.spriteName = spriteName.toLowerCase();
	this.initialFrame = state.playerData[character].initial_frame;
	this.isExecutingTask = false;
	this.isCharacterOnHold = false;

	this.animations.add('walk_right', this.playerData.animation_walk_right, this.playerData.frames, true);
	this.animations.add('walk_up', this.playerData.animation_walk_up, this.playerData.frames, true);
	this.animations.add('walk_left', this.playerData.animation_walk_left, this.playerData.frames, true);
	this.animations.add('walk_down', this.playerData.animation_walk_down, this.playerData.frames, true);
	this.animations.add('wake_up', this.playerData.animation_wake_up, this.playerData.frames, false);

	this.game.physics.arcade.enable(this);
	var bodySize = data.body_size;

	if (isBodyFrame) {
		var bodySize = data.trigger_box;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		this.alpha = 0;
	} else {
		var bodySize = data.body_size;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
	}
};

RPG.Character.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Character.prototype.constructor = RPG.Character;

RPG.Character.prototype.setRandomDirection = function () {
	this.setDirection(Math.floor(Math.random() * 4));
};

RPG.Character.prototype.setDirection = function (direction) {
	if (direction == 0) {
		this.body.velocity.y = 0;
		this.body.velocity.x = 100;
		this.play('walk_right');
	}
	else if (direction == 1) {
		this.body.velocity.x = 0;
		this.body.velocity.y = -100;
		this.play('walk_up');
	}
	else if (direction == 2) {
		this.body.velocity.x = -100;
		this.body.velocity.y = 0;
		this.play('walk_left');
	}
	else if (direction == 3) {
		this.body.velocity.y = 100;
		this.body.velocity.x = 0;
		this.play('walk_down');
	}
};

RPG.Character.prototype.handleCollision = function () {

	this.stopMoving();
	this.isCharacterOnHold = true;

	this.game.time.events.add(Phaser.Timer.SECOND * 4, function () {
		this.isCharacterOnHold = false;
	}, this);

	if (this.state.spaceKey.isDown && !this.isExecutingTask) {
		this.isExecutingTask = true;

		// invoke the dialog on this character using the spriteName
		this.state.callAction(this.spriteName, this);
	}
};

RPG.Character.prototype.stopMoving = function (character) {
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	this.animations.stop();
	this.frame = this.playerData.initial_frame;
};

/** update logic, called every game tick */
RPG.Character.prototype.update = function () {

	if (this.isCharacterOnHold == false && this.isExecutingTask == false && (this.body.velocity.x == 0 && this.body.velocity.y == 0)) {
		this.setDirection(0);
	}

};
