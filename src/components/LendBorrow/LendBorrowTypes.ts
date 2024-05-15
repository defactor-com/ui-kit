import { ChangeEvent } from "react";

import { InputValue } from "../Input/InputTypes";

export interface ILendBorrow {
  color?: string;
  onLend(): void;
  onBorrow(): void;
  bgColor?: string;
  walletSvg: string;
  labelLend: string;
  currentTab: string;
  disabled?: boolean;
  lendingSvg: string;
  labelBorrow: string;
  textWallet?: string;
  fontFamily?: string;
  tokenSymbol?: string;
  borrowingSvg: string;
  textCollateral?: string;
  value: InputValue | bigint;
  collateralBalance?: string;
  loader?: React.ReactElement;
  collateralRequired?: string;
  showRequiredCollateral?: boolean;
  loaderCollateral?: React.ReactElement;
  tokenIcon?: React.ReactElement | string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  onChangeTab: (event: React.SyntheticEvent, newValue: string) => void;
}
