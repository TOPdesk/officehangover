/**
 * Here you can define actions that are very specific to a particular object or level,
 * so that they don't muddle the generic engine.
 */
const SpecialActions = {

	/** called when clicking on dirty dishes */
	dirtyDishesAction(game, state, sprite) {

		let dependentObject = state.staticSolids.find(function (obj) {
			return obj.key == 'dishwasher';
		});

		let actionCloud = game.add.sprite(sprite.x, sprite.y, 'ActionCloud', 0);
		actionCloud.animations.add('action', [0, 1, 2, 3], 5, true);
		actionCloud.play('action');
		actionCloud.alpha = 0;

		let actionCloudDishWasher = game.add.sprite(dependentObject.x, dependentObject.y, 'ActionCloud', 0);
		actionCloudDishWasher.animations.add('action', [0, 1, 2, 3], 5, true);
		actionCloudDishWasher.play('action');

		game.add.tween(sprite).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
		let tween = game.add.tween(actionCloud).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function () {
			actionCloud.destroy();
			sprite.destroy();
		}, sprite);

		game.add.tween(dependentObject).to({alpha: 1}, 4000, Phaser.Easing.Linear.None, true);
		game.add.tween(actionCloudDishWasher).to({alpha: 0}, 4000, Phaser.Easing.Linear.None, true);

	},

	transferAllCrates(game, state/*, sprite*/) {
		let src = state.interactionZones.find(function (obj) {
			return obj.name == "BeerCrateDropZone1";
		});
		let dest = state.interactionZones.find(function (obj) {
			return obj.name == "BeerCrateDropZone2";
		});

		while (src.hasCrates()) {
			let crate = src.findCrate();
			crate.destroy();			
			dest.makeCrate();
		}
	}

};
export default SpecialActions;