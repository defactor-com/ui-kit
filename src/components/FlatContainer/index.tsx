import React from "react";
import clsx from "clsx";

export interface IFlatContainer {
  content: React.ReactNode;
  externalStyles: string;
}

export const FlatContainer = ({
  externalStyles,
  content,
  ...props
}: IFlatContainer) => (
  <div className={clsx(externalStyles, "flat-container")} {...props}>
    {content}
  </div>
);
