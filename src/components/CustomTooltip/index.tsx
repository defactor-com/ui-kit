import React from "react";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import TooltipIcon from "../Icons/v2/tooltipIcon";
import themes from "../../themes";

export interface CustomTooltipProps {
  tooltipText?: string;
  iconColor?: string;
}

const theme = themes.lightTheme;

export const CustomTooltip: React.FC<CustomTooltipProps> = ({

  tooltipText = "This is a default tooltip", 
  iconColor = '#A8B0B6', //temporarily until the designer updates
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
