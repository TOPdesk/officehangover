import * as Constants from "../constants";

export default class {
	constructor(state, objectname, character) {
		this.state = state;
		this.game = state.game;
		this.objectname = objectname;
		this.character = character;
		this.dialogs = this.game.cache.getJSON(Constants.DIALOGS);
	}

	popup() {
		var objectDialogs = this.dialogs[this.objectname];
		if (!(this.objectname in this.dialogs)) {
			console.error("No dialog found using key: " + this.objectname);
		}
		else {
			this.showStartDialog(objectDialogs);
		}
	}

	showStartDialog(objectDialogs) {
		var dialog = this;
		var dialogStartId = dialog.findDialogStart(objectDialogs.start_options, objectDialogs.messages);
		dialog.showDialog(objectDialogs, dialogStartId);
	}

	showDialog(objectDialogs, id) {
		
		this.state.uiBlocked = true;

		// calculate a reasonable margin, 10% of width or 10% of height, whichever is smaller.
		this.margin = Math.min(this.game.width / 10, this.game.height / 10);
		this.lineHeight = 100;

		this.y = this.margin;
		this.x = this.margin;
		this.w = this.game.width - 2 * this.margin;
		this.h = this.game.height - 2 * this.margin;

		// running y counter
		var yy = this.y;

		this.objects = [];
		this.optionWidgets = [];
		this.replies = [];
		this.objectDialogs = objectDialogs;

		// semi-transparent black background
		var bg = this.game.add.graphics(this.game.width, this.game.height);
		bg.beginFill("#000000", 0.7);
		bg.x = this.x;
		bg.y = this.y;
		bg.drawRect(0, 0, this.w, this.h);
		bg.fixedToCamera = true;

		this.objects.push(bg);

		this.currentObjectDialog = this.findDialog(objectDialogs.messages, id);
		
		var msgWidget = this.game.add.text(this.x, yy, this.currentObjectDialog.message, {'fill': '#FFA500'});
		msgWidget.wordWrap = true;
		msgWidget.wordWrapWidth = this.w;

		msgWidget.fixedToCamera = true;
		const PADDING = 16;
		yy += msgWidget.height + 2 * PADDING;

		this.objects.push(msgWidget);

		for (let replyOption of this.currentObjectDialog.replies) {
			if (replyOption.condition) {
				var result = this.conditionsSatisfyGameState(replyOption.condition);
				if (!result) continue; // skip this option
			}

			var optionWidget = this.game.add.text(this.x, yy, replyOption.message, {'fill': '#00FFA5'});
			optionWidget.wordWrap = true;
			optionWidget.wordWrapWidth = this.w;

			yy += optionWidget.height + PADDING;

			optionWidget.fixedToCamera = true;
			optionWidget.inputEnabled = true;
			optionWidget.events.onInputDown.add(function () {
				this.activateOption(objectDialogs, replyOption);
			}, this);

			this.replies.push(replyOption);
			this.objects.push(optionWidget);
			this.optionWidgets.push(optionWidget);
		}

		this.focusOption(0);
	}

	spacePressed() {
		let replyOption = this.replies[this.selectedIndex];
		if (replyOption !== undefined) {
			this.activateOption(this.objectDialogs, replyOption);
		}
	}

	upPressed() {
		this.focusOption(this.selectedIndex - 1);
	}
	downPressed() {
		this.focusOption(this.selectedIndex + 1);
	}

	focusOption(index) {
		// clear the animation on the old option
		if (this.tween !== undefined) { this.tween.stop(); }
		let oldOption = this.optionWidgets[this.selectedIndex];
		if (oldOption !== undefined) oldOption.alpha = 1.0;

		// selected a new option and wrap around the index
		this.selectedIndex = index;
		if (this.selectedIndex < 0) this.selectedIndex = this.optionWidgets.length-1;
		if (this.selectedIndex >= this.optionWidgets.length) this.selectedIndex = 0;

		// animate the newly selected option
		let option = this.optionWidgets[this.selectedIndex];
		this.tween = this.game.add.tween(option).to( { alpha: 0.5 }, 300, "Linear", true).yoyo().loop();
	}

	activateOption(objectDialogs, replyOption) {
		this.close();
		if (replyOption.actions) {
			for (let action of replyOption.actions) {
				if (action == "dirtydishes"){
					this.character.dirtyDishesAction();
				} else if(action == "pick_mobile"){
					this.character.pickMobile();
				} else if (action === "pickup_beercrate") {
					this.state.player.pickup(this.character);
				}
			}
		}
		if (replyOption.setflag) {
			for (let flag of replyOption.setflag) {
				console.log("Flag " + flag + " is set");
				this.state.flags[flag] = 1;
			}
		}
		if (replyOption.clearflag) {
			for (let flag of replyOption.clearflag) {
				console.log("Flag " + flag + " is cleared");
				this.state.flags[flag] = 0;
			}
		}
		if (replyOption.goto) {
			this.showDialog(objectDialogs, replyOption.goto);
		}
		else {
			this.state.closeDialog();
		}
	}

	findDialogStart(startOptions, objectMessages) {
		for (var i = 0; i < startOptions.length; i++) {
			var startOptionId = startOptions[i];
			var startOptionValue = this.findDialog(objectMessages, startOptionId);
			// first option that has no condition or a condition that is satisfied
			if (!startOptionValue.condition || this.conditionsSatisfyGameState(startOptionValue.condition)) {
				return startOptionId;
			}
		}
		//TODO do we need error handling?
	}

	findDialog(dialogs, idToFind) {
		for (var i = 0; i < dialogs.length; i++) {
			if (dialogs[i].id === idToFind) {
				return dialogs[i];
			}
		}
		return null;
	}

	conditionsSatisfyGameState(condition) {
		// turn the condition string into a javascript function and evaluate it
		var conditionFunc = new Function("state", condition);
		var result = conditionFunc(this.state);
		console.log("Checking condition: " + condition + " which results in " + result);
		return result;
	}

	close() {
		this.state.uiBlocked = false;
		this.character.isExecutingTask = false;
		// this.game.input.keyboard.removeCallbacks(this); //TODO

		// destroy all components of the dialog
		this.objects.forEach(function (element) {
			element.destroy();
		});
	}
	
}
