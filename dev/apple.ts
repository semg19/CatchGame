/// <reference path= "gameobject.ts"/>

class Apple extends GameObject{

    private speed: number; 

    constructor(i) {
        super("apple");

        this.width = 128;
        this.height = 128;

        this.x = i * 1000 + (Math.random() * 750);
        this.y = 0.01;
    }

    public draw(): void {

        if (this.y <= 0) {
            this.y -= 4;
        } if (this.y >= 0) {
            this.y += 4;
        }


        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}