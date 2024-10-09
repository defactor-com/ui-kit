import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EmptyTable } from '../components/V3/EmptyTable';
import { Box } from '@mui/material';

export default {
    title: 'V3/EmptyTable',
    component: EmptyTable,
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
    },
} as Meta;

const Template: Story = (args) => (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <EmptyTable {...args} />
    </Box>
);

export const DefaultEmptyTable = Template.bind({});
DefaultEmptyTable.args = {
    title: 'No assets to display Test',
    description: 'You can create a new asset from existing community templates or by creating your own template first. Test',
};
