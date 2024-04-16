import React, { ChangeEvent, useEffect, useState } from "react";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";

import borrowingWhiteIcon from "../../../public/assets/borrowing-white-icon.svg";
import lendingWhiteIcon from "../../../public/assets/lending-white-icon.svg";
import { Container } from "../Container";
import { Button } from "../Button";
import { Input, InputValue } from "../Input";
import { CollateralSection } from "../CollateralSection";

import { useLendBorrowState } from "./useLendBorrowState";

export interface ILendBorrow {
  color?: string;
  onLend(): void;
  onBorrow(): void;
  labelLend: string;
  disabled?: boolean;
  precision?: number;
  labelBorrow: string;
  value: InputValue | bigint;
  loader?: React.ReactElement;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  activeBorrowingSvg: string;
  activeLendingSvg: string;
  borrowingSvg: string;
  lendingSvg: string;
  walletSvg: string;
}

export const LendBorrow = ({
  color,
  value,
  onLend,
  loader,
  onBorrow,
  onChange,
  disabled,
  labelLend,
  labelBorrow,
  activeBorrowingSvg,
  activeLendingSvg,
  borrowingSvg,
  lendingSvg,
  walletSvg,
}: ILendBorrow) => {
  const [
    { currentTab, borrowingIcon, lendingIcon },
    {
      setCurrentTab,
      setLendLabel,
      setBorrowLabel,
      setActiveBorrowingSvg,
      setActiveLendingSvg,
      setBorrowingSvg,
      setLendingSvg,
      handleChange,
    },
  ] = useLendBorrowState();

  useEffect(() => {
    setCurrentTab(labelLend);
    setBorrowLabel(labelBorrow);
    setLendLabel(labelLend);
    setActiveBorrowingSvg(activeBorrowingSvg);
    setActiveLendingSvg(activeLendingSvg);
    setBorrowingSvg(borrowingSvg);
    setLendingSvg(lendingSvg);
  }, []);

  return (
    <Container
      externalStyles="componentContainer"
      content={
        <TabContext value={currentTab}>
          <div className="headerLendBorrow">
            <TabList
              onChange={handleChange}
              className="tabListCustom"
              classes={{ indicator: "customIndicator" }}
              centered
            >
              <Tab
                icon={lendingIcon}
                iconPosition="start"
                label={labelLend}
                value={labelLend}
                className="tabCustom"
              />
              <Tab
                icon={borrowingIcon}
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
                numberCollateral="100,000.00"
                numberWallet="100,000.00"
                requiredSection={true}
                symbolToken={"FACTR"}
              />
              <div className="containerButtonLendBorrow">
                <Button
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
                numberCollateral="100,000.00"
                numberWallet="100,000.00"
                requiredSection={true}
                symbolToken={"FACTR"}
                walletIcon={walletSvg}
              />
              <div className="containerButtonLendBorrow">
                <Button
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
