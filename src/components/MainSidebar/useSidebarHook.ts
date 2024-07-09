import { useTheme } from '@mui/styles';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { Routes } from './routes';

type RouteType = keyof Routes;

const useSidebarHook = () => {
  const theme = useTheme();
  const pathName = usePathname();

  const isSelected = useCallback(
    (path: string) => pathName === path,
    [pathName]
  );

  const routeType: RouteType = 'mainRoutes';

  return { theme, routeType, isSelected };
};

export default useSidebarHook;
