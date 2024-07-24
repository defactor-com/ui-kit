import React from "react";

import { LoaderApp } from "../components/LoaderApp";

export default {
  title: "Loader App",
  component: LoaderApp,
};

const Template = () => {
  return (
    <LoaderApp
      image={"https://pools-dev.defactor.dev/logos/iso-defactor-logo.svg"}
    />
  );
};

export const LoaderAppItem = Template.bind({});
