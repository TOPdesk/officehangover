'use strict';

var RPG = RPG || {};

RPG.GameState = {
    init: function () {

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 0;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.playerData = JSON.parse(this.game.cache.getText(Constants.PLAYER_DATA));


    },
    create: function () {

            this.game.VirtualPad = this.game.plugins.add(Phaser.Plugin.VirtualPad);

            this.game.stage.backgroundColor = this.playerData.background_color;

            this.map = this.game.add.tilemap(Constants.TILEMAP_FLOOR1);
            this.map.addTilesetImage('officehangover', Constants.TILESET_IMAGE);
            this.map.createLayer('Floor and Walls');
            this.map.createLayer('Shadows');
            this.map.createLayer('Bottom Objects');
            this.map.createLayer('Top Objects').resizeWorld();            
            
            this.player = new RPG.Player(this, this.playerData.initial_position.x, this.playerData.initial_position.y, this.playerData.player, Constants.PLAYER_DATA_INIT, 1);
            this.add.existing(this.player);
            this.player.body.collideWorldBounds = true;
            this.game.camera.follow(this.player);

            this.character1 = new RPG.Player(this, this.playerData.initial_position_c1.x, this.playerData.initial_position_c1.y, this.playerData.player, Constants.CHARACTER1_DATA_INIT);
            this.add.existing(this.character1);
            this.character1.body.collideWorldBounds = true;


            this.character2 = new RPG.Player(this, this.playerData.initial_position_c2.x, this.playerData.initial_position_c2.y, this.playerData.player, Constants.CHARACTER2_DATA_INIT);
            this.add.existing(this.character2);
            this.character2.body.collideWorldBounds = true;


            this.initGUI();

            this.character1Movement();
            this.character2Movement();
            this.wakeUp();

    },
    update: function () {
        /*this.game.physics.arcade.collide(this.player, this.collisionLayer);

        this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);

        this.game.physics.arcade.collide(this.player, this.enemies, this.attack, null, this);*/

        if (!this.uiBlocked){
            this.cursorMovement();
        }

    },
    gameOver: function () {
        this.game.state.start('GameState', true, false, this.currentLevel);
    },
    wakeUp: function (){
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

        this.checkCharacter(this.character1);
        this.checkCharacter2(this.character2);

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
    character1Movement: function (){
        this.character1.body.velocity.y = 100;
        this.character1.direction = 1;
        this.character1.body.velocity.x = 0;
        this.character1.play('walk_down');
    },
    character2Movement: function (){
        this.character2.body.velocity.x = 50;
        this.character2.direction = 1;
        this.character2.body.velocity.y = 0;
        this.character2.play('walk_right');
    },
    checkCharacter: function (character){
        if (character.body.position.y > this.game.world.height - 55 && character.body.position.x <= this.playerData.initial_position_c1.x){
            character.body.velocity.y = 0;
            character.body.velocity.x = 100;
            character.play('walk_right');
        }

        if (character.body.position.x > this.game.world.width - 105){
            character.body.velocity.x = 0;
            character.body.velocity.y = -100;
            character.play('walk_up');
        }

        if(character.body.position.x >=  this.game.world.width - 105 &&  character.body.position.y < (this.game.world.height - this.game.world.height/4)){
            character.body.velocity.x = -100;
            character.body.velocity.y = 0;
            character.play('walk_left');
        }

        if(character.body.position.x <= this.playerData.initial_position_c1.x && character.body.position.y <= this.playerData.initial_position_c1.y){
            character.body.velocity.y = 100;
            character.body.velocity.x = 0;
            character.play('walk_down');
        }
    },
    checkCharacter2: function (character){
        if (character.body.position.x > this.game.world.width - (this.game.world.width/9)){
            character.body.velocity.y = 50;
            character.body.velocity.x = 0;
            character.play('walk_down');
        }

        if (character.body.position.y > 220){
            character.body.velocity.x = -50;
            character.body.velocity.y = 0;
            character.play('walk_left');
        }

        if( character.body.position.x <= this.playerData.initial_position_c2.x && character.body.position.y >= this.playerData.initial_position_c2.y ){
            character.body.velocity.y = -50;
            character.body.velocity.x = 0;
            character.play('walk_up');
        }

        if(character.body.position.y <= this.playerData.initial_position_c2.y && character.body.position.x <= this.playerData.initial_position_c2.x){
            this.character2Movement();
        }
    }
};

