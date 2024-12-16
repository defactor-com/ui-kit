import { AppDataType } from "../Sidebar/SidebarTypes";

export interface IMenuMobile {
  fontFamily: string;
  marginLeft?: number | string;
  marginRight?: number | string;
  mainApp: AppDataType;
  languageLabel: string;
  appsData?: Array<AppDataType>;
  menuOptions?: React.ReactNode;
  languageSelector: React.ReactNode;
}
