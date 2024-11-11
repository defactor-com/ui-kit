import React from "react";
import { alpha, Box, Tab, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TabContext, TabPanel, TabList } from "@mui/lab";

import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { CollateralSection } from "../CollateralSection";
import lendingWhiteIcon from "../../../public/assets/lending-white-icon.svg";
import borrowingWhiteIcon from "../../../public/assets/borrowing-white-icon.svg";

import { ILendBorrow } from "./LendBorrowTypes";

const useStyles = makeStyles(() => ({
  customIndicator: (props: { indicatorColor: string }) => ({
    backgroundColor: props.indicatorColor,
  }),
}));

export const LendBorrow = ({
  value,
  loader,
  onLend,
  bgColor,
  onChange,
  onBorrow,
  disabled,
  walletSvg,
  tokenIcon,
  labelLend,
  currentTab,
  lendingSvg,
  textWallet,
  fontFamily,
  labelBorrow,
  tokenSymbol,
  onChangeTab,
  borrowingSvg,
  minLendBorrow,
  maxLendBorrow,
  minAmountLabel,
  maxAmountLabel,
  textCollateral,
  loaderCollateral,
  collateralBalance,
  color = "#26a66b",
  collateralRequired,
  showRequiredCollateral = false,
  selectedPool,
}: ILendBorrow) => {
  const classes = useStyles({ indicatorColor: color });
  const theme = useTheme();

  return (
    <Container
      externalStyles={
        selectedPool ? "componentSelectedPool" : "componentContainer"
      }
      content={
        <>
          {selectedPool && selectedPool}
          <TabContext value={currentTab}>
            <div className="headerLendBorrow">
              {classes && (
                <TabList
                  centered
                  onChange={onChangeTab}
                  className="tabListCustom"
                  classes={{ indicator: classes.customIndicator }}
                >
                  <Tab
                    label={labelLend}
                    value={labelLend}
                    iconPosition="start"
                    className="tabCustom"
                    style={{ fontFamily: fontFamily }}
                    icon={
                      lendingSvg && typeof lendingSvg === "string" ? (
                        <img src={lendingSvg} width={24} height={24} />
                      ) : (
                        lendingSvg
                      )
                    }
                  />
                  <Tab
                    label={labelBorrow}
                    value={labelBorrow}
                    iconPosition="start"
                    className="tabCustom"
                    style={{ fontFamily: fontFamily }}
                    icon={
                      borrowingSvg && typeof borrowingSvg === "string" ? (
                        <img src={borrowingSvg} width={24} height={24} />
                      ) : (
                        borrowingSvg
                      )
                    }
                  />
                </TabList>
              )}
            </div>
            <div
              className={
                selectedPool ? "bodyLendBorrowSelectedPool" : "bodyLendBorrow"
              }
            >
              <TabPanel value={labelLend} className="tabPanelCustom">
                <Input
                  setFormat={true}
                  onChange={onChange}
                  value={value?.toString()}
                />
                <Box display="flex" justifyContent="space-between" mt={0.5}>
                  {minLendBorrow && minAmountLabel && (
                    <Typography
                      variant="caption"
                      fontFamily={fontFamily}
                      color={alpha(theme.palette.common.black, 0.5)}
                    >
                      {minAmountLabel}:{" "}
                      <Typography
                        color="black"
                        variant="caption"
                        fontFamily={fontFamily}
                      >
                        {minLendBorrow}
                      </Typography>
                    </Typography>
                  )}
                  {maxLendBorrow && maxAmountLabel && (
                    <Typography
                      variant="caption"
                      fontFamily={fontFamily}
                      color={alpha(theme.palette.common.black, 0.5)}
                    >
                      {maxAmountLabel}:{" "}
                      <Typography
                        color="black"
                        variant="caption"
                        fontFamily={fontFamily}
                      >
                        {maxLendBorrow}
                      </Typography>
                    </Typography>
                  )}
                </Box>
                <CollateralSection
                  tokenIcon={tokenIcon}
                  walletIcon={walletSvg}
                  fontFamily={fontFamily}
                  textWallet={textWallet}
                  loader={loaderCollateral}
                  backgroundColor={bgColor}
                  tokenSymbol={tokenSymbol}
                  textCollateral={textCollateral}
                  numberWallet={collateralBalance}
                  numberCollateral={collateralRequired}
                  requiredSection={showRequiredCollateral}
                />
                <div
                  className="containerButtonLendBorrow"
                  style={{
                    marginTop: selectedPool ? "24px" : "40px",
                  }}
                >
                  <Button
                    bgColor={color}
                    loader={loader}
                    onClick={onLend}
                    label={labelLend}
                    disabled={disabled}
                    variant="contained"
                    icon={lendingWhiteIcon}
                    fontFamily={fontFamily}
                    fullWidth={selectedPool ? true : false}
                  />
                </div>
              </TabPanel>
              <TabPanel value={labelBorrow} className="tabPanelCustom">
                <Input
                  setFormat={true}
                  onChange={onChange}
                  value={value?.toString()}
                />
                <Box display="flex" justifyContent="space-between" mt={0.5}>
                  {minLendBorrow && minAmountLabel && (
                    <Typography
                      variant="caption"
                      fontFamily={fontFamily}
                      color={alpha(theme.palette.common.black, 0.5)}
                    >
                      {minAmountLabel}:{" "}
                      <Typography
                        color="black"
                        variant="caption"
                        fontFamily={fontFamily}
                      >
                        {minLendBorrow}
                      </Typography>
                    </Typography>
                  )}
                  {maxLendBorrow && maxAmountLabel && (
                    <Typography
                      variant="caption"
                      fontFamily={fontFamily}
                      color={alpha(theme.palette.common.black, 0.5)}
                    >
                      {maxAmountLabel}:{" "}
                      <Typography
                        color="black"
                        variant="caption"
                        fontFamily={fontFamily}
                      >
                        {maxLendBorrow}
                      </Typography>
                    </Typography>
                  )}
                </Box>
                <CollateralSection
                  tokenIcon={tokenIcon}
                  walletIcon={walletSvg}
                  fontFamily={fontFamily}
                  textWallet={textWallet}
                  loader={loaderCollateral}
                  backgroundColor={bgColor}
                  tokenSymbol={tokenSymbol}
                  textCollateral={textCollateral}
                  numberWallet={collateralBalance}
                  numberCollateral={collateralRequired}
                  requiredSection={showRequiredCollateral}
                />
                <div
                  className="containerButtonLendBorrow"
                  style={{
                    marginTop: selectedPool ? "24px" : "40px",
                  }}
                >
                  <Button
                    bgColor={color}
                    loader={loader}
                    onClick={onBorrow}
                    variant="contained"
                    disabled={disabled}
                    label={labelBorrow}
                    fontFamily={fontFamily}
                    icon={borrowingWhiteIcon}
                    fullWidth={selectedPool ? true : false}
                  />
                </div>
              </TabPanel>
            </div>
          </TabContext>
        </>
      }
    />
  );
};
