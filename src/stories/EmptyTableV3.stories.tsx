import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { EmptyTableV3, EmptyTableProps } from '../components/V3/EmptyTableV3';
import { Box } from '@mui/material';
import { PlusCircle } from '@untitled-ui/icons-react';

export default {
    title: 'V3/EmptyTableV3',
    component: EmptyTableV3,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        showBtn: { control: 'boolean' },
        btnOnClick: { action: 'clicked' },
    },
} as Meta<EmptyTableProps>;

const Template: StoryFn<EmptyTableProps> = (args) => (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <EmptyTableV3 {...args} />
    </Box>
);

export const DefaultEmptyTable = Template.bind({});
DefaultEmptyTable.args = {
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur. Ultrices hendrerit fringilla et rhoncus elit dolor.',
    showBtn: true,
    btnOnClick: () => alert('Button clicked!'),
    btnIcon: <PlusCircle style={{ width: 24, height: 24 }} />,
};
