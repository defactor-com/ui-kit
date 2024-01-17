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
    icon: "https://raw.githubusercontent.com/defactor-com/ui-kit/20424e8bad5f6efb4217766dc57a2507954f5a9e/public/assets/dashboard.svg?token=AMGHX6LJXN2XY6KTV4ZSJATFU3RGK",
    text: "Dashboard",
    isSelected: true,
  },
  {
    icon: "https://raw.githubusercontent.com/defactor-com/ui-kit/20424e8bad5f6efb4217766dc57a2507954f5a9e/public/assets/lending.svg?token=AMGHX6ISRRZNRYHFJ766GR3FU3RP2",
    isSelected: false,
    text: "Lending",
  },
  {
    icon: "https://raw.githubusercontent.com/defactor-com/ui-kit/20424e8bad5f6efb4217766dc57a2507954f5a9e/public/assets/borrowing.svg?token=AMGHX6PXQM6MECTE67UJBY3FU3RRW",
    isSelected: false,
    text: "Borrowing",
  },
  {
    icon: "https://raw.githubusercontent.com/defactor-com/ui-kit/20424e8bad5f6efb4217766dc57a2507954f5a9e/public/assets/wallet.svg?token=AMGHX6IHWBBIAABTKAIHORDFU3RUA",
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
            color={data.isSelected ? "#ffccff" : undefined}
          />
        </div>
      ))}
    </div>
  ),
};
