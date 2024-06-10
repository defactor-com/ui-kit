import React, { CSSProperties } from "react";

export interface INotification {
  icon?: React.ReactElement | string;
  activeIcon?: React.ReactElement | string;
  sizeIcon?: number;
  bgColor?: string;
  fontFamily?: string;
  color?: string;
  text: string;
  open?: boolean;
  isOpen?: boolean;
  position?: "top" | "left" | "bottom" | "right";
  handleChange: (newValue: boolean) => void;
}

export interface IUseNotification {
  icon?: React.ReactElement | string;
  activeIcon?: React.ReactElement | string;
}

export interface useNotificationData {
  visible: boolean;
  currentIcon?: string | React.ReactElement;
  anchorEl: HTMLElement | null;
}

export interface useNotificationCallbacks {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleHover: (value: boolean) => void;
}
