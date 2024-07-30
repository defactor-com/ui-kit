import React from "react";
import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import DocIcon from "../Icons/v2/docIcon";
import CopyTemplateIcon from "../Icons/v2/copyTemplateIcon";
import { Popover } from "../Popover";

export interface ITemplate {
    id: string;
    template_name: string;
    description: string;
}

export interface ICustomPopoverItem {
    text: string;
    icon: React.ReactNode;
    action: (args: any) => void;
}

export interface CardWithHoverProps {
    template: ITemplate;
    isPublished?: boolean;
    onClickCopy?: () => void;
    onClickPreview?: () => void;
    onClickUse?: () => void;
    popoverItems?: ICustomPopoverItem[];
}

export const CardWithHover: React.FC<CardWithHoverProps> = ({
    template,
    isPublished,
    onClickCopy,
    onClickPreview,
    onClickUse,
    popoverItems = [],
}) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                borderRadius: "16px",
                backgroundColor: theme.palette.background.paper,
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
                    <DocIcon />
                    <IconButton
                        className="hover-it"
                        sx={{
                            display: anchorEl ? 'block' : 'none',
                            p: 0,
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                        }}
                        onClick={isPublished ? handleClick : onClickCopy}
                    >
                        {isPublished ? <Popover
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            items={popoverItems.map(item => ({
                                text: item.text,
                                icon: item.icon
                            }))}
                        /> : <CopyTemplateIcon />}
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant="body1" fontWeight={500} textTransform={"none"} color={theme.palette.text.primary}>
                        {template.template_name}
                    </Typography>
                    <Typography
                        variant="caption"
                        textTransform={"none"}
                        color={theme.palette.text.secondary}
                    >
                        {template.description}
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
