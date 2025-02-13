import React from "react";
import clsx from "clsx";

import { IButton } from "./ButtonTypes";
import { Box, Typography } from "@mui/material";

export const MultiLineButton = ({
  icon,
  color,
  label,
  subLabel1,
  subLabel2,
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
  MaxHeight = '40px',
  minBtnWidth = '156px',
  minBtnHeight,
  labelColor = "labelColor",
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
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body2" fontWeight={700} fontSize="14px" lineHeight='14px' color={labelColor}>
              {label}
            </Typography>
            {subLabel1 && (
              <Typography variant="caption" fontSize="11px" lineHeight='11px' color={labelColor}>
                {subLabel1}<span>{subLabel2}</span>
              </Typography>
            )}
          </Box>
        </>
      )}
    </button>
  );
};
