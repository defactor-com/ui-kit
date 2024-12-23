"use client";

import React from "react";
import { Box, Drawer, useMediaQuery, useTheme, Divider } from "@mui/material";
import { useSidebarHook } from "./useSidebarHook";
import MainMenuItem from "./MenuItem";
import { routes } from "./demoRoutes";
//import Image from "next/image";
//import engageIcon from "../../../../public/assets/engage-logo.svg";
import { Route, AppData } from "./icons/types";
import { demoAppsData } from "./demoAppsData";
import { ROLES, userContext } from "./demoAppsData";
import { ToolItemV3 } from "../ToolItemV3";

export type MobileMenuV3Props = {
  //mainApp?: AppData;
  appsData?: AppData[];
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
  notificationColor?: string;
  notificationsCount?: number;
  hideOnBreakpoint?: "xs" | "sm" | "md" | "lg" | "xl";
  defaultPath?: string;
  routes?: Route[];
  mt?: number | string;
  selectedBgColor?: string;
  roles?: Record<string, string>;
  userContext?: { role: string };
  open: boolean
  onClose: () => void
};

export const MobileMenuV3: React.FC<MobileMenuV3Props> = (props) => {
  const theme = useTheme();
  const {
    mt = 0,
    navLinkTextColor = theme.palette.text.primary,
    iconsColor = theme.palette.text.primary,
    activeTextColor = theme.palette.text.primary,
    activeIconColor = theme.palette.secondary.main,
    notificationColor = theme.palette.error.main,
    notificationsCount = 0,
    hideOnBreakpoint = "md",
    defaultPath = "/",
    /*mainApp = {
      logo: { src: engageIcon, height: 21, width: 80 },
      url: "",
    },*/
    appsData = demoAppsData,
    routes: demoRoutes,
    selectedBgColor,
    roles = ROLES,
    userContext: context = userContext,
    open,
    onClose
  } = props;

  const { isSelected } = useSidebarHook();
  const isHidden = useMediaQuery(theme.breakpoints.up(hideOnBreakpoint));

  const checkSelected = (path: string) => {
    return isSelected(path) || (isSelected("/") && path === defaultPath);
  };

  if (isHidden) {
    return null;
  }

  const { firstRoutes, secondRoutes } = demoRoutes
    ? { firstRoutes: demoRoutes.slice(0, 2), secondRoutes: demoRoutes.slice(2) }
    : routes();

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
      PaperProps={{
        sx: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: 7,
        },
      }}
    >
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        {/** <Box
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
          <Image
            alt="Tool logo"
            src={mainApp.logo.src}
            width={mainApp.logo.width}
            height={mainApp.logo.height}
          />
        </Box> */}
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
              notificationColor={notificationColor}
              selectedBgColor={selectedBgColor}
            />
          ))}
        {routes().firstRoutes.length > 0 && (
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
              notificationColor={notificationColor}
              selectedBgColor={selectedBgColor}
            />
          ))}
          <Divider
            sx={{
              border: `${theme.palette.grey[300]} 1px solid`,
            }}
          />
      </Box>
      <Box
        sx={{
          p: 2,

          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          width: "100%",
        }}
      >
        {appsData?.map((item: AppData, index: number) => (
          <ToolItemV3 key={index} item={item} index={index} />
        ))}
      </Box>
    </Drawer>
  );
};
