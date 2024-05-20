export enum TetrioView{
  Menu = 'menu',
  Game = 'game',
  ConfigurationMenu = 'configurationMenu',
}

export interface BannerConfig{
  onChangeView: (action: ChangeViewEvent) => void
}

export interface PlayMenuConfig{
  onChangeView: (action: ChangeViewEvent) => void
}

export enum AppEventType {
  ChangeView = "changeView",
}

export interface ChangeViewEvent {
  eventType: AppEventType.ChangeView;
  view: TetrioView;
}

export type AppEvents = ChangeViewEvent;

