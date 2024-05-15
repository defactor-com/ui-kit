import React, { ChangeEvent, useState } from "react";
import { Story } from "@storybook/react";

import { Input } from "../components/Input";
import { IInput } from "../components/Input/InputTypes";

export default {
  title: "Input",
  component: Input,
};

const Template: Story<IInput> = (args) => {
  const [value, setValue] = useState<string | number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const InputItem = Template.bind({});
InputItem.args = {};
