import React from "react";
import clsx from "clsx";

import closeIcon from "../../../public/assets/close-icon.svg";

import { IModal } from "./ModalTypes";

export const Modal = ({
  close,
  isOpen,
  content,
  externalStyles,
  showDrawer = true,
}: IModal) => {
  return (
    <div>
      {isOpen && (
        <div className={clsx(externalStyles, "modal-dialog")}>
          <div className="header-container">
            <img
              onClick={close}
              src={closeIcon}
              alt="Close icon"
              className="cursor-pointer"
            />
          </div>
          {content}
        </div>
      )}
      {isOpen && showDrawer && (
        <div onClick={close} className="drawer-container" />
      )}
    </div>
  );
};
