'use strict';

var RPG = RPG || {};

var gameConstant = {
    width: 1024,
    height: 720
}

RPG.dim = RPG.getGameLandscapeDimensions(gameConstant.width, gameConstant.height);

RPG.game = new Phaser.Game(RPG.dim.w, RPG.dim.h, Phaser.CANVAS);

RPG.game.state.add(Constants.GAME_STATE, RPG.GameState);
RPG.game.state.add(Constants.HOME_STATE, RPG.HomeState);
RPG.game.state.add(Constants.PRELOAD_STATE, RPG.PreloadState);
RPG.game.state.add(Constants.BOOT_STATE, RPG.BootState);
RPG.game.state.add(Constants.GAME_OVER_STATE, RPG.GameOverState);
RPG.game.state.start(Constants.BOOT_STATE);
