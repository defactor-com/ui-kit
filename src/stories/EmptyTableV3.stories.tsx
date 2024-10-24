import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EmptyTableV3 } from '../components/V3/EmptyTableV3';
import { Box } from '@mui/material';

export default {
    title: 'V3/EmptyTableV3',
    component: EmptyTableV3,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
    },
} as Meta;

const Template: Story = (args) => (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <EmptyTableV3 {...args} />
    </Box>
);

export const DefaultEmptyTable = Template.bind({});
DefaultEmptyTable.args = {
    // title: 'Lorem ipsum dolor sit amet consectetur',
    // description: 'Lorem ipsum dolor sit amet consectetur. Ultrices hendrerit fringilla et rhoncus elit dolor.',
};