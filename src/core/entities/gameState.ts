import { Board } from './board';
import { Figure } from './figure';

export class GameState {
    board: Board;
    currentFigure: Figure | null;
    score: number;
    gameOver: boolean;

    constructor() {
        this.board = new Board(10, 20);
        this.currentFigure = null;
        this.score = 0;
        this.gameOver = false;
    }
}