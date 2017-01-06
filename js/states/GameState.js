'use strict';

var RPG = RPG || {};

var layer1;
var layer2;
var layer3;
var layer4;

RPG.GameState = {
    init: function () {

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 0;

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        //  Stop the following keys from propagating up to the browser
        this.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

        this.playerData = JSON.parse(this.game.cache.getText(Constants.PLAYER_DATA));
    },
    create: function () {

            this.game.VirtualPad = this.game.plugins.add(Phaser.Plugin.VirtualPad);

            this.game.stage.backgroundColor = this.playerData.background_color;

            this.map = this.game.add.tilemap(Constants.TILEMAP_FLOOR1);
            this.map.addTilesetImage('officehangover', Constants.TILESET_IMAGE);

            this.collisionLayer = this.map.createLayer('Floor and Walls');
            this.map.createLayer('Shadows');
            this.map.createLayer('Bottom Objects');
            this.map.createLayer('Top Objects').resizeWorld();

            this.initialiseCollisionLayer();

            this.initialiseCharacters();

            this.wakeUp();

    },
    update: function () {
        this.game.physics.arcade.collide( this.gameobjects, this.player, this.isActionAvailable, null, this);
        this.game.physics.arcade.collide( this.player, this.collisionLayer);
        this.game.physics.arcade.collide( this.characters, this.collisionLayer, this.setRandomDirection, null, this);
        /*
        this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);
        this.game.physics.arcade.collide(this.player, this.enemies, this.attack, null, this);*/

        if (!this.uiBlocked){
            this.cursorMovement();
        }

        for (var key in this.characters) {
        	this.updateCharacter(this.characters[key]);
        }

    },
    initialiseCharacters: function() {

    	this.characters = []
        this.gameobjects = []

    	for (var key in this.map.objects.Objects)
    	{
    		var obj = this.map.objects.Objects[key]

    		if (obj.type == "Start")
    		{
    	        this.player = new RPG.Player(this, obj.x, obj.y, this.playerData.player, Constants.PLAYER_DATA_INIT, 1);
    	        this.add.existing(this.player);
    	        this.player.body.collideWorldBounds = true;
    	        this.game.camera.follow(this.player);
    		}
    		/*else if (obj.type == "Character")
    		{
    	        var character = new RPG.Player(this, obj.x, obj.y, this.playerData.player, Constants.PLAYER_DATA_INIT);
    	        this.add.existing(character);
    	        character.body.collideWorldBounds = true;
    	        this.setRandomDirection (character);
    	        this.characters.push(character);
    		}*/
    		else if (obj.type == "PC")
    		{
    	        var sprite = new RPG.GameObject(this, obj.x, obj.y, 'pc');
    	        this.add.existing(sprite);
    	        this.gameobjects.push(sprite);
    		}
    		else if (obj.type == "CoffeeMachine")
    		{
    	        var sprite = new RPG.GameObject(this, obj.x, obj.y, 'coffeemachine');
    	        this.add.existing(sprite);
    	        this.gameobjects.push(sprite);
    		}
    		else {
    			console.error ("Map contains object of undefined type " + obj.type)
    		}

    	}

    	if (!this.player) {
    		console.error ("No player start position found on map!")
    	}

        this.initGUI();
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
    wakeUp: function () {
    	this.uiBlocked = true;
        var anim = this.player.play(Constants.ANIMATION_WAKE_UP);
        this.player.animations.currentAnim.onComplete.add(function () {	this.uiBlocked = false;}, this);
    },
    cursorMovement: function () {
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursors.left.isDown || this.player.btnsPressed.left || this.player.btnsPressed.upleft || this.player.btnsPressed.downleft) {
            this.player.body.velocity.x = -this.playerData.player_speed;
            this.player.play('walk_left');
        } else if (this.cursors.right.isDown || this.player.btnsPressed.right || this.player.btnsPressed.upright || this.player.btnsPressed.downright) {
            this.player.body.velocity.x = this.playerData.player_speed;
            this.player.play('walk_right');
        }

        if (this.cursors.up.isDown || this.player.btnsPressed.up || this.player.btnsPressed.upright || this.player.btnsPressed.upleft) {
            this.player.body.velocity.y = -this.playerData.player_speed;
            if ((this.cursors.up.isDown || this.player.btnsPressed.up) && (!this.cursors.left.isDown  && !this.cursors.right.isDown)) {
                this.player.play('walk_up');
            }
        } else if (this.cursors.down.isDown || this.player.btnsPressed.down || this.player.btnsPressed.downright || this.player.btnsPressed.downleft) {
            this.player.body.velocity.y = this.playerData.player_speed;
            if ((this.cursors.down.isDown || this.player.btnsPressed.down) && (!this.cursors.left.isDown  && !this.cursors.right.isDown)) {
                this.player.play('walk_down');
            }
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
        })
    },

    setRandomDirection : function (character) {
    	this.setDirection (character, Math.floor (Math.random() * 4))
    },

    setDirection : function (character, direction) {
    	if (direction == 0) {
            character.body.velocity.y = 0;
            character.body.velocity.x = 100;
            character.play('walk_right');
        }
    	else if (direction == 1) {
            character.body.velocity.x = 0;
            character.body.velocity.y = -100;
            character.play('walk_up');
        }
    	else if (direction == 2) {
            character.body.velocity.x = -100;
            character.body.velocity.y = 0;
            character.play('walk_left');
        }
    	else if (direction == 3) {
            character.body.velocity.y = 100;
            character.body.velocity.x = 0;
            character.play('walk_down');
        }
    },

    updateCharacter: function (character) {
    	// add more logic here, called every tick
    },
    // uncomment to help debug character bounding boxes
    /*
    render: function () {
    	//this.game.debug.bodyInfo(this.player, 32, 32);
    	this.game.debug.body(this.player);
        for (var i = 0; i < this.characters.length; ++i) {
    	   this.game.debug.body(this.characters[i]);
        }
    },
    */
    isActionAvailable: function (character) {
      if (this.spaceKey.isDown) {
        //somehow find out which object was collided
        if (character.key == "pc" || character.key == "coffeemachine") {
          this.callAction(1, character.key);
        }
      }
    },
    callAction: function (dialogid, objectname){
        //new Action();

    	//TEMP: call openDialog directly for testing
    	this.openDialog(dialogid, objectname);
    },
    openDialog: function(dialogid, objectname) {

    	this.dialog = new RPG.Dialog(this, dialogid, objectname);
    	this.dialog.popup();
    },

};
