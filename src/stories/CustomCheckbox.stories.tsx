import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomCheckBox, CustomCheckBoxProps } from "../components/CustomCheckbox";

export default {
    title: 'V2/CustomCheckBox',
    component: CustomCheckBox,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        checkState: { control: 'boolean' },
        completedState: { control: 'boolean' },
        handleChange: { action: 'changed' },
    } as Partial<Record<keyof CustomCheckBoxProps, any>>,
} as Meta;

const Template: Story<CustomCheckBoxProps> = (args) => <CustomCheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    checkState: true,
    completedState: false,
};
