import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PercentageCircleV3, PercentageCircleProps } from '../components/V3/PercentageCircleV3';
import { EthFactrIcon } from '../components/V3/PercentageCircleV3/EthFactrIcon';

export default {
    title: 'V3/PercentageCircleV3',
    component: PercentageCircleV3,
} as Meta;

const Template: Story<PercentageCircleProps> = (args) => <PercentageCircleV3 {...args} />;

export const Default = Template.bind({});
Default.args = {
    percentage: '75',
    icon: <EthFactrIcon width={49} height={49} />,
};


