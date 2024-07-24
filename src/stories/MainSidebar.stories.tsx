import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainSidebar } from "../components/MainSidebar";
import DashboardIcon from "../components/Icons/v2/dashboardIcon";
import MyWalletIcon from "../components/Icons/v2/myWalletIcon";
import MyTemplateIcon from "../components/Icons/v2/myTemplateIcon";
import NotificationsIcon from "../components/Icons/v2/notificationsIcon";
import ContactsIcon from "../components/Icons/v2/contactsIcon";
import themes from "../themes";
import { PathProvider } from "../components/MainSidebar/PathProvider";

const theme = themes.lightTheme;

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
    <PathProvider path={currentPath || sidebarProps.defaultPath || "/dashboard"}>
      <MainSidebar {...sidebarProps} />
    </PathProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  routes: [
    {
      text: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      text: "MyWallet",
      path: "/wallet",
      icon: MyWalletIcon,
    },
    {
      text: "MyTemplates",
      path: "/templates",
      icon: MyTemplateIcon,
    },
    {
      text: "Notifications",
      path: "/notifications",
      icon: NotificationsIcon,
    },
    {
      text: "Contacts",
      path: "/contacts",
      icon: ContactsIcon,
    },
  ],
  navLinkTextColor: theme.palette.text.primary,
  iconsColor: "#000000",
  activeTextColor: "#000000",
  activeIconColor: "#E0A225",
  notificationColor: "#D21A4D",
  notificationsCount: 1,
  hideOnBreakpoint: "sm",
  mainSidebarBgColor: theme.palette.primary.light,
  defaultPath: "/dashboard",
};
