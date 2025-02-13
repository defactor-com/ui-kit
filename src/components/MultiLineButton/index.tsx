import React from "react";
import clsx from "clsx";

import { IButton } from "./ButtonTypes";

export const MultiLineButton = ({
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
  fontSize,
  fontWeight,
  MaxHeight,
  minBtnWidth,
  minBtnHeight,
  ...props
}: IButton) => {
  const classNames = `btn btn-${variant} ${
    fullWidth ? "full-width" : undefined
  } ${disabled || loader ? "btn-disabled" : undefined}`;

  const defaultStyles: React.CSSProperties = {
    borderColor: borderColor,
    backgroundColor: bgColor,
    fontFamily: fontFamily,
    color: color
  };

  return (
    <button
      className={clsx(externalStyles, classNames)}
      style={{
        ...defaultStyles,
        ...optionalStyles,
        fontSize: fontSize,
        fontWeight: fontWeight,
        maxHeight: MaxHeight,
        minWidth: minBtnWidth || 'none',
        minHeight: minBtnHeight || 'none'
      }}
      disabled={disabled}
      {...props}
    >
      {loader ? (
        loader
      ) : (
        <>
          {icon && typeof icon === "string" ? (
            <img src={icon} alt="icon button" />
          ) : (
            icon
          )}
          {label}
        </>
      )}
    </button>
  );
};
