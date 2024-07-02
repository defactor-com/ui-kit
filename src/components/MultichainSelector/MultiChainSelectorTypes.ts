export type NetworksDataType = {
  logo: any;
  name: string;
  rpcUrl: string;
  chainId: number;
  explorerUrl: string;
  baseTokenAddress: string;
  collateralAddress: string;
  poolContractAddress: string;
  currency: "MATIC" | "ETH" | "BNB";
};

export type IMultiChainSelector = {
  color: string;
  fontFamily?: string;
  networksAssets: any;
  textFieldLabel: string;
  networksList: Array<NetworksDataType>;
  networkSelected: Array<NetworksDataType>;
  variant?: "filled" | "outlined" | "standard";
  onClick: (state: NetworksDataType, selected: boolean) => void;
  onChange: (_: any, selectedValue: Array<NetworksDataType>) => void;
};
