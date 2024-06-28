export type NetworksDataType = {
  logo: any;
  name: string;
  rpcUrl: string;
  chainId: number;
  explorerUrl: string;
  baseTokenAddress: string;
  currency: "MATIC" | "ETH";
  collateralAddress: string;
  poolContractAddress: string;
};

export type IMultiChainSelector = {
  networksAssets: any;
  textFieldLabel: string;
  onClick: (event: any) => void;
  networksList: Array<NetworksDataType>;
  networkSelected: Array<NetworksDataType>;
  onChange: (_: any, selectedValue: any) => void;
};
