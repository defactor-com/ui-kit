import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Popover, { PopoverProps, ListItemProps } from "../components/Popover";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { action } from "@storybook/addon-actions";

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
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        args.onClose();
    };

    return (
        <>
            <button onClick={handleOpen}>Open Popover</button>
            <Popover {...args} anchorEl={anchorEl} onClose={handleClose} />
        </>
    );
};

export const Default: Story = {
    render: (args) => <PopoverTemplate {...args} />,
    args: {
        items: popoverItems,
        onClose: action("closed"),
    },
};
