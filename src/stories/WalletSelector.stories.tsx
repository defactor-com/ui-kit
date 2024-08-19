import React from "react";
import { Story } from "@storybook/react";
import { useTheme } from "@mui/material";

import {
  ChainIdType,
  TokenBalance,
  IWalletSelector,
} from "../components/WalletComponent/WalletTypes";
import { WalletSelector } from "../components/WalletComponent/WalletSelector";
import { NetworksDataType } from "../components/MultichainSelector/MultiChainSelectorTypes";

export default {
  title: "WalletSelector",
  component: WalletSelector,
};

const Template: Story<IWalletSelector> = (args) => {
  const theme = useTheme();

  return (
    <WalletSelector
      address={"0xd198F7a8C953AC47dfd0F6a0267e4d19c67ce351"}
      networks={[
        {
          chainId: 11155111,
          rpcUrl: "https://eth-sepolia.g.alchemy.com",
          name: "Sepolia",
          currency: "ETH",
          explorerUrl: "https://sepolia.otterscan.io",
          baseTokenAddress: "0x75fe3476d90598080f7D12365020C438943Dcef3",
          collateralAddress: "0x7D5c1468D8bE9f0F4FaD26F2Cb7e6b2ed9042577",
          poolContractAddress: "0x295894a94F859cE1Ac960364D6b0D2Fa430027b4",
        },
        {
          chainId: 80002,
          rpcUrl: "https://polygon-amoy.g.alchemy.com",
          name: "Amoy",
          currency: "MATIC",
          explorerUrl: "https://www.oklink.com/amoy",
          baseTokenAddress: "0x60E87395b0101F85C623c38Be010574f958496db",
          collateralAddress: "0x8574299682D036F88195a2685601D90300E21Bca",
          poolContractAddress: "0x5139129588Ed02d8761aACad1dcCd887c8522f4d",
        },
      ]}
      isConnected={true}
      userContext={{
        accessToken: "",
        accountBalance: {
          address: "0x60E87395b0101F85C623c38Be010574f958496db",
          balance: "97795699572n",
          decimals: 6,
          symbol: "USDC",
        },
        accountCollateralBalance: [
          {
            address: "0x8574299682D036F88195a2685601D90300E21Bca",
            balance: "97713131598175304756430n",
            decimals: 18,
            symbol: "FACTR",
          },
          {
            symbol: "TXAU",
            address: "0x7F400A79139A603E5F8A930cEC9562171fDCD906",
            balance: "99999941647245813986211n",
            decimals: 18,
          },
        ],
        networkConnected: {
          baseTokenAddress: "0x60E87395b0101F85C623c38Be010574f958496db",
          chainId: 80002,
          collateralAddress: [
            "0x8574299682D036F88195a2685601D90300E21Bca",
            "0x7F400A79139A603E5F8A930cEC9562171fDCD906",
          ],
          currency: "MATIC",
          explorerUrl: "https://www.oklink.com/amoy",
          logo: "/logos/polygon-logo.svg",
          name: "Amoy",
          poolContractAddress: "0x5139129588Ed02d8761aACad1dcCd887c8522f4d",
          rpcUrl:
            "https://polygon-amoy.g.alchemy.com/v2/QCWsQCDP5n6DN_nyUtWgOhrV3WDq2HC7",
        },
        selectedCollateralBalance: {
          address: "0x8574299682D036F88195a2685601D90300E21Bca",
          balance: "97713131598175304756430n",
          decimals: 18,
          symbol: "FACTR",
        },
        networkSelected: [
          {
            chainId: 11155111,
            rpcUrl: "https://eth-sepolia.g.alchemy.com/",
            name: "Sepolia",
            currency: "ETH",
            explorerUrl: "https://sepolia.otterscan.io",
            poolContractAddress: "0x295894a94F859cE1Ac960364D6b0D2Fa430027b4",
            collateralAddress: "0x7D5c1468D8bE9f0F4FaD26F2Cb7e6b2ed9042577",
            baseTokenAddress: "0x75fe3476d90598080f7D12365020C438943Dcef3",
          },
          {
            chainId: 80002,
            rpcUrl: "https://polygon-amoy.g.alchemy.com/",
            name: "Amoy",
            currency: "MATIC",
            explorerUrl: "https://www.oklink.com/amoy",
            poolContractAddress: "0x5139129588Ed02d8761aACad1dcCd887c8522f4d",
            collateralAddress: "0x8574299682D036F88195a2685601D90300E21Bca",
            baseTokenAddress: "0x60E87395b0101F85C623c38Be010574f958496db",
          },
        ],
        refreshToken: "",
        walletAddress: "0xd198F7a8C953AC47dfd0F6a0267e4d19c67ce351",
      }}
      // handleLogout={()=>{}}
      networksAssets={[]}
      // openConnectWallet={openConnectWallet}
      configNetworks={[]}
      // walletIconColor={"#211F23"}
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
      // onClickMenuOption={async (chainId: ChainIdType) =>
      //   handleChangeNetworkConnected(await getNetworkData(chainId))
      // }
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
