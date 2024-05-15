import React from "react";

import { IInput } from "./InputTypes";

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
