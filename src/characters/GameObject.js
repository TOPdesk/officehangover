// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import DefaultSprite from "./DefaultSprite";
import * as Constants from "../constants";

export default class extends DefaultSprite {
	constructor(state, x, y, key, type, properties) {
		super(state.game, x, y, state.playerData[key].sprite);

		this.key = key.toLowerCase();
		this.type = (type == null) ? "" : type.toLowerCase();
		this.properties = properties || {};
		this.dialogkey = this.properties.dialogkey;
		this.state = state;
		this.game = state.game;
		this.data = Object.create(state.playerData[key]);
		this.playerData = state.playerData;
		this.anchor.setTo(0, 0);
		this.isExecutingTask = false;
		this.isCharacterOnHold = false;

		this.game.physics.arcade.enable(this);
		var bodySize = this.data.body_size;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		this.body.immovable = true;

	}

	/** called whenever a player is very near to this game object */
	handleOverlap() {
		if (this.state.player.unhandledAction) {
			if (this.type == "actionable") {
				this.state.player.unhandledAction = false;
				this.state.callAction(this.dialogkey, this);
			}
		} else if (this.key == "exit") {
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
