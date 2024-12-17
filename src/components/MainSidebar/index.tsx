import React from "react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import useSidebarHook from "./useSidebarHook";
import MainMenuItem from "./MenuItem";
import { routes } from "./engageRoutes";

export type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
  navLinkTextColor?: string;
  iconsColor?: string;
};

export type MainSidebarProps = {
  mainSidebarBgColor?: string;
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
  notificationColor?: string;
  notificationsCount?: number;
  hideOnBreakpoint?: "xs" | "sm" | "md" | "lg" | "xl";
  defaultPath?: string;
};

export const MainSidebar: React.FC<MainSidebarProps> = (props) => {
  const theme = useTheme();
  const {
    mainSidebarBgColor = theme.palette.background.paper,
    navLinkTextColor = theme.palette.text.primary,
    iconsColor = theme.palette.text.primary,
    activeTextColor = theme.palette.text.primary,
    activeIconColor = theme.palette.secondary.main,
    notificationColor = theme.palette.error.main,
    notificationsCount = 0,
    hideOnBreakpoint = "sm",
    defaultPath = "/",
  } = props;

  const { firstRoutes, secondRoutes } = routes();
  const { isSelected } = useSidebarHook();
  const isHidden = useMediaQuery(theme.breakpoints.down(hideOnBreakpoint));

  const checkSelected = (path: string) => {
    return isSelected(path) || (isSelected("/") && path === defaultPath);
  };

  if (isHidden) {
    return null;
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "180px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "180px",
          boxSizing: "border-box",
          backgroundColor: mainSidebarBgColor,
          border: "none",
        },
      }}
    >
      <Box sx={{ height: 60 }} />
      <Box sx={{ overflow: "auto" }}>
        {[...firstRoutes, ...secondRoutes].map((route, index) => (
          <MainMenuItem
            key={index}
            icon={route.icon}
            text={route.text}
            path={route.path}
            isSelected={checkSelected(route.path)}
            notificationsCount={
              route.path === "/notifications" ? notificationsCount : 0
            }
            navLinkTextColor={navLinkTextColor}
            iconsColor={iconsColor}
            activeTextColor={activeTextColor}
            activeIconColor={activeIconColor}
            notificationColor={notificationColor}
          />
        ))}
      </Box>
    </Drawer>
  );
};
