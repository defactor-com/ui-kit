import React from "react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import useSidebarHook from "./useSidebarHook";
import MainMenuItem from "./MenuItem";
import { routes } from "./engageRoutes";
import Image from "next/image";
//import poolsIcon from "../../../public/assets/pools-logo.svg";
import engageIcon from "../../../public/assets/engage-logo.svg";

export type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
  navLinkTextColor?: string;
  iconsColor?: string;
};

export type MainSidebarProps = {
  mainApp?: any;
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
    mainApp = {
      logo: { src: engageIcon, height: 21, width: 80 },
      url: "",
    },
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
      <Box
        display={{ xs: "none", md: "flex" }}
        width="100%"
        justifyContent="flex-start"
        alignItems="center"
        minHeight="69px"
        pl={3.5}
        borderBottom="1px solid" borderColor={theme.palette.grey[200]}
      >
        <Image
          alt="Tool logo"
          src={mainApp.logo.src}
          width={mainApp.logo.width}
          height={mainApp.logo.height}
        />
      </Box>
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
