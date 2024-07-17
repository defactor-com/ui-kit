import React, { useState, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverProps, ListItemProps } from "../components/Popover";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from "@mui/material/Box";
import { action } from "@storybook/addon-actions";
import { Typography } from "@mui/material";

const meta: Meta<typeof Popover> = {
    title: "V2/Popover",
    component: Popover,
    parameters: {
        layout: "padded",
    },
};

export default meta;

type Story = StoryObj<PopoverProps>;

const popoverItems: ListItemProps[] = [
    { text: "Edit", icon: <EditIcon /> },
    { text: "Duplicate", icon: <ContentCopyIcon /> },
    { text: "Delete", icon: <DeleteIcon /> },
];

const PopoverTemplate: React.FC<PopoverProps> = (args) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        setAnchorEl(iconRef.current);
    };

    const handleClose = () => {
        setAnchorEl(null);
        args.onClose();
    };

    return (
        <>
            <Box
                ref={iconRef}
                onClick={handleOpen}
                width={150}
                textAlign={"right"}
                sx={{ cursor: "pointer" }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        color: '#EAECF0',
                        border: '1px solid #EAECF0',
                    }}
                >
                    <MoreHorizIcon />
                </Box>
            </Box>
            <Popover {...args} anchorEl={anchorEl} onClose={handleClose} />
        </>
    );
};

export const IconClickOpensPopover: Story = {
    render: (args) => <PopoverTemplate {...args} />,
    args: {
        items: popoverItems,
        onClose: action("closed"),
    },
};
