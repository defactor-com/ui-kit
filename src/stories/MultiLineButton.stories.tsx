import React from "react";
import { Story } from "@storybook/react";

import { MultiLineButton } from "../components/MultiLineButton";
import { IButton } from "../components/MultiLineButton/ButtonTypes";
import { Box, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";

const additionalStyles: React.CSSProperties = {
  border: "4px solid #7cd7ad",
};

export default {
  title: "MultiLineButton",
  component: MultiLineButton,
};

const Template: Story<IButton> = (args) => <MultiLineButton {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: (
<Box>
      <Typography variant="body2" fontWeight={700}>
        Claim
      </Typography>
      <Typography variant="caption">
        123
      </Typography>
    </Box>
  ),
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  variant: "contained",
  bgColor: "#26A66B",
  label: "Loading...",
  loader: <CircularProgress size={24} color="inherit" />,
  minBtnWidth: '156px' 
};