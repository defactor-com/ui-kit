import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MobileMenuV3 } from "../components/V3/MobileMenuV3";

import { PathProvider } from "../components/V3/MobileMenuV3/PathProvider";

export default {
  title: "V3/MobileMenuV3",
  component: MobileMenuV3,
  argTypes: {
    routes: { control: "object" },
    navLinkTextColor: { control: "color" },
    iconsColor: { control: "color" },
    activeTextColor: { control: "color" },
    activeIconColor: { control: "color" },
    notificationColor: { control: "color" },
    notificationsCount: { control: "number" },
    hideOnBreakpoint: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    mainSidebarBgColor: { control: "color" },
    currentPath: { control: "text" },
    defaultPath: { control: "text" },
  },
} as ComponentMeta<typeof MobileMenuV3>;

interface MainSidebarStoryArgs
  extends React.ComponentProps<typeof MobileMenuV3> {
  currentPath?: string;
}

const Template: ComponentStory<typeof MobileMenuV3> = (
  args: MainSidebarStoryArgs
) => {
  const { currentPath, ...sidebarProps } = args;
  return (
    <PathProvider path={currentPath || sidebarProps.defaultPath || "/"}>
      <MobileMenuV3 {...sidebarProps} />
    </PathProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  notificationsCount: 1,
  hideOnBreakpoint: "sm",
  defaultPath: "/",
};
