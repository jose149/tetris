import { Matrix, Position } from "./board";

export class Figure {
  public shape: Matrix;
  public currentPosition: Position;

  constructor(shape: Matrix, position: Position) {
      this.shape = shape;
      this.currentPosition = position;
  }

  get shapeMatrix(): Matrix{
    return this.shape;
  }

  get position(): Position{
    return this.currentPosition;
  }

  // function dropFigure1() {
  //   const newFigure1 = currentFigure1;
  //   newFigure1.position.row = +1;

  //   setCurrentFigure1(newFigure1);
  //   addFigure1ToExistingBoard();
  // }
}