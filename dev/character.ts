class Character implements Observable{
    public behaviour: Behaviour;
    private subscribers:Array<Observer>;
    private clicks:number;

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
        this.subscribers = [];

        this.width = 122;
        this.height = 158;
        this.xspeed = 0;
        this.yspeed = 0;
        this.x = 30;
        this.y = 350;
        this.clicks = 0;

        this.net = new Net(this.div);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));

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

    // er is op character geklikt
    private onClick(e:MouseEvent):void {
        if(this.clicks > 0){
            this.clicks -=1;

            this.div.style.backgroundImage = "url('images/apple.png')";
            this.xspeed = 0;
            this.yspeed = 0;
            console.log("Klik");

            for (let bomb of this.subscribers) {
                bomb.notify();
            } 
            
            // hiermee voorkomen we dat window.click ook uitgevoerd wordt
            e.stopPropagation();
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