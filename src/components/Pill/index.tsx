import React from "react";
import clsx from "clsx";

export interface IPill {
  label: string;
  color: string;
  bgColor: string;
  fontFamily?: string;
  externalStyles?: string;
}

export const Pill = ({
  label,
  color,
  bgColor,
  externalStyles,
  fontFamily,
}: IPill) => {
  return (
    <div
      className={clsx(externalStyles, "container-pill")}
      style={{ backgroundColor: bgColor }}
    >
      <span style={{ color: color, fontFamily: fontFamily }}>{label}</span>
    </div>
  );
};
