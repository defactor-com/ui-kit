import React from "react";
import clsx from "clsx";

import { ICardContainer } from "./CardContainerTypes";

export const CardContainer = ({
  externalStyles,
  content,
  ...props
}: ICardContainer) => (
  <div className={clsx(externalStyles, "card-container")} {...props}>
    {content}
  </div>
);
