import React from "react";
import clsx from "clsx";

import { IButton } from "./ButtonTypes";
import { Box, Typography } from "@mui/material";

export const MultiLineButton = ({
  icon,
  color,
  label,
  subLabel,
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
  height,
  MaxHeight,
  minBtnWidth,
  minBtnHeight,
  labelColor,
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
        height: height,
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
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body2" fontSize="14px" lineHeight={1.2} fontWeight={700}  color={labelColor}>
              {label}
            </Typography>
            {subLabel && (
              <Typography variant="caption" fontSize="11px" lineHeight={1.2} fontWeight={400} color={labelColor}>
                {subLabel}
              </Typography>
            )}
          </Box>
        </>
      )}
    </button>
  );
};
