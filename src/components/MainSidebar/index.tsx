import React from "react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import useSidebarHook from "./useSidebarHook";
import MainMenuItem from "./MenuItem";

export type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
  navLinkTextColor?: string;
  iconsColor?: string;
};

export type MainSidebarProps = {
  routes: Route[];
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
    routes,
    mainSidebarBgColor = theme.palette.background.paper,
    navLinkTextColor = theme.palette.text.primary,
    iconsColor = theme.palette.text.primary,
    activeTextColor = theme.palette.text.primary,
    activeIconColor = theme.palette.secondary.main,
    notificationColor = theme.palette.error.main,
    notificationsCount = 0,
    hideOnBreakpoint = "sm",
    defaultPath = "/dashboard",
  } = props;

  const { isSelected } = useSidebarHook();
  const isHidden = useMediaQuery(theme.breakpoints.down(hideOnBreakpoint));

  const checkSelected = (path: string) => {
    return isSelected(path) || (isSelected('/') && path === defaultPath);
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
        },
      }}
    >
      <Box sx={{ height: 60 }} />
      <Box sx={{ overflow: "auto" }}>
        {routes.map((route, index) => (
          <MainMenuItem
            icon={route.icon}
            key={index}
            text={route.text}
            path={route.path}
            isSelected={checkSelected(route.path)}
            notificationsCount={
              route.path === "/notifications" ? notificationsCount : 0
            }
            navLinkTextColor={route.navLinkTextColor || navLinkTextColor}
            iconsColor={route.iconsColor || iconsColor}
            activeTextColor={activeTextColor}
            activeIconColor={activeIconColor}
            notificationColor={notificationColor}
          />
        ))}
      </Box>
    </Drawer>
  );
};
