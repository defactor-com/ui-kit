import React from "react";
import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import DocIcon from "../Icons/v2/docIcon";
import CopyTemplateIcon from "../Icons/v2/copyTemplateIcon";

export interface CardWithHoverProps {
    title?: string;
    description?: string;
    onSelect?: () => void;
    icon?: React.ReactNode;
    backgroundColor?: string;
    onClickPreview?: () => void;
    onClickUse?: () => void;
}

export const CardWithHover: React.FC<CardWithHoverProps> = ({
    title = "Title",
    description = "Description",
    onSelect = () => { },
    icon = <DocIcon />,
    backgroundColor = "#ffffff",
    onClickPreview = () => { },
    onClickUse = () => { },
}) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] =
        React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Box
            sx={{
                borderRadius: "16px",
                background: backgroundColor || theme.palette.background.default,
                padding: 2,
                cursor: "pointer",
                maxWidth: "400px",
                "&:hover .hover-it": {
                    display: "flex",
                },
                "&:hover": { boxShadow: theme.shadows[3] },
            }}
            onClick={onSelect}
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
                            display: anchorEl ? "block" : "none",
                            p: 0,
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                        }}
                        onClick={handleClick}
                    >
                        <CopyTemplateIcon />
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant="body1" fontWeight={500} textTransform={"none"}>
                        {title}
                    </Typography>
                    <Typography
                        variant="caption"
                        textTransform={"none"}
                        color={"#7c7c7e"}
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
                            sx={{ borderRadius: "100px", textTransform: 'none', color: '#5a5beb', borderColor: '#5a5beb' }}
                            onClick={onClickPreview}
                        >
                            Preview
                        </Button>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ borderRadius: "100px", whiteSpace: "nowrap", textTransform: 'none', backgroundColor: '#5a5beb' }}
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
