import clsx from "clsx";
import React from "react";

export interface IMenuOption extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: string;
  color?: string;
  isSelected: Boolean;
}

export const MenuOption: React.FC<IMenuOption> = React.memo(
  ({ icon, text, color, isSelected, ...props }: IMenuOption) => (
    <button
      className={clsx("menu-option", { selected: isSelected })}
      style={{ borderRight: isSelected ? `2px solid ${color}` : "none" }}
      {...props}
    >
      {icon && <img src={icon} alt={text} className="menu-option-icon" />}
      {text}
    </button>
  )
);
