import React from "react";
import { Story } from "@storybook/react";

import {
  SmallProfileImage,
  ISmallProfileImage,
} from "../components/SmallProfileImage";

export default {
  title: "Small Profile Image",
  component: SmallProfileImage,
};

const Template: Story<ISmallProfileImage> = (args) => (
  <SmallProfileImage {...args} />
);

export const SmallProfileImageItem = Template.bind({});
SmallProfileImageItem.args = {
  image: "https://ui-kit.defactor.dev/static/media/factr-icon.6bf3a589.svg",
};
