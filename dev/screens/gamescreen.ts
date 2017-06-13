/// <reference path="firstscreen.ts"/>

namespace Screens {
    export class GameScreen extends FirstScreen {

        private char: Character;
        public bombs: Array<Bomb>;
        public apples: Array<Apple>;
        private score: number = 0;
        private death: Boolean = false;
        private fallInterval: number;

        constructor() {
            super('gamescreen');
            this.char = new Character(this.div);
            this.bombs = new Array<Bomb>();
            this.apples = new Array<Apple>();

            requestAnimationFrame(() => this.gameLoop());
            this.fallInterval = setInterval(() => {
            for (let i = 0; i < (Math.random() * 3) + 2; i++) {
                this.apples.push(new Apple(i));
            }
            for (let i = 0; i < (Math.random() * 2) + 1; i++) {
                this.bombs.push(new Bomb(i, this.char));
            }
            }, 1500);
        }

        private gameLoop() {
            this.char.draw();

            //functie om te kijken of er een collsion is en dit laten zien in de console
            for (let bomb of this.bombs) {
                if (bomb.y >= 420) {
                        console.log("delete bomb");
                        bomb.stop();
                }
                if (Utils.hasOverlap(this.char, bomb)) {
                    Utils.removeFromGame(bomb,this.bombs);
                    this.char.behaviour = new Dying(this.char);
                    Game.getInstance().gameOver();
                    this.div.remove();
                    this.death = true;
                    clearInterval(this.fallInterval);
                }
            bomb.draw();
            }
            for (let apple of this.apples) {
                if (apple.y >= 380) {
                        apple.stop();
                }
                if (Utils.hasOverlap(this.char, apple)) {
                    Utils.removeFromGame(apple,this.apples);
                    this.score++;
                    let scoreDiv = document.getElementById("score");
                    scoreDiv.innerHTML = "Score: " + this.score;
                    if (apple.y >= 500) {
                        apple.stop();
                    }
                }
            apple.draw();
            }
            
            Utils.checkForScreenBorders(this.char);
            
            if(this.death == false){
                requestAnimationFrame(() => this.gameLoop());
            }
        }
    }
}