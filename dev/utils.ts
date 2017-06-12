//functie die iets checkt of het wat raakt.
class Utils {
    public static hasOverlap(c: Character, o: GameObject): boolean {
        return (c.x < o.x + o.width &&
            c.x + c.width > o.x &&
            c.y < o.y + o.height &&
            c.height + c.y > o.y)
    }

    public static checkForScreenBorders = (char: Character): void => {
        if (char.x + (char.width * 1.40) > window.innerWidth) {
            char.leftBorderHit = true;
        } else if (char.x + (char.width * 0.15) < 0) {
            char.leftBorderHit = true;
        } else {
            char.leftBorderHit = false;
            char.rightBorderHit = false;
        }
    }; 

    public static removeFromGame(o:GameObject, arr:Array<any>): void{
        o.div.remove();
        let i:number = arr.indexOf(o);
        if(i != -1) {
            arr.splice(i, 1);
        }
    }
}