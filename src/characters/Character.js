// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import DefaultSprite from "./DefaultSprite";
import PLAYER_DATA from "./player_data.json";

export default class extends DefaultSprite {
	constructor(state, x, y, obj) {
		super(state.game, x, y, obj.name.toLowerCase(), PLAYER_DATA.player.initial_frame);

		this.state = state;
		this.game = state.game;
		this.data = Object.create(PLAYER_DATA.player);
		this.anchor.setTo(0.5);
		this.scale.setTo(1.5);
		this.x = x;
		this.y = y;
		this.spriteName = obj.name.toLowerCase();
		this.initialFrame = PLAYER_DATA.player.initial_frame;
		this.dialogkey = obj.properties && obj.properties.dialogkey;
		
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

		this.animations.add('walk_right', PLAYER_DATA.animation_walk_right, PLAYER_DATA.frames, true);
		this.animations.add('walk_up', PLAYER_DATA.animation_walk_up, PLAYER_DATA.frames, true);
		this.animations.add('walk_left', PLAYER_DATA.animation_walk_left, PLAYER_DATA.frames, true);
		this.animations.add('walk_down', PLAYER_DATA.animation_walk_down, PLAYER_DATA.frames, true);
		this.animations.add('wake_up', PLAYER_DATA.animation_wake_up, PLAYER_DATA.frames, false);

		this.game.physics.arcade.enable(this);

		let { width, height, left, top } = PLAYER_DATA.player.body_size;
		this.body.setSize(width, height, left, top);
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

	handleOverlap() {
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
		this.frame = PLAYER_DATA.initial_frame;
	}

	/** update logic, called every game tick */
	update() {
		if (this.isCharacterOnHold == false && this.isExecutingTask == false && (this.body.velocity.x == 0 && this.body.velocity.y == 0)&& !this.isStopped) {
			this.setDirection(0);
		}
	}
}