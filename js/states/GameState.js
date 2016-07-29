'use strict';

var RPG = RPG || {};

RPG.GameState = {
    init: function () {

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 0;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.gameData = JSON.parse(this.game.cache.getText('constants'));


    },
    create: function () {

            this.game.VirtualPad = this.game.plugins.add(Phaser.Plugin.VirtualPad);

            this.game.stage.backgroundColor = this.gameData.background_color;

            this.background = this.game.add.sprite(0, -30, 'background');
            this.background.width = this.game.world.width + 100;
            this.background.height = this.game.world.height + 100;
            this.background.inputEnabled = true;
            this.game.world.sendToBack(this.background);

            /*this.gameData.initial_position_c1.x = this.game.world.width/6;
             this.gameData.initial_position_c1.y = this.game.world.height - this.game.world.height/3;
             this.gameData.initial_position_c2.x = this.game.world.width - this.game.world.width/3;
             this.gameData.initial_position_c2.y = this.game.world.height/14;*/

            console.log(this.gameData.initial_position_c1.x);
            console.log(this.gameData.initial_position_c1.y);

            this.player = new RPG.Player(this, this.gameData.initial_position.x, this.gameData.initial_position.y, this.gameData.player_data, 'player', 1);
            this.add.existing(this.player);
            this.player.body.collideWorldBounds = true;
            this.game.camera.follow(this.player);

            this.character1 = new RPG.Player(this, this.gameData.initial_position_c1.x, this.gameData.initial_position_c1.y, this.gameData.player_data, 'character1');
            this.add.existing(this.character1);
            this.character1.body.collideWorldBounds = true;


            this.character2 = new RPG.Player(this, this.gameData.initial_position_c2.x, this.gameData.initial_position_c2.y, this.gameData.player_data, 'character2');
            this.add.existing(this.character2);
            this.character2.body.collideWorldBounds = true;


            this.initGUI();

            this.character1Movement();
            this.character2Movement();


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
    cursorMovement: function () {
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursors.left.isDown || this.player.btnsPressed.left || this.player.btnsPressed.upleft || this.player.btnsPressed.downleft) {
            this.player.body.velocity.x = -this.gameData.player_speed;
            this.player.play('walk_left');
        } else if (this.cursors.right.isDown || this.player.btnsPressed.right || this.player.btnsPressed.upright || this.player.btnsPressed.downright) {
            this.player.body.velocity.x = this.gameData.player_speed;
            this.player.play('walk_right');
        }

        if (this.cursors.up.isDown || this.player.btnsPressed.up || this.player.btnsPressed.upright || this.player.btnsPressed.upleft) {
            this.player.body.velocity.y = -this.gameData.player_speed;
            if ((this.cursors.up.isDown || this.player.btnsPressed.up) && (!this.cursors.left.isDown  && !this.cursors.right.isDown)) {
                this.player.play('walk_up');
            }
        } else if (this.cursors.down.isDown || this.player.btnsPressed.down || this.player.btnsPressed.downright || this.player.btnsPressed.downleft) {
            this.player.body.velocity.y = this.gameData.player_speed;
            if ((this.cursors.down.isDown || this.player.btnsPressed.down) && (!this.cursors.left.isDown  && !this.cursors.right.isDown)) {
                this.player.play('walk_down');
            }
        }

        if (this.game.input.activePointer.isUp) {
            this.game.VirtualPad.stopMovement();
        }

        if (this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0) {
            this.player.animations.stop();
            this.player.frame = this.gameData.initial_frame;
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
        if (character.body.position.y > this.game.world.height - 55 && character.body.position.x <= this.gameData.initial_position_c1.x){
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

        if(character.body.position.x <= this.gameData.initial_position_c1.x && character.body.position.y <= this.gameData.initial_position_c1.y){
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

        if( character.body.position.x <= this.gameData.initial_position_c2.x && character.body.position.y >= this.gameData.initial_position_c2.y ){
            character.body.velocity.y = -50;
            character.body.velocity.x = 0;
            character.play('walk_up');
        }

        if(character.body.position.y <= this.gameData.initial_position_c2.y && character.body.position.x <= this.gameData.initial_position_c2.x){
            this.character2Movement();
        }
    }
};

