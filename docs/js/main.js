var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Character = (function () {
    function Character(left, right) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.div = document.createElement("character");
        document.body.appendChild(this.div);
        this.posX = 20;
        this.posY = 320;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Character.prototype.onKeyDown = function (e) {
        this.behaviour.onKeyDown(e);
    };
    Character.prototype.onKeyUp = function (e) {
        this.behaviour.onKeyUp(e);
    };
    Character.prototype.move = function () {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(-1)";
    };
    return Character;
}());
var FirstScreen = (function () {
    function FirstScreen(name) {
        this.div = document.createElement(name);
        this.container = document.getElementById('container');
        this.container.appendChild(this.div);
    }
    return FirstScreen;
}());
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen() {
        _super.call(this, 'start');
        var btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "Start Game";
        btn.addEventListener("click", this.onStartClick.bind(this));
    }
    StartScreen.prototype.onStartClick = function () {
        this.div.remove();
        Game.getInstance().showGameScreen();
    };
    return StartScreen;
}(FirstScreen));
var Game = (function () {
    function Game() {
        this.score = 0;
        this.char = new Character(65, 68);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.char.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
            Game.instance.showStartScreen();
        }
        return Game.instance;
    };
    Game.prototype.showStartScreen = function () {
        this.screen = new StartScreen();
    };
    Game.prototype.showGameScreen = function () {
        this.screen = new GameScreen();
    };
    Game.prototype.gameOver = function () {
        this.screen = new GameOver();
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Running = (function () {
    function Running() {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
    }
    Running.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
        }
    };
    Running.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Running.prototype.move = function () {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
    };
    return Running;
}());
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        _super.call(this, 'gameover');
        var btn = document.createElement("gamebutton");
        this.div.appendChild(btn);
        btn.innerHTML = "Probeer opnieuw!";
        btn.addEventListener("click", this.onClick.bind(this));
    }
    GameOver.prototype.onClick = function () {
        console.log("retry");
        this.div.remove();
        Game.getInstance().showStartScreen();
    };
    return GameOver;
}(FirstScreen));
var GameScreen = (function (_super) {
    __extends(GameScreen, _super);
    function GameScreen() {
        var _this = this;
        _super.call(this, "gamescreen");
        this.character = new Character(62, 64);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    GameScreen.prototype.gameLoop = function () {
        var _this = this;
        this.character.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return GameScreen;
}(FirstScreen));
//# sourceMappingURL=main.js.map