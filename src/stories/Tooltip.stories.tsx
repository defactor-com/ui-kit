import React from "react";
import { Story } from "@storybook/react";

import InfoIcon from "../../public/assets/info-icon.svg";
import { Tooltip, ITooltip } from "../components/Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template: Story<ITooltip> = (args) => <Tooltip {...args} />;

export const TooltipItem = Template.bind({});
TooltipItem.args = {
  icon: InfoIcon,
  text: "This is a tooltip",
};
