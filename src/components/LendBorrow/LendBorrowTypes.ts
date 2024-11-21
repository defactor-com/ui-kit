import React, { ChangeEvent } from "react";

import { InputValue } from "../Input/InputTypes";

export interface ILendBorrow {
  color?: string;
  onLend(): void;
  buttonsLabels: {
    max: string;
    min: string;
  };
  onBorrow(): void;
  bgColor?: string;
  value: InputValue;
  walletSvg: string;
  labelLend: string;
  currentTab: string;
  disabled?: boolean;
  lendingSvg: string;
  inputError?: string;
  labelBorrow: string;
  maxOnclick?(): void;
  minOnclick?(): void;
  textWallet?: string;
  fontFamily?: string;
  borrowingSvg: string;
  maxLendBorrow?: string;
  minLendBorrow?: string;
  minAmountLabel?: string;
  maxAmountLabel?: string;
  textCollateral?: string;
  baseTokenSymbol?: string;
  collateralBalance?: string;
  loader?: React.ReactElement;
  collateralTokenSymbol?: string;
  selectedPool?: React.ReactNode;
  showRequiredCollateral?: boolean;
  loaderCollateral?: React.ReactElement;
  tokenIcon?: React.ReactElement | string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  collateralRequired?: React.ReactElement | string;
  onChangeTab: (event: React.SyntheticEvent, newValue: string) => void;
}
