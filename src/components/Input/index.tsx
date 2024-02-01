import React, { ChangeEvent } from "react";

type IInput = {
  value: string | number | readonly string[] | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

export const Input = ({ value, type, onChange }: IInput) => (
  <div className="input-container">
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="input-field"
    />
    <span className="currency">USDC</span>
  </div>
);

export default Input;
