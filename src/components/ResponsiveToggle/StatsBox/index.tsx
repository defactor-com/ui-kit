import { Box, Divider, Typography } from "@mui/material";
import React from "react";

import { CustomTooltip } from "../../CustomTooltip";

export interface StatsBoxProps {
    XsWidth?: string | number;
    MdWidth?: string | number;
    title: string;
    value: string | number;
    tooltipText: string;
    unit: string | null;
}

export const StatsBox: React.FC<StatsBoxProps> = ({
    XsWidth = "100%",
    MdWidth = "212px",
    title,
    value,
    tooltipText,
    unit,
}) => {
    return (
        <Box
            sx={{
                width: {
                    xs: XsWidth,
                    md: MdWidth,
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="body2" fontFamily="'DM Sans', sans-serif">
                    {title}
                </Typography>
                <CustomTooltip tooltipText={tooltipText} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    mt: 0.6,
                }}
            >
                <Typography variant="subtitle1" fontFamily="'DM Sans', sans-serif" fontWeight={700} sx={{ mr: 0.5 }}>
                    {value}
                </Typography>
                <Typography fontSize={14} fontWeight={700} color="#A8B0B6" fontFamily="'DM Sans', sans-serif">
                    {unit}
                </Typography>
            </Box>
            <Divider sx={{ mt: 2.5 }} />
        </Box>
    );
};
