import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { ElementType } from "react";

export interface MenuItemProps {
  text: string;
  path: string;
  icon: ElementType;
  isSelected: boolean;
  notificationsCount?: number;
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
  activeBorderColor?: string;
  notificationColor?: string;
  selectedBgColor?: string;
  onClick?: () => void;
}

export const MobileMenuItem: React.FC<MenuItemProps> = ({
  text,
  path,
  icon: Icon,
  isSelected,
  notificationsCount = 0,
  navLinkTextColor,
  iconsColor,
  activeTextColor,
  activeIconColor,
  activeBorderColor,
  notificationColor,
  selectedBgColor,
  onClick
}) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      component="a"
      variant="text"
      sx={{
        width: "100%",
        minHeight: "64px",
        borderLeft: isSelected ? `2px solid ${activeBorderColor}` : "2px solid transparent",
        transition: "border-right 0.3s ease", 
        borderRadius: 0,
        padding: 2,
        paddingLeft: 3,
        color: isSelected
          ? activeTextColor || theme.palette.primary.main
          : navLinkTextColor || theme.palette.text.primary,
        backgroundColor: isSelected
          ? selectedBgColor || theme.palette.background.default
          : theme.palette.background.paper,
        fontSize: theme.typography.body2.fontSize,
        alignItems: "center",
        justifyContent: "flex-start",
        fontWeight: isSelected
          ? theme.typography.fontWeightBold
          : theme.typography.fontWeightRegular,
      }}
      startIcon={
        <Icon
          color={
            isSelected
              ? activeIconColor || theme.palette.primary.main
              : iconsColor || theme.palette.text.secondary
          }
        />
      }
    >
      <Box
        component="span"
        sx={{
          textTransform: "capitalize",
        }}
      >
        {text}
      </Box>
      {path === "/notifications" && notificationsCount > 0 && (
        <Box
          sx={{
            backgroundColor: notificationColor || theme.palette.error.main,
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            ml: 1,
          }}
        />
      )}
    </Button>
  );
};