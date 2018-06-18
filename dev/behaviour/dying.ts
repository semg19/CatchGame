class Dying implements Behaviour {
    chars: Array<Character>;

    constructor(c: Character) {
        this.chars = new Array<Character>();
        for (let char of this.chars) {
            char = c;

            char.div.className = "dying";
        }
    }

    draw() {
        for (let char of this.chars) {
            char.behaviour = new Idle(char);
            Game.getInstance().gameOver();
        }
    }

    onKeyDown(e: KeyboardEvent) {

    }
    onKeyUp(e: KeyboardEvent) {

    }
}