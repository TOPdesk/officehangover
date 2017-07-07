/** a door is a specialized game object that has two states: open and closed. */
export default class extends Phaser.Sprite {
	constructor(state, x, y, key) {
		super(state.game, x, y, state.playerData[key].sprite);

		this.key = key;
		this.state = state;
		this.game = state.game;
		this.data = Object.create(state.playerData[key]);
		this.playerData = state.playerData;

		this.animations.add('closed', [0]);
		this.animations.add('open', [1]);
		this.play('closed'); // initial state = closed.
		this.anchor.setTo(0, 0);

		this.game.physics.arcade.enable(this);
		var bodySize = this.data.body_size;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		this.body.immovable = true;
	}

	openDoor() {
		this.play('open');
		var bodySize = this.data.body_size;
		this.body.setSize(0, 0, bodySize.left, bodySize.top);
	};

	/** called whenever a player collides with this door */
	handleCollision() {
		this.openDoor();
	}
}
