/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var GAME_WIDTH = exports.GAME_WIDTH = 1024;
var GAME_HEIGHT = exports.GAME_HEIGHT = 720;

var BACKGROUND_BOOT_STATE = exports.BACKGROUND_BOOT_STATE = "#fff";

var GAME_STATE = exports.GAME_STATE = 'GameState';
var HOME_STATE = exports.HOME_STATE = 'HomeState';
var TEXT_STATE = exports.TEXT_STATE = 'TextState';
var PRELOAD_STATE = exports.PRELOAD_STATE = 'PreloadState';
var START_STATE = exports.START_STATE = 'StartGame';
var BOOT_STATE = exports.BOOT_STATE = 'BootState';
var GAME_OVER_STATE = exports.GAME_OVER_STATE = 'GameOverState';

var GAME_TEXT = exports.GAME_TEXT = 'text';
var PLAYER_START_DATA_INIT = exports.PLAYER_START_DATA_INIT = 'player_wake_up';
var PLAYER_DATA_INIT = exports.PLAYER_DATA_INIT = 'player';
var PLAYER_SPRITE = exports.PLAYER_SPRITE = 'player_start';
var COFFEE_MACHINE_SPRITE = exports.COFFEE_MACHINE_SPRITE = 'coffeemachine';
var PC_SPRITE = exports.PC_SPRITE = 'pc';
var CHARACTER1_SPRITE = exports.CHARACTER1_SPRITE = 'character1';
var CHARACTER2_SPRITE = exports.CHARACTER2_SPRITE = 'character2';
var CHARACTER3_SPRITE = exports.CHARACTER3_SPRITE = 'character3';
var CLEANINGLADY_SPRITE = exports.CLEANINGLADY_SPRITE = 'cleaninglady';
var COFFEEADDICT_SPRITE = exports.COFFEEADDICT_SPRITE = 'coffeeaddict';
var DISH_WASHER_SPRITE = exports.DISH_WASHER_SPRITE = 'dish_washer_sprite';
var DIRTY_DISHES_SPRITE = exports.DIRTY_DISHES_SPRITE = 'dirty_dishes_sprite';

var SCENE = exports.SCENE = 'background';
var STAMINA_BAR = exports.STAMINA_BAR = 'bar';
var ANIMATION_WAKE_UP = exports.ANIMATION_WAKE_UP = 'wake_up';
var TILESET_IMAGE = exports.TILESET_IMAGE = 'tileset1';
var TILESET_DATA = exports.TILESET_DATA = 'tileset1.json';

var TILEMAP_FLOORS = exports.TILEMAP_FLOORS = ['tilemap_floor1', 'tilemap_floor2'];

var MOBILE_SPRITE = exports.MOBILE_SPRITE = 'mobile';
var PLANT_SPRITE = exports.PLANT_SPRITE = 'chuck';

/*POP UP*/
var MENU_BACKGROUND = exports.MENU_BACKGROUND = 'game_background';
var POPUP_BACKGROUND = exports.POPUP_BACKGROUND = 'popup_background';

/*FONT STYLING*/
var GENERAL_STYLE = exports.GENERAL_STYLE = { font: "32px pixelFont", fill: "#ff8888" };
var POPUP_MESSAGE_STYLE = exports.POPUP_MESSAGE_STYLE = { font: "26px pixelFont", fill: "#5b5b5b" };
var MENU_TITLE_STYLE = exports.MENU_TITLE_STYLE = { font: "36px pixelFont", fill: '#81649F' };
var INTRO_STYLE = exports.INTRO_STYLE = { font: "32px pixelFont", fill: "#FD88D5", align: "left" };
var MESSAGE_STYLE = exports.MESSAGE_STYLE = { font: "32px pixelFont", fill: '#FCB174' };
var OPTION_STYLE = exports.OPTION_STYLE = { font: "32px pixelFont", fill: '#00FFA5' };

var MUSIC_VOLUME = exports.MUSIC_VOLUME = 0.3;
var MUSIC_VOLUME_LOW = exports.MUSIC_VOLUME_LOW = 0.05;
var SFX_VOLUME = exports.SFX_VOLUME = 3;
var LOOP_MUSIC = exports.LOOP_MUSIC = true;
var MENU_MUSIC = exports.MENU_MUSIC = 'menu_music';
var GAME_MUSIC = exports.GAME_MUSIC = 'game_music';

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"backgroung_color": "#000",
	"PC": {
		"body_size": {
			"width": 24,
			"height": 24,
			"top": -8,
			"left": -8
		},
		"trigger_box": {
			"width": 56,
			"height": 56
		},
		"sprite": "pc"
	},
	"BeerCrateDropZone": {
		"body_size": {
			"width": 256,
			"height": 128,
			"top": 0,
			"left": 0
		},
		"trigger_box": {
			"width": 100,
			"height": 100
		},
		"sprite": null
	},
	"KarioMart": {
		"body_size": {
			"width": 128,
			"height": 96,
			"top": 0,
			"left": 0
		},
		"trigger_box": {
			"width": 100,
			"height": 100
		},
		"sprite": "kariomart_sprite"
	},
	"DishWasher": {
		"body_size": {
			"width": 60,
			"height": 60,
			"top": 0,
			"left": 0
		},
		"trigger_box": {
			"width": 80,
			"height": 80
		},
		"sprite": "dish_washer_sprite"
	},
	"DirtyDishes": {
		"body_size": {
			"width": 60,
			"height": 60,
			"top": 0,
			"left": 0
		},
		"trigger_box": {
			"width": 80,
			"height": 80
		},
		"sprite": "dirty_dishes_sprite"
	},
	"BeerCrate": {
		"body_size": {
			"width": 32,
			"height": 34,
			"top": 0,
			"left": 0
		},
		"trigger_box": {
			"width": 38,
			"height": 30
		},
		"sprite": "BeerCrate"
	},
	"CoffeeMachine": {
		"body_size": {
			"width": 36,
			"height": 68,
			"top": -2,
			"left": -2
		},
		"trigger_box": {
			"width": 56,
			"height": 88
		},
		"sprite": "coffeemachine"
	},
	"Mobile": {
		"body_size": {
			"width": 10,
			"height": 16,
			"top": -2,
			"left": -2
		},
		"trigger_box": {
			"width": 30,
			"height": 36
		},
		"sprite": "mobile"
	},
	"chuck": {
		"body_size": {
			"width": 64,
			"height": 32,
			"top": -2,
			"left": -2
		},
		"trigger_box": {
			"width": 104,
			"height": 52
		},
		"sprite": "chuck"
	},
	"Exit": {
		"body_size": {
			"width": 64,
			"height": 32,
			"top": -2,
			"left": -2
		},
		"trigger_box": {
			"width": 150,
			"height": 150
		},
		"sprite": null
	},
	"postit": {
		"body_size": {
			"width": 32,
			"height": 32,
			"top": -2,
			"left": -2
		},
		"trigger_box": {
			"width": 44,
			"height": 44
		},
		"sprite": null
	},
	"keyboard": {
		"body_size": {
			"width": 64,
			"height": 64,
			"top": -2,
			"left": -2
		},
		"trigger_box": {
			"width": 74,
			"height": 74
		},
		"sprite": null
	},
	"Lift": {
		"body_size": {
			"width": 32,
			"height": 32,
			"top": -2,
			"left": -2
		},
		"trigger_box": {
			"width": 44,
			"height": 44
		},
		"sprite": null
	},
	"firstaid": {
		"body_size": {
			"width": 32,
			"height": 32,
			"top": -2,
			"left": -2
		},
		"trigger_box": {
			"width": 44,
			"height": 44
		},
		"sprite": null
	},
	"Door": {
		"body_size": {
			"width": 64,
			"height": 96,
			"top": 0,
			"left": 0
		},
		"sprite": "Door"
	},
	"animation_walk_right": [
		143,
		144,
		145,
		146,
		147,
		148,
		149,
		150,
		151
	],
	"animation_walk_left": [
		117,
		118,
		119,
		120,
		121,
		122,
		123,
		124,
		125
	],
	"animation_walk_down": [
		130,
		131,
		132,
		133,
		134,
		135,
		136,
		137,
		138
	],
	"animation_walk_up": [
		104,
		105,
		106,
		107,
		108,
		109,
		110,
		111,
		112
	],
	"animation_wake_up": [
		265,
		264,
		263,
		262,
		261,
		260,
		14,
		40,
		14,
		40,
		130
	],
	"player_speed": 550,
	"frames": 9,
	"velocity": {
		"character1": {
			"velocity": 200
		},
		"character2": {
			"velocity": 150
		}
	},
	"player": {
		"body_size": {
			"width": 32,
			"height": 24,
			"top": 40,
			"left": 16
		},
		"trigger_box": {
			"width": 40,
			"height": 70,
			"top": 5,
			"left": 12
		},
		"initial_frame": 130,
		"stamina": 25,
		"items": [],
		"quests": []
	},
	"player_wake_up": {
		"initial_frame": 265,
		"stamina": 25
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _class = function (_Phaser$Sprite) {
	_inherits(_class, _Phaser$Sprite);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: "handleCollision",

		/** called whenever a player collides with a solid game object */
		value: function handleCollision() {}

		/** 
   * Called whenever a player is very near a solid object,
   * or when the player is walking through a non-solid 'zone' object.
   */

	}, {
		key: "handleOverlap",
		value: function handleOverlap() {}
	}]);

	return _class;
}(Phaser.Sprite);

exports.default = _class;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultSprite2 = __webpack_require__(2);

var _DefaultSprite3 = _interopRequireDefault(_DefaultSprite2);

var _player_data = __webpack_require__(1);

var _player_data2 = _interopRequireDefault(_player_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _class = function (_DefaultSprite) {
	_inherits(_class, _DefaultSprite);

	function _class(state, x, y, obj, data, character) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, x, y, obj.name.toLowerCase(), _player_data2.default[character].initial_frame));

		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(data);
		_this.anchor.setTo(0.5);
		_this.scale.setTo(1.5);
		_this.x = x;
		_this.y = y;
		_this.spriteName = obj.name.toLowerCase();
		_this.initialFrame = _player_data2.default[character].initial_frame;
		_this.dialogkey = obj.properties && obj.properties.dialogkey;

		// fail fast if dialog key is missing
		if (!_this.state.dialogs.dialogKeyExists(_this.dialogkey) && obj.type !== "Start") {
			throw "Could not find dialog key: " + _this.dialogkey + " for character " + obj.name;
		}

		// isExecutingTask is set to true to prevent movement while you are interacting with a character through a dialog. 
		_this.isExecutingTask = false;

		// isCharacterOnHold makes a character pause and restart after a collision
		_this.isCharacterOnHold = false;

		// isStopped is a flag to make a character permanently stop moving.
		_this.isStopped = obj.properties && !!obj.properties["stopped"];

		_this.animations.add('walk_right', _player_data2.default.animation_walk_right, _player_data2.default.frames, true);
		_this.animations.add('walk_up', _player_data2.default.animation_walk_up, _player_data2.default.frames, true);
		_this.animations.add('walk_left', _player_data2.default.animation_walk_left, _player_data2.default.frames, true);
		_this.animations.add('walk_down', _player_data2.default.animation_walk_down, _player_data2.default.frames, true);
		_this.animations.add('wake_up', _player_data2.default.animation_wake_up, _player_data2.default.frames, false);

		_this.game.physics.arcade.enable(_this);

		var _data$body_size = data.body_size,
		    width = _data$body_size.width,
		    height = _data$body_size.height,
		    left = _data$body_size.left,
		    top = _data$body_size.top;

		_this.body.setSize(width, height, left, top);
		return _this;
	}

	_createClass(_class, [{
		key: "setRandomDirection",
		value: function setRandomDirection() {
			this.setDirection(Math.floor(Math.random() * 4));
		}
	}, {
		key: "setDirection",
		value: function setDirection(direction) {

			if (direction == 0) {
				this.body.velocity.y = 0;
				this.body.velocity.x = 100;
				this.play('walk_right');
			} else if (direction == 1) {
				this.body.velocity.x = 0;
				this.body.velocity.y = -100;
				this.play('walk_up');
			} else if (direction == 2) {
				this.body.velocity.x = -100;
				this.body.velocity.y = 0;
				this.play('walk_left');
			} else if (direction == 3) {
				this.body.velocity.y = 100;
				this.body.velocity.x = 0;
				this.play('walk_down');
			}
		}
	}, {
		key: "handleOverlap",
		value: function handleOverlap() {
			this.stopMoving();
			this.isCharacterOnHold = true;

			if (!this.isStopped) {
				this.game.time.events.add(Phaser.Timer.SECOND * 4, function () {
					this.isCharacterOnHold = false;
				}, this);
			}

			if (this.state.justPressedSpace && !this.isExecutingTask) {
				// invoke the dialog on this character using the spriteName
				this.state.callAction(this.dialogkey, this);
			}
		}
	}, {
		key: "stopMoving",
		value: function stopMoving() {
			this.body.velocity.x = 0;
			this.body.velocity.y = 0;
			this.animations.stop();
			this.frame = _player_data2.default.initial_frame;
		}

		/** update logic, called every game tick */

	}, {
		key: "update",
		value: function update() {
			if (this.isCharacterOnHold == false && this.isExecutingTask == false && this.body.velocity.x == 0 && this.body.velocity.y == 0 && !this.isStopped) {
				this.setDirection(0);
			}
		}
	}]);

	return _class;
}(_DefaultSprite3.default);

exports.default = _class;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultSprite2 = __webpack_require__(2);

var _DefaultSprite3 = _interopRequireDefault(_DefaultSprite2);

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _assert = __webpack_require__(15);

var _assert2 = _interopRequireDefault(_assert);

var _player_data = __webpack_require__(1);

var _player_data2 = _interopRequireDefault(_player_data);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _class = function (_DefaultSprite) {
	_inherits(_class, _DefaultSprite);

	function _class(state, x, y, type, properties) {
		_classCallCheck(this, _class);

		var key = properties && properties.subtype || type;
		(0, _assert2.default)(key in _player_data2.default, "Key: '" + key + "' is not in playerData");

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, x, y, _player_data2.default[key].sprite));

		_this.key = key;
		_this.type = type;
		_this.properties = properties || {};
		_this.dialogkey = _this.properties.dialogkey;
		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(_player_data2.default[key]);
		_this.anchor.setTo(0, 0);
		_this.isExecutingTask = false;
		_this.isCharacterOnHold = false;

		var status = _this.state.getFlag(_this.properties.statuskey, 0);
		_this.alpha = _this.properties.startHidden ? status : !status;

		//TODO: No build the object if it is not necessary.
		if (!_this.properties.startHidden && status) {
			_this.destroy();
		} else {
			_this.game.physics.arcade.enable(_this);
			var bodySize = _this.data.body_size;
			_this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
			_this.body.immovable = true;
		}

		return _this;
	}

	/** called whenever a player is very near to this game object */


	_createClass(_class, [{
		key: "handleOverlap",
		value: function handleOverlap() {
			if (this.state.player.unhandledAction) {
				if (this.type === "Actionable") {
					this.state.player.unhandledAction = false;
					this.state.callAction(this.dialogkey, this);
				}
			} else if (this.type === "Exit") {
				if (this.state.currentLevel == 0) {
					this.state.currentLevel = 1;
					this.state.setFlag("currentLevel", this.state.currentLevel);
					this.state.initLevel();
				} else {
					this.state.state.start(Constants.TEXT_STATE, true, false, "the_end", Constants.HOME_STATE);
				}
			}
		}
	}, {
		key: "pickObject",
		value: function pickObject() {
			var tween = this.game.add.tween(this).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
			tween.onComplete.add(function () {
				this.destroy();
			}, this);
		}
	}]);

	return _class;
}(_DefaultSprite3.default);

exports.default = _class;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$Plugin) {
	_inherits(_class, _Phaser$Plugin);

	function _class(game, parent) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, parent));

		_this.game = game;
		return _this;
	}

	_createClass(_class, [{
		key: "setup",
		value: function setup() {
			this.line = [];
			this.wordIndex = 0;
			this.lineIndex = 0;
			this.wordDelay = 120;
			this.lineDelay = 400;
			this.text = "";
			this.content = "";
		}
	}, {
		key: "create",
		value: function create(content, posX, posY, config, callback) {
			console.log(content);
			this.content = content;
			this.callback = callback;

			//TODO: Add a customize styling

			this.text = this.game.add.text(posX, posY, "", Constants.INTRO_STYLE);

			this.nextLine();
		}
	}, {
		key: "nextLine",
		value: function nextLine() {
			if (this.lineIndex === this.content.length) {
				//  We're finished
				this.callback();
				return;
			}

			//  Split the current line on spaces, so one word per array element
			this.line = this.content[this.lineIndex].split(' ');

			//  Reset the word index to zero (the first word in the line)
			this.wordIndex = 0;

			//  Call the 'nextWord' function once for each word in the line (line.length)
			this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);

			//  Advance to the next line
			this.lineIndex++;
		}
	}, {
		key: "nextWord",
		value: function nextWord() {
			//  Add the next word onto the text string, followed by a space
			this.text.text = this.text.text.concat(this.line[this.wordIndex] + " ");

			//  Advance the word index to the next word in the line
			this.wordIndex++;

			//  Last word?
			if (this.wordIndex === this.line.length) {
				//  Add a carriage return
				this.text.text = this.text.text.concat("\n");

				//  Get the next line after the lineDelay amount of ms has elapsed
				this.game.time.events.add(this.lineDelay, this.nextLine, this);
			}
		}
	}]);

	return _class;
}(Phaser.Plugin);

exports.default = _class;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _BootState = __webpack_require__(7);

var _BootState2 = _interopRequireDefault(_BootState);

var _GameOverState = __webpack_require__(8);

var _GameOverState2 = _interopRequireDefault(_GameOverState);

var _GameState = __webpack_require__(9);

var _GameState2 = _interopRequireDefault(_GameState);

var _HomeState = __webpack_require__(19);

var _HomeState2 = _interopRequireDefault(_HomeState);

var _PreloadState = __webpack_require__(20);

var _PreloadState2 = _interopRequireDefault(_PreloadState);

var _TextState = __webpack_require__(21);

var _TextState2 = _interopRequireDefault(_TextState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// fix game canvas size, scaled up to screen size with 16:10 aspect ratio, black bars around
var game = new Phaser.Game(1280, 800, Phaser.CANVAS); // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

game.state.add(Constants.GAME_STATE, _GameState2.default);
game.state.add(Constants.HOME_STATE, _HomeState2.default);
game.state.add(Constants.PRELOAD_STATE, _PreloadState2.default);
game.state.add(Constants.BOOT_STATE, _BootState2.default);
game.state.add(Constants.GAME_OVER_STATE, _GameOverState2.default);
game.state.add(Constants.TEXT_STATE, _TextState2.default);
game.state.start(Constants.BOOT_STATE);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, [{
		key: 'init',
		value: function init() {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;
		}
	}, {
		key: 'preload',
		value: function preload() {
			this.load.image('preloadBar', 'assets/images/bar.png');
		}
	}, {
		key: 'create',
		value: function create() {
			this.game.stage.backgroundColor = Constants.BACKGROUND_BOOT_STATE;
			this.state.start(Constants.PRELOAD_STATE);
		}
	}]);

	return _class;
}();

exports.default = _class;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

exports.default = {
	init: function init(param) {
		this.mParam = param;
	}
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _Player = __webpack_require__(10);

var _Player2 = _interopRequireDefault(_Player);

var _Character = __webpack_require__(3);

var _Character2 = _interopRequireDefault(_Character);

var _Door = __webpack_require__(13);

var _Door2 = _interopRequireDefault(_Door);

var _BeerCrateDropZone = __webpack_require__(14);

var _BeerCrateDropZone2 = _interopRequireDefault(_BeerCrateDropZone);

var _GameObject = __webpack_require__(4);

var _GameObject2 = _interopRequireDefault(_GameObject);

var _Dialog = __webpack_require__(16);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _player_data = __webpack_require__(1);

var _player_data2 = _interopRequireDefault(_player_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

exports.default = {

	/**
  * Get a flag, with option default value if the flag doesn't exist.
  * 
  * Always use the getter and setter to access the flags.
  * This way you can be sure that the flags are saved in localStorage
  */
	getFlag: function getFlag(key, defaultVal) {
		if (key in this._flags) {
			return this._flags[key];
		} else {
			return defaultVal;
		}
	},

	/*
 	Set a flag and update local storage
 		Always use the getter and setter to access the flags.
 	This way you can be sure that the flags are saved in localStorage
 */
	setFlag: function setFlag(key, value) {
		this._flags[key] = value;
		localStorage.setItem("flags", JSON.stringify(this._flags));
		console.log("Flag " + key + " is set to " + value);
	},

	/**
  * initialize flags. read them from localstorage if possible
  */
	initFlags: function initFlags() {
		this._flags = {};
		//check the localstorage
		if (localStorage.getItem('flags') !== null) {
			try {
				this._flags = JSON.parse(localStorage.getItem('flags'));
			} catch (e) {
				console.error(e + "\nCouldn't parse flags from local storage. Falling back to empty start");
			}
		}
	},

	init: function init() {
		this.initFlags();

		this.inputChars = []; // for cheat codes

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 0;

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.dialogs = new _Dialog2.default(this.game, this);

		// Capture key presses for dialogs
		this.cursors.up.onDown.add(function () {
			this.dialogs.upPressed();
		}, this);

		this.cursors.down.onDown.add(function () {
			this.dialogs.downPressed();
		}, this);

		this.spaceKey.onDown.add(function () {
			if (this.dialogs.hasActiveDialog()) {
				this.dialogs.spacePressed();
			} else {
				this.justPressedSpace = 1;
			}
		}, this);

		//Stop the following keys from propagating up to the browser
		this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

		//  Capture all key presses
		this.game.input.keyboard.addCallbacks(this, null, null, this.keyPress);

		this.currentLevel = this.getFlag("currentLevel", 0);

		this.sfx = {};
		this.sfx.door_open = this.game.add.audio('door_open', Constants.SFX_VOLUME);
		this.sfx.coffee_machine_broken = this.game.add.audio('coffee_machine_broken', Constants.SFX_VOLUME);
		this.sfx.coffee_machine_serve = this.game.add.audio('coffee_machine_serve', Constants.SFX_VOLUME);
		this.game.sound.stopAll();
		this.sfx.game_music = this.game.add.audio(Constants.GAME_MUSIC, Constants.MUSIC_VOLUME, Constants.LOOP_MUSIC);
		this.sfx.game_music.play();
		// add other sounds to sfx dictionary here!
	},
	create: function create() {

		this.game.stage.backgroundColor = _player_data2.default.background_color;

		this.initLevel();
	},
	initLevel: function initLevel() {
		// clear any leftovers from previous level
		this.uiBlocked = false;
		this.game.world.removeAll();
		// make sure there are no active dialogs remaining
		this.dialogs.closeDialog();

		var tilemap = Constants.TILEMAP_FLOORS[this.currentLevel];

		this.map = this.game.add.tilemap(tilemap);
		this.map.addTilesetImage('officehangover', Constants.TILESET_IMAGE);

		this.collisionLayer = this.map.createLayer('Floor and Walls');
		this.map.createLayer('Shadows').resizeWorld();
		this.map.createLayer('Bottom Objects');

		// visible characters are any object that is visible on the map
		// using a custom z-ordering.
		this.visibleCharacters = this.game.add.group();

		// for the Top Object layer, we create horizontal strips of tiles
		// that can be sorted together with the Character objects.
		for (var y = 0; y < this.map.width; ++y) {
			var strip = new Phaser.SpriteBatch(this.game, null, "Top_row" + y, false);
			strip.body = {
				// we only need to define the bottom to sort correctly
				bottom: (y + 1) * 32
			};
			this.visibleCharacters.add(strip);

			for (var x = 0; x < this.map.width; ++x) {
				var tile3 = this.map.getTile(x, y, 3);
				if (tile3 !== null) {
					strip.add(new Phaser.Image(this.game, x * 32, y * 32, "tileset_as_sprites", tile3.index - 1));
				}
			}
		}

		this.initialiseCharacters();
		this.initialiseCollisionLayer();

		var wakeup = this.getFlag("l1_wake_up", 0);

		if (this.currentLevel == 0 && !wakeup) {
			this.player.wakeUp();
		}
	},
	update: function update() {
		// if the player just pressed space, then set an 'unhandled action' flag
		this.player.unhandledAction = this.justPressedSpace === 1;

		// interact with various objects when the zone around the player overlaps with it...
		this.game.physics.arcade.overlap(this.staticSolids, this.player.zone, function (gameobj) {
			gameobj.handleOverlap();
		}, null, this);
		this.game.physics.arcade.overlap(this.interactionZones, this.player.zone, function (gameobj) {
			gameobj.handleOverlap();
		}, null, this);
		this.game.physics.arcade.overlap(this.characters, this.player.zone, function (character) {
			character.handleOverlap();
		}, null, this);

		// collision - these prevent the player from walking through solid objects
		this.game.physics.arcade.collide(this.staticSolids, this.player, function (gameobj) {
			gameobj.handleCollision();
		});
		this.game.physics.arcade.collide(this.characters, this.player);

		// collisions of moving objects with the tilemap
		this.game.physics.arcade.collide(this.player, this.collisionLayer);
		this.game.physics.arcade.collide(this.characters, this.collisionLayer, function (character) {
			if (!character.isStopped) {
				character.setRandomDirection();
			}
		}, null, this);

		// if the unhandled action wasn't handled in one of the collision routines, let the player handle it.
		if (this.player.unhandledAction) {
			this.player.handleUnhandledAction();
		}

		if (!this.uiBlocked) {
			this.cursorMovement();
		}

		for (var key in this.characters) {
			this.characters[key].update();
		}

		this.visibleCharacters.customSort(function (a, b) {
			if (a === b) return 0;
			if (!a.body) return -1;
			if (!b.body) return 1;
			return a.body.bottom - b.body.bottom;
		}, this);

		// any space action should be handled before this.
		this.justPressedSpace = 0;
	},
	keyPress: function keyPress(char) {
		this.inputChars.push(char);
		if (this.inputChars.length > 5) {
			this.inputChars.shift();
		}

		var cheatCode = this.inputChars.join("");
		if (cheatCode === "iddqd") {
			this.currentLevel = 1;
			this.initLevel();
		} else if (cheatCode === "idkfa") {
			this.currentLevel = 0;
			this.initLevel();
		}
	},
	initialiseCharacters: function initialiseCharacters() {

		// characters are moving objects that check for collision with the tilemap
		this.characters = [];

		// game objects are static, solid objects that do not need to check for collision with the tilemap
		this.staticSolids = [];

		// interaction zones are static, non-solid objects that players and characters can walk through.
		this.interactionZones = [];

		for (var key in this.map.objects.Objects) {
			var obj = this.map.objects.Objects[key];

			// snap to grid:
			obj.x = Math.round(obj.x / 32) * 32;
			obj.y = Math.round(obj.y / 32) * 32;

			if (obj.type === "Start") {
				this.player = new _Player2.default(this, obj.x, obj.y, obj, _player_data2.default.player, Constants.PLAYER_DATA_INIT);

				this.player.body.collideWorldBounds = true;
				this.game.camera.follow(this.player);
				this.visibleCharacters.add(this.player);
			} else if (obj.type === "Character") {
				var character = new _Character2.default(this, obj.x, obj.y, obj, _player_data2.default.player, Constants.PLAYER_DATA_INIT);
				this.visibleCharacters.add(character);
				character.body.collideWorldBounds = true;
				if (character.isStopped) {
					character.body.immovable = true;
					character.stopMoving();
				} else {
					character.setRandomDirection();
				}

				this.characters.push(character);
			} else if (obj.type === "Door") {
				var sprite = new _Door2.default(this, obj.x, obj.y, "Door", obj.properties);
				this.visibleCharacters.add(sprite);
				this.staticSolids.push(sprite);
			} else if (obj.type === "BeerCrateDropZone") {
				var _sprite = new _BeerCrateDropZone2.default(this, obj.x, obj.y, obj.type, obj.name, obj);
				this.add.existing(_sprite);
				this.interactionZones.push(_sprite);
			} else if (obj.type === "Actionable") {
				var _sprite2 = new _GameObject2.default(this, obj.x, obj.y, "Actionable", obj.properties);
				this.visibleCharacters.add(_sprite2);
				this.staticSolids.push(_sprite2);
			} else if (obj.type === "Exit") {
				var _sprite3 = new _GameObject2.default(this, obj.x, obj.y, "Exit");
				this.visibleCharacters.add(_sprite3);
				this.staticSolids.push(_sprite3);
			} else {
				throw "Map contains object of undefined type " + obj.type;
			}
		}

		if (!this.player) {
			console.error("No player start position found on map!");
		}
	},
	initialiseCollisionLayer: function initialiseCollisionLayer() {
		// copy the 'blocking' property from all three layers to the bottom layer, the 'collisionLayer'.
		for (var x = 0; x < this.map.width; ++x) {
			for (var y = 0; y < this.map.width; ++y) {
				var tile1 = this.map.getTile(x, y, 0);
				var tile2 = this.map.getTile(x, y, 2);
				var tile3 = this.map.getTile(x, y, 3);

				if (tile1 == null) continue;

				if (tile1.properties['blocking']) tile1.setCollision(true, true, true, true);
				if (tile2 != null && tile2.properties['blocking']) tile1.setCollision(true, true, true, true);
				if (tile3 != null && tile3.properties['blocking']) tile1.setCollision(true, true, true, true);
			}
		}
	},
	gameOver: function gameOver() {
		this.game.state.start('GameState', true, false, this.currentLevel);
	},

	cursorMovement: function cursorMovement() {
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if (this.cursors.left.isDown) {
			this.player.body.velocity.x = -_player_data2.default.player_speed;
			this.player.play('walk_left');
		} else if (this.cursors.right.isDown) {
			this.player.body.velocity.x = _player_data2.default.player_speed;
			this.player.play('walk_right');
		}

		if (this.cursors.up.isDown) {
			this.player.body.velocity.y = -_player_data2.default.player_speed;
			if ((this.cursors.up.isDown || this.player.btnsPressed.up) && !this.cursors.left.isDown && !this.cursors.right.isDown) {
				this.player.play('walk_up');
			}
		} else if (this.cursors.down.isDown) {
			this.player.body.velocity.y = _player_data2.default.player_speed;
			if (this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown) {
				this.player.play('walk_down');
			}
		}

		if (this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0) {
			this.player.animations.stop();
			this.player.frame = _player_data2.default.player.initial_frame;
		}
	},

	// uncomment to help debug character bounding boxes
	/*
 render: function () {
 	this.game.debug.bodyInfo(this.player, 32, 32);
 	this.game.debug.body(this.player);
 	this.game.debug.body(this.player.zone, '#00FFFF80');
 		for (let i = 0; i < this.characters.length; ++i) {
 		this.game.debug.body(this.characters[i], '#0000FF80');
 	}
 	for (let i = 0; i < this.interactionZones.length; ++i) {
 		this.game.debug.body(this.interactionZones[i], '#FF00FF80');
 	}
 	for (let i = 0; i < this.staticSolids.length; ++i) {
 		this.game.debug.body(this.staticSolids[i], '#FFFF00A0');
 	}
 },
 */
	callAction: function callAction(objectname, character) {

		this.dialogs.open(objectname, character);
	}

};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Character2 = __webpack_require__(3);

var _Character3 = _interopRequireDefault(_Character2);

var _PlayerZone = __webpack_require__(11);

var _PlayerZone2 = _interopRequireDefault(_PlayerZone);

var _Follower = __webpack_require__(12);

var _Follower2 = _interopRequireDefault(_Follower);

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _class = function (_Character) {
	_inherits(_class, _Character);

	function _class(state, x, y, obj, data, character) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state, x, y, obj, data, character));

		_this.pickupSprite = null;
		_this.pickupTimer = 0; // delay before the next pick-up / drop-off action can take place.

		_this.zone = new _PlayerZone2.default(state);
		_this.addChild(_this.zone);
		return _this;
	}

	_createClass(_class, [{
		key: "wakeUp",
		value: function wakeUp() {
			this.state.uiBlocked = true;
			this.play(Constants.ANIMATION_WAKE_UP);
			this.animations.currentAnim.onComplete.add(function () {
				this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
					this.state.dialogs.open("wakeup1", this);
				}, this);
			}, this);
		}

		/** check if we can pick up an object. We can only pick up an object if we haven't already picked up one! */

	}, {
		key: "canPickup",
		value: function canPickup() {
			return this.pickupSprite == null && this.pickupTimer == 0;
		}

		/** idem, we can only drop an object if we picked up one! */

	}, {
		key: "canDropOff",
		value: function canDropOff() {
			return this.pickupSprite != null && this.pickupTimer == 0;
		}

		/** called whenever you press space and there is no other dialog or event taking place */

	}, {
		key: "handleUnhandledAction",
		value: function handleUnhandledAction() {
			if (this.canDropOff()) {
				this.state.dialogs.open("NoDropZone", this);
			}
		}
	}, {
		key: "pickup",
		value: function pickup(pickupObject) {
			if (this.pickupSprite != null) {
				console.error("Trying to pick up two objects!");
				return;
			}
			this.pickupSprite = new _Follower2.default(this.state, pickupObject.key);
			pickupObject.destroy(true);
			var pickupSprite = this.pickupSprite;
			this.addChild(pickupSprite);
			this.game.add.existing(pickupSprite);
			this.pickupTimer = 5; // delay before the next pick-up/drop-off action
		}
	}, {
		key: "dropoff",
		value: function dropoff() {
			this.pickupSprite.destroy(true);
			this.pickupSprite = null;
			this.pickupTimer = 5; // delay before the next pick-up/drop-off action
		}
	}, {
		key: "update",
		value: function update() {
			if (this.pickupTimer > 0) {
				this.pickupTimer -= 1;
			}
		}
	}]);

	return _class;
}(_Character3.default);

exports.default = _class;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _DefaultSprite2 = __webpack_require__(2);

var _DefaultSprite3 = _interopRequireDefault(_DefaultSprite2);

var _player_data = __webpack_require__(1);

var _player_data2 = _interopRequireDefault(_player_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

/**
 * Area around the player that always moves with he player.
 * If you move the player so that objects overlap this zone,
 * then certain actions may happen or certain dialogs may open.
 */
var _class = function (_DefaultSprite) {
	_inherits(_class, _DefaultSprite);

	function _class(state) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, 0, 0));

		_this.scale.setTo(1.5);

		_this.game.physics.arcade.enable(_this);
		var _PLAYER_DATA$player$t = _player_data2.default.player.trigger_box,
		    width = _PLAYER_DATA$player$t.width,
		    height = _PLAYER_DATA$player$t.height,
		    left = _PLAYER_DATA$player$t.left,
		    top = _PLAYER_DATA$player$t.top;

		_this.body.setSize(width, height, left, top);
		_this.anchor.setTo(1);

		return _this;
	}

	return _class;
}(_DefaultSprite3.default);

exports.default = _class;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultSprite2 = __webpack_require__(2);

var _DefaultSprite3 = _interopRequireDefault(_DefaultSprite2);

var _player_data = __webpack_require__(1);

var _player_data2 = _interopRequireDefault(_player_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

/**
 * A follower is an object, like a beer crate, that follows the player around
 * after it is picked up.
 */
var _class = function (_DefaultSprite) {
	_inherits(_class, _DefaultSprite);

	function _class(state, key) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, state.player.x, state.player.y, _player_data2.default[key].sprite));

		_this.followee = state.player;
		// queue of coordinates of the followee
		_this.followeeq = [[state.player.x, state.player.y]];
		_this.bobbingPhase = 0;

		_this.key = key;
		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(_player_data2.default[key]);
		_this.anchor.setTo(0, 0);
		return _this;
	}

	_createClass(_class, [{
		key: "update",
		value: function update() {
			// current coordinates of followee
			var fx = this.followee.x;
			var fy = this.followee.y;

			// previous coordinates in queue
			var qend = this.followeeq.length - 1;
			var prevx = this.followeeq[qend][0];
			var prevy = this.followeeq[qend][1];

			// push next coordinates on queue, but only if they are different
			if (prevx != fx || prevy != fy) {
				this.followeeq.push([fx, fy]);
			}

			// calculate bobbing motion
			this.bobbingPhase += 0.2;
			while (this.bobbingPhase > Math.PI) {
				this.bobbingPhase -= Math.PI;
			}var bobbingAmplitude = 6;
			var bobbingMotion = bobbingAmplitude * Math.sin(this.bobbingPhase);

			this.x = this.followeeq[0][0];
			this.y = this.followeeq[0][1] - bobbingMotion;

			// if the queue is longer than a certain length, start shifting values away
			if (this.followeeq.length > 8) {
				this.followeeq.shift();
			}
		}
	}]);

	return _class;
}(_DefaultSprite3.default);

exports.default = _class;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultSprite2 = __webpack_require__(2);

var _DefaultSprite3 = _interopRequireDefault(_DefaultSprite2);

var _player_data = __webpack_require__(1);

var _player_data2 = _interopRequireDefault(_player_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

/** 
 * a door is a specialized game object that has different states: open and closed.
 * Furthermore, a door could be locked
 */
var _class = function (_DefaultSprite) {
	_inherits(_class, _DefaultSprite);

	function _class(state, x, y, key, properties) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, x, y, _player_data2.default[key].sprite));

		_this.isLocked = properties && properties["locked"];

		_this.key = key;
		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(_player_data2.default[key]);

		_this.animations.add('closed', [0]);
		_this.animations.add('open', [1]);
		_this.animations.add('locked', [2]);

		if (_this.isLocked) {
			if (_this.state.getFlag("l1_storageroomdooropen") === 1) {
				_this.play('open');
				_this.isLocked = false;
			} else {
				_this.play('locked'); // initial state = locked
			}
		} else {
			_this.play('closed'); // initial state = closed.
		}

		_this.anchor.setTo(0, 0);

		_this.game.physics.arcade.enable(_this);
		var bodySize = _this.data.body_size;
		_this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		_this.body.immovable = true;
		return _this;
	}

	_createClass(_class, [{
		key: "openDoor",
		value: function openDoor() {
			this.play('open');
			this.state.sfx.door_open.play();
			var bodySize = this.data.body_size;
			this.body.setSize(0, 0, bodySize.left, bodySize.top);
		}

		/** called whenever a player collides with this door */

	}, {
		key: "handleCollision",
		value: function handleCollision() {

			if (this.isLocked && this.state.player.unhandledAction) {
				this.state.dialogs.open("doorlocked", this);
				this.state.player.unhandledAction = false;
				if (this.state.getFlag("l1_storageroomkey")) {
					this.isLocked = false;
					this.state.setFlag("l1_storageroomdooropen", 1);
				}
			}

			if (!this.isLocked) {
				this.openDoor();
			}
		}
	}]);

	return _class;
}(_DefaultSprite3.default);

exports.default = _class;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultSprite2 = __webpack_require__(2);

var _DefaultSprite3 = _interopRequireDefault(_DefaultSprite2);

var _GameObject = __webpack_require__(4);

var _GameObject2 = _interopRequireDefault(_GameObject);

var _player_data = __webpack_require__(1);

var _player_data2 = _interopRequireDefault(_player_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var STACK_HEIGHT = 3;

var _class = function (_DefaultSprite) {
	_inherits(_class, _DefaultSprite);

	function _class(state, x, y, key, name, obj) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, x, y, _player_data2.default[key].sprite));

		_this.key = key;
		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(_player_data2.default[key]);
		_this.name = name;
		_this.flagkey = "l1_" + name + "_crates";

		var properties = obj.properties || {};
		var mapDefinedInitialCount = properties && properties["initialCount"];
		var initialCount = _this.state.getFlag(_this.flagkey, mapDefinedInitialCount);

		_this.crates = [];

		_this.game.physics.arcade.enable(_this);
		_this.body.setSize(obj.width, obj.height);
		_this.body.immovable = true;

		for (var i = 0; i < initialCount; ++i) {
			_this.makeCrate();
		}
		return _this;
	}

	_createClass(_class, [{
		key: "makeCrate",
		value: function makeCrate() {
			var pos = this.crates.length;

			var nx = this.x + Math.floor(pos / STACK_HEIGHT) * 32;
			var ny = this.body.bottom - 32 - pos % STACK_HEIGHT * 24;

			console.log(this.x, this.y, this.width, this.height, nx, ny);

			var sprite = new _GameObject2.default(this.state, nx, ny, "BeerCrate");

			sprite.beerCratePosition = pos;
			sprite.beerCrateDropZone = this;

			this.crates.push(sprite);
			this.game.add.existing(sprite);
			this.state.staticSolids.push(sprite);
			this.state.setFlag(this.flagkey, this.crates.length);
		}
	}, {
		key: "hasCrates",
		value: function hasCrates() {
			return this.crates.length > 0;
		}
	}, {
		key: "findCrate",
		value: function findCrate() {
			if (this.crates.length > 0) {
				var result = this.crates.pop();
				this.state.setFlag(this.flagkey, this.crates.length);
				return result;
			} else {
				return undefined;
			}
		}
	}, {
		key: "handleOverlap",
		value: function handleOverlap() {
			if (this.state.player.unhandledAction) {

				if (this.state.player.canDropOff()) {
					this.state.callAction(this.name, this);
					this.state.player.dropoff();
					this.makeCrate();
					this.state.player.unhandledAction = false;
				} else if (this.state.player.canPickup()) {
					if (this.name === "BeerCrateDropZone1") {
						this.state.callAction(this.name, this);
						this.state.player.unhandledAction = false;

						var crate = this.findCrate();
						if (crate !== undefined) {
							this.state.player.pickup(crate);
						}
					}
				}
			}
		}
	}]);

	return _class;
}(_DefaultSprite3.default);

exports.default = _class;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (condition, message) {
	if (!condition) {
		throw message || "Assertion failed";
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _dialogs = __webpack_require__(17);

var _dialogs2 = _interopRequireDefault(_dialogs);

var _SpecialActions = __webpack_require__(18);

var _SpecialActions2 = _interopRequireDefault(_SpecialActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class(game, state) {
		_classCallCheck(this, _class);

		this.state = state;
		this.game = game;
	}

	_createClass(_class, [{
		key: "upPressed",
		value: function upPressed() {
			if (this.activeDialog) {
				this.activeDialog.upPressed();
			}
		}
	}, {
		key: "downPressed",
		value: function downPressed() {
			if (this.activeDialog) {
				this.activeDialog.downPressed();
			}
		}
	}, {
		key: "spacePressed",
		value: function spacePressed() {
			if (this.activeDialog) {
				this.activeDialog.spacePressed();
			}
		}
	}, {
		key: "hasActiveDialog",
		value: function hasActiveDialog() {
			return !!this.activeDialog;
		}
	}, {
		key: "dialogKeyExists",
		value: function dialogKeyExists(dialogkey) {
			return dialogkey in _dialogs2.default;
		}
	}, {
		key: "open",
		value: function open(objectname, character) {

			if (this.activeDialog) {
				return;
			} // Can't activate dialog when one is already active.

			if (character !== undefined) {
				character.isExecutingTask = true;
			}

			this.state.player.stopMoving();
			this.popup(objectname, character);
		}
	}, {
		key: "popup",
		value: function popup(objectname, character) {
			if (!(objectname in _dialogs2.default)) {
				console.error("No dialog found using key: " + objectname);
			} else {
				var objectDialogs = _dialogs2.default[objectname];
				var dialog = new DialogWindow(this.state, this, objectname, character);
				var dialogStartId = dialog.findDialogStart(objectDialogs.start_options, objectDialogs.messages);
				if (dialogStartId !== undefined) {
					this.activeDialog = dialog;
					this.activeDialog.showDialog(objectDialogs, dialogStartId);
				} else {
					this.state.uiBlocked = false;
					character.isExecutingTask = false;
				}
			}
		}
	}, {
		key: "closeDialog",
		value: function closeDialog() {
			delete this.activeDialog;
		}
	}]);

	return _class;
}();

exports.default = _class;

var DialogWindow = function () {
	function DialogWindow(state, dialogManager, objectname, character) {
		_classCallCheck(this, DialogWindow);

		this.state = state;
		this.dialogManager = dialogManager;
		this.game = state.game;
		this.objectname = objectname;
		this.character = character;
	}

	_createClass(DialogWindow, [{
		key: "showDialog",
		value: function showDialog(objectDialogs, id) {
			var _this = this;

			this.state.uiBlocked = true;

			// calculate a reasonable margin, 10% of width or 10% of height, whichever is smaller.
			this.margin = Math.min(this.game.width / 10, this.game.height / 10);
			this.lineHeight = 100;

			this.y = this.margin;
			this.x = this.margin;
			this.w = this.game.width - 2 * this.margin;
			this.h = this.game.height - 2 * this.margin;

			// running y counter
			var yy = this.y;

			this.objects = [];
			this.optionWidgets = [];
			this.replies = [];
			this.objectDialogs = objectDialogs;

			// semi-transparent black background
			var bg = this.game.add.graphics(this.game.width, this.game.height);
			bg.beginFill("#000000", 0.7);
			bg.x = this.x;
			bg.y = this.y;
			bg.drawRect(0, 0, this.w, this.h);
			bg.fixedToCamera = true;

			this.objects.push(bg);

			this.currentObjectDialog = this.findDialog(objectDialogs.messages, id);

			var msgWidget = this.game.add.text(this.x, yy, this.currentObjectDialog.message, Constants.MESSAGE_STYLE);
			msgWidget.wordWrap = true;
			msgWidget.wordWrapWidth = this.w;

			msgWidget.fixedToCamera = true;
			var PADDING = 16;
			yy += msgWidget.height + 2 * PADDING;

			this.objects.push(msgWidget);

			var _loop = function _loop(replyOption) {
				if (replyOption.condition) {
					result = _this.conditionsSatisfyGameState(replyOption.condition);

					if (!result) return "continue"; // skip this option
				}

				optionWidget = _this.game.add.text(_this.x, yy, replyOption.message, Constants.OPTION_STYLE);

				optionWidget.wordWrap = true;
				optionWidget.wordWrapWidth = _this.w;

				yy += optionWidget.height + PADDING;

				optionWidget.fixedToCamera = true;
				optionWidget.inputEnabled = true;
				optionWidget.events.onInputDown.add(function () {
					this.activateOption(objectDialogs, replyOption);
				}, _this);

				_this.replies.push(replyOption);
				_this.objects.push(optionWidget);
				_this.optionWidgets.push(optionWidget);
			};

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.currentObjectDialog.replies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var replyOption = _step.value;
					var result;
					var optionWidget;

					var _ret = _loop(replyOption);

					if (_ret === "continue") continue;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			this.focusOption(0);
		}
	}, {
		key: "spacePressed",
		value: function spacePressed() {
			var replyOption = this.replies[this.selectedIndex];
			if (replyOption !== undefined) {
				this.activateOption(this.objectDialogs, replyOption);
			}
		}
	}, {
		key: "upPressed",
		value: function upPressed() {
			this.focusOption(this.selectedIndex - 1);
		}
	}, {
		key: "downPressed",
		value: function downPressed() {
			this.focusOption(this.selectedIndex + 1);
		}
	}, {
		key: "focusOption",
		value: function focusOption(index) {
			// clear the animation on the old option
			if (this.tween !== undefined) {
				this.tween.stop();
			}
			var oldOption = this.optionWidgets[this.selectedIndex];
			if (oldOption !== undefined) oldOption.alpha = 1.0;

			// selected a new option and wrap around the index
			this.selectedIndex = index;
			if (this.selectedIndex < 0) this.selectedIndex = this.optionWidgets.length - 1;
			if (this.selectedIndex >= this.optionWidgets.length) this.selectedIndex = 0;

			// animate the newly selected option
			var option = this.optionWidgets[this.selectedIndex];
			this.tween = this.game.add.tween(option).to({ alpha: 0.5 }, 300, "Linear", true).yoyo().loop();
		}
	}, {
		key: "activateOption",
		value: function activateOption(objectDialogs, replyOption) {
			this.close();
			if (replyOption.actions) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = replyOption.actions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var action = _step2.value;

						if (action == "dirtydishes") {
							_SpecialActions2.default.dirtyDishesAction(this.game, this.state, this.character);
						} else if (action == "pick_object") {
							this.character.pickObject();
						} else if (action === "move_around") {
							this.character.isStopped = false;
							this.character.setRandomDirection();
						} else if (action === "pour_coffee") {
							this.state.sfx.coffee_machine_serve.play();
						} else if (action === "machine_broken") {
							this.state.sfx.coffee_machine_broken.play();
						} else if (action === "transfer_remaining_crates") {
							_SpecialActions2.default.transferAllCrates(this.game, this.state, this.character);
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
			if (replyOption.setflag) {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = replyOption.setflag[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var flag = _step3.value;

						this.state.setFlag(flag, 1);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
			if (replyOption.clearflag) {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = replyOption.clearflag[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var _flag = _step4.value;

						this.state.setFlag(_flag, 0);
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			}
			if (replyOption.goto) {
				this.showDialog(objectDialogs, replyOption.goto);
			} else {
				this.dialogManager.closeDialog();
			}
		}
	}, {
		key: "findDialogStart",
		value: function findDialogStart(startOptions, objectMessages) {
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = startOptions[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var startOptionId = _step5.value;

					var startOptionValue = this.findDialog(objectMessages, startOptionId);
					if (!startOptionValue) {
						throw "Could not find dialog for id: " + startOptionId;
					}
					// first option that has no condition or a condition that is satisfied
					if (!startOptionValue.condition || this.conditionsSatisfyGameState(startOptionValue.condition)) {
						return startOptionId;
					}
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			return undefined; // no dialog option satisfying game state found.
		}
	}, {
		key: "findDialog",
		value: function findDialog(dialogs, idToFind) {
			for (var i = 0; i < dialogs.length; i++) {
				if (dialogs[i].id === idToFind) {
					return dialogs[i];
				}
			}
			return null;
		}
	}, {
		key: "conditionsSatisfyGameState",
		value: function conditionsSatisfyGameState(condition) {
			// turn the condition string into a javascript function and evaluate it
			var conditionFunc = new Function("state", condition);
			var result = conditionFunc(this.state);
			console.log("Checking condition: " + condition + " which results in " + result);
			return result;
		}
	}, {
		key: "close",
		value: function close() {
			this.state.uiBlocked = false;
			this.character.isExecutingTask = false;
			// this.game.input.keyboard.removeCallbacks(this); //TODO

			// destroy all components of the dialog
			this.objects.forEach(function (element) {
				element.destroy();
			});
		}
	}]);

	return DialogWindow;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var DIALOGS = {
	"CoffeeMachine": {
		"start_options": [1, 8],
		"messages": [{
			"id": 1,
			"condition": "return !(state.getFlag('l1_coffee_machine_fixed'));",
			"message": "The coffee machine shows an error message.",
			"replies": [{
				"message": "Press info.",
				"setflag": ["l1_error_seen"],
				"actions": ["machine_broken"],
				"goto": 4
			}, {
				"message": "Walk away..",
				"actions": ["close_dialog"]
			}]
		}, {
			"id": 4,
			"message": "Grinder out of alignment. Error e1029. Please fix me!",
			"replies": [{
				"message": "Ok.",
				"actions": ["close_dialog"]
			}, {
				"message": "How can I do this?",
				"goto": 7
			}]
		}, {
			"id": 7,
			"message": "Find a pc and log a call.",
			"replies": [{
				"message": "Ok.",
				"actions": ["close_dialog"]
			}]
		}, {
			"id": 8,
			"message": "What would you like to drink?",
			"replies": [{
				"message": "Coffee",
				"setflag": ["l1_get_coffee"],
				"goto": 9
			}, {
				"message": "Cappuccino",
				"goto": 9
			}, {
				"message": "Choco deluxe",
				"goto": 9
			}]
		}, {
			"id": 9,
			"message": "Do you want milk or sugar?",
			"replies": [{
				"message": "No thanks",
				"actions": ["pour_coffee"],
				"goto": 10
			}, {
				"message": "Milk",
				"actions": ["pour_coffee"],
				"goto": 10
			}, {
				"message": "Sugar",
				"actions": ["pour_coffee"],
				"goto": 10
			}, {
				"message": "Milk and Sugar",
				"actions": ["pour_coffee"],
				"goto": 10
			}]
		}, {
			"id": 10,
			"message": "The machine serves you your drink",
			"replies": [{
				"message": "Ok",
				"actions": ["close_dialog", "increase_energy"]
			}]
		}]
	},

	"wakeup1": {
		"start_options": [1],
		"messages": [{
			"condition": "return !(state.getFlag('l1_wake_up'));",
			"id": 1,
			"message": "Oof! What happened last night? I never remember these office parties. Oh well, maybe it's for the best",
			"replies": [{
				"message": "Press space to continue...",
				"goto": 2
			}]
		}, {
			"id": 2,
			"message": "Wait, where did I put my keys? My wallet's gone too... Did I even lock my bike at all? I develop software for managing items for .. sake.",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog",
				"setflag": ["l1_wake_up"]
			}]
		}]
	},

	"headache": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "I have a splitting headache... like someone's playing table tennis with my brain.",
			"replies": [{
				"message": "Continue...",
				"goto": 2
			}]
		}, {
			"id": 2,
			"message": "Wait, where did I put my keys? My wallet's gone too... Did I even lock my bike at all? I develop software for managing items for .. sake.",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"cleaninglady": {
		"start_options": [1, 5, 6],
		"messages": [{
			"id": 1,
			"condition": "return !(state.getFlag('l1_clean_dishes'));",
			"message": "Hey, this lady's been cleaning up. Maybe she found my wallet and keys",
			"replies": [{
				"message": "Excuse me...",
				"goto": 2
			}]
		}, {
			"id": 2,
			"message": "I'm pretty busy. What's up?",
			"replies": [{
				"message": "I was wondering if you've found my keys and wallet?",
				"goto": 3
			}]
		}, {
			"id": 3,
			"message": "I found some things, but I don't have time to set up a lost-and-found in this mess. Can you help me with those dirty dishes from the kitchen? Thanks a bunch",
			"replies": [{
				"message": "I guess...",
				"goto": 4
			}]
		}, {
			"id": 4,
			"message": "When you are done, tell me",
			"replies": [{
				"message": "Ok",
				"action": "close_dialog",
				"setflag": ["l1_cleaning_lady_task"]
			}]
		}, {
			"id": 5,
			"condition": "return !(state.getFlag('l1_storageroomkey'));",
			"message": "Thank you very much for helping. There are some lost-and-found things in the storage room. If the door is locked, just use this key.",
			"replies": [{
				"message": "You receive the key to the storage room.",
				"action": "close_dialog",
				"setflag": ["l1_storageroomkey"]
			}]
		}, {
			"id": 6,
			"message": "Thank you very much for helping.",
			"replies": [{
				"message": "You are welcome",
				"action": "close_dialog"
			}]
		}]
	},
	"coffeeaddict": {
		"start_options": [1, 3],
		"messages": [{
			"id": 1,
			"condition": "return !(state.getFlag('l1_get_coffee'));",
			"message": "The coffee machine is not working again. I'd kill for a coffee.",
			"replies": [{
				"message": "Ok...",
				"goto": 2
			}]
		}, {
			"id": 2,
			"message": "The last borrel I found something. I'll exchange it for a coffee",
			"replies": [{
				"message": "(This guy has a problem with the coffee)",
				"action": "close_dialog"
			}]
		}, {
			"id": 3,
			"message": "Hey you have a coffee! I NEED IT!!!! ",
			"replies": [{
				"message": "Give the coffee to the addict guy",
				"goto": 4
			}, {
				"message": "Keep the coffee for yourself",
				"action": "close_dialog"
			}]
		}, {
			"id": 4,
			"message": "Thank you so much! Here you have something in return. I'll let you through now",
			"replies": [{
				"message": "The addict guy hands you your keys!",
				"actions": ["close_dialog", "move_around"]
			}]
		}]
	},
	"DirtyDishes": {
		"start_options": [1, 2],
		"messages": [{
			"id": 1,
			"condition": "return !(state.getFlag('l1_cleaning_lady_task'));",
			"message": "Here are some dirty dishes. I am wondering who is going to clean them.",
			"replies": [{
				"message": "Continue ...",
				"action": "close_dialog"
			}]
		}, {
			"id": 2,
			"message": "When I said I was wondering who is going to clean them, I already knew the answer. Me!",
			"replies": [{
				"message": "Clean the dishes",
				"actions": ["dirtydishes"],
				"setflag": ["l1_clean_dishes"]
			}, {
				"message": "I'll do it later.",
				"action": "close_dialog"
			}]
		}]
	},
	"mobile": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "HEY! This is my mobile phone. Now I just need to find the rest of my stuff. I should check the other floors",
			"replies": [{
				"message": "Continue ...",
				"actions": ["close_dialog", "pick_object"],
				"setflag": ["l1_mobile_picked"]
			}]
		}]
	},
	"chuck": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "HEY! It is Chuck. The plant!",
			"replies": [{
				"message": "Continue ...",
				"action": "close_dialog"
			}]
		}]
	},
	"PostIt1": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Ugh! I smell like a human",
			"replies": [{
				"message": "sniff.. sniff..",
				"action": "close_dialog"
			}]
		}]
	},
	"PostIt2": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "The post-it reads: Look behind you a three headed monkey!",
			"replies": [{
				"message": "WHERE!!!!",
				"action": "close_dialog"
			}]
		}]
	},
	"PostIt3": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Do you know the new emergencies phone number? ",
			"replies": [{
				"message": "0118 999 881 999 119 7253",
				"action": "close_dialog"
			}]
		}]
	},
	"postit21": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "The post-it reads: I hate baby Mario",
			"replies": [{
				"message": "Allrighty then...",
				"action": "close_dialog"
			}]
		}]
	},
	"postit22": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}]
	},
	"postit23": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}]
	},
	"postit24": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}]
	},
	"postit25": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}]
	},
	"postit26": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Add text ...",
			"replies": [{
				"message": "TODO",
				"action": "close_dialog"
			}]
		}]
	},
	"pc21": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}]
	},
	"pc22": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}]
	},
	"pc23": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}]
	},
	"pc24": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}]
	},
	"pc25": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}]
	},
	"pc26": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}]
	},
	"pc27": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}]
	},
	"pc28": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Is locked",
			"replies": [{
				"message": "Continue",
				"action": "close_dialog"
			}]
		}]
	},
	"FirstAidKit": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "This may be helpful for my HUGE headache...",
			"replies": [{
				"message": "(glup,glup)",
				"action": "close_dialog"
			}]
		}]
	},
	"Lift": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "It reads: The lift has been inactive since that incident with the North-Korean spy...",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"l1_character1": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "I am Error",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"NoDropZone": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Where do I put this? I can't just leave this here...",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"BeerCrateDropZone1": {
		"start_options": [1, 2],
		"messages": [{
			"id": 1,
			"condition": "return (!state.getFlag('l1_second_return') && state.player.canDropOff());",
			"message": "I'm tired carrying this around. Maybe I should put it back...",
			"replies": [{
				"message": "Continue...",
				"setflag": ["l1_second_return"],
				"action": "close_dialog"
			}]
		}, {
			"id": 2,
			"condition": "return (!state.getFlag('l1_second_pickup') && state.player.canPickup());",
			"message": "Okay, let's get these out of the way. Where do I take them?",
			"replies": [{
				"message": "Continue...",
				"setflag": ["l1_second_pickup"],
				"actions": ["close_dialog"]
			}]
		}]
	},
	"BeerCrateDropZone2": {
		"start_options": [1, 2],
		"messages": [{
			"id": 1,
			"condition": "return state.getFlag('l1_BeerCrateDropZone2_crates') === 4;",
			"message": "Phew, I guess I can drop the crate off here...",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}, {
			"id": 2,
			"condition": "return state.getFlag('l1_BeerCrateDropZone2_crates') === 6;",
			"message": "Okay, I can see where this is going. Let me finish the rest on automatic mode...",
			"replies": [{
				"message": "Phew, finally...",
				"actions": ["transfer_remaining_crates", "close_dialog"]
			}]
		}]
	},
	"l1_character2": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Did you enjoy the party?",
			"replies": [{
				"message": "Continue...",
				"goto": 2
			}]
		}, {
			"id": 2,
			"message": "Those beercrates are blocking the way to the second floor. I hope someone will pick them up soon.",
			"replies": [{
				"message": "Continue..."
			}]
		}]
	},
	"l1_character3": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Wow, that was some party last night, huh?",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"l2_character1": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "Are you lost? This is the Communications floor.",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"l2_character2": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "I can't wait to see the pictures of last night!",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}]
	},
	"doorlocked": {
		"start_options": [1, 2],
		"messages": [{
			"id": 1,
			"condition": "return !(state.getFlag('l1_storageroomkey'));",
			"message": "This door is locked. You'll need to find a key",
			"replies": [{
				"message": "Continue...",
				"action": "close_dialog"
			}]
		}, {
			"id": 2,
			"condition": "return (state.getFlag('l1_storageroomkey'));",
			"message": "Great! The door opens with the key you got from the cleaning lady",
			"replies": [{
				"message": "Continue...",
				"actions": ["close_dialog", "unlock_door"]
			}]
		}]
	},
	"PC": {
		"start_options": [1],
		"messages": [{
			"id": 1,
			"message": "What would you like to do?",
			"replies": [{
				"message": "Check facebook",
				"goto": 6
			}, {
				"message": "Check e-mail",
				"goto": 7
			}, {
				"message": "Log a call",
				"goto": 10
			}, {
				"condition": "return state.getFlag('l1_error_seen');",
				"message": "Search for error e1029",
				"goto": 14
			}, {
				"message": "Leave...",
				"action": "close_dialog"
			}]
		}, {
			"id": 6,
			"message": "One hour passed... You feel tired.",
			"replies": [{
				"message": "What a waste of time!",
				"actions": ["lower_energy"],
				"goto": 1
			}]
		}, {
			"id": 7,
			"message": "You have 1 new email.",
			"replies": [{
				"message": "Open it.",
				"goto": 17
			}, {
				"message": "Let's not go into this now. Log a call.",
				"goto": 10
			}]
		}, {
			"id": 10,
			"message": "You are making a ticket in TOPerations. What seems to be the problem?",
			"replies": [{
				"condition": "return (state.getFlag('l1_error_seen') && !state.getFlag('l1_coffee_machine_fixed'));",
				"message": "The coffee machine is broken, it shows error e1029. Submit your call.",
				"goto": 13
			}, {
				"condition": "return state.getFlag('phone_battery_missing');",
				"message": "I lost my phone battery.",
				"goto": 18
			}, {
				"message": "On second thought, nevermind...",
				"goto": 1
			}]
		}, {
			"id": 13,
			"message": "Thanks for registering your call. Our coffee machine repairmen will arrive within 15 minutes.",
			"replies": [{
				"message": "Thank you!",
				"setflag": ["l1_coffee_machine_fixed"],
				"actions": ["close_dialog"]
			}]
		}, {
			"id": 14,
			"message": "You find 1 knowledge item.",
			"replies": [{
				"message": "Read it",
				"goto": 19
			}, {
				"message": "I am too tired for this, log a call.",
				"goto": 10
			}]
		}, {
			"id": 17,
			"message": "You see some pictures from yesterdays party. Apparently there were some uniformed police agents at the party. You wonder why?",
			"replies": [{
				"message": "Ok",
				"goto": 1,
				"actions": ["lower_energy"]
			}]
		}, {
			"id": 18,
			"message": "Thanks for registering your call. You can get a new phone battery at our ICT department at the 14th floor.",
			"replies": [{
				"message": "Thank you!",
				"clearflag": "state.phone.battery_missing",
				"actions": ["close_dialog"]
			}]
		}, {
			"id": 19,
			"message": "It says log a call, a repairman will come to fix this. The machine has to be opened up and a switch needs to be replaced. Let's log a call.",
			"replies": [{
				"message": "Ok.",
				"goto": 1
			}]
		}]
	},
	"KarioMart": {
		"start_options": [0],
		"messages": [{
			"id": 0,
			"message": "Choose a racer",
			"replies": [{
				"message": "Toad",
				"goto": 1
			}, {
				"message": "Baby Mario",
				"goto": 2
			}, {
				"message": "Donkey Kong",
				"goto": 3
			}]
		}, {
			"id": 1,
			"message": "With toad's fast acceleration, you start off well. But the heavier racers are starting to overtake you.\nThere is a risky shortcut over a narrow canyon on the left, or you can take the long road and collect some extra coins",
			"replies": [{
				"message": "Risky shortcut",
				"goto": 11
			}, {
				"message": "Extra coins",
				"goto": 12
			}]
		}, {
			"id": 11,
			"message": "phew, you take the shortcut without the help of Lakitu. But you're still being overtaken.",
			"replies": [{
				"message": "Continue...",
				"goto": 4
			}]
		}, {
			"id": 12,
			"message": "Good thinking, toad quickly swerves to collect extra coins and gain some extra speed",
			"replies": [{
				"message": "Continue...",
				"goto": 5
			}]
		}, {
			"id": 2,
			"message": "The race is going well for you. There is a risky shortcut on the left, or you can take the long road and collect some extra coins",
			"replies": [{
				"message": "Risky shortcut",
				"goto": 21
			}, {
				"message": "Extra coins",
				"goto": 22
			}]
		}, {
			"id": 21,
			"message": "Phew, you take the shortcut without the help of Lakitu. But you're still being overtaken.",
			"replies": [{
				"message": "Continue...",
				"goto": 4
			}]
		}, {
			"id": 22,
			"message": "Good thinking, toad quickly swerves to collect extra coins and gain some extra speed",
			"replies": [{
				"message": "Ok, you got some extra coins but you needed to swerve to get them.",
				"goto": 4
			}]
		}, {
			"id": 3,
			"message": "DK is a heavy racer, with slow acceleration. You start at the back of the back, but you're gaining speed. There is a risky shortcut on the left, or you can take the long road and collect some extra coins",
			"replies": [{
				"message": "Risky shortcut",
				"goto": 31
			}, {
				"message": "Extra coins",
				"goto": 32
			}]
		}, {
			"id": 31,
			"message": "Good thinking, you need to make up for a slow start. You take the shortcut without the help of Lakitu.",
			"replies": [{
				"message": "Continue...",
				"goto": 6
			}]
		}, {
			"id": 32,
			"message": "Ok, you got some extra coins but you needed to swerve to get them and now you lost speed",
			"replies": [{
				"message": "Continue...",
				"goto": 4
			}]
		}, {
			"id": 4,
			"message": "You're almost near the end. You managed to fight your way to first place! You hear a beeping noise coming from behind",
			"replies": [{
				"message": "Hold back",
				"goto": 41
			}, {
				"message": "Press on",
				"goto": 42
			}]
		}, {
			"id": 41,
			"message": "You hold back and are quickly overtaken. You lose the game.",
			"replies": [{
				"message": "Continue...",
				"goto": 7
			}]
		}, {
			"id": 42,
			"message": "You press on. A blue shield destroys you just before the finish. You lose the game",
			"replies": [{
				"message": "Continue...",
				"goto": 7
			}]
		}, {
			"id": 5,
			"message": "You're almost near the end. You managed to fight your way to first place! You hear a beeping noise coming from behind",
			"replies": [{
				"message": "Hold back",
				"goto": 51
			}, {
				"message": "Press on",
				"goto": 52
			}]
		}, {
			"id": 51,
			"message": "You hold back and are quickly overtaken by Baby Mario!. You lose the game.",
			"replies": [{
				"message": "Continue...",
				"goto": 7
			}]
		}, {
			"id": 52,
			"message": "You press on. A blue shield hits you just before the finish. However, with Toad's fast acceleration, you manage to just stay ahead. You win!",
			"replies": [{
				"message": "Yay!",
				"goto": 8
			}]
		}, {
			"id": 6,
			"message": "You're almost near the end. You managed to fight your way to first place! You hear a beeping noise coming from behind",
			"replies": [{
				"message": "Hold back",
				"goto": 61
			}, {
				"message": "Press on",
				"goto": 62
			}]
		}, {
			"id": 61,
			"message": "Good thinking! Baby mario zooms past you, but then a blue shield comes out of nowhere and blows that little bugger to kingdom come! You win easily!",
			"replies": [{
				"message": "Yay!",
				"goto": 8
			}]
		}, {
			"id": 62,
			"message": "You are hit by a blue shield. You try to get back into the race but it's too late - baby mario wins the game",
			"replies": [{
				"message": "Aww...",
				"goto": 7
			}]
		}, {
			"id": 7,
			"message": "You LOST!",
			"replies": [{
				"message": "Continue...",
				"actions": ["close_dialog"]
			}]
		}, {
			"id": 8,
			"message": "You WIN!",
			"replies": [{
				"message": "Continue...",
				"actions": ["close_dialog"]
			}]
		}]

	}
};
exports.default = DIALOGS;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Here you can define actions that are very specific to a particular object or level,
 * so that they don't muddle the generic engine.
 */
var SpecialActions = {

	/** called when clicking on dirty dishes */
	dirtyDishesAction: function dirtyDishesAction(game, state, sprite) {

		var dependentObject = state.staticSolids.find(function (obj) {
			return obj.key === 'DishWasher';
		});

		var actionCloud = game.add.sprite(sprite.x, sprite.y, 'ActionCloud', 0);
		actionCloud.animations.add('action', [0, 1, 2, 3], 5, true);
		actionCloud.play('action');
		actionCloud.alpha = 0;

		var actionCloudDishWasher = game.add.sprite(dependentObject.x, dependentObject.y, 'ActionCloud', 0);
		actionCloudDishWasher.animations.add('action', [0, 1, 2, 3], 5, true);
		actionCloudDishWasher.play('action');

		game.add.tween(sprite).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
		var tween = game.add.tween(actionCloud).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(function () {
			actionCloud.destroy();
			sprite.destroy();
		}, sprite);

		game.add.tween(dependentObject).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true);
		game.add.tween(actionCloudDishWasher).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true);
	},
	transferAllCrates: function transferAllCrates(game, state /*, sprite*/) {
		var src = state.interactionZones.find(function (obj) {
			return obj.name == "BeerCrateDropZone1";
		});
		var dest = state.interactionZones.find(function (obj) {
			return obj.name == "BeerCrateDropZone2";
		});

		while (src.hasCrates()) {
			var crate = src.findCrate();
			crate.destroy();
			dest.makeCrate();
		}
	}
};
exports.default = SpecialActions;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, [{
		key: "init",
		value: function init() {
			this.game.Text = this.game.plugins.add(_Text2.default);
			this.textData = this.game.cache.getJSON(Constants.GAME_TEXT);
		}
	}, {
		key: "create",
		value: function create() {
			this.game.sound.stopAll();
			this.menuMusic = this.game.add.audio(Constants.MENU_MUSIC, Constants.MUSIC_VOLUME, Constants.LOOP_MUSIC);
			this.menuMusic.play();
			this.introSound = this.game.add.audio('typing', 1);

			var background = this.game.add.sprite(0, 0, Constants.MENU_BACKGROUND);
			background.width = this.game.world.width;
			background.height = this.game.world.height;
			background.alpha = 0.8;
			background.inputEnabled = true;

			var menuPositionY = this.game.world.height / 3;
			var menuPositionX = this.game.world.width / 3;

			this.game.add.text(menuPositionX, menuPositionY, 'MENU', Constants.MENU_TITLE_STYLE);

			var entryPosition = 60;

			if (localStorage.flags) {
				var continueGame = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'Continue Game', Constants.GENERAL_STYLE);
				continueGame.inputEnabled = true;
				continueGame.events.onInputDown.add(function () {
					this.state.start(Constants.GAME_STATE);
				}, this);

				entryPosition += 60;
			}

			var newGame = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'New Game', Constants.GENERAL_STYLE);
			newGame.inputEnabled = true;
			entryPosition += 60;

			newGame.events.onInputDown.add(function () {
				if (localStorage.getItem('flags') !== null) {

					var popup = this.game.add.sprite(this.game.world.width / 3, this.game.world.height / 3, Constants.POPUP_BACKGROUND);
					popup.width = 300;
					popup.height = 250;

					var popupText = 'Attention! Starting a new game will erase your previously saved progress.\nDo you want to start a new game?';

					var popupTextObject = this.game.add.text(20, 20, popupText, Constants.POPUP_MESSAGE_STYLE);
					popupTextObject.wordWrap = true;
					popupTextObject.wordWrapWidth = 280;

					popup.addChild(popupTextObject);

					var cancelButton = new Phaser.Graphics(this.game);
					cancelButton.lineStyle(3, 0x000000, 1.0);
					cancelButton.beginFill(0xf5f5f5);
					cancelButton.drawRoundedRect(10, popup.height - 75, 100, 50);
					cancelButton.endFill();
					cancelButton.inputEnabled = true;
					cancelButton.input.priorityID = 1;
					cancelButton.input.useHandCursor = true;
					cancelButton.events.onInputDown.add(function () {
						//close the pop up
						popup.destroy();
					}, this);

					var cancelText = this.game.add.text(20, popup.height - 75 + 10, 'Cancel', Constants.GENERAL_STYLE);
					cancelButton.addChild(cancelText);
					popup.addChild(cancelButton);

					var acceptButton = new Phaser.Graphics(this.game);
					acceptButton.lineStyle(3, 0x000000, 1.0);
					acceptButton.beginFill(0xfbfbfb);
					acceptButton.drawRoundedRect(popup.width - 125, popup.height - 75, 100, 50);
					acceptButton.endFill();
					acceptButton.inputEnabled = true;
					acceptButton.input.priorityID = 1;
					acceptButton.input.useHandCursor = true;
					acceptButton.events.onInputDown.add(function () {
						//remove the local storage and go to the game
						localStorage.clear();
						this.state.start(Constants.TEXT_STATE, true, false, "intro_text", Constants.GAME_STATE);
						this.playIntroTyping();
					}, this);

					var acceptText = this.game.add.text(popup.width - 125 + 10, popup.height - 65, 'Accept', Constants.GENERAL_STYLE);
					acceptButton.addChild(acceptText);
					popup.addChild(acceptButton);
				} else {
					this.state.start(Constants.TEXT_STATE, true, false, "intro_text", Constants.GAME_STATE);
					this.playIntroTyping();
				}
			}, this);

			var credits = this.game.add.text(menuPositionX, menuPositionY + entryPosition, 'Credits', Constants.GENERAL_STYLE);
			credits.inputEnabled = true;

			credits.events.onInputDown.add(function () {
				this.state.start(Constants.TEXT_STATE, true, false, "credits", Constants.HOME_STATE);
			}, this);
		}
	}, {
		key: "playIntroTyping",
		value: function playIntroTyping() {
			this.introSound.play();
			this.menuMusic.volume = Constants.MUSIC_VOLUME_LOW;
		}
	}]);

	return _class;
}();

exports.default = _class;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, [{
		key: 'preload',
		value: function preload() {
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
				this.load.image('kariomart_sprite', 'assets/images/kariomart.png');
				this.load.image(Constants.MENU_BACKGROUND, 'assets/images/SplashScreen.png');
				this.load.image(Constants.POPUP_BACKGROUND, 'assets/images/popup_background.png');

				this.load.image(Constants.SCENE, 'assets/images/floor-plan.png');

				//this.game.load.bitmapFont('desyrel', 'assets/fonts/nokia16black.png', 'assets/fonts/nokia16black.xml');

				this.load.json(Constants.PLAYER_DATA, 'assets/data/player_data.json');
				this.load.json(Constants.GAME_TEXT, 'assets/data/text.json');

				this.load.image(Constants.TILESET_IMAGE, 'assets/images/tileset1.png');
				this.load.spritesheet("tileset_as_sprites", 'assets/images/tileset1.png', 32, 32, 460);

				this.load.json('floor1-tilemap-json', 'assets/data/floor1-tilemap.json');
				this.load.json('floor2-tilemap-json', 'assets/data/floor2-tilemap2.json');
				this.load.json('tileset.json', 'assets/data/tileset.json');

				this.load.audio('door_open', 'assets/sounds/door_open.mp3');
				this.load.audio('coffee_machine_broken', 'assets/sounds/coffee-broken.mp3');
				this.load.audio('coffee_machine_serve', 'assets/sounds/coffee-pouring.mp3');
				this.load.audio('typing', 'assets/sounds/typing.mp3');
				this.load.audio(Constants.MENU_MUSIC, 'assets/sounds/menu_music.mp3');
				this.load.audio(Constants.GAME_MUSIC, 'assets/sounds/game_music.mp3');

				//TODO: Quick fix
				this.game.add.text(0, 0, '', Constants.MENU_TITLE_STYLE);
			}
		}
	}, {
		key: 'processMaps',
		value: function processMaps() {
			// after loading all data, put the tilemap.json and the tileset.json together,
			var map1 = this.game.cache.getJSON('floor1-tilemap-json');
			var map2 = this.game.cache.getJSON('floor2-tilemap-json');
			var tileset1 = this.game.cache.getJSON('tileset.json');
			map1.tilesets[0] = tileset1;
			map2.tilesets[0] = tileset1;

			// and convert them to Phaser tilemaps.
			this.load.tilemap(Constants.TILEMAP_FLOORS[0], null, map1, Phaser.Tilemap.TILED_JSON);
			this.load.tilemap(Constants.TILEMAP_FLOORS[1], null, map2, Phaser.Tilemap.TILED_JSON);
		}
	}, {
		key: 'create',
		value: function create() {
			this.state.start(Constants.HOME_STATE);
		}
	}]);

	return _class;
}();

exports.default = _class;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) 2017, TOPdesk. Please see the AUTHORS file for details.
// All rights reserved. Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _Text = __webpack_require__(5);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class() {
		_classCallCheck(this, _class);
	}

	_createClass(_class, [{
		key: "init",

		/**
   * @param {String} displayTextKey The lookup key of the text that's going to be displayed next time you switch to this state.
   * The lookup key should match one of the keys found in text.json data.
   * @param {String} nextState Constant that indicates which state should be switched to afterwards.
   */
		value: function init(displayTextKey, nextState) {
			this.game.Text = this.game.plugins.add(_Text2.default);
			this.textData = this.game.cache.getJSON(Constants.GAME_TEXT);
			this.displayText = this.textData[displayTextKey];
			this.nextState = nextState;
		}
	}, {
		key: "create",
		value: function create() {
			this.game.stage.backgroundColor = Constants.BACKGROUND_BOOT_STATE;

			this.game.Text.setup();

			this.game.Text.create(this.displayText, this.game.world.width / 10, this.game.world.height / 10, {}, function () {

				this.game.time.events.add(Phaser.Timer.SECOND * 3, function () {
					this.state.start(this.nextState);
				}, this);
			}.bind(this));
		}
	}]);

	return _class;
}();

exports.default = _class;

/***/ })
/******/ ]);