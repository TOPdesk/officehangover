'use strict';

var RPG = RPG || {};

RPG.Player = function (state, x, y, data, character, hb){
    Phaser.Sprite.call(this, state.game, x, y, Constants.PLAYER_SPRITE, state.playerData[character].initial_frame);
    hb = hb || 0;

    this.state = state;
    this.game = state.game;
    this.data = Object.create(data);
    this.playerData = state.playerData;
    this.anchor.setTo(0.5);
    this.hb = hb;


    this.animations.add('walk_right', this.playerData.animation_walk_right, this.playerData.frames, true);
    this.animations.add('walk_up', this.playerData.animation_walk_up,  this.playerData.frames, true);
    this.animations.add('walk_left', this.playerData.animation_walk_left,  this.playerData.frames, true);
    this.animations.add('walk_down', this.playerData.animation_walk_down,  this.playerData.frames, true);
    this.animations.add('wake_up', this.playerData.animation_wake_up,  this.playerData.frames, false);

    if (hb == 1) {
        this.staminaBar = new RPG.StaminaBar(state, this.x, this.y, 'bar', this.data.stamina);
        this.game.add.existing(this.staminaBar);
    }

    this.game.physics.arcade.enable(this);
    this.body.setSize(this.playerData.player_body.x, this.playerData.player_body.y, null, (this.height-this.playerData.player_body.y)/6);
    this.scale.setTo(0.5);
};

RPG.Player.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Player.prototype.constructor = RPG.Player;

/* NOT NEEDED RIGHT NOW BUT WILL BE USEFUL IN THE FUTURE*/
/*
RPG.Player.prototype.collectItem = function(item) {
    this.addItemData(item);
    this.state.refreshStats();
    if (item.data.stamina) {
        this.staminaBar.refreshStaminabar(this.data.stamina)
    }
    item.kill();
};

RPG.Player.prototype.addItemData = function (item){
    var key;
    for ( key in item.data){
        if ( this.data[key]){
            this.data[key] += parseInt(item.data[key]);
        }else if(key === 'isQuest'){
            this.data.items.push(item);
            this.checkQuestCompletion(item);
        }
    }
};

RPG.Player.prototype.checkQuestCompletion = function(item) {
    var i = 0;
    var len = this.data.quests.length;

    while (i < len) {
        if (this.data.quests[i].code == item.data.questCode) {
            this.data.quests[i].isCompleted = true;
            console.log(this.data.quests[i].name + ' has been completed');
            break;
        }
        i++;
    }
};
*/
RPG.Player.prototype.update = function() {
    if (this.hb) {
        this.staminaBar.x = this.x;
        this.staminaBar.y = this.y - 15;

        this.staminaBar.body.velocity = this.body.velocity;
    }
};

