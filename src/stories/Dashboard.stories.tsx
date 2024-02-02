import React, { ChangeEvent, useState } from "react";
import { Story } from "@storybook/react";

import { Dashboard, IDashboard } from "../components/Dashboard";

export default {
  title: "Dashboard",
  component: Dashboard,
};

const Template: Story<IDashboard> = (args) => {
  const [value, setValue] = useState<string | number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Dashboard {...args} value={value} onChange={handleChange} />;
};

export const DashboardItem = Template.bind({});
DashboardItem.args = {};
