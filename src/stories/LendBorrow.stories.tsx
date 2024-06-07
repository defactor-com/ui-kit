import React, { ChangeEvent, useState } from "react";
import { Story } from "@storybook/react";

import { LendBorrow } from "../components/LendBorrow";
import { ILendBorrow } from "../components/LendBorrow/LendBorrowTypes";

import borrowingIconSvg from "../../public/assets/borrowing.svg";
import lendingIconSvg from "../../public/assets/lending.svg";
import activeBorrowingIconSvg from "../../public/assets/activeBorrowing-icon.svg";
import activeLendingIconSvg from "../../public/assets/activeLending-icon.svg";
import WalletIcon from "../../public/assets/wallet-icon.svg";
import GoldAvatar from "../../public/assets/gold-image.svg";
import PolygonChain from "../../public/assets/polygon-chain.svg";

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

  const SelectedPool = (
    <div
      style={{
        width: "auto",
        height: "80px",
        padding: "8px 16px",
        backgroundColor: "#F8F9FC",
      }}
    >
      <span style={{ fontWeight: "bold" }}>Pool:</span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={GoldAvatar} alt={"Avatar"} />
          <span> GOLD Pool 1</span>
        </div>
        <img src={PolygonChain} alt={"Chain Avatar"} />
      </div>
    </div>
  );

  return (
    <LendBorrow
      {...args}
      textCollateral="Collateral Required"
      textWallet="My Collateral Balance"
      collateralRequired="100,000.00"
      collateralBalance="100,000.00"
      borrowingSvg={borrowIcon}
      currentTab={currentTab}
      onChange={handleChange}
      onChangeTab={changeTab}
      showRequiredCollateral
      walletSvg={WalletIcon}
      tokenSymbol={"FACTR"}
      lendingSvg={lendIcon}
      fontFamily="cursive"
      labelBorrow="Borrow"
      labelLend="Lend"
      value={value}
      SelectedPool={SelectedPool}
    />
  );
};

export const LendBorrowItem = Template.bind({});
LendBorrowItem.args = {};
