import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MobileMenuV3 } from "../components/V3/MobileMenuV3";
import { PathProvider } from "../components/MainSidebar/PathProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import poolsIcon from "../../public/assets/pools-logo.svg";
import assetsIcon from "../../public/assets/assets-logo.svg";
import engageIcon from "../../public/assets/engage-logo.svg";
import { LanguageSelectorV3Example } from "../components/V3/LanguageSelectorV3/LanguageSelectorV3Example";
import { ConnectWalletButtonV3 } from "../components/V3/ConnectWalletButtonV3";

const theme = createTheme();

export default {
  title: "V3/MobileMenuV3",
  component: MobileMenuV3,
  argTypes: {
   
  },
} as ComponentMeta<typeof MobileMenuV3>;

interface MobileMenuV3StoryArgs extends React.ComponentProps<typeof MobileMenuV3> {
  currentPath?: string;
}

const Template: ComponentStory<typeof MobileMenuV3> = (args: MobileMenuV3StoryArgs) => {
  const { currentPath, ...menuProps } = args;
  return (
    <ThemeProvider theme={theme}>
      <PathProvider path={currentPath || menuProps.defaultPath || "/"}>
        <MobileMenuV3 {...menuProps} />
      </PathProvider>
    </ThemeProvider>
  );
};

const appsData = [
  {
    logo: { src: engageIcon, height: 21, width: 80 },
    url: "https://engage.defactor.com/dashboard",
  },
  {
    logo: { src: assetsIcon, height: 21, width: 74 },
    url: "https://assets.defactor.dev/",
  },
];

export const Default = Template.bind({});
Default.args = {
  mainApp: { logo: { src: poolsIcon, height: 21, width: 53 }, url: "" },
  appsData: appsData,
  languageLabel: "Language",
  languageSelector: <LanguageSelectorV3Example />,
 connectWalletBtn: <ConnectWalletButtonV3 />
};
