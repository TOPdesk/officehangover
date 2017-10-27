// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

export default class extends Phaser.Sprite {
	constructor(state, x, y, obj, data, character, isBodyFrame, dialogkey) {
		super(state.game, x, y, obj.name.toLowerCase(), state.playerData[character].initial_frame);
		isBodyFrame = (typeof isBodyFrame == undefined) ? false : isBodyFrame;

		this.state = state;
		this.game = state.game;
		this.data = Object.create(data);
		this.playerData = state.playerData;
		this.anchor.setTo(0.5);
		this.scale.setTo(1.5);
		this.x = x;
		this.y = y;
		this.spriteName = obj.name.toLowerCase();
		this.initialFrame = state.playerData[character].initial_frame;
		this.dialogkey = obj.properties && obj.properties.dialogkey && obj.properties.dialogkey.toLowerCase();
		
		// fail fast if dialog key is missing
		if (!this.state.dialogs.dialogKeyExists(this.dialogkey) && obj.type !== "Start") {
			throw ("Could not find dialog key: " + this.dialogkey + " for character " + obj.name);
		}

		// isExecutingTask is set to true to prevent movement while you are interacting with a character through a dialog. 
		this.isExecutingTask = false;

		// isCharacterOnHold makes a character pause and restart after a collision
		this.isCharacterOnHold = false;

		// isStopped is a flag to make a character permanently stop moving.
		this.isStopped = obj.properties && !!obj.properties["stopped"];

		this.animations.add('walk_right', this.playerData.animation_walk_right, this.playerData.frames, true);
		this.animations.add('walk_up', this.playerData.animation_walk_up, this.playerData.frames, true);
		this.animations.add('walk_left', this.playerData.animation_walk_left, this.playerData.frames, true);
		this.animations.add('walk_down', this.playerData.animation_walk_down, this.playerData.frames, true);
		this.animations.add('wake_up', this.playerData.animation_wake_up, this.playerData.frames, false);

		this.game.physics.arcade.enable(this);

		if (isBodyFrame) {
			let { width, height, left, top } = data.trigger_box;
			this.body.setSize(width, height, left, top);
			this.alpha = 0;
		} else {
			let { width, height, left, top } = data.body_size;
			this.body.setSize(width, height, left, top);
		}

	}

	setRandomDirection() {
		this.setDirection(Math.floor(Math.random() * 4));
	}

	setDirection(direction) {

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
	}

	handleCollision() {
		this.stopMoving();
		this.isCharacterOnHold = true;

		if (!this.isStopped) {
			this.game.time.events.add(Phaser.Timer.SECOND * 4, function () {
				this.isCharacterOnHold = false;
			}, this);
		}

		if (this.state.justPressedSpace && !this.isExecutingTask) {
			// invoke the dialog on this character using the spriteName
			this.state.callAction(this.dialogkey, this);
		}
	}

	stopMoving() {
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		this.animations.stop();
		this.frame = this.playerData.initial_frame;
	}

	/** update logic, called every game tick */
	update() {
		if (this.isCharacterOnHold == false && this.isExecutingTask == false && (this.body.velocity.x == 0 && this.body.velocity.y == 0)&& !this.isStopped) {
			this.setDirection(0);
		}
	}
}