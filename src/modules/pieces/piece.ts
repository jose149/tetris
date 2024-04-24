export interface Position{
  x: number;
  y: number;
}

export interface Piece {
  shape: number[][];
  position: Position;
}