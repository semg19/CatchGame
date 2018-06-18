class Running implements Behaviour {
    char: Alien;
    private direction: string;

    constructor(c: Alien, direction: string) {
        this.char = c;
        this.char.div.className = "running";
        this.direction = direction;

        if (this.direction == "right") {
            this.char.xspeed = 6;
        } else if (this.direction == "left") {
            this.char.xspeed = -6;
        }
    }

    draw() {
        this.char.x += this.char.xspeed;
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.keyCode == Enum.Keys.RIGHT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 6;
        }
        if (e.keyCode == Enum.Keys.LEFT && this.char.behaviour instanceof Running) {
            this.char.xspeed = -6;
        }
    }

    onKeyUp(e: KeyboardEvent) {
        if (e.keyCode == Enum.Keys.RIGHT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 0;
            this.char.behaviour = new Idle(this.char);
        }
        if (e.keyCode == Enum.Keys.LEFT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 0;
            this.char.behaviour = new Idle(this.char);
        }
    }
}