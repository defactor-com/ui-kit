import clsx from "clsx";
import React from "react";
import { Box } from "@mui/material";

import { IFlatContainer } from "./FlatContainerTypes";

export const FlatContainer = ({
  externalStyles,
  content,
  sx,
  ...props
}: IFlatContainer) => (
  <Box
    className={clsx(externalStyles, "flat-container")}
    sx={{ ...sx }}
    {...props}
  >
    {content}
  </Box>
);
