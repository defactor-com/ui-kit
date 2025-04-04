import { IconsType } from "./types";
import React from "react";

const BuyBackIcon: React.FC<IconsType> = ({
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
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke={color === '#fff' ? '#211F23' : color}
      d='M18.453 10.893C18.1752 13.5029 16.6964 15.9487 14.2494 17.3614C10.1839 19.7086 4.98539 18.3157 2.63818 14.2502L2.38818 13.8172M1.54613 9.10701C1.82393 6.49711 3.30272 4.05138 5.74971 2.63862C9.8152 0.291406 15.0137 1.68434 17.3609 5.74983L17.6109 6.18285M1.49316 16.0661L2.22521 13.334L4.95727 14.0661M15.0424 5.93401L17.7744 6.66606L18.5065 3.93401'
    />
  </svg>
)
export default BuyBackIcon
