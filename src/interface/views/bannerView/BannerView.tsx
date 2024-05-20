import {
  AppEventType,
  BannerConfig,
  ChangeViewEvent,
  TetrioView,
} from "../../../app.model";
import { AppButtonConfig } from "../../libraries/components/button";
import { AppButton } from "../../libraries/components/button/Button";
import "./bannerView.css";

export default function BannerView(props: BannerConfig) {
  const openPlayMenuDataEvent: ChangeViewEvent = {
    eventType: AppEventType.ChangeView,
    view: TetrioView.PlayMenu,
  };

  const bannerButtons: AppButtonConfig[] = [
    {
      text: "Start",
      onClick: () => props.onChangeView(openPlayMenuDataEvent),
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
