// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import GameObject from "./GameObject";

export default class extends Phaser.Sprite {
	constructor(state, x, y, key, name) {
		super(state.game, x, y, state.playerData[key].sprite);

		this.key = key;
		this.state = state;
		this.game = state.game;
		this.data = Object.create(state.playerData[key]);
		this.playerData = state.playerData;
		this.name = name;

		this.crates = [];

		if (name === "BeerCrateDropZone1") {
			for (var i = 0; i < 6; ++i) {
				this.makeCrate();
			}
		}

		this.game.physics.arcade.enable(this);
		var bodySize = this.data.body_size;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		this.body.immovable = true;
	}

	makeCrate() {
		for (var pos = 0; pos < 20; ++pos) {
			if (!this.crates[pos] || !this.crates[pos].alive) {
				var nx = this.x + 64 + Math.floor(pos / 3) * 32;
				var ny = this.bottom + 100 - (pos % 3) * 24;
				var sprite = new GameObject(this.state, nx, ny, 'beercrate');
				sprite.beerCratePosition = pos;
				sprite.beerCrateDropZone = this;
				this.crates[pos] = sprite;
				this.game.add.existing(sprite);
				this.state.gameobjects.push(sprite);

				break;
			}
		}
	}

	findCrate() {
		for (var pos = 0; pos < 20; ++pos) {
			if (this.crates[pos] && this.crates[pos].alive) {
				return this.crates[pos];
			}
		}
		return undefined;
	}

	handleCollision() {
		if (this.state.player.unhandledAction) {
			
			if (this.state.player.canDropOff()) {
				this.state.callAction(this.name, this);
				this.state.player.dropoff();
				this.makeCrate();
				this.state.player.unhandledAction = false;
			}
			else if (this.state.player.canPickup()) {
				if (this.name === "BeerCrateDropZone1")  {
					this.state.callAction(this.name, this);
					this.state.player.unhandledAction = false;

					let crate = this.findCrate();
					if (crate !== undefined) {
						this.state.player.pickup(crate);
					}
				}		
			}
			
		}
	}
}
