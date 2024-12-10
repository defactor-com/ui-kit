import { ReactElement } from "react";

type OptionLanguage = {
  id: string;
  flag: string;
};

export interface ILanguageSelector {
  router: any;
  pathname: any;
  locale: string;
  icon?: string | ReactElement;
  bgColor?: string;
  options: OptionLanguage[];
  t: any;
}

export interface ILanguageSelectorState {
  router: any;
  pathname: any;
  icon: string | ReactElement;
}

export type LanguageData = {
  isOpen: boolean;
  visible: boolean;
  anchorEl: HTMLElement | null;
  currentIcon?: string | React.ReactElement;
};

export type LanguageIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

export type LanguageCallbacks = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: (lng: string | null) => void;
  handleHover: (value: boolean) => void;
};
