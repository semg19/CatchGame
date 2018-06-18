interface Behaviour {
    chars: Array<Character>;
    onKeyDown(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void;
    draw(): void
}