import React from "react";
import { Story } from "@storybook/react";

import AdmirationIcon from "../components/Icons/admirationIcon";
import { BarChart, IBarChart, ChartSeriesType } from "../components/BarChart";

export default {
  title: "Charts/BarChart",
  component: BarChart,
};

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

const Template: Story<IBarChart> = (args) => {
  return <BarChart {...args} />;
};

const poolNames = ["POOL A", "POOL B", "POOL C"];
const barChartColors = ["#5A5BEB", "#26A66B80"];
const barChatSeries: ChartSeriesType[] = [
  { name: "Lending", data: [3000, 200, 1000] },
  { name: "Borrowing", data: [1500, 500, 800] },
];

export const BarChartItem = Template.bind({});
BarChartItem.args = {
  formatValue,
  series: barChatSeries,
  colors: barChartColors,
  data: [],
  loading: false,
  emptyIcon: <AdmirationIcon />,
  emptyTitle: "No data to show",
  emptyDescription: "Data will be listed here when available. ",
};
