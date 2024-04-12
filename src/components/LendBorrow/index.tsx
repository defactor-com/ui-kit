import React, { ChangeEvent, useEffect, useState } from "react";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import clsx from "clsx";

import borrowingWhiteIcon from "../../../public/assets/borrowing-white-icon.svg";
import lendingWhiteIcon from "../../../public/assets/lending-white-icon.svg";
import borrowingIconSvg from "../../../public/assets/borrowing.svg";
import lendingIconSvg from "../../../public/assets/lending.svg";
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
}

const borrowingIcon = <img src={borrowingIconSvg} width={24} height={24} />;
const lendingIcon = <img src={lendingIconSvg} width={24} height={24} />;

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
}: ILendBorrow) => {
  const [{ currentTab }, { setCurrentTab, handleChange }] =
    useLendBorrowState();

  useEffect(() => {
    setCurrentTab(labelLend);
  }, []);

  return (
    <Container
      externalStyles="componentContainer"
      content={
        <TabContext value={currentTab}>
          <div className="headerLendBorrow">
            {/* <Button
              externalStyles={clsx([
                "buttonsStyles",
                activeTab !== "lendTab" && "buttonsStylesSelected",
              ])}
              onClick={() => openTab("lendTab")}
              icon={lendingIcon}
              label={labelLend}
              variant="text"
              fullWidth
            />
            <Button
              externalStyles={clsx([
                "buttonsStyles",
                activeTab !== "borrowTab" && "buttonsStylesSelected",
              ])}
              onClick={() => openTab("borrowTab")}
              style={{ borderColor: color }}
              icon={borrowingIcon}
              label={labelBorrow}
              variant="text"
              fullWidth
            /> */}
            <TabList onChange={handleChange}>
              <Tab
                icon={lendingIcon}
                iconPosition="start"
                label={labelLend}
                value={labelLend}
              />
              <Tab
                icon={borrowingIcon}
                iconPosition="start"
                label={labelBorrow}
                value={labelBorrow}
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
