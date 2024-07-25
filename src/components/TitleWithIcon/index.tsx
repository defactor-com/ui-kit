import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import GlobalIcon from "../Icons/v2/globalIcon";

export interface TitleWithIconProps {
    image?: React.ElementType<{ color: string }>;
    label: string;
    color?: string;
    colorIcon?: string;
}

export const TitleWithIcon: React.FC<TitleWithIconProps> = ({
    image: IconComponent = GlobalIcon,
    label = "Title With Icon",
    color,
    colorIcon,
}) => {
    const theme = useTheme();
    const iconColor = colorIcon || theme.palette.text.primary;
    const textColor = color || theme.palette.text.primary;

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", color: iconColor }}>
                <IconComponent color={iconColor} />
                <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    color={textColor}
                    sx={{ marginLeft: "8px" }}
                >
                    {label}
                </Typography>
            </Box>
        </Box>
    );
};
