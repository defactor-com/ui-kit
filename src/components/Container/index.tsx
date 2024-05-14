import React from "react";
import clsx from "clsx";

import { IContainer } from "./ContainerTypes";

export const Container = ({
  externalStyles,
  content,
  ...props
}: IContainer) => (
  <div className={clsx(externalStyles, "container")} {...props}>
    {content}
  </div>
);
