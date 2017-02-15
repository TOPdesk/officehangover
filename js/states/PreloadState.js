'use strict';

var RPG = RPG || {};

RPG.PreloadState = {
    preload: function (){

        if (!this.loadLevel) {
            //load all images
            //params: the reference object, the src for the image, the next two are the size for the frame, total frames in the sheet
            this.load.spritesheet(Constants.CHARACTER1_SPRITE, 'assets/images/character1.png', 64, 64, 273);
            this.load.spritesheet(Constants.CHARACTER2_SPRITE, 'assets/images/character2.png', 64, 64, 273);
            this.load.spritesheet(Constants.CHARACTER3_SPRITE, 'assets/images/character3.png', 64, 64, 273);

            this.load.spritesheet(Constants.PLAYER_SPRITE, 'assets/images/player.png', 64, 64, 273);
            
            this.load.image(Constants.COFFEE_MACHINE_SPRITE, 'assets/images/assets_coffee_machine.png');
            this.load.image(Constants.PC_SPRITE, 'assets/images/assets_monitor.png');

            this.load.image(Constants.SCENE, 'assets/images/floor-plan.png');

            this.load.image(Constants.STAMINA_BAR, 'assets/images/bar-health.png');

            this.game.load.bitmapFont('desyrel', 'assets/fonts/nokia16black.png', 'assets/fonts/nokia16black.xml');

            //load text
            this.load.text(Constants.PLAYER_DATA, 'assets/data/player_data.json');
            this.load.text(Constants.GAME_TEXT, 'assets/data/text.json');
            this.load.text(Constants.DIALOGS, 'assets/data/dialogs.json');
            
            this.load.image(Constants.TILESET_IMAGE, 'assets/images/tileset1.png');
            this.load.tilemap(Constants.TILEMAP_FLOOR1, 'assets/data/floor1-tilemap.json', null, Phaser.Tilemap.TILED_JSON);
        }
    },
    init: function (level){
        this.currentLevel = level || 'world';
        this.loadLevel = level ? true : false;
    },
    create: function (){
        if (this.loadLevel){
            this.state.start(Constants.GAME_STATE, true, false, this.currentLevel)
        }else {
            this.state.start(Constants.HOME_STATE);
        }
    }
};