import React from "react";

import { IconsType } from "./IconsTypes";

const AdmirationIcon: React.FC<IconsType> = ({
  width = 32,
  height = 32,
  color = "#26A66B",
}) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.334 31.667v-3.334h16.667v3.334zm0-8.334V20h8.333v3.333zm0-8.333v-3.333h8.333V15zm31 16.667-6.417-6.417a7.4 7.4 0 0 1-2.187 1.063 8.3 8.3 0 0 1-2.396.354q-3.458 0-5.896-2.438-2.437-2.437-2.437-5.896 0-3.457 2.437-5.895T23.334 10t5.896 2.438q2.437 2.437 2.437 5.895 0 1.21-.354 2.396a7.4 7.4 0 0 1-1.062 2.188l6.416 6.416zm-11-8.334q2.084 0 3.542-1.458t1.458-3.542-1.458-3.541q-1.459-1.46-3.542-1.459-2.084 0-3.542 1.459-1.458 1.458-1.458 3.541t1.458 3.542 3.542 1.458"
      fill={color}
    />
  </svg>
);
export default AdmirationIcon;
