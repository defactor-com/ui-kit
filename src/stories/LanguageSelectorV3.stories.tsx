import React, { useState } from "react";
import { Story } from "@storybook/react";

import { ILanguageSelector } from "../components/V3/LanguageSelectorV3/LanguageSelectorTypes";
import { LanguageSelectorV3 } from "../components/V3/LanguageSelectorV3";

export default {
  title: "V3/LanguageSelectorV3",
  component: LanguageSelectorV3,
};

const Template: Story<ILanguageSelector> = (args) => {
  const [localeText, setLocaleText] = useState(args.locale);

  const handleReplace = (path: string, options: any) => {
    setLocaleText(options.locale);
  };

  return (
    <LanguageSelectorV3
      {...args}
      locale={localeText}
      router={{
        replace: handleReplace,
      }}
    />
  );
};

export const LanguageSelectorItem = Template.bind({});
LanguageSelectorItem.args = {
  locale: "en",
  pathname: "/",
  router: () => {},
  t: (key: string, { locale }: { locale: string }) => `${locale}`
};
