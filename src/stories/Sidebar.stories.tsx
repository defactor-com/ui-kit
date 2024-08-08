import React from "react";
import { Story } from "@storybook/react";

import { Sidebar } from "../components/Sidebar";
import { MenuOption } from "../components/MenuOption";
import lendingIcon from "../../public/assets/lending.svg";
import poolsIcon from "../../public/assets/pools-logo.svg";
import assetsIcon from "../../public/assets/assets-logo.svg";
import engageIcon from "../../public/assets/engage-logo.svg";
import { ISidebar } from "../components/Sidebar/SidebarTypes";
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
];

const appsData = [
  {
    logo: { src: engageIcon, height: 21, width: 80 },
    url: "https://engage.defactor.com/dashboard",
  },
  {
    logo: { src: assetsIcon, height: 21, width: 74 },
    url: "https://assets.defactor.dev/",
  },
];

const Template: Story<ISidebar> = (args) => <Sidebar {...args} />;

export const SidebarItem = Template.bind({});
SidebarItem.args = {
  mainApp: { logo: { src: poolsIcon, height: 21, width: 53 }, url: "" },
  optionalStyles: additionalStyles,
  appsData: appsData,
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
