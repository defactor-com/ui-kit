import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  IconButton,
  Link,
  Modal,
  Typography,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { routes as getRoutes } from '../../MainSidebar/demoRoutes';

import menuIcon from "/assets/menu-icon.svg";
import linkIcon from "/assets/link-icon.svg";
import closeMenuIcon from "/assets/close-mobile-icon.svg";

import { IMenuMobileV3 } from "./MobileMenuTypes";
import MainMenuItem from "../../MainSidebar/MenuItem";
import { Route } from "../../MainSidebar/icons/types";

export const MobileMenuV3 = ({
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
  notificationsCount = 5,
  roles = { admin: 'admin' },
  userContext = { role: 'admin' },
  onClick
}: IMenuMobileV3) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const { firstRoutes, secondRoutes } = getRoutes(); 

  return (
    <Box mr={marginRight} ml={marginLeft}>
      <IconButton onClick={handleOpen} sx={{ borderRadius: "20px", border: "1.25px solid #EDF0F7" }}>
        <Image src={menuIcon} width={16} height={17} alt="Menu selector icon" />
      </IconButton>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={{
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          bgcolor: "background.paper",
          transform: "translate(-50%, -50%)",
          position: "absolute"
        }}>
          <Box paddingX={2} paddingY={3} display="flex" alignItems="center" justifyContent="space-between">
            {mainApp?.logo?.src ? (
              <Image src={mainApp.logo.src} alt="Tool logo" width={mainApp.logo.width} height={mainApp.logo.height} />
            ) : (
              <Image src="/assets/default-logo.svg" alt="Default logo" width={50} height={50} />
            )}
            <IconButton onClick={handleClose} sx={{ width: "40px", height: "40px", borderRadius: "20px", border: "1.25px solid #EDF0F7" }}>
              <Image src={closeMenuIcon} width={16} height={16} alt="Close menu icon" />
            </IconButton>
          </Box>
          <Box pb={2} height="100%" sx={{ overflowY: "auto" }}>
            <Box pb={2} onClick={handleClose}>
              <Box sx={{ overflow: "auto" }}>
                {[...firstRoutes, ...secondRoutes].map((route: Route, index: number) => (
                  <MainMenuItem
                    key={index}
                    icon={route.icon}
                    text={route.text}
                    path={route.path}
                    isSelected={route.path === "/" ? true : false}
                    notificationsCount={route.path === "/notifications" ? notificationsCount : 0}
                    navLinkTextColor={navLinkTextColor}
                    iconsColor={iconsColor}
                    activeTextColor={activeTextColor}
                    activeIconColor={activeIconColor}
                    activeBorderColor={activeBorderColor}
                    notificationColor={notificationColor}
                    selectedBgColor={selectedBgColor}
                    onClick={() => onClick?.(route.path)}
                  />
                ))}
              </Box>
            </Box>
            <Box p={2} display="flex" alignItems="center" borderTop="1px solid #EDF0F7" justifyContent="space-between">
              <Typography variant="body1" sx={{ fontFamily }}>{languageLabel}</Typography>
              {languageSelector}
            </Box>
          </Box>
          {appsData && (
            <Box bottom={0} width="100%" height="53px" display="flex" position="absolute" borderTop="1px solid #EDF0F7">
              {appsData.map((item, index) => (
                <Button key={index} fullWidth sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #EDF0F7" }}>
                  <Link href={item.url} target="_blank" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.logo.src ? (
                      <Image src={item.logo.src} width={65} height={21} alt="Tool logo" style={{ marginRight: "8px" }} />
                    ) : (
                      <Image src="/assets/default-app-icon.svg" width={65} height={21} alt="Default app icon" />
                    )}
                    <Image src={linkIcon} width={12} height={12} alt="Link icon" />
                  </Link>
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};
