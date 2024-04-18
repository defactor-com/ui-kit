import React from "react";
import { Tooltip as MuiTooltip, IconButton } from "@mui/material";

export interface ITooltip {
  icon: React.ReactElement | string;
  sizeIcon?: number;
  bgColor?: string;
  color?: string;
  text: string;
  position?: "top" | "left" | "bottom" | "right";
}

export const Tooltip: React.FC<ITooltip> = ({
  icon,
  sizeIcon = 16,
  color = "white",
  bgColor = "#26a66b",
  text,
  position = "top",
}) => {
  const getTooltipStyle = () => {
    return {
      backgroundColor: bgColor,
      color: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100px",
      height: "20px",
      fontSize: "13px",
    };
  };

  const getArrowStyle = () => {
    return {
      color: bgColor,
    };
  };

  return (
    <MuiTooltip
      title={text}
      arrow
      placement={position}
      componentsProps={{
        tooltip: {
          style: getTooltipStyle(),
        },
        arrow: {
          style: getArrowStyle(),
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
