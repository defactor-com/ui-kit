import React from 'react';
import { Box, Drawer } from '@mui/material';
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
};

const MainSidebar: React.FC<MainSidebarProps> = ({ routes, navLinkTextColor, iconsColor }) => {
  const { theme, isSelected } = useSidebarHook();
  const notificationsCount = 5; // TODO: Replace with actual logic to get the count

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
            notificationsCount={route.path === '/notifications' ? notificationsCount : 0}
            navLinkTextColor={navLinkTextColor}
            iconsColor={iconsColor}
          />
        ))}
      </Box>
    </Drawer>
  );
};

export default MainSidebar;
