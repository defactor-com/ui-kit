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
  data:  [
    { time: "00:00", value: 100000 },
    { time: "01:00", value: 110000 },
    { time: "02:00", value: 120000 },
    { time: "03:00", value: 130000 },
    { time: "04:00", value: 140000 },
    { time: "05:00", value: 150000 },
    { time: "06:00", value: 160000 },
    { time: "07:00", value: 170000 },
    { time: "08:00", value: 180000 },
    { time: "09:00", value: 190000 },
    { time: "10:00", value: 200000 },
    { time: "11:00", value: 210000 },
    { time: "12:00", value: 220000 },
    { time: "13:00", value: 230000 },
    { time: "14:00", value: 240000 },
    { time: "15:00", value: 250000 },
    { time: "16:00", value: 260000 },
    { time: "17:00", value: 270000 },
    { time: "18:00", value: 280000 },
    { time: "19:00", value: 290000 },
    { time: "20:00", value: 300000 },
    { time: "21:00", value: 310000 },
    { time: "22:00", value: 320000 },
    { time: "23:00", value: 330000 }
  ],
};
