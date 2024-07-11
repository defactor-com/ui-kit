import React from "react";
import { IconsType } from "../IconsTypes";

export interface ContactsIconProps extends IconsType {
  backgroundColor?: string;
}

export const ContactsIcon: React.FC<ContactsIconProps> = ({
  width = 16,
  height = 16,
  color = '#000000',
  backgroundColor = 'transparent'
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2.66699 13.2799C2.66699 12.8379 2.84259 12.414 3.15515 12.1014C3.46771 11.7889 3.89163 11.6133 4.33366 11.6133H13.3337'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.33366 1.61328H13.3337V14.9466H4.33366C3.89163 14.9466 3.46771 14.771 3.15515 14.4585C2.84259 14.1459 2.66699 13.722 2.66699 13.2799V3.27995C2.66699 2.83792 2.84259 2.414 3.15515 2.10144C3.46771 1.78888 3.89163 1.61328 4.33366 1.61328Z'
      stroke={color}
      fill={backgroundColor}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ContactsIcon;
