import React from 'react';
import { Box, Drawer, useTheme } from '@mui/material';
import routes from './routes';
import MainMenuItem from './MenuItem';

const MainSidebar: React.FC = () => {
  const theme = useTheme();

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
      {/* box to align with Appbar */}
      <Box sx={{ height: 60 }} />
      <Box
        sx={{
          overflow: 'auto',
          color: theme.palette.primary.main,
        }}
      >
        {routes.mainRoutes.map((route, index) => (
          <MainMenuItem
            icon='sth' // Replace with icon
            key={index}
            text={route.text}
            path={route.path}
            isSelected={route.isSelected} // Pass the correct isSelected value
            textColor={theme.palette.text.secondary} 
          />
        ))}
      </Box>
    </Drawer>
  );
};

export default MainSidebar;
