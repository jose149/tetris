import { useState } from "react";
import { Board, FigureConfig } from "../../../../core/entities/board";
import "./appBoardStyle.scss";



export default function AppBoard() {
  const currentBoard = new Board(6,4)
  const [currentBoardMatrix, setCurrentBoardMatrix] = useState(printBoardMatrix());
  
  function printBoardMatrix():JSX.Element[][]{
    return currentBoard.boardMatrix.map((rowValue, rowIndex) => {
      return rowValue.map((colValue, colIndex) => {
        return (
          <div
            className={`app-board-space${colValue ? " selected" : ""}`}
            key={`${colIndex}${rowIndex}`}
          ></div>
        )
      } );
    });
  }

  function createFigure1(): FigureConfig{
    return {
      shape: [
        [1, 0],
        [1, 1],
      ],
      position: { y: 0, x: 1 },
    };
  }

  function setFigure():void {
    const figure1 = createFigure1()
    currentBoard.setFigure(figure1)
    setCurrentBoardMatrix(printBoardMatrix())
  }

  setTimeout(setFigure, 3000);

  return (
    <>
      <div className="app-board">{currentBoardMatrix}</div>
    </>
  );
}
