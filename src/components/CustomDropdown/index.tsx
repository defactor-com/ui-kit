import {
    useTheme,
    Box,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from "@mui/material";
import React from "react";

import { CustomTooltip } from "../CustomTooltip";

export const AssetTypes = [
    { label: "NFT", value: "NFT" },
    { label: "Token", value: "Token" },
];

export interface MenuItemsProps {
    label: string;
    value: string | number;
}

export interface CustomDropdownProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    menuItems?: MenuItemsProps[];
    tooltip?: string;
    disabled?: boolean;
    required?: boolean;
    tooltipBgColor: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
    label = "",
    placeholder = "Choose...",
    value = "",
    onChange = () => { },
    menuItems = AssetTypes,
    tooltip = "",
    disabled = false,
    required = false,
    tooltipBgColor
}) => {
    const theme = useTheme();

    const handleChange = (event: SelectChangeEvent<string>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <FormControl variant="outlined" fullWidth disabled={disabled}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    minHeight: "34px",
                }}
            >
                <Typography variant="caption" sx={{ opacity: 0.5 }}>
                    {label}
                </Typography>
                {required && (
                    <Typography
                        variant="caption"
                        color={theme.palette.warning.main}
                        fontWeight={700}
                        pl={0.4}
                    >
                        *
                    </Typography>
                )}
                {tooltip && <CustomTooltip tooltipText={tooltip} tooltipBgColor={tooltipBgColor} />}
            </Box>
            <Select
                value={value || ""}
                displayEmpty
                renderValue={(selected) =>
                    selected || (
                        <Typography sx={{ opacity: 0.5 }}>{placeholder}</Typography>
                    )
                }
                onChange={handleChange}
            >
                {menuItems.map((menuItem) => (
                    <MenuItem key={menuItem.label} value={menuItem.value}>
                        {menuItem.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
