import React from "react";
import clsx from "clsx";

import { IContainer } from "./ContainerTypes";

export const Container = ({
  externalStyles,
  optionalStyles,
  content,
  ...props
}: IContainer) => (
  <div
    className={clsx(externalStyles, "container")}
    style={{ ...optionalStyles }}
    {...props}
  >
    {content}
  </div>
);
