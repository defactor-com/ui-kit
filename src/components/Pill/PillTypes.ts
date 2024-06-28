import React from "react";

export interface IPill {
  label: string | React.ReactElement;
  color: string;
  bgColor: string;
  fontFamily?: string;
  optionalStyles?: React.CSSProperties;
  externalStyles?: string;
  customBorder?: string;
}
