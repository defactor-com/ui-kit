import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type IconsType = {
    color?: string;
    width?: number;
    stroke?: string;
    height?: number;
    colorEllipseOne?: string;
    colorEllipseTwo?: string;
    colorEllipseFour?: string;
    colorEllipseThree?: string;
};

export type Route = {
    text: string;
    path: string;
    icon: React.ElementType;
    navLinkTextColor?: string;
    iconsColor?: string;
};

export type AppData = {
    logo: {
        src: string | StaticImport;
        height: number;
        width: number;
    };
    url: string;
};
