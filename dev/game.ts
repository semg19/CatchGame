/// <reference path="screens/startscreen.ts"/>
class Game {
    
    private screen: any;
    private char:Character;

    private static instance: Game;
    private score:number = 0;
    
    constructor() {
        
        // eigen keyboard input       
        this.char = new Character(65, 68);
        
        // start game loop        
        requestAnimationFrame(this.gameLoop.bind(this));        
    }
    
    // game loop
    private gameLoop(){
        this.char.move();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
            Game.instance.showStartScreen();
        }
        return Game.instance;
    }

    public showStartScreen(): void {
        this.screen = new StartScreen();
    }

    public showGameScreen(): void {
        this.screen = new GameScreen();
    }

    public gameOver():void{ 
        this.screen = new GameOver();
    }
    
} 