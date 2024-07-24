import React from "react";
import Image from "next/image";
import { Theme } from "@mui/material";
import { Box, Typography } from "@mui/material";

import { FlatContainer } from "../FlatContainer";

export const SelectedWalletComponent = ({
  walletAddress,
  networkName,
  theme,
  logo,
}: {
  logo: string;
  theme?: Theme;
  networkName: string;
  walletAddress: string;
}): JSX.Element => {
  return (
    <FlatContainer
      sx={{ width: "100% !important", padding: "8px !important" }}
      content={
        <Box width="100%" display="flex" textAlign="left" alignItems="center">
          {logo && typeof logo === "string" ? (
            <Image
              src={logo}
              width={36}
              height={36}
              alt="Selected wallet logo"
            />
          ) : (
            logo
          )}
          <Box ml={1}>
            <Typography sx={{ ...theme?.typography?.body1 }}>
              {networkName}
            </Typography>
            <Typography
              sx={{ ...theme?.typography?.subtitle2, fontWeight: 700 }}
            >
              {walletAddress}
            </Typography>
          </Box>
        </Box>
      }
    />
  );
};
