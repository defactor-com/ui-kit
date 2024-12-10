import React from "react";
import { Story } from "@storybook/react";

import EnglishFlag from "../../public/assets/english-flag.svg";
import SpanishFlag from "../../public/assets/spanish-flag.svg";

import { ILanguageSelector } from "../components/LanguageSelector/LanguageSelectorTypes";
import { LanguageSelectorV3 } from "../components/V3/LanguageSelectorV3";

export default {
  title: "V3/LanguageSelectorV3",
  component: LanguageSelectorV3,
};

const options = [
  {
    id: "en",
    flag: EnglishFlag,
  },
  {
    id: "es",
    flag: SpanishFlag,
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
