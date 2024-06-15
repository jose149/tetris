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
  private boardMatrixSnapshot: Matrix;

  constructor(private height: number, private width: number) {
      this.currentBoardMatrix = this.createEmptyMatrix(height, width);
      this.boardMatrixSnapshot = this.currentBoardMatrix;
  }

  get boardMatrix():Matrix{
    return this.currentBoardMatrix
  }

  get figurePosition():Position | undefined{
    return this.currentFigure?.position
  }

  // public canPlaceFigure(figure: FigureConfig): boolean {
  //     // Logic to check if Tetromino can be placed on the grid
  //     return true;
  // }

  public addFigure(figure:FigureConfig):void {
    this.boardMatrixSnapshot = this.currentBoardMatrix;
    this.currentFigure = new Figure(figure.shape, figure.position)
    this.currentBoardMatrix = this.addFigureToBoard(this.currentFigure)
  }

  public dropCurrentFigure(): void {
    if(!this.currentFigure){
      return
    }
    this.currentFigure.drop()
    this.currentBoardMatrix = this.addFigureToBoard(this.currentFigure)
  }

  private createEmptyMatrix(rowsNumber:number, colsNumber:number):Matrix{
    return Array(rowsNumber).fill(Array(colsNumber).fill(null))
  }

  private addFigureToBoard(figure: Figure): Matrix {
    const currentMatrix = this.boardMatrixSnapshot.map(row => [...row]);

    for (let row = 0; row < figure.shape.length; row++) {
      for (let col = 0; col < figure.shape[0].length; col++) {
        const iteratedCol = figure.position.x + col
        const iteratedRow = figure.position.y + row

        currentMatrix[iteratedRow][
          iteratedCol
        ] = figure.shape[row][col]? 1: null;

      }
    }
    
    return currentMatrix
  }
}