import React, { useState } from "react";
import { Story } from "@storybook/react";

import { Modal } from "../components/Modal";
import { IModal } from "../components/Modal/ModalTypes";

export default {
  title: "Modal",
  component: Modal,
};

const Template: Story<IModal> = (args) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return <Modal {...args} isOpen={open} close={handleClose} />;
};

export const ModalItem = Template.bind({});
ModalItem.args = {
  content: (
    <div style={{ height: 100 }}>
      <span>Modal example</span>
    </div>
  ),
};
