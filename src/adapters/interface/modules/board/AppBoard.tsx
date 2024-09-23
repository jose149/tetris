import { useState } from "react";
import { Board, FigureConfig } from "../../../../core/entities/board";
import "./appBoardStyle.scss";
import { fakeFigure1 } from "./fakeData";

export interface Size{
  height: number;
  width: number;
}

export default function AppBoard(size: Size) {
  const [board, setBoard] = useState(new Board(size.height, size.width))
  const [figureCount, setFigureCount] = useState(0)
  console.log('onCreate AppBoard')
  console.log('figureCount: ',figureCount)
  console.log('board: ',board)
  console.log('check GitHub repository')

  console.log('figurePosition: ',board.figurePosition)

  if(!board.figurePosition){
    console.log('onCreate setTimeout addFigure')
    setTimeout(()=>{
      setFigureCount(figureCount+1);
      addFigure(fakeFigure1);
    }, 500);
  }else{
    console.log('onCreate setTimeout drop: ', board.figurePosition.y < (size.height - fakeFigure1.shape.length))
    if(board.figurePosition.y < (size.height - fakeFigure1.shape.length)){
      setDropFigure()
    }
  }

  // useEffect(() => {
  //   console.log('useEffect')
  //   const timeoutId = setTimeout(()=>{
  //     console.log('useEffect setTimeout')
  //     setFigureCount(figureCount+1);
  //     addFigure(fakeFigure1);
  //   }, 500);

  //   // Clean up the timeout if the component unmounts
  //   return () => clearTimeout(timeoutId);
  // }, []); // Empty dependency array ensures this runs only once after the initial render
  
  function addFigure(figure:FigureConfig):void {
    const currentBoard = board
    console.log('addFigure')
    currentBoard.addFigure(figure)
    setBoard(currentBoard);
  }

  function setDropFigure(){
    setTimeout(() => {
      const currentBoard = board;
      currentBoard.dropCurrentFigure();
      console.log(currentBoard.figurePosition);
      
      setBoard(currentBoard);
    }, 500)
  }
  
  return (
    <>
      <div className="app-board">
        {
          board.boardMatrix.map((rowValue, rowIndex) => {
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
