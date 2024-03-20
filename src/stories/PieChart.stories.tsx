import React from "react";
import { Story } from "@storybook/react";

import { PieChart, IPieChart, PieDataType } from "../components/PieChart";

export default {
  title: "Charts/PieChart",
  component: PieChart,
};

const formatValue = (value: number | string, options?: Intl.NumberFormatOptions) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  });
};

const Template: Story<IPieChart> = (args) => {
  return <PieChart {...args} />;
};

const pieChartData: PieDataType = [
  { name: "Active", value: 135 },
  { name: "Claimed", value: 50 },
  { name: "Available", value: 65 },
];
const pieChartColors = ["#26A66B", "#5A5BEB", "#D21A4D"];

export const PieChartItem = Template.bind({});
PieChartItem.args = {
  formatValue,
  data: pieChartData,
  colors: pieChartColors,
};
