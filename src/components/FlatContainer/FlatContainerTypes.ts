import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export interface IFlatContainer {
  content: React.ReactNode;
  externalStyles?: string;
  sx?: SxProps<Theme>;
}
