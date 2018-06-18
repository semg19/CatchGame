/// <reference path="character.ts"/>

class Alien extends Character {

    constructor() {
        super("alien");

        this.x = 30;
        this.y = 350;

    }

    // er is op character geklikt
    public onClick():void {

            this.div.style.backgroundImage = "url('images/clickchar.png')";

            for (let bomb of this.subscribers) {
                bomb.notify();
        }
    }
}