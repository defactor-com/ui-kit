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
    { time: "00:00", value: 30000},
    { time: "04:00", value: 30000 },
    { time: "08:00", value: 30000 },
    { time: "12:00", value: 30000 }
  ]
};
