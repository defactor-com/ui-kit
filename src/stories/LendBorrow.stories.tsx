import React, { ChangeEvent, useState } from "react";
import { Story } from "@storybook/react";

import { LendBorrow, ILendBorrow } from "../components/LendBorrow";

export default {
  title: "LendBorrow",
  component: LendBorrow,
};

const Template: Story<ILendBorrow> = (args) => {
  const [value, setValue] = useState<string | number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <LendBorrow
      {...args}
      value={value}
      precision={5}
      labelLend="Lend"
      labelBorrow="Borrow"
      onChange={handleChange}
    />
  );
};

export const LendBorrowItem = Template.bind({});
LendBorrowItem.args = {};
