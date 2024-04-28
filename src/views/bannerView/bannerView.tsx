import {
  AppEventType,
  BannerConfig,
  ChangeViewEvent,
  TetrioView,
} from "../../app.model";
import { AppButtonConfig } from "../../components/button";
import { AppButton } from "../../components/button/Button";
import "./bannerView.css";

export default function BannerView(props: BannerConfig) {
  function openPlayMenu(): void {
    alert("open game menu");
  }

  const openPlayMenuDataEvent: ChangeViewEvent = {
    eventType: AppEventType.ChangeView,
    view: TetrioView.PlayMenu,
  };

  const openGameDataEvent: ChangeViewEvent = {
    eventType: AppEventType.ChangeView,
    view: TetrioView.Game,
  };

  const bannerButtons: AppButtonConfig[] = [
    {
      text: "Start",
      onClick: () => props.onHandleAppEvent(openPlayMenuDataEvent),
    },
    {
      text: "Back to banner",
      onClick: () => props.onHandleAppEvent(openGameDataEvent),
    },
  ];

  const listItems = bannerButtons.map((button) => (
    <li key={button.text} className="banner-list-item">
      <AppButton onClick={button.onClick} text={button.text}></AppButton>
    </li>
  ));

  return (
    <div className="banner">
      <h1>{"Tetrio"}</h1>
      <ul className="banner-list">{listItems}</ul>
    </div>
  );
}
