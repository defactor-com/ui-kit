import React from "react";
import {
  Box,
  Button,
  Link,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSidebarHook } from "./useSidebarHook";
import MainMenuItem from "./MenuItem";
import { routes } from "./engageRoutes";
import Image from "next/image";
import assetsIcon from "../../../public/assets/asset-logo.svg";
import poolsIcon from "../../../public/assets/pools-logo.svg";
import engageIcon from "../../../public/assets/engage-logo.svg";
import linkIcon from "../../../public/assets/link-icon.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
  navLinkTextColor?: string;
  iconsColor?: string;
};

export type AppDataType = {
  logo: {
    width: number;
    height: number;
    src: string | StaticImport;
  };
  url?: string;
};

export type MainSidebarProps = {
  mainApp?: AppDataType;
  appsData?: any;
  mainSidebarBgColor?: string;
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
};

export type AppData = {
  logo: { src: string; height: number; width: number };
  url: string;
};

export const demoAppsData: AppData[] = [
  {
    logo: { src: poolsIcon, height: 21, width: 53 },
    url: "https://pools-dev.defactor.dev/",
  },
  {
    logo: { src: assetsIcon, height: 21, width: 74 },
    url: "https://assets.defactor.dev/",
  },
];

export const MainSidebar: React.FC<MainSidebarProps> = (props) => {
  const theme = useTheme();
  const {
    mt = 0,
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
    appsData = demoAppsData,
    routes: demoRoutes,
    selectedBgColor,
  } = props;

  const { isSelected } = useSidebarHook();
  const isHidden = useMediaQuery(theme.breakpoints.down(hideOnBreakpoint));

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
          <Image
            alt="Tool logo"
            src={mainApp.logo.src}
            width={mainApp.logo.width}
            height={mainApp.logo.height}
          />
        </Box>
        <Box sx={{ overflow: "auto" }}>
          {[...firstRoutes, ...secondRoutes].map(
            (route: Route, index: number) => (
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
            )
          )}
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {appsData?.map((item: AppData, index: number) => (
          <Link href={item.url} target="_blank" key={index}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                padding: "16px",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: `1px solid ${theme.palette.grey[200]}`,
                borderRadius: "0px",
                minHeight: "53px",
              }}
            >
              <Image
                alt="Tool logo"
                src={item.logo.src}
                width={item.logo.width}
                height={item.logo.height}
              />
              <Image width={12} height={12} src={linkIcon} alt="Link icon" />
            </Button>
          </Link>
        ))}
      </Box>
    </Drawer>
  );
};
