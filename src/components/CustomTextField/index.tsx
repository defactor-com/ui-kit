import {
    Box,
    FormControl,
    InputAdornment,
    OutlinedInput,
    Typography,
    useTheme
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
    disabled?: boolean;
    whiteBg?: boolean;
    required?: boolean;
    error?: boolean;
  }
  
  export const CustomTextField: React.FC<CustomTextFieldProps> = ({
    label = '',
    placeholder = 'Placeholder',
    value = '',
    tooltip = '',
    suffix = 'Suffix',
    onChange,
    disabled = false,
    whiteBg = false,
    required = false,
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
          <Typography variant="caption" sx={{ opacity: 0.5, color: theme.palette.text.primary }}>
            {label}
          </Typography>
          {tooltip && <CustomTooltip tooltipText={tooltip} />}
        </Box>
        <OutlinedInput
          endAdornment={<InputAdornment position="end">{suffix}</InputAdornment>}
          placeholder={placeholder}
          value={value}
          sx={{ backgroundColor: whiteBg ? theme.palette.common.white : "transparent" }}
          onChange={onChange}
        />
      </FormControl>
    );
  };
  