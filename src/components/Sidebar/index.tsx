import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { Box, Button, Link } from "@mui/material";

import linkIcon from "../../../public/assets/link-icon.svg";

import { ISidebar } from "./SidebarTypes";

export const Sidebar = ({
  mainApp,
  appsData,
  menuOptions,
  externalStyles,
  optionalStyles,
}: ISidebar) => (
  <div className="sidebar-mobile">
    <div
      className={clsx(externalStyles, "sidebar-container")}
      style={{ ...optionalStyles }}
    >
      <Box
        padding="24px 16px"
        borderBottom="solid 2px #EDF0F7"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Image
          alt="Tool logo"
          src={mainApp.logo.src}
          width={mainApp.logo.width}
          height={mainApp.logo.height}
        />
      </Box>
      <div className="sidebar-options-container">{menuOptions}</div>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {appsData?.map((item) => (
          <Link href={item.url} target="_blank">
            <Button
              fullWidth
              sx={{
                display: "flex",
                padding: "16px",
                alignItems: "center",
                borderTop: "solid 1px #EDF0F7",
                justifyContent: "space-between",
              }}
            >
              <Image
                alt="Tool logo"
                src={item.logo.src}
                width={item.logo.width}
                height={item.logo.height}
              />
              <Image width={12} height={12} src={linkIcon} alt="Tool logo" />
            </Button>
          </Link>
        ))}
      </Box>
    </div>
  </div>
);
