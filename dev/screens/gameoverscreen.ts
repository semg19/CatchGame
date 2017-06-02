/// <reference path="firstscreen.ts"/>

class GameOverScreen extends FirstScreen {
    constructor() {
        super('gameover');
        let btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "Try again";

        // click
        btn.addEventListener("click", this.onClick.bind(this));

    }

    private onClick(): void {
        console.log("retry");
        this.div.remove();
        Game.getInstance().showStartScreen();
    }
}