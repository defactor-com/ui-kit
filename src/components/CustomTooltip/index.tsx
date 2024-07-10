import React from "react";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import TooltipIcon from "../Icons/v2/tooltipIcon";

export interface CustomTooltipProps {
  tooltipText?: string;
  iconColor?: string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  tooltipText = "Required Tooltip Text.", 
  iconColor,
}) => {
  const theme = useTheme();
  const defaultColor = iconColor || theme.palette.grey[500]; 

  return (
    <Tooltip
      title={tooltipText}
      placement="top"
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: theme.palette.primary.main,
            "& .MuiTooltip-arrow": {
              color: theme.palette.primary.main,
            },
          },
        },
      }}
    >
      <IconButton>
        <TooltipIcon color={defaultColor} />
      </IconButton>
    </Tooltip>
  );
};

export default CustomTooltip; 
