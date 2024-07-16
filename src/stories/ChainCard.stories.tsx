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
    title: "Ethereum (ERC-20)",
    description: "Lorem ipsum dolor sit amet consectetur. Faucibus adipiscing phasellus.",
    mainBenefits: ["Lorem ipsum dolor sit amet consectetur. ", "Amet consectetur faucibus adipiscing.", "Faucibus adipiscing phasellus."],
    customIcon: <DocIcon />,
    onClick: () => console.log('Card clicked'),
};

export const Selected = Template.bind({});
Selected.args = {
    ...Default.args,
    selected: true
};
