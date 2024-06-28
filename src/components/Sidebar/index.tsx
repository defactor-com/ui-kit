import clsx from "clsx";
import React from "react";

import { ISidebar } from "./SidebarTypes";

export const Sidebar = ({
  menuOptions,
  externalStyles,
  optionalStyles,
}: ISidebar) => (
  <div className="sidebar-mobile">
    <div
      className={clsx(externalStyles, "sidebar-container")}
      style={{ ...optionalStyles }}
    >
      <div className="sidebar-options-container">{menuOptions}</div>
    </div>
  </div>
);
