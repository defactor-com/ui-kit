import React from "react";
import clsx from "clsx";

import { IInformativeContainer } from "./InformativeContainerTypes";

export const InformativeContainer = ({
  externalStyles,
  content,
  handleMouseEnter,
  handleMouseLeave,
  hoverBehavior,
  isPointer,
  ...props
}: IInformativeContainer) => (
  <div
    className={clsx(externalStyles, "informative-container")}
    {...props}
    style={{
      cursor: isPointer ? "pointer" : "text",
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
