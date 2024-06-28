import React from "react";
import { Story } from "@storybook/react";

import { MenuOption } from "../components/MenuOption";
import adminIcon from "../../public/assets/admin-icon.svg";
import { Sidebar } from "../components/Sidebar";
import { ISidebar } from "../components/Sidebar/SidebarTypes";
import lendingIcon from "../../public/assets/lending.svg";
import dashboardIcon from "../../public/assets/dashboard.svg";
import borrowingIcon from "../../public/assets/borrowing.svg";

const additionalStyles: React.CSSProperties = {
  backgroundColor: "#fff",
};

export default {
  title: "Sidebar",
  component: Sidebar,
};

const sideBarItems = [
  {
    icon: dashboardIcon,
    text: "Dashboard",
    isSelected: true,
  },
  {
    icon: lendingIcon,
    isSelected: false,
    text: "Lending",
  },
  {
    icon: borrowingIcon,
    isSelected: false,
    text: "Borrowing",
  },
  {
    icon: adminIcon,
    text: "Admin Tools",
    isSelected: false,
  },
];

const Template: Story<ISidebar> = (args) => <Sidebar {...args} />;

export const SidebarItem = Template.bind({});
SidebarItem.args = {
  optionalStyles: additionalStyles,
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
