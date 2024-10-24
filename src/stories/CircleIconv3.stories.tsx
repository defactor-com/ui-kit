import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from '@mui/material';
import { CircleIconV3 } from "../components/V3/CircleIconV3";
import { CoinsStacked01 } from "@untitled-ui/icons-react";

export default {
    title: "V3/CircleIconV3",
    component: CircleIconV3,
} as Meta;

const Template: Story = (args) => (
    <Box
        display="flex"
        width={'100%'}
        alignItems="center"
        justifyContent="center"
        padding={6}
        sx={{ backgroundColor: "white" }}
    >
        <CircleIconV3 {...args} />
    </Box>
);

export const BasicCircleIcon = Template.bind({});
BasicCircleIcon.args = {
    backgroundColor: "#EFEFFD",
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    icon: <CoinsStacked01 style={{ width: '40px', height: '40px', color: '#5A5BEB' }} />,
};
