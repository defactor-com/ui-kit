import clsx from "clsx";
import React from "react";

import { IMenuOption } from "./MenuOptionTypes";

export const MenuOption: React.FC<IMenuOption> = React.memo(
  ({ icon, text, color, isSelected, fontFamily, ...props }: IMenuOption) => (
    <button
      className={clsx("menu-option", { selected: isSelected })}
      style={{
        borderRight: isSelected ? `2px solid ${color}` : "none",
        color: window.innerWidth < 912 && isSelected ? color : "",
        fontFamily: fontFamily,
      }}
      {...props}
    >
      {icon && typeof icon === "string" ? (
        <img src={icon} alt={text} className="menu-option-icon" />
      ) : (
        icon
      )}
      {text}
    </button>
  )
);
