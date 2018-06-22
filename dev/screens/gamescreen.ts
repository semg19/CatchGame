/// <reference path="firstscreen.ts"/>

namespace Screens {
    export class GameScreen extends FirstScreen {

        private score: number = 0;
        private death: Boolean = false;
        private fallInterval: number;
        private gameObjects: Array<GameObject>;
        private characters: Array<Character>;
        private sound: HTMLAudioElement;

        constructor() {
            super('gamescreen');
            this.gameObjects = new Array<GameObject>();
            this.characters = new Array<Character>();

            this.sound = document.getElementsByTagName("audio")[0]
            this.sound.src = "./sounds/music.mp3"
            this.sound.play()

            requestAnimationFrame(() => this.gameLoop());
            
            this.fallInterval = setInterval(() => {
                for (let i = 0; i < (Math.random() * 3) + 2; i++) {
                    this.gameObjects.push(new Apple(i));
                }
                for (let i = 0; i < (Math.random() * 2) + 1; i++) {
                    for (let char of this.characters) {
                        if (char instanceof Astronaut) {
                            this.gameObjects.push(new Bomb(i, char)); 
                        }
                    }
                }
            }, 1500);
                
            this.characters.push(new Astronaut());
            this.characters.push(new Alien());
        }

        private gameLoop() {
            for (let char of this.characters) {
                char.draw()
                Utils.checkForScreenBorders(char);
            }

            for (let gameObject of this.gameObjects) {
                //functie om te kijken of er een collsion is en dit laten zien in de console
                if (gameObject instanceof Bomb) {
                    if (gameObject.y >= 420 && gameObject instanceof Bomb) {
                        gameObject.stop();
                    }
                    for (let char of this.characters) {
                        if (Utils.hasOverlap(char, gameObject) && gameObject instanceof Bomb) {
                            Utils.removeFromGame(gameObject,this.gameObjects);
                            if (char instanceof Alien) {
                                char.behaviour = new Dying(char);
                                Game.getInstance().gameOver();
                                this.div.remove();
                                char.div.remove();
                                this.death = true;
                                clearInterval(this.fallInterval);
                            } 
                            if (char instanceof Astronaut) {
                                Utils.removeFromGame(gameObject,this.gameObjects);
                                this.score--;
                                let scoreDiv = document.getElementById("score");
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
                    for (let char of this.characters) {
                        if (Utils.hasOverlap(char, gameObject) && gameObject instanceof Apple) {
                            Utils.removeFromGame(gameObject,this.gameObjects);
                            this.score++;
                            let scoreDiv = document.getElementById("score");
                            scoreDiv.innerHTML = "Score: " + this.score;
                            if (char instanceof Alien) {
                                char.behaviour = new Eating(char);
                            }
                        }
                    }
                    gameObject.draw();
                }
            }
            
            if(this.death == false){
                requestAnimationFrame(() => this.gameLoop());
            }
        }
    }
}