'use strict';

var RPG = RPG || {};

var gameConstant = {
    width: 1024,
    height: 720
}

RPG.dim = RPG.getGameLandscapeDimensions(gameConstant.width, gameConstant.height);

RPG.game = new Phaser.Game(RPG.dim.w, RPG.dim.h, Phaser.CANVAS);

RPG.game.state.add('GameState', RPG.GameState);
RPG.game.state.add('HomeState', RPG.HomeState);
RPG.game.state.add('PreloadState', RPG.PreloadState);
RPG.game.state.add('BootState', RPG.BootState);
RPG.game.state.add('GameOverState', RPG.GameOverState);
RPG.game.state.start('BootState');
