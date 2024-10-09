import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from '@mui/material';
import CircleIcon from "../components/V3/CircleIcon";
import { CoinsStacked01 } from "@untitled-ui/icons-react";

export default {
    title: "V3/CircleIcon",
    component: CircleIcon,
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
        <CircleIcon {...args} />
    </Box>
);

export const BasicCircleIcon = Template.bind({});
BasicCircleIcon.args = {
    backgroundColor: "#EFEFFD",
    icon: <CoinsStacked01 style={{ width: 40, height: 40, color: '#5A5BEB' }} />,
};
