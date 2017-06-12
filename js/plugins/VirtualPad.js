Phaser.Plugin.VirtualPad = function (game, parent) {
	Phaser.Plugin.call(this, game, parent);
	this.game = game;
};

Phaser.Plugin.VirtualPad.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.VirtualPad.prototype.constructor = Phaser.Plugin.VirtualPad;

Phaser.Plugin.VirtualPad.prototype.setup = function (player, buttons) {
	this.character1 = player;
	this.character1.btnsPressed = this.character1.btnsPressed || {};

	this.buttons = buttons;

	this.customButtons();

	this.setTexture('directionBitmap', '#4BAFE3', this.btnW, this.btnH);
	this.setTexture('diagonalBitmap', '#4BAFE3', this.btnW, this.btnH);
	this.setTexture('actionBitmap', '#C14BE3', this.sizeActionBtn, this.sizeActionBtn);

	if (this.buttons.left) {
		this.leftArrow = {};
		this.setPosition(this.leftArrow, this.edgeDistance, this.game.height - this.edgeDistance - this.btnW - this.btnH);
		this.directionalButton('leftArrow', this.leftArrow.x, this.leftArrow.y, this.directionBitmap, "left");
	}

	if (this.buttons.right) {
		this.rightArrow = {};
		this.setPosition(this.rightArrow, this.edgeDistance + this.btnH + this.btnW, this.game.height - this.edgeDistance - this.btnW - this.btnH);
		this.directionalButton('rightArrow', this.rightArrow.x, this.rightArrow.y, this.directionBitmap, "right");
	}
	if (this.buttons.up) {
		this.upArrow = {};
		this.setPosition(this.upArrow, this.edgeDistance + this.btnW + this.btnH, this.game.height - this.edgeDistance - 2 * this.btnW - this.btnH);
		this.directionalButton('upArrow', this.upArrow.x, this.upArrow.y, this.directionBitmap, "up", 0.5, 90);
	}
	if (this.buttons.down) {
		this.downArrow = {};
		this.setPosition(this.downArrow, this.edgeDistance + this.btnW + this.btnH, this.game.height - this.edgeDistance - this.btnW);
		this.directionalButton('downArrow', this.downArrow.x, this.downArrow.y, this.directionBitmap, "down", 0.5, 90);
	}
	if (this.buttons.upleft) {
		this.leftUpArrow = {};
		this.directionalButton('leftUpArrow', this.leftArrow.x, this.upArrow.y, this.directionBitmap, "upleft", 0.3);
	}
	if (this.buttons.upright) {
		this.rightUpArrow = {};
		this.directionalButton('rightUpArrow', this.rightArrow.x, this.upArrow.y, this.directionBitmap, "upright", 0.3);
	}
	if (this.buttons.downleft) {
		this.downLeftArrow = {};
		this.directionalButton('downLeftArrow', this.leftArrow.x, this.downArrow.y, this.directionBitmap, "downleft", 0.3);
	}
	if (this.buttons.downright) {
		this.downRightArrow = {};
		this.directionalButton('downRightArrow', this.rightArrow.x, this.downArrow.y, this.directionBitmap, "downright", 0.3);
	}

	if (buttons.action) {
		var actionX = this.game.width - this.edgeDistance - this.sizeActionBtn;
		var actionY = this.game.height - this.edgeDistance - this.btnW - this.btnH;
		this.actionButton = this.game.add.button(actionX, actionY, this.actionBitmap);
		this.actionButton.alpha = 0.5;
		this.actionButton.fixedToCamera = true;

		this.actionButton.events.onInputDown.add(function () {
			player.btnsPressed.action = true;
		}, this);

		this.actionButton.events.onInputUp.add(function () {
			player.btnsPressed.action = false;
		}, this);
	}
};

Phaser.Plugin.VirtualPad.prototype.setPosition = function (item, x, y) {
	this.setPositionX(item, x);
	this.setPositionY(item, y);
	return item;
};

Phaser.Plugin.VirtualPad.prototype.setPositionX = function (item, x) {
	item.x = x;
};

Phaser.Plugin.VirtualPad.prototype.setPositionY = function (item, y) {
	item.y = y;
};

Phaser.Plugin.VirtualPad.prototype.setTexture = function (item, color, width, height) {
	this[item] = this.game.add.bitmapData(width, height);
	this[item].ctx.fillStyle = color;
	this[item].ctx.fillRect(0, 0, width, height);
};

Phaser.Plugin.VirtualPad.prototype.directionalButton = function (item, x, y, bitmap, direction, alpha, angle) {
	alpha = alpha ? alpha : 0.5;

	this[item] = this.game.add.button(x, y, bitmap);

	this[item].alpha = alpha;
	if (angle) {
		this[item].angle = angle;
	}
	this[item].fixedToCamera = true;

	//events
	this[item].events.onInputDown.add(function () {
		this.character1.btnsPressed[direction] = true;
	}, this);

	this[item].events.onInputUp.add(function () {
		this.character1.btnsPressed[direction] = false;
	}, this);

	this[item].events.onInputOver.add(function () {
		this.character1.btnsPressed[direction] = true;
	}, this);

	this[item].events.onInputOut.add(function () {
		this.character1.btnsPressed[direction] = false;
	}, this);

};

Phaser.Plugin.VirtualPad.prototype.customButtons = function (size, edge, action) {
	size = size ? size : 0.04;
	edge = edge ? edge : 0.25;
	action = action ? action : 1.5;

	this.btnH = size * this.game.width;
	this.btnW = this.btnH;
	this.edgeDistance = edge * this.btnH;
	this.sizeActionBtn = action * this.btnH;
};

Phaser.Plugin.VirtualPad.prototype.stopMovement = function () {
	this.character1.btnsPressed = {};
};