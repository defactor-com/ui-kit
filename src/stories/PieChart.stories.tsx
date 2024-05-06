import React from "react";
import { Story } from "@storybook/react";

import { PieChart, IPieChart, PieDataType } from "../components/PieChart";

export default {
  title: "Charts/PieChart",
  component: PieChart,
};

const Template: Story<IPieChart> = (args) => {
  return <PieChart {...args} />;
};

const pieChartData: PieDataType = [
  { name: "Active", value: 135, color: "#26A66B" },
  { name: "Claimed", value: 50, color: "#5A5BEB" },
  { name: "Available", value: 65, color: "#D21A4D" },
];

export const PieChartItem = Template.bind({});
PieChartItem.args = {
  data: pieChartData,
};
