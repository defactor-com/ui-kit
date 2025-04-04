import React from "react";
import { IconsType } from "../IconsTypes";

interface DiamondIconProps extends IconsType {
    backgroundColor?: string;
}

const DiamondIcon: React.FC<DiamondIconProps> = ({
    width = 32,
    height = 33,
    color = "black",
    backgroundColor = "#ECF1F5",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.000976562"
            y="0.802734"
            width="32"
            height="32"
            rx="16"
            fill={backgroundColor}
        />
        <path
            d="M15.6377 25.6274L7.14357 16.3631C6.98146 16.1876 6.95806 15.9198 7.07087 15.7163L9.95218 10.0995C9.99563 10.0036 10.0667 9.92124 10.1603 9.86696C10.2338 9.82354 10.314 9.80364 10.3917 9.80364V9.80273H21.61C21.8097 9.80273 21.981 9.93119 22.0579 10.1157L24.9392 15.7317C25.0478 15.9424 25.0085 16.1993 24.8581 16.3622L16.3648 25.6265C16.2395 25.7775 16.0389 25.8436 15.8492 25.7766C15.7648 25.7468 15.6921 25.6943 15.637 25.6274L15.6377 25.6274ZM19.1606 16.5197L17.1091 23.3107L23.3353 16.5197H19.1606ZM14.8939 23.3107L12.8425 16.5197H8.66759L14.8939 23.3107ZM13.8728 16.5197L16.0012 23.5649L18.1295 16.5197H13.8728ZM21.6183 11.4392L19.6253 15.4567H23.6797L21.6174 11.4392H21.6183ZM17.9865 15.4567L16.0019 11.4547L14.0173 15.4567H17.9875H17.9865ZM12.3769 15.4567L10.3839 11.4392L8.32155 15.4567H12.3769ZM11.2112 10.864L13.1958 14.866L15.1804 10.864H11.2102H11.2112ZM16.82 10.864L18.8046 14.866L20.7892 10.864H16.819H16.82Z"
            fill={color}
        />
    </svg>
);

export default DiamondIcon;
