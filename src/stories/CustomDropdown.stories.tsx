import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomDropdown, AssetTypes } from '../components/CustomDropdown';

export default {
  title: 'V2/FormElements/CustomDropdown',
  component: CustomDropdown,
} as ComponentMeta<typeof CustomDropdown>;

const Template: ComponentStory<typeof CustomDropdown> = (args) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return <CustomDropdown {...args} value={value} onChange={handleChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select Asset Type',
  placeholder: 'Choose...',
  menuItems: AssetTypes,
  tooltip: 'Select your asset type',
  onChange: (value: string) => console.log(`Selected value: ${value}`)
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
  value: '',
  onChange: () => { }
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  ...Primary.args,
  value: 'NFT',
  onChange: (value: string) => console.log(`Selected value: ${value}`)
};
