import * as Constants from "../constants";
import textPlugin from "../plugins/Text";

export default {
	init: function () {
		this.game.Text = this.game.plugins.add(textPlugin);
		this.textData = this.game.cache.getJSON(Constants.GAME_TEXT);
	},
	create: function () {
		var background = this.game.add.sprite(0, 0);
		background.width = this.game.world.width;
		background.height = this.game.world.height;
		background.inputEnabled = true;

		var menuPositionY = this.game.world.height / 2 - 180;
		var menuPositionX = this.game.world.centerX / 2;

		var menu = this.game.add.text(menuPositionX, menuPositionY, 'MENU', {'fill': '#FFA500'});
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
			menu.destroy();
			newGame.destroy();
			continueGame.destroy();
			credits.destroy();

			this.game.Text.setup();

			this.game.Text.create(this.textData.intro_text, menuPositionX / 2, menuPositionY, {}, (function () {
				this.state.start(Constants.GAME_STATE);
			}).bind(this));

		}, this);

		credits.events.onInputDown.add(function () {
			menu.destroy();
			newGame.destroy();
			continueGame.destroy();
			credits.destroy();

			this.game.Text.setup();

			this.game.Text.create(this.textData.credits, menuPositionX / 2, menuPositionY, {}, (function () {
				this.state.start(Constants.HOME_STATE);
			}).bind(this));

		}, this);

	}
};