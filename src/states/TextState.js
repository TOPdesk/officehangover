import * as Constants from "../constants";
import textPlugin from "../plugins/Text";

export default class {
	/**
	 * @param {String} displayTextKey The lookup key of the text that's going to be displayed next time you switch to this state.
	 * The lookup key should match one of the keys found in text.json data.
	 * @param {String} nextState Constant that indicates which state should be switched to afterwards.
	 */
	init (displayTextKey, nextState) {
		this.game.Text = this.game.plugins.add(textPlugin);
		this.textData = this.game.cache.getJSON(Constants.GAME_TEXT);
		this.displayText = this.textData[displayTextKey];
		this.nextState = nextState;
	}
	
	create() {
		var background = this.game.add.sprite(0, 0);
		background.width = this.game.world.width;
		background.height = this.game.world.height;
		background.inputEnabled = true;

		this.game.Text.setup();

		this.game.Text.create(this.displayText, background.width / 10, background.height / 10, {}, (function () {

			this.game.time.events.add(Phaser.Timer.SECOND * 3, function () {
				this.state.start(this.nextState);
			}, this);

		}).bind(this));

	}
}