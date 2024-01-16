import React from "react";
import { Story } from "@storybook/react";

import { PreviewProfile, IPreviewProfile } from "../components/PreviewProfile";

export default {
  title: "PreviewProfile",
  component: PreviewProfile,
};

const Template: Story<IPreviewProfile> = (args) => <PreviewProfile {...args} />;

export const PreviewProfileItem = Template.bind({});
PreviewProfileItem.args = {
  label: "FACTR",
  image: "https://ui-kit.defactor.dev/static/media/factr-icon.6bf3a589.svg",
};
