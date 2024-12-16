import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  IconButton,
  Link,
  Modal,
  Typography,
} from "@mui/material";

import menuIcon from "../../../public/assets/menu-icon.svg";
import linkIcon from "../../../public/assets/link-icon.svg";
import closeMenuIcon from "../../../public/assets/close-mobile-icon.svg";

import { IMenuMobile } from "./MobileMenuTypes";

const style = {
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  transform: "translate(-50%, -50%)",
  position: "absolute" as "absolute",
};

export const MobileMenu = ({
  mainApp,
  appsData,
  fontFamily,
  menuOptions,
  languageLabel,
  languageSelector,
  marginRight = 0,
  marginLeft = 1
}: IMenuMobile) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
        <Box sx={style}>
          <Box
            paddingX={2}
            paddingY={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              alt="Tool icon"
              src={mainApp.logo.src}
              width={mainApp.logo.width}
              height={mainApp.logo.height}
            />
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "20px",
                border: "1.25px solid #EDF0F7",
              }}
              onClick={handleClose}
            >
              <Image
                width={16}
                height={16}
                src={closeMenuIcon}
                alt="Close menu icon"
              />
            </IconButton>
          </Box>
          <Box pb={2} height="100%" sx={{ overflowY: "auto" }}>
            <Box pb={2} onClick={handleClose}>
              {menuOptions}
            </Box>
            <Box
              p={2}
              display="flex"
              alignItems="center"
              borderTop="1px solid #EDF0F7"
              justifyContent="space-between"
            >
              <Typography variant="body1" sx={{ fontFamily: fontFamily }}>
                {languageLabel}
              </Typography>
              {languageSelector}
            </Box>
          </Box>
          {appsData && (
            <Box
              bottom={0}
              width="100%"
              height="53px"
              display="flex"
              position="absolute"
              borderTop="1px solid #EDF0F7"
            >
              {appsData.map((item) => (
                <Button
                  fullWidth
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: "1px solid #EDF0F7",
                  }}
                >
                  <Link
                    href={item.url}
                    target="_blank"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      width={65}
                      height={21}
                      alt="Tool logo"
                      src={item.logo.src}
                      style={{
                        marginRight: "8px",
                      }}
                    />
                    <Image
                      width={12}
                      height={12}
                      src={linkIcon}
                      alt="Link icon"
                    />
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
