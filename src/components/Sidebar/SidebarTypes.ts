import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

export type AppDataType = {
  logo: {
    width: number;
    height: number;
    src: string | StaticImport;
  };
  url?: string;
};
export interface ISidebar {
  mainApp: AppDataType;
  externalStyles?: string;
  appsData: Array<AppDataType>;
  menuOptions?: React.ReactNode;
  optionalStyles?: React.CSSProperties;
}
