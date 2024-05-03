import React from "react";
import { Tooltip as MuiTooltip, IconButton } from "@mui/material";

import { useTooltip } from "./useTooltipState";

export interface ITooltip {
  icon: React.ReactElement | string;
  sizeIcon?: number;
  bgColor?: string;
  fontFamily?: string;
  color?: string;
  text: string;
  open?: boolean;
  isOpen?: boolean;
  position?: "top" | "left" | "bottom" | "right";
  handleChange: (newValue: boolean) => void;
}

export const Tooltip: React.FC<ITooltip> = ({
  icon,
  sizeIcon = 16,
  color = "white",
  bgColor = "#26a66b",
  text,
  position = "top",
  fontFamily,
  open = false,
  isOpen,
  handleChange,
}) => {
  const { getTooltipStyle, getArrowStyle } = useTooltip();

  return (
    <MuiTooltip
      title={text}
      arrow
      open={isOpen || open}
      onMouseEnter={() => handleChange(true)}
      onMouseLeave={() => handleChange(false)}
      placement={position}
      componentsProps={{
        tooltip: {
          style: getTooltipStyle(bgColor, color, fontFamily),
        },
        arrow: {
          style: getArrowStyle(bgColor),
        },
      }}
    >
      <IconButton>
        {icon && typeof icon === "string" ? (
          <img src={icon} alt={text} width={sizeIcon} height={sizeIcon} />
        ) : (
          icon
        )}
      </IconButton>
    </MuiTooltip>
  );
};
