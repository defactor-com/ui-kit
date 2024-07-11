import React from 'react';
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import useSidebarHook from './useSidebarHook';
import MainMenuItem from './MenuItem';

export type Route = {
  text: string;
  path: string;
  icon: React.ElementType;
  navLinkTextColor?: string;
  iconsColor?: string;
};

export type MainSidebarProps = {
  routes: Route[];
  mainSidebarBgColor?: string;
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
  notificationColor?: string;
  notificationsCount?: number;
  hideOnBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const MainSidebar: React.FC<MainSidebarProps> = (props) => {
  const theme = useTheme();

  const {
    routes,
    mainSidebarBgColor = '#ffffff', // Temporarily until the designer updates the palette (theme.palette.primary.light)
    navLinkTextColor = '#000000', // Temporarily until the designer updates the palette (theme.palette.text.primary)
    iconsColor = theme.palette.text.primary, // Temporarily until the designer updates the palette
    activeTextColor = theme.palette.secondary.main, // Temporarily until the designer updates the palette
    activeIconColor = theme.palette.secondary.main, // Temporarily until the designer updates the palette
    notificationColor = '#D21A4D', // Temporarily until the designer updates the palette
    notificationsCount = 0,
    hideOnBreakpoint = 'sm',
  } = props;

  const { isSelected } = useSidebarHook();
  const isHidden = useMediaQuery(theme.breakpoints.down(hideOnBreakpoint));

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
          backgroundColor: mainSidebarBgColor,
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
            notificationsCount={route.path === '/notifications' ? notificationsCount : 0}
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
