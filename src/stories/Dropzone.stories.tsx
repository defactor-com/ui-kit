import React from "react";
import { Meta, Story } from "@storybook/react";
import { Dropzone, DropzoneProps } from "../components/Dropzone";

const meta: Meta = {
  title: "v2/FormElements/Dropzone",
  component: Dropzone,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    uploadText: { control: "text" },
    dragText: { control: "text" },
    fileTypesText: { control: "text" },
    borderColor: { control: "color" },
    textColor: { control: "color" },
    iconColor: { control: "color" },
    fileSizeLimitText: { control: "text" },
    label: { control: "text" },
  },
};

export default meta;

const Template: Story<DropzoneProps> = (args) => <Dropzone {...args} />;

export const Default = Template.bind({});
Default.args = {
  uploadText: "Upload a file",
  dragText: "or drag and drop",
  fileTypesText: "PDF, DOC, JPG up to ",
  fileSizeLimitText: "10MB",
  label: "Label"
};
