import clsx from "clsx";
import React from "react";

export interface IMenuOption extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: string;
  color?: string;
  fontFamily?: string;
  isSelected: Boolean;
}

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
      {icon && <img src={icon} alt={text} className="menu-option-icon" />}
      {text}
    </button>
  )
);
