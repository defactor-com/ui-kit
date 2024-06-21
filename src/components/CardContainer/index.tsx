import React from "react";
import clsx from "clsx";

import { ICardContainer } from "./CardContainerTypes";

export const CardContainer = ({
  externalStyles,
  optionalStyles,
  content,
  handleMouseEnter,
  handleMouseLeave,
  hoverBehavior,
  isPointer,
  ...props
}: ICardContainer) => {
  const defaultStyles: React.CSSProperties = {
    cursor: isPointer ? "pointer" : "text",
  };

  return (
    <div
      className={clsx(externalStyles, "card-container")}
      {...props}
      style={{ ...defaultStyles, ...optionalStyles }}
      onMouseEnter={() =>
        handleMouseEnter &&
        handleMouseEnter(true && hoverBehavior ? hoverBehavior : false)
      }
      onMouseLeave={() => handleMouseLeave && handleMouseLeave(false)}
    >
      {content}
    </div>
  );
};
