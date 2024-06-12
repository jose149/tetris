import { Figure } from "./figure";
export interface FigureConfig{
    shape: Matrix;
    position:Position;
}
  
export type Matrix = (number | null)[][]
export type Position = { x: number; y: number };

export class Board {
  private currentBoardMatrix: Matrix;
  private currentFigure?: Figure = undefined

  constructor(height: number, width: number) {
      this.currentBoardMatrix = this.createEmptyMatrix(height, width);
  }

  get boardMatrix():Matrix{
    return this.currentBoardMatrix
  }

  public canPlaceFigure(figure: FigureConfig): boolean {
      // Logic to check if Tetromino can be placed on the grid
      return true;
  }

  public setFigure(figure:FigureConfig):void {
    this.currentFigure = new Figure(figure.shape, figure.position)
    this.currentBoardMatrix = this.addFigureToMatrix(this.currentFigure, this.currentBoardMatrix)
  }

  private createEmptyMatrix(rowsNumber:number, colsNumber:number):Matrix{
    return Array(rowsNumber).fill(Array(colsNumber).fill(0))
  }

  private addFigureToMatrix(figure:Figure, matrix: Matrix ): Matrix{
    const currentMatrix = matrix;

    for (let row = 0; row < figure.shape.length; row++) {
      for (let col = 0; col < figure.shape[0].length; col++) {
        currentMatrix[figure.position.y + row][
          figure.position.x + col
        ] = figure.shape[row][col];
      }
    }

    return currentMatrix
  }

  
}