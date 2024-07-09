import React from 'react';
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import useSidebarHook from './useSidebarHook';
import MainMenuItem from './MenuItem';

type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
  navLinkTextColor?: string;
  iconsColor?: string;
};

type MainSidebarProps = {
  routes: Route[];
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
  notificationColor?: string;
  notificationsCount?: number;
  hideOnBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; 
};

export const MainSidebar: React.FC<MainSidebarProps> = ({ routes, navLinkTextColor, iconsColor, activeTextColor, activeIconColor, notificationColor, notificationsCount, hideOnBreakpoint = 'sm' }) => {
  const theme = useTheme(); 
  console.log('MainSidebar Theme:', theme); 

  const { isSelected } = useSidebarHook();
  const defaultNotificationsCount = 0; 
  const isHidden = useMediaQuery(theme.breakpoints.down(hideOnBreakpoint)); // Ensure theme has breakpoints

  if (isHidden) {
    return null; 
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: '180px',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: '180px',
          boxSizing: 'border-box',
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      {/* Box to align with Appbar */}
      <Box sx={{ height: 60 }} />
      <Box
        sx={{
          overflow: 'auto',
          color: theme.palette.primary.main,
        }}
      >
        {routes.map((route, index) => (
          <MainMenuItem
            icon={route.icon}
            key={index}
            text={route.text}
            path={route.path}
            isSelected={isSelected(route.path)}
            notificationsCount={route.path === '/notifications' ? notificationsCount ?? defaultNotificationsCount : 0}
            navLinkTextColor={navLinkTextColor}
            iconsColor={iconsColor}
            activeTextColor={activeTextColor}
            activeIconColor={activeIconColor}
            notificationColor={notificationColor}
          />
        ))}
      </Box>
    </Drawer>
  );
};

