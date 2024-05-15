import { ITooltip } from "../Tooltip/TooltipTypes";

export interface ICardComponent {
  label: string;
  value: number | string;
  fluctuation?: string;
  fluctuationValue?: string;
  color?: string;
  fontFamily?: string;
  externalStyles?: string;
  hoverBehavior?: boolean;
  infoTooltip?: Omit<ITooltip, "handleChange">;
}
