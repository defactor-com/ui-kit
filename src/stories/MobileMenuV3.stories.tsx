import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MobileMenuV3 } from "../components/V3/MobileMenuV3";
import { PathProvider } from "../components/MainSidebar/PathProvider";

export default {
  title: "V3/MobileMenuV3",
  component: MobileMenuV3,
  argTypes: {
   
  },
} as ComponentMeta<typeof MobileMenuV3>;

interface MobileMenuV3StoryArgs extends React.ComponentProps<typeof MobileMenuV3> {
  currentPath?: string;
}

const Template: ComponentStory<typeof MobileMenuV3> = (args: MobileMenuV3StoryArgs) => {
  const { currentPath, ...menuProps } = args;
  return (
    <PathProvider path={currentPath || menuProps.defaultPath || "/"}>
      <MobileMenuV3 {...menuProps} />
    </PathProvider>
  );
};

export const Default = Template.bind({});
Default.args = {

};
