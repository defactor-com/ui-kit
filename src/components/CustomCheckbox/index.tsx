import CheckIcon from "@mui/icons-material/Check";
import { Box, useTheme } from "@mui/material";
import React from "react";

export interface CustomCheckBoxProps {
    checkState: boolean;
    completedState?: boolean;
    handleChange?: () => void;
}

export const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
    checkState = false,
    completedState = false,
}) => {
    const theme = useTheme();

    return (
        <Box sx={{ position: "relative", cursor: "pointer", width: "40px" }}>
            <input
                type="checkbox"
                checked={checkState}
                style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "16px",
                    border: `2px solid ${checkState ? theme.palette.primary.main : theme.palette.grey[300]}`,
                    appearance: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    position: "relative",
                }}
            />
            {checkState && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                    }}
                />
            )}
            {completedState && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                    }}
                >
                    <CheckIcon
                        sx={{
                            color: theme.palette.background.paper,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};
