import * as Constants from "../constants";
import textPlugin from "../plugins/Text";

export default class {
	
	init() {
		this.game.Text = this.game.plugins.add(textPlugin);
		this.textData = this.game.cache.getJSON(Constants.GAME_TEXT);
	}

	create() {
		this.game.sound.stopAll();
		this.menuMusic = this.game.add.audio(Constants.MENU_MUSIC, Constants.MUSIC_VOLUME, Constants.LOOP_MUSIC);
		this.menuMusic.play();
		this.introSound = this.game.add.audio('typing', 1);

		var background = this.game.add.sprite(0, 0, Constants.MENU_BACKGROUND);
		background.width = this.game.world.width;
		background.height = this.game.world.height;
		background.alpha = 0.8;
		background.inputEnabled = true;

		var menuPositionY = this.game.world.height / 3;
		var menuPositionX = this.game.world.width / 3;

		this.game.add.text(menuPositionX, menuPositionY, 'MENU', Constants.MENU_TITLE_STYLE);

		var entryPosition = 60;

		if(localStorage.level) {
			var continueGame = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'Continue Game', Constants.GENERAL_STYLE);
			continueGame.inputEnabled = true;

			continueGame.events.onInputDown.add(function () {
				this.state.start(Constants.GAME_STATE);
			}, this);

			entryPosition += 60;
		}

		var newGame = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'New Game', Constants.GENERAL_STYLE);
		newGame.inputEnabled = true;
		entryPosition += 60;

		newGame.events.onInputDown.add(function () {
			if(localStorage.getItem('flags') !== null) {

				let popup = this.game.add.sprite (this.game.world.width / 3, this.game.world.height / 3, Constants.POPUP_BACKGROUND);
				popup.width = 300;
				popup.height = 250;

				/*let popup = new Phaser.Graphics(this.game, 10, 10);
				popup.lineStyle(3, 0x000000, 1.0);
				popup.beginFill(0xf5f4f6);
				let rect = popup.drawRect(100,200,100, 50);
				popup.endFill();

				console.log(popup);*/

				let cancelButton = new Phaser.Graphics(this.game);
				cancelButton.lineStyle(3, 0x000000, 1.0);
				cancelButton.beginFill(0xf5f5f5);
				cancelButton.drawRoundedRect(10, popup.height - 75 ,100, 50);
				cancelButton.endFill();
				cancelButton.inputEnabled = true;
				cancelButton.input.priorityID = 1;
				cancelButton.input.useHandCursor = true;
				cancelButton.events.onInputDown.add(function (){
					//close the pop up
					popup.destroy();
				}, this);

				let cancelText = this.game.add.text(20, popup.height - 75 + 10, 'Cancel', Constants.GENERAL_STYLE);
				cancelButton.addChild(cancelText);
				popup.addChild(cancelButton);

				let acceptButton = new Phaser.Graphics (this.game);
				acceptButton.lineStyle(3, 0x000000, 1.0);
				acceptButton.beginFill(0xfbfbfb);
				acceptButton.drawRoundedRect(popup.width - 125 , popup.height - 75 ,100, 50);
				acceptButton.endFill();
				acceptButton.inputEnabled = true;
				acceptButton.input.priorityID = 1;
				acceptButton.input.useHandCursor = true;
				acceptButton.events.onInputDown.add(function (){
					//remove the local storage and go to the game
					localStorage.clear();
					this.state.start(Constants.TEXT_STATE, true, false, "intro_text", Constants.GAME_STATE);
					this.playIntroTyping();
				}, this);

				let acceptText = this.game.add.text(popup.width - 125 + 10,  popup.height - 65 , 'Accept', Constants.GENERAL_STYLE);
				acceptButton.addChild(acceptText);
				popup.addChild(acceptButton);
			}else {
				this.state.start(Constants.TEXT_STATE, true, false, "intro_text", Constants.GAME_STATE);
				this.playIntroTyping();
			}
		}, this);

		var credits = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'Credits', Constants.GENERAL_STYLE);
		credits.inputEnabled = true;

		credits.events.onInputDown.add(function () {
			this.state.start(Constants.TEXT_STATE, true, false, "credits", Constants.HOME_STATE);

		}, this);
	}

	playIntroTyping() {
		this.introSound.play();
		this.menuMusic.volume = Constants.MUSIC_VOLUME_LOW;
	}

}