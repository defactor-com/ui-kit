import React from "react";
import { Typography } from "@mui/material";
import { PreviewProfile } from "../PreviewProfile";

import factrIcon from "../../../public/assets/factr-icon.svg";

export interface ICollateralSection {
  textCollateral?: string;
  numberCollateral?: string;
  textWallet?: string;
  numberWallet?: string;
  symbolToken?: React.ReactNode | string;
  requiredSection: boolean;
  backgroundColor?: string;
  symbolWallet?: string;
  walletIcon?: React.ReactElement | string;
}

export const CollateralSection = ({
  textCollateral,
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
          <Typography variant="body1">{textCollateral}:</Typography>
          <Typography variant="body1" textAlign={"end"}>
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
          <Typography variant="body1">{textWallet}</Typography>
          <div>
            <PreviewProfile
              label={`${numberWallet} ${symbolToken}`}
              image={symbolWallet}
              imageSize="16px"
            />
          </div>
        </div>
      )}
    </div>
  );
};
