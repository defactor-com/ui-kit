import React, { ChangeEvent } from "react";

export type InputValue = string | number | readonly string[] | undefined;

export type IInput = {
  value: InputValue;
  setFormat?: boolean;
  type?: React.HTMLInputTypeAttribute | undefined;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

export const Input = ({ value, type, onChange, setFormat }: IInput) => {
  return (
    <div className="input-container">
      {setFormat ? (
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="input-field"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="input-field"
        />
      )}
      <span className="currency">USDC</span>
    </div>
  );
};
