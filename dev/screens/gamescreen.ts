/// <reference path="firstscreen.ts"/>

class GameScreen extends FirstScreen {

    private char: Character;
    private bomb: Bomb;

    constructor() {
        super("gamescreen");
        this.char = new Character(this.div);
        this.bomb = new Bomb(this.div);

        requestAnimationFrame(() => this.gameLoop());
    }



    private gameLoop() {
        this.char.draw();
        this.bomb.draw();
     
        //functie om te kijken of er een collsion is en dit laten zien in de console
        if (Utils.hasOverlap(this.char, this.bomb)) {
                console.log("Game Over")
                this.div.removeChild(this.char.div);
                this.char = null;   
                this.div.innerHTML = "Game Over";
            }
            requestAnimationFrame(() => this.gameLoop());
    }

}