import React from "react";
import clsx from "clsx";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label?: string;
  color?: string;
  bgColor?: string;
  disabled?: boolean;
  fontFamily?: string;
  fullWidth?: boolean;
  borderColor?: string;
  externalStyles?: string;
  loader?: React.ReactElement;
  variant: "contained" | "outlined" | "text";
}

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
      {icon && <img src={icon} alt="icon button" />}
      {label}
      {loader}
    </button>
  );
};
