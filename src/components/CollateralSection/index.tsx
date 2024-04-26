import React from "react";
import { Box, Typography } from "@mui/material";

import factrIcon from "../../../public/assets/factr-icon.svg";

export interface ICollateralSection {
  textCollateral?: string;
  fontFamily?: string;
  numberCollateral?: string;
  textWallet?: string;
  numberWallet?: string;
  tokenSymbol?: string;
  requiredSection: boolean;
  backgroundColor?: string;
  tokenIcon?: React.ReactElement | string;
  walletIcon?: React.ReactElement | string;
}

export const CollateralSection = ({
  textCollateral,
  fontFamily,
  numberCollateral,
  textWallet,
  numberWallet,
  tokenSymbol,
  tokenIcon = factrIcon,
  requiredSection,
  backgroundColor = "#26A66B1A",
  walletIcon,
}: ICollateralSection) => {
  return (
    <div>
      {requiredSection && textCollateral && (
        <div className="requiredSection">
          <Typography variant="body1" style={{ fontFamily: fontFamily }}>
            {textCollateral}:
          </Typography>
          <Box maxWidth="170px">
            <Typography
              variant="body1"
              textAlign="end"
              fontWeight="bold"
              className="breakText"
              style={{ fontFamily: fontFamily }}
            >
              {numberCollateral}
            </Typography>
            <Typography
              variant="body1"
              textAlign="end"
              style={{ fontFamily: fontFamily, color: "#7C7D7E" }}
            >
              {tokenSymbol}
            </Typography>
          </Box>
        </div>
      )}
      {textWallet && numberWallet && (
        <div
          className="walletSection"
          style={{ backgroundColor: backgroundColor }}
        >
          {walletIcon && typeof walletIcon === "string" ? (
            <img src={walletIcon} alt={textWallet} width={24} height={24} />
          ) : (
            walletIcon
          )}
          <Typography variant="body1" style={{ fontFamily: fontFamily }}>
            {textWallet}
          </Typography>
          <div className="walletDetail">
            {tokenIcon && typeof tokenIcon === "string" ? (
              <img src={tokenIcon} width={16} height={16} />
            ) : (
              tokenIcon
            )}
            <div className="walletAmount">
              <Box maxWidth="160px">
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  textAlign="center"
                  className="breakText"
                  style={{ fontFamily: fontFamily }}
                >
                  {numberWallet}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                style={{ fontFamily: fontFamily }}
              >
                {tokenSymbol}
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
