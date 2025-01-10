import React, { useState } from "react";
import { LanguageSelectorV3 } from ".";

import EnglishFlag from "/assets/english-flag.svg";
import SpanishFlag from "/assets/spanish-flag.svg";

export const LanguageSelectorV3Example: React.FC = () => {
  const [localeText, setLocaleText] = useState("en");

  const handleReplace = (options: { locale: string }) => {
    setLocaleText(options.locale);
  };

  const languageOptions = [
    { id: "en", flag: EnglishFlag },
    { id: "es", flag: SpanishFlag },
  ];

  return (
    <LanguageSelectorV3
      locale={localeText}
      pathname="/"
      router={{
        replace: handleReplace,
      }}
      t={(key: string, { locale }: { locale: string }) => `${locale}`}
      options={languageOptions}
    />
  );
};