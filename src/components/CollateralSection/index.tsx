import React from "react";
import { Typography } from "@mui/material";

import factrIcon from "../../../public/assets/factr-icon.svg";

export interface ICollateralSection {
  textCollateral?: string;
  fontFamily?: string;
  numberCollateral?: string;
  textWallet?: string;
  numberWallet?: string;
  symbolToken?: React.ReactElement | string;
  requiredSection: boolean;
  backgroundColor?: string;
  symbolWallet?: string;
  walletIcon?: React.ReactElement | string;
}

export const CollateralSection = ({
  textCollateral,
  fontFamily,
  numberCollateral,
  textWallet,
  numberWallet,
  symbolToken,
  symbolWallet = factrIcon,
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
          <Typography
            variant="body1"
            textAlign={"end"}
            style={{ fontFamily: fontFamily }}
          >
            <strong>{numberCollateral}</strong>
            <br />
            {symbolToken}
          </Typography>
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
            {symbolWallet && typeof symbolWallet === "string" ? (
              <img src={symbolWallet} width={16} height={16} />
            ) : (
              symbolWallet
            )}
            <div className="walletAmount">
              <Typography variant="body1" style={{ fontFamily: fontFamily }}>
                {numberWallet}
              </Typography>
              <Typography variant="body1" style={{ fontFamily: fontFamily }}>
                {symbolToken}
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};