import React from "react";
import { ITooltip } from "../Tooltip/TooltipTypes";

type OmitMultiple<T, K extends keyof T> = T extends any ? Omit<T, K> : never;
export interface ICardComponent {
  label: string;
  value: number | string;
  fluctuation?: string;
  fluctuationValue?: string;
  color?: string;
  fontFamily?: string;
  externalStyles?: string;
  optionalStyles?: React.CSSProperties;
  hoverBehavior?: boolean;
  infoTooltip?: OmitMultiple<ITooltip, "handleChange">;
}
