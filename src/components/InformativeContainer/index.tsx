import React from "react";
import clsx from "clsx";

import { IInformativeContainer } from "./InformativeContainerTypes";

export const InformativeContainer = ({
  externalStyles,
  optionalStyles,
  content,
  handleMouseEnter,
  handleMouseLeave,
  hoverBehavior,
  isPointer,
  ...props
}: IInformativeContainer) => {
  const defaultStyles: React.CSSProperties = {
    cursor: isPointer ? "pointer" : "text",
  };

  return (
    <div
      className={clsx(externalStyles, "informative-container")}
      {...props}
      style={{
        ...defaultStyles,
        ...optionalStyles,
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
};
