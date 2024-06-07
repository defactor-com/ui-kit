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

export interface useNotificationCallbacks {
  getTooltipStyle: (
    bgColor: string,
    color: string,
    fontFamily?: string
  ) => CSSProperties;
  getArrowStyle: (bgColor: string) => CSSProperties | undefined;
}
