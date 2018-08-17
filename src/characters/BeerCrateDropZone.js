// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import DefaultSprite from "./DefaultSprite";
import GameObject from "./GameObject";
import PLAYER_DATA from "./player_data.json";

const STACK_HEIGHT = 3;

export default class extends DefaultSprite {
	
	constructor(state, x, y, key, name, properties) {
		super(state.game, x, y, PLAYER_DATA[key].sprite);

		this.key = key;
		this.state = state;
		this.game = state.game;
		this.data = Object.create(PLAYER_DATA[key]);
		this.name = name;
		this.flagkey = "l1_" + name + "_crates";

		let mapDefinedInitialCount = properties && properties["initialCount"];
		let initialCount = this.state.getFlag(this.flagkey, mapDefinedInitialCount);

		this.crates = [];

		for (var i = 0; i < initialCount; ++i) {
			this.makeCrate();
		}

		this.game.physics.arcade.enable(this);
		var bodySize = this.data.body_size;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		this.body.immovable = true;
	}

	makeCrate() {
		let pos = this.crates.length;
		
		var nx = this.x + 96 - Math.floor(pos / STACK_HEIGHT) * 32;
		var ny = this.bottom + 100 - (pos % STACK_HEIGHT) * 24;
		var sprite = new GameObject(this.state, nx, ny, "BeerCrate");
		
		sprite.beerCratePosition = pos;
		sprite.beerCrateDropZone = this;

		this.crates.push(sprite);
		this.game.add.existing(sprite);
		this.state.staticSolids.push(sprite);
		this.state.setFlag(this.flagkey, this.crates.length);
	}

	hasCrates() {
		return this.crates.length > 0;
	}

	findCrate() {
		if (this.crates.length > 0) {
			let result = this.crates.pop();
			this.state.setFlag(this.flagkey, this.crates.length);
			return result;
		} 
		else {
			return undefined;
		}
	}

	handleOverlap() {
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
