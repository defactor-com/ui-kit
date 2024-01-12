import React from "react";
import clsx from "clsx";

export interface IContainer {
  content: React.ReactNode;
  externalStyles: string;
}

export const Container = ({
  externalStyles,
  content,
  ...props
}: IContainer) => (
  <div className={clsx(externalStyles, "container")} {...props}>
    {content}
  </div>
);
