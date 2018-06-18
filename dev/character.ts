class Character implements Observable {

    public behaviour: Behaviour;
    public subscribers:Array<Observer>;
    public clicks:number;

    public div: HTMLElement;
    public x: number;
    public y: number;
    public net: Net;
    public xspeed: number;
    public yspeed: number;
    public width: number;
    public height: number;
    public leftBorderHit: boolean;
    public rightBorderHit: boolean;
    private container: HTMLElement;

    constructor(name:string) {
        this.div = document.createElement(name);
        this.container = document.getElementById('container');
        this.container.appendChild(this.div);

        this.behaviour = new Idle(this);
        this.subscribers = [];

        this.width = 122;
        this.height = 158;
        this.xspeed = 0;
        this.yspeed = 0;
        this.clicks = 0;

        this.net = new Net(this.div);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
        this.div.addEventListener("click", this.onClick.bind(this));

    }

    public onKeyDown(e: KeyboardEvent): void {
        this.behaviour.onKeyDown(e);
    }
    public onKeyUp(e: KeyboardEvent): void {
        this.behaviour.onKeyUp(e);
    }
    public draw(): void {
        this.behaviour.draw();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.net.draw();
    }

    // er is op character geklikt
    public onClick():void {

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