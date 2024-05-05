import BannerView from "./views/bannerView/BannerView";
import PlayMenuView from "./views/playMenuView/PlayMenuView";
import TetrisView from "./views/tetrisView/tetrisView";
import "./App.css";
import { AppEventType, AppEvents, TetrioView } from "./app.model";
import { useState } from "react";

const DEFAULT_VIEW = TetrioView.Banner;

function App() {
  const [currentView, setCurrentView] = useState(DEFAULT_VIEW);

  function changeView(view: TetrioView): void {
    setCurrentView(view);
    return;
  }

  function onHandleAppEvent(action: AppEvents): void {
    switch (action.eventType) {
      case AppEventType.ChangeView:
        changeView(action.view);
        break;

      default:
        break;
    }
  }

  function CurrentView(currentView: TetrioView) {
    switch (currentView) {
      case TetrioView.Banner:
        return <BannerView onChangeView={onHandleAppEvent} />;
      case TetrioView.PlayMenu:
        return <PlayMenuView onChangeView={onHandleAppEvent} />;
      case TetrioView.Game:
        return <TetrisView />;

      default:
        break;
    }
  }
  return <>{CurrentView(currentView)}</>;
}

export default App;
