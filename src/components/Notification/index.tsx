import React from "react";
import clsx from "clsx";
import { Badge, IconButton, alpha } from "@mui/material";

import NotificationIcon from "../../../public/assets/notification-icon.svg";
import NotificationActiveIcon from "../../../public/assets/notification-active-icon.svg";

import { useNotification } from "./useNotificationState";

import { INotification } from "./NotificationTypes";

export const Notification: React.FC<INotification> = ({
  icon = NotificationIcon,
  activeIcon = NotificationActiveIcon,
  sizeIcon = 26,
  color = "white",
  bgColor = "#26a66b",
  text,
  fontFamily,
  open = false,
  isOpen,
  handleChange,
}) => {
  const [{ currentIcon, visible }, { handleHover }] = useNotification({
    icon,
    activeIcon,
  });

  return (
    <IconButton
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      sx={{
        "&:hover": {
          backgroundColor: `${alpha(bgColor, 0.1)}`,
        },
      }}
    >
      <Badge
        variant="dot"
        classes={{
          badge: "badge-dot",
        }}
        sx={{
          "& .MuiBadge-dot": {
            backgroundColor: `${bgColor}`,
          },
        }}
      >
        <div
          className={clsx("containerIcon", visible ? "fade-in" : "fade-out")}
        >
          {icon && typeof currentIcon === "string" ? (
            <img
              src={currentIcon}
              alt={text}
              width={sizeIcon}
              height={sizeIcon}
            />
          ) : (
            currentIcon
          )}
        </div>
      </Badge>
    </IconButton>
  );
};
