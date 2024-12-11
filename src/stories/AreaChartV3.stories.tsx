import React from "react";
import { Story } from "@storybook/react";
import { AreaChartV3, AreaChartV3Props } from "../components/V3/AreaChartV3";

export default {
  title: "V3/AreaChartV3",
  component: AreaChartV3,
  argTypes: {
    padding: { control: "text" },
    margin: { control: "text" },
    backgroundColor: { control: "color" },
    borderRadius: { control: "text" },
    sx: { control: false },
    children: { control: "text" },
  },
};

const Template: Story<AreaChartV3Props> = (args) => <AreaChartV3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "This is an example.",
};
