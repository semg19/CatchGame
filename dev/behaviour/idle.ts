class Idle implements Behaviour {
    chars: Array<Character>;

    constructor(c: Character) {
        this.chars = new Array<Character>();
        for (let char of this.chars) {
            char = c;
        }
    }

    draw() {
        for (let char of this.chars) {
            char.xspeed = 0;
            char.div.className = "idle";
        }
    }

    onKeyDown(e: KeyboardEvent) {
        for (let char of this.chars) {
            if (char instanceof Alien) {
                if (e.keyCode == Enum.Keys.RIGHT && char.behaviour instanceof Idle) {
                    char.behaviour = new Running(char, "right");
                } else if (e.keyCode == Enum.Keys.LEFT && char.behaviour instanceof Idle) {
                    char.behaviour = new Running(char, "left");
                } 
            }
            if (char instanceof Astronaut) {
                if (e.keyCode == Enum.Keys.D && char.behaviour instanceof Idle) {
                    char.behaviour = new Running(char, "d");
                } else if (e.keyCode == Enum.Keys.A && char.behaviour instanceof Idle) {
                    char.behaviour = new Running(char, "a");
                } 
            }
        }
    }

    onKeyUp(e: KeyboardEvent) {

    }
}