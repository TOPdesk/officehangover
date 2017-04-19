'use strict';

var RPG = RPG || {};

RPG.Dialog = function (state, objectname) {
	this.state = state;
	this.game = state.game;
	this.objectname = objectname;
	this.dialogs = JSON.parse(this.game.cache.getText(Constants.DIALOGS));

}

RPG.Dialog.prototype = Object.create(Object.prototype);
RPG.Dialog.prototype.constructor = RPG.Dialog;

RPG.Dialog.prototype.popup = function() {
	var objectDialogs = this.dialogs[this.objectname];
	this.showStartDialog(objectDialogs);
}

RPG.Dialog.prototype.showStartDialog = function(objectDialogs) {
	var dialog = this;
	var dialogStartId = dialog.findDialogStart(objectDialogs.start_options, objectDialogs.messages);
	dialog.showDialog(objectDialogs, dialogStartId);
}

RPG.Dialog.prototype.showDialog = function(objectDialogs, id) {
	var game = this.game;
	var state = this.state;
	var dialog = this;

	this.state.uiBlocked = true;

	// calculate a reasonable margin, 10% of width or 10% of height, whichever is smaller.
	this.margin = Math.min (this.game.width / 10, this.game.height / 10);
	this.lineHeight = 100;

	this.y = this.margin;
	this.x = this.margin;
	this.w = this.game.width - 2 * this.margin;
	this.h = this.game.height - 2 * this.margin;

	// running y counter
	var yy = this.y;

	this.objects = [];

	// semi-transparent black background
	var bg = game.add.graphics(game.width, game.height);
	bg.beginFill("#000000", 0.7);
	bg.x = this.x;
	bg.y = this.y;
	bg.drawRect(0, 0, this.w, this.h);
	bg.fixedToCamera = true;

	this.objects.push(bg);

	var currentObjectDialog = dialog.findDialog(objectDialogs.messages, id);

	var msgWidget = this.game.add.text(this.x, yy, currentObjectDialog.message, {'fill': '#FFA500'});
	msgWidget.wordWrap = true;
	msgWidget.wordWrapWidth = dialog.w;

	msgWidget.fixedToCamera = true;
	yy += this.lineHeight; //TODO - multi-line?

	this.objects.push(msgWidget);

	currentObjectDialog.replies.forEach (function(replyOption) {
		if (replyOption.condition) {
			var result = dialog.conditionsSatisfyGameState(replyOption.condition);
			if (!result) return; // skip this option
		}

		var optionWidget = game.add.text(dialog.x, yy, replyOption.message, {'fill': '#00FFA5'});
		optionWidget.wordWrap = true;
		optionWidget.wordWrapWidth = dialog.w;

		yy += dialog.lineHeight; //TODO: multi-line?

		optionWidget.fixedToCamera = true;
		optionWidget.inputEnabled = true;
		optionWidget.events.onInputDown.add(function () {
			dialog.close();
			if (replyOption.goto) {
				dialog.showDialog(objectDialogs, replyOption.goto);
			}
			if (replyOption.actions) {
				replyOption.actions.forEach(function(action) { /* TODO ACTION*/ })
			}
			if (replyOption.setflag) {
				replyOption.setflag.forEach(function(flag) { console.log("Flag " + flag + " is set"); state.flags[flag] = 1 })
			}
			if (replyOption.clearflag) {
				replyOption.clearflag.forEach(function(flag) { console.log("Flag " + flag + " is cleared"); state.flags[flag] = 0 })
			}

		}, this);

		dialog.objects.push(optionWidget);
	});
}

RPG.Dialog.prototype.findDialogStart = function(startOptions, objectMessages) {
	var dialog = this;
	for (var i = 0; i < startOptions.length; i++) {
		var startOptionId = startOptions[i];
		var startOptionValue = dialog.findDialog(objectMessages, startOptionId);
		// first option that has no condition or a condition that is satisfied
		if (!startOptionValue.condition || dialog.conditionsSatisfyGameState(startOptionValue.condition)) {
			return startOptionId;
		}
	}
	//TODO do we need error handling?
};

RPG.Dialog.prototype.findDialog = function(dialogs, idToFind) {
	for (var i = 0; i < dialogs.length; i++) {
		if (dialogs[i].id === idToFind) {
			return dialogs[i];
		}
	}
	return null;
};

RPG.Dialog.prototype.conditionsSatisfyGameState = function(condition) {
	// turn the condition string into a javascript function and evaluate it
	var conditionFunc = new Function("state", condition);
	var result = conditionFunc(this.state);
	console.log("Checking condition: " + condition + " which results in " + result);
	return result;
}

RPG.Dialog.prototype.close = function() {

	this.state.uiBlocked = false;
	this.state.isExecutingTask = false;

	// destroy all components of the dialog
	this.objects.forEach (function(element) {
		element.destroy();
	});

}
