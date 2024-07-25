import React, { ReactNode } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import DocIcon from "../Icons/v2/docIcon";

export interface MainCardProps {
    title: string;
    description: string;
    onSelect?: () => void;
    icon: ReactNode;
    backgroundColor?: string;
}

export const MainCard: React.FC<MainCardProps> = ({
    title,
    description,
    onSelect,
    icon = <DocIcon />,
    backgroundColor,
}) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                borderRadius: "16px",
                background: backgroundColor || theme.palette.background.paper,
                padding: 2,
                cursor: "pointer",
                maxWidth: "400px",
            }}
            onClick={onSelect}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height={154}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    {icon}
                </Box>
                <Box>
                    <Typography variant="body1" fontWeight={500}>
                        {title}
                    </Typography>
                    <Typography variant="caption" color={theme.palette.text.secondary}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
