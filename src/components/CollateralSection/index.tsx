import React from "react";
import clsx from "clsx";
import { Box } from "@mui/material";

import factrIcon from "../../../public/assets/factr-icon.svg";

import { ICollateralSection } from "./CollateralSectionTypes";

export const CollateralSection = ({
  loader,
  fontFamily,
  textWallet,
  walletIcon,
  tokenSymbol,
  numberWallet,
  textCollateral,
  requiredSection,
  numberCollateral,
  tokenIcon = factrIcon,
  backgroundColor = "#26A66B1A",
}: ICollateralSection) => {
  return (
    <div>
      {requiredSection && textCollateral && (
        <div className="requiredSection">
          <span className="variant-body1" style={{ fontFamily: fontFamily }}>
            {textCollateral}:
          </span>
          <Box maxWidth="170px" display={"flex"} flexDirection={"column"}>
            <span
              className={clsx("breakText", "variant-body1")}
              style={{
                fontFamily: fontFamily,
                textAlign: "end",
                fontWeight: "bold",
              }}
            >
              {loader ? loader : numberCollateral}
            </span>
            <span
              className="variant-body1"
              style={{
                fontFamily: fontFamily,
                textAlign: "end",
                color: "#7C7D7E",
              }}
            >
              {tokenSymbol}
            </span>
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
          <span className="variant-body1" style={{ fontFamily: fontFamily }}>
            {textWallet}
          </span>
          <div className="walletDetail">
            {tokenIcon && typeof tokenIcon === "string" ? (
              <img src={tokenIcon} width={16} height={16} />
            ) : (
              tokenIcon
            )}
            <div className="walletAmount">
              <Box maxWidth="160px">
                <span
                  className={clsx("breakText", "variant-body1")}
                  style={{
                    fontFamily: fontFamily,
                    textAlign: "end",
                    fontWeight: "bold",
                  }}
                >
                  {numberWallet}
                </span>
              </Box>
              <span
                className="variant-body1"
                style={{ fontFamily: fontFamily, fontWeight: "bold" }}
              >
                {tokenSymbol}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
