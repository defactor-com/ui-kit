import React from "react";
import clsx from "clsx";

export interface IModal {
  close(): void;
  isOpen: boolean;
  externalStyles: string;
  content: React.ReactNode;
}

export const Modal = ({ isOpen, content, close, externalStyles }: IModal) => {
  return (
    <div>
      {isOpen && (
        <div className={clsx(externalStyles, "modal-dialog")}>
          <div className="header-container">
            <img
              onClick={close}
              alt="Close icon"
              className="close"
              src="https://ui-kit.defactor.dev/static/media/close-icon.1c50431a.svg"
            />
          </div>
          {content}
        </div>
      )}
      {isOpen && <div onClick={close} className="drawer-container" />}
    </div>
  );
};
