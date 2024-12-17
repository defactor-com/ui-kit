import React from "react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import useSidebarHook from "./useSidebarHook";
import MainMenuItem from "./MenuItem";

// icons
import DashboardIcon from "../Icons/v2/dashboardIcon";
import MyWalletIcon from "../Icons/v2/myWalletIcon";
import MyTemplateIcon from "../Icons/v2/myTemplateIcon";
import NotificationsIcon from "../Icons/v2/notificationsIcon";
import ContactsIcon from "../Icons/v2/contactsIcon";

export type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
  navLinkTextColor?: string;
  iconsColor?: string;
};

export type MainSidebarProps = {
  routes?: Route[];
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

const assetsRoutes: Route[] = [
  {
    text: "Dashboard",
    path: "/",
    icon: DashboardIcon as React.ElementType,
  },
  {
    text: "MyWallet",
    path: "/wallet",
    icon: MyWalletIcon as React.ElementType,
  },
  {
    text: "MyTemplates",
    path: "/templates",
    icon: MyTemplateIcon as React.ElementType,
  },
  {
    text: "Notifications",
    path: "/notifications",
    icon: NotificationsIcon as React.ElementType,
  },
  {
    text: "Contacts",
    path: "/contacts",
    icon: ContactsIcon as React.ElementType,
  },
];

export const MainSidebar: React.FC<MainSidebarProps> = (props) => {
  const theme = useTheme();
  const {
    routes = assetsRoutes,
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
