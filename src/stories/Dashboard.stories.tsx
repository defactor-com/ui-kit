import React from "react";
import { Story } from "@storybook/react";

import {
  LineChart,
  LineChartDataType,
  SeriesDataType,
} from "../components/LineChart";
import { CardItem, Dashboard, IDashboard } from "../components/Dashboard";
import { ChartContainer } from "../components/ChartContainer";
import { Tooltip } from "../components/Tooltip";
import { BarChart } from "../components/BarChart";
import { PieChart } from "../components/PieChart";

import InfoIcon from "../../public/assets/info-icon.svg";

export default {
  title: "Dashboard",
  component: Dashboard,
};

const exampleTooltip = <Tooltip icon={InfoIcon} text="This is a tooltip" />;

const colors: string[] = ["#26A66B", "#5A5BEB", "#D21A4D"];
const series: SeriesDataType[] = [
  {
    name: "Total Available",
    data: [
      { value: 40, fluctuation: "+1.4%", fluctuationValue: "+$2,400" },
      { value: 60, fluctuation: "-0.2%", fluctuationValue: "+$2,400" },
      { value: 90, fluctuation: "+5.3%", fluctuationValue: "+$2,400" },
      { value: 50, fluctuation: "+5.3%", fluctuationValue: "+$2,400" },
      { value: 30, fluctuation: "+5.3%", fluctuationValue: "+$2,400" },
    ],
  },
  {
    name: "Total Borrowed",
    data: [
      { value: 50, fluctuation: "+3.5%", fluctuationValue: "+$2,400" },
      { value: 40, fluctuation: "-0.8%", fluctuationValue: "+$2,400" },
      { value: 20, fluctuation: "+1.8%", fluctuationValue: "+$2,400" },
      { value: 30, fluctuation: "+1.8%", fluctuationValue: "+$2,400" },
      { value: 60, fluctuation: "+1.8%", fluctuationValue: "+$2,400" },
    ],
  },
  {
    name: "Total Lent",
    data: [
      { value: 10, fluctuation: "-0.5%", fluctuationValue: "+$2,400" },
      { value: 20, fluctuation: "+1.2%", fluctuationValue: "+$2,400" },
      { value: 40, fluctuation: "-1.1%", fluctuationValue: "+$2,400" },
      { value: 80, fluctuation: "-1.1%", fluctuationValue: "+$2,400" },
      { value: 40, fluctuation: "-1.1%", fluctuationValue: "+$2,400" },
    ],
  },
];

const data: LineChartDataType[] = [
  {
    date: "25 July 00:00",
  },
  {
    date: "26 July 00:00",
  },
  {
    date: "27 July 00:00",
  },
  {
    date: "28 July 00:00",
  },
  {
    date: "29 July 00:00",
  },
];

const bottomContainerItems: CardItem[] = [
  {
    label: "Total Available",
    value: "$20,000.00",
    fluctuation: "+3.4%",
    fluctuationValue: "+$2,400",
    tooltip: exampleTooltip,
  },
  {
    label: "Total Borrowed",
    value: "$20,000.00",
    fluctuation: "-3.4%",
    fluctuationValue: "-$2,400",
    tooltip: exampleTooltip,
  },
  {
    label: "Total Lent",
    value: "$20,000.00",
    fluctuation: "+3.4%",
    fluctuationValue: "+$2,400",
  },
];

const rightContainerItems: CardItem[] = [
  { label: "Active Loans", value: "$12,00.00", tooltip: exampleTooltip },
  { label: "All Repaid Loans", value: "$2,500.00" },
  { label: "Interest Paid", value: "$200.00", tooltip: exampleTooltip },
  {
    label: "Loan to Value Ratio",
    value: "75%",
    color: colors[0],
    fluctuation: "+3.4%",
    tooltip: exampleTooltip,
  },
];

const formatValue = (
  value: number | string,
  options?: Intl.NumberFormatOptions
) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  });
};

const Template: Story<IDashboard> = (args) => {
  return <Dashboard {...args} />;
};

export const DashboardItem = Template.bind({});
DashboardItem.args = {
  colors,
  currency: "USDC",
  totalValueLocked: formatValue(888888888888, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  titleGraphic: "Total Value Locked",
  bottomLabel: "General",
  bottomContainerItems,
  rightLabel: "Pools",
  rightContainerItems,
  content: (
    <ChartContainer
      chartSubtitle={"Pool Utilization"}
      chartDescription={"Optional Description"}
      tooltip={exampleTooltip}
      content={
        <LineChart
          formatValue={formatValue}
          colors={colors}
          data={data}
          series={series}
        />
      }
    />
  ),
};

const poolNames = ["POOL A", "POOL B", "POOL C"];
const barChartColors = ["#5A5BEB", "#26A66B80"];
const barChatSeries = [
  { name: "Lending", data: [3, 2.2, 9.5] },
  { name: "Borrowing", data: [4.5, 5.2, 2.3] },
];
const pieChartData = [
  { name: "Active", value: 135 },
  { name: "Claimed", value: 50 },
  { name: "Available", value: 65 },
];
const pieChartColors = ["#26A66B", "#5A5BEB", "#D21A4D"];
const rightContainerItems1: CardItem[] = [
  { label: "Total Active Loans", value: "1,200", tooltip: exampleTooltip },
  { label: "Loans Ready to Claim", value: "2,500" },
  { label: "Total Claimed Loans", value: "200", tooltip: exampleTooltip },
  { label: "Total Interest Earned", value: "800" },
  { label: "Total Amount Lent", value: "$7,000.00", tooltip: exampleTooltip },
];

const Charts = () => (
  <>
    <ChartContainer
      chartSubtitle="Pool Utilization"
      chartDescription="Optional Description"
      tooltip={exampleTooltip}
      content={
        <BarChart
          formatValue={formatValue}
          series={barChatSeries}
          colors={barChartColors}
          data={poolNames}
        />
      }
    />
    <ChartContainer
      chartSubtitle="Pools by Status"
      chartDescription="Optional Description"
      content={<PieChart colors={pieChartColors} data={pieChartData} />}
    />
  </>
);

export const DashboardLendingItem = Template.bind({});
DashboardLendingItem.args = {
  currency: "USDC",
  totalValueLocked: formatValue(888888888888, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  titleGraphic: "Total Value Locked",
  rightLabel: "Stats",
  rightContainerItems: rightContainerItems1,
  content: <Charts />,
};

const rightContainerItems2: CardItem[] = [
  { label: "Funds Available", value: "$2500.00", tooltip: exampleTooltip },
  { label: "Total Loans Repaid", value: 200 },
  { label: "Total Loans", value: 800, tooltip: exampleTooltip },
  { label: "Next Loan to Reach Maturity", value: "Pool B" },
];

export const DashboardBorrowingItem = Template.bind({});
DashboardBorrowingItem.args = {
  rightLabel: "Stats",
  rightContainerItems: rightContainerItems2,
  content: <Charts />,
};
