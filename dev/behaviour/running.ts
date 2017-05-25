class Running implements Behaviour {
    char: Character;

    private direction: string;

    private toTheRight: boolean;
    private toTheLeft: boolean;

    constructor(c: Character, direction: string) {
        this.char = c;
        this.char.div.className = "running";
        this.direction = direction;

        if (this.direction == "right") {
            this.char.xspeed = 2;
        } else if (this.direction == "left") {
            this.char.xspeed = -2;
        }
    }

    draw() {
        if (this.toTheRight && !this.char.rightBorderHit){
            this.char.x += 3;
        }else if(this.toTheLeft && !this.char.leftBorderHit){
            this.char.x -= 3;
        }
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.key == 'ArrowRight' && this.char.behaviour instanceof Running) {
            this.toTheRight = true;
        }
        if (e.key == 'ArrowLeft' && this.char.behaviour instanceof Running) {
            this.toTheLeft = true
        }
    }

    onKeyUp(e: KeyboardEvent) {
        if (e.key == 'ArrowRight' && this.char.behaviour instanceof Running) {
            this.toTheRight = false;
            this.char.behaviour = new Idle(this.char);
        }
        if (e.key == 'ArrowLeft' && this.char.behaviour instanceof Running) {
            this.toTheRight = false;
            this.char.behaviour = new Idle(this.char);
        }
    }
}