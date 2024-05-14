import React from "react";
import clsx from "clsx";

import closeIcon from "../../../public/assets/close-icon.svg";

import { IModal } from "./ModalTypes";

export const Modal = ({ isOpen, content, close, externalStyles }: IModal) => {
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
      {isOpen && <div onClick={close} className="drawer-container" />}
    </div>
  );
};
