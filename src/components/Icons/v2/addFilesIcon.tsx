import React from "react";
import { IconsType } from "../IconsTypes";

export interface AddFilesIconProps extends IconsType {
  backgroundColor?: string;
}

export const AddFilesIcon: React.FC<AddFilesIconProps> = ({
  width = 48,
  height = 48,
  color = "#9CA3AF",
  backgroundColor = "transparent",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.5 8H12.5C11.4391 8 10.4217 8.42143 9.67157 9.17157C8.92143 9.92172 8.5 10.9391 8.5 12V32M8.5 32V36C8.5 37.0609 8.92143 38.0783 9.67157 38.8284C10.4217 39.5786 11.4391 40 12.5 40H36.5C37.5609 40 38.5783 39.5786 39.3284 38.8284C40.0786 38.0783 40.5 37.0609 40.5 36V28M8.5 32L17.672 22.828C18.4221 22.0781 19.4393 21.6569 20.5 21.6569C21.5607 21.6569 22.5779 22.0781 23.328 22.828L28.5 28M40.5 20V28M40.5 28L37.328 24.828C36.5779 24.0781 35.5607 23.6569 34.5 23.6569C33.4393 23.6569 32.4221 24.0781 31.672 24.828L28.5 28M28.5 28L32.5 32M36.5 8H44.5M40.5 4V12M28.5 16H28.52"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={backgroundColor}
    />
  </svg>
);

export default AddFilesIcon;
