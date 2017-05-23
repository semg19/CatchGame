///// <reference path="character.ts" />

class Net {
    private div: HTMLElement;
    private x: number;
    public y: number;
    private height: number;
    private width: number;
    public speed: number;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("net");
        parent.appendChild(this.div);

        this.x = 110;
        this.y = 60;
        this.height = 77;
        this.width = 104;
        this.speed = 0;
    }

    public draw(): void {
        this.y += this.speed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}