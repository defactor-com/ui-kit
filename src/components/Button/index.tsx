import React from "react";
import clsx from "clsx";

import { IButton } from "./ButtonTypes";

export const Button = ({
  icon,
  color,
  label,
  loader,
  variant,
  bgColor,
  fullWidth,
  fontFamily,
  borderColor,
  externalStyles,
  disabled = false,
  ...props
}: IButton) => {
  const classNames = `btn btn-${variant} ${
    fullWidth ? "full-width" : undefined
  } ${disabled || loader ? "btn-desabled" : undefined}`;

  return (
    <button
      className={clsx(externalStyles, classNames)}
      style={{
        borderColor: borderColor,
        backgroundColor: bgColor,
        fontFamily: fontFamily,
        color: color,
      }}
      disabled={disabled}
      {...props}
    >
      {icon && typeof icon === "string" ? (
        <img src={icon} alt="icon button" />
      ) : (
        icon
      )}
      {label}
      {loader}
    </button>
  );
};
