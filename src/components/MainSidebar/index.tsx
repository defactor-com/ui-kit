import React from 'react';
import { Drawer, List, ListItemButton, ListItemText, Divider, useTheme } from '@mui/material';

const MainSidebar: React.FC = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      }}
    >
      <List>
        <ListItemButton sx={{ color: theme.palette.primary.main }}>
          <ListItemText primary="Home" />
        </ListItemButton>
        <Divider />
        <ListItemButton sx={{ color: theme.palette.primary.main }}>
          <ListItemText primary="About" />
        </ListItemButton>
        <Divider />
        <ListItemButton sx={{ color: theme.palette.primary.main }}>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default MainSidebar;
