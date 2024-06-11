import { GameState } from '../core/entities/gameState';
import { MoveFigure } from '../core/interactions/moveFigure';
import { RotateTetromino } from '../core/interactions/rotateFigure';
import { WebPresenter } from '../adapters/interface/webPresenter';

export const createApplication = () => {
    const gameState = new GameState();
    const moveTetromino = new MoveFigure(gameState);
    const rotateTetromino = new RotateTetromino(gameState);
    const presenter = new WebPresenter();

    return { gameState, moveTetromino, rotateTetromino, presenter };
};