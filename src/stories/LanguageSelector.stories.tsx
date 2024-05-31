import React from "react";
import { Story } from "@storybook/react";

import EnglishFlag from "../../public/assets/english-flag.svg";
import SpanishFlag from "../../public/assets/spanish-flag.svg";

import { LanguageSelector } from "../components/LanguageSelector";
import { ILanguageSelector } from "../components/LanguageSelector/LanguageSelectorTypes";

export default {
  title: "Language Selector",
  component: LanguageSelector,
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
  return <LanguageSelector {...args} />;
};

export const LanguageSelectorItem = Template.bind({});
LanguageSelectorItem.args = {
  locale: "en",
  pathname: () => {},
  router: () => {},
  t: () => {},
  options: options,
};
