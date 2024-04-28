import BannerView from "./views/bannerView/BannerView";
import PlayMenu from "./views/playMenu/PlayMenu";
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
        return <BannerView onHandleAppEvent={onHandleAppEvent} />;
      case TetrioView.PlayMenu:
        return <PlayMenu />;
      case TetrioView.Game:
        return <BannerView onHandleAppEvent={onHandleAppEvent} />;

      default:
        break;
    }
  }
  return (
    <>
      {CurrentView(currentView)}
      {/* <TetrisView/> */}
    </>
  );
}

export default App;
