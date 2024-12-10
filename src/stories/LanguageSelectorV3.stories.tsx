import React from "react";
import { Story } from "@storybook/react";

import UsaIcon from "../components/V3/LanguageSelectorV3/usaIcon";
import SpanishIcon from "../components/V3/LanguageSelectorV3/SpanishIcon";

import { ILanguageSelector } from "../components/LanguageSelector/LanguageSelectorTypes";
import { LanguageSelectorV3 } from "../components/V3/LanguageSelectorV3";

export default {
  title: "V3/LanguageSelectorV3",
  component: LanguageSelectorV3,
};

const options = [
  {
    id: "en",
    flag: UsaIcon,
  },
  {
    id: "es",
    flag: SpanishIcon,
  },
];

const Template: Story<ILanguageSelector> = (args) => {
  return <LanguageSelectorV3 {...args} />;
};

export const LanguageSelectorItem = Template.bind({});
LanguageSelectorItem.args = {
  locale: "en",
  pathname: () => {},
  router: () => {},
  t: () => {},
  options: options,
};
