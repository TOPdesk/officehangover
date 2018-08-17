// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import * as Constants from "../constants";
import Player from "../characters/Player";
import Character from "../characters/Character";
import Door from "../characters/Door";
import BeerCrateDropZone from "../characters/BeerCrateDropZone";
import GameObject from "../characters/GameObject";
import DialogManager from "../gameElements/Dialog";

export default {

	/**
	 * Get a flag, with option default value if the flag doesn't exist.
	 * 
	 * Always use the getter and setter to access the flags.
	 * This way you can be sure that the flags are saved in localStorage
	 */
	getFlag: function(key, defaultVal) {
		if (key in this._flags) {
			return this._flags[key];
		}
		else {
			return defaultVal;
		}
	},

	/*
		Set a flag and update local storage

		Always use the getter and setter to access the flags.
		This way you can be sure that the flags are saved in localStorage
	*/
	setFlag: function(key, value) {
		this._flags[key] = value;
		localStorage.setItem("flags", JSON.stringify(this._flags));
		console.log("Flag " + key + " is set to " + value);
	},

	/**
	 * initialize flags. read them from localstorage if possible
	 */ 
	initFlags: function() {
		this._flags = {};
		//check the localstorage
		if(localStorage.getItem('flags') !== null) {
			try {
				this._flags = JSON.parse(localStorage.getItem('flags'));
			} 
			catch (e) { 
				console.error (e + "\nCouldn't parse flags from local storage. Falling back to empty start"); 
			}
		} 
	},

	init: function () {
		this.initFlags();

		this.inputChars = []; // for cheat codes

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 0;

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.dialogs = new DialogManager(this.game, this);
		
		// Capture key presses for dialogs
		this.cursors.up.onDown.add(function() {
			this.dialogs.upPressed();
		}, this);

		this.cursors.down.onDown.add(function() { 
			this.dialogs.downPressed();
		}, this);

		this.spaceKey.onDown.add(function() {
			if (this.dialogs.hasActiveDialog()) {
				this.dialogs.spacePressed();
			}
			else {
				this.justPressedSpace = 1; 
			}
		}, this);

		//Stop the following keys from propagating up to the browser
		this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

		//  Capture all key presses
		this.game.input.keyboard.addCallbacks(this, null, null, this.keyPress);

		this.playerData = this.game.cache.getJSON(Constants.PLAYER_DATA);

		this.currentLevel = this.getFlag("currentLevel", 0);

		this.sfx = {};
		this.sfx.door_open = this.game.add.audio('door_open', Constants.SFX_VOLUME);
		this.sfx.coffee_machine_broken = this.game.add.audio('coffee_machine_broken', Constants.SFX_VOLUME);
		this.sfx.coffee_machine_serve = this.game.add.audio('coffee_machine_serve', Constants.SFX_VOLUME);
		this.game.sound.stopAll();
		this.sfx.game_music = this.game.add.audio(Constants.GAME_MUSIC, Constants.MUSIC_VOLUME, Constants.LOOP_MUSIC);
		this.sfx.game_music.play();
		// add other sounds to sfx dictionary here!
	},
	create: function () {

		this.game.stage.backgroundColor = this.playerData.background_color;

		this.initLevel();
	},
	initLevel: function () {
		// clear any leftovers from previous level
		this.uiBlocked = false;
		this.game.world.removeAll();
		// make sure there are no active dialogs remaining
		this.dialogs.closeDialog();

		var tilemap = Constants.TILEMAP_FLOORS[this.currentLevel];

		this.map = this.game.add.tilemap(tilemap);
		this.map.addTilesetImage('officehangover', Constants.TILESET_IMAGE);

		this.collisionLayer = this.map.createLayer('Floor and Walls');
		this.map.createLayer('Shadows').resizeWorld();
		this.map.createLayer('Bottom Objects');

		// visible characters are any object that is visible on the map
		// using a custom z-ordering.
		this.visibleCharacters = this.game.add.group();
		
		// for the Top Object layer, we create horizontal strips of tiles
		// that can be sorted together with the Character objects.
		for (var y = 0; y < this.map.width; ++y) {
			let strip = new Phaser.SpriteBatch(this.game, null, "Top_row" + y, false);
			strip.body = {
				// we only need to define the bottom to sort correctly
				bottom: (y + 1) * 32
			};
			this.visibleCharacters.add(strip);

			for (var x = 0; x < this.map.width; ++x) {
				var tile3 = this.map.getTile(x, y, 3);
				if (tile3 !== null) {
					strip.add (new Phaser.Image(this.game, x * 32, y * 32, "tileset_as_sprites", tile3.index - 1));
				}
			}
		}

		this.initialiseCharacters();
		this.initialiseCollisionLayer();

		let wakeup = this.getFlag("l1_wake_up", 0);

		if (this.currentLevel == 0 && !wakeup) {
			this.player.wakeUp();
		}

	},
	update: function () {
		// if the player just pressed space, then set an 'unhandled action' flag
		this.player.unhandledAction = (this.justPressedSpace === 1);

		// interact with various objects when the zone around the player overlaps with it...
		this.game.physics.arcade.overlap(this.staticSolids, this.player.zone, function (gameobj) {gameobj.handleOverlap();}, null, this);
		this.game.physics.arcade.overlap(this.interactionZones, this.player.zone, function (gameobj) {gameobj.handleOverlap();}, null, this);
		this.game.physics.arcade.overlap(this.characters, this.player.zone, function (character) {character.handleOverlap();}, null, this);

		// collision - these prevent the player from walking through solid objects
		this.game.physics.arcade.collide(this.staticSolids, this.player, function (gameobj) { gameobj.handleCollision();} );
		this.game.physics.arcade.collide(this.characters, this.player);
		
		// collisions of moving objects with the tilemap
		this.game.physics.arcade.collide(this.player, this.collisionLayer);
		this.game.physics.arcade.collide(this.characters, this.collisionLayer, function (character) {if(!character.isStopped){character.setRandomDirection();}}, null, this);

		// if the unhandled action wasn't handled in one of the collision routines, let the player handle it.
		if (this.player.unhandledAction) {
			this.player.handleUnhandledAction();
		}

		if (!this.uiBlocked) {
			this.cursorMovement();
		}

		for (var key in this.characters) {
			this.characters[key].update();
		}

		this.visibleCharacters.customSort(function(a, b) {
			if (a === b) return 0;
			if (!a.body) return -1;
			if (!b.body) return 1;
			return a.body.bottom - b.body.bottom;
		}, this);

		// any space action should be handled before this.
		this.justPressedSpace = 0;
	},
	keyPress: function(char) {
		this.inputChars.push(char);
		if (this.inputChars.length > 5) { this.inputChars.shift(); }

		let cheatCode = this.inputChars.join("");
		if (cheatCode === "iddqd") {
			this.currentLevel = 1;
			this.initLevel();
		}
		else if (cheatCode === "idkfa") {
			this.currentLevel = 0;
			this.initLevel();
		}
	},
	initialiseCharacters: function () {

		// characters are moving objects that check for collision with the tilemap
		this.characters = [];

		// game objects are static, solid objects that do not need to check for collision with the tilemap
		this.staticSolids = [];

		// interaction zones are static, non-solid objects that players and characters can walk through.
		this.interactionZones = [];

		for (var key in this.map.objects.Objects) {
			var obj = this.map.objects.Objects[key];

			// snap to grid:
			obj.x = Math.round(obj.x / 32) * 32;
			obj.y = Math.round(obj.y / 32) * 32;

			if (obj.type === "Start") {
				this.player = new Player(this, obj.x, obj.y, obj, this.playerData.player, Constants.PLAYER_DATA_INIT);

				this.player.body.collideWorldBounds = true;
				this.game.camera.follow(this.player);
				this.visibleCharacters.add(this.player);
			}
			else if (obj.type === "Character") {
				var character = new Character(this, obj.x, obj.y, obj, this.playerData.player, Constants.PLAYER_DATA_INIT);
				this.visibleCharacters.add(character);
				character.body.collideWorldBounds = true;
				if(character.isStopped){
					character.body.immovable = true;
					character.stopMoving();
				}else{
					character.setRandomDirection();
				}

				this.characters.push(character);
			}
			else if (obj.type === "Door") {
				let sprite = new Door(this, obj.x, obj.y, 'door', obj.properties);
				this.visibleCharacters.add(sprite);
				this.staticSolids.push(sprite);
			}
			else if (obj.type === "BeerCrateDropZone") {
				let sprite = new BeerCrateDropZone(this, obj.x, obj.y, obj.type.toLowerCase(), obj.name, obj.properties);
				this.add.existing(sprite);
				this.interactionZones.push(sprite);
			} 
			else if (obj.type === "Actionable") {
				let sprite = new GameObject(this, obj.x, obj.y, "actionable", obj.properties);
				this.visibleCharacters.add(sprite);
				this.staticSolids.push(sprite);
			}
			else if (obj.type === "Exit") {
				let sprite = new GameObject(this, obj.x, obj.y, "exit");
				this.visibleCharacters.add(sprite);
				this.staticSolids.push(sprite);
			}
			else {
				throw ("Map contains object of undefined type " + obj.type);
			}
		}


		if (!this.player) {
			console.error("No player start position found on map!");
		}
	},
	initialiseCollisionLayer: function () {
		// copy the 'blocking' property from all three layers to the bottom layer, the 'collisionLayer'.
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

	// uncomment to help debug character bounding boxes
	/*
	render: function () {
		this.game.debug.bodyInfo(this.player, 32, 32);
		this.game.debug.body(this.player);
		this.game.debug.body(this.player.zone, '#00FFFF80');

		for (let i = 0; i < this.characters.length; ++i) {
			this.game.debug.body(this.characters[i], '#0000FF80');
		}
		for (let i = 0; i < this.interactionZones.length; ++i) {
			this.game.debug.body(this.interactionZones[i], '#FF00FF80');
		}
		for (let i = 0; i < this.staticSolids.length; ++i) {
			this.game.debug.body(this.staticSolids[i], '#FFFF00A0');
		}
	},
	*/
	callAction: function (objectname, character) {

		this.dialogs.open(objectname, character);
	}

};
