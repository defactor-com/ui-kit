import React from 'react';
import { Meta, Story } from '@storybook/react';
import TestThemesComponent, { TestThemesComponentProps } from '../components/TestThemesComponent'

export default {
  title: 'Example/TestThemesComponent',
  component: TestThemesComponent,
  argTypes: {
    title: { control: 'text' },
    primaryButtonLabel: { control: 'text' },
    secondaryButtonLabel: { control: 'text' },
  },
} as Meta;

const Template: Story<TestThemesComponentProps> = (args) => <TestThemesComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'MUI Themes Example',
  primaryButtonLabel: 'Primary Button',
  secondaryButtonLabel: 'Secondary Button',
};
