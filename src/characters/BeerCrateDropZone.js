// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import DefaultSprite from "./DefaultSprite";
import GameObject from "./GameObject";
import PLAYER_DATA from "./player_data.json";

const STACK_HEIGHT = 3;

export default class extends DefaultSprite {
	
	constructor(state, x, y, key, name, obj) {
		super(state.game, x, y, PLAYER_DATA[key].sprite);

		this.key = key;
		this.state = state;
		this.game = state.game;
		this.data = Object.create(PLAYER_DATA[key]);
		this.name = name;
		this.flagkey = "l1_" + name + "_crates";

		let properties = obj.properties || {};
		let mapDefinedInitialCount = properties && properties["initialCount"];
		let initialCount = this.state.getFlag(this.flagkey, mapDefinedInitialCount);

		this.crates = [];

		this.game.physics.arcade.enable(this);
		this.body.setSize(obj.width, obj.height);
		this.body.immovable = true;

		for (var i = 0; i < initialCount; ++i) {
			this.makeCrate();
		}
	}

	makeCrate() {
		let pos = this.crates.length;
		
		var nx = this.x + Math.floor(pos / STACK_HEIGHT) * 32;
		var ny = this.body.bottom - 32 - (pos % STACK_HEIGHT) * 24;

		console.log (this.x, this.y, this.width, this.height, nx, ny);

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
