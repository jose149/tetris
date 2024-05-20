export interface AppButtonConfig{
  text: string;
  onClick: () => void
  properties?: AppButtonProperties;
  state?: AppButtonState;
}

export interface AppButtonProperties{
  align?: 'left' | 'center' | 'right';
  size?: AppButtonSize;
  color?: AppButtonColor;
  rounded?: boolean
}

export interface AppButtonSize{
  height: number;
  width: number;
}

export enum AppButtonColor {
  Primary = 'primary', 
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Light = 'light',
  Dark = 'dark'
};

export enum AppButtonState{
  Active = 'active',
  Loading = 'loading',
  Disabled = 'disabled'
}