import React from "react";
import { IconsType } from "../IconsTypes";

export interface EthFactrIconProps extends IconsType {
    backgroundColor?: string;
}

export const EthFactrIcon: React.FC<EthFactrIconProps> = ({
    width = 40,
    height = 40,
    color = "#151515",
    backgroundColor = "#F8F9FC",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            width="40"
            height="40"
            rx="8"
            fill={backgroundColor}
        />
        <path
            d="M27.5 22.25V19.625C27.5 18.7299 27.1444 17.8715 26.5115 17.2385C25.8786 16.6056 25.0201 16.25 24.125 16.25H22.625C22.3266 16.25 22.0405 16.1315 21.8295 15.9205C21.6185 15.7095 21.5 15.4234 21.5 15.125V13.625C21.5 12.7299 21.1444 11.8714 20.5115 11.2385C19.8785 10.6056 19.0201 10.25 18.125 10.25H16.25M16.25 23H23.75M16.25 26H20M18.5 10.25H13.625C13.004 10.25 12.5 10.754 12.5 11.375V28.625C12.5 29.246 13.004 29.75 13.625 29.75H26.375C26.996 29.75 27.5 29.246 27.5 28.625V19.25C27.5 16.8631 26.5518 14.5739 24.864 12.886C23.1761 11.1982 20.8869 10.25 18.5 10.25Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default EthFactrIcon;
