import { Box, Divider, Drawer, Typography, useTheme } from "@mui/material";
import React from "react";

import { generalConfig } from "./config";

import MenuItem from "./MenuItem";
import ToolItem from "./toolItem";
import useSidebarHook from "./useSidebarHook";
import routes from "./routes";
//import { LanguageSelectorV3Example } from "../LanguageSelectorV3/LanguageSelectorV3Example";
import { WalletSelectorExample } from "../../WalletComponent/WalletSelectorExample";

interface MobileMenuContentV3Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenuContentV3: React.FC<MobileMenuContentV3Props> = ({
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
            {/* <LanguageSelectorV3Example /> */}   <Typography variant="body2">{"LanguageSelector"}</Typography>
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

export default MobileMenuContentV3;
