import React from "react";
import clsx from "clsx";

export interface ICardContainer {
  content: React.ReactNode;
  externalStyles?: string;
  handleMouseEnter?: (newValue: boolean) => void;
  handleMouseLeave?: (newValue: boolean) => void;
  isPointer?: boolean;
  hoverBehavior?: boolean;
}

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
