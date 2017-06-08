class Running implements Behaviour {
    char: Character;
    private direction: string;

    constructor(c: Character, direction: string) {
        this.char = c;
        this.char.div.className = "running";
        this.direction = direction;

        if (this.direction == "right") {
            this.char.xspeed = 4;
        } else if (this.direction == "left") {
            this.char.xspeed = -4;
        }
    }

    draw() {
        this.char.x += this.char.xspeed;
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.keyCode == Keys.RIGHT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 2;
        }
        if (e.keyCode == Keys.LEFT && this.char.behaviour instanceof Running) {
            this.char.xspeed = -2;
        }
    }

    onKeyUp(e: KeyboardEvent) {
        if (e.keyCode == Keys.RIGHT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 0;
            this.char.behaviour = new Idle(this.char);
        }
        if (e.keyCode == Keys.LEFT && this.char.behaviour instanceof Running) {
            this.char.xspeed = 0;
            this.char.behaviour = new Idle(this.char);
        }
    }
}