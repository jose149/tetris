import { Matrix, Position } from "./board";

export class Figure {
  private currentShape: Matrix;
  private currentPosition: Position;

  constructor(shape: Matrix, position: Position) {
      this.currentShape = shape;
      this.currentPosition = position;
  }

  get shape(): Matrix{
    return this.currentShape;
  }

  get position(): Position{
    return this.currentPosition;
  }

  public drop():void {
    this.currentPosition.y = this.currentPosition.y + 1;
    // setCurrentFigure1(newFigure1);
    // addFigure1ToExistingBoard();
  }
}