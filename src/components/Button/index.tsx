import React from "react";
import clsx from "clsx";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label?: string;
  color?: string;
  bgColor?: string;
  fullWidth?: boolean;
  borderColor: string;
  externalStyles: string;
  variant: "contained" | "outlined" | "text";
}

export const Button: React.FC<IButton> = ({
  icon,
  color,
  label,
  variant,
  bgColor,
  fullWidth,
  borderColor,
  externalStyles,
  ...props
}) => {
  const classNames = `btn btn-${variant} ${
    fullWidth ? "full-width" : undefined
  }`;

  return (
    <button
      className={clsx(externalStyles, classNames)}
      style={{
        color: color,
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
      {...props}
    >
      {icon && <img src={icon} alt="icon button" />}
      {label}
    </button>
  );
};
