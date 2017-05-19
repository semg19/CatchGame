/// <reference path="firstscreen.ts"/>

class GameOver extends FirstScreen {
    constructor() {
        super('gameover');
        let btn = document.createElement("gamebutton");
        this.div.appendChild(btn);
        btn.innerHTML = "Probeer opnieuw!";

        // click
        btn.addEventListener("click", this.onClick.bind(this));

    }

    onClick(): void {
        console.log("retry");
        this.div.remove();
        Game.getInstance().showStartScreen();
    }
}