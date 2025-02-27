import React, { useRef, useState } from "react";
import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import DocIcon from "../Icons/v2/docIcon";
import CopyTemplateIcon from "../Icons/v2/copyTemplateIcon";
import { Popover, ListItemProps } from "../Popover";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export interface CardTemplate {
    id: string;
    card_title: string;
    card_description: string;
}

export interface CardWithHoverProps {
    template: CardTemplate;
    isPublished?: boolean;
    onClickCopy?: () => void;
    onClickPreview?: () => void;
    onClickUse?: () => void;
    icon?: React.ReactElement;
    backgroundColor?: string;
    popoverItems?: ListItemProps[];
}

const defaultPopoverItems: ListItemProps[] = [
    { text: "Edit", icon: <EditIcon /> },
    { text: "Duplicate", icon: <ContentCopyIcon /> },
    { text: "Delete", icon: <DeleteIcon /> },
];

export const CardWithHover: React.FC<CardWithHoverProps> = ({
    template,
    isPublished,
    onClickCopy,
    onClickPreview,
    onClickUse,
    icon = <DocIcon />,
    backgroundColor,
    popoverItems = defaultPopoverItems
}) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [hoverActive, setHoverActive] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        setAnchorEl(iconRef.current);
        setHoverActive(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setHoverActive(false);
    };

    return (
        <Box
            sx={{
                borderRadius: "16px",
                backgroundColor: backgroundColor || theme.palette.background.paper,
                padding: 2,
                cursor: "pointer",
                "&:hover .hover-it, .hover-it.show": {
                    display: "flex",
                },
                "&:hover": { boxShadow: "none" },
            }}
            onMouseEnter={() => setHoverActive(true)}
            onMouseLeave={() => !anchorEl && setHoverActive(false)}
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
                    ref={iconRef}
                >
                    {icon}
                    <IconButton
                        className={`hover-it ${hoverActive ? "show" : ""}`}
                        sx={{
                            display: "none",
                            p: 0,
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            boxShadow: "rgba(0, 0, 0, 0.15) 0 0 0 1px inset",
                            color: "rgba(0, 0, 0, 0.5)"
                        }}
                        onClick={isPublished ? handleOpen : onClickCopy}
                    >
                        {isPublished ? <MoreHorizIcon /> : <CopyTemplateIcon />}
                    </IconButton>
                </Box>
                <Box>
                    <Typography
                        variant="body1"
                        fontWeight={500}
                        textTransform={"none"}
                        color={theme.palette.text.primary}
                    >
                        {template.card_title}
                    </Typography>
                    <Typography
                        variant="caption"
                        textTransform={"none"}
                        color={theme.palette.text.secondary}
                    >
                        {template.card_description}
                    </Typography>
                </Box>
                <Box
                    className={`hover-it ${hoverActive ? "show" : ""}`}
                    sx={{
                        display: "none",
                        width: "100%",
                        mt: 2,
                        gap: 2,
                        flexDirection: "row",
                    }}
                >
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
            {
                isPublished && (
                    <Popover
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        items={popoverItems}
                    />
                )
            }
        </Box >
    );
};
