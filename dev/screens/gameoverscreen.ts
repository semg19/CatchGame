/// <reference path="firstscreen.ts"/>

namespace Screens {
    export class GameOverScreen extends FirstScreen {

        private sound: HTMLAudioElement;

        constructor() {
            super('gameover');

            this.sound = document.getElementsByTagName("audio")[0]
            this.sound.src = "./sounds/gameover.mp3"
            this.sound.play()

        }
    }
}