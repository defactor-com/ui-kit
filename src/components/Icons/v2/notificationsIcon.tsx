import React from "react";
import { IconsType } from "../IconsTypes";

export interface NotificationsIconProps extends IconsType {
  backgroundColor?: string;
}

export const NotificationsIcon: React.FC<NotificationsIconProps> = ({
  width = 16,
  height = 16,
  color = "#000000",
  backgroundColor = "transparent",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5.61328C12 4.55242 11.5786 3.535 10.8284 2.78485C10.0783 2.03471 9.06087 1.61328 8 1.61328C6.93913 1.61328 5.92172 2.03471 5.17157 2.78485C4.42143 3.535 4 4.55242 4 5.61328C4 10.2799 2 11.6133 2 11.6133H14C14 11.6133 12 10.2799 12 5.61328Z"
      stroke={color}
      fill={backgroundColor}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.15335 14.2812C9.03614 14.4833 8.86791 14.651 8.6655 14.7676C8.46309 14.8842 8.2336 14.9456 8.00001 14.9456C7.76643 14.9456 7.53694 14.8842 7.33453 14.7676C7.13212 14.651 6.96389 14.4833 6.84668 14.2812"
      stroke={color}
      fill={backgroundColor}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NotificationsIcon;
