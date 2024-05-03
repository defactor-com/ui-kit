import React, { useState } from "react";
import { Story } from "@storybook/react";

import InfoIcon from "../../public/assets/info-icon.svg";
import { Tooltip, ITooltip } from "../components/Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template: Story<ITooltip> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (newValue: boolean) => {
    setIsOpen(newValue);
  };
  return <Tooltip {...args} isOpen={isOpen} handleChange={handleChange} />;
};

export const TooltipItem = Template.bind({});
TooltipItem.args = {
  icon: InfoIcon,
  text: "This is a tooltip",
  fontFamily: "cursive",
};
