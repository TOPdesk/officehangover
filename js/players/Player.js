var RPG = RPG || {}

RPG.Player = function (state, x, y, data, character, hb){
    Phaser.Sprite.call(this, state.game, x, y, character, state.gameData.initial_frame);
    hb = hb || 0;

    this.state = state;
    this.game = state.game;
    this.data = Object.create(data);
    this.gameData = state.gameData;
    this.anchor.setTo(0.5);
    this.hb = hb;


    this.animations.add('walk_right', this.gameData.animation_walk_right, this.gameData.frames, true);
    this.animations.add('walk_up', this.gameData.animation_walk_up,  this.gameData.frames, true);
    this.animations.add('walk_left', this.gameData.animation_walk_left,  this.gameData.frames, true);
    this.animations.add('walk_down', this.gameData.animation_walk_down,  this.gameData.frames, true);
    if (hb ==1) {
        this.healthBar = new RPG.HealthBar(state, this.x, this.y, 'bar', this.data.health);
        this.game.add.existing(this.healthBar);
    }

    this.game.physics.arcade.enable(this);
    this.body.setSize(this.gameData.player_body.x, this.gameData.player_body.y, null, (this.height-this.gameData.player_body.y)/6);
    this.scale.setTo(0.5);
};

RPG.Player.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Player.prototype.constructor = RPG.Player;

RPG.Player.prototype.collectItem = function(item) {
    this.addItemData(item);
    this.state.refreshStats();
    if (item.data.health) {
        this.healthBar.refreshHealthbar(this.data.health)
    }
    item.kill();
};

RPG.Player.prototype.addItemData = function (item){
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

RPG.Player.prototype.update = function() {
    if (this.hb) {
        this.healthBar.x = this.x;
        this.healthBar.y = this.y - 15;

        this.healthBar.body.velocity = this.body.velocity;
    }
};

