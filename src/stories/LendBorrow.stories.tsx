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
  const [value, setValue] = useState<string | number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <LendBorrow
      {...args}
      value={value}
      precision={5}
      labelLend="Lend"
      labelBorrow="Borrow"
      onChange={handleChange}
      activeBorrowingSvg={activeBorrowingIconSvg}
      activeLendingSvg={activeLendingIconSvg}
      borrowingSvg={borrowingIconSvg}
      lendingSvg={lendingIconSvg}
      walletSvg={WalletIcon}
    />
  );
};

export const LendBorrowItem = Template.bind({});
LendBorrowItem.args = {};
