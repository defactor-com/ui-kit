import React from "react";
import { Story } from "@storybook/react";
import { MobileMenuV3 } from "../components/V3/MobileMenuV3";
import { IMenuMobileV3 } from "../components/V3/MobileMenuV3/MobileMenuTypes";
import { LanguageSelectorV3Example } from "../components/V3/LanguageSelectorV3/LanguageSelectorV3Example";
import { routes as sideBarItems } from "../components/MainSidebar/demoRoutes";
import { MenuOption } from "../components/MenuOption";

import poolsIcon from "../../public/assets/pools-logo.svg";
import assetsIcon from "../../public/assets/assets-logo.svg";
import engageIcon from "../../public/assets/engage-logo.svg";

export default {
  title: "V3/MobileMenuV3",
  component: MobileMenuV3,
};

interface RouteItem {
  text: string;
  icon: React.FC;
  path: string;
  public: boolean;
  isSelected?: boolean;
}

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

const Template: Story<IMenuMobileV3> = (args) => <MobileMenuV3 {...args} />;

const allRoutes = [...sideBarItems().firstRoutes, ...sideBarItems().secondRoutes]; 

export const MobileMenuItem = Template.bind({});
MobileMenuItem.args = {
  appsData: appsData,
  languageSelector: <LanguageSelectorV3Example />,
  languageLabel: "Language",
  menuOptions: (
    <div>
      {allRoutes.map((data: RouteItem) => (
        <div key={data.text} style={{ width: "100%" }}>
          <MenuOption
            text={data.text}
            icon={React.createElement(data.icon)}
            isSelected={false}
            color={"#26A66B"} 
          />
        </div>
      ))}
    </div>
  ),
  mainApp: { logo: { src: poolsIcon, height: 21, width: 53 }, url: "" },
};
