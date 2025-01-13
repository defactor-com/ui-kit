"use client";

import { Box, Button } from "@mui/material";
import React from "react";

export interface ConnectWalletButtonV3Props {
  claimButtonText?: string;
  backgroundColor?: string;
}

export const ConnectWalletButtonV3: React.FC<ConnectWalletButtonV3Props> = ({
  claimButtonText = "Connect Wallet",
  backgroundColor = "#5a5beb"
}) => {

  const handleClick = () => {
    console.log("Button clicked");
  };

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
      <Box>{claimButtonText}</Box>
    </Button>
  );
};

