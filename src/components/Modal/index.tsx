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
              src="https://raw.githubusercontent.com/defactor-com/ui-kit/20424e8bad5f6efb4217766dc57a2507954f5a9e/public/assets/close-icon.svg?token=AMGHX6NW77TFFAW5D72W4SDFU3SLY"
            />
          </div>
          {content}
        </div>
      )}
      {isOpen && <div onClick={close} className="drawer-container" />}
    </div>
  );
};
