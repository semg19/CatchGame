class Dying implements Behaviour {
    char: Character;

    constructor(c: Character) {
        this.char = c;

        this.char.div.className = "dying";
    }

    draw() {
        this.char.behaviour = new Idle(this.char);
        Game.getInstance().gameOver();
    }

    onKeyDown(e: KeyboardEvent) {

    }
    onKeyUp(e: KeyboardEvent) {

    }
}