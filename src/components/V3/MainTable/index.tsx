import {
    Box,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";


export interface MainTableProps {
    label: string;

}

export const MainTable: React.FC<MainTableProps> = ({
    label = "test"
}) => {
    const theme = useTheme();

    return (
        <Box><Typography> {label}
        </Typography></Box>
    );
};
