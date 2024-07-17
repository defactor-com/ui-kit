import { useTheme } from "@mui/styles";
import { usePathname } from "./PathProvider";
import { useCallback } from "react";
import { Routes } from "./routes";

type RouteType = keyof Routes;

const useSidebarHook = () => {
  const theme = useTheme();
  const pathName = usePathname();

  const isSelected = useCallback(
    (path: string) => {
      return pathName === path;
    },
    [pathName]
  );

  const routeType: RouteType = "mainRoutes";

  return { theme, routeType, isSelected };
};

export default useSidebarHook;
