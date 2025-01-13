import React from "react";
import { Story } from "@storybook/react";

import { MenuOption } from "../components/MenuOption";
import { MobileMenuV3 } from "../components/V3/MobileMenuV3";
import lendingIcon from "../../public/assets/lending.svg";
import poolsIcon from "../../public/assets/pools-logo.svg";
import assetsIcon from "../../public/assets/assets-logo.svg";
import engageIcon from "../../public/assets/engage-logo.svg";
import dashboardIcon from "../../public/assets/dashboard.svg";
import borrowingIcon from "../../public/assets/borrowing.svg";
import EnglishFlag from "../../public/assets/english-flag.svg";
import SpanishFlag from "../../public/assets/spanish-flag.svg";
import { LanguageSelector } from "../components/LanguageSelector";
import { IMenuMobileV3 } from "../components/V3/MobileMenuV3/MobileMenuTypes";

export default {
  title: "V3/MobileMenuV3",
  component: MobileMenuV3,
};

const sideBarItems = [
  {
    icon: dashboardIcon,
    text: "Dashboard",
    isSelected: true,
  },
  {
    icon: lendingIcon,
    isSelected: false,
    text: "Lending",
  },
  {
    icon: borrowingIcon,
    isSelected: false,
    text: "Borrowing",
  },
];

const appsData = [
  {
    url: "https://assets.defactor.dev/",
    logo: { src: assetsIcon, height: 21, width: 74 },
  },
  {
    url: "https://engage.defactor.com/dashboard",
    logo: { src: engageIcon, height: 21, width: 80 },
  },
];

const Template: Story<IMenuMobileV3> = (args) => {
  return <MobileMenuV3 {...args} />;
};

export const MobileMenuItem = Template.bind({});
MobileMenuItem.args = {
  appsData: appsData,
  languageSelector: (
    <LanguageSelector
      locale="en"
      t={() => {}}
      router={() => {}}
      pathname={() => {}}
      options={[
        {
          id: "en",
          flag: EnglishFlag,
        },
        {
          id: "es",
          flag: SpanishFlag,
        },
      ]}
    />
  ),
  languageLabel: "Language",
  menuOptions: (
    <div>
      {sideBarItems.map((data) => (
        <div key={data.text} style={{ width: "100%" }}>
          <MenuOption
            text={data.text}
            icon={data.icon}
            isSelected={data.isSelected}
            color={data.isSelected ? "#26A66B" : undefined}
          />
        </div>
      ))}
    </div>
  ),
  mainApp: { logo: { src: poolsIcon, height: 21, width: 53 }, url: "" },
};
