import React from "react";
import { Story } from "@storybook/react";

import WalletIcon from "../../public/assets/wallet-icon.svg";

import { CollateralSection } from "../components/CollateralSection";
import { ICollateralSection } from "../components/CollateralSection/CollateralSectionTypes";

export default {
  title: "CollateralSection",
  component: CollateralSection,
};

const Template: Story<ICollateralSection> = (args) => (
  <CollateralSection {...args} />
);

export const ContainerItem = Template.bind({});
ContainerItem.args = {
  textCollateral: "Collateral Required",
  numberCollateral: "100,000.00",
  textWallet: "My Collateral Balance",
  numberWallet: "100,000.00",
  requiredSection: true,
  tokenSymbol: "FACTR",
  walletIcon: WalletIcon,
};
