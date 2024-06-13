import AppBoard from "../../../adapters/interface/modules/board/AppBoard";
import "./tetrisStyles.scss";

export default function TetrisView() {
  return (
    <>
      <div className="tetris">
        <AppBoard height={6} width={4}/>
      </div>
    </>
  );
}
