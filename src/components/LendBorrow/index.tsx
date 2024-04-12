import React, { ChangeEvent, useState } from "react";
import clsx from "clsx";

import borrowingWhiteIcon from "../../../public/assets/borrowing-white-icon.svg";
import lendingWhiteIcon from "../../../public/assets/lending-white-icon.svg";
import borrowingIcon from "../../../public/assets/borrowing.svg";
import lendingIcon from "../../../public/assets/lending.svg";
import { Container } from "../Container";
import { Button } from "../Button";
import { Input, InputValue } from "../Input";
import { CollateralSection } from "../CollateralSection";

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
  const [activeTab, setActiveTab] = useState("lendTab");

  const openTab = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <Container
      externalStyles="componentContainer"
      content={
        <>
          <div className="headerLendBorrow">
            <Button
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
            />
          </div>
          <div className="bodyLendBorrow">
            {activeTab === "lendTab" && (
              <div>
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
              </div>
            )}
            {activeTab === "borrowTab" && (
              <div>
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
              </div>
            )}
          </div>
        </>
      }
    />
  );
};
