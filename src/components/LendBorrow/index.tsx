import React, { ChangeEvent, useEffect, useState } from "react";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";

import borrowingWhiteIcon from "../../../public/assets/borrowing-white-icon.svg";
import lendingWhiteIcon from "../../../public/assets/lending-white-icon.svg";
import { Container } from "../Container";
import { Button } from "../Button";
import { Input, InputValue } from "../Input";
import { CollateralSection } from "../CollateralSection";

export interface ILendBorrow {
  textCollateral?: string;
  fontFamily?: string;
  numberCollateral?: string;
  textWallet?: string;
  numberWallet?: string;
  symbolToken?: React.ReactElement | string;
  symbolWallet?: string;
  color?: string;
  bgColor?: string;
  currentTab: string;
  labelLend: string;
  labelBorrow: string;
  disabled?: boolean;
  value: InputValue | bigint;
  loader?: React.ReactElement;
  borrowingSvg: string;
  lendingSvg: string;
  walletSvg: string;
  onLend(): void;
  onBorrow(): void;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  onChangeTab: (event: React.SyntheticEvent, newValue: string) => void;
}

export const LendBorrow = ({
  textCollateral,
  fontFamily,
  numberCollateral,
  textWallet,
  numberWallet,
  symbolToken,
  symbolWallet,
  color,
  bgColor,
  currentTab,
  labelLend,
  disabled,
  labelBorrow,
  value,
  loader,
  borrowingSvg,
  lendingSvg,
  walletSvg,
  onBorrow,
  onChange,
  onLend,
  onChangeTab,
}: ILendBorrow) => {
  return (
    <Container
      externalStyles="componentContainer"
      content={
        <TabContext value={currentTab}>
          <div className="headerLendBorrow">
            <TabList
              onChange={onChangeTab}
              className="tabListCustom"
              classes={{ indicator: "customIndicator" }}
              centered
            >
              <Tab
                icon={
                  lendingSvg && typeof lendingSvg === "string" ? (
                    <img src={lendingSvg} width={24} height={24} />
                  ) : (
                    lendingSvg
                  )
                }
                style={{ fontFamily: fontFamily }}
                iconPosition="start"
                label={labelLend}
                value={labelLend}
                className="tabCustom"
              />
              <Tab
                icon={
                  borrowingSvg && typeof borrowingSvg === "string" ? (
                    <img src={borrowingSvg} width={24} height={24} />
                  ) : (
                    borrowingSvg
                  )
                }
                style={{ fontFamily: fontFamily }}
                iconPosition="start"
                label={labelBorrow}
                value={labelBorrow}
                className="tabCustom"
              />
            </TabList>
          </div>
          <div className="bodyLendBorrow">
            <TabPanel value={labelLend} className="tabPanelCustom">
              <Input
                value={value?.toString()}
                onChange={onChange}
                setFormat={true}
              />
              <CollateralSection
                textCollateral={textCollateral}
                fontFamily={fontFamily}
                numberCollateral={numberCollateral}
                textWallet={textWallet}
                numberWallet={numberWallet}
                requiredSection={false}
                symbolToken={symbolToken}
                symbolWallet={symbolWallet}
                walletIcon={walletSvg}
                backgroundColor={bgColor}
              />
              <div className="containerButtonLendBorrow">
                <Button
                  fontFamily={fontFamily}
                  icon={lendingWhiteIcon}
                  variant="contained"
                  disabled={disabled}
                  label={labelLend}
                  onClick={onLend}
                  loader={loader}
                  bgColor={color}
                />
              </div>
            </TabPanel>
            <TabPanel value={labelBorrow} className="tabPanelCustom">
              <Input
                value={value?.toString()}
                onChange={onChange}
                setFormat={true}
              />
              <CollateralSection
                textCollateral={textCollateral}
                fontFamily={fontFamily}
                numberCollateral={numberCollateral}
                textWallet={textWallet}
                numberWallet={numberWallet}
                requiredSection={false}
                symbolToken={symbolToken}
                symbolWallet={symbolWallet}
                walletIcon={walletSvg}
                backgroundColor={bgColor}
              />
              <div className="containerButtonLendBorrow">
                <Button
                  fontFamily={fontFamily}
                  icon={borrowingWhiteIcon}
                  label={labelBorrow}
                  variant="contained"
                  disabled={disabled}
                  onClick={onBorrow}
                  loader={loader}
                  bgColor={color}
                />
              </div>
            </TabPanel>
          </div>
        </TabContext>
      }
    />
  );
};
