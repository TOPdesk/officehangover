'use strict';

var RPG = RPG || {};

RPG.PreloadState = {
    preload: function (){

        if (!this.loadLevel) {
            //load all images
            this.load.spritesheet('character1', 'assets/images/character1.png', 64, 64, 273);
            this.load.spritesheet('character2', 'assets/images/character2.png', 64, 64, 273);
            this.load.spritesheet('player', 'assets/images/player.png', 64, 64, 273);

            this.load.image('background', 'assets/images/floor-plan.png');

            this.load.text('constants', 'assets/data/constants.json');

            this.load.image('bar', 'assets/images/bar-health.png');

            this.game.load.bitmapFont('desyrel', 'assets/fonts/nokia16black.png', 'assets/fonts/nokia16black.xml');

        }
    },
    init: function (level){
        this.currentLevel = level || 'world';
        this.loadLevel = level ? true : false;
    },
    create: function (){
        if (this.loadLevel){
            this.state.start('GameState', true, false, this.currentLevel)
        }else {
            this.state.start('HomeState');
        }
    }
};