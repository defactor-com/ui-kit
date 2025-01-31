import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

import { CustomTooltip } from "../CustomTooltip";

export interface CustomTextFieldProps {
  label: string;
  placeholder: string;
  value?: string | number | boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tooltip?: string;
  suffix?: string | React.ReactNode;
  suffixColor?: string;
  tooltipBgColor ?: string;
  disabled?: boolean;
  whiteBg?: boolean;
  required?: boolean;
  error?: boolean;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label = "",
  placeholder = "",
  value = "",
  tooltip = "",
  suffix = "",
  suffixColor,
  tooltipBgColor,
  onChange,
  disabled = false,
  whiteBg = false,
  required = true,
  error = false,
}) => {
  const theme = useTheme();

  return (
    <FormControl
      variant="outlined"
      fullWidth
      disabled={disabled}
      required={required}
      error={error}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 0.5,
        }}
      >
        <Typography
          variant="caption"
          sx={{ opacity: 0.5, color: theme.palette.text.primary }}
        >
          {label}
        </Typography>
        {required && (
          <Typography
            variant="caption"
            sx={{ color: theme.palette.error.main, fontWeight: "700", mx: 0.5 }}
          >
            *
          </Typography>
        )}
        {tooltip && <CustomTooltip tooltipText={tooltip} tooltipBgColor={tooltipBgColor} />}
      </Box>
      <OutlinedInput
        endAdornment={
          <InputAdornment position="end">
            <Typography
              variant="caption"
              sx={{ color: suffixColor || theme.palette.text.secondary, textTransform: "uppercase" }}
            >
              {suffix}
            </Typography>
          </InputAdornment>
        }
        placeholder={placeholder}
        value={value}
        sx={{
          backgroundColor: whiteBg ? theme.palette.common.white : "transparent",
        }}
        onChange={onChange}
        inputProps={{
          style: { color: theme.palette.text.secondary },
        }}
      />
    </FormControl>
  );
};
