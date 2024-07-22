import React from "react";
import { IconsType } from "../IconsTypes";

export interface PlusIconProps extends IconsType {
    backgroundColor?: string;
}

export const PlusIcon: React.FC<PlusIconProps> = ({
    width = 40,
    height = 40,
    color = "white",
    backgroundColor = "#5F66FF",
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
            d="M20 13V27"
            stroke={color}
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M13 20H27"
            stroke={color}
            strokeOpacity="0.9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default PlusIcon;
