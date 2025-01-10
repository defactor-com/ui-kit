import { Box, Divider, Drawer, Typography, useTheme } from "@mui/material";
import React from "react";

//import WalletSelector from "app/components/WalletV2";
import { generalConfig } from "./config";

//import LanguageSelector from "../LanguageSelector";
import MenuItem from "./MenuItem";
import ToolItem from "./toolItem";
import useSidebarHook from "./useSidebarHook";
import routes from "./routes";
import { LanguageSelectorExample } from "../../LanguageSelector/LanguageSelectorExample";
import { WalletSelectorExample } from "../../WalletComponent/WalletSelectorExample";

interface MobileNavigationDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MobileNavigationDrawer: React.FC<MobileNavigationDrawerProps> = ({
  open,
  onClose,
}) => {
  const { routeType, isSelected } = useSidebarHook();
  const theme = useTheme();

  return (
    <>
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
          {routes[routeType as "mainRoutes" | "mobileRoutes"].map((route) => (
            <MenuItem
              key={route.text}
              text={route.text}
              path={route.path}
              icon={route.icon}
              isSelected={isSelected(route.path)}
              onClick={onClose}
            />
          ))}
          <Divider />
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <WalletSelectorExample />
          </Box>
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="body2">{"Language"}</Typography>
            <LanguageSelectorExample />
          </Box>
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
          {generalConfig.assets.pools && (
            <>
              <Divider
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderColor: theme.palette.background.default,
                  color: theme.palette.background.default,
                  border: "1px solid",
                }}
              />
              <ToolItem
                logo={generalConfig.assets.pools.src}
                alt={"PoolsLogo"}
                link={generalConfig.assets.pools.href}
                newTab={true}
              />
            </>
          )}
          {generalConfig.assets.poolsCP && (
            <>
              <Divider
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderColor: theme.palette.background.default,
                  color: theme.palette.background.default,
                  border: "1px solid",
                }}
              />
              <ToolItem
                logo={generalConfig.assets.poolsCP.src}
                alt={"PoolsCPLogo"}
                link={generalConfig.assets.poolsCP.href}
                newTab={true}
              />
            </>
          )}
          {generalConfig.assets.engage && (
            <>
              <Divider
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderColor: theme.palette.background.default,
                  color: theme.palette.background.default,
                  border: "1px solid",
                }}
              />
              <ToolItem
                logo={generalConfig.assets.engage.src}
                alt={"EnagageLogo"}
                link={generalConfig.assets.engage.href}
                newTab={true}
              />
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNavigationDrawer;
