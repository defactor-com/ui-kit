import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainSidebar from '../components/MainSidebar';

export default {
  title: 'V2/MainSidebar',
  component: MainSidebar,
} as ComponentMeta<typeof MainSidebar>;

const Template: ComponentStory<typeof MainSidebar> = (args) => <MainSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
