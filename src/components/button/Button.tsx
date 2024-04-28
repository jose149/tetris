import { AppButtonConfig } from ".";
import { AppButtonColor } from "./button.model";

import "./Button.css";

export function AppButton(config: AppButtonConfig) {
  let buttonClassName = "button";

  switch (config.properties?.color) {
    case AppButtonColor.Primary:
      buttonClassName += " primary";
      break;
    case AppButtonColor.Secondary:
      buttonClassName += " secondary";
      break;
    case AppButtonColor.Tertiary:
      buttonClassName += " tertiary";
      break;
    case AppButtonColor.Light:
      buttonClassName += " light";
      break;
    case AppButtonColor.Dark:
      buttonClassName += " dark";
      break;
    default:
      buttonClassName += " primary";
      break;
  }

  switch (config.properties?.align) {
    case "left":
      buttonClassName += " left";
      break;
    case "center":
      buttonClassName += " center";
      break;
    case "right":
      buttonClassName += " right";
      break;
    default:
      buttonClassName += " center";
      break;
  }

  return (
    <button className={buttonClassName} onClick={config.onClick}>
      {config.text}
    </button>
  );
}
