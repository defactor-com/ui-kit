export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  color?: string;
  bgColor?: string;
  disabled?: boolean;
  fontFamily?: string;
  fullWidth?: boolean;
  borderColor?: string;
  externalStyles?: string;
  loader?: React.ReactElement;
  icon?: React.ReactElement | string;
  variant: "contained" | "outlined" | "text";
}
