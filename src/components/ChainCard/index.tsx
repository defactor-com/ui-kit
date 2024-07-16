import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import DocIcon from "../Icons/v2/docIcon";

export interface ChainCardProps {
    title: string;
    description: string;
    mainBenefits: string[];
    customIcon: React.ReactNode;
    selected?: boolean;
    onClick: () => void;
}

export const ChainCard: React.FC<ChainCardProps> = ({
    title = "Ethereum (ERC-20)",
    description = "Lorem ipsum dolor sit amet consectetur. Faucibus adipiscing phasellus.",
    mainBenefits = ["Benefit One", "Benefit Two", "Benefit Three"],
    customIcon = <DocIcon />,
    selected = false,
    onClick = () => console.log("Clicked."),
}) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "415px",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "white",
                cursor: "pointer",
                border: selected ? `2px solid ${theme.palette.primary.main}` : "",
                boxShadow: theme.shadows[1],
            }}
            onClick={onClick}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 1.5,
                    p: 2,
                }}
            >
                <Box paddingTop={3}>{customIcon}</Box>
                <Typography variant="body2" fontWeight={700}>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "#6B7280",
                        maxWidth: "300px"
                    }}
                >
                    {description}
                </Typography>
            </Box>
            <Box
                sx={{
                    padding: 2,
                    margin: 1.5,
                    borderRadius: 3,
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Typography sx={{ fontSize: "12px", fontWeight: 700, paddingBottom: 2 }}>
                    MAIN BENEFITS
                </Typography>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {mainBenefits.map((benefit, index) => (
                        <li
                            key={index}
                            style={{ fontSize: "14px", color: "#6B7280", fontWeight: 400, lineHeight: 2 }}
                        >
                            {benefit}
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};
