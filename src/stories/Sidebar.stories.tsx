import React from "react";
import { Story } from "@storybook/react";

import { MenuOption } from "../components/MenuOption";
import { Sidebar, ISidebar } from "../components/Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
};

const sideBarItems = [
  {
    icon: "https://ui-kit.defactor.dev/static/media/dashboard.c6657eac.svg",
    text: "Dashboard",
    isSelected: true,
  },
  {
    icon: "https://ui-kit.defactor.dev/static/media/lending.59e5eaed.svg",
    isSelected: false,
    text: "Lending",
  },
  {
    icon: "https://ui-kit.defactor.dev/static/media/borrowing.b18b9777.svg",
    isSelected: false,
    text: "Borrowing",
  },
  {
    icon: "https://ui-kit.defactor.dev/static/media/wallet.b04b2642.svg",
    text: "My Account",
    isSelected: false,
  },
];

const Template: Story<ISidebar> = (args) => <Sidebar {...args} />;

export const SidebarItem = Template.bind({});
SidebarItem.args = {
  menuOptions: (
    <div className="flex-sidebar-story">
      {sideBarItems.map((data) => (
        <div key={data.text} style={{ width: "100%" }}>
          <MenuOption
            text={data.text}
            icon={data.icon}
            isSelected={data.isSelected}
            color={data.isSelected ? "#26A66B" : undefined}
          />
        </div>
      ))}
    </div>
  ),
};
