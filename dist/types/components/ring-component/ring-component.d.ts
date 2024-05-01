interface BoardItem {
    pos: number;
    rings: number[];
}
export declare class RingComponent {
    draggingItem: number;
    gameBoard: BoardItem[];
    checkBoard(): void;
    playItem: number[];
    turn: number;
    dropHandler(event: DragEvent, pos: number): void;
    dragOver(event: DragEvent, rings: number[]): void;
    checkDraggable(rings: number[]): boolean;
    checkTurn(): boolean;
    dragStart(event: DragEvent, number: number): void;
    dragEnd(): void;
    renderRings({ rings, pos }: BoardItem): HTMLElement;
    renderRing(number: number, draggable?: boolean): HTMLElement;
    renderBoard(): HTMLElement;
    addToBoard(number: number, posTarget: number): void;
    sortPos(a: BoardItem, b: BoardItem): number;
    renderPLayer(playerNumber: number): any;
    render(): HTMLElement;
}
export {};
