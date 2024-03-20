import React, { ChangeEvent, useState } from "react";

export type InputValue = string | number | readonly string[] | undefined;

export type IInput = {
  value: InputValue;
  type?: React.HTMLInputTypeAttribute | undefined;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  setFormat?: boolean;
  precision?: number;
};

export const Input = ({
  value,
  type,
  onChange,
  setFormat,
  precision = -1,
}: IInput) => {
  const [inputValue, setInputValue] = useState<InputValue>(value);

  const addPrecision = (value: string, precision: number): string => {
    if (precision < 0) return value;
    const numero = parseFloat(value.replace(/[^0-9]/g, ""));
    const valuePrecision = numero / Math.pow(10, precision);
    return valuePrecision.toString();
  };

  const validateNumber = (number: string): string => {
    const values = number.split(".");
    const formattedValue = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (values.length > 1) {
      const finalValue = formattedValue.concat(".").concat(values[1]);
      return finalValue;
    } else return formattedValue;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let test = "";
    test = e.target.value.replace(/[^0-9.]/g, "");
    test = addPrecision(test, precision);
    test = validateNumber(test);
    setInputValue(test);
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
