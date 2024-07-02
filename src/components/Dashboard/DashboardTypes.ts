import React from "react";
import { ITooltip } from "../Tooltip/TooltipTypes";

export type CardItem = {
  label: string;
  color?: string;
  fontFamily?: string;
  fluctuation?: string;
  value: number | string;
  externalStyles?: string;
  hoverBehavior?: boolean;
  fluctuationValue?: string;
  optionalStyles?: React.CSSProperties;
  infoTooltip?: Omit<ITooltip, "handleChange">;
};

export type IDashboard = {
  colors: string[];
  currency: string;
  rightLabel: string;
  fontFamily?: string;
  bottomLabel: string;
  titleGraphic: string;
  content: React.ReactNode;
  rightContainerItems: CardItem[];
  bottomContainerItems: CardItem[];
  totalValueLocked: number | string;
  multichainSelector?: React.ReactNode;
  rightIcon?: React.ReactElement | string;
  bottomIcon?: React.ReactElement | string;
  currencyIcon?: React.ReactElement | string;
};

export interface IHeaderContainer {
  icon?: React.ReactElement | string;
  bottomContainerItems: CardItem[];
  bottomLabel: string;
  fontFamily?: string;
  colors: string[];
}

export interface IRightContainer {
  icon?: React.ReactElement | string;
  rightContainerItems: CardItem[];
  fontFamily?: string;
  rightLabel: string;
}
