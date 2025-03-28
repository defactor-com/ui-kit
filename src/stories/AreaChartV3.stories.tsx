import React from "react";
import { Story } from "@storybook/react";
import { AreaChartV3, AreaChartV3Props } from "../components/V3/AreaChartV3";
import { Box } from "@mui/material";

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

const Template: Story<AreaChartV3Props> = (args) => (
  <Box sx={{ width: "374px" }}>
    <AreaChartV3 {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { time: "00:00", value: 140000 },
    { time: "04:00", value: 210000 },
    { time: "08:00", value: 250000 },
    { time: "12:00", value: 300000 },
    { time: "14:00", value: 310000 },
    { time: "16:00", value: 350000 },
    { time: "00:00", value: 390000 },
    { time: "00:00", value: 140000 },
    { time: "04:00", value: 210000 },
    { time: "08:00", value: 250000 },
    { time: "12:00", value: 300000 },
    { time: "14:00", value: 310000 },
    { time: "16:00", value: 350000 },
    { time: "00:00", value: 390000 },
    { time: "08:00", value: 250000 },
    { time: "12:00", value: 300000 },
    { time: "14:00", value: 310000 },
    { time: "16:00", value: 350000 },
    { time: "00:00", value: 390000 },
  ],
};
