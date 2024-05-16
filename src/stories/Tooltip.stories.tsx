import React, { useState } from "react";
import { Story } from "@storybook/react";

import InfoIcon from "../../public/assets/info-icon.svg";
import InfoActiveIcon from "../../public/assets/info-active-icon.svg";
import { Tooltip } from "../components/Tooltip";
import { ITooltip } from "../components/Tooltip/TooltipTypes";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template: Story<ITooltip> = (args) => {
  const [currentIcon, setCurrentIcon] =
    useState<string | React.ReactElement>(InfoIcon);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (newValue: boolean) => {
    if (newValue) setCurrentIcon(InfoActiveIcon ? InfoActiveIcon : InfoIcon);
    else setCurrentIcon(InfoIcon);

    setIsOpen(newValue);
  };

  return (
    <Tooltip
      {...args}
      icon={currentIcon}
      isOpen={isOpen}
      handleChange={handleChange}
    />
  );
};

export const TooltipItem = Template.bind({});
TooltipItem.args = {
  text: "This is a tooltip",
  fontFamily: "cursive",
};
