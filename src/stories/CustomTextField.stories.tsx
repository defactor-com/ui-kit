import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomTextField } from "../components/CustomTextField";

export default {
  title: "V2/FormElements/CustomTextField",
  component: CustomTextField,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    tooltip: { control: "text" },
    suffix: { control: "text" },
    suffixColor: { control: "color" },
    disabled: { control: "boolean" },
    whiteBg: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "boolean" },
  },
} as ComponentMeta<typeof CustomTextField>;

const Template: ComponentStory<typeof CustomTextField> = (args) => (
  <CustomTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  value: "",
  tooltip: "Tooltip Text",
  suffix: "USDC",
  suffixColor: "#808080", //Temporarily until the designer updates the palette
  disabled: false,
  whiteBg: false,
  required: false,
  error: false,
};
