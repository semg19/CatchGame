/// <reference path="firstscreen.ts"/>

namespace Screens {
    export class StartScreen extends FirstScreen {
        constructor() {
            super('start');

            let btn = document.createElement("button");
            this.div.appendChild(btn);
            btn.innerHTML = "Start Game";

            btn.onmouseenter = function(){
                TweenMax.to(btn, 0.2, {boxShadow: "10px 10px"});
            }
            btn.onmouseleave = function(){
                TweenMax.to(btn, 0.2, {boxShadow: "0px 0px"});
            }

            btn.addEventListener("click", this.onStartClick.bind(this));

        }

        //zorgt voor het starten van de game
        onStartClick(): void {
            this.div.remove();
            Game.getInstance().showGameScreen();
        }
    }
}