import type { Piece, Position } from "../Figures/figure";

export class Square implemets Piece {

  constructor(position: Position){
    this = new Piece([[1,1,1,1]],position)
  }
}