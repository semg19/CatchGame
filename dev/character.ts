class Character {

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

        
        this.width = 122;
        this.height = 158;
        this.xspeed = 0;
        this.yspeed = 0;

    }

    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }

}