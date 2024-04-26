import React, { ChangeEvent, useState } from "react";
import { Story } from "@storybook/react";

import { LendBorrow, ILendBorrow } from "../components/LendBorrow";

import borrowingIconSvg from "../../public/assets/borrowing.svg";
import lendingIconSvg from "../../public/assets/lending.svg";
import activeBorrowingIconSvg from "../../public/assets/activeBorrowing-icon.svg";
import activeLendingIconSvg from "../../public/assets/activeLending-icon.svg";
import WalletIcon from "../../public/assets/wallet-icon.svg";

export default {
  title: "LendBorrow",
  component: LendBorrow,
};

const Template: Story<ILendBorrow> = (args) => {
  const [borrowIcon, setBorrowIcon] = useState(borrowingIconSvg);
  const [lendIcon, setLendIcon] = useState(activeBorrowingIconSvg);
  const [currentTab, setCurrentTab] = useState("Lend");
  const [value, setValue] = useState<string | number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const changeTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
    if (newValue === "Lend") {
      setLendIcon(activeLendingIconSvg);
      setBorrowIcon(borrowingIconSvg);
    } else {
      setBorrowIcon(activeBorrowingIconSvg);
      setLendIcon(lendingIconSvg);
    }
  };

  return (
    <LendBorrow
      {...args}
      // textCollateral="Collateral Required"
      // fontFamily="cursive"
      // collateralBalance="100,000.00"
      // textWallet="My Collateral Balance"
      // collateralRequired="100,000.00"
      // showRequiredCollateral
      // tokenSymbol={"FACTR"}
      currentTab={currentTab}
      labelLend="Lend"
      labelBorrow="Borrow"
      // value={value}
      // borrowingSvg={borrowIcon}
      // lendingSvg={lendIcon}
      // walletSvg={WalletIcon}
      // onChange={handleChange}
      // onChangeTab={changeTab}
    />
  );
};

export const LendBorrowItem = Template.bind({});
LendBorrowItem.args = {};
