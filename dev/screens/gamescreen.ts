/// <reference path="firstscreen.ts"/>

class GameScreen extends FirstScreen {

    private char: Character;
    public bombs: Array<Bomb>;
    public apples: Array<Apple>;
    private score: number = 0;
    private death: Boolean = false;

    constructor() {
        super("gamescreen");
        this.char = new Character(this.div);
        this.bombs = new Array<Bomb>();
        this.apples = new Array<Apple>();

        requestAnimationFrame(() => this.gameLoop());
        setInterval(() => {
        for (let i = 0; i < (Math.random() * 2) + 1; i++) {
            this.apples.push(new Apple(i));
        }
        for (let i = 0; i < (Math.random() * 2) + 1; i++) {
            this.bombs.push(new Bomb(i));
        }
        }, 1000);
                
        document.getElementsByTagName("ui")[0].innerHTML = "Score: " + this.score;
    }

    private gameLoop() {
        this.char.draw();

        //functie om te kijken of er een collsion is en dit laten zien in de console
        for (let bomb of this.bombs) {
            if (Utils.hasOverlap(this.char, bomb)) {
                if (this.death == false) {
                    this.char.behaviour = new Dying(this.char);
                    this.death = true;
                    this.div.remove();
                    this.char.div.remove();
                }
            }
        bomb.draw();
        }
        for (let apple of this.apples) {
            if (Utils.hasOverlap(this.char, apple)) {
                console.log("+ 1!")
                document.getElementsByTagName("ui")[0].innerHTML = "Score: " + this.score++;
            }
        apple.draw();
        }
        
        console.log("Right border hit = " + this.char.rightBorderHit);
        console.log("Left border hit = " + this.char.leftBorderHit);
        Utils.checkForScreenBorders(this.char);

        requestAnimationFrame(() => this.gameLoop());
    }

}