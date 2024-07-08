import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainSidebar from '../components/MainSidebar';
import DashboardIcon from '../components/Icons/v2/dashboardIcon';
import MyWalletIcon from '../components/Icons/v2/myWalletIcon';
import MyTemplateIcon from '../components/Icons/v2/myTemplateIcon';
import NotificationsIcon from '../components/Icons/v2/notificationsIcon';
import ContactsIcon from '../components/Icons/v2/contactsIcon';


export default {
  title: 'V2/MainSidebar',
  component: MainSidebar,
  argTypes: {
    navLinkTextColor: { control: 'color' }, // Add control for navLinkTextColor
    iconsColor: { control: 'color' }, // Add control for iconsColor
  },
} as ComponentMeta<typeof MainSidebar>;

const Template: ComponentStory<typeof MainSidebar> = (args) => <MainSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  routes: [
    {
      text: 'Dashboard',
      path: '/dashboard',
      icon: DashboardIcon,
    },
    {
      text: 'MyWallet',
      path: '/wallet',
      icon: MyWalletIcon,
    },
    {
      text: 'MyTemplates',
      path: '/templates',
      icon: MyTemplateIcon,
    },
    {
      text: 'Notifications',
      path: '/notifications',
      icon: NotificationsIcon,
    },
    {
      text: 'Contacts',
      path: '/contacts',
      icon: ContactsIcon,
    },
  ],
  navLinkTextColor: '#000000', 
  iconsColor: '#000000', 
};