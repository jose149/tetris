import { AppButtonConfig } from "../../components/button";
import { AppButton } from "../../components/button/Button";
import {
  AppEventType,
  PlayMenuConfig,
  ChangeViewEvent,
  TetrioView,
} from "../../app.model";
import "./playMenuView.css";

export default function PlayMenu(props: PlayMenuConfig) {
  const openTetrioEvent: ChangeViewEvent = {
    eventType: AppEventType.ChangeView,
    view: TetrioView.Game,
  };

  const openBannerEvent: ChangeViewEvent = {
    eventType: AppEventType.ChangeView,
    view: TetrioView.Banner,
  };

  const bannerButtons: AppButtonConfig[] = [
    { text: "1P Solo", onClick: () => props.onChangeView(openTetrioEvent) },
    {
      text: "MP Multiplayer",
      onClick: () => props.onChangeView(openBannerEvent),
    },
    {
      text: "Tetra channel",
      onClick: () => props.onChangeView(openBannerEvent),
    },
    { text: "Config", onClick: () => props.onChangeView(openBannerEvent) },
    {
      text: "Back to banner",
      onClick: () => props.onChangeView(openBannerEvent),
    },
  ];

  const listItems = bannerButtons.map((button) => (
    <li key={button.text} className="banner-list-item">
      <AppButton
        onClick={button.onClick}
        text={button.text}
        properties={{ align: "left" }}
      ></AppButton>
    </li>
  ));

  return (
    <div className="play-menu">
      <h2>{"Play Menu"}</h2>
      <ul className="banner-list">{listItems}</ul>
    </div>
  );
}
