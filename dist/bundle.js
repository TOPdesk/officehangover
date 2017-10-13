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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var PLAYER_DATA = exports.PLAYER_DATA = 'player_data';
var GAME_TEXT = exports.GAME_TEXT = 'text';
var DIALOGS = exports.DIALOGS = 'dialogs';
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
var GENERAL_STYLE = exports.GENERAL_STYLE = { font: "32px pixelFont", fill: "#5b5b5b" };
var POPUP_MESSAGE_STYLE = exports.POPUP_MESSAGE_STYLE = { font: "26px pixelFont", fill: "#5b5b5b" };
var MENU_TITLE_STYLE = exports.MENU_TITLE_STYLE = { font: "36px pixelFont", fill: '#61447F' };
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

var _class = function (_Phaser$Sprite) {
	_inherits(_class, _Phaser$Sprite);

	function _class(state, x, y, key, type, dialogkey) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, x, y, state.playerData[key].sprite));

		_this.key = key.toLowerCase();
		_this.type = type == null ? "" : type.toLowerCase();
		_this.dialogkey = dialogkey == null ? "" : dialogkey.toLowerCase();
		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(state.playerData[key]);
		_this.playerData = state.playerData;
		_this.anchor.setTo(0, 0);
		_this.isExecutingTask = false;
		_this.isCharacterOnHold = false;

		_this.game.physics.arcade.enable(_this);
		var bodySize = _this.data.body_size;
		_this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		_this.body.immovable = true;

		return _this;
	}

	/** called whenever a player collides with this game object */


	_createClass(_class, [{
		key: "handleCollision",
		value: function handleCollision() {
			if (this.state.player.unhandledAction) {
				if (this.type == "actionable") {
					this.state.player.unhandledAction = false;
					this.state.callAction(this.dialogkey, this);
				}
			} else if (this.key == "exit") {
				if (this.state.currentLevel == 0) {
					this.state.currentLevel = 1;
					localStorage.setItem("level", this.state.currentLevel);
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
}(Phaser.Sprite);

exports.default = _class;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$Sprite) {
	_inherits(_class, _Phaser$Sprite);

	function _class(state, x, y, obj, data, character, isBodyFrame, dialogkey) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, x, y, obj.name.toLowerCase(), state.playerData[character].initial_frame));

		isBodyFrame = (typeof isBodyFrame === "undefined" ? "undefined" : _typeof(isBodyFrame)) == undefined ? false : isBodyFrame;

		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(data);
		_this.playerData = state.playerData;
		_this.anchor.setTo(0.5);
		_this.scale.setTo(1.5);
		_this.x = x;
		_this.y = y;
		_this.spriteName = obj.name.toLowerCase();
		_this.initialFrame = state.playerData[character].initial_frame;
		_this.dialogkey = obj.properties && obj.properties.dialogkey && obj.properties.dialogkey.toLowerCase();

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

		_this.animations.add('walk_right', _this.playerData.animation_walk_right, _this.playerData.frames, true);
		_this.animations.add('walk_up', _this.playerData.animation_walk_up, _this.playerData.frames, true);
		_this.animations.add('walk_left', _this.playerData.animation_walk_left, _this.playerData.frames, true);
		_this.animations.add('walk_down', _this.playerData.animation_walk_down, _this.playerData.frames, true);
		_this.animations.add('wake_up', _this.playerData.animation_wake_up, _this.playerData.frames, false);

		_this.game.physics.arcade.enable(_this);

		if (isBodyFrame) {
			var _data$trigger_box = data.trigger_box,
			    width = _data$trigger_box.width,
			    height = _data$trigger_box.height,
			    left = _data$trigger_box.left,
			    top = _data$trigger_box.top;

			_this.body.setSize(width, height, left, top);
			_this.alpha = 0;
		} else {
			var _data$body_size = data.body_size,
			    _width = _data$body_size.width,
			    _height = _data$body_size.height,
			    _left = _data$body_size.left,
			    _top = _data$body_size.top;

			_this.body.setSize(_width, _height, _left, _top);
		}

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
		key: "handleCollision",
		value: function handleCollision() {
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
			this.frame = this.playerData.initial_frame;
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _BootState = __webpack_require__(5);

var _BootState2 = _interopRequireDefault(_BootState);

var _GameOverState = __webpack_require__(6);

var _GameOverState2 = _interopRequireDefault(_GameOverState);

var _GameState = __webpack_require__(7);

var _GameState2 = _interopRequireDefault(_GameState);

var _HomeState = __webpack_require__(14);

var _HomeState2 = _interopRequireDefault(_HomeState);

var _PreloadState = __webpack_require__(15);

var _PreloadState2 = _interopRequireDefault(_PreloadState);

var _TextState = __webpack_require__(16);

var _TextState2 = _interopRequireDefault(_TextState);

var _scaler = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dim = (0, _scaler.getGameLandscapeDimensions)(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);

var game = new Phaser.Game(dim.w, dim.h, Phaser.CANVAS);

game.state.add(Constants.GAME_STATE, _GameState2.default);
game.state.add(Constants.HOME_STATE, _HomeState2.default);
game.state.add(Constants.PRELOAD_STATE, _PreloadState2.default);
game.state.add(Constants.BOOT_STATE, _BootState2.default);
game.state.add(Constants.GAME_OVER_STATE, _GameOverState2.default);
game.state.add(Constants.TEXT_STATE, _TextState2.default);
game.state.start(Constants.BOOT_STATE);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	init: function init(param) {
		this.mParam = param;
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _Player = __webpack_require__(8);

var _Player2 = _interopRequireDefault(_Player);

var _Character = __webpack_require__(2);

var _Character2 = _interopRequireDefault(_Character);

var _Door = __webpack_require__(10);

var _Door2 = _interopRequireDefault(_Door);

var _BeerCrateDropZone = __webpack_require__(11);

var _BeerCrateDropZone2 = _interopRequireDefault(_BeerCrateDropZone);

var _GameObject = __webpack_require__(1);

var _GameObject2 = _interopRequireDefault(_GameObject);

var _Dialog = __webpack_require__(12);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DependentObjects = __webpack_require__(13);

var _DependentObjects2 = _interopRequireDefault(_DependentObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
	init: function init() {

		this.flags = {};

		//ckeck the localstorage
		if (localStorage.getItem('flags') !== null) {
			this.flags = JSON.parse(localStorage.getItem('flags'));
		}

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

		this.playerData = this.game.cache.getJSON(Constants.PLAYER_DATA);

		if (localStorage.getItem('flags') === null) {
			this.currentLevel = 0;
			localStorage.level = this.currentLevel;
		} else {
			this.currentLevel = localStorage.level;
		}

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

		this.game.stage.backgroundColor = this.playerData.background_color;

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

		if (typeof this.flags['l1_wake_up'] === 'undefined') {
			this.flags['l1_wake_up'] = 0;
		}

		if (this.currentLevel == 0 && !this.flags['l1_wake_up']) {
			this.player.wakeUp();
		}
	},
	update: function update() {
		// if the player just pressed space, then set an 'unhandled action' flag
		this.player.unhandledAction = this.justPressedSpace === 1;

		this.game.physics.arcade.overlap(this.gameobjects, this.playerCollisionFrame, function (gameobj) {
			gameobj.handleCollision();
		}, null, this);
		this.game.physics.arcade.overlap(this.dependentgameobjects, this.playerCollisionFrame, function (gameobj) {
			gameobj.handleCollision(this.dependentgameobjects);
		}, null, this);
		this.game.physics.arcade.overlap(this.gameobjectZones, this.playerCollisionFrame, function (gameobj) {
			gameobj.handleCollision();
		}, null, this);
		this.game.physics.arcade.collide(this.gameobjects, this.player);
		this.game.physics.arcade.collide(this.dependentgameobjects, this.player);
		this.game.physics.arcade.collide(this.movingobjects, this.player, function (gameobj) {
			gameobj.handleCollision();
		}, null, this);
		this.game.physics.arcade.collide(this.characters, this.player);
		this.game.physics.arcade.overlap(this.charactersCollisionFrame, this.playerCollisionFrame, function (character) {
			character.parent.handleCollision();
		}, null, this);
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

		/*this.game.physics.arcade.overlap(this.player, this.items, this.collect, null, this);
  this.game.physics.arcade.collide(this.player, this.enemies, this.attack, null, this);*/
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

		this.characters = [];
		this.charactersCollisionFrame = [];
		this.gameobjects = [];
		this.movingobjects = [];
		this.gameobjectZones = [];
		this.dependentgameobjects = [];

		for (var key in this.map.objects.Objects) {
			var obj = this.map.objects.Objects[key];

			// snap to grid:
			obj.x = Math.round(obj.x / 32) * 32;
			obj.y = Math.round(obj.y / 32) * 32;

			if (obj.type == "Start") {
				this.player = new _Player2.default(this, obj.x, obj.y, obj, this.playerData.player, Constants.PLAYER_DATA_INIT, false);

				this.playerCollisionFrame = new _Player2.default(this, 0, 0, obj, this.playerData.player, Constants.PLAYER_DATA_INIT, true);
				this.player.addChild(this.playerCollisionFrame);
				this.player.body.collideWorldBounds = true;
				this.game.camera.follow(this.player);
				this.visibleCharacters.add(this.player);
			} else if (obj.type == "Character") {
				var character = new _Character2.default(this, obj.x, obj.y, obj, this.playerData.player, Constants.PLAYER_DATA_INIT, false);
				this.visibleCharacters.add(character);
				var characterFrame = new _Character2.default(this, 0, 0, obj, this.playerData.player, Constants.PLAYER_DATA_INIT, true);
				character.addChild(characterFrame);
				character.body.collideWorldBounds = true;
				if (character.isStopped) {
					character.body.immovable = true;
					character.stopMoving();
				} else {
					character.setRandomDirection();
				}

				this.characters.push(character);
				this.charactersCollisionFrame.push(characterFrame);
			} else if (obj.type == "Door") {
				var sprite = new _Door2.default(this, obj.x, obj.y, 'door', obj.properties && obj.properties["locked"]);
				this.visibleCharacters.add(sprite);
				this.movingobjects.push(sprite);
			} else if (obj.type == "BeerCrateDropZone") {
				var _sprite = new _BeerCrateDropZone2.default(this, obj.x, obj.y, obj.type.toLowerCase(), obj.name);
				this.add.existing(_sprite);
				this.gameobjectZones.push(_sprite);
			} else if (obj.type == "DishWasher" || obj.type == "DirtyDishes") {
				var _sprite2 = new _DependentObjects2.default(this, obj.x, obj.y, obj.type.toLowerCase(), obj.properties);
				this.visibleCharacters.add(_sprite2);
				this.dependentgameobjects.push(_sprite2);
			} else if (obj.type == "Actionable") {
				if (typeof obj.properties.statuskey === 'undefined' || typeof obj.properties.statuskey !== 'undefined' && !this.flags[obj.properties.statuskey]) {
					var _sprite3 = new _GameObject2.default(this, obj.x, obj.y, obj.properties.subtype.toLowerCase(), obj.type.toLowerCase(), obj.properties.dialogkey.toLowerCase());
					this.visibleCharacters.add(_sprite3);
					this.dependentgameobjects.push(_sprite3);
				}
			} else {
				var _sprite4 = new _GameObject2.default(this, obj.x, obj.y, obj.type.toLowerCase());
				this.visibleCharacters.add(_sprite4);
				this.gameobjects.push(_sprite4);
			}
			/*
   else {
   	console.error ("Map contains object of undefined type " + obj.type);
   }*/
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
			this.player.body.velocity.x = -this.playerData.player_speed;
			this.player.play('walk_left');
		} else if (this.cursors.right.isDown) {
			this.player.body.velocity.x = this.playerData.player_speed;
			this.player.play('walk_right');
		}

		if (this.cursors.up.isDown) {
			this.player.body.velocity.y = -this.playerData.player_speed;
			if ((this.cursors.up.isDown || this.player.btnsPressed.up) && !this.cursors.left.isDown && !this.cursors.right.isDown) {
				this.player.play('walk_up');
			}
		} else if (this.cursors.down.isDown) {
			this.player.body.velocity.y = this.playerData.player_speed;
			if (this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown) {
				this.player.play('walk_down');
			}
		}

		if (this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0) {
			this.player.animations.stop();
			this.player.frame = this.playerData.player.initial_frame;
		}
	},

	// uncomment to help debug character bounding boxes
	/*
 render: function () {
 	this.game.debug.bodyInfo(this.player, 32, 32);
 	this.game.debug.body(this.player);
 	this.game.debug.body(this.playerCollisionFrame);
 
 	for (let i=0; i < this.charactersCollisionFrame.length; i++){
 		this.game.debug.body(this.charactersCollisionFrame[i], '#00FF0080');
 	}
 	for (let i = 0; i < this.characters.length; ++i) {
 		this.game.debug.body(this.characters[i], '#0000FF80');
 	}
 	for (let i = 0; i < this.movingobjects.length; ++i) {
 		this.game.debug.body(this.movingobjects[i], '#00FFFF80');
 	}
 	for (let i = 0; i < this.gameobjectZones.length; ++i) {
 		this.game.debug.body(this.gameobjectZones[i], '#FF00FF80');
 	}
 	for (let i = 0; i < this.gameobjects.length; ++i) {
 		this.game.debug.body(this.gameobjects[i], '#FFFF00A0');
 	}
 	for (let i = 0; i < this.dependentgameobjects.length; ++i) {
 		this.game.debug.body(this.dependentgameobjects[i], '#FFFF00A0');
 	}
 },
 */
	callAction: function callAction(objectname, character) {

		this.dialogs.open(objectname, character);
	}

};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Character2 = __webpack_require__(2);

var _Character3 = _interopRequireDefault(_Character2);

var _Follower = __webpack_require__(9);

var _Follower2 = _interopRequireDefault(_Follower);

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Character) {
	_inherits(_class, _Character);

	function _class(state, x, y, obj, data, character, isBodyFrame) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state, x, y, obj, data, character, isBodyFrame));

		_this.pickupSprite = null;
		_this.pickupTimer = 0; // delay before the next pick-up / drop-off action can take place.
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A follower is an object, like a beer crate, tgat follows the player around
 * after it is picked up.
 */
var _class = function (_Phaser$Sprite) {
	_inherits(_class, _Phaser$Sprite);

	function _class(state, key) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, state.player.x, state.player.y, state.playerData[key].sprite));

		_this.followee = state.player;
		// queue of coordinates of the followee
		_this.followeeq = [[state.player.x, state.player.y]];
		_this.bobbingPhase = 0;

		_this.key = key;
		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(state.playerData[key]);
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
}(Phaser.Sprite);

exports.default = _class;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** a door is a specialized game object that has two states: open and closed. */
var _class = function (_Phaser$Sprite) {
	_inherits(_class, _Phaser$Sprite);

	function _class(state, x, y, key, isLocked) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, x, y, state.playerData[key].sprite));

		_this.key = key;
		_this.isLocked = isLocked;
		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(state.playerData[key]);
		_this.playerData = state.playerData;

		_this.animations.add('closed', [0]);
		_this.animations.add('open', [1]);
		_this.animations.add('locked', [2]);

		if (_this.isLocked) {
			if (_this.state.flags["l1_storageroomdooropen"] === 1) {
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
		key: 'openDoor',
		value: function openDoor() {
			this.play('open');
			this.state.sfx.door_open.play();
			var bodySize = this.data.body_size;
			this.body.setSize(0, 0, bodySize.left, bodySize.top);
		}

		/** called whenever a player collides with this door */

	}, {
		key: 'handleCollision',
		value: function handleCollision() {

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
	}]);

	return _class;
}(Phaser.Sprite);

exports.default = _class;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObject = __webpack_require__(1);

var _GameObject2 = _interopRequireDefault(_GameObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$Sprite) {
	_inherits(_class, _Phaser$Sprite);

	function _class(state, x, y, key, name) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state.game, x, y, state.playerData[key].sprite));

		_this.key = key;
		_this.state = state;
		_this.game = state.game;
		_this.data = Object.create(state.playerData[key]);
		_this.playerData = state.playerData;
		_this.name = name;

		_this.crates = [];

		if (name === "BeerCrateDropZone1") {
			for (var i = 0; i < 6; ++i) {
				_this.makeCrate();
			}
		}

		_this.game.physics.arcade.enable(_this);
		var bodySize = _this.data.body_size;
		_this.body.setSize(bodySize.width, bodySize.height, bodySize.left, bodySize.top);
		_this.body.immovable = true;
		return _this;
	}

	_createClass(_class, [{
		key: "makeCrate",
		value: function makeCrate() {
			for (var pos = 0; pos < 20; ++pos) {
				if (!this.crates[pos] || !this.crates[pos].alive) {
					var nx = this.x + 64 + Math.floor(pos / 3) * 32;
					var ny = this.bottom + 100 - pos % 3 * 24;
					var sprite = new _GameObject2.default(this.state, nx, ny, 'beercrate');
					sprite.beerCratePosition = pos;
					sprite.beerCrateDropZone = this;
					this.crates[pos] = sprite;
					this.game.add.existing(sprite);
					this.state.gameobjects.push(sprite);

					break;
				}
			}
		}
	}, {
		key: "findCrate",
		value: function findCrate() {
			for (var pos = 0; pos < 20; ++pos) {
				if (this.crates[pos] && this.crates[pos].alive) {
					return this.crates[pos];
				}
			}
			return undefined;
		}
	}, {
		key: "handleCollision",
		value: function handleCollision() {
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
}(Phaser.Sprite);

exports.default = _class;

/***/ }),
/* 12 */
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

var _class = function () {
	function _class(game, state) {
		_classCallCheck(this, _class);

		this.state = state;
		this.game = game;
		this.dialogData = this.game.cache.getJSON(Constants.DIALOGS);
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
			return dialogkey in this.dialogData;
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
			if (!(objectname in this.dialogData)) {
				console.error("No dialog found using key: " + objectname);
			} else {
				var objectDialogs = this.dialogData[objectname];
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
							this.character.dirtyDishesAction();
						} else if (action == "pick_object") {
							this.character.pickObject();
						} else if (action === "move_around") {
							this.character.isStopped = false;
							this.character.setRandomDirection();
						} else if (action === "pour_coffee") {
							this.state.sfx.coffee_machine_serve.play();
						} else if (action === "machine_broken") {
							this.state.sfx.coffee_machine_broken.play();
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

						console.log("Flag " + flag + " is set");
						this.state.flags[flag] = 1;
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

				localStorage.setItem("flags", JSON.stringify(this.state.flags));
			}
			if (replyOption.clearflag) {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = replyOption.clearflag[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var _flag = _step4.value;

						console.log("Flag " + _flag + " is cleared");
						this.state.flags[_flag] = 0;
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

				localStorage.setItem("flags", JSON.stringify(this.state.flags));
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObject2 = __webpack_require__(1);

var _GameObject3 = _interopRequireDefault(_GameObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_GameObject) {
	_inherits(_class, _GameObject);

	function _class(state, x, y, key, properties) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, state, x, y, key, null));

		_this.dependentObject = null;
		_this.properties = properties;

		if (!_this.state.flags.hasOwnProperty(_this.properties.statuskey)) {
			_this.state.flags[_this.properties.statuskey] = 0;
		}

		_this.alpha = _this.properties.subordinate ? _this.state.flags[_this.properties.statuskey] : !_this.state.flags[_this.properties.statuskey];

		//TODO: No build the object if it is not necessary.
		if (!_this.properties.subordinate && _this.state.flags[_this.properties.statuskey]) {
			_this.destroy();
		}
		return _this;
	}

	/** called whenever a player collides with this game object */


	_createClass(_class, [{
		key: "handleCollision",
		value: function handleCollision(gameObjects) {
			if (this.state.player.unhandledAction) {
				if (this.key == "dirtydishes") {
					this.dependentObject = gameObjects.find(function (obj) {
						return obj.key == 'dishwasher';
					});
					this.state.player.unhandledAction = false;
					this.state.dialogs.open(this.key, this);
				}
			}
		}
	}, {
		key: "dirtyDishesAction",
		value: function dirtyDishesAction() {

			var actionCloud = this.game.add.sprite(this.x, this.y, 'ActionCloud', 0);
			actionCloud.animations.add('action', [0, 1, 2, 3], 5, true);
			actionCloud.play('action');
			actionCloud.alpha = 0;

			var actionCloudDishWasher = this.game.add.sprite(this.dependentObject.x, this.dependentObject.y, 'ActionCloud', 0);
			actionCloudDishWasher.animations.add('action', [0, 1, 2, 3], 5, true);
			actionCloudDishWasher.play('action');

			this.game.add.tween(this).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
			var tween = this.game.add.tween(actionCloud).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
			tween.onComplete.add(function () {
				actionCloud.destroy();
				this.destroy();
			}, this);

			this.game.add.tween(this.dependentObject).to({ alpha: 1 }, 4000, Phaser.Easing.Linear.None, true);
			this.game.add.tween(actionCloudDishWasher).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true);
		}
	}]);

	return _class;
}(_GameObject3.default);

exports.default = _class;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _Text = __webpack_require__(3);

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

			if (localStorage.level) {
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
/* 15 */
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
												this.load.image(Constants.MENU_BACKGROUND, 'assets/images/menu_brackground.png');
												this.load.image(Constants.POPUP_BACKGROUND, 'assets/images/popup_background.png');

												this.load.image(Constants.SCENE, 'assets/images/floor-plan.png');

												//this.game.load.bitmapFont('desyrel', 'assets/fonts/nokia16black.png', 'assets/fonts/nokia16black.xml');

												this.load.json(Constants.PLAYER_DATA, 'assets/data/player_data.json');
												this.load.json(Constants.GAME_TEXT, 'assets/data/text.json');
												this.load.json(Constants.DIALOGS, 'assets/data/dialogs.json');

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var Constants = _interopRequireWildcard(_constants);

var _Text = __webpack_require__(3);

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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var getGameLandscapeDimensions = exports.getGameLandscapeDimensions = function getGameLandscapeDimensions(max_w, max_h) {
	//get both w and h of the screen (they might exchange)
	var w = window.innerWidth * window.devicePixelRatio;
	var h = window.innerHeight * window.devicePixelRatio;

	//get the actual w and h
	var landW = Math.max(w, h);
	var landH = Math.min(w, h);

	//do we need to scale to fit in width
	if (landW > max_w) {
		var ratioW = max_w / landW;
		landW *= ratioW;
		landH *= ratioW;
	}

	//do we need to scale to fit in height
	if (landH > max_h) {
		var ratioH = max_w / landW;
		landW *= ratioH;
		landH *= ratioH;
	}

	return {
		w: landW,
		h: landH
	};
};

/***/ })
/******/ ]);