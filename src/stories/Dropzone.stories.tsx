import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Dropzone, DropzoneProps } from "../components/Dropzone";
import themes from '../themes';

const theme = themes.lightTheme;

const meta: Meta = {
  title: "v2/FormElements/Dropzone",
  component: Dropzone,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    uploadText: { control: 'text' },
    dragText: { control: 'text' },
    fileTypesText: { control: 'text' },
    borderColor: { control: 'color' },
    textColor: { control: 'color' },
    iconColor: { control: 'color' },
    fileSizeLimitText: { control: 'text' },
    label: { control: 'text' },
  },
};

export default meta;

const Template: Story<DropzoneProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Dropzone {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  uploadText: "Upload a file",
  dragText: "or drag and drop",
  fileTypesText: "PDF, DOC, JPG up to ",
  fileSizeLimitText: "10MB",
  borderColor: "#d1d4d6",
  textColor: "#4B5563",
  iconColor: "#9CA3AF",
  label: "Label",
};
