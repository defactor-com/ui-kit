import React from "react";
import Box from "@mui/material/Box";
import ConnectWalletButton from "./ConnectWalletBtn";

type WalletSelectorV3Props = {
  address?: string;
  networks?: () => void | any;
  isConnected?: boolean;
  userContext?: {
    accountBalance: {
      balance: string;
    };
  };
  handleLogout?: () => void;
  networksAssets?: any[];
  configNetworks?: { id: number; name: string }[];
  openConnectWallet?: () => void;
  formatCurrency?: (value: string | number) => string;
  labels?: any;
  onClickMenuOption?: (chainId: string) => Promise<void>;
  handleFormatCurrency?: () => string;
};

const WalletSelectorV3: React.FC<WalletSelectorV3Props> = ({
  address = "0x1234...abcd",
  networks = () => console.log("Networks called"),
  isConnected = true,
  userContext = { accountBalance: { balance: "1000" } },
  handleLogout = () => console.log("Logged out"),
  networksAssets = [],
  configNetworks = [{ id: 1, name: "Ethereum" }],
  openConnectWallet = () => console.log("Connect wallet clicked"),
  formatCurrency = (value) => `$${value}`,
  onClickMenuOption = async (chainId) => {
    console.log("Menu option clicked", chainId);
  },
  handleFormatCurrency = () => {
    console.log("Formatting currency");
    return "$1,000";
  },
}) => {
    console.log(networks)
    console.log(onClickMenuOption)
    console.log(handleFormatCurrency)
    console.log(handleLogout)
    console.log(networksAssets)
    console.log(formatCurrency)

  return (
    <Box>
      <ConnectWalletButton
        btnText="Connect Wallet"
        handleClick={openConnectWallet}
      />
      <p>Address: {address}</p>
      <p>Is Connected: {isConnected ? "Yes" : "No"}</p>
      <p>User Balance: {userContext.accountBalance.balance}</p>
      <p>Networks: {JSON.stringify(configNetworks)}</p>
    </Box>
  );
};

export default WalletSelectorV3;
