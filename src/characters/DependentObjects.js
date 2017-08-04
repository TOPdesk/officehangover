import GameObject from "./GameObject";

export default class extends GameObject {
	constructor (state, x, y, key){
		super (state, x, y, key);

		if(this.key == "dishwasher"){
			this.alpha = 0;
		}
	}

	/** called whenever a player collides with this game object */
	handleCollision(gameObjects) {
		if (this.state.justPressedSpace) {
			if (this.key == "dirtydishes") {
				let dishWasher = gameObjects.find(function (obj) {
					return obj.key == 'dishwasher';
				});

				let actionCloud = this.game.add.sprite(this.x, this.y, 'ActionCloud', 0);
				actionCloud.animations.add('action', [0, 1, 2, 3], 5, true);
				actionCloud.play('action');
				actionCloud.alpha = 0;

				let actionCloudDishWasher = this.game.add.sprite(dishWasher.x, dishWasher.y, 'ActionCloud', 0);
				actionCloudDishWasher.animations.add('action', [0, 1, 2, 3], 5, true);
				actionCloudDishWasher.play('action');

				this.game.add.tween(this).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
				let tween = this.game.add.tween(actionCloud).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true);
				tween.onComplete.add(function () {
					actionCloud.destroy();
					this.destroy();
				}, this);

				this.game.add.tween(dishWasher).to({alpha: 1}, 4000, Phaser.Easing.Linear.None, true);
				this.game.add.tween(actionCloudDishWasher).to({alpha: 0}, 4000, Phaser.Easing.Linear.None, true);
			}
		}
	}
}
