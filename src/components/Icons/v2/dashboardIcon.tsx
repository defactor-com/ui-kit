import React from "react";
import { IconsType } from "../IconsTypes";

export interface DashboardIconProps extends IconsType {
  backgroundColor?: string;
  activeIconColor?: string;
}

export const DashboardIcon: React.FC<DashboardIconProps> = ({
  width = 16,
  height = 16,
  color = "#000000",
  backgroundColor = "transparent",
  activeIconColor,
}) => {
  const finalColor = activeIconColor || color;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M5.53998 2.8323H5.53998V2.83459V4.10126C5.53998 4.74406 5.37139 5.15275 5.12143 5.40271C4.87147 5.65267 4.46278 5.82126 3.81998 5.82126H2.55331C1.91051 5.82126 1.50183 5.65267 1.25187 5.40271C1.00191 5.15275 0.833313 4.74406 0.833313 4.10126V2.83459C0.833313 2.1918 1.00189 1.7834 1.25231 1.53354C1.5029 1.2835 1.91326 1.11459 2.55998 1.11459H3.82665C4.46963 1.11459 4.87794 1.28327 5.12686 1.53275C5.37559 1.78203 5.54293 2.18993 5.53998 2.8323Z"
        stroke={finalColor}
        fill={backgroundColor}
        style={{ stroke: finalColor, strokeOpacity: 1 }}
      />
      <path
        d="M10.18 1.11459H11.4466C12.0894 1.11459 12.4981 1.28319 12.7481 1.53315C12.998 1.78311 13.1666 2.19179 13.1666 2.83459V4.10126C13.1666 4.74406 12.998 5.15275 12.7481 5.40271C12.4981 5.65267 12.0894 5.82126 11.4466 5.82126H10.18C9.53716 5.82126 9.12847 5.65267 8.87851 5.40271C8.62855 5.15275 8.45996 4.74406 8.45996 4.10126V2.83459C8.45996 2.19179 8.62855 1.78311 8.87851 1.53315C9.12847 1.28319 9.53716 1.11459 10.18 1.11459Z"
        stroke={finalColor}
        fill={backgroundColor}
        style={{ stroke: finalColor, strokeOpacity: 1 }}
      />
      <path
        d="M10.18 8.73459H11.4466C12.0894 8.73459 12.4981 8.90318 12.7481 9.15314C12.998 9.4031 13.1666 9.81179 13.1666 10.4546V11.7213C13.1666 12.3641 12.998 12.7727 12.7481 13.0227C12.4981 13.2727 12.0894 13.4413 11.4466 13.4413H10.18C9.53716 13.4413 9.12847 13.2727 8.87851 13.0227C8.62855 12.7727 8.45996 12.3641 8.45996 11.7213V10.4546C8.45996 9.81179 8.62855 9.4031 8.87851 9.15314C9.12847 8.90318 9.53716 8.73459 10.18 8.73459Z"
        stroke={finalColor}
        fill={backgroundColor}
        style={{ stroke: finalColor, strokeOpacity: 1 }}
      />
      <path
        d="M5.53998 10.459H5.53998V10.4613V11.7279C5.53998 12.3707 5.37139 12.7794 5.12143 13.0294C4.87147 13.2793 4.46278 13.4479 3.81998 13.4479H2.55331C1.91052 13.4479 1.50212 13.2793 1.25226 13.0289C1.00222 12.7783 0.833313 12.368 0.833313 11.7213V10.4546C0.833313 9.81179 1.00189 9.40339 1.25231 9.15354C1.5029 8.9035 1.91326 8.73459 2.55998 8.73459H3.82665C4.46962 8.73459 4.87765 8.90325 5.12647 9.15319C5.37528 9.4031 5.54294 9.81267 5.53998 10.459Z"
        stroke={finalColor}
        fill={backgroundColor}
        style={{ stroke: finalColor, strokeOpacity: 1 }}
      />
    </svg>
  );
};

export default DashboardIcon;
