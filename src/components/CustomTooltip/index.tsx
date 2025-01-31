import React from "react";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import TooltipIcon from "../Icons/v2/tooltipIcon";

export interface CustomTooltipProps {
  tooltipText?: string;
  iconColor?: string;
  tooltipBgColor?: string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  tooltipText = "",
  iconColor,
  tooltipBgColor
}) => {
  const theme = useTheme();
  const defaultColor = iconColor || theme.palette.grey[500];

  if (tooltipText === "") {
    return <></>;
  }

  return (
    <Tooltip
      title={tooltipText}
      placement="top"
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: tooltipBgColor || theme.palette.primary.main,
            "& .MuiTooltip-arrow": {
              color: tooltipBgColor || theme.palette.primary.main,
            },
          },
        },
      }}
    >
      <IconButton sx={{ p: 0, mx: 0.5 }}>
        <TooltipIcon color={defaultColor} />
      </IconButton>
    </Tooltip>
  );
};
