import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChainCard, ChainCardProps } from '../components/ChainCard';
import DocIcon from '../components/Icons/v2/docIcon';

export default {
    title: 'V2/Cards/ChainCard',
    component: ChainCard,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        mainBenefits: { control: 'array' },
        customIcon: { control: 'none' },
        selected: { control: 'boolean' },
        onClick: { action: 'clicked' }
    }
} as Meta<ChainCardProps>;

const Template: Story<ChainCardProps> = (args) => <ChainCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Enter Your Title",
    description: "Enter your description here.",
    mainBenefits: ["Benefit One", "Benefit Two", "Benefit Three"],
    customIcon: <DocIcon />,
    onClick: () => console.log('Card clicked'),
};

export const Selected = Template.bind({});
Selected.args = {
    ...Default.args,
    selected: true
};
