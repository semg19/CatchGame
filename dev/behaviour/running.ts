class Running implements Behaviour {
    char: Character;

    private leftkey : number;
    private rightkey : number;
    
    private leftSpeed : number = 0;
    private rightSpeed : number = 0;

    private posX : number;
    private posY : number;

    // keyboard input zorgt dat de snelheid wordt aangepast
    public onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.leftkey:
            this.leftSpeed = 5;
            break;
        case this.rightkey:
            this.rightSpeed = 5;
            break;
        }
    }
    
    // speed op 0 alleen als de eigen keys zijn losgelaten
    public onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.leftkey:
            this.leftSpeed = 0;
            break;
        case this.rightkey:
            this.rightSpeed = 0;
            break;
        }
    }

    // bewegen
    public move() : void {
        
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
    }
}