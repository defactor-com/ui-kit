import React from "react";
import { Story } from "@storybook/react";
import { Box, Typography } from "@mui/material";

import { MobileList } from "../components/MobileList";
import { IMobileList } from "../components/MobileList/MobileListTypes";

export default {
  title: "MobileList",
  component: MobileList,
};

const Template: Story<IMobileList> = (args) => {
  return (
    <MobileList
      {...args}
      visiblePage={1}
      nextPage={() => {}}
      totalRowsNumber={22}
      rowsPageSelected={5}
      rowsPage={[5, 10, 15]}
      rowsNumberLabel="Rows per page:"
      handleSelectedRowsPage={() => {}}
    />
  );
};

const rows = [
  {
    header: (
      <Box>
        <Typography>HEADER</Typography>
      </Box>
    ),
    body: (
      <Box>
        <Typography>BODY</Typography>
      </Box>
    ),
    footer: (
      <Box>
        <Typography>FOOTER</Typography>
      </Box>
    ),
  },
  {
    header: (
      <Box>
        <Typography>HEADER</Typography>
      </Box>
    ),
    body: (
      <Box>
        <Typography>BODY</Typography>
      </Box>
    ),
    footer: (
      <Box>
        <Typography>FOOTER</Typography>
      </Box>
    ),
  },
];

export const MobileListItem = Template.bind({});
MobileListItem.args = {
  rows: rows,
};
