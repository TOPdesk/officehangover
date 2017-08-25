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