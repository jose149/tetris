import { AppButtonConfig } from "../../libraries/components/button";
import { AppButton } from "../../libraries/components/button/Button";
import {
  AppEventType,
  PlayMenuConfig,
  ChangeViewEvent,
  TetrioView,
} from "../../../app.model";
import "./playMenuView.css";

export default function PlayMenu(props: PlayMenuConfig) {
  const openTetrioEvent: ChangeViewEvent = {
    eventType: AppEventType.ChangeView,
    view: TetrioView.Game,
  };

  // const openBannerEvent: ChangeViewEvent = {
  //   eventType: AppEventType.ChangeView,
  //   view: TetrioView.Menu,
  // };

  const bannerButtons: AppButtonConfig[] = [
    { text: "1P Solo", onClick: () => props.onChangeView(openTetrioEvent) },
    {
      text: "MP Multiplayer",
      onClick: () => {},
    },
    {
      text: "Tetra channel",
      onClick: () => {},
    },
    { text: "Config", onClick: () => {} },
    {
      text: "Back to banner",
      onClick: () => {},
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
