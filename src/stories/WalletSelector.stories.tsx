import React from "react";
import { Story } from "@storybook/react";
import { useTheme } from "@mui/material";
import { IWalletSelector } from "../components/WalletComponent/WalletTypes";
import { WalletSelector } from "../components/WalletComponent";
import { walletSelectorProps } from "../components/WalletComponent/WalletSelectorDemoProps";

export default {
  title: "WalletSelector",
  component: WalletSelector,
};

const Template: Story<IWalletSelector> = () => {
  const theme = useTheme();
  return <WalletSelector walletSelectorProps={walletSelectorProps} />;
};

export const WalletSelectorItem = Template.bind({});
