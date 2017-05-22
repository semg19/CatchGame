var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(parent, name, x, y, width, heigth) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = heigth;
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObject;
}());
var Bomb = (function () {
    function Bomb(parent) {
        this.div = document.createElement("bomb");
        parent.appendChild(this.div);
        this.width = 128;
        this.height = 128;
        this.x = Math.random() * window.innerWidth;
        this.y = 400;
    }
    Bomb.prototype.draw = function () {
        if (this.x <= 0) {
            this.x += 5;
        }
        if (this.x >= 0) {
            this.x -= 5;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Bomb;
}());
var Character = (function () {
    function Character(parent) {
        var _this = this;
        this.div = document.createElement("character");
        parent.appendChild(this.div);
        this.behaviour = new Idle(this);
        this.width = 122;
        this.height = 158;
        this.xspeed = 0;
        this.yspeed = 0;
        this.x = 30;
        this.y = 350;
        this.net = new Net(this.div);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Character.prototype.onKeyDown = function (e) {
        this.behaviour.onKeyDown(e);
    };
    Character.prototype.onKeyUp = function (e) {
        this.behaviour.onKeyUp(e);
    };
    Character.prototype.draw = function () {
        this.behaviour.draw();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.net.draw();
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
    }
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
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Net = (function () {
    function Net(parent) {
        this.div = document.createElement("net");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 0.5;
        this.height = 297;
        this.width = 400;
        this.speed = 0;
    }
    Net.prototype.draw = function () {
        this.y += this.speed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Net;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.hasOverlap = function (char, bomb) {
        return (char.x < bomb.x + bomb.width &&
            char.x + char.width > bomb.x &&
            char.y < bomb.y + bomb.height &&
            char.height + char.y > bomb.y);
    };
    return Utils;
}());
var Dying = (function () {
    function Dying(c) {
        this.char = c;
        this.char.div.className = "dying";
    }
    Dying.prototype.draw = function () {
    };
    Dying.prototype.onKeyDown = function (e) {
    };
    Dying.prototype.onKeyUp = function (e) {
    };
    return Dying;
}());
var Idle = (function () {
    function Idle(c) {
        this.char = c;
    }
    Idle.prototype.draw = function () {
        this.char.xspeed = 0;
        this.char.div.className = "idle";
    };
    Idle.prototype.onKeyDown = function (e) {
        if (e.key == 'ArrowRight' && this.char.behaviour instanceof Idle) {
            this.char.behaviour = new Running(this.char, "right");
        }
        else if (e.key == 'ArrowLeft' && this.char.behaviour instanceof Idle) {
            this.char.behaviour = new Running(this.char, "left");
        }
    };
    Idle.prototype.onKeyUp = function (e) {
    };
    return Idle;
}());
var Running = (function () {
    function Running(c, direction) {
        this.char = c;
        this.char.div.className = "running";
        this.direction = direction;
        if (this.direction == "right") {
            this.char.xspeed = 2;
        }
        else if (this.direction == "left") {
            this.char.xspeed = -2;
        }
    }
    Running.prototype.draw = function () {
        this.char.x += this.char.xspeed;
    };
    Running.prototype.onKeyDown = function (e) {
        if (e.key == 'ArrowRight' && this.char.behaviour instanceof Running) {
            this.char.xspeed = 2;
        }
        if (e.key == 'ArrowLeft' && this.char.behaviour instanceof Running) {
            this.char.xspeed = -2;
        }
    };
    Running.prototype.onKeyUp = function (e) {
        if (e.key == 'ArrowRight' && this.char.behaviour instanceof Running) {
            this.char.xspeed = 0;
            this.char.behaviour = new Idle(this.char);
        }
        if (e.key == 'ArrowLeft' && this.char.behaviour instanceof Running) {
            this.char.xspeed = 0;
            this.char.behaviour = new Idle(this.char);
        }
    };
    return Running;
}());
var GameScreen = (function (_super) {
    __extends(GameScreen, _super);
    function GameScreen() {
        var _this = this;
        _super.call(this, "gamescreen");
        this.char = new Character(this.div);
        this.bomb = new Bomb(this.div);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    GameScreen.prototype.gameLoop = function () {
        var _this = this;
        this.char.draw();
        this.bomb.draw();
        if (Utils.hasOverlap(this.char, this.bomb)) {
            console.log("Game Over");
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return GameScreen;
}(FirstScreen));
//# sourceMappingURL=main.js.map