import { ITooltip } from "../Tooltip/TooltipTypes";

export type CardItem = {
  label: string;
  value: number | string;
  fluctuation?: string;
  fluctuationValue?: string;
  color?: string;
  infoTooltip?: Omit<ITooltip, "handleChange">;
  hoverBehavior?: boolean;
};

export type IDashboard = {
  content: React.ReactNode;
  colors: string[];
  currency: string;
  fontFamily?: string;
  rightLabel: string;
  titleGraphic: string;
  totalValueLocked: number | string;
  bottomLabel: string;
  bottomContainerItems: CardItem[];
  rightContainerItems: CardItem[];
};
