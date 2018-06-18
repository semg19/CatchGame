/// <reference path="character.ts"/>

class Astronaut extends Character implements Observable {

    private subscribers:Array<Observer>;
    private clicks:number;

    constructor() {
        super("astronaut");

        this.subscribers = [];
        this.clicks = 0;

        this.div.addEventListener("click", this.onClick.bind(this));

        this.x = 200;
        this.y = 350;

    }

    // er is op astronaut geklikt
    private onClick():void {

            this.div.style.backgroundImage = "url('images/clickast.png')";

            for (let bomb of this.subscribers) {
                bomb.notify();
        }
    }

    public subscribe(o:Observer):void{
        this.subscribers.push(o);
    }
    public unsubscribe(o:Observer):void{
        let index:number = this.subscribers.indexOf(o);
        this.subscribers.splice(index);
    }
}