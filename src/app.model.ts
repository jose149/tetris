export enum TetrioView{
  Banner = 'banner',
  PlayMenu = 'playMenu',
  Game = 'game'
}

export interface BannerConfig{
  onHandleAppEvent: (action: AppEvents) => void
}

export enum AppEventType {
  ChangeView = "changeView",
}

export interface ChangeViewEvent {
  eventType: AppEventType.ChangeView;
  view: TetrioView;
}

export type AppEvents = ChangeViewEvent;

