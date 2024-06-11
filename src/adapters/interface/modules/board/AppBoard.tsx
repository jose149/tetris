import { useState } from "react";
import "./appBoardStyle.scss";

interface Figure{
  space: number[][];
  position: {
    row: number;
     col: number;
  };
}

type Matrix = number[][]

export default function AppBoard() {
  const DEFAULT_BOARD_MATRIX = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
  ];

  const [currentBoardMatrix, setCurrentBoardMatrix] = useState(DEFAULT_BOARD_MATRIX);

  const defaultFigure1 = {
    space: [
      [1, 0],
      [1, 1],
    ],
    position: { row: 0, col: 1 },
  };

  const [currentFigure1, setCurrentFigure] = useState(defaultFigure1);

  const defaultCells = parseMatrixToHTMLElements(currentBoardMatrix)

  function parseMatrixToHTMLElements(matrix: Matrix):JSX.Element[][]{
    return matrix.map((rowValue, rowIndex) => {
      return rowValue.map((colValue, colIndex) => {
        console.log('row: ',rowIndex, 'col: ', colIndex);
        return (
          <div
            className={`app-board-space${colValue ? " selected" : ""}`}
            key={`${colIndex}${rowIndex}`}
          ></div>
        )
      } );
    });
  }
  console.log('defaultCells: ', defaultCells)

  const [currentCells, setCurrentCells] = useState(defaultCells);

  function addFigureToBoardMatrix(figure:Figure, matrix: Matrix ): Matrix{
    const currentMatrix = matrix;

    for (let row = 0; row < figure.space.length; row++) {
      for (let col = 0; col < figure.space[0].length; col++) {
        currentMatrix[figure.position.row + row][
          figure.position.col + col
        ] = figure.space[row][col];
      }
    }

    return currentMatrix
  }

  function addFigure1ToExistingBoard() {
    const newBoardMatrix = addFigureToBoardMatrix(currentFigure1, DEFAULT_BOARD_MATRIX)
    setCurrentBoardMatrix(newBoardMatrix);
    setCurrentCells(parseMatrixToHTMLElements(currentBoardMatrix))
  }

  // function dropFigure1() {
  //   const newFigure1 = currentFigure1;
  //   newFigure1.position.row = +1;

  //   setCurrentFigure1(newFigure1);
  //   addFigure1ToExistingBoard();
  // }

  // setTimeout(addFigure1ToExistingBoard, 3000);
  // setTimeout(dropFigure1, 2000);

  return (
    <>
      <div className="app-board">{currentCells}</div>
    </>
  );
}
