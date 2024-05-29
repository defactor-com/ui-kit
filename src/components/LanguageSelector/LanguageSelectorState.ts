import { useState, useTransition, useEffect } from "react";

import {
  ILanguageSelectorState,
  LanguageCallbacks,
  LanguageData,
} from "./LanguageSelectorTypes";

const LanguageSelectorState = ({
  router,
  pathname,
  icon,
  activeIcon,
}: ILanguageSelectorState): [LanguageData, LanguageCallbacks] => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [, startTransition] = useTransition();
  const open = Boolean(anchorEl);
  const [currentIcon, setCurrentIcon] = useState(icon);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setCurrentIcon(open ? activeIcon : icon);
  }, [anchorEl]);

  const handleHover = (value: boolean) => {
    setVisible(false);
    const timer = setTimeout(() => {
      const validation = open || value;
      setCurrentIcon(validation ? activeIcon : icon);
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

    startTransition(() => {
      router.replace(pathname, { locale: lng });
    });
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
