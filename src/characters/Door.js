/** a door is a specialized game object that has two states: open and closed. */
export default class extends Phaser.Sprite {
	constructor(state, x, y, key, isLocked) {
		super(state.game, x, y, state.playerData[key].sprite);

		this.key = key;
		this.isLocked = isLocked;
		this.state = state;
		this.game = state.game;
		this.data = Object.create(state.playerData[key]);
		this.playerData = state.playerData;

		this.animations.add('closed', [0]);
		this.animations.add('open', [1]);
		this.animations.add('locked', [2]);

		if (this.isLocked) {
			if ( this.state.flags["l1_storageroomdooropen"] === 1) {
				this.play('open');
				this.isLocked = false;
			}
			else {
				this.play('locked'); // initial state = locked
			}
		}
		else {
			this.play('closed'); // initial state = closed.
		}
		
		this.anchor.setTo(0, 0);

		this.game.physics.arcade.enable(this);
		var bodySize = this.data.body_size;
		this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		this.body.immovable = true;
	}

	openDoor() {
		this.play('open');
		this.state.sfx.door_open.play();
		var bodySize = this.data.body_size;
		this.body.setSize(0, 0, bodySize.left, bodySize.top);
	}

	/** called whenever a player collides with this door */
	handleCollision() {
		
		if (this.isLocked && this.state.player.unhandledAction) {
			this.state.dialogs.open("doorlocked", this);
			this.state.player.unhandledAction = false;
			if (this.state.flags["l1_storageroomkey"]) {
				this.isLocked = false;
				this.state.flags["l1_storageroomdooropen"] = 1;
			}
		}

		if (!this.isLocked) {
			this.openDoor();
		}
	}
}
