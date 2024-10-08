import React from "react";
import { IconsType } from "../IconsTypes";

export interface EthFactrIconProps extends IconsType {
    backgroundColor?: string;
}

export const EthFactrIcon: React.FC<EthFactrIconProps> = ({
    width = 62,
    height = 61,
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 62 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_5462_9238)">
            {/* Remove the circular path here */}
            {/* Keep the rest of the icon paths as they are */}
            <g opacity="0.6">
                <path
                    d="M29.9775 26.3672L19.6826 30.7794L29.9775 36.5112L40.2683 30.7794L29.9775 26.3672Z"
                    fill="white"
                />
            </g>
            <g opacity="0.45">
                <path
                    d="M19.6826 30.7786L29.9775 36.5103V14.6816L19.6826 30.7786Z"
                    fill="white"
                />
            </g>
            <g opacity="0.8">
                <path
                    d="M29.981 14.6816V36.5103L40.2718 30.7786L29.981 14.6816Z"
                    fill="white"
                />
            </g>
            <g opacity="0.45">
                <path
                    d="M19.6826 32.6152L29.9775 46.2829V38.3469L19.6826 32.6152Z"
                    fill="white"
                />
            </g>
            <g opacity="0.8">
                <path
                    d="M29.981 38.3469V46.2829L40.2799 32.6152L29.981 38.3469Z"
                    fill="white"
                />
            </g>
            <path
                d="M54.7194 30.4907C54.7194 17.2885 44.0168 6.58588 30.8145 6.58588C17.6122 6.58588 6.90967 17.2885 6.90967 30.4907C6.90967 43.693 17.6122 54.3956 30.8145 54.3956C44.0168 54.3956 54.7194 43.693 54.7194 30.4907Z"
                stroke="white"
                strokeWidth="0.620906"
            />
        </g>
        <defs>
            <clipPath id="clip0_5462_9238">
                <rect
                    width="49.0515"
                    height="49.0515"
                    fill="white"
                    transform="translate(6.28857 5.66016)"
                />
            </clipPath>
        </defs>
    </svg>
);

export default EthFactrIcon;
