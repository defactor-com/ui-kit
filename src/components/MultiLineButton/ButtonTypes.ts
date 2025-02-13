import React from "react";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
  bgColor?: string;
  disabled?: boolean;
  fontFamily?: string;
  fullWidth?: boolean;
  borderColor?: string;
  externalStyles?: string;
  loader?: React.ReactElement;
  icon?: React.ReactElement | string;
  label?: string | React.ReactElement;
  subLabel?: string | React.ReactElement;
  optionalStyles?: React.CSSProperties;
  variant: "contained" | "outlined" | "text";
  fontSize?: number | string;
  height?: string | number;
  fontWeight?: number | string;
  MaxHeight?: number | string;
  minBtnWidth?: number | string;
  minBtnHeight?: number | string;
  labelColor?: string
}
