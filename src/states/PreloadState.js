import * as Constants from "../constants";

export default {
	preload: function () {
		if (!this.loadLevel) {
			this.load.onLoadComplete.add(this.processMaps, this);
			//load all images
			//params: the reference object, the src for the image, the next two are the size for the frame, total frames in the sheet
			this.load.spritesheet(Constants.CHARACTER1_SPRITE, 'assets/images/character_braids.png', 64, 64, 273);
			this.load.spritesheet(Constants.CHARACTER2_SPRITE, 'assets/images/character_greyhair.png', 64, 64, 273);
			this.load.spritesheet(Constants.CHARACTER3_SPRITE, 'assets/images/character_blondguy.png', 64, 64, 273);
			this.load.spritesheet(Constants.CLEANINGLADY_SPRITE, 'assets/images/character_dress.png', 64, 64, 273);
			this.load.spritesheet(Constants.COFFEEADDICT_SPRITE, 'assets/images/character_blondguy.png', 64, 64, 273);


			this.load.spritesheet(Constants.PLAYER_SPRITE, 'assets/images/player.png', 64, 64, 273);

			this.load.spritesheet('Door', 'assets/images/deur.png', 64, 96, 3);
			this.load.spritesheet('ActionCloud', 'assets/images/generic_action_cloud.png', 64, 64, 4);

			this.load.image(Constants.COFFEE_MACHINE_SPRITE, 'assets/images/assets_coffee_machine.png');
			this.load.image(Constants.PC_SPRITE, 'assets/images/assets_monitor.png');
			this.load.image(Constants.DISH_WASHER_SPRITE, 'assets/images/assets_dish_washer.png');
			this.load.image(Constants.DIRTY_DISHES_SPRITE, 'assets/images/assets_dirty_dishes.png');
			this.load.image('BeerCrate', 'assets/images/assets_beer_crate.png');
			this.load.image(Constants.MOBILE_SPRITE, 'assets/images/assets_mobile.png');
			this.load.image(Constants.PLANT_SPRITE, 'assets/images/assets_chuck.png');



			this.load.image(Constants.SCENE, 'assets/images/floor-plan.png');

			this.load.image(Constants.STAMINA_BAR, 'assets/images/bar-health.png');

			this.game.load.bitmapFont('desyrel', 'assets/fonts/nokia16black.png', 'assets/fonts/nokia16black.xml');

			//load text
			this.load.text(Constants.PLAYER_DATA, 'assets/data/player_data.json');
			this.load.text(Constants.GAME_TEXT, 'assets/data/text.json');
			this.load.json(Constants.DIALOGS, 'assets/data/dialogs.json');

			this.load.image(Constants.TILESET_IMAGE, 'assets/images/tileset1.png');

			this.load.json('floor1-tilemap-json', 'assets/data/floor1-tilemap.json');
			this.load.json('floor2-tilemap-json', 'assets/data/floor2-tilemap.json');
			this.load.json('tileset.json', 'assets/data/tileset.json');

			this.load.audio('door_open', 'assets/sounds/door_open.mp3');
		}
	},
	processMaps: function () {
		// after loading all data, put the tilemap.json and the tileset.json together,
		var map1 = this.game.cache.getJSON('floor1-tilemap-json');
		var map2 = this.game.cache.getJSON('floor2-tilemap-json');
		var tileset1 = this.game.cache.getJSON('tileset.json');
		map1.tilesets[0] = tileset1;
		map2.tilesets[0] = tileset1;

		// and convert them to Phaser tilemaps.
		this.load.tilemap(Constants.TILEMAP_FLOORS[0], null, map1, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap(Constants.TILEMAP_FLOORS[1], null, map2, Phaser.Tilemap.TILED_JSON);
	},
	init: function (level) {
		this.currentLevel = level || 'world';
		this.loadLevel = level ? true : false;
	},
	create: function () {
		if (this.loadLevel) {
			this.state.start(Constants.GAME_STATE, true, false, this.currentLevel);
		} else {
			this.state.start(Constants.HOME_STATE);
		}
	}
};
