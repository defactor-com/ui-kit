import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/system";

export interface AreaChartV3Props {
  text?: string;
  sx?: SxProps<Theme>;
  padding?: number | string;
  margin?: number | string;
  backgroundColor?: string;
  borderRadius?: number | string;
}

export const AreaChartV3: React.FC<AreaChartV3Props> = ({
  text = "Demo text",
  sx,
  padding = 2,
  margin = 1,
  backgroundColor = "white",
  borderRadius = 1,
}) => {
  return (
    <Box
      sx={{
        padding,
        margin,
        backgroundColor,
        borderRadius,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        ...sx,
      }}
    >
      {text}
    </Box>
  );
};
