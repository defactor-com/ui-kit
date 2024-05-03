import React from "react";
import clsx from "clsx";

export interface IPill {
  label: string | React.ReactElement;
  color: string;
  bgColor: string;
  fontFamily?: string;
  externalStyles?: string;
  customBorder?: string;
}

export const Pill = ({
  label,
  color,
  bgColor,
  externalStyles,
  fontFamily,
  customBorder,
}: IPill) => {
  return (
    <div
      className={clsx(externalStyles, "container-pill")}
      style={{ backgroundColor: bgColor, border: customBorder }}
    >
      {label && typeof label === "string" ? (
        <span style={{ color: color, fontFamily: fontFamily }}>{label}</span>
      ) : (
        label
      )}
    </div>
  );
};
