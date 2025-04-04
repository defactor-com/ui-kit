import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Box, Typography, SxProps, Theme } from "@mui/material";
import {
  CustomTabsContainerV3,
  CustomTabsContainerProps,
  TabItem,
} from "../components/V3/CustomTabsContainerV3";
import { Trash04, Coins01 } from "@untitled-ui/icons-react";

const customTabSx: SxProps<Theme> = {
  fontSize: "14px",
  pr: 1,
  pl: 1,
};

interface StoryProps extends CustomTabsContainerProps {
  containerWidth?: string;
  tabSx?: SxProps<Theme>;
}

export default {
  title: "V3/CustomTabsContainerV3",
  component: CustomTabsContainerV3,
} as Meta<CustomTabsContainerProps>;

const Template: StoryFn<StoryProps> = ({
  containerWidth = "100%",
  ...args
}) => {
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: containerWidth, border: '1px solid #1EA7FD'}}>
      <CustomTabsContainerV3 {...args} value={value} onChange={handleChange} />
    </Box>
  );
};

const tabItems: TabItem[] = [
  {
    value: "1",
    label: "Positions",
    icon: (
      <Box mr={1}>
        <Coins01 width="20px" height="20px" color="#5a5beb" />
      </Box>
    ),
    tabsContent: (
      <Typography p={2}>
        This is the <strong>Positions</strong> tab content.
      </Typography>
    ),
  },
  {
    value: "2",
    label: "Archive",
    icon: (
      <Box mr={1}>
        <Trash04 width="20px" height="20px"/>
      </Box>
    ),
    tabsContent: (
      <Typography p={2}>
        This is the <strong>Archive</strong> tab content.
      </Typography>
    ),
  },
];

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  items: tabItems,
  containerWidth: "100%",
};

export const MobileTabs = Template.bind({});
MobileTabs.args = {
  items: tabItems,
  containerWidth: "400px",
  tabSx: customTabSx
};
