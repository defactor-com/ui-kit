import { IconsType } from "./types";
import React from "react";

const VestingIcon: React.FC<IconsType> = ({
  color,
  width = 24,
  height = 24
}) => (
  <svg
    fill='none'
    width={width}
    height={height}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke={color === '#fff' ? '#211F23' : color}
      d='M19 19H2.6C2.03995 19 1.75992 19 1.54601 18.891C1.35785 18.7951 1.20487 18.6422 1.10899 18.454C1 18.2401 1 17.9601 1 17.4V1M18 6L14.0811 10.1827C13.9326 10.3412 13.8584 10.4204 13.7688 10.4614C13.6897 10.4976 13.6026 10.5125 13.516 10.5047C13.4179 10.4958 13.3215 10.4458 13.1287 10.3457L9.87132 8.65433C9.67854 8.55423 9.58215 8.50418 9.48404 8.49534C9.39744 8.48753 9.31031 8.50245 9.23124 8.5386C9.14165 8.57957 9.06739 8.65883 8.91887 8.81734L5 13'
    />
  </svg>
)

export default VestingIcon
