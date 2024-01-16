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
  image: "https://raw.githubusercontent.com/defactor-com/ui-kit/20424e8bad5f6efb4217766dc57a2507954f5a9e/public/assets/factr-icon.svg?token=AMGHX6LTTECR2URKUHFBIYLFU3SPI",
};
