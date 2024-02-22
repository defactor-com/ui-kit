import React, { ChangeEvent, useState } from "react";
import clsx from "clsx";

import borrowingWhiteIcon from "../../../public/assets/borrowing-white-icon.svg";
import lendingWhiteIcon from "../../../public/assets/lending-white-icon.svg";
import borrowingIcon from "../../../public/assets/borrowing.svg";
import lendingIcon from "../../../public/assets/lending.svg";
import { Container } from "../Container";
import { Button } from "../Button";
import { Input } from "../Input";

export interface ILendBorrow {
  color?: string;
  onLend(): void;
  onBorrow(): void;
  disabled?: boolean;
  loader?: React.ReactElement;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  value: string | number | readonly string[] | undefined;
}

export const LendBorrow = ({
  color,
  value,
  onLend,
  loader,
  onBorrow,
  onChange,
  disabled,
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
              variant="text"
              label="Lend"
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
              label="Borrow"
              variant="text"
              fullWidth
            />
          </div>
          <div className="bodyLendBorrow">
            {activeTab === "lendTab" && (
              <div>
                <Input value={value} onChange={onChange} type="number" />
                <div className="containerButtonLendBorrow">
                  <Button
                    icon={lendingWhiteIcon}
                    variant="contained"
                    disabled={disabled}
                    onClick={onLend}
                    loader={loader}
                    bgColor={color}
                    label="Lend"
                  />
                </div>
              </div>
            )}
            {activeTab === "borrowTab" && (
              <div>
                <Input value={value} onChange={onChange} type="number" />
                <div className="containerButtonLendBorrow">
                  <Button
                    icon={borrowingWhiteIcon}
                    variant="contained"
                    disabled={disabled}
                    onClick={onBorrow}
                    loader={loader}
                    bgColor={color}
                    label="Borrow"
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
