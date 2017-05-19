///// <reference path="behaviour.ts" />

class Character{
    
    private div:HTMLElement;
    
    private posX : number;
    private posY : number;

    private leftSpeed : number = 0;
    private rightSpeed : number = 0;
    
    public behaviour: Behaviour;

    constructor(left:number, right:number) {
        // hier wordt de karakter in aangemaakt
        this.div = document.createElement("character");
        document.body.appendChild(this.div);
        
        // positie
        this.posX = 20
        this.posY = 320
        
        // keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    private onKeyDown(e: KeyboardEvent): void {
        this.behaviour.onKeyDown(e);
    }
        private onKeyUp(e: KeyboardEvent): void {
        this.behaviour.onKeyUp(e);
    }

    
    // bewegen
    public move() : void {
        
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
                        
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px) scaleX(-1)";
    }

    
}