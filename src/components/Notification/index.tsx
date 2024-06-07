import React from "react";
import { Badge, IconButton } from "@mui/material";

import InfoIcon from "../../../public/assets/info-icon.svg";

import { useNotification } from "./useNotificationState";

import { INotification } from "./NotificationTypes";

export const Notification: React.FC<INotification> = ({
  icon = InfoIcon,
  sizeIcon = 26,
  color = "white",
  bgColor = "#26a66b",
  text,
  position = "top",
  fontFamily,
  open = false,
  isOpen,
  handleChange,
}) => {
  const { getTooltipStyle, getArrowStyle } = useNotification();

  return (
    <IconButton>
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
        {icon && typeof icon === "string" ? (
          <img src={icon} alt={text} width={sizeIcon} height={sizeIcon} />
        ) : (
          icon
        )}
      </Badge>
    </IconButton>
  );
};
