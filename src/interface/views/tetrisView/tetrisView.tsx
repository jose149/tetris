import AppBoard from "../../../adapters/interface/modules/board/AppBoard";
import "./tetrisStyles.scss";

export default function TetrisView() {
  console.log('onCreate TretrisView')
  return (
    <>
      <div className="tetris">
        <AppBoard height={6} width={4}/>
      </div>
    </>
  );
}
