import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { ElementType } from "react";
import Link from "next/link";

interface MenuItemProps {
  text: string;
  path: string;
  icon: ElementType;
  isSelected: boolean;
  notificationsCount?: number;
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
  notificationColor?: string;
}

const MainMenuItem: React.FC<MenuItemProps> = ({
  text,
  path,
  icon: Icon,
  isSelected,
  notificationsCount = 0,
  navLinkTextColor,
  iconsColor,
  activeTextColor,
  activeIconColor,
  notificationColor,
}) => {
  const theme = useTheme();

  return (
    <Link href={path} passHref>
      <Button
        component="a"
        variant="text"
        sx={{
          width: "100%",
          minHeight: "64px",
          borderRight: isSelected ? `2px solid ${theme.palette.secondary.main}` : "",
          borderRadius: 0,
          padding: 2,
          paddingLeft: 4,
          color: isSelected ? activeTextColor || theme.palette.primary.main : navLinkTextColor || theme.palette.text.primary,
          backgroundColor: isSelected ? theme.palette.background.default || theme.palette.background.paper : theme.palette.background.paper,
          fontSize: theme.typography.body2.fontSize,
          alignItems: "center",
          justifyContent: "flex-start",
          fontWeight: isSelected ? theme.typography.fontWeightBold : theme.typography.fontWeightRegular,
        }}
        startIcon={<Icon color={isSelected ? activeIconColor || theme.palette.primary.main : iconsColor || theme.palette.text.secondary} />}
      >
        <Box
          component="span"
          sx={{
            textTransform: "none",
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
    </Link>
  );
};

export default MainMenuItem;
