import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainSidebar } from "../components/MainSidebar";

import { PathProvider } from "../components/MainSidebar/PathProvider";

export default {
  title: "V2/MainSidebar",
  component: MainSidebar,
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
} as ComponentMeta<typeof MainSidebar>;

interface MainSidebarStoryArgs
  extends React.ComponentProps<typeof MainSidebar> {
  currentPath?: string;
}

const Template: ComponentStory<typeof MainSidebar> = (
  args: MainSidebarStoryArgs
) => {
  const { currentPath, ...sidebarProps } = args;
  return (
    <PathProvider path={currentPath || sidebarProps.defaultPath || "/"}>
      <MainSidebar {...sidebarProps} />
    </PathProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  notificationsCount: 1,
  hideOnBreakpoint: "sm",
  defaultPath: "/"
};
