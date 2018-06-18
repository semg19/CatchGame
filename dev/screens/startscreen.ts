/// <reference path="firstscreen.ts"/>

namespace Screens {
    export class StartScreen extends FirstScreen {

        constructor() {
            super('start');

            let btn = document.createElement("button");
            this.div.appendChild(btn);
            btn.innerHTML = "Start Game";

            let title = document.createElement("title");
            this.div.appendChild(title);
            title.innerHTML = "Catch Game"
            TweenLite.set(title, {x:315, y:-300});
            TweenLite.to(title, 2, {y: 80, ease: Back.easeOut});

            btn.onmouseenter = function(){
                TweenMax.to(btn, 0.2, {boxShadow: "10px 10px"});
            }
            btn.onmouseleave = function(){
                TweenMax.to(btn, 0.2, {boxShadow: "0px 0px"});
            }

            btn.addEventListener("click", this.onStartClick.bind(this));

        }

        //zorgt voor het starten van de game
         private onStartClick(): void {
            this.div.remove();
            Game.getInstance().showGameScreen();
        }
    }
}