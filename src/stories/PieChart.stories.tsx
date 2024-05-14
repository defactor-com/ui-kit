import React from "react";
import { Story } from "@storybook/react";

import { PieChart } from "../components/PieChart";
import { IPieChart, PieDataType } from "../components/PieChart/PieChartTypes";
import AdmirationIcon from "../components/Icons/admirationIcon";

export default {
  title: "Charts/PieChart",
  component: PieChart,
};

const Template: Story<IPieChart> = (args) => {
  return (
    <PieChart
      {...args}
      loaderComponent={
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <span>Loading...</span>
        </div>
      }
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
