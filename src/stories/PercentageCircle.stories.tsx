import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PercentageCircle, PercentageCircleProps } from '../components/V3/PercentageCircle';
import { EthFactrIcon } from '../components/V3/PercentageCircle/EthFactrIcon';

export default {
    title: 'V3/PercentageCircle',
    component: PercentageCircle,
} as Meta;

const Template: Story<PercentageCircleProps> = (args) => <PercentageCircle {...args} />;

export const Default = Template.bind({});
Default.args = {
    percentage: '75',
    icon: <EthFactrIcon width={49} height={49} />,
};


