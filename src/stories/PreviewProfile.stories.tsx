import React from "react";
import { Story } from "@storybook/react";

import factrIcon from "../../public/assets/factr-icon.svg";
import { PreviewProfile } from "../components/PreviewProfile";
import { IPreviewProfile } from "../components/PreviewProfile/PreviewProfileTypes";

export default {
  title: "PreviewProfile",
  component: PreviewProfile,
};

const Template: Story<IPreviewProfile> = (args) => <PreviewProfile {...args} />;

export const PreviewProfileItem = Template.bind({});
PreviewProfileItem.args = {
  label: "FACTR",
  image: factrIcon,
};
