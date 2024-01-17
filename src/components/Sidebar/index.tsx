import clsx from "clsx";
import React from "react";

export interface ISidebar {
  externalStyles?: string;
  menuOptions?: React.ReactNode;
}

export const Sidebar = ({ menuOptions, externalStyles }: ISidebar) => (
  <div className="sidebar-mobile">
    <div className={clsx(externalStyles,"sidebar-container")}>
      <div className="sidebar-options-container">{menuOptions}</div>
    </div>
  </div>
);
