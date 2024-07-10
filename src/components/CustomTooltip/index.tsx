import React from "react";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import TooltipIcon from "../Icons/v2/tooltipIcon"; // Adjust the import path as needed

export interface CustomTooltipProps {
  tooltipText?: string;
  iconColor?: string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  tooltipText = "", // Default text to empty string
  iconColor = "#A8B0B6" //Temporarily until the designer updates the palette
}) => {
  const theme = useTheme();
  const defaultColor = iconColor || "#A8B0B6"; //Temporarily until the designer updates the palette

  if (tooltipText === "") {
    return (
    <></>
    );
  }

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
      <IconButton sx={{py: 0}}>
        <TooltipIcon color={defaultColor} />
      </IconButton>
    </Tooltip>
  );
};
