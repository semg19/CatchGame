//functie die iets checkt of het wat raakt.
class Utils {
    public static hasOverlap(char: Character, bomb: Bomb): boolean {
        return (char.x < bomb.x + bomb.width &&
            char.x + char.width > bomb.x &&
            char.y < bomb.y + bomb.height &&
            char.height + char.y > bomb.y)
    }
}