export default class extends Phaser.Sprite {
	constructor(state, x, y, key) {
		super(state.game, x, y, state.playerData[key].sprite);

		this.key = key.toLowerCase();
		this.state = state;
		this.game = state.game;
		this.data = Object.create(state.playerData[key]);
		this.playerData = state.playerData;
		this.anchor.setTo(0, 0);
		this.isExecutingTask = false;
		this.isCharacterOnHold = false;

		this.game.physics.arcade.enable(this);
		var bodySize = this.data.body_size;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		this.body.immovable = true;

		if(this.key == "dishwasher"){
			this.alpha = 0;
		}

	}

	/** called whenever a player collides with this game object */
	handleCollision(gameObjects) {
		if (this.state.justPressedSpace) {
			if (this.key == "pc" || this.key == "coffeemachine") {
				this.isExecutingTask = true;
				this.state.callAction(this.key, this);
			}
			else if (this.key == "beercrate") {
				if (this.state.player.canPickup()) {
					this.state.player.pickup(this);
				}
			}
		}
		else if (this.key == "exit") {
			this.state.currentLevel = 1;
			this.state.initLevel();
		}else if (this.key == "dirtydishes") {

			let dishWasher = gameObjects.filter(function (obj) {
				return obj.key == 'dishwasher';
			});
			dishWasher = dishWasher[0];

			let actionCloud = this.game.add.sprite(this.x, this.y, 'ActionCloud', 0);
			actionCloud.animations.add('action', [0, 1, 2, 3], 5, true);
			actionCloud.play('action');
			actionCloud.alpha = 0;

			let actionCloudDishWasher = this.game.add.sprite(dishWasher.x, dishWasher.y, 'ActionCloud', 0);
			actionCloudDishWasher.animations.add('action', [0, 1, 2, 3], 5, true);
			actionCloudDishWasher.play('action');

			this.game.add.tween(this).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
			let tween = this.game.add.tween(actionCloud).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
			tween.onComplete.add( function (){actionCloud.destroy();},this);

			this.game.add.tween(dishWasher).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true);
			this.game.add.tween(actionCloudDishWasher).to( { alpha: 0 }, 4000, Phaser.Easing.Linear.None, true);

		}
	}
}
