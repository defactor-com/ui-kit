import React from "react";
import { Story } from "@storybook/react";

import { Graphic, GraphicDataType, IGraphic, SeriesDataType } from "../components/Graphic";

export default {
  title: "Charts/Graphic",
  component: Graphic,
};

const formatValue = (value: number, options?: Intl.NumberFormatOptions) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  });
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

const Template: Story<IGraphic> = (args) => {
  return <Graphic {...args} />;
};

export const GraphicItem = Template.bind({});
GraphicItem.args = {
  formatValue,
  series,
  data,
  colors,
};
