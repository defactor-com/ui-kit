import React from "react";

export interface ISidebar {
  menuOptions?: React.ReactNode;
}

export const Sidebar: React.FC<ISidebar> = ({
  menuOptions
}) => {
  return (
    <div className="sidebar-mobile">
      <div className="sidebar-container">
        <div className="sidebar-options-container">{menuOptions}</div>
      </div>
    </div>
  );
};
