import { AppButtonConfig } from "../../components/button";
import { AppButton } from "../../components/button/Button";
import "./playMenu.css";

export default function PlayMenu() {
  function openPlayMenu(): void {
    alert("open game menu");
  }

  const bannerButtons: AppButtonConfig[] = [
    { text: "1P Solo", onClick: openPlayMenu },
    { text: "MP Multiplayer", onClick: openPlayMenu },
    { text: "Tetra channel", onClick: openPlayMenu },
    { text: "Config", onClick: openPlayMenu },
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
