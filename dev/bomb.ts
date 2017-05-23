/// <reference path= "gameobject.ts"/>

class Bomb {

    public div: HTMLElement;
    private speed: number;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;   

    constructor(parent: HTMLElement) {
        this.div = document.createElement("bomb");
        parent.appendChild(this.div);

        this.width = 128;
        this.height = 128;

        this.x = Math.random() * window.innerWidth;
        this.y = 20;
    }

    public draw(): void {

        if (this.y <= 0) {
            this.y -= 5;
        } if (this.y >= 0) {
            this.y += 5;
        }


        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}