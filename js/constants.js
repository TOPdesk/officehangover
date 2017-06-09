var Constants = (function (){

    function Constants(){

    }
    Constants.GAME_WIDTH = 1024;
    Constants.GAME_HEIGHT = 720;

    Constants.BACKGROUND_BOOT_STATE = "#fff";

    Constants.GAME_STATE = 'GameState';
    Constants.HOME_STATE = 'HomeState';
    Constants.PRELOAD_STATE = 'PreloadState';
    Constants.START_STATE = 'StartGame';
    Constants.BOOT_STATE = 'BootState';
    Constants.GAME_OVER_STATE = 'GameOverState';

    Constants.PLAYER_DATA = 'player_data';
    Constants.GAME_TEXT = 'text';
    Constants.DIALOGS = 'dialogs';
    Constants.PLAYER_START_DATA_INIT = 'player_wake_up';
    Constants.PLAYER_DATA_INIT = 'player';
    Constants.PLAYER_SPRITE = 'player start';
    Constants.COFFEE_MACHINE_SPRITE = 'coffeemachine';
    Constants.PC_SPRITE = 'pc';
    Constants.CHARACTER1_SPRITE = 'character1';
    Constants.CHARACTER2_SPRITE = 'character2';
    Constants.CHARACTER3_SPRITE = 'character3';
    Constants.DISH_WASHER_SPRITE = 'dish_washer_sprite';
    Constants.DIRTY_DISHES_SPRITE = 'dirty_dishes_sprite';
    
    Constants.SCENE = 'background';
    Constants.STAMINA_BAR = 'bar';
    Constants.ANIMATION_WAKE_UP = 'wake_up';
    Constants.TILESET_IMAGE = 'tileset1';
    Constants.TILESET_DATA = 'tileset1.json';

    Constants.TILEMAP_FLOORS = [ 'tilemap_floor1', 'tilemap_floor2' ];

    return Constants;
})();
