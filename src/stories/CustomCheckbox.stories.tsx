import React from "react";
import { Meta, Story } from "@storybook/react";
import { CustomCheckBox, CustomCheckBoxProps } from "../components/CustomCheckbox/index"

const meta: Meta<CustomCheckBoxProps> = {
    title: "V2/FormElements/CustomCheckBox",
    component: CustomCheckBox,
    parameters: {
        layout: "padded",
    },
    argTypes: {
        checkState: { control: "boolean" },
        completedState: { control: "boolean" },
        handleChange: { action: "changed" },
    } as Partial<Record<keyof CustomCheckBoxProps, any>>,
};

export default meta;

const Template: Story<CustomCheckBoxProps> = (args) => <CustomCheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkState: true,
    completedState: false,
};
