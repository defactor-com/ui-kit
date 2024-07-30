import React from "react";
import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import DocIcon from "../Icons/v2/docIcon";
import CopyTemplateIcon from "../Icons/v2/copyTemplateIcon";

export interface CardWithHoverProps {
    title?: string;
    description?: string;
    onClickCopy?: () => void;
    icon?: React.ReactNode;
    backgroundColor?: string;
    onClickPreview?: () => void;
    onClickUse?: () => void;
}

export const CardWithHover: React.FC<CardWithHoverProps> = ({
    title = "Title",
    description = "Description",
    onClickCopy,
    icon = <DocIcon />,
    backgroundColor,
    onClickPreview,
    onClickUse,
}) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                borderRadius: "16px",
                backgroundColor: backgroundColor || theme.palette.background.paper,
                padding: 2,
                cursor: "pointer",
                "&:hover .hover-it": {
                    display: "flex",
                },
                "&:hover": { boxShadow: "none" },
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height={170}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    {icon}
                    <IconButton
                        className="hover-it"
                        sx={{
                            p: 0,
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                        }}
                        onClick={onClickCopy}
                    >
                        <CopyTemplateIcon />
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant="body1" fontWeight={500} textTransform={"none"} color={theme.palette.text.primary}>
                        {title}
                    </Typography>
                    <Typography
                        variant="caption"
                        textTransform={"none"}
                        color={theme.palette.text.secondary}
                    >
                        {description}
                    </Typography>
                </Box>
                <Box
                    className="hover-it"
                    sx={{
                        display: "none",
                        width: "100%",
                        mt: 2,
                        gap: 2,
                    }}
                >
                    <Box sx={{ width: "100%" }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            sx={{
                                borderRadius: "100px",
                                textTransform: "none",
                                color: "#5a5beb",
                                borderColor: "#5a5beb",
                            }}
                            onClick={onClickPreview}
                        >
                            Preview
                        </Button>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                borderRadius: "100px",
                                whiteSpace: "nowrap",
                                textTransform: "none",
                                backgroundColor: "#5a5beb",
                            }}
                            onClick={onClickUse}
                        >
                            Use Template
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
