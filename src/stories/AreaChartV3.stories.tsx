import React from "react";
import { Story } from "@storybook/react";
import { AreaChartV3, AreaChartV3Props } from "../components/V3/AreaChartV3";

export default {
  title: "V3/AreaChartV3",
  component: AreaChartV3,
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    areaColor: { control: "color" },
    gridColor: { control: "color" },
    data: { control: false },
    xKey: { control: "text" },
    yKey: { control: "text" },
  },
};

const Template: Story<AreaChartV3Props> = (args) => <AreaChartV3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "00:00", value: 140 },
    { name: "04:00", value: 210 },
    { name: "08:00", value: 250 },
    { name: "12:00", value: 300 },
    { name: "14:00", value: 310 },
    { name: "16:00", value: 350 },
    { name: "00:00", value: 390 },
  ],
  width: "100%",
  height: 300,
  xKey: "name",
  yKey: "value",
  areaColor: "#8884d8",
  gridColor: "#f0f0f0",
};