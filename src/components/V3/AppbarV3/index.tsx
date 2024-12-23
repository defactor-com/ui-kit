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
import React, { useEffect, useState } from "react";

//import WalletSelector from 'app/components/WalletV2'

//import ClaimTokensButton from '../ClaimTokensButton'
import { LanguageSelectorV3 } from "../LanguageSelectorV3";
import { MobileMenuV3 } from "../MobileMenuV3";
import ClaimTokensButtonV3 from "../ClaimTokensButtonV3";

export const generalConfig = {
  routesDisabled: [],
};

const AppbarV3: React.FC = () => {
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
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={generalConfig.assets.appLogo}
              alt={"headerLogo"}
              style={{ marginTop: 6 }}
            />
          </Link>
        </Box>
        {!isMobile ? (
          <>
            {generalConfig.appEnvironment === "testnet" && (
              <ClaimTokensButtonV3 />
            )}
            {/*  <WalletSelector /> */}
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={generalConfig.assets.assets.src} alt="Assets" />
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

export default AppbarV3;
