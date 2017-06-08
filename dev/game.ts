/// <reference path="screens/startscreen.ts"/>
/// <reference path="bomb.ts"/>

class Game {
    public static instance: Game;

    private screen: Screens.FirstScreen;

    constructor() {
    }

    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
            Game.instance.showStartScreen();
        }
        return Game.instance;
    }

    public showStartScreen(): void {
        this.screen = new Screens.StartScreen();
    }

    public showGameScreen(): void {
        this.screen = new Screens.GameScreen();
    }

    public gameOver():void{
        // document.getElementById("gamescreen").remove();
        this.screen = new Screens.GameOverScreen();
    }

} 