import React from "react";
import { Story } from "@storybook/react";

import factrIcon from "../../public/assets/factr-icon.svg";
import { PreviewProfile, IPreviewProfile } from "../components/PreviewProfile";

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
