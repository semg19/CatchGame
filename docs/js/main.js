var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(name) {
        this.div = document.createElement(name);
        this.container = document.getElementById('container');
        this.container.appendChild(this.div);
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObject;
}());
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple(i) {
        _super.call(this, "apple");
        this.width = 128;
        this.height = 128;
        this.x = i * 1000 + (Math.random() * 750);
        this.y = 20;
    }
    Apple.prototype.draw = function () {
        if (this.y <= 0) {
            this.y -= 5;
        }
        if (this.y >= 0) {
            this.y += 5;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Apple;
}(GameObject));
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb(i) {
        _super.call(this, "bomb");
        this.width = 128;
        this.height = 128;
        this.x = i * 1000 + (Math.random() * 750);
        ;
        this.y = 10;
    }
    Bomb.prototype.draw = function () {
        if (this.y <= 0) {
            this.y -= 5;
        }
        if (this.y >= 0) {
            this.y += 5;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Bomb;
}(GameObject));
var Character = (function () {
    function Character(parent) {
        var _this = this;
        this.keyStatus = {};
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
var Enum;
(function (Enum) {
    (function (Keys) {
        Keys[Keys["LEFT"] = 37] = "LEFT";
        Keys[Keys["RIGHT"] = 39] = "RIGHT";
    })(Enum.Keys || (Enum.Keys = {}));
    var Keys = Enum.Keys;
})(Enum || (Enum = {}));
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
        btn.onmouseenter = function () {
            TweenMax.to(btn, 0.2, { boxShadow: "10px 10px" });
        };
        btn.onmouseleave = function () {
            TweenMax.to(btn, 0.2, { boxShadow: "0px 0px" });
        };
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
    Game.prototype.gameOver = function () {
        this.screen = new GameOverScreen();
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
        this.x = 110;
        this.y = 60;
        this.height = 77;
        this.width = 104;
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
    Utils.hasOverlap = function (c, o) {
        return (c.x < o.x + o.width &&
            c.x + c.width > o.x &&
            c.y < o.y + o.height &&
            c.height + c.y > o.y);
    };
    Utils.removeFromGame = function (o, arr) {
        o.div.remove();
        var i = arr.indexOf(o);
        if (i != -1) {
            arr.splice(i, 1);
        }
    };
    Utils.checkForScreenBorders = function (char) {
        if (char.x + (char.width * 1.40) > window.innerWidth) {
            char.leftBorderHit = true;
        }
        else if (char.x + (char.width * 0.15) < 0) {
            char.leftBorderHit = true;
        }
        else {
            char.leftBorderHit = false;
            char.rightBorderHit = false;
        }
    };
    return Utils;
}());
var Dying = (function () {
    function Dying(c) {
        this.char = c;
        this.char.div.className = "dying";
    }
    Dying.prototype.draw = function () {
        this.char.behaviour = new Idle(this.char);
        Game.getInstance().gameOver();
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
        if (e.keyCode == Enum.Keys.RIGHT && this.char.behaviour instanceof Idle) {
            this.char.behaviour = new Running(this.char, "right");
        }
        else if (e.keyCode == Enum.Keys.LEFT && this.char.behaviour instanceof Idle) {
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
            this.char.xspeed = 4;
        }
        else if (this.direction == "left") {
            this.char.xspeed = -4;
        }
    }
    Running.prototype.draw = function () {
        this.char.x += this.char.xspeed;
    };
    Running.prototype.onKeyDown = function (e) {
        if (e.keyCode == Enum.Keys.RIGHT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 2;
        }
        if (e.keyCode == Enum.Keys.LEFT && this.char.behaviour instanceof Running) {
            this.char.xspeed = -2;
        }
    };
    Running.prototype.onKeyUp = function (e) {
        if (e.keyCode == Enum.Keys.RIGHT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 0;
            this.char.behaviour = new Idle(this.char);
        }
        if (e.keyCode == Enum.Keys.LEFT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 0;
            this.char.behaviour = new Idle(this.char);
        }
    };
    return Running;
}());
var GameOverScreen = (function (_super) {
    __extends(GameOverScreen, _super);
    function GameOverScreen() {
        _super.call(this, 'gameover');
    }
    return GameOverScreen;
}(FirstScreen));
var GameScreen = (function (_super) {
    __extends(GameScreen, _super);
    function GameScreen() {
        var _this = this;
        _super.call(this, "gamescreen");
        this.score = 0;
        this.death = false;
        this.gameObjects = new Array();
        this.char = new Character(this.div);
        this.bombs = new Array();
        this.apples = new Array();
        requestAnimationFrame(function () { return _this.gameLoop(); });
        setInterval(function () {
            for (var i = 0; i < (Math.random() * 2) + 1; i++) {
                _this.apples.push(new Apple(i));
            }
            for (var i = 0; i < (Math.random() * 2) + 1; i++) {
                _this.bombs.push(new Bomb(i));
            }
        }, 1000);
    }
    GameScreen.prototype.gameLoop = function () {
        var _this = this;
        this.char.draw();
        for (var _i = 0, _a = this.bombs; _i < _a.length; _i++) {
            var bomb = _a[_i];
            if (Utils.hasOverlap(this.char, bomb)) {
                Utils.removeFromGame(bomb, this.bombs);
                if (this.death == false) {
                    this.char.behaviour = new Dying(this.char);
                    this.death = true;
                    this.div.remove();
                }
            }
            bomb.draw();
        }
        for (var _b = 0, _c = this.apples; _b < _c.length; _b++) {
            var apple = _c[_b];
            if (Utils.hasOverlap(this.char, apple)) {
                console.log("+ 1!");
                Utils.removeFromGame(apple, this.apples);
                this.score++;
                var scoreDiv = document.getElementById("score");
                scoreDiv.innerHTML = "Score: " + this.score;
            }
            apple.draw();
        }
        Utils.checkForScreenBorders(this.char);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return GameScreen;
}(FirstScreen));
//# sourceMappingURL=main.js.map