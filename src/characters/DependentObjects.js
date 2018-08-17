// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import GameObject from "./GameObject";

export default class extends GameObject {
	constructor (state, x, y, key, properties){
		super (state, x, y, key, null);

		this.dependentObject = null;
		this.properties = properties;

		let status = this.state.getFlag(this.properties.statuskey, 0);

		this.alpha = this.properties.subordinate ? status : !status;

		//TODO: No build the object if it is not necessary.
		if(!this.properties.subordinate && status){
			this.destroy();
		}
	}

	/** called whenever a player collides with this game object */
	handleOverlap() {
		if (this.state.player.unhandledAction) {
			if (this.key == "dirtydishes") {
				this.dependentObject = this.state.staticSolids.find(function (obj) {
					return obj.key == 'dishwasher';
				});
				this.state.player.unhandledAction = false;
				this.state.dialogs.open(this.key, this);
			}
		}
	}
}
