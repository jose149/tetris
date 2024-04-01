export interface Coordinates{
  x: number;
  y: number;
}
export class square {

  constructor(public side:number, public position: Coordinates){
  }

  public translate(x:number, y:number): void{
    this.position.x += x;
    this.position.y += y;
  }
}