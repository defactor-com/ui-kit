import React from "react";
import { Story } from "@storybook/react";
import { useTheme } from "@mui/material";

import {
  ChainIdType,
  TokenBalance,
  IWalletSelector,
} from "../components/WalletComponent/WalletTypes";
import { NetworksDataType } from "../components/MultichainSelector/MultiChainSelectorTypes";
import { WalletSelectorV3 } from "../components/V3/WalletSelectorV3";

import { demoNetworks, demoUserContext } from "../components/V3/WalletSelectorV3/demoData";

export default {
  title: "WalletSelectorV3",
  component: WalletSelectorV3,
};

const Template: Story<IWalletSelector> = (args) => {
  const theme = useTheme();

  return (
    <WalletSelectorV3
      address={"0xd198F7a8C953AC47dfd0F6a0267e4d19c67ce351"}
      networks={demoNetworks}
      isConnected={true}
      userContext={demoUserContext}
      networksAssets={[]}
      configNetworks={[]}
      formatCurrency={() => "88,888,888.88"}
      labels={{
        copied: "copied",
        network: "network",
        balance: "balance",
        disconnect: "disconnect",
        connectWallet: "connectWallet",
        copyToClipboard: "copyToClipboard",
        collateralBalance: "collateralBalance",
      }}
      handleFormartCurrency={() => "88,888,888.88"}
      openConnectWallet={function (): void {
        throw new Error("Function not implemented.");
      }}
      onClickMenuOption={function (chainId: ChainIdType): NetworksDataType {
        throw new Error("Function not implemented.");
      }}
      onClick={function (collateral: TokenBalance): void {
        throw new Error("Function not implemented.");
      }}
      handleLogout={function (): Promise<void> {
        throw new Error("Function not implemented.");
      }}
      anchorEl={null}
      id={undefined}
      handleClose={function (): void {
        throw new Error("Function not implemented.");
      }}
      open={true}
      theme={theme}
    />
  );
};

export const WalletSelectorItem = Template.bind({});
