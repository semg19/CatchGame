var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Character = (function () {
    function Character(name) {
        this.div = document.createElement(name);
        this.container = document.getElementById('container');
        this.container.appendChild(this.div);
        this.width = 122;
        this.height = 158;
        this.xspeed = 0;
        this.yspeed = 0;
    }
    Character.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Character;
}());
var Alien = (function (_super) {
    __extends(Alien, _super);
    function Alien() {
        var _this = this;
        _super.call(this, "alien");
        this.behaviour = new Idle(this);
        this.net = new Net(this.div);
        this.x = 30;
        this.y = 350;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Alien.prototype.onKeyDown = function (e) {
        this.behaviour.onKeyDown(e);
    };
    Alien.prototype.onKeyUp = function (e) {
        this.behaviour.onKeyUp(e);
    };
    Alien.prototype.draw = function () {
        this.behaviour.draw();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.net.draw();
    };
    return Alien;
}(Character));
var GameObject = (function () {
    function GameObject(name) {
        this.div = document.createElement(name);
        this.container = document.getElementById('container');
        this.container.appendChild(this.div);
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    GameObject.prototype.stop = function () {
        this.div.remove();
    };
    return GameObject;
}());
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple(i) {
        _super.call(this, "apple");
        this.width = 70;
        this.height = 70;
        this.x = i * 1000 + (Math.random() * 750);
        this.y = 0.01;
    }
    Apple.prototype.draw = function () {
        if (this.y <= 0) {
            this.y -= 4;
        }
        if (this.y >= 0) {
            this.y += 4;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Apple;
}(GameObject));
var Astronaut = (function (_super) {
    __extends(Astronaut, _super);
    function Astronaut() {
        _super.call(this, "astronaut");
        this.subscribers = [];
        this.clicks = 0;
        this.div.addEventListener("click", this.onClick.bind(this));
        this.x = 200;
        this.y = 350;
    }
    Astronaut.prototype.onClick = function () {
        this.div.style.backgroundImage = "url('images/clickast.png')";
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var bomb = _a[_i];
            bomb.notify();
        }
    };
    Astronaut.prototype.subscribe = function (o) {
        this.subscribers.push(o);
    };
    Astronaut.prototype.unsubscribe = function (o) {
        var index = this.subscribers.indexOf(o);
        this.subscribers.splice(index);
    };
    return Astronaut;
}(Character));
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb(i, c) {
        _super.call(this, "bomb");
        this.width = 30;
        this.height = 30;
        this.active = true;
        this.char = c;
        this.char.subscribe(this);
        this.x = i * 1000 + (Math.random() * 750);
        ;
        this.y = 0.01;
    }
    Bomb.prototype.draw = function () {
        if (this.active == true) {
            if (this.y <= 0) {
                this.y -= 7.5;
            }
            if (this.y >= 0) {
                this.y += 7.5;
            }
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Bomb.prototype.notify = function () {
        var _this = this;
        this.active = false;
        this.div.style.backgroundImage = "url('images/explosion.png')";
        setInterval(function () {
            _this.div.remove();
        }, 1000);
    };
    return Bomb;
}(GameObject));
var Enum;
(function (Enum) {
    (function (Keys) {
        Keys[Keys["LEFT"] = 37] = "LEFT";
        Keys[Keys["RIGHT"] = 39] = "RIGHT";
    })(Enum.Keys || (Enum.Keys = {}));
    var Keys = Enum.Keys;
})(Enum || (Enum = {}));
var Screens;
(function (Screens) {
    var FirstScreen = (function () {
        function FirstScreen(name) {
            this.div = document.createElement(name);
            this.container = document.getElementById('container');
            this.container.appendChild(this.div);
        }
        return FirstScreen;
    }());
    Screens.FirstScreen = FirstScreen;
})(Screens || (Screens = {}));
var Screens;
(function (Screens) {
    var StartScreen = (function (_super) {
        __extends(StartScreen, _super);
        function StartScreen() {
            _super.call(this, 'start');
            var btn = document.createElement("button");
            this.div.appendChild(btn);
            btn.innerHTML = "Start Game";
            var title = document.createElement("title");
            this.div.appendChild(title);
            title.innerHTML = "Catch Game";
            TweenLite.set(title, { x: 315, y: -300 });
            TweenLite.to(title, 2, { y: 80, ease: Back.easeOut });
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
    }(Screens.FirstScreen));
    Screens.StartScreen = StartScreen;
})(Screens || (Screens = {}));
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
        this.screen = new Screens.StartScreen();
    };
    Game.prototype.showGameScreen = function () {
        this.screen = new Screens.GameScreen();
    };
    Game.prototype.gameOver = function () {
        this.screen = new Screens.GameOverScreen();
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
var Eating = (function () {
    function Eating(c) {
        this.counter = 0;
        this.char = c;
        this.char.div.className = "eating";
        this.char.div.style.backgroundImage = "url(images/chareat.png)";
    }
    Eating.prototype.draw = function () {
        if (this.counter < 60) {
            this.char.xspeed = 0;
            this.counter++;
        }
        else {
            this.counter = 0;
            this.char.behaviour = new Idle(this.char);
        }
    };
    Eating.prototype.onKeyDown = function (e) {
    };
    Eating.prototype.onKeyUp = function (e) {
    };
    return Eating;
}());
var Idle = (function () {
    function Idle(c) {
        this.char = c;
        this.char.div.className = "idle";
        this.char.div.style.backgroundImage = "url(images/character.png)";
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
            this.char.xspeed = 6;
        }
        else if (this.direction == "left") {
            this.char.xspeed = -6;
        }
    }
    Running.prototype.draw = function () {
        this.char.x += this.char.xspeed;
    };
    Running.prototype.onKeyDown = function (e) {
        if (e.keyCode == Enum.Keys.RIGHT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 6;
        }
        if (e.keyCode == Enum.Keys.LEFT && this.char.behaviour instanceof Running) {
            this.char.xspeed = -6;
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
var Screens;
(function (Screens) {
    var GameOverScreen = (function (_super) {
        __extends(GameOverScreen, _super);
        function GameOverScreen() {
            _super.call(this, 'gameover');
            this.sound = document.getElementsByTagName("audio")[0];
            this.sound.src = "./sounds/gameover.mp3";
            this.sound.play();
        }
        return GameOverScreen;
    }(Screens.FirstScreen));
    Screens.GameOverScreen = GameOverScreen;
})(Screens || (Screens = {}));
var Screens;
(function (Screens) {
    var GameScreen = (function (_super) {
        __extends(GameScreen, _super);
        function GameScreen() {
            var _this = this;
            _super.call(this, 'gamescreen');
            this.score = 0;
            this.death = false;
            this.gameObjects = new Array();
            this.characters = new Array();
            this.sound = document.getElementsByTagName("audio")[0];
            this.sound.src = "./sounds/music.mp3";
            this.sound.play();
            requestAnimationFrame(function () { return _this.gameLoop(); });
            this.fallInterval = setInterval(function () {
                for (var i = 0; i < (Math.random() * 3) + 2; i++) {
                    _this.gameObjects.push(new Apple(i));
                }
                for (var i = 0; i < (Math.random() * 2) + 1; i++) {
                    for (var _i = 0, _a = _this.characters; _i < _a.length; _i++) {
                        var char = _a[_i];
                        if (char instanceof Astronaut) {
                            _this.gameObjects.push(new Bomb(i, char));
                        }
                    }
                }
            }, 1500);
            this.characters.push(new Astronaut());
            this.characters.push(new Alien());
        }
        GameScreen.prototype.gameLoop = function () {
            var _this = this;
            for (var _i = 0, _a = this.characters; _i < _a.length; _i++) {
                var char = _a[_i];
                char.draw();
                Utils.checkForScreenBorders(char);
            }
            for (var _b = 0, _c = this.gameObjects; _b < _c.length; _b++) {
                var gameObject = _c[_b];
                if (gameObject instanceof Bomb) {
                    if (gameObject.y >= 420 && gameObject instanceof Bomb) {
                        gameObject.stop();
                    }
                    for (var _d = 0, _e = this.characters; _d < _e.length; _d++) {
                        var char = _e[_d];
                        if (Utils.hasOverlap(char, gameObject) && gameObject instanceof Bomb) {
                            Utils.removeFromGame(gameObject, this.gameObjects);
                            if (char instanceof Alien) {
                                char.behaviour = new Dying(char);
                                Game.getInstance().gameOver();
                                this.div.remove();
                                char.div.remove();
                                this.death = true;
                                clearInterval(this.fallInterval);
                            }
                            if (char instanceof Astronaut) {
                                Utils.removeFromGame(gameObject, this.gameObjects);
                                this.score--;
                                var scoreDiv = document.getElementById("score");
                                scoreDiv.innerHTML = "Score: " + this.score;
                            }
                        }
                    }
                    gameObject.draw();
                }
                if (gameObject instanceof Apple) {
                    if (gameObject.y >= 380 && gameObject instanceof Apple) {
                        gameObject.stop();
                    }
                    for (var _f = 0, _g = this.characters; _f < _g.length; _f++) {
                        var char = _g[_f];
                        if (Utils.hasOverlap(char, gameObject) && gameObject instanceof Apple) {
                            Utils.removeFromGame(gameObject, this.gameObjects);
                            this.score++;
                            var scoreDiv = document.getElementById("score");
                            scoreDiv.innerHTML = "Score: " + this.score;
                            if (char instanceof Alien) {
                                char.behaviour = new Eating(char);
                            }
                        }
                    }
                    gameObject.draw();
                }
            }
            if (this.death == false) {
                requestAnimationFrame(function () { return _this.gameLoop(); });
            }
        };
        return GameScreen;
    }(Screens.FirstScreen));
    Screens.GameScreen = GameScreen;
})(Screens || (Screens = {}));
//# sourceMappingURL=main.js.map