import React from "react";
import clsx from "clsx";

import { IPill } from "./PillTypes";
export const Pill = ({
  label,
  color,
  bgColor,
  optionalStyles,
  externalStyles,
  fontFamily,
  customBorder,
}: IPill) => {
  const defaultStyles: React.CSSProperties = {
    backgroundColor: bgColor,
    border: customBorder,
  };

  return (
    <div
      className={clsx(externalStyles, "container-pill")}
      style={{ ...defaultStyles, ...optionalStyles }}
    >
      {label && typeof label === "string" ? (
        <span style={{ color: color, fontFamily: fontFamily }}>{label}</span>
      ) : (
        label
      )}
    </div>
  );
};
