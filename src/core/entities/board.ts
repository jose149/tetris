import { Figure } from "./figure";

export class Board {
  width: number;
  height: number;
  grid: (number | null)[][];

  constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
      this.grid = Array.from({ length: height }, () => Array(width).fill(null));
  }

  canPlaceFigure(figure: Figure): boolean {
      // Logic to check if Tetromino can be placed on the grid
      return true;
  }

  placeFigure(figure: Figure): void {
      // Logic to place Tetromino on the grid
  }
}