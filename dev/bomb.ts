/// <reference path= "gameobject.ts"/>

class Bomb extends GameObject implements Observer{

    private speed: number; 

    constructor(i) {
        super("bomb");

        this.width = 128;
        this.height = 128;

        this.x = i * 1000 + (Math.random() * 750);;
        this.y = 1;
    }

    public draw(): void {

        if (this.y <= 0) {
            this.y -= 5;
        } if (this.y >= 0) {
            this.y += 5;
        }


        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }

    notify(): void {
        
    }
}