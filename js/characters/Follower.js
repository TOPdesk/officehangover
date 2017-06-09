'use strict';

var RPG = RPG || {};

/**
 * A follower is an object, like a beer crate, tgat follows the player around
 * after it is picked up.
 */
RPG.Follower = function (state, key) {
    Phaser.Sprite.call(this, state.game, state.player.x, state.player.y, state.playerData[key].sprite);

    this.followee = state.player;
    // queue of coordinates of the followee
    this.followeeq = [ [ state.player.x, state.player.y ] ]
    this.bobbingPhase = 0;

    this.key = key
    this.state = state;
    this.game = state.game;
    this.data = Object.create(state.playerData[key]);
    this.anchor.setTo(0, 0);
}

RPG.Follower.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Follower.prototype.constructor = RPG.Follower;

RPG.Follower.prototype.update = function() {

    // cuurrent coordinates of followee
    var fx = this.followee.x
    var fy = this.followee.y

    // previous coordinates in queue
    var qend = this.followeeq.length-1
    var prevx = this.followeeq[qend][0];
    var prevy = this.followeeq[qend][1];

    // push next coordinates on queue, but only if they are different
    if (prevx != fx || prevy != fy) {
        this.followeeq.push([fx, fy])
    }

    // calculate bobbing motion
    this.bobbingPhase += 0.2;
    while (this.bobbingPhase > Math.PI) this.bobbingPhase -= Math.PI
    var bobbingAmplitude = 6;
    var bobbingMotion = (bobbingAmplitude * Math.sin(this.bobbingPhase));

    this.x = this.followeeq[0][0];
    this.y = this.followeeq[0][1] - bobbingMotion;

    // if the queue is longer than a certain length, start shifting values away
    if (this.followeeq.length > 8) {
        this.followeeq.shift()
    }

}