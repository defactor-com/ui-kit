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
  subLabel1?: string | React.ReactElement;
  subLabel2?: string | React.ReactElement;
  optionalStyles?: React.CSSProperties;
  variant: "contained" | "outlined" | "text";
  fontSize?: number | string;
  fontWeight?: number | string;
  MaxHeight?: number | string;
  minBtnWidth?: number | string;
  minBtnHeight?: number | string;
  labelColor?: string
}
