export interface ITooltip {
  icon?: React.ReactElement | string;
  sizeIcon?: number;
  bgColor?: string;
  fontFamily?: string;
  color?: string;
  text: string;
  open?: boolean;
  position?: "top" | "left" | "bottom" | "right";
}
