import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import {
  CustomTabsContainerV3,
  CustomTabsContainerProps,
  TabItem,
} from "../components/V3/CustomTabsContainerV3";
import { Trash04, Coins01 } from "@untitled-ui/icons-react";

export default {
  title: "V3/CustomTabsContainerV3",
  component: CustomTabsContainerV3,
} as Meta<CustomTabsContainerProps>;

const Template: StoryFn<CustomTabsContainerProps> = (args) => {
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
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
        <Coins01 />
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
        <Trash04 />
      </Box>
    ),
    tabsContent: (
      <Typography p={2}>
        This is the <strong>Archive</strong> tab content.
      </Typography>
    ),
  }
];

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  items: tabItems,
};
