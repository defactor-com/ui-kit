import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileMenuV3 } from '../components/V3/MobileMenuV3';
import { demoAppsData } from '../components/V3/MobileMenuV3/demoAppsData';
import { Box, IconButton } from '@mui/material';
import { Menu01, XClose } from '@untitled-ui/icons-react';

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
      <IconButton onClick={() => setOpen(!open)}>
        {!open ? <Menu01 /> : <XClose />}
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
  mt: 0,
};
