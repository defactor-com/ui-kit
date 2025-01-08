import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
  alpha,
} from "@mui/material";
import { Menu01, XClose } from "@untitled-ui/icons-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const generalConfig = {
  routesDisabled: [],
};

export interface Web3Account {
  isConnected: boolean;
  address: string;
  chainId: number;
}

export interface AppbarV3Props {
  mobileMenu?: React.ComponentType;
  appLogo: string;
  appLogoAlt?: string;
  claimTokens?: boolean;
  currentLogo: string;
  currentLogoAlt?: string;
  boxShadow?: string;
  web3AccountHook: () => Web3Account;
  walletSelector: React.ComponentType;
  languageSelector: React.ComponentType;
  ClaimTokensBtn: React.ComponentType;
}

export const AppbarV3: React.FC<AppbarV3Props> = ({
  mobileMenu,
  walletSelector: WalletSelector,
  languageSelector: LanguageSelector,
  appLogo,
  appLogoAlt = "App Logo",
  claimTokens,
  ClaimTokensBtn,
  currentLogo,
  currentLogoAlt = "Current Logo",
  boxShadow = `8px 10px 10px 0px ${alpha("#D6DAE7", 0.25)}`,
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
        boxShadow: boxShadow,
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
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Link>
        </Box>
        {!isMobile ? (
          <>
            {claimTokens && <ClaimTokensBtn />}
            <WalletSelector />
            <LanguageSelector />
          </>
        ) : (
          <>
            <Box height="22px" margin={2}>
              <Link href="/" passHref>
                <Box sx={{ position: "relative", width: 87, height: 23 }}>
                  <Image
                    src={currentLogo}
                    alt={currentLogoAlt}
                    fill
                    style={{ objectFit: "contain" }}
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
      {mobileMenu && open && React.createElement(mobileMenu)}
    </AppBar>
  );
};
