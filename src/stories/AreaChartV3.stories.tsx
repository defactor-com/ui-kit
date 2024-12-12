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
    data: { control: false },
    xKey: { control: "text" },
    yKey: { control: "text" },
  },
};

const Template: Story<AreaChartV3Props> = (args) => <AreaChartV3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "00:00", value: 140000 },
    { name: "04:00", value: 210000 },
    { name: "08:00", value: 250000 },
    { name: "12:00", value: 300000 },
    { name: "14:00", value: 310000 },
    { name: "16:00", value: 350000 },
    { name: "00:00", value: 390000 },
  ],
  width: "100%",
  height: 300,
  xKey: "name",
  yKey: "value",
  areaColor: "#8884d8",
};
