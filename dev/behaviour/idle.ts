class Idle implements Behaviour {
    char: Alien;

    constructor(c: Alien) {
        this.char = c;
        this.char.div.className = "idle";
        this.char.div.style.backgroundImage = "url(images/character.png)";

    }

    draw() {
        this.char.xspeed = 0;
        this.char.div.className = "idle";
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.keyCode == Enum.Keys.RIGHT && this.char.behaviour instanceof Idle) {
            this.char.behaviour = new Running(this.char, "right");
        } else if (e.keyCode == Enum.Keys.LEFT && this.char.behaviour instanceof Idle) {
            this.char.behaviour = new Running(this.char, "left");
        } 
    }

    onKeyUp(e: KeyboardEvent) {

    }
}