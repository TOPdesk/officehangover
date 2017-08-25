import * as Constants from "../constants";
import textPlugin from "../plugins/Text";

export default class {
	
	init() {
		this.game.Text = this.game.plugins.add(textPlugin);
		this.textData = this.game.cache.getJSON(Constants.GAME_TEXT);
	}

	create() {
		this.game.stage.backgroundColor = Constants.BACKGROUND_BOOT_STATE;
		var background = this.game.add.sprite(0, 0);
		background.width = this.game.world.width;
		background.height = this.game.world.height;
		background.inputEnabled = true;

		var menuPositionY = this.game.world.height / 2 - 180;
		var menuPositionX = this.game.world.centerX / 2;

		this.game.add.text(menuPositionX, menuPositionY, 'MENU', {'fill': '#FFA500'});
		var continueGame = this.game.add.text(menuPositionX, menuPositionY + 60, 'Continue Game');
		continueGame.inputEnabled = true;
		var newGame = this.game.add.text(menuPositionX, menuPositionY + 120, 'New Game');
		newGame.inputEnabled = true;
		var credits = this.game.add.text(menuPositionX, menuPositionY + 180, 'Credits');
		credits.inputEnabled = true;

		continueGame.events.onInputDown.add(function () {
			this.state.start(Constants.GAME_STATE);
		}, this);

		newGame.events.onInputDown.add(function () {
			this.state.start(Constants.TEXT_STATE, true, false, "intro_text", Constants.GAME_STATE);
		}, this);

		credits.events.onInputDown.add(function () {
			this.state.start(Constants.TEXT_STATE, true, false, "credits", Constants.HOME_STATE);

		}, this);
	}

}