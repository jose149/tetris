import { GameState } from '../../core/entities/gameState';

export class WebPresenter {
    presentGameState(gameState: GameState): string {
        // Logic to convert game state to a presentable format
        return JSON.stringify(gameState);
    }
}