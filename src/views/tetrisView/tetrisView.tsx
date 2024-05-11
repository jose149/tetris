import { useState } from "react";
import "./tetrisStyles.scss";
import { TetrisViewConfig } from "./tetrisViewModel";

export default function TetrisView() {
  const DEFAULT_BOARD = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
  ];

  const [currentBoard, setCurrentBoard] = useState(DEFAULT_BOARD);

  const defaultFigure1 = {
    space: [
      [1, 0],
      [1, 1],
    ],
    position: { row: 0, col: 1 },
  };

  const [currentFigure1, setCurrentFigure1] = useState(defaultFigure1);

  const defaultCells = currentBoard.map((row) =>
    row.map((col) => (
      <div className={`tetris-board-space ${col ? "selected" : ""}`}></div>
    )),
  );

  const [currentCells, setCurrentCells] = useState(defaultCells);

  function addFigure1ToExistingBoard() {
    const newBoard = DEFAULT_BOARD;
    for (let i = 0; i < currentFigure1.space.length; i++) {
      for (let j = 0; j < currentFigure1.space[0].length; j++) {
        newBoard[currentFigure1.position.row + i][
          currentFigure1.position.col + j
        ] = currentFigure1.space[i][j];
      }
    }
    setCurrentBoard(newBoard);
    const newCells = currentBoard.map((row) =>
      row.map((col) => (
        <div className={`tetris-board-space ${col ? "selected" : ""}`}></div>
      )),
    );
    setCurrentCells(newCells);
  }

  function dropFigure1() {
    const newFigure1 = currentFigure1;
    newFigure1.position.row = +1;

    console.log(newFigure1);

    setCurrentFigure1(newFigure1);
    addFigure1ToExistingBoard();
  }

  setTimeout(addFigure1ToExistingBoard, 1000);
  setTimeout(dropFigure1, 2000);

  return (
    <>
      <div className="tetris">
        <div className="tetris-board">{currentCells}</div>
      </div>
    </>
  );
}
