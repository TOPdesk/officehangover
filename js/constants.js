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
    Constants.PLAYER_START_DATA_INIT = 'player_wake_up';
    Constants.PLAYER_DATA_INIT = 'player';
    Constants.CHARACTER1_DATA_INIT = 'player';
    Constants.CHARACTER2_DATA_INIT = 'player';
    Constants.PLAYER_SPRITE = 'player';
    Constants.CHARACTER1_SPRITE = 'character1';
    Constants.CHARACTER2_SPRITE = 'character2';
    Constants.SCENE = 'background';
    Constants.STAMINA_BAR = 'bar';
    Constants.ANIMATION_WAKE_UP = 'wake_up'
    return Constants;
})();
