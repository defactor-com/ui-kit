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
  const [value, setValue] = useState<string>("0");
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
      inputError="The amount entered is greater than the maximum allowed."
      textCollateral="Collateral Required"
      textWallet="My Collateral Balance"
      collateralRequired="100,000.00"
      collateralTokenSymbol={"FACTR"}
      collateralBalance="100,000.00"
      maxLendBorrow="1,000,000.00"
      minLendBorrow="100.00"
      maxAmountLabel="Max Lend"
      minAmountLabel="Min Lend"
      borrowingSvg={borrowIcon}
      currentTab={currentTab}
      baseTokenSymbol="USDC"
      onChange={handleChange}
      onChangeTab={changeTab}
      showRequiredCollateral
      walletSvg={WalletIcon}
      lendingSvg={lendIcon}
      fontFamily="cursive"
      labelBorrow="Borrow"
      labelLend="Lend"
      value={value}
      buttonsLabels={{
        min: "Min",
        max: "Max",
      }}
      selectedPool={SelectedPool}
    />
  );
};

export const LendBorrowItem = Template.bind({});
LendBorrowItem.args = {};
