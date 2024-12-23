import { IconsType } from "./types";
import React from "react";

const GovernanceIcon: React.FC<IconsType> = ({
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
      d='M1 20H19M4 17V8.99998M8 17V8.99998M12 17V8.99998M16 17V8.99998M18 5.99998L10.424 1.26498C10.2702 1.16884 10.1933 1.12077 10.1108 1.10203C10.0379 1.08546 9.96214 1.08546 9.88921 1.10203C9.80673 1.12077 9.72982 1.16884 9.576 1.26498L2 5.99998H18Z'
    />
  </svg>
)
export default GovernanceIcon
