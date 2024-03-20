import React from "react";
import { Story } from "@storybook/react";

import { BarChart, IBarChart, ChartSeriesType } from "../components/BarChart";

export default {
  title: "Charts/BarChart",
  component: BarChart,
};

const formatValue = (value: number, options?: Intl.NumberFormatOptions) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  });
};

const Template: Story<IBarChart> = (args) => {
  return <BarChart {...args} />;
};

const poolNames = ["POOL A", "POOL B", "POOL C"];
const barChartColors = ["#5A5BEB", "#26A66B80"];
const barChatSeries: ChartSeriesType[] = [
  { name: "Lending", data: [3, 2.2, 9.5] },
  { name: "Borrowing", data: [4.5, 5.2, 2.3] },
];

export const BarChartItem = Template.bind({});
BarChartItem.args = {
  formatValue,
  series: barChatSeries,
  colors: barChartColors,
  data: poolNames,
};
