"use client";

import { Box, Button } from "@mui/material";
import React from "react";

export interface ConnectWalletButtonV3Props {
  buttonText: string;
  backgroundColor: string;
  handleClick: () => void;
}


export const ConnectWalletButtonV3: React.FC<ConnectWalletButtonV3Props> = ({
  buttonText,
  backgroundColor ,
  handleClick
}) => {

  return (
    <Button
      sx={{
        borderRadius: 5,
        mr: 2,
        backgroundColor: backgroundColor,
        textTransform: "Capitalize",
      }}
      variant="contained"
      onClick={handleClick}
    >
      <Box>{buttonText}</Box>
    </Button>
  );
};

