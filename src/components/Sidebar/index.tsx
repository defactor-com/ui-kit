import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { Box, Link } from "@mui/material";

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
        <Image width={52} height={21} src={mainApp.logo} alt="Tool logo" />
      </Box>
      <div className="sidebar-options-container">{menuOptions}</div>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {appsData?.map((item) => (
          <Link href={item.url}>
            <Box
              display="flex"
              padding="16px"
              alignItems="center"
              borderTop="solid 1px #EDF0F7"
              justifyContent="space-between"
            >
              <Image width={73} height={21} src={item.logo} alt="Tool logo" />
              <Image width={12} height={12} src={linkIcon} alt="Tool logo" />
            </Box>
          </Link>
        ))}
      </Box>
    </div>
  </div>
);
