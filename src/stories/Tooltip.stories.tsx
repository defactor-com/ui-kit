import React from "react";
import { Story } from "@storybook/react";

import InfoIcon from "../../public/assets/info-icon.svg";
import { Tooltip } from "../components/Tooltip";
import { ITooltip } from "../components/Tooltip/TooltipTypes";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template: Story<ITooltip> = (args) => <Tooltip {...args} />;

export const TooltipItem = Template.bind({});
TooltipItem.args = {
  icon: InfoIcon,
  text: "This is a tooltip",
  fontFamily: "cursive",
};
