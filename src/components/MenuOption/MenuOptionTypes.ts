export interface IMenuOption extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: string;
  fontFamily?: string;
  isSelected: Boolean;
  icon?: string | React.ReactNode;
}
