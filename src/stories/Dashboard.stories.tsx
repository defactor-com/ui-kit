import React from "react";
import { Story } from "@storybook/react";

import { GraphicDataType, SeriesDataType } from "../components/Graphic";
import { Dashboard, IDashboard } from "../components/Dashboard";

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
]

const formatValue = (value: number) => {
  const newValue = value.toFixed(2)

  const [integer, decimal] = newValue.toString().split('.')

  return `$${integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${
    decimal ? '.' + decimal : ''
  }`
}

const Template: Story<IDashboard> = (args) => {
  return (
    <Dashboard
      {...args}
      data={data}
      colors={colors}
      series={series}
      currency="USDC"
      poolsLabel="Pools"
      totalValueLocked={888888888888}
      titleGraphic="Total Value Locked"
      chartSubtitle="Pool Utilization"
      chartDescription="Optional Description"
      poolsLabel1Container="Active Loans"
      poolsValue1Container={1200.0}
      poolsLabel2Container="All Repaid Loans"
      poolsValue2Container={2500.0}
      poolsLabel3Container="Interest Paid "
      poolsValue3Container={200.0}
      bottomLabel="General"
      bottomContainerItems={bottomContainerItems}
      formatValue={formatValue}
    />
  );
};

export const DashboardItem = Template.bind({});
DashboardItem.args = {};
