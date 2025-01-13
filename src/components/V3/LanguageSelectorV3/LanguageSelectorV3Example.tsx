import React, { useState } from "react";
import UsaIcon from "./usaIcon";
import SpanishIcon from "./SpanishIcon";
import { LanguageSelectorV3 } from ".";

export const LanguageSelectorV3Example: React.FC = () => {
  const [locale, setLocale] = useState("en");

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

  return (
    <LanguageSelectorV3
      locale={locale}
      options={options}
      router={() => {}}
      pathname="/"
      t={(key: string, { locale }: { locale: string }) => `${locale}`}
    />
  );
};
