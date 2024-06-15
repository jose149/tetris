import { useEffect, useState } from "react";
import { Board, FigureConfig } from "../../../../core/entities/board";
import "./appBoardStyle.scss";
import { fakeFigure1 } from "./fakeData";

export interface Size{
  height: number;
  width: number;
}

export default function AppBoard(size: Size) {
  const tetrisBoard = new Board(size.height, size.width)
  const [boardMatrix, setBoardMatrix] = useState(tetrisBoard.boardMatrix)

  useEffect(() => {
    const timeoutId = setTimeout(()=>{
      addFigure(fakeFigure1);
    }, 500);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this runs only once after the initial render
  
  function addFigure(figure:FigureConfig):void {
    tetrisBoard.addFigure(figure)
    setBoardMatrix(tetrisBoard.boardMatrix);
    setDropFigure()
  }

  function setDropFigure(){
    setTimeout(() => {
      tetrisBoard.dropCurrentFigure()
      
      setBoardMatrix(tetrisBoard.boardMatrix)

      if(tetrisBoard.figurePosition && tetrisBoard.figurePosition.y < (size.height - fakeFigure1.shape.length)){
        setDropFigure()
      }else{
        addFigure(fakeFigure1)
      }
    }, 500)
  }
  
  return (
    <>
      <div className="app-board">
        {
          boardMatrix.map((rowValue, rowIndex) => {
            return rowValue.map((colValue, colIndex) => {
              return (
                <div
                  className={`app-board-space${colValue ? " selected" : ""}`}
                  key={`${colIndex}${rowIndex}`}
                ></div>
              )
            } );
          })
        }
      </div>
    </>
  );
}
