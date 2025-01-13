import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  IconButton,
  Modal,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { routes } from "../../MainSidebar/demoRoutes";
import menuIcon from "/assets/menu-icon.svg";
import closeMenuIcon from "/assets/close-mobile-icon.svg";
import { IMenuMobileV3 } from "./MobileMenuTypes";
import { Route, AppData } from "../../MainSidebar/icons/types";
import { ROLES, userContext } from "../../MainSidebar/demoAppsData";
import { useSidebarHook } from "../../MainSidebar/useSidebarHook";
import { ToolItemV3 } from "../ToolItemV3";
import { MobileMenuItem } from "./MenuItem";

export const MobileMenuV3 = ({
  hideOnBreakpoint = "xs",
  defaultPath = "/",
  fontFamily,
  languageLabel,
  languageSelector,
  mainApp,
  appsData,
  marginLeft = 1,
  marginRight = 0,
  navLinkTextColor = useTheme().palette.text.primary,
  iconsColor = useTheme().palette.text.secondary,
  activeTextColor = useTheme().palette.text.primary,
  activeIconColor = useTheme().palette.primary.main,
  activeBorderColor = useTheme().palette.primary.dark,
  notificationColor = useTheme().palette.error.main,
  selectedBgColor = useTheme().palette.action.selected,
  notificationsCount = 0,
  routes: demoRoutes,
  roles = ROLES,
  userContext: context = userContext,
  onClick,
  connectWalletBtn,
}: IMenuMobileV3) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const theme = useTheme();

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
    <Box mr={marginRight} ml={marginLeft}>
      <IconButton
        onClick={handleOpen}
        sx={{ borderRadius: "20px", border: "1.25px solid #EDF0F7" }}
      >
        <Image src={menuIcon} width={16} height={17} alt="Menu selector icon" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            bgcolor: "background.paper",
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}
        >
          <Box
            px={2}
            py={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {mainApp?.logo?.src && (
              <Box display="flex" alignItems="center">
                <Image
                  src={mainApp.logo.src}
                  alt="Tool logo"
                  width={mainApp.logo.width}
                  height={mainApp.logo.height}
                />
              </Box>
            )}
            <Box display="flex" alignItems="center">
              {mainApp?.logo?.src && (
                <Box ml={2} display="flex" alignItems="center">
                  <Image
                    src={mainApp.logo.src}
                    alt="Tool logo"
                    width={mainApp.logo.width}
                    height={mainApp.logo.height}
                  />
                </Box>
              )}
              <Box ml={2}>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "20px",
                    border: "1.25px solid #EDF0F7",
                  }}
                >
                  <Image
                    src={closeMenuIcon}
                    width={16}
                    height={16}
                    alt="Close menu icon"
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box pb={2} height="100%" sx={{ overflowY: "auto" }}>
            <Box pb={2} onClick={handleClose}>
              <Box sx={{ overflow: "auto" }}>
                {[...firstRoutes]
                  .filter(
                    (route: Route) =>
                      route.public || context.role === roles.admin
                  )
                  .map((route: Route, index: number) => (
                    <MobileMenuItem
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
                {routes().secondRoutes.length > 0 && <Divider />}
                {[...secondRoutes]
                  .filter(
                    (route: Route) =>
                      route.public || context.role === roles.admin
                  )
                  .map((route: Route, index: number) => (
                    <MobileMenuItem
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
            <Divider />
            {connectWalletBtn ? (
              <Box
                p={"21px 16px 8px 16px"}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                {connectWalletBtn}
              </Box>
            ) : (
              <></>
            )}
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ fontFamily }}>
                {languageLabel}
              </Typography>
              {languageSelector}
            </Box>
          </Box>
          {appsData && (
            <Box bottom={0} width="100%" display="flex" position="absolute">
              <Box width="100%">
                {appsData?.map((item: AppData, index: number) => (
                  <ToolItemV3 key={index} item={item} index={index} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};
