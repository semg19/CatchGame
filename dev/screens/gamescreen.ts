/// <reference path="firstscreen.ts"/>

namespace Screens {
    export class GameScreen extends FirstScreen {

        private char: Character;
        private score: number = 0;
        private death: Boolean = false;
        private fallInterval: number;
        private gameObjects: Array<GameObject>;

        constructor() {
            super('gamescreen');
            this.char = new Character(this.div);
            this.gameObjects = new Array<GameObject>();

            requestAnimationFrame(() => this.gameLoop());
            this.fallInterval = setInterval(() => {
            for (let i = 0; i < (Math.random() * 3) + 2; i++) {
                this.gameObjects.push(new Apple(i));
            }
            for (let i = 0; i < (Math.random() * 2) + 1; i++) {
                this.gameObjects.push(new Bomb(i, this.char));
            }
            }, 1500);
        }

        private gameLoop() {
            this.char.draw();

            for (let gameObject of this.gameObjects) {
                //functie om te kijken of er een collsion is en dit laten zien in de console
                if (gameObject instanceof Bomb) {
                    if (gameObject.y >= 420 && gameObject instanceof Bomb) {
                            gameObject.stop();
                    }
                    if (Utils.hasOverlap(this.char, gameObject) && gameObject instanceof Bomb) {
                        Utils.removeFromGame(gameObject,this.gameObjects);
                        this.char.behaviour = new Dying(this.char);
                        Game.getInstance().gameOver();
                        this.div.remove();
                        this.death = true;
                        clearInterval(this.fallInterval);
                    }
                    gameObject.draw();
                }

                if (gameObject instanceof Apple) {
                    if (gameObject.y >= 380 && gameObject instanceof Apple) {
                            gameObject.stop();
                    }
                    if (Utils.hasOverlap(this.char, gameObject) && gameObject instanceof Apple) {
                        Utils.removeFromGame(gameObject,this.gameObjects);
                        this.score++;
                        let scoreDiv = document.getElementById("score");
                        scoreDiv.innerHTML = "Score: " + this.score;
                    }
                    gameObject.draw();
                }
            }
            
            Utils.checkForScreenBorders(this.char);
            
            if(this.death == false){
                requestAnimationFrame(() => this.gameLoop());
            }
        }
    }
}