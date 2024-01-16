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
  image: "https://raw.githubusercontent.com/defactor-com/ui-kit/20424e8bad5f6efb4217766dc57a2507954f5a9e/public/assets/factr-icon.svg?token=AMGHX6LTTECR2URKUHFBIYLFU3SPI",
};
