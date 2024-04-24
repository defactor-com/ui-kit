import { CSSProperties } from "react";

interface useTooltipState {
  getTooltipStyle: (
    bgColor: string,
    color: string,
    fontFamily?: string
  ) => CSSProperties | undefined;
  getArrowStyle: (bgColor: string) => CSSProperties | undefined;
}

export const useTooltip = (): useTooltipState => {
  const getTooltipStyle = (
    bgColor: string,
    color: string,
    fontFamily?: string
  ) => {
    return {
      backgroundColor: bgColor,
      fontFamily: fontFamily,
      color: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100px",
      height: "20px",
      fontSize: "13px",
    };
  };

  const getArrowStyle = (bgColor: string) => {
    return {
      color: bgColor,
    };
  };

  return {
    getTooltipStyle,
    getArrowStyle,
  };
};
