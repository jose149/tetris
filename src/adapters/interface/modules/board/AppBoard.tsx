import { useEffect, useState } from "react";
import { Board, FigureConfig, Matrix } from "../../../../core/entities/board";
import "./appBoardStyle.scss";

export interface Size{
  height: number;
  width: number;
}

export default function AppBoard(size: Size) {
  const [tetrisBoard] = useState(new Board(size.height,size.width))
  const [boardMatrix, setBoardMatrix] = useState(tetrisBoard.boardMatrix);
  const [printedTetrisBoard, setPrintedTetrisBoard] = useState<JSX.Element[][]>()

  useEffect(() => {
    console.log('useEffect')
    const timeoutId = setTimeout(()=>{
      setFigure();
      setBoardMatrix(tetrisBoard.boardMatrix);
    }, 500);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this runs only once after the initial render

  useEffect(() => {
    console.log('tetrisBoard.boardMatrix triggered: ', tetrisBoard.boardMatrix)
    setPrintedTetrisBoard(printBoardMatrix(boardMatrix))
  }, [boardMatrix]); 
  
  function printBoardMatrix(matrix:Matrix):JSX.Element[][]{
    return matrix.map((rowValue, rowIndex) => {
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
    tetrisBoard.setFigure(figure1)
    setDropFigure()
  }

  function setDropFigure(){
    setTimeout(() => {
      tetrisBoard.dropCurrentFigure()
      console.log('figurePosition: ', tetrisBoard.figurePosition)
      
      setBoardMatrix(tetrisBoard.boardMatrix)

      if(tetrisBoard.figurePosition && tetrisBoard.figurePosition.y < (size.height - 2)){
        setDropFigure()
      }
    }, 500)
  }

  return (
    <>
      <div className="app-board">{printedTetrisBoard}</div>
    </>
  );
}
