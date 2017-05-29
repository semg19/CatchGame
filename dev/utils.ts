//functie die iets checkt of het wat raakt.
class Utils {
    public static hasOverlap(char: Character, bomb: Bomb): boolean {
        return (char.x < bomb.x + bomb.width &&
            char.x + char.width > bomb.x &&
            char.y < bomb.y + bomb.height &&
            char.height + char.y > bomb.y)
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
}