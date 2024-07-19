import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomDropdown, AssetTypes } from '../components/CustomDropdown';

export default {
  title: 'V2/FormElements/CustomDropdown',
  component: CustomDropdown,
} as ComponentMeta<typeof CustomDropdown>;

const Template: ComponentStory<typeof CustomDropdown> = (args) => <CustomDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select Asset Type',
  placeholder: 'Choose...',
  menuItems: AssetTypes,
  tooltip: 'Select your asset type'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  ...Primary.args,
  value: 'NFT'
};
