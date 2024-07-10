import { IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";
import TooltipIcon from "../Icons/v2/tooltipIcon";

export interface CustomTooltipProps {
  tooltipText: string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({ tooltipText }) => {
  const theme = useTheme();

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
        <TooltipIcon color={theme.palette.grey[500]} />
      </IconButton>
    </Tooltip>
  );
};
