import React from "react";

export interface IMenuOption extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: string;
  color?: string;
  isSelected: Boolean;
}

export const MenuOption: React.FC<IMenuOption> = ({
  icon,
  text,
  color,
  isSelected,
  ...props
}) => (
  <button
    className={!isSelected ? "menu-option" : "menu-option selected"}
    style={{ borderRight: isSelected ? `2px solid ${color}` : "none" }}
    {...props}
  >
    {icon && <img src={icon} alt={text} className="menu-option-icon" />}
    {text}
  </button>
);
