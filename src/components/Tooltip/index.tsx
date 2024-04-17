import React from "react";
import { Tooltip as MuiTooltip, IconButton } from "@mui/material";

export interface ITooltip {
  icon: React.ReactElement | string;
  sizeIcon?: number;
  style: "white" | "green";
  text: string;
  position: "top" | "left" | "bottom" | "right";
}

export const Tooltip: React.FC<ITooltip> = ({
  icon,
  sizeIcon = 16,
  style = "green",
  text,
  position = "top",
}) => {
  return (
    <MuiTooltip
      title={text}
      arrow
      placement={position}
      classes={{
        tooltip: style === "green" ? "popper" : "popperWhite",
        arrow: style === "green" ? "popper" : "popperWhite",
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
