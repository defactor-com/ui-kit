export interface ICollateralSection {
  fontFamily?: string;
  textWallet?: string;
  tokenSymbol?: string;
  numberWallet?: string;
  textCollateral?: string;
  requiredSection: boolean;
  backgroundColor?: string;
  numberCollateral?: string;
  loader?: React.ReactElement;
  tokenIcon?: React.ReactElement | string;
  walletIcon?: React.ReactElement | string;
}
