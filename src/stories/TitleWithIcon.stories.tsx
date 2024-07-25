import React from "react";
import { Story, Meta } from "@storybook/react";
import { TitleWithIcon, TitleWithIconProps } from "../components/TitleWithIcon";
import GlobalIcon from "../components/Icons/v2/globalIcon";

export default {
    title: "V2/TitleWithIcon",
    component: TitleWithIcon,
    argTypes: {
        color: { control: "color" },
        colorIcon: { control: "color" },
    },
} as Meta;

const Template: Story<TitleWithIconProps> = (args) => (
    <TitleWithIcon {...args} />
);

export const ActiveTitleWithIcon = Template.bind({});
ActiveTitleWithIcon.args = {
    label: "Global Stats",
    image: GlobalIcon,
};

export const InactiveTitleWithIcon = Template.bind({});
InactiveTitleWithIcon.args = {
    label: "Global Stats",
    color: "#7c7c7e",
    colorIcon: "#7c7c7e",
    image: GlobalIcon,
};
