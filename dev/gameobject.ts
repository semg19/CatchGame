/**
 * GameObject
 */
class GameObject {
    protected div: HTMLElement;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    
    
    
    constructor(parent: HTMLElement, name:string, x: number, y: number, width: number, heigth: number) {
        this.x = x; 
        this.y = y;
        this.width = width;
        this.height = heigth;
    }
    
    public draw(){
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}