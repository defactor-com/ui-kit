import { ChangeEvent } from "react";

export type InputValue = string | number | readonly string[] | undefined;

export type IInput = {
  value: InputValue;
  setFormat?: boolean;
  type?: React.HTMLInputTypeAttribute | undefined;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};
