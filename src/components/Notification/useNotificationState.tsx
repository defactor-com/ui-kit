import { useState } from "react";

import {
  IUseNotification,
  useNotificationData,
  useNotificationCallbacks,
} from "./NotificationTypes";

export const useNotification = ({
  icon,
  activeIcon,
}: IUseNotification): [useNotificationData, useNotificationCallbacks] => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentIcon, setCurrentIcon] = useState(icon);
  const [visible, setVisible] = useState(true);
  const open = Boolean(anchorEl);

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

  return [
    { visible, currentIcon, anchorEl },
    { handleClick, handleHover },
  ];
};
