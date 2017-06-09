class Character implements Observable{
    public behaviour: Behaviour;

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

    constructor(parent: HTMLElement) {
        this.div = document.createElement("character");
        parent.appendChild(this.div);

        this.behaviour = new Idle(this);

        this.width = 122;
        this.height = 158;
        this.xspeed = 0;
        this.yspeed = 0;
        this.x = 30;
        this.y = 350;

        this.net = new Net(this.div);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    private onKeyDown(e: KeyboardEvent): void {
        this.behaviour.onKeyDown(e);
    }
    private onKeyUp(e: KeyboardEvent): void {
        this.behaviour.onKeyUp(e);
    }
    public draw(): void {
        this.behaviour.draw();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.net.draw();
    }

    public subscribe(o:Observer):void{

    }
    public unsubscribe(o:Observer):void{

    }
}