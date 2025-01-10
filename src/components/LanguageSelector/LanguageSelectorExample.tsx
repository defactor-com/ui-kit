import React from "react";
import EnglishFlag from "/assets/english-flag.svg";
import SpanishFlag from "/assets/spanish-flag.svg";
import { LanguageSelector } from "../LanguageSelector";

export const LanguageSelectorExample: React.FC = () => {
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

  return (
    <LanguageSelector
      locale="en"
      pathname={() => {}}
      router={() => {}}
      t={() => {}}
      options={options}
    />
  );
};
