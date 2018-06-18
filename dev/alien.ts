/// <reference path="character.ts"/>

class Alien extends Character {

    public behaviour: Behaviour;

    constructor() {
        super("alien");

        this.behaviour = new Idle(this);
        this.net = new Net(this.div);

        this.x = 30;
        this.y = 350;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));

    }

    public onKeyDown(e: KeyboardEvent): void {
        this.behaviour.onKeyDown(e);
    }
    public onKeyUp(e: KeyboardEvent): void {
        this.behaviour.onKeyUp(e);
    }

    public draw(): void {
        this.behaviour.draw();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.net.draw();
    }
}