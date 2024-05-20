import { Piece, Position } from "./figure";

export class Rectangle implements Piece {

  constructor(public shape: number[][], public position: Position){
  }
}