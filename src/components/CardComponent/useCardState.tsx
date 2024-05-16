import React, { useState } from "react";

import { Tooltip } from "../Tooltip";
import { ITooltip } from "../Tooltip/TooltipTypes";

interface useCardData {
  tooltip: React.ReactElement | undefined;
}

interface useCardCallbacks {
  handleChange: (newValue: boolean) => void;
}

export const useCardState = (
  infoTooltip: Omit<ITooltip, "handleChange"> | undefined
): [useCardData, useCardCallbacks] => {
  const icon = infoTooltip?.icon;
  const [currentIcon, setCurrentIcon] = useState(icon);
  const [isOpen, setIsOpen] = useState(false);
  const activeIcon = infoTooltip?.activeIcon;

  const handleChange = (newValue: boolean) => {
    if (newValue) setCurrentIcon(activeIcon ? activeIcon : icon);
    else setCurrentIcon(infoTooltip?.icon);

    setIsOpen(newValue);
  };

  const tooltip =
    infoTooltip !== undefined ? (
      <Tooltip
        {...infoTooltip}
        icon={currentIcon}
        isOpen={isOpen}
        handleChange={handleChange}
      />
    ) : undefined;

  return [{ tooltip }, { handleChange }];
};
