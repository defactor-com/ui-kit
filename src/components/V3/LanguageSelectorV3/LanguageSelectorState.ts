"use client";

import React from "react";
import { useState, useTransition } from "react";
import {
  ILanguageSelectorState,
  LanguageData,
  LanguageCallbacks,
} from "./LanguageSelectorTypes";

const LanguageSelectorState = ({
  router,
  pathname,
  icon,
  options,
}: ILanguageSelectorState & { options: { id: string; flag: React.ElementType }[] }): [LanguageData, LanguageCallbacks] => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [, startTransition] = useTransition();
  const open = Boolean(anchorEl);
  const [currentIcon, setCurrentIcon] = useState(icon);
  const [visible, setVisible] = useState(true);

  const handleHover = (value: boolean) => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 250);
    return () => clearTimeout(timer);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lng: string | null) => {
    if (!lng) {
      setAnchorEl(null);
      return;
    }

    // Update current icon based on selected language
    const selectedLanguage = options.find((option) => option.id === lng);
    if (selectedLanguage) {
      setCurrentIcon(React.createElement(selectedLanguage.flag));

    }

    startTransition(() => {
      router.replace(pathname, { locale: lng });
    });
    setAnchorEl(null);
  };

  return [
    {
      visible,
      isOpen: open,
      anchorEl,
      currentIcon,
    },
    {
      handleClick,
      handleClose,
      handleHover,
    },
  ];
};

export default LanguageSelectorState;
