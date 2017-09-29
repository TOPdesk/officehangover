import * as Constants from "../constants";
import textPlugin from "../plugins/Text";

export default class {
	
	init() {
		this.game.Text = this.game.plugins.add(textPlugin);
		this.textData = this.game.cache.getJSON(Constants.GAME_TEXT);
	}

	create() {
		this.menuMusic = this.game.add.audio(Constants.MENU_MUSIC, Constants.MUSIC_VOLUME, Constants.LOOP_MUSIC);
		this.menuMusic.play();
		this.game.stage.backgroundColor = Constants.BACKGROUND_BOOT_STATE;
		var background = this.game.add.sprite(0, 0);
		background.width = this.game.world.width;
		background.height = this.game.world.height;
		background.inputEnabled = true;

		var menuPositionY = this.game.world.height / 2 - 180;
		var menuPositionX = this.game.world.centerX / 2;

		this.game.add.text(menuPositionX, menuPositionY, 'MENU', Constants.TITLE_STYLE);

		var entryPosition = 60;

		if(localStorage.level) {
			var continueGame = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'Continue Game', Constants.GENERAL_STYLE);
			continueGame.inputEnabled = true;

			continueGame.events.onInputDown.add(function () {
				this.music.stop();
				this.state.start(Constants.GAME_STATE);
			}, this);

			entryPosition += 60;
		}

		var newGame = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'New Game', Constants.GENERAL_STYLE);
		newGame.inputEnabled = true;
		entryPosition += 60;

		newGame.events.onInputDown.add(function () {
			if(localStorage.getItem('flags') !== null) {

				//  You can drag the pop-up window around
				let popup = this.game.add.sprite(400, 400, Constants.GAME_BACKGROUND);
				popup.alpha = 0.8;
				popup.anchor.set(0.5);
				popup.scale.set(1);

				//  Position the close button to the top-right of the popup sprite (minus 8px for spacing)
				var pw = (popup.width / 2) - 30;
				var ph = (popup.height / 2) - 8;

				//  And click the close button to close it
				var cancelButton = this.game.make.sprite(pw+200, -ph, Constants.CANCEL_BUTTON);
				cancelButton.inputEnabled = true;
				cancelButton.input.priorityID = 1;
				cancelButton.input.useHandCursor = true;
				cancelButton.events.onInputDown.add(function (){
					//close the pop up
					popup.destroy();
				}, this);
				popup.addChild(cancelButton);

				//  And click the close button to close it
				var acceptButton = this.game.make.sprite(pw, -ph, Constants.ACCEPT_BUTTON);
				acceptButton.inputEnabled = true;
				acceptButton.input.priorityID = 1;
				acceptButton.input.useHandCursor = true;
				acceptButton.events.onInputDown.add(function (){
					//remove the local storage and go to the game
					localStorage.clear();
					this.menuMusic.stop();
					this.state.start(Constants.TEXT_STATE, true, false, "intro_text", Constants.GAME_STATE);
				}, this);
				popup.addChild(acceptButton);

			}else {
				this.menuMusic.stop();
				this.state.start(Constants.TEXT_STATE, true, false, "intro_text", Constants.GAME_STATE);
			}
		}, this);

		var credits = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'Credits', Constants.GENERAL_STYLE);
		credits.inputEnabled = true;

		credits.events.onInputDown.add(function () {
			this.state.start(Constants.TEXT_STATE, true, false, "credits", Constants.HOME_STATE);

		}, this);
	}

}