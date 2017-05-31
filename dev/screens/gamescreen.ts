/// <reference path="firstscreen.ts"/>

class GameScreen extends FirstScreen {

    private char: Character;
    public bombs: Array<Bomb>;

    constructor() {
        super("gamescreen");
        this.char = new Character(this.div);
        this.bombs = new Array<Bomb>();

        requestAnimationFrame(() => this.gameLoop());
        for (let i = 0; i < 20; i++) {
            this.bombs.push(new Bomb(i));
        }
    }

    private gameLoop() {
        this.char.draw();

        //functie om te kijken of er een collsion is en dit laten zien in de console
        for (let bomb of this.bombs) {
            if (Utils.hasOverlap(this.char, bomb)) {
                console.log("Game Over")
                this.div.removeChild(this.char.div);
                this.char = null;
                this.div.innerHTML = "Game Over";
            }
        bomb.draw();
        }
        
        console.log("Right border hit = " + this.char.rightBorderHit);
        console.log("Left border hit = " + this.char.leftBorderHit);
        Utils.checkForScreenBorders(this.char);

        requestAnimationFrame(() => this.gameLoop());
    }

}