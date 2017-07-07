import * as Constants from "./constants";
import BootState from "./states/BootState";
import GameOverState from "./states/GameOverState";
import GameState from "./states/GameState";
import HomeState from "./states/HomeState";
import PreloadState from "./states/PreloadState";
import {getGameLandscapeDimensions} from "./scaler";

const dim = getGameLandscapeDimensions(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);

const game = new Phaser.Game(dim.w, dim.h, Phaser.CANVAS);

game.state.add(Constants.GAME_STATE, GameState);
game.state.add(Constants.HOME_STATE, HomeState);
game.state.add(Constants.PRELOAD_STATE, PreloadState);
game.state.add(Constants.BOOT_STATE, BootState);
game.state.add(Constants.GAME_OVER_STATE, GameOverState);
game.state.start(Constants.BOOT_STATE);
