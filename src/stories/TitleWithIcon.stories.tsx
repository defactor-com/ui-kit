import React from 'react';
import { Story, Meta } from '@storybook/react';
import TitleWithIcon, { TitleWithIconProps } from '../components/TitleWithIcon';
import GlobalIcon from '../components/Icons/v2/globalIcon';

export default {
    title: 'V2/TitleWithIcon',
    component: TitleWithIcon,
    argTypes: {
        color: { control: 'color' },
        colorIcon: { control: 'color' },
    },
} as Meta;

const Template: Story<TitleWithIconProps> = (args) => <TitleWithIcon {...args} />;

export const ActiveTab = Template.bind({});
ActiveTab.args = {
    label: 'Global Stats',
    color: '#000000', //Temporarily until the designer updates the palette
    colorIcon: '#000000', //Temporarily until the designer updates the palette
    image: GlobalIcon,
};

export const UnselectedTab = Template.bind({});
UnselectedTab.args = {
    label: 'Global Stats',
    color: '#7c7c7e', //Temporarily until the designer updates the palette
    colorIcon: '#7c7c7e', //Temporarily until the designer updates the palette
    image: GlobalIcon,
};