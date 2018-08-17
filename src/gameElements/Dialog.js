// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import * as Constants from "../constants";
import DIALOGS from "../dialogs.js";
import SpecialActions from "../SpecialActions.js";

export default class {

	constructor(game, state) {
		this.state = state;
		this.game = game;
	}

	upPressed() {
		if (this.activeDialog) { this.activeDialog.upPressed(); }
	}

	downPressed() {
		if (this.activeDialog) { this.activeDialog.downPressed(); }
	}

	spacePressed() {
		if (this.activeDialog) { this.activeDialog.spacePressed(); }
	}

	hasActiveDialog() {
		return !!(this.activeDialog);
	}

	dialogKeyExists(dialogkey) {
		return (dialogkey in DIALOGS);
	}

	open(objectname, character) {

		if (this.activeDialog) { return; } // Can't activate dialog when one is already active.

		if (character !== undefined) {
			character.isExecutingTask = true;
		}

		this.state.player.stopMoving();
		this.popup(objectname, character);
	}

	popup(objectname, character) {
		if (!(objectname in DIALOGS)) {
			console.error("No dialog found using key: " + objectname);
		}
		else {
			let objectDialogs = DIALOGS[objectname];
			let dialog = new DialogWindow(this.state, this, objectname, character);
			var dialogStartId = dialog.findDialogStart(objectDialogs.start_options, objectDialogs.messages);
			if (dialogStartId !== undefined) {
				this.activeDialog = dialog;
				this.activeDialog.showDialog(objectDialogs, dialogStartId);
			}else {
				this.state.uiBlocked = false;
				character.isExecutingTask = false;
			}
		}
	}

	closeDialog() {
		delete (this.activeDialog);
	}
}

class DialogWindow {

	constructor(state, dialogManager, objectname, character) {
		this.state = state;
		this.dialogManager = dialogManager;
		this.game = state.game;
		this.objectname = objectname;
		this.character = character;
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
		
		var msgWidget = this.game.add.text(this.x, yy, this.currentObjectDialog.message, Constants.MESSAGE_STYLE);
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

			var optionWidget = this.game.add.text(this.x, yy, replyOption.message, Constants.OPTION_STYLE);
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
					SpecialActions.dirtyDishesAction(this.game, this.state, this.character);
				} else if(action == "pick_object"){
					this.character.pickObject();
				} else if (action === "move_around") {
					this.character.isStopped = false;
					this.character.setRandomDirection();
				} else if (action === "pour_coffee") {
					this.state.sfx.coffee_machine_serve.play();
				} else if (action === "machine_broken") {
					this.state.sfx.coffee_machine_broken.play();
				} else if (action === "transfer_remaining_crates") {
					SpecialActions.transferAllCrates(this.game, this.state, this.character);
				}
			}
		}
		if (replyOption.setflag) {
			for (let flag of replyOption.setflag) {
				this.state.setFlag(flag, 1);
			}
		}
		if (replyOption.clearflag) {
			for (let flag of replyOption.clearflag) {
				this.state.setFlag(flag, 0);
			}
		}
		if (replyOption.goto) {
			this.showDialog(objectDialogs, replyOption.goto);
		}
		else {
			this.dialogManager.closeDialog();
		}
	}

	findDialogStart(startOptions, objectMessages) {
		for (let startOptionId of startOptions) {
			let startOptionValue = this.findDialog(objectMessages, startOptionId);
			if (!startOptionValue) {
				throw("Could not find dialog for id: " + startOptionId);
			}
			// first option that has no condition or a condition that is satisfied
			if (!startOptionValue.condition || this.conditionsSatisfyGameState(startOptionValue.condition)) {
				return startOptionId;
			}
		}
		return undefined; // no dialog option satisfying game state found.
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
