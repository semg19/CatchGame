class Idle implements Behaviour {
    char: Character;

    constructor(c: Character) {
        this.char = c;
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