import React from "react";
import clsx from "clsx";

import { ICardContainer } from "./CardContainerTypes";

export const CardContainer = ({
  externalStyles,
  content,
  handleMouseEnter,
  handleMouseLeave,
  hoverBehavior,
  isPointer,
  ...props
}: ICardContainer) => (
  <div
    className={clsx(externalStyles, "card-container")}
    {...props}
    style={{
      cursor: isPointer ? "pointer" : "text",
      width: "max-content",
    }}
    onMouseEnter={() =>
      handleMouseEnter &&
      handleMouseEnter(true && hoverBehavior ? hoverBehavior : false)
    }
    onMouseLeave={() => handleMouseLeave && handleMouseLeave(false)}
  >
    {content}
  </div>
);
