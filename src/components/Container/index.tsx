import React from "react";
import clsx from "clsx";

export interface IContainer {
  content: React.ReactNode;
  externalStyles: string;
}

export const Container: React.FC<IContainer> = ({
  externalStyles,
  content,
  ...props
}) => {
  return (
    <div className={clsx(externalStyles, "container")} {...props}>
      {content}
    </div>
  );
};
