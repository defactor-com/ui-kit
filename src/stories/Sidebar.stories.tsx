import React from "react"
import { Story } from "@storybook/react"

import { MenuOption } from "../components/MenuOption"
import { Sidebar, ISidebar } from "../components/Sidebar"
import walletIcon from '../../public/assets/wallet.svg'
import lendingIcon from '../../public/assets/lending.svg'
import dashboardIcon from '../../public/assets/dashboard.svg'
import borrowingIcon from '../../public/assets/borrowing.svg'

export default {
  title: "Sidebar",
  component: Sidebar,
};

const sideBarItems = [
  {
    text: "Dashboard",
    icon: dashboardIcon,
    isSelected: true,
  },
  {
    text: "Lending",
    icon: lendingIcon,
    isSelected: false,
  },
  {
    text: "Borrowing",
    icon: borrowingIcon,
    isSelected: false,
  },
  {
    text: "My Account",
    icon: walletIcon,
    isSelected: false,
  },

];

const Template: Story<ISidebar> = (args) => <Sidebar {...args} />;

export const SidebarItem = Template.bind({});
SidebarItem.args = {
  menuOptions: (
    <div className="flex-sidebar-story">
      {sideBarItems.map((data) => (
        <div key={data.text} style={{width: '100%'}}>
          <MenuOption
            text={data.text}
            icon={data.icon}
            isSelected={data.isSelected}
          />
        </div>
      ))}
    </div>
  ),
};
