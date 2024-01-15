import React from "react";
import { Story } from "@storybook/react";

import {
  SmallProfileImage,
  ISmallProfileImage,
} from "../components/SmallProfileImage";
import factrIcon from "../../public/assets/factr-icon.svg";

export default {
  title: "Small Profile Image",
  component: SmallProfileImage,
};

const Template: Story<ISmallProfileImage> = (args) => (
  <SmallProfileImage {...args} />
);

export const SmallProfileImageItem = Template.bind({});
SmallProfileImageItem.args = {
  image: factrIcon,
};
