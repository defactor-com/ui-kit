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
          borderRight: isSelected ? `2px solid #E0A225` : "",
          borderRadius: 0,
          padding: 2,
          paddingLeft: 4,
          color: isSelected ? activeTextColor : navLinkTextColor,
          fontSize: 14,
          alignItems: "center",
          justifyContent: "flex-start",
          fontWeight: isSelected ? 700 : 400,
        }}
        startIcon={<Icon color={isSelected ? activeIconColor : iconsColor} />}
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
              backgroundColor: notificationColor,
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
