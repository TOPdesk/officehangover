'use strict';

var RPG = RPG || {};

RPG.StartGame = {
    init: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 0;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.playerData = JSON.parse(this.game.cache.getText(Constants.PLAYER_DATA));
    },
    create: function () {
        this.game.stage.backgroundColor = this.playerData.background_color;
        this.background = this.game.add.sprite(0, -30, Constants.SCENE);
        this.background.width = this.game.world.width;
        this.background.height = this.game.world.height ;
        this.background.inputEnabled = true;
        this.game.world.sendToBack(this.background);

        this.game.world.scale.setTo(2, 2);

        this.player = new RPG.Player(this, this.playerData.initial_position.x, this.playerData.initial_position.y, this.playerData.player_wake_up, Constants.PLAYER_START_DATA_INIT, 1);
        this.add.existing(this.player);
        //this.player.body.collideWorldBounds = true;
        this.game.camera.follow(this.player);
        this.uiBlocked = true;
        this.wakeUp();
    },
    update: function () {
        if (!this.uiBlocked){
            this.checkCursor();
        }
    },
    wakeUp: function (){
        var anim = this.player.play(Constants.ANIMATION_WAKE_UP);
        this.player.animations.currentAnim.onComplete.add(function () {	this.uiBlocked = false;}, this);
    },
    checkCursor: function () {
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
            if ((this.cursors.up.isDown) && (!this.cursors.left.isDown  && !this.cursors.right.isDown)) {
                this.player.play('walk_up');
            }
        } else if (this.cursors.down.isDown) {
            this.player.body.velocity.y = this.playerData.player_speed;
            if ((this.cursors.down.isDown) && (!this.cursors.left.isDown  && !this.cursors.right.isDown)) {
                this.player.play('walk_down');
            }
        }

        if (this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0) {
            this.player.animations.stop();
            this.player.frame = this.playerData.initial_frame;
        }
    },
};

