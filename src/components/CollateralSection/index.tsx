import React from "react";
import { Typography } from "@mui/material";
import { PreviewProfile } from "../PreviewProfile";

import factrIcon from "../../../public/assets/factr-icon.svg";

export interface ICollateralSection {
  numberCollateral: string;
  numberWallet: string;
  symbolToken?: React.ReactNode | string;
  requiredSection: boolean;
  backgroundColor?: string;
  symbolWallet?: string;
}

export const CollateralSection = ({
  numberCollateral,
  numberWallet,
  symbolToken,
  symbolWallet = factrIcon,
  requiredSection,
  backgroundColor = "#26A66B1A",
}: ICollateralSection) => {
  return (
    <div>
      {requiredSection && (
        <div className="requiredSection">
          <Typography variant="body1">{"collateralAmount"}:</Typography>
          <Typography variant="body1" textAlign={"end"}>
            <strong>{numberCollateral}</strong>
            <br />
            {symbolToken}
          </Typography>
        </div>
      )}
      <div
        className="walletSection"
        style={{ backgroundColor: backgroundColor }}
      >
        <Typography variant="body1">{"My Collateral Balance"}</Typography>
        <div>
          <PreviewProfile
            label={`${numberWallet} ${symbolToken}`}
            image={symbolWallet}
            imageSize="16px"
          />
        </div>
      </div>
    </div>
  );
};
