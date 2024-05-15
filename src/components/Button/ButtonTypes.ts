export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label?: string;
  color?: string;
  bgColor?: string;
  disabled?: boolean;
  fontFamily?: string;
  fullWidth?: boolean;
  borderColor?: string;
  externalStyles?: string;
  loader?: React.ReactElement;
  variant: "contained" | "outlined" | "text";
}
