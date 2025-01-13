import { Route, AppData } from "../../MainSidebar/icons/types";

export interface IMenuMobileV3 {
  fontFamily: string;
  marginLeft?: number | string;
  marginRight?: number | string;
  languageLabel: string;
  menuOptions?: React.ReactNode;
  languageSelector: React.ReactNode;
  mainApp?: AppData;
  appsData?: AppData[];
  mainSidebarBgColor?: string;
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
  activeBorderColor?: string;
  notificationColor?: string;
  notificationsCount?: number;
  hideOnBreakpoint?: "xs" | "sm" | "md" | "lg" | "xl";
  defaultPath?: string;
  routes?: Route[];
  mt?: number | string;
  selectedBgColor?: string;
  roles?: Record<string, string>;
  userContext?: { role: string };
  onClick?: (path: string) => void;
  connectWalletBtn?: any;
}
