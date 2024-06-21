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
  optionalStyles,
  disabled = false,
  ...props
}: IButton) => {
  const classNames = `btn btn-${variant} ${
    fullWidth ? "full-width" : undefined
  } ${disabled || loader ? "btn-desabled" : undefined}`;

  const defaultStyles: React.CSSProperties = {
    borderColor: borderColor,
    backgroundColor: bgColor,
    fontFamily: fontFamily,
    color: color,
  };

  return (
    <button
      className={clsx(externalStyles, classNames)}
      style={{ ...defaultStyles, ...optionalStyles }}
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
