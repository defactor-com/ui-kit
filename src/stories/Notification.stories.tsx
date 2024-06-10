import React, { useState } from "react";
import { Story } from "@storybook/react";

import NotificationIcon from "../../public/assets/notification-icon.svg";
import NotificationActiveIcon from "../../public/assets/notification-active-icon.svg";
import { Notification } from "../components/Notification";
import { INotification } from "../components/Notification/NotificationTypes";

export default {
  title: "Notification",
  component: Notification,
};

const Template: Story<INotification> = (args) => {
  return (
    <Notification
      {...args}
      icon={NotificationIcon}
      activeIcon={NotificationActiveIcon}
    />
  );
};

export const NotificationItem = Template.bind({});
NotificationItem.args = {
  text: "This is a Notification",
};
