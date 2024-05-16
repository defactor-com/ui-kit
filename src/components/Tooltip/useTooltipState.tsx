import { CSSProperties } from "react";

import { useTooltipCallbacks } from "./TooltipTypes";

export const useTooltip = (): useTooltipCallbacks => {
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
      maxWidth: "220px",
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
