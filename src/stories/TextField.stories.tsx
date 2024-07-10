import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '../components/TextField';

export default {
  title: 'V2/FormElements/TextField',
  component: TextField,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    tooltip: { control: 'text' },
    suffix: { control: 'text' },
    disabled: { control: 'boolean' },
    whiteBg: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
  tooltip: 'This is a tooltip',
  suffix: 'Suffix',
  disabled: false,
  whiteBg: false,
  required: false,
  error: false,
};
