/// <reference path="character.ts"/>

class Astronaut extends Character {

    constructor() {
        super("astronaut");

        this.x = 200;
        this.y = 350;

    }

    // er is op character geklikt
    public onClick():void {

            this.div.style.backgroundImage = "url('images/clickast.png')";

            for (let bomb of this.subscribers) {
                bomb.notify();
        }
    }
}