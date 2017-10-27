// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import * as Constants from "../constants";

export default class {

	init() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	}
	
	preload () {
		this.load.image('preloadBar', 'assets/images/bar.png');
	}

	create() {
		this.game.stage.backgroundColor = Constants.BACKGROUND_BOOT_STATE;
		this.state.start(Constants.PRELOAD_STATE);
	}

}