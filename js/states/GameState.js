'use strict';

var RPG = RPG || {};

RPG.GameState = {
	init: function () {

		this.flags = {};

		//Flag to made the action of an object available.
		//this.isExecutingTask = false;
		//this.isCharacterOnHold = false;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 0;

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		//Stop the following keys from propagating up to the browser
		this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

		this.playerData = JSON.parse(this.game.cache.getText(Constants.PLAYER_DATA));
		this.currentLevel = 0; // zero meaning level 1, 1 meaning level 2 of course.
	},
	create: function () {

		this.game.stage.backgroundColor = this.playerData.background_color;

		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			this.game.VirtualPad = this.game.plugins.add(Phaser.Plugin.VirtualPad);
			this.initGUI();
			this.touchScreen = true;
		}

		this.initLevel();
	},
	initLevel: function () {
		// clear any leftovers from previous level
		this.game.world.removeAll();

		var tilemap = Constants.TILEMAP_FLOORS[this.currentLevel];

		this.map = this.game.add.tilemap(tilemap);
		this.map.addTilesetImage('officehangover', Constants.TILESET_IMAGE);

		this.collisionLayer = this.map.createLayer('Floor and Walls');
		this.map.createLayer('Shadows');
		this.map.createLayer('Bottom Objects');
		this.map.createLayer('Top Objects').resizeWorld();

		this.initialiseCollisionLayer();

		this.initialiseCharacters();

		if (this.currentLevel == 0) {
			this.player.wakeUp();
		}
	},
	update: function () {
		this.game.physics.arcade.overlap(this.gameobjects, this.playerCollisionFrame, function (gameobj) {gameobj.handleCollision();}, null, this);
		this.game.physics.arcade.overlap(this.gameobjectZones, this.playerCollisionFrame, function (gameobj) {gameobj.handleCollision();}, null, this);
		this.game.physics.arcade.collide(this.gameobjects, this.player);
		this.game.physics.arcade.collide(this.movingobjects, this.player, function (gameobj) {gameobj.handleCollision();}, null, this);
		this.game.physics.arcade.collide(this.characters, this.player);
		this.game.physics.arcade.overlap(this.charactersCollisionFrame, this.playerCollisionFrame, function (character) {character.parent.handleCollision();}, null, this);
		this.game.physics.arcade.collide(this.player, this.collisionLayer);
		this.game.physics.arcade.collide(this.characters, this.collisionLayer, function (character) {character.setRandomDirection();}, null, this);

		/** record the moment that we first start pressing space */
		var spaceKeyState = !!(this.spaceKey.isDown);
		if (spaceKeyState && !this.prevSpaceKeyState) {
			this.justPressedSpace = 1;
		}
		else {
			this.justPressedSpace = 0;
		}
		this.prevSpaceKeyState = spaceKeyState;

		/*this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);
		this.game.physics.arcade.collide(this.player, this.enemies, this.attack, null, this);*/
		if (!this.uiBlocked) {
			this.cursorMovement();
		}

		if (this.touchScreen) {
			this.virtualPadMovement();
		}

		for (var key in this.characters) {
			this.characters[key].update();
		}



	},
	initialiseCharacters: function () {

		this.characters = [];
		this.charactersCollisionFrame = [];
		this.gameobjects = [];
		this.movingobjects = [];
		this.gameobjectZones = [];

		for (var key in this.map.objects.Objects) {
			var obj = this.map.objects.Objects[key];

			// snap to grid:
			obj.x = Math.round(obj.x / 32) * 32;
			obj.y = Math.round(obj.y / 32) * 32;

			if (obj.type == "Start") {
				this.player = new RPG.Player(this, obj.x, obj.y, obj.name, this.playerData.player, Constants.PLAYER_DATA_INIT, false);

				this.playerCollisionFrame = new RPG.Player(this, 0, 0, obj.name, this.playerData.player, Constants.PLAYER_DATA_INIT, true);
				this.player.addChild(this.playerCollisionFrame);
				this.player.body.collideWorldBounds = true;
				this.game.camera.follow(this.player);
			}
			else if (obj.type == "Character") {
				var character = new RPG.Character(this, obj.x, obj.y, obj.name, this.playerData.player, Constants.PLAYER_DATA_INIT, false);
				this.add.existing(character);
				var characterFrame = new RPG.Character(this, 0, 0, obj.name, this.playerData.player, Constants.PLAYER_DATA_INIT, true);
				character.addChild(characterFrame);
				character.body.collideWorldBounds = true;
				character.setRandomDirection();
				this.characters.push(character);
				this.charactersCollisionFrame.push(characterFrame);
			}
			else if (obj.type == "Door") {
				var sprite = new RPG.Door(this, obj.x, obj.y, 'door');
				this.add.existing(sprite);
				this.movingobjects.push(sprite);
			}
			else if (obj.type == "BeerCrateDropZone") {
				var sprite = new RPG.BeerCrateDropZone(this, obj.x, obj.y, obj.type.toLowerCase(), obj.name);
				this.add.existing(sprite);
				this.gameobjectZones.push(sprite);
			}
			else {
				var sprite = new RPG.GameObject(this, obj.x, obj.y, obj.type.toLowerCase());
				this.add.existing(sprite);
				this.gameobjects.push(sprite);
			}
			/*
			else {
				console.error ("Map contains object of undefined type " + obj.type);
			}*/
			this.add.existing(this.player);
		}

		// temporary demo of action cloud
		var actionCloud = this.game.add.sprite(this.player.x, this.player.y, 'ActionCloud', 0);
		actionCloud.animations.add('action', [0, 1, 2, 3], 5, true);
		actionCloud.play('action');
		// end of demo code

		if (!this.player) {
			console.error("No player start position found on map!");
		}

		this.game.world.bringToTop(this.player);
	},
	initialiseCollisionLayer: function () {

		// copy the 'blocking' property from all three layers to the bottom layer, the 'collisionLayer'.
		var tileProperties = this.map.tilesets[this.map.getTilesetIndex('officehangover')].tileProperties;
		for (var x = 0; x < this.map.width; ++x) {
			for (var y = 0; y < this.map.width; ++y) {
				var tile1 = this.map.getTile(x, y, 0);
				var tile2 = this.map.getTile(x, y, 2);
				var tile3 = this.map.getTile(x, y, 3);

				if (tile1 == null) continue;

				if (tile1.properties['blocking'])
					tile1.setCollision(true, true, true, true);
				if (tile2 != null && tile2.properties['blocking'])
					tile1.setCollision(true, true, true, true);
				if (tile3 != null && tile3.properties['blocking'])
					tile1.setCollision(true, true, true, true);
			}
		}

	},
	gameOver: function () {
		this.game.state.start('GameState', true, false, this.currentLevel);
	},

	cursorMovement: function () {
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if (this.cursors.left.isDown) {
			this.player.body.velocity.x = -this.playerData.player_speed;
			this.player.play('walk_left');
		} else if (this.cursors.right.isDown) {
			this.player.body.velocity.x = this.playerData.player_speed;
			this.player.play('walk_right');
		}

		if (this.cursors.up.isDown) {
			this.player.body.velocity.y = -this.playerData.player_speed;
			if ((this.cursors.up.isDown || this.player.btnsPressed.up) && (!this.cursors.left.isDown && !this.cursors.right.isDown)) {
				this.player.play('walk_up');
			}
		} else if (this.cursors.down.isDown) {
			this.player.body.velocity.y = this.playerData.player_speed;
			if ((this.cursors.down.isDown) && (!this.cursors.left.isDown && !this.cursors.right.isDown)) {
				this.player.play('walk_down');
			}
		}

		if (this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0) {
			this.player.animations.stop();
			this.player.frame = this.playerData.player.initial_frame;
		}

	},
	virtualPadMovement: function () {

		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if (this.player.btnsPressed.left || this.player.btnsPressed.upleft || this.player.btnsPressed.downleft) {
			this.player.body.velocity.x = -this.playerData.player_speed;
			this.player.play('walk_left');
		} else if (this.player.btnsPressed.right || this.player.btnsPressed.upright || this.player.btnsPressed.downright) {
			this.player.body.velocity.x = this.playerData.player_speed;
			this.player.play('walk_right');
		}

		if (this.player.btnsPressed.up || this.player.btnsPressed.upright || this.player.btnsPressed.upleft) {
			this.player.body.velocity.y = -this.playerData.player_speed;
			this.player.play('walk_up');
		} else if (this.player.btnsPressed.down || this.player.btnsPressed.downright || this.player.btnsPressed.downleft) {
			this.player.body.velocity.y = this.playerData.player_speed;
			this.player.play('walk_down');
		}

		if (this.game.input.activePointer.isUp) {
			this.game.VirtualPad.stopMovement();
		}

		if (this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0) {
			this.player.animations.stop();
			this.player.frame = this.playerData.initial_frame;
		}
	},

	initGUI: function () {
		this.game.VirtualPad.setup(this.player, {
			left: true,
			right: true,
			up: true,
			down: true,
			upleft: true,
			downleft: true,
			upright: true,
			downright: true,
			action: false
		});
	},

	// uncomment to help debug character bounding boxes
/*
	render: function () {
		this.game.debug.bodyInfo(this.player, 32, 32);
		this.game.debug.body(this.player);
		this.game.debug.body(this.playerCollisionFrame);

		for (var i=0; i < this.charactersCollisionFrame.length; i++){
			this.game.debug.body(this.charactersCollisionFrame[i]);
		}
		for (var i = 0; i < this.characters.length; ++i) {
			this.game.debug.body(this.characters[i]);
		}
		for (var i = 0; i < this.gameobjects.length; ++i) {
			this.game.debug.body(this.gameobjects[i]);
			this.game.debug.bodyInfo(this.gameobjects[i], 32, 32);
		}
	},
*/
	callAction: function (objectname, character) {
		//new Action();

		//TEMP: call openDialog directly for testing
		this.openDialog(objectname, character);
	},
	openDialog: function (objectname, character) {
		this.dialog = new RPG.Dialog(this, objectname, character);
		this.dialog.popup();
	},

};
