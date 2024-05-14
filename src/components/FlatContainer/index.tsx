import React from "react";
import clsx from "clsx";

import { IFlatContainer } from "./FlatContainerTypes";

export const FlatContainer = ({
  externalStyles,
  content,
  ...props
}: IFlatContainer) => (
  <div className={clsx(externalStyles, "flat-container")} {...props}>
    {content}
  </div>
);
