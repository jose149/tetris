import { Coordinates } from "../square/square";

export class Rectangle {
  public center:Coordinates;

  constructor(public height:number, public width:number, public position: Coordinates){
    this.center = {x: Math.round(width/2), y:Math.round(width/2)}
    this.position = position
  }

  public async drop():Promise<void>{
    setTimeout( () => this.translate(0,1), 500)
  }

  public translate(x:number, y:number): void{
    this.position.x += x;
    this.position.y += y;
  }
}