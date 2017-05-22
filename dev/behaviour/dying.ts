class Dying implements Behaviour {
    char: Character;

    constructor(c: Character) {
        this.char = c;

        this.char.div.className = "dying";
    }

    draw() {

    }

    onKeyDown(e: KeyboardEvent) {

    }
    onKeyUp(e: KeyboardEvent) {

    }
}