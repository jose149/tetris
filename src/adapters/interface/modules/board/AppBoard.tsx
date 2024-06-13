import { useEffect, useState } from "react";
import { Board, FigureConfig } from "../../../../core/entities/board";
import "./appBoardStyle.scss";

export interface Size{
  height: number;
  width: number;
}

export default function AppBoard(size: Size) {
  const currentBoard = new Board(size.height,size.width)
  const [currentBoardMatrix, setCurrentBoardMatrix] = useState(printBoardMatrix());

  useEffect(() => {
    const timeoutId = setTimeout(setFigure, 3000);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this runs only once after the initial render

  
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

  return (
    <>
      <div className="app-board">{currentBoardMatrix}</div>
    </>
  );
}
