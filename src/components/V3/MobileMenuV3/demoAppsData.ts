import { AppData } from "./icons/types";

import assetsIcon from "../../../../public/assets/asset-logo.svg";
import poolsIcon from "../../../../public/assets/pools-logo.svg";

export const demoAppsData: AppData[] = [
    {
        logo: { src: poolsIcon, height: 21, width: 53 },
        url: "https://pools-dev.defactor.dev/",
    },
    {
        logo: { src: assetsIcon, height: 21, width: 74 },
        url: "https://assets.defactor.dev/",
    },
];

export const ROLES = { admin: "user-admin" };
export const userContext = {
    role: "user-admin",
};