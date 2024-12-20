/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from "@mui/material";
import { MouseEvent } from "react";
import { NetworksDataType } from "../MultichainSelector/MultiChainSelectorTypes";

export type ChainIdType = 1 | 137 | 11155111 | 80002 | 97 | 84532 | 8453 | 56;

export type WalletContainerProps = {
  onClickMenuOption(chainId: ChainIdType): NetworksDataType;
  configNetworks: Array<NetworksDataType>;
  onClick(collateral: TokenBalance): void;
  handleFormartCurrency: () => string;
  address: `0x${string}` | undefined;
  handleLogout: () => Promise<void>;
  anchorEl: HTMLDivElement | null;
  labels: {
    collateralBalance: string;
    copyToClipboard: string;
    connectWallet: string;
    disconnect: string;
    balance: string;
    network: string;
    copied: string;
  };
  networksAssets: Array<any>;
  formatCurrency(
    value: number | string | bigint,
    precision: number,
    cutValue?: boolean
  ): string;
  id: string | undefined;
  networks: Array<any>;
  handleClose(): void;
  userContext: any;
  open: boolean;
  theme: Theme;
  showIconD?: boolean;
  fontSize?: number | string;
  fontWeight?: number | string;
  MaxHeight?: number | string;
};

export type WalletSelectorData = {
  anchorEl: HTMLDivElement | null;
  id: string | undefined;
  open: boolean;
};

export type WalletSelectorCallbacks = {
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
  handleClose: () => void;
};

export type WalletContainerData = {
  isAddressCopied: boolean;
};

export type WalletContainerCallbacks = {
  formatAddress: (address: `0x${string}` | undefined | string) => string;
  handleAddressCopy: () => void;
};

export interface SwitchError extends Error {
  error?: string;
  code?: number;
}

export interface AccessToken {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  v1Login: {
    res: AccessToken;
  };
}

export interface IWalletSelector extends WalletContainerProps {
  userContext: any;
  isConnected: boolean;
  openConnectWallet(): void;
  networksAssets: Array<any>;
}

export type TokenBalance = {
  symbol: string;
  address: string;
  balance: bigint;
  decimals: number;
};
