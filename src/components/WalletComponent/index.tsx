import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import { Button } from "../Button";
import WalletConnectIcon from "../Icons/walletConnectIcon";

import WalletContainer from "./WalletContainer";
import { IWalletSelector } from "./WalletTypes";
import useWalletSelectorHook from "./useWalletSelectorHook";

export const WalletSelector = ({
  walletSelectorProps,
}: {
  walletSelectorProps: IWalletSelector;
}): JSX.Element => {
  const {
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
    fontSize = "14px",
    fontWeight = "500",
    MaxHeight = "39px",
    showIconD = false,
  } = walletSelectorProps;

  const [{ anchorEl, open, id }, { handleClick, handleClose }] =
    useWalletSelectorHook();
  const isMobile = window.innerWidth <= 600;

  return (
    <div>
      {!isConnected ? (
        <Button
          icon={
            isMobile ? (
              <WalletConnectIcon color={theme.palette.text.primary} />
            ) : showIconD ? (
              <WalletConnectIcon color={theme.palette.common.white} />
            ) : undefined
          }
          onClick={() => {
            openConnectWallet(), handleClose();
          }}
          fontFamily={theme.typography.fontFamily}
          variant={isMobile ? "text" : "contained"}
          label={isMobile ? undefined : labels.connectWallet}
          optionalStyles={{ padding: theme.spacing(1.5, 2) }}
          bgColor={isMobile ? "" : theme.palette.secondary.main}
          fontSize={fontSize}
          fontWeight={fontWeight}
          MaxHeight={MaxHeight}
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
