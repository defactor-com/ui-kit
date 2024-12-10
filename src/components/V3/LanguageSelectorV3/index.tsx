import React from "react";
import clsx from "clsx";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";

import LanguageIcon from "../../Icons/LanguageIcon";

import LanguageSelectorState from "./LanguageSelectorState";
import { ILanguageSelector } from "./LanguageSelectorTypes";

export const LanguageSelectorV3 = ({
  icon = <LanguageIcon />,
  activeIcon = <LanguageIcon color="#64a3e5" />,
  router,
  pathname,
  locale,
  bgColor = "#057d2f",
  options,
  t,
}: ILanguageSelector) => {
  const [
    { visible, isOpen, anchorEl, currentIcon },
    { handleClick, handleClose, handleHover },
  ] = LanguageSelectorState({ router, pathname, icon, activeIcon });

  return (
    <div>
      <div className={"button"}>
        <IconButton
          className={"buttonMui"}
          id="basic-button"
          aria-controls={isOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : undefined}
          onClick={handleClick}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <div
            className={clsx("containerIcon", visible ? "fade-in" : "fade-out")}
          >
            {typeof currentIcon === "string" ? (
              <img src={currentIcon} alt="icon" />
            ) : (
              currentIcon
            )}
          </div>
          <Typography
            variant="body1"
            fontWeight={"bold"}
            className={"languageLabel"}
          >
            {locale}
          </Typography>
          <div className="arrowContainer">
            <ArrowDropDown />
          </div>
        </IconButton>
      </div>
      <Menu
        id="basic-menu"
        classes={{
          list: "menu",
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={() => handleClose(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((lng) => (
          <MenuItem
            key={lng.id}
            onClick={() => handleClose(lng.id)}
            className={locale === lng.id ? "selectedOption" : "menuOption"}
            style={{
              backgroundColor:
                locale === lng.id ? `${alpha(bgColor, 0.1)}` : "",
              borderLeft: locale === lng.id ? `2px solid ${bgColor}` : "",
            }}
          >
            <img src={lng.flag} alt={`${lng.id} Flag`} />
            {t("locale", { locale: lng.id }) || lng.id}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
