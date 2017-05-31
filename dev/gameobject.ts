/**
 * GameObject
 */
class GameObject {
    protected div: HTMLElement;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    private container: HTMLElement;

    constructor(name:string) {
        this.div = document.createElement(name);
        this.container = document.getElementById('container');
        this.container.appendChild(this.div);
    }
    
    public draw(){
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}