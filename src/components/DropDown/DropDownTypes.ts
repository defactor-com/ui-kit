export interface IDropDownObject {
  placeholder: string;
  fontFamily?: string;
  options: Array<string>;
  onChange?(): void;
}
