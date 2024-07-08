import React from 'react';
import { Box, Drawer, useTheme } from '@mui/material';
import useSidebarHook from './useSidebarHook';
import routes from './routes';
import MainMenuItem from './MenuItem';

const MainSidebar: React.FC = () => {
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
        {routes.mainRoutes.map((route, index) => (
          <MainMenuItem
            icon={route.icon}
            key={index}
            text={route.text}
            path={route.path}
            isSelected={isSelected(route.path)}
            notificationsCount={route.path === '/notifications' ? notificationsCount : 0}
          />
        ))}
      </Box>
    </Drawer>
  );
};

export default MainSidebar;
