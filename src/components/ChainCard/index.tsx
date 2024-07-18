import React from "react";
import {
    Box,
    Typography,
    useTheme,
    List,
    ListItem,
    ListItemText
} from "@mui/material";
import EthIcon from "../Icons/v2/ethIcon";
import { Scale } from "@mui/icons-material";

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
    customIcon = <EthIcon />,
    selected = false,
    onClick,
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
                        maxWidth: "300px",
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
                    backgroundColor: "#F8F9FC"
                }}
            >
                <Typography
                    sx={{ fontSize: "12px", fontWeight: 700 }}
                >
                    MAIN BENEFITS
                </Typography>
                <List sx={{ paddingLeft: 3.5, margin: 0, direction: "row" }}>
                    {mainBenefits.map((benefit, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                color: "#6b7280",
                                display: "list-item",
                                listStyleType: "disc",
                                margin: 0,
                                padding: 0,
                                '&::marker': {
                                    fontSize: "small",
                                    lineHeight: "2em"
                                },
                            }}
                        >
                            <ListItemText
                                primaryTypographyProps={{
                                    fontSize: "14px",
                                    color: "#6B7280",
                                    fontWeight: 400
                                }}
                                primary={benefit}
                            />
                        </ListItem>
                    ))}
                </List>

            </Box>
        </Box >
    );
};
