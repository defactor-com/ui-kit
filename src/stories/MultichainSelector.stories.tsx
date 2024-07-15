import React from "react";
import { Story } from "@storybook/react";

import { MultichainSelector } from "../components/MultichainSelector";
import { IPieChart, PieDataType } from "../components/PieChart/PieChartTypes";
import AdmirationIcon from "../components/Icons/admirationIcon";

export default {
  title: "MultichainSelector",
  component: MultichainSelector,
};

const networksList = [
  {
    chainId: 80002,
    rpcUrl:
      "https://polygon-amoy.g.alchemy.com/v2",
    name: "Amoy",
    currency: "MATIC",
    explorerUrl: "https://www.oklink.com/amoy",
    baseTokenAddress: "0x60E87395b0101F85C623c38Be010574f958496db",
    collateralAddress: "0x8574299682D036F88195a2685601D90300E21Bca",
    poolContractAddress: "0x5139129588Ed02d8761aACad1dcCd887c8522f4d",
  },
  {
    chainId: 11155111,
    rpcUrl:
      "https://eth-sepolia.g.alchemy.com/v2",
    name: "Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.otterscan.io",
    baseTokenAddress: "0x75fe3476d90598080f7D12365020C438943Dcef3",
    collateralAddress: "0x7D5c1468D8bE9f0F4FaD26F2Cb7e6b2ed9042577",
    poolContractAddress: "0x295894a94F859cE1Ac960364D6b0D2Fa430027b4",
  },
];
const networksAssets = {
  "1": {
    logo: "https://pools-dev.defactor.dev/logos/eth-color-logo.svg",
    name: "Ethereum",
    dbName: "ethereum",
  },
  "56": {
    logo: "https://pools-dev.defactor.dev/logos/eth-color-logo.svg",
    name: "BSC",
    dbName: "bsc",
  },
  "97": {
    logo: "https://pools-dev.defactor.dev/logos/eth-color-logo.svg",
    name: "BSC Testnet",
    dbName: "bsc",
  },
  "137": {
    logo: "https://pools-dev.defactor.dev/logos/eth-color-logo.svg",
    name: "Polygon",
    dbName: "polygon",
  },
  "8453": {
    logo: "https://pools-dev.defactor.dev/logos/eth-color-logo.svg",
    name: "Base",
    dbName: "base",
  },
  "80002": {
    logo: "https://pools-dev.defactor.dev/logos/eth-color-logo.svg",
    name: "Amoy",
    dbName: "polygon",
  },
  "84532": {
    logo: "https://pools-dev.defactor.dev/logos/eth-color-logo.svg",
    name: "Base Testnet",
    dbName: "base",
  },
  "11155111": {
    logo: "https://pools-dev.defactor.dev/logos/eth-color-logo.svg",
    name: "Sepolia",
    dbName: "ethereum",
  },
};
const networkSelected = [
  {
    chainId: 80002,
    rpcUrl:
      "https://polygon-amoy.g.alchemy.com/v2",
    name: "Amoy",
    currency: "MATIC",
    explorerUrl: "https://www.oklink.com/amoy",
    baseTokenAddress: "0x60E87395b0101F85C623c38Be010574f958496db",
    collateralAddress: "0x8574299682D036F88195a2685601D90300E21Bca",
    poolContractAddress: "0x5139129588Ed02d8761aACad1dcCd887c8522f4d",
  },
  {
    chainId: 11155111,
    rpcUrl:
      "https://eth-sepolia.g.alchemy.com/v2",
    name: "Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.otterscan.io",
    baseTokenAddress: "0x75fe3476d90598080f7D12365020C438943Dcef3",
    collateralAddress: "0x7D5c1468D8bE9f0F4FaD26F2Cb7e6b2ed9042577",
    poolContractAddress: "0x295894a94F859cE1Ac960364D6b0D2Fa430027b4",
  },
];

const Template: Story<IPieChart> = (args) => {
  return (
    <MultichainSelector
      {...args}
      fontFamily=""
      color="#26A66B"
      variant="outlined"
      onClick={() => {}}
      onChange={() => {}}
      textFieldLabel="Chains"
      networksList={networksList}
      networksAssets={networksAssets}
      networkSelected={networkSelected}
    />
  );
};

const pieChartData: PieDataType = [
  { name: "Active", value: 135, color: "#26A66B" },
  { name: "Claimed", value: 50, color: "#5A5BEB" },
  { name: "Available", value: 65, color: "#D21A4D" },
];

export const PieChartItem = Template.bind({});
PieChartItem.args = {
  data: pieChartData,
  loading: false,
  emptyIcon: <AdmirationIcon />,
  emptyTitle: "No data to show",
  emptyDescription: "Data will be listed here when available. ",
};
