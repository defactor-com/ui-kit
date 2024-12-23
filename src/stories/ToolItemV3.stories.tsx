import React from 'react';
import { Story, Meta } from '@storybook/react';
import ToolItemV3, { ToolItemV3Props } from '../components/V3/ToolItemV3';
import poolsIcon from "../../public/assets/pools-logo.svg";


export default {
  title: 'V3/ToolItemV3',
  component: ToolItemV3,
  parameters: {
    layout: 'left',
  },
} as Meta;

const Template: Story<ToolItemV3Props> = (args) => <ToolItemV3 {...args} />;

export const DefaultToolItem = Template.bind({});
DefaultToolItem.args = {
  item: {
    url: 'https://example.com',
    logo: {
      src: poolsIcon, 
      width: 50,
      height: 50,
    },
  },
  index: 0,
};

