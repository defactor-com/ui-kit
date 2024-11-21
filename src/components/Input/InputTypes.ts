import { ChangeEvent } from "react";

export type InputValue = string | undefined;

export type IInput = {
  buttonsLabels: {
    max: string;
    min: string;
  };
  value: InputValue;
  maxOnclick?(): void;
  minOnclick?(): void;
  inputError?: string;
  fontFamily?: string;
  tokenSymbol?: string;
  colorMaxButton?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};
