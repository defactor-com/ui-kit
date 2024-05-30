import React from "react";
import { ITooltip } from "../Tooltip/TooltipTypes";

export type CardItem = {
  label: string;
  value: number | string;
  fluctuation?: string;
  fluctuationValue?: string;
  color?: string;
  fontFamily?: string;
  externalStyles?: string;
  hoverBehavior?: boolean;
  infoTooltip?: Omit<ITooltip, "handleChange">;
};

export type IDashboard = {
  colors: string[];
  currency: string;
  currencyIcon?: React.ReactElement | string;
  rightLabel: string;
  fontFamily?: string;
  bottomLabel: string;
  titleGraphic: string;
  content: React.ReactNode;
  rightContainerItems: CardItem[];
  bottomContainerItems: CardItem[];
  totalValueLocked: number | string;
  rightIcon?: React.ReactElement | string;
  bottomIcon?: React.ReactElement | string;
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
