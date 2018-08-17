// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import DefaultSprite from "./DefaultSprite";
import * as Constants from "../constants";
import assert from "../assert.js";

export default class extends DefaultSprite {
	constructor(state, x, y, type, properties) {
		let key = (properties && properties.subtype) || type;
		assert(key in state.playerData, "Key: '" + key + "' is not in playerData");
		super(state.game, x, y, state.playerData[key].sprite);

		this.key = key;
		this.type = type;
		this.properties = properties || {};
		this.dialogkey = this.properties.dialogkey;
		this.state = state;
		this.game = state.game;
		this.data = Object.create(state.playerData[key]);
		this.playerData = state.playerData;
		this.anchor.setTo(0, 0);
		this.isExecutingTask = false;
		this.isCharacterOnHold = false;

		let status = this.state.getFlag(this.properties.statuskey, 0);
		this.alpha = this.properties.startHidden ? status : !status;

		//TODO: No build the object if it is not necessary.
		if(!this.properties.startHidden && status) {
			this.destroy();
		}
		else {
			this.game.physics.arcade.enable(this);
			var bodySize = this.data.body_size;
			this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
			this.body.immovable = true;	
		}

	}

	/** called whenever a player is very near to this game object */
	handleOverlap() {
		if (this.state.player.unhandledAction) {
			if (this.type === "Actionable") {
				this.state.player.unhandledAction = false;
				this.state.callAction(this.dialogkey, this);
			}
	
		} else if (this.type === "Exit") {
			if (this.state.currentLevel == 0) {
				this.state.currentLevel = 1;
				this.state.setFlag("currentLevel", this.state.currentLevel);
				this.state.initLevel();

			}
			else {
				this.state.state.start(Constants.TEXT_STATE, true, false, "the_end", Constants.HOME_STATE);
			}
		}
	}

	pickObject (){
		let tween = this.game.add.tween(this).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function () {
			this.destroy();
		}, this);
	}
}
