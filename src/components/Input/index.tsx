import React from "react";
import {
  Box,
  alpha,
  useTheme,
  FormControl,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

import { Button } from "../Button";

import { IInput } from "./InputTypes";

export const Input = ({
  value,
  onChange,
  inputError,
  fontFamily,
  maxOnclick,
  minOnclick,
  tokenSymbol,
  buttonsLabels,
  colorMaxButton,
}: IInput) => {
  const theme = useTheme();
  return (
    <FormControl
      fullWidth
      variant="outlined"
      error={!!inputError}
      sx={{
        fontFamily: `${fontFamily} !important`,
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colorMaxButton,
          },
        },
      }}
    >
      <OutlinedInput
        fullWidth
        value={value}
        id="amount-input"
        color="secondary"
        onChange={onChange}
        sx={{
          fontWeight: 500,
          fontFamily: `${fontFamily} !important`,
          "& .Mui-focused": {
            color: colorMaxButton,
          },
        }}
        startAdornment={
          <InputAdornment
            position="start"
            sx={{
              "& .MuiTypography-root": {
                fontFamily: `${fontFamily} !important`,
              },
            }}
          >
            {tokenSymbol}
          </InputAdornment>
        }
        endAdornment={
          <Box display="flex">
            {buttonsLabels?.min ? (
              <Button
                variant="text"
                onClick={minOnclick}
                fontFamily={fontFamily}
                label={buttonsLabels.min}
                optionalStyles={{
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: theme.spacing(1),
                  color: alpha(theme.palette.common.black, 0.5),
                }}
              />
            ) : (
              <></>
            )}
            {buttonsLabels?.max ? (
              <Button
                variant="text"
                onClick={maxOnclick}
                fontFamily={fontFamily}
                label={buttonsLabels.max}
                optionalStyles={{
                  fontWeight: 500,
                  fontSize: "14px",
                  color: colorMaxButton,
                  padding: theme.spacing(1),
                }}
              />
            ) : (
              <></>
            )}
          </Box>
        }
      />
      <FormHelperText
        sx={{
          margin: `${theme.spacing(0.5, 0, 0, 0)} !important`,
          fontFamily: `${fontFamily} !important`,
        }}
      >
        {inputError}
      </FormHelperText>
    </FormControl>
  );
};
