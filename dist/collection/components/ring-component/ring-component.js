import { Host, h } from "@stencil/core";
;
export class RingComponent {
    constructor() {
        this.draggingItem = 0;
        this.gameBoard = new Array(9).fill({
            pos: 0,
            rings: []
        }).map((_, index) => ({
            pos: index + 1,
            rings: []
        }));
        this.playItem = [...Array(20).keys()].map(id => id + 5).reverse();
        this.turn = 1;
    }
    checkBoard() {
        const best = this.gameBoard.map(({ pos, rings }) => {
            let winner;
            const score = Math.max(0, ...rings);
            if (score) {
                winner = Math.max(0, ...rings) % 2 === 0 ? 2 : 1;
            }
            return { pos, winner };
        });
        const posibilitys = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
        ];
        const result = posibilitys.map(posibility => {
            let winner1 = 0;
            let winner2 = 0;
            posibility.map(posPosition => {
                const winPos = best.find(({ pos }) => posPosition === pos).winner;
                if (winPos === 1) {
                    winner1++;
                }
                if (winPos === 2) {
                    winner2++;
                }
            });
            if (winner1 === 3) {
                return 1;
            }
            if (winner2 === 3) {
                return 2;
            }
        }).filter(item => item !== undefined);
        if (result.length) {
            setTimeout((() => {
                alert(`PLAYER ${result[0]} WIN`);
            }), 150);
        }
    }
    dropHandler(event, pos) {
        event.preventDefault();
        const number = event.dataTransfer.getData("ring");
        this.addToBoard(Number(number), pos);
    }
    dragOver(event, rings) {
        if (this.checkDraggable(rings)) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        }
    }
    checkDraggable(rings) {
        return this.draggingItem && this.checkTurn() && this.draggingItem > Math.max(0, ...rings);
    }
    checkTurn() {
        if (this.turn % 2 === 0 && this.draggingItem % 2 === 0) {
            return true;
        }
        if (this.turn % 2 !== 0 && this.draggingItem % 2 !== 0) {
            return true;
        }
    }
    dragStart(event, number) {
        // Add different types of drag data
        event.dataTransfer.clearData();
        event.dataTransfer.setData("ring", number.toString());
        this.draggingItem = number;
    }
    dragEnd() {
        this.draggingItem = null;
    }
    renderRings({ rings, pos }) {
        return h("div", { class: `rings ${this.checkDraggable(rings) ? 'dropable' : ''}`, "data-max": Math.max(0, ...rings) > 0 ? Math.max(0, ...rings) : '', onDrop: event => this.dropHandler(event, pos), onDragOver: event => this.dragOver(event, rings) }, rings.map((number) => this.renderRing(number)));
    }
    renderRing(number, draggable = false) {
        return h("div", { class: `ring ${draggable ? 'draggable' : ''}`, key: number, "data-player": number % 2 == 0 ? 1 : 2, "data-number": number, draggable: draggable, onDragStart: (event) => this.dragStart(event, number), onDragEnd: () => this.dragEnd() });
    }
    renderBoard() {
        return h("div", { class: "board" }, this.gameBoard.sort(this.sortPos).map(item => {
            return this.renderRings(item);
        }));
    }
    addToBoard(number, posTarget) {
        this.gameBoard = this.gameBoard.map((board) => {
            if (board.pos === posTarget) {
                board.rings.push(number);
            }
            return board;
        });
        this.playItem = this.playItem.filter(item => item !== number);
        this.turn++;
    }
    sortPos(a, b) {
        if (a.pos < b.pos) {
            return -1;
        }
        else if (a.pos > b.pos) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }
    renderPLayer(playerNumber) {
        const availableRIngs = this.playItem.filter(number => {
            if (playerNumber % 2 === 0) {
                return number % 2 === 0;
            }
            return number % 2 !== 0;
        });
        let draggable = false;
        if (this.turn % 2 === 0 && playerNumber % 2 === 0) {
            draggable = true;
        }
        if (this.turn % 2 !== 0 && playerNumber % 2 !== 0) {
            draggable = true;
        }
        return h("div", { class: "player", "data-player": playerNumber }, availableRIngs.map(number => this.renderRing(number, draggable)));
    }
    render() {
        return (h(Host, { key: '049ead70783f1fb267d9762f05639ab03ab87dd0' }, h("div", { key: '10960cb802afe83acd465e579537dc302c2af712', class: "header" }), h("div", { key: '2a262e1c51548556bfa40d632f749b5f495ffd1b', class: "game" }, this.renderPLayer(1), this.renderBoard(), this.renderPLayer(2))));
    }
    static get is() { return "ring-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ring-component.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ring-component.css"]
        };
    }
    static get states() {
        return {
            "draggingItem": {},
            "gameBoard": {},
            "playItem": {},
            "turn": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "gameBoard",
                "methodName": "checkBoard"
            }];
    }
}
//# sourceMappingURL=ring-component.js.map
