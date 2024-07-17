import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    alpha,
    useTheme,
    Popover as MuiPopover,
    type PopoverProps as MuiPopoverProps,
} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";

export interface ListItemProps {
    text: string;
    icon: React.ReactNode;
}

export interface PopoverProps {
    items: ListItemProps[];
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

export const PopoverWithArrow = (
    popoverProps: Omit<MuiPopoverProps, "anchorOrigin" | "transformOrigin"> & { children: React.ReactNode },
) => (
    <MuiPopover
        anchorOrigin={{ horizontal: 40, vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: -8 }}
        slotProps={{
            paper: {
                sx: {
                    overflow: "visible",
                    "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 20,
                        width: 10,
                        height: 10,
                        backgroundColor: "inherit",
                        transform: "translateY(-50%) rotate(45deg)",
                    },
                },
            },
        }}
        {...popoverProps}
    />
);

const defaultPopoverItems: ListItemProps[] = [
    { text: 'Edit', icon: <EditIcon /> },
    { text: 'Duplicate', icon: <ContentCopyIcon /> },
    { text: 'Delete', icon: <DeleteIcon /> }
]

export const Popover: React.FC<PopoverProps> = ({
    items = defaultPopoverItems,
    anchorEl,
    onClose,
}) => {
    const theme = useTheme();

    return (
        <>
            <PopoverWithArrow
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={onClose}
                sx={{
                    boxShadow: "2px 2px 12px 0px #D6DAE7",
                    ".MuiPaper-root": {
                        borderRadius: 4,
                    },
                }}
            >
                <List>
                    {items.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                sx={{
                                    "&:hover": {
                                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                        "& .MuiListItemIcon-root": {
                                            color: theme.palette.primary.main,
                                        },
                                    },
                                }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </PopoverWithArrow>
        </>
    );
};
