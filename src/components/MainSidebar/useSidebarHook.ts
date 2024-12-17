import { useTheme } from "@mui/styles";
import { usePathname } from "./PathProvider";
import { useCallback } from "react";

const useSidebarHook = () => {
  const theme = useTheme();
  const pathName = usePathname();

  const isSelected = useCallback(
    (path: string) => {
      return pathName === path;
    },
    [pathName]
  );

  return { theme, isSelected };
};

export default useSidebarHook;
