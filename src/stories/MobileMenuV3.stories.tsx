import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileMenuV3 } from '../components/V3/MobileMenuV3';
import { demoAppsData } from '../components/V3/MobileMenuV3/demoAppsData';
import { Box, IconButton } from '@mui/material';
import { Menu01 } from '@untitled-ui/icons-react';

export default {
  title: 'V3/MobileMenuV3',
  component: MobileMenuV3,
  argTypes: {
    open: { control: 'boolean' },
  },
} as ComponentMeta<typeof MobileMenuV3>;

const Template: ComponentStory<typeof MobileMenuV3> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <Menu01 />
      </IconButton>
      <MobileMenuV3
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        appsData={demoAppsData}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  navLinkTextColor: '#000000',
  iconsColor: '#000000',
  activeTextColor: '#ffffff',
  activeIconColor: '#1976d2',
  notificationColor: '#d32f2f',
  notificationsCount: 5,
  hideOnBreakpoint: 'md',
  defaultPath: '/',
  selectedBgColor: '#f0f0f0',
  mt: 0,
};
