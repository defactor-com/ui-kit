import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BadgeV3, BadgeProps } from '../components/V3/BadgeV3';
import { EthFactrIcon } from '../components/V3/PercentageCircleV3/EthFactrIcon';

export default {
    title: 'V3/BadgeV3',
    component: BadgeV3,
} as Meta;

const Template: Story<BadgeProps> = (args) => <BadgeV3 {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: <EthFactrIcon width={49} height={49} />,
    name: 'Ethereum',
    percentage: '68.41%',
    background: '#ffffff',
};

