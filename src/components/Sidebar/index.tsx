import React from "react";

export interface ISidebar {
  menuOptions?: React.ReactNode;
}

export const Sidebar = ({ menuOptions }: ISidebar) => (
  <div className="sidebar-mobile">
    <div className="sidebar-container">
      <div className="sidebar-options-container">{menuOptions}</div>
    </div>
  </div>
);
