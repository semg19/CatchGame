class Eating implements Behaviour {
    char: Alien;
    private counter = 0;

    constructor(c: Alien) {
        this.char = c;
        this.char.div.className = "eating";
        this.char.div.style.backgroundImage = "url(images/chareat.png)";
    }

    draw() {
        if (this.counter < 60) {
            this.char.xspeed = 0; 
            this.counter++;
        } else {
            this.counter = 0;
            this.char.behaviour = new Idle(this.char);
        }
    }

    onKeyDown(e: KeyboardEvent) {

    }
    onKeyUp(e: KeyboardEvent) {

    }
}