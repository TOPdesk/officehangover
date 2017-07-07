'use strict';

var RPG = RPG || {};

RPG.Player = function (state, x, y, spriteName, data, character, isBodyFrame) {
	RPG.Character.call(this, state, x, y, spriteName, data, character, isBodyFrame);

	/*
	this.staminaBar = new RPG.StaminaBar(state, this.x, this.y, 'bar', this.data.stamina);
	this.game.add.existing(this.staminaBar);
	*/

	this.pickupSprite = null;
    this.pickupTimer = 0;
};

RPG.Player.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Player.prototype.constructor = RPG.Player;

RPG.Player.prototype.wakeUp = function () {
	this.state.uiBlocked = true;
	this.play(Constants.ANIMATION_WAKE_UP);
	this.animations.currentAnim.onComplete.add(function () {
		this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
			this.state.openDialog("wakeup1", this);
		}, this);
	}, this);
};

/** check if we can pick up an object. We can only pick up an object if we haven't already picked up one! */
RPG.Player.prototype.canPickup = function () {
	return this.pickupSprite == null && (this.pickupTimer == 0);
};

/** idem, we can only drop an object if we picked up one! */
RPG.Player.prototype.canDropOff = function () {
	return this.pickupSprite != null && (this.pickupTimer == 0);
};

RPG.Player.prototype.pickup = function (pickupObject) {
	if (this.pickupSprite != null) {
		console.error("Trying to pick up two objects!");
		return;
	}
	this.pickupSprite = new RPG.Follower(this.state, pickupObject.key);
	pickupObject.destroy(true);
	var pickupSprite = this.pickupSprite;
	this.addChild(pickupSprite);
	this.game.add.existing(pickupSprite);
    this.pickupTimer = 50;
};

RPG.Player.prototype.dropoff = function () {
	this.pickupSprite.destroy(true);
	this.pickupSprite = null;
    this.pickupTimer = 50;
};

RPG.Player.prototype.update = function() {
    if (this.pickupTimer > 0) {
        this.pickupTimer -= 1;
    }
};

/* NOT NEEDED RIGHT NOW BUT WILL BE USEFUL IN THE FUTURE*/
/*
RPG.Player.prototype.collectItem = function(item) {
    this.addItemData(item);
    this.state.refreshStats();
    if (item.data.stamina) {
        this.staminaBar.refreshStaminabar(this.data.stamina);
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
RPG.Player.prototype.update = function() {
    if (this.hb) {
        //this.updateStamina();
    }
};

RPG.Player.prototype.updateStamina = function (){
    this.staminaBar.x = this.x;
    this.staminaBar.y = this.y - 15;
    this.staminaBar.body.velocity = this.body.velocity;
};
*/
