import { ReactElement } from "react";

export type OptionLanguage = {
  id: string;
  flag: React.ElementType;
};

export interface ILanguageSelector {
  router: any;
  pathname: any;
  locale: string;
  icon?: ReactElement;
  bgColor?: string;
  options: OptionLanguage[];
  t: (key: string, options?: any) => string;
}

export interface ILanguageSelectorState {
  router: any;
  pathname: any;
  icon: ReactElement;
}

export type LanguageData = {
  isOpen: boolean;
  visible: boolean;
  anchorEl: HTMLElement | null;
  currentIcon?: React.ReactElement;
};

export type LanguageCallbacks = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose: (lng: string | null) => void;
  handleHover: (value: boolean) => void;
};
