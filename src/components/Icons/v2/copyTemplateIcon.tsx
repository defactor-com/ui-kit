import React from 'react';
import { IconsType } from "../IconsTypes";

export interface CopyTemplateIconProps extends IconsType {
  backgroundColor?: string;
}

const CopyTemplateIcon: React.FC<CopyTemplateIconProps> = ({
  width = 32,
  height = 32,
  color = '#828D95',
  backgroundColor = 'transparent'
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
  >
    <rect
      x='0.5'
      y='0.5'
      width='31'
      height='31'
      rx='15.5'
      fill={backgroundColor}
      stroke={'#EAECF0'}
    />
    <g clipPath='url(#clip0_2947_22505)'>
      <path
        d='M21.3333 14H15.3333C14.597 14 14 14.597 14 15.3333V21.3333C14 22.0697 14.597 22.6667 15.3333 22.6667H21.3333C22.0697 22.6667 22.6667 22.0697 22.6667 21.3333V15.3333C22.6667 14.597 22.0697 14 21.3333 14Z'
        stroke={color}
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.3333 17.9997H10.6666C10.313 17.9997 9.97382 17.8592 9.72378 17.6092C9.47373 17.3591 9.33325 17.02 9.33325 16.6663V10.6663C9.33325 10.3127 9.47373 9.97358 9.72378 9.72353C9.97382 9.47348 10.313 9.33301 10.6666 9.33301H16.6666C17.0202 9.33301 17.3593 9.47348 17.6094 9.72353C17.8594 9.97358 17.9999 10.3127 17.9999 10.6663V11.333'
        stroke={color}
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_2947_22505'>
        <rect
          width='16'
          height='16'
          fill='white'
          transform='translate(8 8)'
        />
      </clipPath>
    </defs>
  </svg>
);

export default CopyTemplateIcon;
