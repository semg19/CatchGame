/// <reference path="firstscreen.ts"/>

class GameScreen extends FirstScreen {

    private character: Character;

    constructor() {
        super("gamescreen");
        this.character = new Character(62, 64);

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.character.move();
        requestAnimationFrame(() => this.gameLoop());
    }
}