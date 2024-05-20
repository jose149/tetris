import { GameState } from '../core/entities/gameState';
import { MoveTetromino } from '../core/interactions/moveFigure';
import { RotateTetromino } from '../core/interactions/rotateFigure';
import { WebPresenter } from '../adapters/interface/webPresenter';

export const createApplication = () => {
    const gameState = new GameState();
    const moveTetromino = new MoveTetromino(gameState);
    const rotateTetromino = new RotateTetromino(gameState);
    const presenter = new WebPresenter();

    return { gameState, moveTetromino, rotateTetromino, presenter };
};