import { useState, useTransition } from "react";

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

  const handleHover = (value: boolean) => {
    setCurrentIcon(value ? activeIcon : icon);
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
