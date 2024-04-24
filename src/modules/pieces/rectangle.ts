import { Piece, Position } from "./piece";

export class Rectangle implements Piece {

  constructor(public shape: number[][], public position: Position){
  }
}