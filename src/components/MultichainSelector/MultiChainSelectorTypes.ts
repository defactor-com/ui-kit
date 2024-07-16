export type NetworksDataType = {
  name: string;
  rpcUrl: string;
  chainId: number;
  currency: string;
  explorerUrl: string;
  baseTokenAddress: string;
  collateralAddress: string;
  poolContractAddress: string;
};

export type IMultiChainSelector = {
  color: string;
  fontFamily?: string;
  networksAssets: any;
  textFieldLabel: string;
  networksList: Array<NetworksDataType>;
  networkSelected: Array<NetworksDataType>;
  onClick: (state: NetworksDataType) => void;
};
