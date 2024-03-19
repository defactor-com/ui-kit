import React from "react";
import { Story } from "@storybook/react";

import {
  Graphic,
  GraphicDataType,
  SeriesDataType,
} from "../components/Graphic";
import { Dashboard, IDashboard } from "../components/Dashboard";
import { ChartContainer } from "../components/ChartContainer";
import { BarChart } from "../components/BarChart";
import { PieChart } from "../components/PieChart";

export default {
  title: "Dashboard",
  component: Dashboard,
};

const colors: string[] = ["#26A66B", "#5A5BEB", "#D21A4D"];
const series: SeriesDataType[] = [
  {
    name: "Total Available",
    data: [
      { value: 40, fluctuation: "+1.4%" },
      { value: 60, fluctuation: "-0.2%" },
      { value: 90, fluctuation: "+5.3%" },
      { value: 50, fluctuation: "+5.3%" },
      { value: 30, fluctuation: "+5.3%" },
    ],
  },
  {
    name: "Total Borrowed",
    data: [
      { value: 50, fluctuation: "+3.5%" },
      { value: 40, fluctuation: "-0.8%" },
      { value: 20, fluctuation: "+1.8%" },
      { value: 30, fluctuation: "+1.8%" },
      { value: 60, fluctuation: "+1.8%" },
    ],
  },
  {
    name: "Total Lent",
    data: [
      { value: 10, fluctuation: "-0.5%" },
      { value: 20, fluctuation: "+1.2%" },
      { value: 40, fluctuation: "-1.1%" },
      { value: 80, fluctuation: "-1.1%" },
      { value: 40, fluctuation: "-1.1%" },
    ],
  },
];

const data: GraphicDataType[] = [
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

const bottomContainerItems = [
  { label: "Total Available", value: 20000, fluctuation: "+3.4%" },
  { label: "Total Borrowed", value: 20000, fluctuation: "-3.4%" },
  { label: "Total Lent", value: 20000, fluctuation: "+3.4%" },
];

const rightContainerItems = [
  { label: "Active Loans", value: 1200 },
  { label: "All Repaid Loans", value: 2500 },
  { label: "Interest Paid", value: 200 },
  { label: "Loan to Value Ratio", value: "75%" },
];

const formatValue = (value: number, options?: Intl.NumberFormatOptions) => {
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
  totalValueLocked: 888888888888,
  titleGraphic: "Total Value Locked",
  bottomLabel: "General",
  bottomContainerItems,
  rightLabel: "Pools",
  rightContainerItems,
  formatValue,
  content: (
    <ChartContainer
      chartSubtitle={"Pool Utilization"}
      chartDescription={"Optional Description"}
      content={
        <Graphic
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
const rightContainerItems1 = [
  { label: "Total Active Loans", value: 1200 },
  { label: "Loans Ready to Claim", value: 2500 },
  { label: "Total Claimed Loans", value: 200 },
  { label: "Total Interest Earned", value: 800 },
  { label: "Total Amount Lent", value: 7000 },
];

const Charts = () => (
  <>
    <ChartContainer
      chartSubtitle="Pool Utilization"
      chartDescription="Optional Description"
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
      chartSubtitle="Pool by Status"
      chartDescription="Optional Description"
      content={
        <PieChart
          formatValue={formatValue}
          colors={pieChartColors}
          data={pieChartData}
        />
      }
    />
  </>
);

export const DashboardLendingItem = Template.bind({});
DashboardLendingItem.args = {
  currency: "USDC",
  totalValueLocked: 888888888888,
  titleGraphic: "Total Value Locked",
  rightLabel: "Stats",
  rightContainerItems: rightContainerItems1,
  formatValue,
  content: <Charts />,
};

const rightContainerItems2 = [
  { label: "Loans Ready to Borrows", value: 2500 },
  { label: "Total Borrows Repaid", value: 200 },
  { label: "Total Debt", value: 800 },
  { label: "Next Borrow to Reach Maturity", value: 'Pool B' },
];

export const DashboardBorrowingItem = Template.bind({});
DashboardBorrowingItem.args = {
  rightLabel: "Stats",
  formatValue,
  rightContainerItems: rightContainerItems2,
  content: <Charts />,
};
