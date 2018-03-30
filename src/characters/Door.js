// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import DefaultSprite from "./DefaultSprite";
import PLAYER_DATA from "./player_data.json";

/** 
 * a door is a specialized game object that has different states: open and closed.
 * Furthermore, a door could be locked
 */
export default class extends DefaultSprite {
	constructor(state, x, y, key, properties) {
		super(state.game, x, y, PLAYER_DATA[key].sprite);

		this.isLocked = properties && properties["locked"];

		this.key = key;
		this.state = state;
		this.game = state.game;
		this.data = Object.create(PLAYER_DATA[key]);

		this.animations.add('closed', [0]);
		this.animations.add('open', [1]);
		this.animations.add('locked', [2]);

		if (this.isLocked) {
			if ( this.state.getFlag("l1_storageroomdooropen") === 1) {
				this.play('open');
				this.isLocked = false;
			}
			else {
				this.play('locked'); // initial state = locked
			}
		}
		else {
			this.play('closed'); // initial state = closed.
		}
		
		this.anchor.setTo(0, 0);

		this.game.physics.arcade.enable(this);
		var bodySize = this.data.body_size;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		this.body.immovable = true;
	}

	openDoor() {
		this.play('open');
		this.state.sfx.door_open.play();
		var bodySize = this.data.body_size;
		this.body.setSize(0, 0, bodySize.left, bodySize.top);
	}

	/** called whenever a player collides with this door */
	handleCollision() {
		
		if (this.isLocked && this.state.player.unhandledAction) {
			this.state.dialogs.open("doorlocked", this);
			this.state.player.unhandledAction = false;
			if (this.state.getFlag("l1_storageroomkey")) {
				this.isLocked = false;
				this.state.setFlag("l1_storageroomdooropen", 1);
			}
		}

		if (!this.isLocked) {
			this.openDoor();
		}
	}
}
