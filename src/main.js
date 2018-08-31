// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import * as Constants from "./constants";
import BootState from "./states/BootState";
import GameOverState from "./states/GameOverState";
import GameState from "./states/GameState";
import HomeState from "./states/HomeState";
import PreloadState from "./states/PreloadState";
import TextState from "./states/TextState";

// fix game canvas size, scaled up to screen size with 16:10 aspect ratio, black bars around
const game = new Phaser.Game(1280, 800, Phaser.CANVAS);

game.state.add(Constants.GAME_STATE, GameState);
game.state.add(Constants.HOME_STATE, HomeState);
game.state.add(Constants.PRELOAD_STATE, PreloadState);
game.state.add(Constants.BOOT_STATE, BootState);
game.state.add(Constants.GAME_OVER_STATE, GameOverState);
game.state.add(Constants.TEXT_STATE, TextState);
game.state.start(Constants.BOOT_STATE);
