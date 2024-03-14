import React from "react";
import clsx from "clsx";

export interface ICardContainer {
  content: React.ReactNode;
  externalStyles?: string;
}

export const CardContainer = ({
  externalStyles,
  content,
  ...props
}: ICardContainer) => (
  <div className={clsx(externalStyles, "card-container")} {...props}>
    {content}
  </div>
);
