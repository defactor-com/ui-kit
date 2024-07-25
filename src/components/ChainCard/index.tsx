import React from "react";
import {
    Box,
    Typography,
    useTheme,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import EthIcon from "../Icons/v2/ethIcon";

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
                <Typography
                    variant="body2"
                    fontWeight={700}
                    color={theme.palette.text.primary}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    sx={{
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
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Typography variant="caption" fontWeight={700}>
                    MAIN BENEFITS
                </Typography>
                <List sx={{ paddingLeft: 3.5, margin: 0, direction: "row" }}>
                    {mainBenefits.map((benefit, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                color: theme.palette.text.secondary,
                                display: "list-item",
                                listStyleType: "disc",
                                margin: 0,
                                padding: 0,
                                "&::marker": {
                                    fontSize: "small",
                                    lineHeight: "2em",
                                },
                            }}
                        >
                            <ListItemText
                                primaryTypographyProps={{
                                    fontSize: "14px",
                                    color: theme.palette.text.secondary,
                                    fontWeight: 400,
                                }}
                                primary={benefit}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};
