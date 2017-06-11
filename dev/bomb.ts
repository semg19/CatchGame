/// <reference path= "gameobject.ts"/>

class Bomb extends GameObject implements Observer{

    private speed: number; 
    private active:boolean;
    private character:Character;

    constructor(i, c:Character) {
        super("bomb");

        this.width = 128;
        this.height = 128;
        this.active = true;
        this.character = c;
        this.character.subscribe(this);

        this.x = i * 1000 + (Math.random() * 750);;
        this.y = 1;
    }

    public draw(): void {
            if(this.active == true) {
                if (this.y <= 0) {
                    this.y -= 5;
                } if (this.y >= 0) {
                    this.y += 5;
                }
            }

        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }

    notify(): void {
        this.active = false;
        this.div.style.backgroundImage = "url('images/apple.png')";
        // setTimeout(this.resume.bind(this), 10 * this.x);
    }
}