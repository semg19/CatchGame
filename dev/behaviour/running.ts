class Running implements Behaviour {
    chars: Array<Character>;
    private direction: string;

    constructor(c: Character, direction: string) {
        this.chars = new Array<Character>();
        for (let char of this.chars) {
            char = c;
            char.div.className = "running";
            direction = direction;
            
            if (char instanceof Alien) {
                if (this.direction == "right") {
                    char.xspeed = 4;
                } else if (this.direction == "left") {
                    char.xspeed = -4;
                }
            }
            if (char instanceof Astronaut) {
                if (this.direction == "d") {
                    char.xspeed = 6;
                } else if (this.direction == "a") {
                    char.xspeed = -6;
                }
            }
        }
    }

    draw() {
        for (let char of this.chars) {
            char.x += char.xspeed;
        }
    }

    onKeyDown(e: KeyboardEvent) {
        for (let char of this.chars) {

            if (char instanceof Alien) {
                if (e.keyCode == Enum.Keys.RIGHT && char.behaviour instanceof Running) {
                    char.xspeed = 6;
                }
                if (e.keyCode == Enum.Keys.LEFT && char.behaviour instanceof Running) {
                    char.xspeed = -6;
                }
            }
            if (char instanceof Astronaut) {
                if (e.keyCode == Enum.Keys.D && char.behaviour instanceof Running) {
                    char.xspeed = 6;
                }
                if (e.keyCode == Enum.Keys.A && char.behaviour instanceof Running) {
                    char.xspeed = -6;
                }
            }
        }
    }

    onKeyUp(e: KeyboardEvent) {
        for (let char of this.chars) {

            if (char instanceof Alien) {
                if (e.keyCode == Enum.Keys.RIGHT && char.behaviour instanceof Running) {
                    char.xspeed = 0;
                    char.behaviour = new Idle(char);
                }
                if (e.keyCode == Enum.Keys.LEFT && char.behaviour instanceof Running) {
                    char.xspeed = 0;
                    char.behaviour = new Idle(char);
                }
            }
            if (char instanceof Astronaut) {
                if (e.keyCode == Enum.Keys.D && char.behaviour instanceof Running) {
                    char.xspeed = 0;
                    char.behaviour = new Idle(char);
                }
                if (e.keyCode == Enum.Keys.A && char.behaviour instanceof Running) {
                    char.xspeed = 0;
                    char.behaviour = new Idle(char);
                }
            } 
        } 
    }
}