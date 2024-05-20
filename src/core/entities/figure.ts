export class Figure {
  shape: number[][];
  position: { x: number; y: number };

  constructor(shape: number[][], position: { x: number; y: number }) {
      this.shape = shape;
      this.position = position;
  }
}