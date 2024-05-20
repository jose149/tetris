export interface IMoveFigure{
  execute(direction: 'left' | 'right' | 'down'): void;
}

export interface IRotateFigure {
  execute(): void;
}