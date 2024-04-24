export class GameBoard{
  public shape:number[][]

  constructor(rows:number, cols:number){
    this.shape = this.createShapeMatrix(rows, cols)
  }

  private createShapeMatrix(rows:number, cols:number):number[][]{
    const matrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < cols; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
  }
}