import React, { ChangeEvent, useState } from "react";

export type IInput = {
  value: string | number | readonly string[] | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  setFormat?: boolean;
};

export const Input = ({ value, type, onChange, setFormat }: IInput) => {
  const [inputValue, setInputValue] =
    useState<string | number | readonly string[] | undefined>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
    const formattedValue = sanitizedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setInputValue(formattedValue);
    onChange(e);
  };

  return (
    <div className="input-container">
      {setFormat ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
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
