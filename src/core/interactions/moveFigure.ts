import { GameState } from '../entities/gameState';

export class MoveFigure {
    gameState: GameState;

    constructor(gameState: GameState) {
        this.gameState = gameState;
    }

    execute(direction: 'left' | 'right' | 'down'): void {
        // Logic to move tetromino
    }
}