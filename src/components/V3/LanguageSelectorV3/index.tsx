import React, { useEffect, useState } from "react";
import clsx from "clsx";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material";
import LanguageSelectorState from "./LanguageSelectorState";
import { ILanguageSelector } from "./LanguageSelectorTypes";
import UsaIcon from "./usaIcon";
import SpanishIcon from "./SpanishIcon";

const defaultOptions = [
  {
    id: "en",
    flag: UsaIcon,
  },
  {
    id: "es",
    flag: SpanishIcon,
  },
];

export const LanguageSelectorV3 = ({
  icon = <UsaIcon />,
  router,
  pathname,
  locale,
  bgColor = "#057d2f",
  options = defaultOptions,
  t,
}: ILanguageSelector) => {
  const [currentIcon, setCurrentIcon] = useState(icon);

  useEffect(() => {
    const selectedOption = options.find((option) => option.id === locale);
    if (selectedOption?.flag) {
      setCurrentIcon(React.createElement(selectedOption.flag)); // Convert ElementType to ReactElement
    } else {
      setCurrentIcon(icon);
    }
  }, [locale, options]);

  const [
    { visible, isOpen, anchorEl },
    { handleClick, handleClose, handleHover },
  ] = LanguageSelectorState({
    router,
    pathname,
    icon: currentIcon,
    options,
  });

  return (
    <Box>
      <Box className="button">
        <IconButton
          className="buttonMui"
          id="basic-button"
          aria-controls={isOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : undefined}
          onClick={handleClick}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <Box
            className={clsx("containerIcon", visible ? "fade-in" : "fade-out")}
          >
            {currentIcon || icon}
          </Box>
          <Typography
            variant="body1"
            fontWeight="bold"
            className="languageLabel"
          >
            {locale}
          </Typography>
          <Box className="arrowContainer">
            <ArrowDropDown />
          </Box>
        </IconButton>
      </Box>
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
            sx={{
              backgroundColor:
                locale === lng.id ? `${alpha(bgColor, 0.1)}` : "",
              borderLeft: locale === lng.id ? `2px solid ${bgColor}` : "",
            }}
          >            
              <lng.flag />
            {t("locale", { locale: lng.id }) || lng.id}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
