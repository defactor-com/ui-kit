"use client";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu01, XClose } from "@untitled-ui/icons-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { LanguageSelectorV3 } from "../LanguageSelectorV3";
import { MobileMenuV3 } from "../MobileMenuV3";
import ClaimTokensButtonV3 from "../ClaimTokensButtonV3";

import DefactorLogo from "./defactor-logo.svg";
import EngageLogo from "./engage-logo.svg";

export const generalConfig = {
  routesDisabled: [],
};

export interface AppbarV3Props {
  appLogo?: string;
  appLogoAlt?: string;
  appEnvironment?: string;
  currentLogo?: string;
  currentLogoAlt?: string;
}

export const AppbarV3: React.FC<AppbarV3Props> = ({
  appLogo = DefactorLogo,
  appLogoAlt = "Defactor Logo",
  appEnvironment = "test",
  currentLogo = EngageLogo,
  currentLogoAlt = "Engage Logo",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  return (
    <AppBar
      component={"header"}
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: 60,
        backgroundColor: "white",
        boxShadow: "8px 10px 10px 0px #D6DAE740",
        pr: "0px !important",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <Box sx={{ position: "relative", width: 120, height: 40 }}>
              <Image
                src={appLogo}
                alt={appLogoAlt}
                layout="fill"
                objectFit="contain"
                priority
              />
            </Box>
          </Link>
        </Box>
        {!isMobile ? (
          <>
            {appEnvironment === "testnet" && <ClaimTokensButtonV3 />}
            <LanguageSelectorV3
              router={() => {}}
              pathname="/"
              locale="en"
              t={(key: string, { locale }: { locale: string }) => `${locale}`}
            />
          </>
        ) : (
          <>
            <Box height="22px" margin={2}>
              <Link href="/" passHref>
                <Box sx={{ position: "relative", width: 87, height: 23 }}>
                  <Image
                    src={currentLogo}
                    alt={currentLogoAlt}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </Link>
            </Box>
            <IconButton
              sx={{
                p: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
              onClick={() => setOpen(!open)}
            >
              {!open ? <Menu01 /> : <XClose />}
            </IconButton>
          </>
        )}
      </Toolbar>
      <MobileMenuV3 open={open} onClose={() => setOpen(false)} />
    </AppBar>
  );
};
