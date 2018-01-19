// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import DefaultSprite from "./DefaultSprite";

/**
 * Area around the player that always moves with he player.
 * If you move the player so that objects overlap this zone,
 * then certain actions may happen or certain dialogs may open.
 */
export default class extends DefaultSprite {

	constructor(state) {
		super(state.game, 0, 0);
		this.scale.setTo(1.5);

		this.game.physics.arcade.enable(this);
		let { width, height, left, top } = state.playerData.player.trigger_box;
		this.body.setSize(width, height, left, top);
		this.anchor.setTo(1);

	}

}