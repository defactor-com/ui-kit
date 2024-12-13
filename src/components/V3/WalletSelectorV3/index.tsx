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

// 2
import Image from "next/image";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import WalletConnectIcon from "../../Icons/walletConnectIcon";

import WalletContainer from "../../WalletComponent/WalletContainer";
import { IWalletSelector } from "../../WalletComponent/WalletTypes";
import useWalletSelectorHook from "../../WalletComponent/useWalletSelectorHook";
import { Button } from "../../Button";

export const WalletSelector = ({
  theme,
  labels,
  address,
  onClick,
  networks,
  isConnected,
  userContext,
  handleLogout,
  networksAssets,
  configNetworks,
  formatCurrency,
  openConnectWallet,
  onClickMenuOption,
  handleFormartCurrency,
}: IWalletSelector): JSX.Element => {
  const [{ anchorEl, open, id }, { handleClick, handleClose }] =
    useWalletSelectorHook();
  const isMobile = window.innerWidth <= 600;

  return (
    <div>
      {!isConnected ? (
        <Button
          icon={
            <WalletConnectIcon
              color={
                isMobile
                  ? theme.palette.text.primary
                  : theme.palette.common.white
              }
            />
          }
          onClick={() => {
            openConnectWallet(), handleClose();
          }}
          fontFamily={theme.typography.fontFamily}
          variant={isMobile ? "text" : "contained"}
          label={isMobile ? undefined : labels.connectWallet}
          optionalStyles={{ padding: theme.spacing(1.5, 2) }}
          bgColor={isMobile ? "" : theme.palette.secondary.main}
        />
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="end"
          aria-describedby={id}
          onClick={handleClick}
          sx={{
            cursor: "pointer",
            transition: "all 0.6s ease-in-out",
            ":hover": {
              opacity: 0.8,
            },
          }}
        >
          <Image
            width={40}
            height={40}
            alt="Chain logo"
            src={networksAssets[userContext.networkConnected.chainId]?.logo}
          />
          <ArrowDropDown />
        </Box>
      )}
      <WalletContainer
        id={id}
        open={open}
        theme={theme}
        labels={labels}
        address={address}
        onClick={onClick}
        networks={networks}
        anchorEl={anchorEl}
        userContext={userContext}
        handleClose={handleClose}
        handleLogout={handleLogout}
        formatCurrency={formatCurrency}
        configNetworks={configNetworks}
        networksAssets={networksAssets}
        onClickMenuOption={onClickMenuOption}
        handleFormartCurrency={handleFormartCurrency}
      />
    </div>
  );
};


export const WalletSelectorV3: React.FC<WalletSelectorV3Props> = ({
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

