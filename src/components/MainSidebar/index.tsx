"use client";

import React from "react";
import { Box, Drawer, useMediaQuery, useTheme, Divider } from "@mui/material";
import { useSidebarHook } from "./useSidebarHook";
import MainMenuItem from "./MenuItem";
import { routes } from "./demoRoutes";
import Image from "next/image";
import { Route, AppData } from "./icons/types";
import { ROLES, userContext } from "./demoAppsData";
import { ToolItemV3 } from "../V3/ToolItemV3";

export type MainSidebarProps = {
  mainApp?: AppData;
  appsData?: AppData[];
  mainSidebarBgColor?: string;
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
  activeBorderColor?: string;
  notificationColor?: string;
  notificationsCount?: number;
  hideOnBreakpoint?: "xs" | "sm" | "md" | "lg" | "xl";
  defaultPath?: string;
  routes?: Route[];
  mt?: number | string;
  selectedBgColor?: string;
  roles?: Record<string, string>;
  userContext?: { role: string };
  onClick?: (path: string) => void;
};

export const MainSidebar: React.FC<MainSidebarProps> = (props) => {
  const theme = useTheme();
  const {
    mt = 0,
    mainSidebarBgColor = theme.palette.background.paper,
    navLinkTextColor = theme.palette.text.primary,
    iconsColor = theme.palette.text.primary,
    activeTextColor = theme.palette.text.primary,
    activeIconColor = theme.palette.primary.main,
    activeBorderColor = theme.palette.primary.main,
    notificationColor = theme.palette.error.main,
    notificationsCount = 0,
    hideOnBreakpoint = "md",
    defaultPath = "/",
    mainApp,
    appsData,
    routes: demoRoutes,
    selectedBgColor,
    roles = ROLES,
    userContext: context = userContext,
    onClick,
  } = props;

  const { isSelected } = useSidebarHook();
  const isHidden = useMediaQuery(theme.breakpoints.down(hideOnBreakpoint));

  const checkSelected = (path: string) => {
    const result =
      isSelected(path) || (isSelected("/") && path === defaultPath);
    return result;
  };

  if (isHidden) {
    return null;
  }

  const { firstRoutes, secondRoutes } = demoRoutes
    ? { firstRoutes: demoRoutes.slice(0, 2), secondRoutes: demoRoutes.slice(2) }
    : routes();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "180px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          justifyContent: "space-between",
          width: "180px",
          boxSizing: "border-box",
          backgroundColor: mainSidebarBgColor,
          border: "none",
          transition: "none",
        },
      }}
    >
      <Box>
        <Box
          display={{ xs: "none", md: "flex" }}
          width="100%"
          justifyContent="flex-start"
          alignItems="center"
          minHeight="69px"
          pl={3.5}
          borderBottom="1px solid"
          borderColor={theme.palette.grey[200]}
          mt={mt}
        >
          {mainApp ? (
            <Image
              alt="Tool logo"
              src={mainApp.logo.src}
              width={mainApp.logo.width}
              height={mainApp.logo.height}
            />
          ) : (
            <></>
          )}
        </Box>
        <Box sx={{ overflow: "auto" }}>
          {[...firstRoutes]
            .filter(
              (route: Route) => route.public || context.role === roles.admin
            )
            .map((route: Route, index: number) => (
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
                activeBorderColor={activeBorderColor}
                notificationColor={notificationColor}
                selectedBgColor={selectedBgColor}
                onClick={() => {
                  if (onClick) onClick(route.path);
                }}
              />
            ))}
          {routes().secondRoutes.length > 0 && (
            <Divider
              sx={{
                border: `${theme.palette.grey[300]} 1px solid`,
              }}
            />
          )}
          {[...secondRoutes]
            .filter(
              (route: Route) => route.public || context.role === roles.admin
            )
            .map((route: Route, index: number) => (
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
                activeBorderColor={activeBorderColor}
                notificationColor={notificationColor}
                selectedBgColor={selectedBgColor}
                onClick={() => {
                  if (onClick) onClick(route.path);
                }}
              />
            ))}
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {appsData?.map((item: AppData, index: number) => (
          <ToolItemV3 key={index} item={item} index={index} />
        ))}
      </Box>
    </Drawer>
  );
};
