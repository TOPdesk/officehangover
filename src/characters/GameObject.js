export default class extends Phaser.Sprite {
	constructor(state, x, y, key, type) {
		super(state.game, x, y, state.playerData[key].sprite);

		this.key = key.toLowerCase();
		this.type = (type == null) ? "" : type.toLowerCase();
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

	}

	/** called whenever a player collides with this game object */
	handleCollision() {
		if (this.state.justPressedSpace) {
			if (this.type == "actionable") {
				this.isExecutingTask = true;
				this.state.callAction(this.key, this);
			}
		} else if (this.key == "exit") {
			this.state.currentLevel = 1;
			this.state.initLevel();
		}
	}

	pickMobile (){
		let tween = this.game.add.tween(this).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function () {
			this.destroy();
		}, this);
	}
}
