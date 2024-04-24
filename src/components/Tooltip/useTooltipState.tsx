import { CSSProperties } from "react";

interface useTooltipState {
  getTooltipStyle: (
    bgColor: string,
    color: string,
    fontFamily?: string
  ) => CSSProperties;
  getArrowStyle: (bgColor: string) => CSSProperties | undefined;
}

export const useTooltip = (): useTooltipState => {
  const getTooltipStyle = (
    bgColor: string,
    color: string,
    fontFamily?: string
  ): CSSProperties => {
    return {
      backgroundColor: bgColor,
      fontFamily: fontFamily,
      color: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "120px",
      height: "auto",
      overflowWrap: "anywhere",
      padding: "8px",
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
