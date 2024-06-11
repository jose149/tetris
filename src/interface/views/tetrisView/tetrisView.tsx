import "./tetrisStyles.scss";
import AppBoard from "../../../adapters/interface/modules/board/AppBoard";

export default function TetrisView() {
  return (
    <>
      <div className="tetris">
        <AppBoard />
      </div>
    </>
  );
}
