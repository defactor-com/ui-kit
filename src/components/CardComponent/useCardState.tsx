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
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newValue: boolean) => {
    setIsOpen(newValue);
  };

  const tooltip =
    infoTooltip !== undefined ? (
      <Tooltip {...infoTooltip} isOpen={isOpen} handleChange={handleChange} />
    ) : undefined;

  return [{ tooltip }, { handleChange }];
};
